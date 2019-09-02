(function framework7ComponentLoader(e,a){void 0===a&&(a=!0);document,window;var t=e.$,r=(e.Template7,e.utils),n=(e.device,e.support),l=e.Class,i=(e.Modal,e.ConstructorMethods),s=(e.ModalMethods,function(e){function a(a,l){e.call(this,l,[a]);var i=this,s={el:null,inputEl:null,dual:!1,step:1,label:!1,min:0,max:100,value:0,draggableBar:!0,vertical:!1,verticalReversed:!1,formatLabel:null,scale:!1,scaleSteps:5,scaleSubSteps:0,formatScaleLabel:null,limitKnobPosition:"ios"===a.theme};i.useModulesParams(s),i.params=r.extend(s,l);var o=i.params.el;if(!o)return i;var u=t(o);if(0===u.length)return i;if(u[0].f7Range)return u[0].f7Range;var c,v=u.dataset();"step min max value scaleSteps scaleSubSteps".split(" ").forEach(function(e){void 0===l[e]&&void 0!==v[e]&&(i.params[e]=parseFloat(v[e]))}),"dual label vertical verticalReversed scale".split(" ").forEach(function(e){void 0===l[e]&&void 0!==v[e]&&(i.params[e]=v[e])}),i.params.value||(void 0!==v.value&&(i.params.value=v.value),void 0!==v.valueLeft&&void 0!==v.valueRight&&(i.params.value=[parseFloat(v.valueLeft),parseFloat(v.valueRight)])),i.params.dual||(i.params.inputEl?c=t(i.params.inputEl):u.find('input[type="range"]').length&&(c=u.find('input[type="range"]').eq(0)));var d=i.params,p=d.dual,g=d.step,h=d.label,f=d.min,m=d.max,b=d.value,y=d.vertical,S=d.verticalReversed,$=d.scale,E=d.scaleSteps,x=d.scaleSubSteps,R=d.limitKnobPosition;r.extend(i,{app:a,$el:u,el:u[0],$inputEl:c,inputEl:c?c[0]:void 0,dual:p,step:g,label:h,min:f,max:m,value:b,previousValue:b,vertical:y,verticalReversed:S,scale:$,scaleSteps:E,scaleSubSteps:x,limitKnobPosition:R}),c&&("step min max".split(" ").forEach(function(e){!l[e]&&c.attr(e)&&(i.params[e]=parseFloat(c.attr(e)),i[e]=parseFloat(c.attr(e)))}),void 0!==c.val()&&(i.params.value=parseFloat(c.val()),i.value=parseFloat(c.val()))),i.dual&&u.addClass("range-slider-dual"),i.label&&u.addClass("range-slider-label"),i.vertical?(u.addClass("range-slider-vertical"),i.verticalReversed&&u.addClass("range-slider-vertical-reversed")):u.addClass("range-slider-horizontal");var k=t('<div class="range-bar"></div>'),M=t('<div class="range-bar-active"></div>');k.append(M);var C='\n      <div class="range-knob-wrap">\n        <div class="range-knob"></div>\n        '+(i.label?'<div class="range-knob-label"></div>':"")+"\n      </div>\n    ",L=[t(C)];i.dual&&L.push(t(C)),u.append(k),L.forEach(function(e){u.append(e)});var V,W,T=[];i.label&&(T.push(L[0].find(".range-knob-label")),i.dual&&T.push(L[1].find(".range-knob-label"))),i.scale&&i.scaleSteps>1&&(V=t('\n        <div class="range-scale">\n          '+i.renderScale()+"\n        </div>\n      "),u.append(V)),r.extend(i,{knobs:L,labels:T,$barEl:k,$barActiveEl:M,$scaleEl:V}),u[0].f7Range=i;var w,H,P,F,z,A,B,K,X,Y,_,D={};function O(){B=!0}function q(e){if(!W&&(i.params.draggableBar||0!==t(e.target).closest(".range-knob").length)){var a;B=!1,D.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,D.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,"touchstart"===e.type&&(K=e.targetTouches[0].identifier),W=!0,w=void 0,H=u.offset(),P=H.left,F=H.top,i.vertical?(a=(D.y-F)/i.rangeHeight,i.verticalReversed||(a=1-a)):a=i.app.rtl?(P+i.rangeWidth-D.x)/i.rangeWidth:(D.x-P)/i.rangeWidth;var n=a*(i.max-i.min)+i.min;i.dual?Math.abs(i.value[0]-n)<Math.abs(i.value[1]-n)?(A=0,z=i.knobs[0],n=[n,i.value[1]]):(A=1,z=i.knobs[1],n=[i.value[0],n]):(z=i.knobs[0],n=a*(i.max-i.min)+i.min),r.nextTick(function(){W&&z.addClass("range-knob-active-state")},70),i.on("change",O),i.setValue(n,!0)}}function j(e){if(W){var a,t;if("touchmove"===e.type)for(var r=0;r<e.targetTouches.length;r+=1)e.targetTouches[r].identifier===K&&(a=e.targetTouches[r].pageX,t=e.targetTouches[r].pageY);else a=e.pageX,t=e.pageY;if(void 0!==a||void 0!==t)if(void 0!==w||i.vertical||(w=!!(w||Math.abs(t-D.y)>Math.abs(a-D.x))),w)W=!1;else{var n;e.preventDefault(),i.vertical?(n=(t-F)/i.rangeHeight,i.verticalReversed||(n=1-n)):n=i.app.rtl?(P+i.rangeWidth-a)/i.rangeWidth:(a-P)/i.rangeWidth;var l,s,o=n*(i.max-i.min)+i.min;if(i.dual)0===A?(l=o)>(s=i.value[1])&&(s=l):(s=o)<(l=i.value[0])&&(l=s),o=[l,s];i.setValue(o,!0)}}}function I(e){if("touchend"===e.type){for(var a,t=0;t<e.changedTouches.length;t+=1)e.changedTouches[t].identifier===K&&(a=!0);if(!a)return}if(!W)return w&&z.removeClass("range-knob-active-state"),void(W=!1);i.off("change",O),W=!1,z.removeClass("range-knob-active-state"),B&&i.$inputEl&&!i.dual&&i.$inputEl.trigger("change"),B=!1,void 0!==i.previousValue&&(i.dual&&(i.previousValue[0]!==i.value[0]||i.previousValue[1]!==i.value[1])||!i.dual&&i.previousValue!==i.value)&&(i.$el.trigger("range:changed",i,i.value),i.emit("local::changed rangeChanged",i,i.value))}function G(){i.calcSize(),i.layout()}return i.attachEvents=function(){var e=!!n.passiveListener&&{passive:!0};i.$el.on(a.touchEvents.start,q,e),a.on("touchmove",j),a.on("touchend:passive",I),a.on("tabShow",G),a.on("resize",G),(X=i.$el.parents(".sheet-modal, .actions-modal, .popup, .popover, .login-screen, .dialog, .toast")).on("modal:open",G),(Y=i.$el.parents(".panel")).on("panel:open",G),(_=i.$el.parents(".page").eq(0)).on("page:reinit",G)},i.detachEvents=function(){var e=!!n.passiveListener&&{passive:!0};i.$el.off(a.touchEvents.start,q,e),a.off("touchmove",j),a.off("touchend:passive",I),a.off("tabShow",G),a.off("resize",G),X&&X.off("modal:open",G),Y&&Y.off("panel:open",G),_&&_.off("page:reinit",G),X=null,Y=null,_=null},i.useModules(),i.init(),i}return e&&(a.__proto__=e),a.prototype=Object.create(e&&e.prototype),a.prototype.constructor=a,a.prototype.calcSize=function(){if(this.vertical){var e=this.$el.outerHeight();if(0===e)return;this.rangeHeight=e,this.knobHeight=this.knobs[0].outerHeight()}else{var a=this.$el.outerWidth();if(0===a)return;this.rangeWidth=a,this.knobWidth=this.knobs[0].outerWidth()}},a.prototype.layout=function(){var e,a=this,t=a.app,r=a.knobWidth,n=a.knobHeight,l=a.rangeWidth,i=a.rangeHeight,s=a.min,o=a.max,u=a.knobs,c=a.$barActiveEl,v=a.value,d=a.label,p=a.labels,g=a.vertical,h=a.verticalReversed,f=a.limitKnobPosition,m=g?n:r,b=g?i:l,y=g?h?"top":"bottom":t.rtl?"right":"left";if(a.dual){var S=[(v[0]-s)/(o-s),(v[1]-s)/(o-s)];c.css(((e={})[y]=100*S[0]+"%",e[g?"height":"width"]=100*(S[1]-S[0])+"%",e)),u.forEach(function(e,t){var r=b*S[t];if(f){var n=b*S[t]-m/2;n<0&&(r=m/2),n+m>b&&(r=b-m/2)}e.css(y,r+"px"),d&&p[t].text(a.formatLabel(v[t],p[t][0]))})}else{var $=(v-s)/(o-s);c.css(g?"height":"width",100*$+"%");var E=b*$;if(f){var x=b*$-m/2;x<0&&(E=m/2),x+m>b&&(E=b-m/2)}u[0].css(y,E+"px"),d&&p[0].text(a.formatLabel(v,p[0][0]))}a.dual&&v.indexOf(s)>=0||!a.dual&&v===s?a.$el.addClass("range-slider-min"):a.$el.removeClass("range-slider-min"),a.dual&&v.indexOf(o)>=0||!a.dual&&v===o?a.$el.addClass("range-slider-max"):a.$el.removeClass("range-slider-max")},a.prototype.setValue=function(e,a){var t,r,n=this,l=n.step,i=n.min,s=n.max;if(n.dual){r=[n.value[0],n.value[1]];var o=e;if(Array.isArray(o)||(o=[e,e]),e[0]>e[1]&&(o=[o[0],o[0]]),(o=o.map(function(e){return Math.max(Math.min(Math.round(e/l)*l,s),i)}))[0]===n.value[0]&&o[1]===n.value[1])return n;o.forEach(function(e,a){n.value[a]=e}),t=r[0]!==o[0]||r[1]!==o[1],n.layout()}else{r=n.value;var u=Math.max(Math.min(Math.round(e/l)*l,s),i);n.value=u,n.layout(),t=r!==u}return t&&(n.previousValue=r),t?(n.$el.trigger("range:change",n,n.value),n.$inputEl&&!n.dual&&(n.$inputEl.val(n.value),a?n.$inputEl.trigger("input"):n.$inputEl.trigger("input change")),a||(n.$el.trigger("range:changed",n,n.value),n.emit("local::changed rangeChanged",n,n.value)),n.emit("local::change rangeChange",n,n.value),n):n},a.prototype.getValue=function(){return this.value},a.prototype.formatLabel=function(e,a){return this.params.formatLabel?this.params.formatLabel.call(this,e,a):e},a.prototype.formatScaleLabel=function(e){return this.params.formatScaleLabel?this.params.formatScaleLabel.call(this,e):e},a.prototype.renderScale=function(){var e=this,a=e.app,t=e.verticalReversed,r=e.vertical?t?"top":"bottom":a.rtl?"right":"left",n="";return Array.from({length:e.scaleSteps+1}).forEach(function(a,t){var l=(e.max-e.min)/e.scaleSteps,i=e.min+l*t,s=(i-e.min)/(e.max-e.min);n+='<div class="range-scale-step" style="'+r+": "+100*s+'%">'+e.formatScaleLabel(i)+"</div>",e.scaleSubSteps&&e.scaleSubSteps>1&&t<e.scaleSteps&&Array.from({length:e.scaleSubSteps-1}).forEach(function(a,t){var s=l/e.scaleSubSteps,o=(i+s*(t+1)-e.min)/(e.max-e.min);n+='<div class="range-scale-step range-scale-substep" style="'+r+": "+100*o+'%"></div>'})}),n},a.prototype.updateScale=function(){if(!this.scale||this.scaleSteps<2)return this.$scaleEl&&this.$scaleEl.remove(),void delete this.$scaleEl;this.$scaleEl||(this.$scaleEl=t('<div class="range-scale"></div>'),this.$el.append(this.$scaleEl)),this.$scaleEl.html(this.renderScale())},a.prototype.init=function(){return this.calcSize(),this.layout(),this.attachEvents(),this},a.prototype.destroy=function(){var e=this;e.$el.trigger("range:beforedestroy",e),e.emit("local::beforeDestroy rangeBeforeDestroy",e),delete e.$el[0].f7Range,e.detachEvents(),r.deleteProps(e),e=null},a}(l)),o={name:"range",create:function(){var e=this;e.range=r.extend(i({defaultSelector:".range-slider",constructor:s,app:e,domProp:"f7Range"}),{getValue:function(a){void 0===a&&(a=".range-slider");var t=e.range.get(a);if(t)return t.getValue()},setValue:function(a,t){void 0===a&&(a=".range-slider");var r=e.range.get(a);if(r)return r.setValue(t)}})},static:{Range:s},on:{tabMounted:function(e){var a=this;t(e).find(".range-slider-init").each(function(e,t){return new s(a,{el:t})})},tabBeforeRemove:function(e){t(e).find(".range-slider-init").each(function(e,a){a.f7Range&&a.f7Range.destroy()})},pageInit:function(e){var a=this;e.$el.find(".range-slider-init").each(function(e,t){return new s(a,{el:t})})},pageBeforeRemove:function(e){e.$el.find(".range-slider-init").each(function(e,a){a.f7Range&&a.f7Range.destroy()})}},vnode:{"range-slider-init":{insert:function(e){var a=e.elm;this.range.create({el:a})},destroy:function(e){var a=e.elm;a.f7Range&&a.f7Range.destroy()}}}};if(a){if(e.prototype.modules&&e.prototype.modules[o.name])return;e.use(o),e.instance&&(e.instance.useModuleParams(o,e.instance.params),e.instance.useModule(o))}return o}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))