// 首先监听 notificationclick 事件：
self.addEventListener('notificationclick', function (e) {
  // 关闭通知
  e.notification.close();
  // 打开网页
  e.waitUntil(clients.openWindow(e.notification.data.url));
});
