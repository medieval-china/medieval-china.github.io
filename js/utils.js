(function ($) {
  'use strict';

  ZHAOO.utils = {
    debounce: function (func, wait, immediate) {
      var timeout;
      return function () {
        var context = this;
        var args = arguments;
        timeout && clearTimeout(timeout);
        if (immediate) {
          var callNow = !timeout;
          timeout = setTimeout(function () {
            timeout = null;
          }, wait);
          if (callNow) func.apply(context, args);
        } else {
          timeout = setTimeout(function () {
            func.apply(context, args);
          }, wait);
        }
      };
    },
    throttle: function (func, wait, options) {
      var timeout, context, args;
      var previous = 0;
      if (!options) options = {};
      var later = function () {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
      };
      var throttled = function () {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = now;
          func.apply(context, args);
          if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
        }
      };
      return throttled;
    },
    hasMobileUA: function () {
      var nav = window.navigator;
      var ua = nav.userAgent;
      var pa = /iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;
      return pa.test(ua);
    },
    isTablet: function () {
      return window.screen.width > 767 && window.screen.width < 992 && this.hasMobileUA();
    },
    isMobile: function () {
      return window.screen.width < 767 && this.hasMobileUA();
    },
    isDesktop: function () {
      return !this.isTablet() && !this.isMobile();
    },
    isDuringDate: function (beginDateStr, endDateStr) {
      var curDate = new Date(),
        beginDate = new Date(beginDateStr),
        endDate = new Date(endDateStr);
      if (curDate >= beginDate && curDate <= endDate) {
        return true;
      }
      return false;
    },
    // 是否是正则
    isRegExp: function(str) {
      return Object.prototype.toString.call(str) === '[object RegExp]';
    },
    includes: function(str, rules) {
      return rules.some(function(rule) {
        return ZHAOO.utils.isRegExp(rule) ? rule.test(str) : rule === str;
      })
    },
    isChristmas: function() {
      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDate();

      return month === 12 && day === 21;
    },
    todayString: function() {
      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      return month + '-' + day;
    },
    bindKeyup: function (code, fn) {
      $(document).keyup(function (e) {
        var key = e.which || e.keyCode;
        if (key == code) {
          fn();
        }
      });
    },
    parseUrl: function (query) {
      return query
        .replace(/^#|^\?/, '')
        .split('&')
        .reduce((sum, curr) => {
          var [key, value] = curr.split('=');
          if(key !== '') sum[key] = value;
          return sum;
        }, {});
    },
    getModeStorage: function() {
      var modeStorageKey = 'color-mode';
      return localStorage.getItem(modeStorageKey) || '';
    },
    setModeStorage: function (mode) {
      var modeStorageKey = 'color-mode';
      localStorage.setItem(modeStorageKey, mode);
    },
    setColorMode: function (mode) {
      var modeStorageKey = 'color-mode';
      var rootElement = document.documentElement;
      var htmlAttribute = 'color-mode';
      var self = this

      if(mode === void 0) {
        mode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(event){
          self.setColorMode()
        })       
      }

      rootElement.setAttribute(htmlAttribute, mode);
      this.setModeStorage(mode);
    },
  };

  ZHAOO.zui = {
    message: function ({ text, type, delay }) {
      var message = '<div class="zui-message ' + (type || 'info') + '"><p>' + text + '</p></div>';
      $('body').append(message);
      var e = $('.zui-message');
      e.ready(function () {
        e.addClass('in');
        setTimeout(function () {
          e.removeClass('in');
          e.on('transitionend webkitTransitionEnd', function () {
            $(this).remove();
          });
        }, delay || 3000);
      });
    },
    notification: function ({ title, content, type, delay }) {
      var storage = JSON.parse(localStorage.getItem('notification-closed'));
      if (storage && storage.indexOf(title) >= 0) return;
      var notification =
        '<div class="zui-notification ' +
        (type || 'info') +
        '"><span>' +
        title +
        '</span><p>' +
        content +
        '</p><i class="j-notification-close iconfont iconbaseline-close-px"></i></div>';
      $('body').append(notification);
      var e = $('.zui-notification');
      var close = $('.j-notification-close');
      e.ready(function () {
        e.addClass('in');
        setTimeout(function () {
          e.removeClass('in');
          e.on('transitionend webkitTransitionEnd', function () {
            $(this).remove();
          });
        }, delay || 3000);
        close.on('click', function () {
          e.removeClass('in');
          if (storage) {
            storage.indexOf(title) < 0 &&
              localStorage.setItem('notification-closed', JSON.stringify(storage.concat(title)));
          } else {
            localStorage.setItem('notification-closed', JSON.stringify([title]));
          }
        });
      });
    },
  };
})(jQuery);

class AsyncLimit {
  constructor(limit) {
    this.limit = Number(limit) || 2;
    this.pool = [];
    this.current = 0;
  }

  async run(fn) {
    if (!fn || typeof fn !== 'function') {
      throw new Error('Function error.');
    }
    if (this.current >= this.limit) {
      await new Promise((resolve) => this.pool.push(resolve));
    }
    return this._handleRun(fn);
  }

  async _handleRun(fn) {
    this.current++;
    try {
      return await fn();
    } catch (err) {
      return Promise.reject(err);
    } finally {
      this.current--;
      if (this.pool.length) {
        this.pool[0]();
        this.pool.shift();
      }
    }
  }
}
