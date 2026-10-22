self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('notificationclick',function(e){e.notification.close();var u=(e.notification.data&&e.notification.data.url)||self.registration.scope;
e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(function(l){for(var c of l){if('focus' in c)return c.focus()}return self.clients.openWindow(u)}))});
