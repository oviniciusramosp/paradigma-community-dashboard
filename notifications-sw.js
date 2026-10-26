// Apenas notificações. Não armazena páginas nem dados privados do dashboard.
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick',event=>{
  event.notification.close();
  const destino=new URL('./',self.registration.scope).href;
  event.waitUntil((async()=>{
    const abertas=await self.clients.matchAll({type:'window',includeUncontrolled:true});
    const tab=abertas.find(c=>new URL(c.url).origin===self.location.origin&&new URL(c.url).pathname===new URL(destino).pathname);
    if(tab)return tab.focus();
    return self.clients.openWindow(destino);
  })());
});
