"use strict";loaded_1_6(function(_){var window=this;
_.p("d6FVZd");

_.r();
_.p("yb08jf");
var ntd,otd;ntd=function(){var a=this;this.oa=[];this.Aa=1;var b=window;this.ji=b.ResizeObserver===void 0?void 0:new b.ResizeObserver(function(c){a.oI(c)})};otd=function(a,b,c){var d=a.Aa++;if(a.ji===void 0)return d;b=b instanceof _.up?b.toArray():[b];a.oa.push({key:d,elements:b,callback:c});b.forEach(function(e){a.ji.observe(e)});return d};
_.ptd=function(a,b){if(a.ji!==void 0){var c=a.oa.filter(function(d){return d.key===b}).flatMap(function(d){return d.elements});a.oa=a.oa.filter(function(d){return d.key!==b});c.filter(function(d){return!a.oa.flatMap(function(e){return e.elements}).includes(d)}).forEach(function(d){a.ji.unobserve(d)})}};ntd.prototype.pause=function(){this.ji!==void 0&&this.ji.disconnect()};ntd.prototype.resume=function(){var a=this;this.ji!==void 0&&this.oa.flatMap(function(b){return b.elements}).forEach(function(b){a.ji.observe(b)})};
ntd.prototype.oI=function(a){this.oa.forEach(function(b){var c=a.filter(function(d){return b.elements.includes(d.target)});c.length>0&&b.callback(c)})};_.cH=function(a){_.Fp.call(this,a.Ma);this.ji=new ntd};_.G(_.cH,_.Fp);_.cH.Ja=function(){return{}};_.qtd=function(a,b,c){return otd(a.ji,b,c)};_.cH.prototype.pause=function(){this.ji.pause()};_.cH.prototype.resume=function(){this.ji.resume()};_.uq(_.vQa,_.cH);
_.r();
_.p("KcokUb");
_.nUb=new _.me(_.Ipb);
_.r();
_.p("NoECLb");
var ZKg=function(a){_.Fp.call(this,a.Ma);this.ix=a.service.ix};_.G(ZKg,_.Fp);ZKg.Ja=function(){return{service:{ix:_.nUb}}};_.h=ZKg.prototype;_.h.isAvailable=function(){return this.ix.isAvailable()};_.h.xD=function(){return this.ix.xD()};_.h.Fk=function(a){return this.ix.Fk(a)};_.h.On=function(a){return this.ix.On(a)};_.h.KF=function(a){return this.ix.KF(a)};_.uq(_.Jpb,ZKg);
_.r();
_.p("hypYI");
_.Kpe=function(a){_.Fp.call(this,a.Ma);this.window=a.service.window.get();this.document=a.service.window.Dd()};_.G(_.Kpe,_.Fp);_.Kpe.Ja=function(){return{service:{window:_.Nu}}};_.Kpe.prototype.oa=function(){return this.document.documentElement.clientWidth/this.window.innerWidth};_.uq(_.snb,_.Kpe);
_.r();
_.rtd=function(a,b){return{wY:a,Znd:b}};_.std=_.zo("F8aUwf");_.ttd=_.zo("cFUGcd");_.utd=_.zo("Qk96Ab");_.vtd=_.zo("ojL58");_.wtd=_.zo("DSlWvf");_.xtd=_.zo("cPKAwe");_.ytd=_.zo("znUj3");_.ztd=_.zo("KZOHMb");_.Atd=_.zo("TvgVS");_.Btd=_.zo("pwISFb");_.Ctd=_.zo("jQntwf");_.Dtd=_.zo("DnYN3d");_.Etd=_.zo("U1nj3e");_.Ftd=_.zo("ICrPLb");_.Gtd=_.zo("iPWSJb");_.Htd=_.zo("ZVbNQe");_.Itd=_.zo("f2KIuf");_.Jtd=_.zo("D8UFDb");_.Ktd=_.zo("x5gMP");
var Mtd;Mtd=_.Ag().Dd().documentElement;_.Ltd=Mtd.requestFullscreen?"fullscreenchange":Mtd.webkitRequestFullscreen?"webkitfullscreenchange":Mtd.mozRequestFullScreen?"mozfullscreenchange":Mtd.msRequestFullscreen?"MSFullscreenChange":"fullscreenchange";_.Ntd=function(a){a=a?a.Dd():_.Ag().Dd();var b=a.body;return!!(b.webkitRequestFullscreen&&a.webkitFullscreenEnabled||b.mozRequestFullScreen&&a.mozFullScreenEnabled||b.msRequestFullscreen&&a.msFullscreenEnabled||b.requestFullscreen&&a.fullscreenEnabled)};
_.Otd=function(a,b){if(a.requestFullscreen)return a.requestFullscreen(b);if(a.webkitRequestFullscreen)return a.webkitRequestFullscreen();if(a.mozRequestFullScreen)return a.mozRequestFullScreen();if(a.msRequestFullscreen)return a.msRequestFullscreen()};_.Ptd=function(a){a=a?a.Dd():_.Ag().Dd();a.exitFullscreen?a.exitFullscreen():a.webkitCancelFullScreen?a.webkitCancelFullScreen():a.mozCancelFullScreen?a.mozCancelFullScreen():a.msExitFullscreen&&a.msExitFullscreen()};
_.Qtd=function(a){a=a?a.Dd():_.Ag().Dd();return!!(a.webkitIsFullScreen||a.mozFullScreen||a.msFullscreenElement||a.fullscreenElement)};
_.p("yGkNuf");
var Vtd,cud,Utd,Xtd;
_.dH=function(a){_.Fp.call(this,a.Ma);var b=this;this.Ya=0;this.Bb=null;this.Pa=void 0;this.Dc=this.rb=this.hh=this.Ga=this.oa=this.Wa=this.Oa=null;this.Cc=0;this.Wc=function(){var c=_.Rtd(b);c&&(b.oa.style.top=c.getBoundingClientRect().top+"px")};this.pga=function(){if(b.isInitialized()){var c=_.Rtd(b);if(c){var d;if((d=_.Std(b))!=null&&_.H(d,2)){if(_.Ttd()){d=_.Rtd(b).getBoundingClientRect().width;var e=b.oq.getConfig().size.height,f=Utd(b);d=Math.round(d/f);d>e&&(d=e);var g;(g=Vtd(b))==null||g.style.setProperty("border-radius",
"16px");c.style.borderRadius="16px";f<=1&&(d=Math.min(Math.round(e*.67),950));c.style.height=d+"px";f<=1&&(c.style.width=d*f+"px");b.oa.style.height=d+"px";b.oa.style.width=d*f+"px";b.oa.style.top=c.getBoundingClientRect().top+"px";b.oa.style.left=c.getBoundingClientRect().left+"px"}else{var k=b.fu()?b.kc:b.hc,l=(b.fu()?b.hc:b.kc)-52;g=b.fu();d=!g&&Utd(b)<=1?1.778:Utd(b);k=Math.round(k/d);k>l&&(k=l);g||(k*=.9);l=k;d*=k;c.style.height=l+"px";c.style.width=d+"px";if(c=_.Rtd(b))g?(b.oa.style.removeProperty("clip-path"),
(e=Vtd(b))==null||e.style.removeProperty("border-radius"),c.style.removeProperty("border-radius")):((f=Vtd(b))==null||f.style.setProperty("border-radius","16px"),c.style.borderRadius="16px");b.oa.style.left="50%";b.oa.style.transform="translate(-50%, 0)";b.oa.style.height=l+"px";b.oa.style.width=d+"px"}b.broadcast(_.Htd)}}}};this.Xa=function(){b.pga();b.fu()?(b.broadcast(_.Ktd,1),_.Wtd()&&_.Ntd(b.La)&&_.Qtd(b.La)&&(b.broadcast(_.Jtd),_.Ptd(b.La))):(b.broadcast(_.Ktd,2),!_.Ttd()&&_.Wtd()&&_.Ntd(b.La)&&
!_.Qtd(b.La)&&(b.broadcast(_.Itd),b.Ga&&Xtd(b.Ga)));_.Ytd()&&b.broadcast(_.Btd);Ztd(b)};this.oq=a.service.oq;this.Aa=a.service.window.get();this.La=new _.zj(this.Aa.document);this.Ea=this.Aa.matchMedia("(orientation: portrait)");this.Wu=a.service.Wu;this.kc=Math.min(this.Aa.innerWidth,this.Aa.innerHeight);this.hc=Math.max(this.Aa.innerWidth,this.Aa.innerHeight);this.Pb=function(){document.visibilityState==="hidden"&&b.broadcast(_.Ftd)}};_.G(_.dH,_.Fp);
_.dH.Ja=function(){return{service:{Wu:_.cH,oq:_.qv,window:_.Nu}}};_.Wtd=function(){return!1};_.Ttd=function(){return!1};_.Ytd=function(){return!1};Vtd=function(a){!a.Ga&&a.oa&&(a.Ga=a.oa.querySelector("[jsname=yxspve]"));a.Ga||(a.Ga=a.Aa.document.body.querySelector("[jsname=yxspve]"));return a.Ga};_.dH.prototype.fu=function(){return this.Ea.matches&&!_.Ttd()};
var Ztd=function(a){var b=_.Rtd(a);b&&(!(b=b.getBoundingClientRect())||b.width<=0||(b=b.top,a.fu()&&b<52&&(b=52),a.oa.style.top=b+"px",a.fu()||_.Ttd()||(a.oa.style.clipPath="inset("+(52-b)+"px 0 0 0)")))};_.dH.prototype.Hb=function(a){var b=this;this.hh=a;this.oa&&a.Aa(this).listen(function(){Ztd(b)})};_.dH.prototype.scrollTo=function(a){this.hh&&this.hh.scrollTo(a)};_.dH.prototype.kb=function(a){this.Oa=a};_.dH.prototype.qb=function(a){this.Pa=a};_.$td=function(){};
_.dH.prototype.isInitialized=function(){return!!this.oa&&!!this.oa.firstChild&&(!!this.Oa||!!this.Pa||!!this.rb)};_.Rtd=function(a){return a.Oa?a.Oa.querySelector("[jsname=Ehk02]")||null:null};_.aud=function(){};_.bud=function(){};cud=function(a,b){var c;a=(a==null?void 0:(c=a.Pd())==null?void 0:_.jh(c))||[];c=_.Zb(a);for(a=c.next();!a.done;a=c.next()){a=a.value;var d=void 0;if((d=a.Cb())==null?0:d.hasExtension(b))return a}};
_.Std=function(a){return a.Pa?(a=cud(a.Pa.xT(),_.ii),a?(a=cud(a,_.YD))?_.x(a.Cb().getExtension(_.YD),_.XD,4)||null:null:null):null};_.dH.prototype.broadcast=function(a,b){this.isInitialized()&&_.Yd.broadcast(this.oa,a,b)};_.dH.prototype.Hd=function(){if(this.isInitialized()){var a;(a=_.Std(this))!=null&&_.H(a,2)?(_.dud(this),this.pga()):_.eud(this)}};
_.dud=function(a){if(a.isInitialized()){var b=_.Rtd(a);if(b){var c,d=(c=_.Std(a))==null?void 0:_.H(c,2);if(d){document.addEventListener("visibilitychange",a.Pb);a.Ea.addEventListener?a.Ea.addEventListener("change",a.Xa):a.Ea.addListener&&a.Ea.addListener(a.Xa);_.Ttd()&&a.Aa.addEventListener("resize",a.pga);c=Utd(a);var e=b.getElementsByTagName("img")[0];c<=1&&e&&(e.style.display="none");e=_.Ap(b);var f;e=(e==null?void 0:(f=e.getData("ved"))==null?void 0:_.Ro(f))||null;a.broadcast(_.ytd,_.rtd({id:d||
void 0,aspectRatio:c},e||""));var g;f=a.broadcast;d={id:d||void 0,aspectRatio:c};c=((g=_.Std(a))==null?void 0:_.Se(g,3))||a.Cc||0;f.call(a,_.ztd,{wY:d,mR:c===void 0?0:c});a.oa.style.display="block";a.oa.style.height="";a.oa.style.position="fixed";a.oa.style.top=b.getBoundingClientRect().top+"px";a.oa.style.left=b.getBoundingClientRect().left+"px";a.oa.style.width=b.getBoundingClientRect().width+"px";a.oa.style.height=b.getBoundingClientRect().height+"px";a.oa.style.zIndex="1030"}}}};
_.dH.prototype.Pc=function(a){Utd(this)<=1&&a&&(a.style.height="764px")};
_.eud=function(a){if(a.isInitialized()){var b=_.Rtd(a);b&&(b.style.height="220px");document.removeEventListener("visibilitychange",a.Pb);a.Ea.removeEventListener?a.Ea.removeEventListener("change",a.Xa):a.Ea.removeListener&&a.Ea.removeListener(a.Xa);_.Ttd()&&a.Aa.removeEventListener("resize",a.pga);_.ptd(a.Wu.ji,a.Ya);a.Ya=0;a.broadcast(_.Ctd);a.broadcast(_.Gtd);a.Wa&&(_.Yd.broadcast(a.Wa,_.Ctd),a.Wa=null);a.oa.style.display="none";a.oa.style.removeProperty("clip-path")}};
Utd=function(a){var b;return(a=(b=_.Std(a))==null?void 0:_.Nk(b,1))?a:1.778};Xtd=function(a){(a=_.Otd(a,{navigationUI:"hide"}))&&a.catch(function(){})};_.uq(_.knb,_.dH);
_.Wtd=function(){return!0};
_.Ttd=function(){return!0};
_.r();
_.p("Ymry6");
var YKg=function(a){_.Fp.call(this,a.Ma);this.ix=a.service.ix};_.G(YKg,_.Fp);YKg.Ja=function(){return{service:{ix:_.MJ}}};_.h=YKg.prototype;_.h.isAvailable=function(){return this.ix.isAvailable()};_.h.xD=function(){return this.ix.xD()};_.h.Fk=function(a){var b=this;return _.Jh(function(c){return c.yield(b.ix.Fk(a),0)})};_.h.On=function(a){var b=this;return _.Jh(function(c){return c.yield(b.ix.On(a),0)})};_.h.KF=function(a){var b=this;return _.Jh(function(c){return c.yield(b.ix.KF(a),0)})};
_.uq(_.m3a,YKg);
_.r();
_.p("tH4IIe");
_.$Kg=new _.me(_.n3a);
_.r();
_.p("MnVV2d");
var nYl=function(a){(new _.Vf).listen(window,"pageshow",function(b){var c;!(c=b instanceof PageTransitionEvent&&b.persisted)&&(c=b instanceof _.Cp)&&(b=b.Ff,c=b instanceof PageTransitionEvent&&b.persisted);(c||window.performance&&window.performance.navigation&&window.performance.navigation.type===window.performance.navigation.TYPE_RELOAD)&&a()})};_.oYl=function(){};_.oYl.prototype.oa=function(){};_.pYl=function(a){_.Fp.call(this,a.Ma);var b=this;this.Fd=this.oa=null;this.Nf=a.service.Nf;this.Nf.isAvailable()&&nYl(function(){b.oa!=null&&(b.oa?b.Fk():b.On())})};_.G(_.pYl,_.Fp);_.pYl.Ja=function(){return{service:{Nf:_.$Kg}}};_.pYl.prototype.Fk=function(){this.Nf.isAvailable()&&(this.Nf.Fk(19),(new _.oYl).oa(),this.oa=!0)};_.pYl.prototype.On=function(){this.Nf.isAvailable()&&(this.Nf.On(19),(new _.oYl).oa(),this.oa=!1)};_.uq(_.cmb,_.pYl);
_.r();
_.p("qMBFFe");
_.e$l=function(a){_.Fp.call(this,a.Ma);this.oa=0;this.oq=a.service.viewport;this.Fh=a.service.window;this.Ea=a.service.vOc;this.Gp=a.service.config;this.hh=_.flc(this.Fh.get());this.document=this.Fh.get().document;this.Aa=_.Cj("SDsPCf")||this.document.querySelector("#gsr")};_.G(_.e$l,_.Fp);_.e$l.Ja=function(){return{service:{viewport:_.qv,window:_.Nu,vOc:_.pYl,config:_.sv}}};
_.e$l.prototype.Ga=function(a){a=a===void 0?null:a;if(!_.St(this.Gp.oa()))if(a){var b=this.Aa&&this.Aa.querySelector('[data-tbnid="'+a+'"] img.rg_i');!b&&a.startsWith("sv-")&&(b=this.Aa&&this.Aa.querySelector('[data-tbnid="'+a+'"] img'));b&&(a=_.qp(b),b=this.oq.getConfig().size.height,a.top&&(a.top+a.height>this.oa+b||a.top<this.oa)&&(this.oa=a.top-b/2+a.height/2),this.hh.oa.scrollTop=this.oa+_.mz())}else this.hh.oa.scrollTop=this.oa+_.mz()};_.e$l.prototype.Fk=function(){_.St(this.Gp.oa())||this.Ea.Fk()};
_.e$l.prototype.On=function(){_.St(this.Gp.oa())||this.Ea.On()};
_.f$l=function(a,b){var c=a.document.documentElement,d=a.document.body;if(!_.St(a.Gp.oa()))for(b?([c,d].forEach(function(e){return void _.gp(e,"overscrollBehaviorY","")}),_.gp(d,"overflow","")):([c,d].forEach(function(e){return void _.gp(e,"overscrollBehaviorY","none")}),_.gp(d,"overflow","hidden")),a=[].concat(_.Qh(a.document.querySelectorAll("#kO001e,#gsr,header")),[_.Cj("z1Vi9d"),_.Cj("Lj9fsd")]),a=_.Zb(a),c=a.next();!c.done;c=a.next())(c=c.value)&&_.gp(c,{visibility:b?"":"hidden"})};
_.uq(_.dmb,_.e$l);
_.e$l.prototype.Ga=function(){};
_.r();
_.JNe=function(a,b){this.open=a;this.close=b};_.G(_.JNe,_.k1d);
_.p("ZfBJ7b");
var Bam,Cam,Dam,Eam,Fam,Gam,Ham,Iam;_.ppc.prototype.ACa=_.ba(146,function(){_.Fz(this.state.xg,"uvpcot")});_.Gz.prototype.ACa=_.ba(145,function(a){var b;(b=this.oa.get(a))==null||b.ACa()});Bam=function(a){return _.Jh(function(b){if(b.oa==1)b=b.yield(a.Ea,2);else{var c=b.return;var d,e=(d=_.jkc(a))!=null?d:a.getScope((0,_.gkc)(4));if(!e)throw Error("Qe");b=c.call(b,e)}return b})};Cam=function(a){var b;return(b=a.Is)==null?void 0:_.F(b,11)};
Dam=function(a,b){typeof b!=="undefined"?a.state.xg.Fy("uvphct",b):_.Fz(a.state.xg,"uvphct");a.state.La=!0;a.state.Xa.resolve()};Eam=function(a,b){var c=a.oa.get(b);(c==null?0:c.state.xg.Aa.startTime!=null&&!c.state.Ea)?c.state.xg.Aa.startTime==null||c.state.Ea||(c.state.Ea=c.state.xg.Aa.elapsedTime()):a.oa.delete(b)};Fam=function(a,b){return(a=a.oa.get(b))?_.qcd(a):1};Gam=function(a,b){return _.Qg(a,7,b)};
Ham=function(a,b){a.window.visualViewport&&a.window.visualViewport.addEventListener("resize",b)};Iam=function(a){var b,c;return(c=(b=a.window.visualViewport)==null?void 0:b.pageLeft)!=null?c:0};
_.a8=function(a){_.Zh.call(this,a.Ma);var b=this;this.Ieb=this.ZHb=this.Caa=this.CE=null;this.window=a.service.window.get();this.document=a.service.window.Dd();this.chrome=a.service.chrome;this.Gp=a.service.config;this.IUa=a.service.sDa;this.pH=a.service.Aca;this.JN=a.service.Is;this.TQ=a.service.l2;this.Eb=a.service.Ub;this.cS=a.service.cS;this.fua=a.model.eua;this.fia=a.service.eqb;this.Ke=a.service.Ke;this.Ni=a.service.jE;this.Fd=null;this.ld=a.service.vd;this.pO=a.service.Pmb;this.wp=a.service.stream;
this.Jpa=a.service.hkb;this.Rm=a.service.Rm;this.CE=(new _.up([this.document])).find("[jsname=Z9MBEf]").el();this.WFa=a.service.visualViewport;this.zS=a.service.BP;this.Hk=a.service.overlay;(this.Dla=_.ymc&&!this.Ke.p1())||_.Yd.listen(this.window.document.body,_.Hqc,function(){b.CE&&b.ePa(b.CE)});_.F(this.Gp.oa(),83)&&(Jam(this),Ham(this.WFa,function(){Jam(b)}));_.yo(this,Promise.all([this.H_(),this.I_(),this.eYb()]))};_.G(_.a8,_.Zh);
_.a8.Ja=function(){return{service:{chrome:_.Jz,config:_.sv,Rm:_.Gz,l2:_.DU,Is:_.Vnc,hkb:_.aPl,sDa:_.ckc,Ub:_.Ry,vd:_.pz,cS:_.Hkc,Pmb:_.e$l,stream:_.lkc,eqb:_.ycd,Ke:_.rv,window:_.Nu,visualViewport:_.Kpe,jE:_.dH,Aca:_.hkc,BP:_.X9c,overlay:_.VJ},model:{eua:_.xfc}}};_.a8.prototype.H_=function(){return _.Jh(function(a){_.vi(a)})};_.a8.prototype.I_=function(){return _.Jh(function(a){_.vi(a)})};
_.a8.prototype.eYb=function(){var a=this;return _.Jh(function(b){if(b.oa==1)return a.CE?b.yield(Kam(a,Lam(a.CE)),3):b.ub(0);a.Caa=b.Aa;_.vi(b)})};_.a8.prototype.rM=function(){return this.TQ.rM(this.getRoot().el())};var Lam=function(a){a=new _.wp(a);a.wc("jsname")!=="Z9MBEf"&&(a=_.yp(a,"Z9MBEf").first());if(!a)throw Error("eo");return a};_.a8.prototype.M$a=function(a){var b=this.zS,c=a.data.Pk(),d=this.gH();a=a.data.Cl();_.Y9c(b,c,d,a)};
_.a8.prototype.mSc=function(a){var b=this,c,d,e,f,g,k,l,m,n,q,v,w,y,B,D,M,P,S,U,fa,la,oa,Ca,Ha,Ja,Wa,Pa,ab,db,hb;return _.Jh(function(bb){switch(bb.oa){case 1:c=a.data;b.Ieb=c;if(c.La)return bb.return();d=c.ev||"";e=b.wp.streams.get(d);g=((f=e)==null?void 0:f.mj())||0;m=((k=e)==null?void 0:(l=k.ZP())==null?void 0:l.length)||0;n=g>0;q=g<m-1;v=c.Aa;w=c.Ga;if(v)return bb.yield(Mam(b),13);if(c.oa&&c.ev)return bb.yield(Mam(b),9);c.Rc&&_.Sy(b.Eb,{Rc:c.Rc});y=_.Vh;if(b.Dla&&y){b.CE&&b.Hk.close(y);bb.ub(0);
break}if(!b.CE){bb.ub(0);break}return bb.yield(b.D1a(),0);case 9:return(B=c.Ea())&&b.Rm.zCa(B),b.Jpa.reset(),bb.yield(_.mkc(b.wp,c.ev),10);case 10:D=_.okc(b.wp,c.ev,c.oa);if(!D.callback){_.lb(Error("fo`"+c.ev+"`"+c.oa));bb.ub(0);break}M=D.callback.xT();b.Ni.qb(D.callback);return bb.yield(Nam(b,b.fua.xj().getQuery()||"",c.oa,"vhid",{Qa:M,Ee:(P=M.Cb())==null?void 0:P.Td(_.Mg),Jh:D.callback,GUa:D.stream.mE()},c,n,q),12);case 12:b.Ni.kb(b.getRoot().el().querySelector("[jsname=CGzTgf]"));e&&e.mE()==="regis"&&
_.Yd.broadcast(b.document,_.fWf,e.xd());bb.ub(0);break;case 13:return(S=c.Ea())&&b.Rm.zCa(S),b.Jpa.reset(),bb.yield(Oam(b,c),14);case 14:U=bb.Aa;if(!U.match){fa="Viewer";b.Ke.p1()?fa="Standalone Viewer":_.F((0,_.Tt)(),117)&&(fa="IU Viewer");oa=((la=U.scope)==null?void 0:la.payload().getType())||null;_.lb(Error("go`"+fa+"`"+v+"`"+w+"`"+oa));bb.ub(0);break}Ca=U;Ha=Ca.scope;Wa=Ja=Ca.match;Pa=Wa.yC;ab=Wa.result;db=void 0;if((hb=ab.Ee())==null?0:hb.hasExtension(_.amb))db=_.x(ab.Ee().Td(_.amb),_.mt,1);
b.Ni.qb(db);return bb.yield(Nam(b,b.fua.xj().getQuery()||"",w||v,w?"imgdii":"imgrc",{Qa:ab.Mo(),clusterId:c.clusterId||Pa.id(),T$c:U,Ee:ab.Ee(),GUa:Ha.id,Jh:db},c,n,q),16);case 16:b.Ni.kb(b.getRoot().el().querySelector("[jsname=CGzTgf]")),_.vi(bb)}})};
_.a8.prototype.D1a=function(){var a=this,b,c,d,e;return _.Jh(function(f){switch(f.oa){case 1:_.eud(a.Ni);d=a.Dla?null:_.ekc(a.IUa,(c=(b=a.Ieb)==null?void 0:b.Pa)!=null?c:null);e=null;if(d){var g=a.Jpa,k=d.el();g.oa=k;e=_.Ld(d.el(),d.el(),"sTFXNd")[0]}if(!a.CE){f.ub(2);break}_.Kh(f,3);return f.yield(a.ePa(a.CE),5);case 5:_.xi(f,4);break;case 3:_.Lh(f);case 4:_.Kj(a.CE),a.CE=null,a.Caa=null,a.ZHb=null;case 2:a.pO.On(),e&&_.St(a.Gp.oa())&&e.focus(),_.vi(f)}})};
var Mam=function(a){var b;return _.Jh(function(c){if(c.oa==1)return _.Kh(c,2),c.yield((b=a.Caa)==null?void 0:b.WR(),4);if(c.oa!=2)return _.xi(c,0);_.Lh(c);_.vi(c)})},Oam=function(a,b){var c,d;return _.Jh(function(e){if(e.oa==1)return e.yield(a.Pxa(b),2);c=e.Aa;d=b.Ga||b.Aa;var f=e.return,g,k,l=(k=c==null?void 0:(g=c.oa)==null?void 0:_.fkc(g,d))!=null?k:null;return f.call(e,{scope:c,match:l})})};
_.a8.prototype.Pxa=function(a){return a.Ga?(a=this.pH.Pxa(a.Aa,a.Wa||""))?Promise.resolve(a):Promise.resolve(null):Bam(this.pH)};_.a8.prototype.gH=function(){var a=this.rM().width;var b=(_.St(this.Gp.oa())?0:16)-32;return a+b};
var Nam=function(a,b,c,d,e,f,g,k){var l,m,n,q,v,w,y,B,D,M,P,S,U,fa,la,oa,Ca,Ha,Ja,Wa,Pa,ab,db,hb,bb,mb,qb;return _.Jh(function(vb){switch(vb.oa){case 1:return vb.yield(_.wd(_.yka(_.cqb,void 0,a.Ri())),2);case 2:return l=vb.Aa,m=a.fua.xj(),y=(w=(n=e)==null?void 0:(q=n.Jh)==null?void 0:(v=q.Pk())==null?void 0:_.Fs(v))!=null?w:0,B=a.getRoot().wb(),D=a.ld.Cd(function(){return l.render({query:b,ocd:c,TTc:d,GUa:e.GUa,clusterId:e.clusterId,E_:m,Rna:!e.T$c,D6c:a.getRoot().el().clientHeight,Ur:y,KTc:!0})},
{ud:f.ud||void 0,cO:_.gfd()}),P=(M=f.Ea())?Fam(a.Rm,M):1,S=_.ucd(_.tcd(Gam(_.scd(f.r7||a.r7(y,f.ev)),Cam(a.JN)),g),k),vb.yield(_.Acd(a.fia,{Qa:e.Qa,taa:a.gH(),Jh:e.Jh,isActive:!0,ambientParams:S},{Rc:f.Rc||void 0,ud:f.ud||void 0,St:_.jfd(f.St,P),cO:_.gfd()}),3);case 3:U=vb.Aa;fa="";(la=U.querySelector("[aria-label]"))&&(fa=(oa=la.getAttribute("aria-label"))!=null?oa:"");fa.length===0&&f.Bo&&(Ca=f.Bo.querySelector("[alt], [aria-label]"))&&(fa=(Ja=(Ha=Ca.getAttribute("aria-label"))!=null?Ha:Ca.getAttribute("alt"))!=
null?Ja:"");fa.length>0?(D.setAttribute("role","dialog"),D.setAttribute("aria-label",fa)):(D.setAttribute("role",""),D.setAttribute("aria-label",""));if(Wa=f.LQa?U:null)Wa.style.visibility="hidden";Pa=D.querySelector("[jsname=CGzTgf]");Pa.appendChild(U);B.appendChild(D);M&&(Eam(a.Rm,M),a.Rm.oa.has(M),a.Rm.c3(M,Pa));_.St(a.Gp.oa())&&a.CE&&_.gp(a.CE,"visibility","hidden");return vb.yield(Kam(a,Lam(D)),4);case 4:ab=vb.Aa;if(!ab)return db=Error("ho"),_.lb(db),vb.return();ab.BZa({element:f.Bo});a.ZHb=
(mb=(hb=e.Ee)==null?void 0:(bb=hb.Ec())==null?void 0:_.x(bb,_.l$c,24))!=null?mb:null;a.document.dispatchEvent(new CustomEvent("viewerOpened"));qb=_.Vh;return a.Dla&&qb&&!a.Hk.isOpen(qb)?(_.gp(qb,"position","absolute"),vb.yield(a.Hk.open(qb,Pam(a,f,D,M,U,Wa)),6)):vb.yield(a.Uma(D,M,U,Wa),6);case 6:M&&a.Rm.ACa(M),_.Kj(a.CE),a.CE=D,a.Caa=ab,a.Ni.pga(),_.vi(vb)}})},Pam=function(a,b,c,d,e,f){if(_.St(a.Gp.oa())){var g=_.A6d(_.E6d(new _.D6d),125);b.Bo&&(g.qb=b.Bo);b=g}else b=_.C6d(_.A6d(new _.B6d,998),2);
return _.y6d(_.v6d(_.z6d(_.x6d(_.w6d(b,a.Rua.bind(a)),[2]),!0),1),new Qam(function(){return a.Uma(c,d,e,f)},function(){return a.D1a()}))};_.a8.prototype.Rua=function(a){if(a.eventType===0)return!0;if(!this.Caa)throw Error("io");this.Caa.zRa(5);return!1};_.a8.prototype.handleResize=function(a){Ram(this,a)};
var Jam=function(a){if(a.getRoot().getData("bp").Zb()){var b=_.Ae(a.getRoot().getData("bp"),0),c=a.WFa,d,e,f=(e=(d=c.window.visualViewport)==null?void 0:d.scale)!=null?e:c.oa();b/=Math.round(f*100)/100;a.getRoot().setStyle({top:b+"px",height:"calc(100% - "+(24+b)+"px)"})}_.tp(a.getRoot().el())&&Iam(a.WFa)<0&&(b=Math.abs(Iam(a.WFa)),a.getRoot().setStyle({left:4+b+"px"}))};_.a8.prototype.aya=function(a){Ram(this,a)};_.a8.prototype.QJc=function(){return this.Caa};
var Kam=function(a,b){return _.Jh(function(c){return c.oa==1?c.yield(_.Gp(a,b.el()),2):c.return(c.Aa)})};_.h=_.a8.prototype;
_.h.Uma=function(a,b,c,d){var e=this,f,g,k,l;return _.Jh(function(m){switch(m.oa){case 1:return m.yield(Kam(e,Lam(a)),2);case 2:f=m.Aa;if(!f)return g=Error("jo"),_.lb(g),m.return();e.pO.Fk();e.getRoot().wb().style.setProperty("visibility","visible");if(d){_.Yd.broadcast(c,_.p0b);d.style.visibility="visible";f.HO.wb().style.visibility="visible";if((k=f.y9)==null?0:(l=k.wb())==null?0:l.style)f.y9.wb().style.visibility="visible";m.ub(3);break}return m.yield(f.vwc(),3);case 3:return f.QZ(),e.mUa(),_.f$l(e.pO,
!1),m.yield(e.mPa(),5);case 5:if(b){var n=e.Rm,q=n.oa.get(b);(q==null?0:q.state.xg.Aa.startTime!=null&&!q.state.La)?q.state.xg.Aa.startTime!=null&&!q.state.La&&(q.state.Ga?q.state.Ea&&Dam(q,q.state.Ea):Dam(q)):n.oa.delete(b)}return m.yield(f.DSb(),6);case 6:e.document.dispatchEvent(new CustomEvent("viewerOpenFinished",{})),_.vi(m)}})};
_.h.ePa=function(a){var b=this,c,d,e;return _.Jh(function(f){switch(f.oa){case 1:return _.eud(b.Ni),_.f$l(b.pO,!0),b.pO.On(),f.yield(Kam(b,Lam(a)),2);case 2:c=f.Aa;if(!c)return d=Error("ko"),_.lb(d),f.return();_.Yd.broadcast(b.document,_.Ndd,!1);b.document.dispatchEvent(new CustomEvent("viewerClosed"));return((e=b.Ieb)==null?0:e.uVa)?f.yield(c.UPb(),4):f.yield(c.uwc(),4);case 4:return c.BZa({element:null}),f.yield(b.fPa(),7);case 7:_.Ep(window,"attn_viewer_close",null),b.getRoot().wb().style.visibility=
"hidden",_.vi(f)}})};_.h.mPa=function(){return Promise.resolve()};_.h.fPa=function(){return Promise.resolve()};_.h.Wxa=function(a){Ram(this,a)};var Ram=function(a,b){(a=a.CE)&&_.Yd.broadcast(a,b.type,b.data)};_.a8.prototype.IDa=function(){};_.a8.prototype.mUa=function(){};_.a8.prototype.r7=function(a,b){b=b||"";b.indexOf("-")>0&&(b=b.substring(0,b.indexOf("-")));return _.Kcd.includes(a)||_.Lcd.includes(b)};_.L(_.a8.prototype,"fJBVee",function(){return this.mUa});_.L(_.a8.prototype,"zfeGSe",function(){return this.Wxa});
_.L(_.a8.prototype,"o1YwPc",function(){return this.fPa});_.L(_.a8.prototype,"H11Ahd",function(){return this.mPa});_.L(_.a8.prototype,"e73z6",function(){return this.QJc});_.L(_.a8.prototype,"onf9S",function(){return this.aya});_.L(_.a8.prototype,"mhSdVe",function(){return this.handleResize});_.L(_.a8.prototype,"mlmJSd",function(){return this.D1a});_.L(_.a8.prototype,"zQYYb",function(){return this.mSc});_.L(_.a8.prototype,"C6KsF",function(){return this.M$a});_.L(_.a8.prototype,"ysU6pb",function(){return this.eYb});
_.L(_.a8.prototype,"IaQd1e",function(){return this.I_});_.L(_.a8.prototype,"npAYtf",function(){return this.H_});var Qam=function(a,b){_.JNe.call(this,a,b)};_.G(Qam,_.JNe);_.Gu(_.fqb,_.a8);


_.a8.prototype.H_=function(){var a=this,b,c,d,e,f;return _.Jh(function(g){if(g.oa==1)return b=a,c=_.oe(_.ibb,a.Ri()),g.yield(_.oe(_.hbb,a.Ri()),2);if(g.oa!=3)return d=g.Aa,g.yield(c,3);e=g.Aa;f=b.getRoot();b.I5=d.create(b.window,e,f);_.vi(g)})};_.L(_.a8.prototype,"npAYtf",function(){return this.H_});_.a8.prototype.handleResize=function(){};_.L(_.a8.prototype,"mhSdVe",function(){return this.handleResize});_.a8.prototype.IDa=function(a){this.I5.IDa(a)};
_.a8.prototype.aya=function(){if(this.I5)this.I5.aya();else{var a=this.window,b=this.getRoot();a=a.innerWidth;a=a<1264?368:Math.min(368+a-1264,569);a>368?b.addClass("sUDUrf").removeClass("WdLoq"):b.addClass("WdLoq").removeClass("sUDUrf");b.setStyle("width",a+"px")}var c;(c=this.Ni)==null||c.pga()};_.L(_.a8.prototype,"onf9S",function(){return this.aya});_.a8.prototype.mPa=function(){if(this.I5)return this.I5.Uma();this.getRoot().setStyle("display","block");return Promise.resolve()};
_.L(_.a8.prototype,"H11Ahd",function(){return this.mPa});_.a8.prototype.fPa=function(){if(this.I5)return this.I5.ePa();this.getRoot().setStyle("display","none");return Promise.resolve()};_.L(_.a8.prototype,"o1YwPc",function(){return this.fPa});_.a8.prototype.Wxa=function(){this.I5.Wxa()};_.L(_.a8.prototype,"zfeGSe",function(){return this.Wxa});


_.r();
});
// Google Inc.
