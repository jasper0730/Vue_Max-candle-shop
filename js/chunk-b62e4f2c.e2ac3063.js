(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b62e4f2c"],{"00b4":function(e,t,a){"use strict";a("ac1f");var r=a("23e7"),c=a("da84"),o=a("c65b"),n=a("e330"),l=a("1626"),s=a("861d"),d=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),i=c.Error,m=n(/./.test);r({target:"RegExp",proto:!0,forced:!d},{test:function(e){var t=this.exec;if(!l(t))return m(this,e);var a=o(t,this,e);if(null!==a&&!s(a))throw new i("RegExp exec method returned something other than an Object or null");return!!a}})},"99af":function(e,t,a){"use strict";var r=a("23e7"),c=a("da84"),o=a("d039"),n=a("e8b5"),l=a("861d"),s=a("7b0b"),d=a("07fa"),i=a("8418"),m=a("65f0"),b=a("1dde"),u=a("b622"),f=a("2d00"),p=u("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",h=c.TypeError,V=f>=51||!o((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),v=b("concat"),N=function(e){if(!l(e))return!1;var t=e[p];return void 0!==t?!!t:n(e)},E=!V||!v;r({target:"Array",proto:!0,forced:E},{concat:function(e){var t,a,r,c,o,n=s(this),l=m(n,0),b=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?n:arguments[t],N(o)){if(c=d(o),b+c>j)throw h(O);for(a=0;a<c;a++,b++)a in o&&i(l,b,o[a])}else{if(b>=j)throw h(O);i(l,b++,o)}return l.length=b,l}})},b0c0:function(e,t,a){var r=a("83ab"),c=a("5e77").EXISTS,o=a("e330"),n=a("9bf2").f,l=Function.prototype,s=o(l.toString),d=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,i=o(d.exec),m="name";r&&!c&&n(l,m,{configurable:!0,get:function(){try{return i(d,s(this))[1]}catch(e){return""}}})},e2ea:function(e,t,a){"use strict";a.r(t);a("b0c0");var r=a("7a23"),c={class:"container"},o={class:"mt-3 pb-5"},n=Object(r["createElementVNode"])("h3",{class:"mt-3 mb-4"},"訂購資訊",-1),l={class:"row"},s={class:"col-md-8"},d={class:"justify-content-center"},i={class:"mb-3"},m=Object(r["createElementVNode"])("label",{for:"email",class:"form-label"},"Email",-1),b={class:"mb-3"},u=Object(r["createElementVNode"])("label",{for:"name",class:"form-label"},"訂購人姓名",-1),f={class:"mb-3"},p=Object(r["createElementVNode"])("label",{for:"tel",class:"form-label"},"訂購人電話",-1),j={class:"mb-3"},O=Object(r["createElementVNode"])("label",{for:"address",class:"form-label"},"訂購人地址",-1),h={class:"mb-3"},V=Object(r["createElementVNode"])("label",{for:"message",class:"form-label"},"備註",-1),v=Object(r["createElementVNode"])("div",{class:"text-end"},[Object(r["createElementVNode"])("button",{type:"submit",class:"rounded btn btn-dark mb-3"}," 訂單送出 ")],-1),N={class:"col-md-4"},E={class:"border p-4 mb-4"},g=Object(r["createElementVNode"])("h4",{class:"fw-bold mb-4"},"訂購明細",-1),x={class:"table text-muted border-bottom"},w=Object(r["createElementVNode"])("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"}," 費用 ",-1),y={class:"text-end border-0 px-0 pt-4"},C=Object(r["createElementVNode"])("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"}," 折扣 ",-1),S={class:"text-end border-0 px-0 pt-0 pb-4"},k={class:"d-flex justify-content-between mt-4"},D=Object(r["createElementVNode"])("p",{class:"mb-0 h4 fw-bold"},"總金額",-1),$={class:"mb-0 h4 fw-bold"},L=Object(r["createElementVNode"])("button",{type:"button",class:"btn btn-dark w-100 mt-4 rounded"}," 回上一頁 ",-1);function M(e,t,a,M,z,T){var U=Object(r["resolveComponent"])("Loading"),_=Object(r["resolveComponent"])("Field"),F=Object(r["resolveComponent"])("ErrorMessage"),q=Object(r["resolveComponent"])("Form"),B=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[Object(r["createVNode"])(U,{active:z.isLoading,"z-index":1060},null,8,["active"]),Object(r["createElementVNode"])("div",o,[n,Object(r["createElementVNode"])("div",l,[Object(r["createElementVNode"])("div",s,[Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(q,{class:"g-3",onSubmit:T.createOrder,ref:"form"},{default:Object(r["withCtx"])((function(e){var a=e.errors;return[Object(r["createElementVNode"])("div",i,[m,Object(r["createVNode"])(_,{type:"text",name:"email",class:Object(r["normalizeClass"])(["form-control",{"is-invalid":a["email"]}]),id:"email",placeholder:"請輸入Email",rules:"email|required",modelValue:z.form.user.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return z.form.user.email=e})},null,8,["class","modelValue"]),Object(r["createVNode"])(F,{name:"email",class:"invalid-feedback"})]),Object(r["createElementVNode"])("div",b,[u,Object(r["createVNode"])(_,{type:"text",name:"姓名",class:Object(r["normalizeClass"])(["form-control",{"is-invalid":a["姓名"]}]),id:"name",placeholder:"請輸入姓名",rules:"required",modelValue:z.form.user.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return z.form.user.name=e})},null,8,["class","modelValue"]),Object(r["createVNode"])(F,{name:"姓名",class:"invalid-feedback"})]),Object(r["createElementVNode"])("div",null,[Object(r["createElementVNode"])("div",f,[p,Object(r["createVNode"])(_,{class:Object(r["normalizeClass"])(["form-control",{"is-invalid":a["電話"]}]),type:"text",name:"電話",id:"tel",placeholder:"請輸入電話",rules:T.isPhone,modelValue:z.form.user.tel,"onUpdate:modelValue":t[2]||(t[2]=function(e){return z.form.user.tel=e})},null,8,["class","rules","modelValue"]),Object(r["createVNode"])(F,{name:"電話",class:"invalid-feedback"})]),Object(r["createElementVNode"])("div",j,[O,Object(r["createVNode"])(_,{class:Object(r["normalizeClass"])(["form-control",{"is-invalid":a["地址"]}]),type:"text",name:"地址",id:"address",placeholder:"請輸入地址",rules:"required",modelValue:z.form.user.address,"onUpdate:modelValue":t[3]||(t[3]=function(e){return z.form.user.address=e})},null,8,["class","modelValue"]),Object(r["createVNode"])(F,{name:"地址",class:"invalid-feedback"})]),Object(r["createElementVNode"])("div",h,[V,Object(r["withDirectives"])(Object(r["createElementVNode"])("textarea",{class:"form-control",type:"text",id:"message",cols:"30",rows:"3","onUpdate:modelValue":t[4]||(t[4]=function(e){return z.form.message=e})},"\r\n                  ",512),[[r["vModelText"],z.form.message]])]),v])]})),_:1},8,["onSubmit"])])]),Object(r["createElementVNode"])("div",N,[Object(r["createElementVNode"])("div",E,[g,Object(r["createElementVNode"])("table",x,[Object(r["createElementVNode"])("tbody",null,[Object(r["createElementVNode"])("tr",null,[w,Object(r["createElementVNode"])("td",y," NT "+Object(r["toDisplayString"])(e.$filters.currency(z.cartData.total)),1)]),Object(r["createElementVNode"])("tr",null,[C,Object(r["createElementVNode"])("td",S,Object(r["toDisplayString"])(e.$filters.currency(z.cartData.final_total-z.cartData.total)),1)])])]),Object(r["createElementVNode"])("div",k,[D,Object(r["createElementVNode"])("p",$," NT$ "+Object(r["toDisplayString"])(e.$filters.currency(Math.round(z.cartData.final_total))),1)]),Object(r["createVNode"])(B,{to:"/carts"},{default:Object(r["withCtx"])((function(){return[L]})),_:1})])])])])])}a("99af"),a("ac1f"),a("00b4");var z=a("4dcd"),T={data:function(){return{cartData:{carts:[]},isLoading:!1,form:{user:{name:"",email:"",tel:"",address:""},message:""},coupon_code:""}},methods:{getCart:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jasper07301","/cart");this.$http.get(t).then((function(t){e.isLoading=!1,e.cartData=t.data.data,z["a"].emit("get-cart")})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"購物車")}))},createOrder:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("jasper07301","/order"),a=this.form;this.$http.post(t,{data:a}).then((function(t){e.isLoading=!1,e.$httpMessageState(t,"感謝您的訂購，訂單已送出"),e.$refs.form.resetForm(),e.cartData={},e.getCart()})).catch((function(t){e.isLoading=!1,e.$httpMessageState(t.response,"訂單成立")}))},isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"請輸入正確的電話號碼"}},created:function(){this.isLoading=!0},mounted:function(){this.getCart()}},U=a("6b0d"),_=a.n(U);const F=_()(T,[["render",M]]);t["default"]=F}}]);
//# sourceMappingURL=chunk-b62e4f2c.e2ac3063.js.map