document.getElementById("copyBtn").addEventListener("click", () => {
  const content = document.getElementById("contentArea").value;
  navigator.clipboard.writeText(content).then(() => {
    alert("📋 Copied to clipboard!");
  }).catch(err => {
    console.error("Copy failed:", err);
  });
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
    const candidates = Array.from(document.querySelectorAll("div"))
      .map(div => {
        const pList = div.querySelectorAll("p");
        const textContent = Array.from(pList).map(p => p.innerText.trim()).join("\n\n");
        return {
          element: div,
          pCount: pList.length,
          text: textContent
        };
      })
      .filter(c => c.pCount >= 3 && c.text.length > 100);
  
    if (!candidates.length) return "Không tìm thấy nội dung phù hợp.";
  
    // Chọn div chứa nhiều đoạn văn nhất
    candidates.sort((a, b) => b.pCount - a.pCount);
    return candidates[0].text;
  }
  
  