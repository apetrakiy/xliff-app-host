(this["webpackJsonpxliff-app"]=this["webpackJsonpxliff-app"]||[]).push([[0],{154:function(e,t,n){},448:function(e,t){},450:function(e,t){},468:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(0),c=n(21),i=n(22),o=(n(71),n(152),n(153),n(154),n(9)),s=n.n(o),u=n(11),l=n(17),d=n(16),p=n(144),f=n(142),h=n(8),b=n(19),j=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).onConfigure=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.props.sdk.app.getCurrentState();case 2:return t=e.sent,e.abrupt("return",{parameters:r.state.parameters,targetState:t});case 4:case"end":return e.stop()}}),e)}))),r.state={parameters:{}},e.sdk.app.onConfigure((function(){return r.onConfigure()})),r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,n=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.sdk.app.getParameters();case 2:t=e.sent,this.setState(t?{parameters:t}:this.state,(function(){n.props.sdk.app.setReady()}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(r.jsx)(h.Workbench,{className:Object(b.a)({margin:"80px"}),children:Object(r.jsxs)(h.Form,{children:[Object(r.jsx)(h.Heading,{children:"App Config"}),Object(r.jsx)(h.Paragraph,{children:"Welcome to your contentful app. This is your config page."})]})})}}]),n}(a.Component),v=function(e){return Object(r.jsx)(h.Paragraph,{children:"Hello Entry Editor Component"})},x=function(e){return Object(r.jsx)(h.Paragraph,{children:"Hello Page Component"})},y=function(e){var t=e.sdk,n=t.locales;Object(a.useEffect)((function(){return t.window.startAutoResizer(),function(){t.window.stopAutoResizer()}}),[t.window]);return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(h.Button,{type:"button",onClick:function(){return function(){var e=t.entry.fields[t.contentType.displayField].getValue(n.default);t.dialogs.openCurrentApp({allowHeightOverflow:!0,position:"center",shouldCloseOnOverlayClick:!0,shouldCloseOnEscapePress:!0,title:"XLIFF import/export",parameters:{entryId:t.entry.getSys().id,entryTitle:e,contentTypeId:t.contentType.sys.id},width:"large",minHeight:500})}()},children:"XLIFF import/export"})})},O=function(e){return Object(r.jsx)(h.Paragraph,{children:"Hello Entry Field Component"})},g=n(15),k={modalContainer:Object(b.a)({height:"360px"}),modalContent:Object(b.a)({}),headerUnderline:Object(b.a)({borderBottom:"1px solid rgb(195, 207, 213)"}),dropZone:{fileItem:{dropped:Object(b.a)({color:"var(--color-text-base)"}),inProgress:Object(b.a)({color:"var(--color-text-base)"}),success:Object(b.a)({color:"var(--color-text-base)"}),error:Object(b.a)({color:"var(--color-negative)"}),abort:Object(b.a)({color:"var(--color-negative)"})}}},m=n(36),w=n(18),E=n(432).parseHtml,L=function(){function e(t){Object(l.a)(this,e),this.contentful=void 0,this.parseArrayField=function(e){return null===e||void 0===e?void 0:e.split(",")},this.contentful=t}return Object(d.a)(e,[{key:"visitEntry",value:function(e,t){throw new Error("Method not implemented.")}}]),Object(d.a)(e,[{key:"visitEntryLocalization",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r,a,c,i,o=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={},console.info("Visit entry '".concat(n.entry.id," ...")),a=Object(w.a)(n.fields),e.prev=3,i=function(){var e=c.value,t=n.entry.metadata.contentType.fields.find((function(t){return t.id===e.id}));if(!t)return console.warn("Unable to find content type for field '".concat(e.id,"'")),"continue";if(!t.localized||t.disabled)return console.warn("Field '".concat(e.id,"' for content type '").concat(t.type,"' is marked as non-localizable or disabled - skip")),"continue";var a=e.target;try{var i=t.type;"Array"===i?a=o.parseArrayField(e.target):"RichText"===i&&(a=E(e.target))}catch(s){throw console.error("Error on parsing value ",a),s}r[e.id]=a},a.s();case 6:if((c=a.n()).done){e.next=12;break}if("continue"!==i()){e.next=10;break}return e.abrupt("continue",10);case 10:e.next=6;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),a.e(e.t0);case 17:return e.prev=17,a.f(),e.finish(17);case 20:return e.next=22,this.contentful.updateEntry(n.entry.id,t.targetLocale,r);case 22:case"end":return e.stop()}}),e,this,[[3,14,17,20]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),I=n(441),C=function(){function e(t,n){Object(l.a)(this,e),this.fileContent=void 0,this.contentful=void 0,this.fileContent=n,this.contentful=t}return Object(d.a)(e,[{key:"execute",value:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.accept(new L(this.contentful));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"accept",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r,a,c,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.parseXliffContent(this.fileContent);case 2:return n=e.sent,e.next=5,this.getEntries(n);case 5:r=e.sent,a={sourceLocale:n.sourceLanguage,targetLocale:n.targetLanguage},c=Object(w.a)(r),e.prev=8,c.s();case 10:if((i=c.n()).done){e.next=23;break}return o=i.value,e.prev=12,e.next=15,t.visitEntryLocalization(a,o);case 15:e.next=21;break;case 17:throw e.prev=17,e.t0=e.catch(12),console.error("Error on visit entry ".concat(o.entry.id),e.t0),e.t0;case 21:e.next=10;break;case 23:e.next=28;break;case 25:e.prev=25,e.t1=e.catch(8),c.e(e.t1);case 28:return e.prev=28,c.f(),e.finish(28);case 31:case"end":return e.stop()}}),e,this,[[8,25,28,31],[12,17]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getEntries",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r,a,c,i,o,u,l,d,p,f,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],r=0,a=Object.entries(t.resources);case 2:if(!(r<a.length)){e.next=17;break}if(c=Object(g.a)(a[r],2),i=c[0],o=c[1],u=this.parseResourceId(i),l=u.spaceId,d=u.entryId,void 0!==l&&void 0!==d){e.next=8;break}return console.error("Wrong resource id format ",i),e.abrupt("continue",14);case 8:return p=Object.entries(o),f=p.map((function(e){var t=Object(g.a)(e,2),n=t[0],r=t[1];return{id:n,source:r.source,target:r.target}})),e.next=12,this.contentful.getEntry(d);case 12:h=e.sent,n.push({entry:h,fields:f});case 14:r++,e.next=2;break;case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"parseXliffContent",value:function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"parseResourceId",value:function(e){var t,n=null!==(t=null===e||void 0===e?void 0:e.split(":"))&&void 0!==t?t:[],r=2===n.length?n:[],a=Object(g.a)(r,2);return{spaceId:a[0],entryId:a[1]}}}]),e}(),A=function(){function e(){var t=this;Object(l.a)(this,e),this._space=void 0,this._locales=void 0,this.entryMetadatas=[],this.getEntry=function(){var e=Object(u.a)(s.a.mark((function e(n){var r,a,c,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.space.getEntry(n);case 2:if(r=e.sent,a=r.fields,c=r.sys.contentType.sys.id,i=t.entryMetadatas.find((function(e){return e.contentType.sys.id===c}))){e.next=8;break}throw new Error("Unable to get metadata for content type id ".concat(c));case 8:return o=i.contentType.sys.space.sys.id,e.abrupt("return",{id:n,spaceId:o,fields:a,metadata:i});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.updateEntry=function(){var e=Object(u.a)(s.a.mark((function e(n,r,a,c){var i,o,u,l,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.space.getEntry(n);case 2:if(i=e.sent){e.next=6;break}return console.error("Unable to find entry with id=".concat(n)),e.abrupt("return");case 6:for(o=0,u=Object.keys(a);o<u.length;o++)l=u[o],d=a[l],i.fields[l][r]=d;return e.next=9,t.space.updateEntry(i);case 9:if(!0!==c){e.next=12;break}return e.next=12,t.space.publishEntry(n);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}()}return Object(d.a)(e,[{key:"initializeEntryMetadatas",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,r,a,c=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.space.getContentTypes();case 2:t=e.sent.items,n=Object(w.a)(t);try{for(a=function(){var e=r.value,t=function(e){var t;return"Link"===e.type||"Array"===e.type&&"Link"===(null===(t=e.items)||void 0===t?void 0:t.type)},n=e.fields.filter((function(e){return!e.disabled&&e.localized})),a={contentType:e,linkFields:n.filter((function(e){return function(e){var n;return t(e)&&("Entry"===e.linkType||"Entry"===(null===(n=e.items)||void 0===n?void 0:n.linkType))}(e)})),localizableFields:n.filter((function(e){return!t(e)}))};c.entryMetadatas.push(a)},n.s();!(r=n.n()).done;)a()}catch(i){n.e(i)}finally{n.f()}console.log("Metadatada initialized!");case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDefaultLocale",value:function(){return{code:this.locales.default,name:this.locales.names[this.locales.default]}}},{key:"getLocales",value:function(){var e=this;return this.locales.available.map((function(t){return{code:t,name:e.locales.names[t]}}))}},{key:"initialize",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._space=t,this._locales=n,e.next=4,this.initializeEntryMetadatas();case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"space",get:function(){if(void 0===this._space)throw new Error("SpaceAPI not initialized");return this._space}},{key:"locales",get:function(){if(void 0===this._locales)throw new Error("LocalesAPI not initialized");return this._locales}}],[{key:"getInstance",value:function(){return e._instance||(e._instance=new e),e._instance}}]),e}();A._instance=void 0;var T,F=n(12),_=n(143);!function(e){e[e.Dropped=0]="Dropped",e[e.InProgress=1]="InProgress",e[e.Success=2]="Success",e[e.Error=3]="Error",e[e.Abort=4]="Abort"}(T||(T={}));var S=function(e){var t=k.dropZone.fileItem,n=new Map([[T.Dropped,t.dropped],[T.InProgress,t.inProgress],[T.Success,t.success],[T.Error,t.error],[T.Abort,t.abort]]),a={style:{verticalAlign:"middle"},size:"tiny",icon:"ArrowDownTrimmed",color:"muted"},c=new Map([[T.Dropped,Object(F.a)(Object(F.a)({},a),{},{icon:"ArrowDownTrimmed"})],[T.InProgress,Object(F.a)(Object(F.a)({},a),{},{icon:"Clock"})],[T.Success,Object(F.a)(Object(F.a)({},a),{},{icon:"ChevronDown",color:"positive"})],[T.Error,Object(F.a)(Object(F.a)({},a),{},{icon:"Close",color:"negative"})],[T.Abort,Object(F.a)(Object(F.a)({},a),{},{icon:"Close",color:"negative"})]]);return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(_.a,{accept:".xlf",onDrop:function(t){var n=t.map((function(e){return{file:e,status:T.Dropped}}));e.onDrop(n)},children:function(t){var a=t.getRootProps,i=t.getInputProps;return Object(r.jsxs)("div",Object(F.a)(Object(F.a)({},a()),{},{children:[Object(r.jsx)("input",Object(F.a)({},i())),Object(r.jsxs)(h.Card,{children:[Object(r.jsx)("p",{children:"Drag 'n' drop your translation files here, or click to select files (only *.xlf files will be accepted)"}),e.files.length>0&&Object(r.jsxs)("aside",{children:[Object(r.jsx)("p",{children:Object(r.jsx)("b",{children:"Dropped files"})}),e.files.map((function(e){return Object(r.jsxs)("p",{children:[Object(r.jsx)(h.Icon,Object(F.a)({},c.get(e.status))),Object(r.jsx)("span",{className:n.get(e.status),children:e.file.name})]},e.file.name)}))]})]})]}))}})})},P=function(e){var t=Object(a.useState)([]),n=Object(g.a)(t,2),c=n[0],i=n[1],o=Object(a.useState)(!1),l=Object(g.a)(o,2),d=l[0],p=l[1],f=!0,b=function(e,t){i((function(n){var r=Object(m.a)(n);return r[e].status=t,r}))},j=function(){p(!0);var t=Object(m.a)(c);t.forEach((function(e){return e.status=T.InProgress})),i(t);for(var n=function(){p(!1),f=!0;var t={title:"Import from XLIFF file(s)",confirmLabel:"Close",message:c.every((function(e){return e.status===T.Success}))?"Files imported successfully":"Error(s) occured while importing files - see console log for details"};e.dialogsApi.openAlert(t)},r=0,a=function(){var e=Object(u.a)(s.a.mark((function e(a,c){var i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=a.result,o=new C(A.getInstance(),i),e.prev=2,e.next=5,o.execute();case 5:b(c,T.Success),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),b(c,T.Error),console.error(e.t0);case 12:++r===t.length&&n();case 14:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t,n){return e.apply(this,arguments)}}(),o=function(e){var n=e,r=t[n].file,i=new FileReader;i.onload=function(){return a(i,n)},i.onerror=function(){return function(e,t){b(t,T.Error),console.log("file reading has failed (".concat(c[t].file.name,', "').concat(e.error,'")'))}(i,n)},i.onabort=function(){b(n,T.Abort)},i.readAsText(r)},l=0;l<t.length;l++)o(l)};return Object(r.jsxs)(h.Grid,{columns:"5fr 1fr",columnGap:"spacingXs",rowGap:"spacingXl",children:[Object(r.jsx)(h.GridItem,{children:Object(r.jsx)(S,{onDrop:function(e){f?(i(e),f=!1):i([].concat(Object(m.a)(c),Object(m.a)(e)))},files:c})}),Object(r.jsx)(h.GridItem,{children:Object(r.jsx)(h.Button,{loading:d,disabled:d||0===c.length,onClick:function(){return j()},buttonType:"positive",children:"Import"})})]})},z=n(140),D=n(141),N=function(){function e(){Object(l.a)(this,e),this._xliff=void 0,this.getFieldValue=function(e,t){var n=e[t];return n?function(e){return void 0!==e.content}(n)?Object(D.documentToHtmlString)(n):function(e){return void 0!==e.map}(n)?n.join(","):n:""}}return Object(d.a)(e,[{key:"visitEntry",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n){var r,a,c,i,o,u,l,d,p,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._xliff||(this._xliff={resources:{},sourceLanguage:t.sourceLocale,targetLanguage:t.targetLocale}),r={},a=Object(w.a)(n.metadata.localizableFields),e.prev=3,a.s();case 5:if((c=a.n()).done){e.next=17;break}if(i=c.value,o=i.id,u=i.type,l=i.items,(d=n.fields)[o]&&"Boolean"!==u&&"Location"!==u){e.next=10;break}return e.abrupt("continue",15);case 10:if("Array"===u&&console.log("*** Array, items type: ",null===l||void 0===l?void 0:l.type),""!==(p={source:this.getFieldValue(d[o],t.sourceLocale),target:this.getFieldValue(d[o],t.targetLocale)}).source){e.next=14;break}return e.abrupt("continue",15);case 14:r[o]=p;case 15:e.next=5;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(3),a.e(e.t0);case 22:return e.prev=22,a.f(),e.finish(22);case 25:Object.keys(r).length&&(f="".concat(n.spaceId,":").concat(n.id),this._xliff.resources[f]=r);case 26:case"end":return e.stop()}}),e,this,[[3,19,22,25]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"visitEntryLocalization",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw new Error("Method not implemented.");case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"xliff",get:function(){return this._xliff}}]),e}(),R=n(465),G=function(){function e(t,n,r,a,c){Object(l.a)(this,e),this.entryId=void 0,this.sourceLocale=void 0,this.targetLocale=void 0,this.includeLinkedEntries=void 0,this._rootEntry=null,this.contentful=void 0,this.contentful=t,this.entryId=n,this.sourceLocale=r,this.targetLocale=a,this.includeLinkedEntries=c}return Object(d.a)(e,[{key:"accept",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r,a,c,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getRoot();case 2:if(n=e.sent,!this.includeLinkedEntries){e.next=9;break}return e.next=6,this.getAllEntries(n,this.sourceLocale,this.targetLocale);case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=[n];case 10:r=e.t0,a={sourceLocale:this.sourceLocale,targetLocale:this.targetLocale},c=Object(w.a)(r),e.prev=13,c.s();case 15:if((i=c.n()).done){e.next=21;break}return o=i.value,e.next=19,t.visitEntry(a,o);case 19:e.next=15;break;case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(13),c.e(e.t1);case 26:return e.prev=26,c.f(),e.finish(26);case 29:case"end":return e.stop()}}),e,this,[[13,23,26,29]])})));return function(t){return e.apply(this,arguments)}}()},{key:"execute",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,n,r,a,c,i,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new N,e.next=3,this.accept(n);case 3:if(!(null===(t=n.xliff)||void 0===t?void 0:t.resources)||!Object.keys(n.xliff.resources).length){e.next=18;break}return e.next=6,this.getRoot();case 6:return r=e.sent,e.next=9,R(n.xliff);case 9:a=e.sent,c=new Blob([a],{type:"text/plain;charset=utf-8"}),i=r.fields[r.metadata.contentType.displayField][this.sourceLocale],o=r.spaceId,u="".concat(this.targetLocale,"_").concat(i,"_").concat(r.id,"_").concat(o,"_").concat(this.sourceLocale,".xlf"),Object(z.saveAs)(c,u),console.info("Resources exported: ",Object.keys(n.xliff.resources).length),e.next=19;break;case 18:console.warn("No resources was added");case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getRoot",value:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.contentful.getEntry(this.entryId);case 2:if(this._rootEntry=e.sent,this._rootEntry){e.next=5;break}throw new Error("Root entry not initialized!");case 5:return e.abrupt("return",this._rootEntry);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAllEntries",value:function(){var e=Object(u.a)(s.a.mark((function e(t,n,r){var a,c,i,o,u,l,d,p,f,h,b,j,v,x,y,O,g,k;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[t],c=t.metadata.contentType.sys.id,i=function(e){var t=e.metadata.contentType.sys.id;t!==c&&a.findIndex((function(t){return t.id===e.id}))<0?a.push(e):console.log("Skip entry: id=".concat(e.id,", typeId=").concat(t))},o=[];case 4:if(!a.length){e.next=67;break}if(!(u=a[0]).metadata.linkFields.length){e.next=63;break}l=Object(w.a)(u.metadata.linkFields),e.prev=8,l.s();case 10:if((d=l.n()).done){e.next=55;break}if(p=d.value,console.log("Link: id=".concat(p.id,", type=").concat(p.type)),f=u.fields[p.id]){e.next=16;break}return e.abrupt("continue",53);case 16:if(e.prev=16,h=f[n],b=f[r],"Array"!==p.type){e.next=42;break}j=null!==b&&void 0!==b?b:h,v=Object(w.a)(j),e.prev=22,v.s();case 24:if((x=v.n()).done){e.next=32;break}return y=x.value,e.next=28,this.contentful.getEntry(y.sys.id);case 28:O=e.sent,i(O);case 30:e.next=24;break;case 32:e.next=37;break;case 34:e.prev=34,e.t0=e.catch(22),v.e(e.t0);case 37:return e.prev=37,v.f(),e.finish(37);case 40:e.next=47;break;case 42:return g=null!==b&&void 0!==b?b:h,e.next=45,this.contentful.getEntry(g.sys.id);case 45:k=e.sent,i(k);case 47:e.next=53;break;case 49:throw e.prev=49,e.t1=e.catch(16),console.error(e.t1),e.t1;case 53:e.next=10;break;case 55:e.next=60;break;case 57:e.prev=57,e.t2=e.catch(8),l.e(e.t2);case 60:return e.prev=60,l.f(),e.finish(60);case 63:u.metadata.localizableFields.length&&(o.push(u),console.log("Entry added to result: id=".concat(u.id,", typeName=").concat(u.metadata.contentType.name,",")+" typeId=".concat(u.metadata.contentType.sys.id))),a.shift(),e.next=4;break;case 67:return e.abrupt("return",o);case 68:case"end":return e.stop()}}),e,this,[[8,57,60,63],[16,49],[22,34,37,40]])})));return function(t,n,r){return e.apply(this,arguments)}}()}]),e}();var M=function(e){var t,n=A.getInstance(),c=n.getDefaultLocale(),i=A.getInstance().getLocales().filter((function(e){return e.code!==c.code})),o=function(e,t){var n=Object(a.useState)((function(){var n=window.localStorage.getItem(t);return null!==n?JSON.parse(n):e})),r=Object(g.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(c))}),[t,c]),[c,i]}({targetLocaleCode:(null!==(t=i.find((function(e){return"es-US"===e.code})))&&void 0!==t?t:i[0]).code,includeLinkedEntries:!0},"export-to-xliff-state"),l=Object(g.a)(o,2),d=l[0],p=l[1],f=Object(a.useState)(!1),b=Object(g.a)(f,2),j=b[0],v=b[1],x=function(){var t=Object(u.a)(s.a.mark((function t(){var r,a,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=!1,v(!0),t.prev=2,a=new G(n,e.entryId,c.code,d.targetLocaleCode,d.includeLinkedEntries),t.next=6,a.execute();case 6:r=!0;case 7:return t.prev=7,v(!1),t.finish(7);case 10:i={title:"Export to XLIFF file",confirmLabel:"Close",message:r?"Contentful entry exported successfully":"Error(s) occured while exporting files - see console log for details"},e.dialogsApi.openAlert(i);case 12:case"end":return t.stop()}}),t,null,[[2,,7,10]])})));return function(){return t.apply(this,arguments)}}();return Object(r.jsxs)(h.Grid,{columns:"2fr 3fr 1fr",columnGap:"spacingXs",rowGap:"spacingXl",children:[Object(r.jsx)(h.GridItem,{children:Object(r.jsxs)(h.FieldGroup,{children:[Object(r.jsx)(h.FormLabel,{htmlFor:"workspaceId",children:"Source locale"}),Object(r.jsxs)(h.Paragraph,{children:[" ",c.name]})]})}),Object(r.jsx)(h.GridItem,{children:Object(r.jsxs)(h.FieldGroup,{children:[Object(r.jsx)(h.FormLabel,{htmlFor:"workspaceId",required:!0,children:"Target locale"}),Object(r.jsx)(h.Select,{isDisabled:j,width:"medium",value:d.targetLocaleCode,onChange:function(e){return p(Object(F.a)(Object(F.a)({},d),{},{targetLocaleCode:e.currentTarget.value}))},children:i.map((function(e){return Object(r.jsx)(h.Option,{value:e.code,children:e.name},e.code)}))}),Object(r.jsx)(h.CheckboxField,{disabled:j,onChange:function(){return e=d.includeLinkedEntries,void p(Object(F.a)(Object(F.a)({},d),{},{includeLinkedEntries:!e}));var e},labelText:"include linked entries",id:"inludeLinkedEntries",name:"inludeLinkedEntries",checked:d.includeLinkedEntries,value:"{state.includeLinkedEntries}","data-test-id":"ct-item-".concat(d.includeLinkedEntries)},"{state.includeLinkedEntries}")]})}),Object(r.jsx)(h.GridItem,{children:Object(r.jsx)(h.Button,{loading:j,disabled:j,onClick:function(){return x()},buttonType:"positive",children:"Export"})})]})},H=function(e){var t=e.sdk,n=e.sdk.parameters.invocation,c=Object(a.useState)(!0),i=Object(g.a)(c,2),o=i[0],l=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getInstance().initialize(t.space,t.locales);case 2:l(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.locales,t.space]),Object(r.jsxs)(h.Modal.Content,{children:[o&&Object(r.jsxs)("div",{children:["Initializing contentul API...",Object(r.jsx)(h.Spinner,{})]}),!o&&Object(r.jsx)("div",{className:k.modalContent,children:Object(r.jsxs)("div",{children:[Object(r.jsx)(h.Typography,{children:Object(r.jsx)(h.Heading,{className:k.headerUnderline,children:"Export"})}),Object(r.jsx)(M,{entryId:n.entryId,dialogsApi:t.dialogs}),Object(r.jsx)(h.Typography,{children:Object(r.jsx)(h.Heading,{className:k.headerUnderline,children:"Import"})}),Object(r.jsx)(P,{dialogsApi:t.dialogs})]})})]})};Object(i.init)((function(e){var t=document.getElementById("root");[{location:i.locations.LOCATION_APP_CONFIG,component:Object(r.jsx)(j,{sdk:e})},{location:i.locations.LOCATION_ENTRY_FIELD,component:Object(r.jsx)(O,{sdk:e})},{location:i.locations.LOCATION_ENTRY_EDITOR,component:Object(r.jsx)(v,{sdk:e})},{location:i.locations.LOCATION_DIALOG,component:Object(r.jsx)(H,{sdk:e})},{location:i.locations.LOCATION_ENTRY_SIDEBAR,component:Object(r.jsx)(y,{sdk:e})},{location:i.locations.LOCATION_PAGE,component:Object(r.jsx)(x,{sdk:e})}].forEach((function(n){e.location.is(n.location)&&Object(c.render)(n.component,t)}))}))}},[[468,1,2]]]);
//# sourceMappingURL=main.6c9a1269.chunk.js.map