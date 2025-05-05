# 📖 Smart Content Extractor - Chrome Extension

**Smart Content Extractor** is a lightweight Chrome extension that helps you extract structured article content (such as webnovels, blog posts, and stories) from web pages by intelligently identifying and collecting repeating text blocks. It's perfect for copying the full content of a chapter or article with just one click.

---

## 🚀 Features

- ✅ Automatically detects and selects the best HTML class containing content blocks.
- ✅ Works even when class names are inconsistent across websites.
- ✅ Supports `<p>`, `<div>`, and `<span>` content.
- ✅ One-click copy to clipboard.
- ✅ Clean and simple UI.

---

## 🧠 How It Works

Instead of relying on fixed class names like `MsoNormal`, this extension scans the page and:
1. Collects all elements with long visible text (`> 30 characters`).
2. Groups them by their CSS class names.
3. Picks the most repeated class as the main content container.
4. Combines all detected elements' text into a clean result.

---

## 🛠 How to Use

1. **Download or Clone** this repository.
2. Open Chrome and go to: `chrome://extensions`
3. Enable **Developer mode** (toggle at the top-right).
4. Click **"Load unpacked"** and select the extension folder.
5. Navigate to the webpage you want to extract content from.
6. Click the 📘 **Smart Content Extractor** icon in your toolbar.
7. The extracted content will appear in a textarea.
8. Click **Copy** to copy the full content to clipboard.

---

## 📂 File Structure
"""
smart-content-extractor/
├── manifest.json
├── popup.html
├── popup.js
└── README.md
"""

---

## 🔒 Permissions

- `activeTab`: Used to read the current page's content for extraction.
- `scripting`: Required to execute JavaScript within the current page context.

---

## 📝 Notes

- Best suited for structured web content (e.g., blogspot novels, serialized stories, documentation).
- This extension does not extract from paginated/iframe-heavy sites or PDF embeds.
- No data is collected or sent externally.

---

## 💡 Example Use Cases

- Extract full webnovel chapters from Blogger-based sites.
- Copy story content for offline reading or translation.
- Quickly save and organize reading material.

---

## 📬 Feedback

Have ideas, bugs, or suggestions? Feel free to open an issue or contribute!

