webpackJsonp([0],{"0DaX":function(t,e){},"3MeS":function(t,e){},AfAh:function(t,e){},AssA:function(t,e){},I3Cu:function(t,e){},MUFo:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"modal"}},[e("div",{attrs:{id:"center-content"}},[e("div",{attrs:{id:"center-content-inner"}},[e("div",{attrs:{id:"construction"}}),this._v(" "),e("div",{attrs:{id:"construction-text"}},[this._v("\n             Hi! This site is under construction currently so \n             some of the features might not be available. Please wait for a while and \n             come back to see the full site. Not gonna be long<3. Thanks!\n         ")]),this._v(" "),e("div",{attrs:{id:"ok-btn"}},[e("div",{attrs:{id:"ok"}},[this._v("OK")]),this._v(" "),e("div",{attrs:{id:"bg"}})])])])])}]};var r=i("VU/8")({name:"Modal",components:{}},o,!1,function(t){i("AfAh")},"data-v-7a7ae6d0",null).exports,a=i("+Uzz"),s=new n.a,d={name:"HomeNavigation",data:function(){return{navigationOptions:[{name:"PROJECTS",hover:!1,href:"#projects"},{name:"PORTFOLIO",hover:!1,href:"#portfolio"},{name:"ABOUT",hover:!1,href:"#about"},{name:"CONTACT",hover:!1,href:"#contact"}],resumeHover:!1,onHover:function(t){this.navigationOptions[t].hover=!this.navigationOptions[t].hover},navigationTapped:function(t){s.$emit("navigation-tapped",t)}}},mounted:function(){}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",{attrs:{id:"home-navigation"}},[i("ul",{attrs:{id:"home-navigation-list"}},[t._l(t.navigationOptions,function(e,n){return i("li",[i("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:e.href,expression:"item.href"}],on:{click:function(i){t.navigationTapped(e.name)},mouseover:function(e){t.onHover(n)},mouseleave:function(e){t.onHover(n)}}},[t._v(t._s(e.name))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.hover,expression:"item.hover"}],attrs:{id:"hover"}})])}),t._v(" "),i("li",[i("a",{attrs:{href:"/static/resume.pdf"},on:{mouseover:function(e){t.resumeHover=!t.resumeHover},mouseleave:function(e){t.resumeHover=!t.resumeHover}}},[t._v("RESUME")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.resumeHover,expression:"resumeHover"}],attrs:{id:"hover"}})])],2)])},staticRenderFns:[]};var l={name:"Home",components:{HomeNavigation:i("VU/8")(d,c,!1,function(t){i("AssA")},"data-v-ac35a37a",null).exports},data:function(){return{isMobile:!1,sectionTitle:"",keywords:["Artistic.","Sensitive.","Detail Oriented.","Latte.","Penrose triangle.","YC.","Introvert."],index:0,timer:null,hovered:!1,slideOut:function(){window.innerWidth>=600&&(this.hovered=!0,a.TweenMax.to("#left-text",.2,{x:"-500",opacity:"1"}),a.TweenMax.to("#right-text",.2,{x:"500",opacity:"1"}));this.timer=setInterval(this.getKeywordIndex(this),5e3)},slideIn:function(){window.innerWidth>=600&&(this.hovered=!1,a.TweenMax.to("#left-text",.2,{x:"0",opacity:"0"}),a.TweenMax.to("#right-text",.2,{x:"0",opacity:"0"})),clearInterval(this.timer),this.timer=null},getBackground:function(){return this.hovered||window.innerWidth<600?{background:"url(/static/me.jpeg) no-repeat center center",backgroundSize:"cover"}:{background:"url(/static/me-bw.jpeg) no-repeat center center"}},getKeywordIndex:function(t){return function(){t.index=Math.floor(Math.random()*t.keywords.length)}}}},computed:{word:function(){return this.timer||this.isMobile?this.keywords[this.index]:"Hover or scroll."}},mounted:function(){if(window.innerWidth>=600)this.sectionTitle="ABOUT YUJIA";else{this.sectionTitle="YUJIA CAO",this.isMobile=!0;this.timer=setInterval(this.getKeywordIndex(this),5e3)}},destroy:function(){window.innerWidth<600&&(clearInterval(this.timer),this.timer=null)}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"home"}},[i("div",{attrs:{id:"home-inner"},on:{mouseleave:function(e){t.slideIn()}}},[i("div",{staticClass:"sliding-component",attrs:{id:"left-text"}},[i("div",{attrs:{id:"left-text-inner"}},[t._v(t._s(t.sectionTitle))])]),t._v(" "),i("div",{attrs:{id:"center-content"}},[i("div",{style:t.getBackground(),attrs:{id:"img"},on:{mouseover:function(e){t.slideOut()}}}),t._v(" "),i("div",{attrs:{id:"words"}},[t._v(t._s(t.word))])]),t._v(" "),i("div",{staticClass:"sliding-component",attrs:{id:"right-text"}},[i("HomeNavigation",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}]}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isMobile,expression:"isMobile"}],attrs:{id:"mobile-right-text"}},[t._v("Engineer."),i("br"),t._v("Designer."),i("br"),t._v("Artist.")])],1)])])},staticRenderFns:[]};var u=i("VU/8")(l,v,!1,function(t){i("n8I7")},"data-v-41ec4a40",null).exports,m=[{name:"giveMe\nSomething",description:"A movie suggestion web app.","download-link":"","gitHub-link":"",image:"givemesomething.png",hover:!1},{name:"UWLife",description:"An accommodation platform for students. (coming soon stay tuned:P)","gitHub-link":"",image:"uwlife.png",hover:!1},{name:"myStat",description:"An browser extension for analytics.","gitHub-link":"",image:"mystat.png",hover:!1},{name:"colordoscope",description:"An intelligent image search engine.","download-link":"http://colordoscope.herokuapp.com","gitHub-link":"https://github.com/y77cao/Colordoscope",image:"colordoscope.png",hover:!1},{name:"fTodo",description:"A very cool minimalism design iOS todo app.","download-link":"","gitHub-link":"",image:"ftodo.png",hover:!1},{name:"personal site",description:"The thing you are looking at right now.","download-link":"","gitHub-link":"",image:"personalsite.png",hover:!1}],h=i("TVQ+"),p=(i("+5V6"),{name:"Projects",components:{},data:function(){return{show:!1,leftProjects:m.slice(0,3),rightProjects:m.slice(3)}},mounted:function(){var t=a.TweenMax.staggerFrom("#left-column div",.05,{x:"-1000px",ease:Elastic.easeIn},.02),e=a.TweenMax.staggerFrom("#right-column div",.05,{x:"1000px",ease:Elastic.easeIn},.02);new h.Scene({triggerElement:"#projects",duration:200}).setTween(t).addTo(this.$controller),new h.Scene({triggerElement:"#projects",triggerHook:.6,duration:200}).setTween(e).addTo(this.$controller)}}),g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"projects"}},[i("div",{attrs:{id:"bg2"}}),t._v(" "),t._m(0),t._v(" "),i("div",{attrs:{id:"left-column"}},[t._l(t.leftProjects,function(e,n){return i("div",{key:n,attrs:{id:"project-container"}},[i("div",{attrs:{id:"img-text-container"}},[i("img",{attrs:{id:"img",src:"/static/"+e.image}}),t._v(" "),i("div",{attrs:{id:"text"}},[i("div",{attrs:{id:"title"}},[t._v(t._s(e.name))]),t._v(" "),i("div",{attrs:{id:"description"}},[t._v(t._s(e.description))])])])])}),t._v(" "),i("div",{key:4,attrs:{id:"decoration-text"}},[t._v("See details on "),i("a",[t._v("Github")]),t._v(".")])],2),t._v(" "),i("div",{attrs:{id:"right-column"}},[t._m(1),t._v(" "),t._l(t.rightProjects,function(e,n){return i("div",{attrs:{id:"project-container"}},[i("div",{attrs:{id:"img-text-container"}},[i("img",{attrs:{id:"img",src:"/static/"+e.image}}),t._v(" "),i("div",{attrs:{id:"text"}},[i("div",{attrs:{id:"title"}},[t._v(t._s(e.name))]),t._v(" "),i("div",{attrs:{id:"description"}},[t._v(t._s(e.description))])])])])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"mobile-title"}},[e("div",{attrs:{id:"mobile-title-bg"}}),this._v(" "),e("div",{attrs:{id:"mobile-title-text"}},[this._v("PROJECTS")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"decoration-text"}},[e("div",{staticClass:"white",attrs:{id:"section-title"}},[this._v("Projects.")]),this._v(" "),e("div",{attrs:{id:"bg"}})])}]};var f=i("VU/8")(p,g,!1,function(t){i("3MeS")},"data-v-c98b85e4",null).exports,w={name:"Portfolio",components:{},mounted:function(){var t=(new a.TimelineMax).from("#ftodo",.05,{x:"-1000px",ease:Elastic.easeIn}).from("#section-title",.03,{x:"1000px",ease:Elastic.easeIn}).from("#supermath",.03,{x:"1000px",ease:Elastic.easeIn}).from("#schedulehero",.03,{x:"-1000px",ease:Elastic.easeIn});new h.Scene({triggerElement:"#portfolio",triggerHook:.7,duration:200}).setTween(t).addTo(this.$controller)}},_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"portfolio"}},[i("div",{attrs:{id:"section-title"}},[i("div",{attrs:{id:"bg"}}),t._v(" "),i("div",{attrs:{id:"text"}},[t._v("Portfolio.")])]),t._v(" "),i("div",{attrs:{id:"section-title-mobile"}},[i("div",{attrs:{id:"bg"}}),t._v(" "),i("div",{attrs:{id:"section-text"}},[t._v("PORTFOLIO")])]),t._v(" "),i("div",{attrs:{id:"ftodo"}},[i("div",{attrs:{id:"screenshot"}}),t._v(" "),i("div",{attrs:{id:"icon-title"}},[i("div",{attrs:{id:"icon"}},[i("img",{attrs:{id:"img",src:"/static/ftodo-green.png"}})]),t._v(" "),i("div",{attrs:{id:"title"}},[t._v("fTodo")])]),t._v(" "),i("div",{attrs:{id:"bg"}})]),t._v(" "),i("div",{attrs:{id:"supermath"}},[i("div",{attrs:{id:"icon-title"}},[i("div",{attrs:{id:"icon"}},[i("img",{attrs:{id:"img",src:"/static/supermath.png"}})]),t._v(" "),i("div",{attrs:{id:"title"}},[t._v("SuperMath")])]),t._v(" "),i("div",{attrs:{id:"screenshot"}}),t._v(" "),i("div",{attrs:{id:"bg"}})]),t._v(" "),i("div",{attrs:{id:"schedulehero"}},[i("div",{attrs:{id:"screenshot"}}),t._v(" "),i("div",{attrs:{id:"icon-title"}},[i("div",{attrs:{id:"icon"}},[i("img",{attrs:{id:"img",src:"/static/schedulehero.png"}})]),t._v(" "),i("div",{attrs:{id:"title"}},[t._v("ScheduleHero")])]),t._v(" "),i("div",{attrs:{id:"bg"}})])])}]};var b,x,y,k,T,E=i("VU/8")(w,_,!1,function(t){i("WYGU")},"data-v-7ab853e8",null).exports,M={canvas:!!window.CanvasRenderingContext2D,webgl:function(){try{var t=document.createElement("canvas");return!(!window.WebGLRenderingContext||!t.getContext("webgl")&&!t.getContext("experimental-webgl"))}catch(t){return!1}}(),workers:!!window.Worker,fileapi:window.File&&window.FileReader&&window.FileList&&window.Blob,getWebGLErrorMessage:function(){var t=document.createElement("div");return t.id="webgl-error-message",t.style.fontFamily="monospace",t.style.fontSize="13px",t.style.fontWeight="normal",t.style.textAlign="center",t.style.background="#fff",t.style.color="#000",t.style.padding="1.5em",t.style.width="400px",t.style.margin="5em auto 0",this.webgl||(t.innerHTML=window.WebGLRenderingContext?['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n"):['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")),t},addGetWebGLMessage:function(t){var e,i,n;e=void 0!==(t=t||{}).parent?t.parent:document.body,i=void 0!==t.id?t.id:"oldie",(n=M.getWebGLErrorMessage()).id=i,e.appendChild(n)}},I=i("Ml+6"),H=window.innerWidth,C=window.innerHeight,A=(window.innerWidth,window.innerHeight,0);function S(t){t.preventDefault();var e=t.clientX-A;t.clientY;A=t.clientX,t.clientY,function(t,e){y.rotation.y=(y.rotation.y+t/100)/1.2}(e)}function j(){requestAnimationFrame(j),x.render(T,k),H<600&&(y.rotation.y+=.003)}function O(){H=window.innerWidth,C=window.innerHeight,k.aspect=H/C,k.updateProjectionMatrix(),x.setSize(H,C)}var W={name:"About",components:{},mounted:function(){!function(){M.webgl||M.addGetWebGLMessage(),b=document.getElementById("canvas"),(k=new I.g(45,H/H,1,3e3)).position.set(1100,1100,1050),k.lookAt(new I.j(0,0,0)),k.aspect=H/C,k.updateProjectionMatrix(),(x=new I.k({canvas:b,antialias:!0,alpha:!0})).setPixelRatio(window.devicePixelRatio>1?2:1),x.setSize(b.offsetWidth,b.offsetHeight),T=new I.i,y=new I.f,T.add(y);var t,e=new I.e({color:16777215}),i=new I.a(400,112,96);(t=new I.c(i,e)).position.z=8,y.add(t),i=new I.a(80,96,400),(t=new I.c(i,e)).position.x=80*2.63,t.position.y=8,t.position.z=160,y.add(t),i=new I.a(80,440,64),(t=new I.c(i,e)).position.x=240,t.position.y=220,t.position.z=392,y.add(t);var n,o,r=new I.h(128,80/1.3,80);(n=new I.c(r,e)).position.set(384,486.4,496),y.add(n),r=new I.h(80/1.2,80/1.7,80),e=new I.d({color:16250871}),(n=new I.c(r,e)).position.set(416,546.4,500),y.add(n),(o=new I.b(13027014,1)).position.x=10,T.add(o),(o=new I.b(14079702,1)).position.y=10,T.add(o),(o=new I.b(9671571,1)).position.z=10,T.add(o);var a=new I.h(184,80/3,80),s=new I.d({color:0}),d=new I.c(a,s);d.position.set(390.4,440,500),d.rotation.z=2.5,y.add(d);var c=new I.h(80,16,80),l=new I.d({color:0}),v=new I.c(c,l);v.position.set(352,424,500),v.rotation.z=3.2,y.add(v);var u=new I.h(184,80/3,80),m=new I.d({color:0}),h=new I.c(u,m);h.position.set(80*5.69,452,500),h.rotation.z=2.5,y.add(h);var p=new I.h(144,16,80),g=new I.d({color:0}),f=new I.c(p,g);f.position.set(446.4,508.8,500),f.rotation.z=3.15,y.add(f);var w=new I.h(208,80/7,80),_=new I.d({color:0}),E=new I.c(w,_);E.position.set(589.6,480,500),E.rotation.z=4.03,y.add(E),H>=600&&(document.addEventListener("mousemove",S,!1),window.addEventListener("resize",O,!1))}(),j();var t=(new a.TimelineMax).from("#about-section-title",.05,{right:"-500px",ease:Elastic.easeIn},.05).from("#left",.05,{opacity:"0",ease:Elastic.easeIn},.02).from("#right",.05,{opacity:"0",ease:Elastic.easeIn},.02);new h.Scene({triggerElement:"#about",triggerHook:.5,duration:300}).setTween(t).addTo(this.$controller)}},P={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"about"}},[i("canvas",{attrs:{id:"canvas"}}),t._v(" "),i("div",{attrs:{id:"about-section-title"}},[i("div",{attrs:{id:"bg"}}),t._v(" "),i("div",{attrs:{id:"text"}},[t._v("About.")])]),t._v(" "),i("div",{attrs:{id:"section-title-mobile"}},[i("div",{attrs:{id:"bg"}}),t._v(" "),i("div",{attrs:{id:"section-text"}},[t._v("ABOUT")])]),t._v(" "),i("div",{attrs:{id:"text-container"}},[i("div",{attrs:{id:"left"}},[i("div",[t._v("\n        Hi, I am Yujia Cao.\n      ")]),t._v(" "),i("div",[t._v("\n        I am in my third year studying Computer Science at University of Waterloo. \n      ")]),t._v(" "),i("div",[t._v("\n        I am a software engineer focusing on user experience.\n      ")]),t._v(" "),i("div",[t._v("\n        I do product/UI/UX design on the side for interest. \n      ")])]),t._v(" "),i("div",{attrs:{id:"right"}},[i("div",[t._v("\n        In my spare time, I also create art works, look for inspirations, look for good food, drink a lot of latte, learn new things, travel random places, take photos, edit photos and drink a lot of latte...(did I just say latte twice?)\n      ")])])])])}]};var U={name:"Contact",components:{},data:function(){return{icons:[{name:"linkedin.png",url:"https://www.linkedin.com/in/yujia-cao-586363113/"},{name:"github.png",url:"https://github.com/y77cao"},{name:"pinterest.png",url:"https://www.pinterest.ca/y77cao/"},{name:"instagram.png",url:"https://www.instagram.com/501notimplemented/"},{name:"email.png",url:"mailto:yujiac8000@gmail.com"}]}},mounted:function(){var t=a.TweenMax.from("#info",.05,{opacity:"0"}),e=a.TweenMax.staggerFrom("#form-inner",.05,{left:"1000px",ease:Elastic.easeIn},.02);new h.Scene({triggerElement:"#contact",duration:300}).setTween(t).addTo(this.$controller),new h.Scene({triggerElement:"#contact",triggerHook:1,duration:300}).setTween(e).addTo(this.$controller)}},$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"contact"}},[e("div",{attrs:{id:"info"}},[e("div",{attrs:{id:"info-inner"}},[this._m(0),this._v(" "),e("div",{attrs:{id:"icons"}},[e("div",{attrs:{id:"icons-list"}},this._l(this.icons,function(t){return e("div",{style:{background:"url(/static/"+t.name+") no-repeat center center",backgroundSize:"cover"},attrs:{id:"icon-element"}},[e("a",{attrs:{href:t.url}})])}))])])]),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"text"}},[e("div",{attrs:{id:"hello-there"}},[this._v("GET IN"),e("br"),this._v("TOUCH!")]),this._v(" "),e("div",{attrs:{id:"text-description"}},[this._v("\n\t\t\t  \t Hey! Thank you for stopping by. Let me know how do you think about this website here ->"),e("br"),this._v(" Or feel free to check out links below <3\n\t\t\t   ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"form"}},[i("div",{attrs:{id:"form-inner"}},[i("div",{attrs:{id:"say-something"}},[t._v("Say something?")]),t._v(" "),i("form",{staticClass:"contact-form",attrs:{action:"https://formspree.io/yujiac8000@gmail.com",method:"POST"}},[i("input",{staticClass:"form-control name",attrs:{type:"text",name:"name",required:"",placeholder:"Name"}}),t._v(" "),i("input",{staticClass:"form-control email",attrs:{type:"email",name:"_replyto",required:"",placeholder:"Email"}}),t._v(" "),i("textarea",{staticClass:"form-control message",attrs:{name:"message",placeholder:"Message",required:"",rows:"4"}},[t._v("Hey! So I saw your personal site and...")]),t._v(" "),i("input",{attrs:{type:"submit",value:"Send",id:"send"}}),t._v(" "),i("input",{attrs:{type:"hidden",name:"_next",value:"./"}}),t._v(" "),i("input",{attrs:{type:"hidden",name:"_subject",value:"Contact from personal site"}}),t._v(" "),i("input",{attrs:{type:"hidden",name:"_format",value:"plain"}})]),t._v(" "),i("div",{attrs:{id:"result"}},[i("div",{attrs:{id:"fail"}},[t._v("Oops...something happened. Message sending failed.")]),t._v(" "),i("div",{attrs:{id:"success"}},[t._v("Got it. Thank you!")])]),t._v(" "),i("div",{attrs:{id:"bg"}})])])}]};var F={name:"Content",components:{Modal:r,Home:u,Projects:f,Portfolio:E,About:i("VU/8")(W,P,!1,function(t){i("MUFo")},"data-v-75b343fe",null).exports,Contact:i("VU/8")(U,$,!1,function(t){i("0DaX")},"data-v-37363cf1",null).exports},data:function(){return{showModal:!1}},mounted:function(){}},R={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"content"},on:{click:function(e){t.showModal=!1}}},[i("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}]}),t._v(" "),i("Home"),t._v(" "),i("Projects"),t._v(" "),i("Portfolio"),t._v(" "),i("About"),t._v(" "),i("Contact")],1)},staticRenderFns:[]};var G={name:"App",components:{Content:i("VU/8")(F,R,!1,function(t){i("i1Vt")},"data-v-39ee4120",null).exports},data:function(){return{}},mounted:function(){console.log("%cThank you for inspection.-YC","border-radius:4px;color:#fff;line-height:40px;padding:10px 32px;background:#000;")}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Content")],1)},staticRenderFns:[]};var z=i("VU/8")(G,L,!1,function(t){i("I3Cu")},null,null).exports,N=i("bm7V"),V=i.n(N);n.a.config.productionTip=!1,n.a.use(V.a,{container:"body",duration:500,easing:"ease",offset:0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),n.a.mixin({created:function(){this.$controller=new h.Controller},destroyed:function(){this.$controller.destroy()}}),new n.a({el:"#app",components:{App:z},template:"<App/>"})},WYGU:function(t,e){},i1Vt:function(t,e){},n8I7:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bd82b4ef7e1f9567e95c.js.map