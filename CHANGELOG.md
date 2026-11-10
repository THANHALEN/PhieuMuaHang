# Changelog

Version dạng `MAJOR.MINOR`, nguồn duy nhất: `VERSION` trong `phieu-mua-sw.js`. Mỗi release thêm một mục ở đầu file này.

## 1.11 - 2026-11-10
- Preview A5: khung viền 1px sát mép, tỉ lệ cột 4/38/13/12/10/23, bảng màu mới (đỏ #991b1b, xanh #0284c7), tiêu đề cột "Thông tin hàng hóa" một dòng, dòng Tổng canh theo cột; chữ trong bảng cùng 11px, nội dung dài tự xuống dòng.

## 1.10 - 2026-11-10
- Preview A5: khung rộng sát mép; mọi chữ trong bảng cùng 11px (kể cả tiêu đề cột và STT); tiêu đề cột/tên dài tự xuống dòng thay vì bị cắt; dòng Tổng dùng một khối liền (đường đỏ không đứt); nhãn Người bán/NV Thu mua cùng cỡ tiêu đề bảng.

## 1.9 - 2026-11-10
- Preview A5: ngày giờ căn phải, bỏ NV thu mua ở dòng thông tin, tiêu đề cột "Thông tin hàng hóa", dòng Tổng canh theo cột; tên hàng/phân loại/người bán cùng cỡ 11px với số liệu.

## 1.8 - 2026-11-10
- Preview A5 đổi kiểu theo mẫu mới (tiêu đề đỏ sẫm, cột hàng hóa 3 dòng, tổng 2 vế); thêm ô Phân loại (không bắt buộc) cho dòng hàng, lưu trong items, hiện ở danh sách và bản in.

## 1.7 - 2026-11-10
- Nút thêm hàng hóa chỉ còn dấu + (có aria-label); thêm nút Test cạnh dấu + để thêm 3 dòng hàng mẫu vào phiếu đang nhập.

## 1.6 - 2026-11-10
- Bỏ nhãn chữ ở các nút thanh hành động dưới (màn chính và xem trước phiếu in), chỉ còn biểu tượng; thêm aria-label.

## 1.5 - 2026-11-10
- Chuẩn hóa cỡ chữ về thang cỡ chữ (12/13/13/13/14px) bằng biến CSS `--fs-*`, chữ to hơn dễ đọc trên điện thoại; bản in không đổi.

## 1.4 - 2026-11-07
- Dòng hàng hóa xếp nối tiếp từ đỉnh box (không còn giãn đều/căn giữa); nhiều dòng thì cuộn trong box, thêm hàng xong tự cuộn tới dòng mới.

## 1.3 - 2026-11-07
- Màn xem trước phiếu in: nút Tải PDF / In ngay chuyển xuống thanh hành động ở đáy, cùng kiểu và vị trí với màn chính.

## 1.2 - 2026-11-07
- Màn In phiếu có thanh trên cố định, cùng vị trí với màn chính (nút đóng ở góc phải), tính đúng vùng an toàn khi mở từ màn hình chính.
- Sửa safe-area phía trên bị cộng đôi ở màn chính.

## 1.1 - 2026-11-07
- Link cài nhanh: Cài đặt → Sao chép link cài nhanh; nhân viên mở link là có sẵn URL + Anon key.

## 1.0 - 2026-11-07
- Chuyển định dạng version từ `yyyyMMdd.HHmm` sang `MAJOR.MINOR`; pill trạng thái hiện `● v1.0`.
- Service worker không còn bị hỏng vì lỗi cache; tự cập nhật theo version trên host.
- Manifest dùng `id`, `start_url`, `scope` tuyệt đối.
