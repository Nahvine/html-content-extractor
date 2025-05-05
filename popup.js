document.getElementById("copyBtn").addEventListener("click", () => {
    const content = document.getElementById("contentArea");
    content.select();
    document.execCommand("copy");
  });
  
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: extractSmartContent
    }, (results) => {
      const result = results?.[0]?.result || "Không tìm thấy nội dung phù hợp.";
      document.getElementById("contentArea").value = result;
    });
  });
  
  function extractSmartContent() {
    const elements = Array.from(document.querySelectorAll("p, div, span"));
    const classStats = {};
  
    elements.forEach(el => {
      const text = el.innerText?.trim();
      const className = el.className;
      if (text && text.length > 30 && className) {
        const cls = className.trim().split(/\s+/)[0]; // dùng class đầu tiên
        if (!classStats[cls]) {
          classStats[cls] = { count: 0, elements: [] };
        }
        classStats[cls].count++;
        classStats[cls].elements.push(el);
      }
    });
  
    // Tìm class có nhiều đoạn văn nhất
    let bestClass = null;
    let maxCount = 0;
    for (const cls in classStats) {
      if (classStats[cls].count > maxCount) {
        maxCount = classStats[cls].count;
        bestClass = cls;
      }
    }
  
    if (!bestClass || maxCount < 2) return "Không tìm thấy class phù hợp.";
  
    const finalElements = classStats[bestClass].elements;
    const resultText = finalElements.map(e => e.innerText.trim()).join("\n\n");
  
    return resultText;
  }
  