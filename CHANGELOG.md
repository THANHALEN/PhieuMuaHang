# Changelog

Version dạng `MAJOR.MINOR`, nguồn duy nhất: `VERSION` trong `phieu-mua-sw.js`. Mỗi release thêm một mục ở đầu file này.

## 1.0 - 2026-11-07
- Chuyển định dạng version từ `yyyyMMdd.HHmm` sang `MAJOR.MINOR`; pill trạng thái hiện `● v1.0`.
- Service worker không còn bị hỏng vì lỗi cache; tự cập nhật theo version trên host.
- Manifest dùng `id`, `start_url`, `scope` tuyệt đối.
