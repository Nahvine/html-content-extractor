# 📖 Smart Content Extractor - Chrome Extension

**Smart Content Extractor** là một Chrome Extension nhẹ và mạnh mẽ giúp bạn **trích xuất nội dung chính** (như truyện webnovel, blog, hoặc bài viết dài) từ các trang web một cách thông minh. Chỉ với một cú nhấp chuột, bạn có thể sao chép toàn bộ nội dung bài viết sạch sẽ và rõ ràng!

---

## 🚀 Features

- ✅ **Phân tích thông minh** để phát hiện khối nội dung chính (dựa trên cấu trúc thực tế chứ không phụ thuộc class cố định).
- ✅ Ưu tiên các `<div>` có nhiều đoạn `<p>` – thường là cấu trúc của blog hoặc chương truyện.
- ✅ Hoạt động tốt trên nhiều website có cấu trúc lộn xộn hoặc đặt tên class không chuẩn.
- ✅ Giao diện gọn gàng, thân thiện, chỉ cần 1 click để copy.
- ✅ Không thu thập dữ liệu người dùng, không cần đăng nhập.

---

## 🧠 How It Works

> 📌 Đây là phần nâng cấp mới:

1. Phân tích toàn bộ `<div>` trên trang.
2. Ưu tiên những khối `<div>` có nhiều đoạn `<p>` bên trong.
3. Lọc ra các đoạn văn dài (`> 30 ký tự`) để loại bỏ rác hoặc quảng cáo.
4. Gộp lại toàn bộ nội dung thành một đoạn văn sạch sẽ.
5. Hiển thị cho bạn trong một textarea để sao chép nhanh chóng.

---

## 🛠 How to Use

1. **Tải về hoặc clone** repo này.
2. Truy cập `chrome://extensions` trên trình duyệt Chrome.
3. Bật **Developer mode** (nút gạt góc phải trên cùng).
4. Nhấn **Load unpacked** và chọn thư mục chứa extension.
5. Vào trang web chứa nội dung bạn muốn trích xuất.
6. Click biểu tượng **📘 Smart Content Extractor** ở thanh công cụ trình duyệt.
7. Nội dung sẽ hiển thị trong khung hiển thị → Nhấn **Copy** để sao chép.

---

## 📂 File Structure

``` 
html-content-extractor/
├── manifest.json
├── popup.html
├── popup.js
├── content.js
└── README.md
```


---

## 🔒 Permissions

- `activeTab`: Để đọc nội dung trang đang xem.
- `scripting`: Để chạy đoạn script thông minh trong trang.
- `clipboardWrite`: Để hỗ trợ chức năng sao chép.

---

## 📌 Lưu ý

- Extension này hoạt động tốt nhất với nội dung dạng blog, webnovel, truyện chương, văn bản dài.
- Không hỗ trợ tốt các trang nhiều iframe, nội dung động, hoặc dạng PDF embed.
- Không gửi bất kỳ dữ liệu nào ra bên ngoài — hoàn toàn offline.

---

## 💡 Use Cases

- Trích xuất chương truyện từ blogspot / wordpress / các trang truyện.
- Copy nhanh nội dung cho dịch thuật, tóm tắt, lưu trữ offline.
- Học ngôn ngữ hoặc nghiên cứu nội dung từ các nguồn không cho copy dễ dàng.

---

## 📬 Feedback & Contribution

Gặp lỗi hoặc có ý tưởng nâng cấp? **Đóng góp issue** hoặc **pull request** luôn được hoan nghênh!

---

Made with ❤️ by devs who read too much.
