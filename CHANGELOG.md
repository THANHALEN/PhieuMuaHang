# Changelog

Version dạng `MAJOR.MINOR`, nguồn duy nhất: `VERSION` trong `phieu-mua-sw.js`. Mỗi release thêm một mục ở đầu file này.

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
