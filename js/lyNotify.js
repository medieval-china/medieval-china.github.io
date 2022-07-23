(function () {
  var lyNotify = {};

  // 注册Service Woker
  function install() {
    return new Promise(function (resolve, reject) {
      if ('serviceWorker' in navigator) {
        // 注册 Service Worker 获取 registration
        navigator.serviceWorker.register('/lyNotify.sw.js', { scope: './' }).then(
          function (registration) {
            self.registration = registration;
            if(registration.showNotification) {
              resolve(registration);
            } else {
              reject({ msg: 'Your browser showNotification are not suppoerted' });
            }
          },
          function (error) {
            reject({ msg: 'Service worker registration failed:', error: error });
          },
        );
      } else {
        reject({ msg: 'Service workers are not supported.' });
      }
    });
  }

  // 检验权限
  function getPermission() {
    return new Promise(function (resolve, reject) {
      if (Notification.permission === 'granted') {
        resolve('granted');
      }
      if (!('Notification' in window)) {
        reject('This browser does not support desktop notification');
      }
      Notification.requestPermission().then(function (permisson) {
        if (permisson === 'granted') {
          resolve(permisson);
        } else {
          reject(permisson);
        }
      }, reject);
    });
  }

  // 初始化方法
  function init() {
    return Promise.all([install(), getPermission()]);
  }

  // 过滤html
  function stripHtml(htmlStr) {
    const _html = htmlStr
      .replace(/<img(?:\s+[^>]*)?>(.*?)(<\/img\s*>)?/gi, '[图片评论]')
      .replace(/\n?\t?/gi, '')
      .replace(/<\s+(?:\s+[^>]*)?>(.*?)<\/\s+\s*>/gi, '')
      .replace(/<style(?:\s+[^>]*)?>(.*?)<\/style\s*>/gi, '')
      .replace(/<exclude-tag(?:\s+[^>]*)?>(.*?)<\/exclude-tag\s*>/gi, '');
    return _html.replace(/<[^>]*>/gi, '').replace(/(\s+)/gi, ' ');
  }

  // 提示
  function notify(title, optParams) {
    var defaultOptions = {
      icon: 'https://i.loli.net/2021/06/08/Dkgh3XHdLltwNKE.png',
    };
    var options = Object.assign({}, defaultOptions, optParams || {});

    return self.registration.showNotification(title, options);
  }

  lyNotify.init = init;
  lyNotify.getPermission = getPermission;
  lyNotify.stripHtml = stripHtml;
  lyNotify.notify = notify;

  window.lyNotify = lyNotify;
})();
