// Nguồn sự thật duy nhất của version (dạng MAJOR.MINOR, vd 1.0 -> 1.1). Đổi ở mỗi release -> cache + SW đổi -> client tự cập nhật
const VERSION='1.12';
const CACHE='phieu-mua-'+VERSION;
const BASE='/PhieuMuaHang/';
const SHELL=[BASE,BASE+'index.html',BASE+'phieu-mua.webmanifest',BASE+'icons/icon-192.png',BASE+'icons/icon-512.png'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).catch(()=>{})); // lỗi cache không được làm hỏng việc cài SW
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).catch(()=>{})
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('message',e=>{
  if(e.data==='SKIP_WAITING') self.skipWaiting();
  if(e.data==='GET_VERSION'&&e.ports&&e.ports[0]) e.ports[0].postMessage(VERSION);
});

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.hostname.includes('supabase.co')) return; // API: network only
  if(req.cache==='no-store'||url.pathname.endsWith('-sw.js')) return; // kiểm tra version: luôn đi thẳng ra host

  // Trang HTML: ưu tiên mạng (luôn lấy bản mới), offline thì dùng cache
  if(req.mode==='navigate'){
    e.respondWith(
      fetch(req,{cache:'no-cache'}).then(res=>{
        const copy=res.clone();
        caches.open(CACHE).then(c=>c.put(BASE,copy)).catch(()=>{});
        return res;
      }).catch(()=>caches.match(BASE).then(r=>r||caches.match(BASE+'index.html')).catch(()=>undefined))
    );
    return;
  }

  // Tài nguyên khác: stale-while-revalidate
  e.respondWith(
    caches.match(req).catch(()=>undefined).then(cached=>{
      const net=fetch(req).then(res=>{
        if(res.ok) caches.open(CACHE).then(c=>c.put(req,res.clone())).catch(()=>{});
        return res;
      }).catch(()=>cached);
      return cached||net;
    })
  );
});