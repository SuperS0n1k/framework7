(function framework7ComponentLoader(t,e){void 0===e&&(e=!0);document;var R=window,X=t.$,Y=(t.Template7,t.utils),o=(t.device,t.support,t.Class,t.Modal),i=(t.ConstructorMethods,t.ModalMethods),n=function(B){function t(i,t){var e=Y.extend({on:{}},i.params.notification,t);B.call(this,i,e);var n=this;n.app=i,n.params=e;var o,a,s,c,l,r,u,f=n.params,p=f.icon,d=f.title,v=f.titleRightText,h=f.subtitle,m=f.text,g=f.closeButton,x=f.closeTimeout,y=f.cssClass,T=f.closeOnClick;if(n.params.el)o=X(n.params.el);else{var C=n.render({icon:p,title:d,titleRightText:v,subtitle:h,text:m,closeButton:g,cssClass:y});o=X(C)}if(o&&0<o.length&&o[0].f7Modal)return o[0].f7Modal;if(0===o.length)return n.destroy();Y.extend(n,{$el:o,el:o[0],type:"notification"}),o[0].f7Modal=n,g&&o.find(".notification-close-button").on("click",function(){n.close()}),o.on("click",function(t){g&&X(t.target).closest(".notification-close-button").length||(n.emit("local::click notificationClick",n),T&&n.close())}),n.on("beforeDestroy",function(){o.off("click")});var b,M={};function $(t){a||(s=!(a=!0),c=void 0,r=Y.now(),M.x="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,M.y="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY)}function k(t){if(a){var e="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,o="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY;if(void 0===c&&(c=!!(c||Math.abs(o-M.y)<Math.abs(e-M.x))),c)a=!1;else{t.preventDefault(),s||(n.$el.removeClass("notification-transitioning"),n.$el.transition(0),u=n.$el[0].offsetHeight/2),s=!0;var i=l=o-M.y;0<l&&(i=Math.pow(l,.8)),n.$el.transform("translate3d(0, "+i+"px, 0)")}}}function w(){if(a&&s){if(s=a=!1,0!==l){var t=Y.now()-r;n.$el.transition(""),n.$el.addClass("notification-transitioning"),n.$el.transform(""),(l<-10&&t<300||u/1<=-l)&&n.close()}}else s=a=!1}return n.on("open",function(){n.params.swipeToClose&&(n.$el.on(i.touchEvents.start,$,{passive:!0}),i.on("touchmove:active",k),i.on("touchend:passive",w)),X(".notification.modal-in").each(function(t,e){var o=i.notification.get(e);e!==n.el&&o&&o.close()}),x&&function t(){b=Y.nextTick(function(){a&&s?t():n.close()},x)}()}),n.on("close beforeDestroy",function(){n.params.swipeToClose&&(n.$el.off(i.touchEvents.start,$,{passive:!0}),i.off("touchmove:active",k),i.off("touchend:passive",w)),R.clearTimeout(b)}),n}return B&&(t.__proto__=B),((t.prototype=Object.create(B&&B.prototype)).constructor=t).prototype.render=function(){var t=this;if(t.params.render)return t.params.render.call(t,t);var e=t.params,o=e.icon,i=e.title,n=e.titleRightText,a=e.subtitle,s=e.text,c=e.closeButton;return('\n      <div class="notification '+(e.cssClass||"")+'">\n        <div class="notification-header">\n          '+(o?'<div class="notification-icon">'+o+"</div>":"")+"\n          "+(i?'<div class="notification-title">'+i+"</div>":"")+"\n          "+(n?'<div class="notification-title-right-text">'+n+"</div>":"")+"\n          "+(c?'<span class="notification-close-button"></span>':"")+'\n        </div>\n        <div class="notification-content">\n          '+(a?'<div class="notification-subtitle">'+a+"</div>":"")+"\n          "+(s?'<div class="notification-text">'+s+"</div>":"")+"\n        </div>\n      </div>\n    ").trim()},t}(o),a={name:"notification",static:{Notification:n},create:function(){this.notification=Y.extend({},i({app:this,constructor:n,defaultSelector:".notification.modal-in"}))},params:{notification:{icon:null,title:null,titleRightText:null,subtitle:null,text:null,closeButton:!1,closeTimeout:null,closeOnClick:!1,swipeToClose:!0,cssClass:null,render:null}}};if(e){if(t.prototype.modules&&t.prototype.modules[a.name])return;t.use(a),t.instance&&(t.instance.useModuleParams(a,t.instance.params),t.instance.useModule(a))}return a}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))