const CACHE='phieu-mua-v1';
const ASSETS=[
  '/PhieuMuaHang/',
  '/PhieuMuaHang/index.html',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap'
];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>{})));
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const url=new URL(e.request.url);
  // Supabase calls: network only
  if(url.hostname.includes('supabase.co')) return;
  e.respondWith(
    caches.match(e.request).then(cached=>{
      const net=fetch(e.request).then(res=>{
        if(res.ok) caches.open(CACHE).then(c=>c.put(e.request,res.clone())).catch(()=>{});
        return res;
      }).catch(()=>cached);
      return cached||net;
    })
  );
});
