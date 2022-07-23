(function ($) {
  "use strict";

  var fabTimer = null;

  var fn = {
    showMenu: function () {
      $(".menu").fadeIn(300);
      $("body").addClass("lock-screen");
      fn.hideFab();
      ZHAOO.utils.bindKeyup(27, function () {
        fn.hideMenu();
        $(".navbar").removeClass("hide");
      });
    },
    hideMenu: function () {
      $(".menu").fadeOut(300);
      $("body").removeClass("lock-screen");
    },
    showSearch: function () {
      $(".search").fadeIn(300);
      $(".search input").focus();
      $("body").addClass("lock-screen");
      fn.hideFab();
      $('.preview-overlay').fadeOut(300)
      ZHAOO.utils.bindKeyup(27, function () {
        fn.hideSearch();
        $(".navbar").removeClass("hide");
      });
    },
    hideSearch: function () {
      $(".search").fadeOut(300);
      $('.preview-overlay').fadeIn(300)
      $("body").removeClass("lock-screen");
    },
    activeFab: function () {
      $(".fab-up").addClass("fab-up-active");
      $(".fab-plus").addClass("fab-plus-active");
      $(".fab-comment").addClass("fab-comment-active");
      $(".fab-daovoice").addClass("fab-daovoice-active");
      $(".fab-tencent-chao").addClass("fab-tencent-chao-active");
      $(".fab-like").addClass("fab-like-active");
      $(".fab-plus").animate({ opacity: 1 }, 250)
    },
    freezeFab: function () {
      $(".fab-up").removeClass("fab-up-active");
      $(".fab-plus").removeClass("fab-plus-active");
      $(".fab-comment").removeClass("fab-comment-active");
      $(".fab-daovoice").removeClass("fab-daovoice-active");
      $(".fab-tencent-chao").removeClass("fab-tencent-chao-active");
      $(".fab-like").removeClass("fab-like-active");
      clearTimeout(fabTimer)
      fabTimer = setTimeout(() => {
        $(".fab-plus:not(.fab-plus-active)").animate({ opacity: 0.68 }, 1500)
      }, 2000);
    },
    showFab: function () {
      $(".fab").removeClass("fab-hide").addClass("fab-show");
    },
    hideFab: function () {
      $(".fab").addClass("fab-hide").removeClass("fab-show");
    },
    scroolFab: function () {
      var height = $(window).height();
      var scrollTop = $(window).scrollTop();
      if (scrollTop > height) {
        fn.showFab();
      } else {
        fn.freezeFab();
        fn.hideFab();
      }
    },
    scroolToTop: function () {
      $('body,html').animate({
        scrollTop: '0px'
      }, 800);
    },
    navbar: {
      mobile: function () {
        var before = $(window).scrollTop();
        var height = $(window).height();
        if (CONFIG.isHome) {
          $(".navbar").addClass("transparent");
        } else {
          $(".navbar").removeClass("transparent").removeClass('hide');
        }

        function handleScroll() {
          var after = $(window).scrollTop();
          if (!CONFIG.isHome) {
            if (before > after) {
              // 上滑
              $(".navbar").removeClass("hide");
            } else if (before < after && after > 300) {
              // 下滑大于300px
              $(".navbar").addClass("hide");
            }
          }
          if (CONFIG.isHome) {
            if(after < height - 100) {
              $(".navbar").addClass("transparent");
            } else {
              $(".navbar").removeClass("transparent");
            }
            if (before > after) {
              // 上滑
              $(".navbar").removeClass("hide");
            } else if (before < after && after > 300) {
              // 下滑大于300px
              $(".navbar").addClass("hide");
            }
          }
          before = after;
        }

        handleScroll()
        $(window).on("scroll", ZHAOO.utils.throttle(function () {
          handleScroll()
        }, 250));
      },
      desktop: function () {
        $(".navbar").addClass("transparent");
        function center() {
          if ($(window).scrollTop() > 60) {
            $(".navbar .center").addClass("hide");
          } else {
            $(".navbar .center").removeClass("hide");
            $(".navbar").removeClass("hide");
            if (!CONFIG.isHome) {
              // 非首页
              $(".navbar").removeClass("transparent");
            } else {
              // 首页
              $(".navbar").addClass("transparent");
              $(".navbar .pc-menu a").addClass('stroke')
            }
          }
        }
        center();
        var before = $(this).scrollTop();
        $(window).on("scroll", ZHAOO.utils.throttle(function () {
          center();
          var height = $(window).height();
          var after = $(this).scrollTop();
          if (before > after) {
            // 上滑
            $(".navbar").removeClass("hide");
            if(CONFIG.isHome) {
              if(after > height - 100) {
                $(".navbar").removeClass("transparent");
                $(".navbar .pc-menu a").removeClass('stroke')
              } else {
                $(".navbar").addClass("transparent");
                $(".navbar .pc-menu a").addClass('stroke')
              }
            }
          } else if (before < after && after > 100) {
            // 下滑并大于100px
            $(".navbar").addClass("hide");
          }
          before = after;
        }, 250));
      },
    },
    motto: function () {
      if(CONFIG.preview.motto.api === 'custom') {
        return;
      }
      if (CONFIG.preview.motto.api) {
        var data_contents = CONFIG.preview.motto.data_contents && JSON.parse(CONFIG.preview.motto.data_contents);
        $.get(CONFIG.preview.motto.api, function (result) {
          if (data_contents.length > 0) {
            data_contents.forEach(function (item) {
              result = result[item];
            });
          }
          if (result) {
            fn.printMotto(result);
          }
        });
      } else {
        fn.printMotto(CONFIG.preview.motto.default);
      }
    },
    printMotto: function (text, option) {
      option = option || {}
      if (CONFIG.preview.motto.typing) {
        if (text.charAt(text.length - 1) === '。') {
          text = text.substr(0, text.length - 1);
        }
        var i = 0;
        setTimeout(() => {
          var timer = setInterval(function () {
            if (i >= text.length) {
              clearInterval(timer);
            }
            $("#motto").text(text.slice(0, i++));
            $("#motto").attr('title', option ? option.title + ' ' + option.date : text);
            $("#motto").attr('data-href', option.path || '');
          }, 120);
        }, 260);
      } else {
        $("#motto").text(text);
      }
    },
    preloadImages: function(image) {
      var images = [];
      if(typeof image === 'string') {
        images = [image];
      } else if(Array.isArray(image)) {
        images = image;
      }
      images.forEach(function(url){
        var img = new Image();
        img.onload = function() {
          // console.log("图片加载好了.", url);
        }
        img.src = url;
      })
    },
    background: function () {
      if(CONFIG.preview.background.api === 'custom') {
        var localPosts = window.localPosts ? window.localPosts : [];
        var index = Math.floor(Math.random() * localPosts.length);
        var post = localPosts[index];
        if(!post) return;
        var imgUrl = post.image;

        var img = new Image();
        img.onload = function() {
          console.log("图片加载好了", imgUrl)
          $(".preview-image .loading-ani")
            .css({
              "background-image": "url(" + encodeURI(imgUrl) + ")",
            })
            .fadeIn(350);
            setTimeout(() => {
              $(".preview .preview-motto-wrapper .preview-motto")
                .css({
                  color: "#fff",
                  "text-shadow": "1px 1px 2px #333",
                })
            }, 520);
        }
        $('.preview-image .remark').html(post.title + '<br />' + '<small>' + post.date  + '</small>')
        fn.printMotto(post.excerpt, post)
        img.src = imgUrl;
      }
      else if(CONFIG.preview.background.api === 'local') {
        var localImages = window.siteData ? window.siteData.local_images : [];
        var index = Math.floor(Math.random() * localImages.length);
        var imgUrl = localImages[index];

        console.log('随机图片2:', index);
        var img = new Image();
        img.onload = function() {
          console.log("图片加载好了", imgUrl)
          $(".preview-image .loading-ani")
            .fadeIn(520)
            .css({
              "background-image": "url(" + imgUrl + ")",
            });
          $(".preview .preview-motto-wrapper .preview-motto")
            .css({
              color: "#fff"
            })
        
        }
        img.src = imgUrl;
      }
      // if (!CONFIG.preview.background.api) return;
      // $(".preview-image").css("background-image", "url(" + CONFIG.preview.background.api + ")");
    },
    doSearch: function (path, search_id, content_id) {
      // https://segmentfault.com/a/1190000011917419
      $.ajax({
        url: path,
        dataType: "xml",
        success: function (xmlResponse) {
          var datas = $("entry", xmlResponse).map(function () {
            return {
              title: $("title", this).text(),
              content: $("content", this).text(),
              url: $("url", this).text()
            };
          }).get();
          var $input = document.getElementById(search_id);
          var $resultContent = document.getElementById(content_id);

          function search() {
            var str = '<ul class=\"search-result-list\">';
            var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/);
            $resultContent.innerHTML = "";
            if (this.value.trim().length <= 0) {
              return;
            }
            datas.forEach(function (data) {
              var isMatch = true;
              var content_index = [];
              var data_title = data.title.trim().toLowerCase();
              var data_content = data.content.trim().replace(/<[^>]+>/g, "").toLowerCase();
              var data_url = data.url;
              var index_title = -1;
              var index_content = -1;
              var first_occur = -1;
              if (data_title != '' && data_content != '') {
                keywords.forEach(function (keyword, i) {
                  index_title = data_title.indexOf(keyword);
                  index_content = data_content.indexOf(keyword);
                  if (index_title < 0 && index_content < 0) {
                    isMatch = false;
                  } else {
                    if (index_content < 0) {
                      index_content = 0;
                    }
                    if (i == 0) {
                      first_occur = index_content;
                    }
                  }
                });
              }
              if (isMatch) {
                var titleWrapper = data_title
                keywords.forEach(function (keyword) {
                  var regS = new RegExp(keyword, "gi");
                  titleWrapper = titleWrapper.replace(regS, "<em class=\"search-keyword\">" + keyword + "</em>");
                })
                str += "<li><a href='" + data_url + "' class='search-result-title' target='_blank'>" + titleWrapper + "</a>";
                var content = data.content.trim().replace(/<[^>]+>/g, "");
                if (first_occur >= 0) {
                  var start = first_occur - 6;
                  var end = first_occur + 6;
                  if (start < 0) {
                    start = 0;
                  }
                  if (start == 0) {
                    end = 10;
                  }
                  if (end > content.length) {
                    end = content.length;
                  }
                  var match_content = content.substr(start, end);
                  keywords.forEach(function (keyword) {
                    var regS = new RegExp(keyword, "gi");
                    match_content = match_content.replace(regS, "<em class=\"search-keyword\">" + keyword + "</em>");
                  })
                  str += "<p class=\"search-result\">" + match_content + "...</p>"
                }
              }
            })
            $resultContent.innerHTML = str;
            $($resultContent).prepend('<div class="search-count-box">共找到<span> ' + $(".search-keyword").length +' </span>条结果</div>')
          }
          var debounceSearch = ZHAOO.utils.debounce(search, 500)

          $input.addEventListener('input', debounceSearch)
        }
      })
    }
  }

  var action = {
    smoothScroll: function () {
      // a[href *=#], area[href *=#]
      $(".smooth-scroll, .toc-link").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
          var $target = $(decodeURIComponent(this.hash));
          $target = $target.length && $target || $("[name=" + this.hash.slice(1) + "]");
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $("html,body").animate({
              scrollTop: targetOffset
            }, 500);
            location.hash = this.hash;
            return false;
          }
        }
      });
    },
    loading: function (duration) {
      $(".loading").delay(duration).fadeOut(350);
      $("body").removeClass("lock-screen");
      setTimeout(() => {
        Array.isArray(animations) && animations.forEach(anim => anim.destroy())
      }, duration + 1000);
    },
    fab: function () {
      $(".fab-plus").on("click", function () {
        if ($(this).hasClass("fab-plus-active")) {
          fn.freezeFab();
        } else {
          fn.activeFab();
        }
      });
      $(".fab-daovoice").on("click", function () {
        daovoice('openMessages');
      });
      $(".fab-up, .fab-daovoice, fab-tencent-chao").on("click", function () {
        fn.freezeFab();
      });
      if (CONFIG.fab.always_show) {
        fn.showFab();
      } else {
        $(window).scroll(fn.scroolFab);
      }
    },
    menu: function () {
      $(".menu-close").on("click", function () {
        fn.hideMenu();
        $(".navbar").removeClass("hide");
      });
      $(".menu .menu-container").on('click', function(e) {
        if($(e.target).attr('class') === 'menu-container') {
          fn.hideMenu();
          $(".navbar").removeClass("hide");
        }
      })
    },
    scroolToTop: function () {
      $(".fab-up").on("click", function () {
        fn.scroolToTop();
      })
    },
    scroolToComment: function () {
      var el = document.querySelector('.fab.fab-comment')
      $(el).on("click", function () {
        var commentEl = document.querySelector('.comments')

        commentEl && commentEl.scrollIntoView({ behavior: "smooth", block: 'start' })
      })
    },
    fancybox: function () {
      $(".fancybox").fancybox();
      $(".article .content img, .article .head img").each(function () {
        var e = document.createElement("a");
        $(e).attr("data-fancybox", "images");
        $(e).attr("href", $(this).attr("src"));
        $(this).wrap(e);
      });
    },
    pjax: function () {
      $(function () {
        $(document).pjax("a:not(.menu *)", '#main', {
          fragment: '#main',
          timeout: 6000
        });
      });
      $(document).on('pjax:complete', function () {
        CONFIG.fancybox && action.fancybox();
      });
    },
    donate: function () {
      $(".donate .icon").on("mouseover", function () {
        $("#qrcode-donate").show();
      });
      $(".donate .icon").children("a").on("mouseover", function () {
        $("#qrcode-donate img").attr('src', eval('CONFIG.donate.' + $(this).attr('id')))
      });
      $(".donate .icon").on("mouseout", function () {
        $("#qrcode-donate").hide();
      });
    },
    lazyload: function (opts) {
      opts = opts || {};
      var container= opts.container;
      var threshold= opts.threshold;
      $("img.lazyload").lazyload({
        container: container || window,
        effect: "fadeIn",
        threshold: threshold || 500,
        skip_invisible: false,
      });
    },
    fixLazyloadFancybox: function () {
      $(document).find('.article img[data-original]').each(function () {
        $(this).parent().attr("href", $(this).attr("data-original"));
      });
    },
    carrier: function () {
      $(".j-carrier-btn").on("click", ZHAOO.utils.throttle(function () {
        $(".j-carrier-data").select();
        document.execCommand("Copy");
        ZHAOO.zui.message({ text: '已复制到剪切板', type: 'success' });
      }, 1000));
    },
    navbar: function () {
      $(window).resize(ZHAOO.utils.throttle(function () {
        ZHAOO.utils.isDesktop() && fn.navbar.desktop();
        ZHAOO.utils.isMobile() && fn.navbar.mobile();
      }, 1000)).resize();
      $(".j-navbar-menu").on("click", function () {
        fn.showMenu();
        $(".navbar").addClass("hide");
        $(".qrcode").fadeOut(300);
      });
      $(".j-navbar-qrcode").on("click", function () {
        if ($("#qrcode-navbar").is(":hidden")) {
          $("#qrcode-navbar").fadeIn(300);
        } else {
          $("#qrcode-navbar").fadeOut(300);
        }
      });
      $(".j-navbar-back-home").on("click", function () {
        window.location.href = "/";
      });
      $(".j-navbar-search").on("click", function () {
        fn.showSearch();
        $(".navbar").addClass("hide");
        $(".qrcode").fadeOut(300);
      });
    },
    preview: function () {
      fn.background();
      fn.motto();
      setTimeout(function() {
        // window.siteData && fn.preloadImages(window.siteData.local_images || []);
      }, 1000)
    },
    qrcode: function () {
      if (CONFIG.qrcode.type === 'url') {
        $("#qrcode-navbar").qrcode({
          text: window.location.href,
          width: 150,
          height: 150
        });
      } else if (CONFIG.qrcode.type === 'image') {
        $("#qrcode-navbar").append('<img src="' + CONFIG.qrcode.image + '" alt="qrcode" />');
      }
    },
    toc: function () {
      var current = [];
      var titleList = new Map();
      $("article .content h1,h2,h3,h4,h5,h6").each(function () {
        var title = $(this).attr("id");
        var height = $(this).offset().top;
        titleList.set(height, title);
      });
      $(window).on("scroll", ZHAOO.utils.debounce(f, 500));
      function f() {
        var height = $(this).scrollTop() || $(window).scrollTop();
        for (var item of titleList) {
          if (item[0] >= height) {
            current = item;
            break;
          }
        }
        $(".toc-link").removeClass("active");
        $(".toc-link[href='#" + current[1] + "']").addClass("active");
      };
      f();
    },
    scrollbar: function () {
      var totalH = $(document).height();
      var clientH = $(window).height();
      $(window).on("scroll", ZHAOO.utils.debounce(f, 500));
      function f() {
        var validH = totalH - clientH;
        var scrollH = $(document).scrollTop();
        var height = scrollH / validH * 100;
        $(".j-scrollbar-current").css("height", height + '%');
      }
      f();
      $(".j-scrollbar").mousedown(function (e) {
        var scrollH = e.offsetY * totalH / 100;
        $("html,body").animate({ scrollTop: scrollH }, 300);
        $(document).mousemove(function (e) {
          var scrollH = (1 - ((clientH - e.clientY) / clientH)) * totalH;
          $("html,body").scrollTop(scrollH);
          $("html,body").css({ "user-select": "none", "cursor": "move" });
        });
        $(document).mouseup(function () {
          $(document).off('mousemove');
          $("html,body").css({ "user-select": "auto", "cursor": "default" });
        });
      });
    },
    notification: function () {
      if (!CONFIG.notification.list) return;
      var page_white_list = CONFIG.notification.page_white_list && JSON.parse(CONFIG.notification.page_white_list);
      var page_black_list = CONFIG.notification.page_black_list && JSON.parse(CONFIG.notification.page_black_list);
      var path = window.location.pathname;
      if ((page_white_list && page_white_list.indexOf(path) < 0) || (page_black_list && page_black_list.indexOf(path) >= 0)) return;
      var delay = CONFIG.notification.delay;
      var list = JSON.parse(CONFIG.notification.list);
      var playList = list.filter(function (item) {
        return item.enable && ZHAOO.utils.isDuringDate(item.startTime, item.endTime) && item;
      });
      playList.forEach(function (item) {
        ZHAOO.zui.notification({ title: item.title, content: item.content, delay: delay });
      });
    },
    search: function () {
      var path = CONFIG.search.path;
      if (!path) return;
      $(".search-close").on("click", function () {
        fn.hideSearch();
        $(".navbar").removeClass("hide");
      });
      $(".search").on('click', '.search-container', function(e) {
        if($(e.target).attr("class") === 'search-container') {
          fn.hideSearch();
          $(".navbar").removeClass("hide");
        }
      })
      fn.doSearch(path, 'search-input', 'search-output');
    },
    switchLayout: function() {
      var layoutKey = 'layout';
      var currLayout = localStorage.getItem(layoutKey) || 'grid';
      
      switch(currLayout) {
        case 'grid': {
          $(".container .list-layout").hide();
          $(".container .grid-layout").show();
          $(".container")
            .removeClass("list-layout")
            .addClass("grid-layout");
          $(".switch-box .gridBtn")
            .addClass("active")
            .siblings()
            .removeClass("active");
          break;
        }
        case 'list': {
          $(".container .grid-layout").hide();
          $(".container .list-layout").show();
          $(".container")
            .removeClass("grid-layout")
            .addClass("list-layout");
          $(".switch-box .listBtn")
            .addClass("active")
            .siblings()
            .removeClass("active");
          break;
        }
      }

      $(".switch-box .siwtch-layout-btn").on("click", function(e) {
        var top = $(window).scrollTop();
        if($(this).hasClass("gridBtn")) {
          localStorage.setItem(layoutKey, 'grid');
          $(".container")
            .removeClass("list-layout")
            .addClass("grid-layout");
          $(".container .grid-layout").fadeIn(300, function() {
          });
          $(".container .list-layout").fadeOut();
        }
        if($(this).hasClass("listBtn")) {
          localStorage.setItem(layoutKey, 'list');
          $(".container")
            .removeClass("grid-layout")
            .addClass("list-layout");
          $(".container .list-layout").fadeIn(300, function(){
            CONFIG.lazyload.enable && action.lazyload({
              container: $(".container .list-layout"),
              threshold: 500,
            });
          });
          $(".container .grid-layout").fadeOut();
        }
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active");
      })
    },

    extraAction: function() {
      const excludeCopyrightPage = ['/board/', '/references/', /lab/];
      if(ZHAOO.utils.includes(location.pathname, excludeCopyrightPage)) {
        var extraNode = document.querySelector(".article .wrap .main .extra")

        if(extraNode) {
          extraNode.style.display = "none"
        }
      };

      // 点击Motto跳转当天诗单
      var $motto = $('#motto')
      $motto.on('click', function() {
        var href = $motto.data('href')
        if(href) {
          window.open(href, '_blank')
        }
      })

      ZHAOO.utils.setColorMode('light')

      action.celebrate()

      // 放到最后
      if(ZHAOO.utils.getModeStorage() === 'dark') {
        document.querySelectorAll('#js_content  *').forEach(el => {
          var whiteColors = ['rgb(255, 255, 255)', '#fff', '#ffffff']
          var backgroundColor = el.style.backgroundColor
          if(whiteColors.includes(backgroundColor)) { 
            el.style.backgroundColor = 'var(--color-background)'
          }
        })
      }
    },

    celebrate() {
      var festivalCfg = {
        // 冬至
        '12-21': { action: action.snowing },
        // 平安夜
        '12-24': { action: action.snowing },
        // 圣诞
        '12-25': { action: action.snowing },
      }
      var cfg = festivalCfg[ZHAOO.utils.todayString()];

      if(cfg) {
        cfg.action && cfg.action()
      }
    },

    autoIframe: function() {
      var iframeOrigins = ['jinshuju.net']
      window.addEventListener('message', function(event){
        if(iframeOrigins.some(url => event.origin.indexOf(url) > -1)) {
          var data = event.data || {}
          if(data.event === "heightChanged") {
            document.querySelector('iframe').scrolling = "auto";
            document.querySelector('iframe').height = data.value;
            document.querySelector('iframe').style.height = data.value + "px";
          }
        }
      })
    },

    snowing: function() {
      var node = document.createElement('div')
      var height = Math.max(window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight)
      
      node.setAttribute('class', 'merry-christmas')
      node.setAttribute('id', 'merry-christmas')
      node.style.position = 'absolute'
      node.style.top = '0'
      node.style.left = '0'
      node.style.zIndex = '9999'
      node.style.pointerEvents = 'none'
      node.style.width = '100%'
      // node.style.height = '100%'
      node.style.height = height + 'px'

      document.body.appendChild(node)

      ZHAOO.utils.setColorMode('dark')

      function toRatio(arr) {
        var devicePixelRatio = window.devicePixelRatio || 1
        return arr.map(function(item) {
          return item * devicePixelRatio
        })
      }
    
      setTimeout(() => {
        window.Snow && new window.Snow('#merry-christmas', {
          image: ['/images/snow/snow.png'],
          vx: [-2, 2],
          vy: [1, 3],
          radius: toRatio([1, 12]),
        })
      }, 0);
    }
  }

  $(function () {
    action.smoothScroll();
    action.loading(window.loadingDuration || 500);
    action.fab();
    action.navbar();
    action.menu();
    action.scroolToTop();
    action.scroolToComment();
    action.preview();
    action.switchLayout();
    action.extraAction();
    action.autoIframe()
    CONFIG.fancybox && action.fancybox();
    CONFIG.pjax && action.pjax();
    CONFIG.lazyload.enable && action.lazyload();
    CONFIG.donate.enable && action.donate();
    (CONFIG.lazyload && CONFIG.fancybox) && action.fixLazyloadFancybox();
    CONFIG.carrier.enable && action.carrier();
    CONFIG.qrcode.enable && action.qrcode();
    CONFIG.toc.enable && action.toc();
    CONFIG.scrollbar.type === 'simple' && action.scrollbar();
    CONFIG.notification.enable && action.notification();
    if(CONFIG.search.enable) {
      setTimeout(function() {
        CONFIG.search.enable && action.search();
      }, 2000)
    }
  });

})(jQuery);
