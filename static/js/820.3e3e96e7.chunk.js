"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[820],{8820:function(e,r,a){a.r(r),a.d(r,{default:function(){return c}});var i=a(5350),l=a(7438),n=a(7236),t=a(9055),o=a(4420),s=a(8570),d=a(184),u=function(){var e=(0,o.I0)();return(0,d.jsx)("form",{onSubmit:function(r){r.preventDefault();var a=r.currentTarget;e((0,s.z2)({name:a.elements.name.value,email:a.elements.email.value,password:a.elements.password.value})),a.reset()},children:(0,d.jsxs)(i.NI,{margin:6,children:[(0,d.jsx)(l.l,{htmlFor:"name",children:"Username"}),(0,d.jsx)(n.I,{type:"text",name:"name",id:"name",required:!0,marginBottom:3,w:250,_focus:{border:"solid 1px teal",boxShadow:"0 0 0 1px teal"}}),(0,d.jsx)(l.l,{htmlFor:"email",children:"E-mail "}),(0,d.jsx)(n.I,{type:"email",name:"email",id:"email",required:!0,marginBottom:3,w:250,_focus:{border:"solid 1px teal",boxShadow:"0 0 0 1px teal"}}),(0,d.jsx)(l.l,{htmlFor:"password",children:"Password"}),(0,d.jsx)(n.I,{type:"password",name:"password",id:"password",required:!0,marginBottom:3,w:250,pattern:".{7,}",title:"Seven or more characters",_focus:{border:"solid 1px teal",boxShadow:"0 0 0 1px teal"}}),(0,d.jsx)("br",{}),(0,d.jsx)(t.z,{colorScheme:"teal",variant:"outline",type:"submit",_hover:{backgroundColor:"teal",color:"white"},children:"Register"})]})})},c=function(){return(0,d.jsx)(u,{})}},5350:function(e,r,a){a.d(r,{NI:function(){return k},NJ:function(){return R},e:function(){return I}});var i=a(1413),l=a(4925),n=a(9439),t=a(9886),o=a(4591),s=a(5597),d=a(2481),u=a(2996),c=a(5113),m=a(6992),v=a(2791),p=a(184),h=["id","isRequired","isInvalid","isDisabled","isReadOnly"],f=["getRootProps","htmlProps"],b=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,n.Z)(b,2),Z=x[0],I=x[1],g=(0,t.k)({strict:!1,name:"FormControlContext"}),y=(0,n.Z)(g,2),q=y[0],R=y[1];var k=(0,s.G)((function(e,r){var a=(0,d.jC)("Form",e),t=function(e){var r=e.id,a=e.isRequired,t=e.isInvalid,s=e.isDisabled,d=e.isReadOnly,u=(0,l.Z)(e,h),c=(0,v.useId)(),p=r||"field-".concat(c),f="".concat(p,"-label"),b="".concat(p,"-feedback"),x="".concat(p,"-helptext"),Z=(0,v.useState)(!1),I=(0,n.Z)(Z,2),g=I[0],y=I[1],q=(0,v.useState)(!1),R=(0,n.Z)(q,2),k=R[0],F=R[1],_=(0,v.useState)(!1),N=(0,n.Z)(_,2),j=N[0],P=N[1],w=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:x},e),{},{ref:(0,o.lq)(r,(function(e){e&&F(!0)}))})}),[x]),C=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:r,"data-focus":(0,m.PB)(j),"data-disabled":(0,m.PB)(s),"data-invalid":(0,m.PB)(t),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:f,htmlFor:void 0!==e.htmlFor?e.htmlFor:p})}),[p,s,j,t,d,f]),B=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:b},e),{},{ref:(0,o.lq)(r,(function(e){e&&y(!0)})),"aria-live":"polite"})}),[b]),S=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:r,role:"group","data-focus":(0,m.PB)(j),"data-disabled":(0,m.PB)(s),"data-invalid":(0,m.PB)(t),"data-readonly":(0,m.PB)(d)})}),[u,s,j,t,d]),T=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!a,isInvalid:!!t,isReadOnly:!!d,isDisabled:!!s,isFocused:!!j,onFocus:function(){return P(!0)},onBlur:function(){return P(!1)},hasFeedbackText:g,setHasFeedbackText:y,hasHelpText:k,setHasHelpText:F,id:p,labelId:f,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:w,getErrorMessageProps:B,getRootProps:S,getLabelProps:C,getRequiredIndicatorProps:T}}((0,u.Lr)(e)),s=t.getRootProps,b=(t.htmlProps,(0,l.Z)(t,f)),x=(0,m.cx)("chakra-form-control",e.className);return(0,p.jsx)(q,{value:b,children:(0,p.jsx)(Z,{value:a,children:(0,p.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},s({},r)),{},{className:x,__css:a.container}))})})}));k.displayName="FormControl",(0,s.G)((function(e,r){var a=R(),l=I(),n=(0,m.cx)("chakra-form__helper-text",e.className);return(0,p.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==a?void 0:a.getHelpTextProps(e,r)),{},{__css:l.helperText,className:n}))})).displayName="FormHelperText"},7438:function(e,r,a){a.d(r,{l:function(){return v}});var i=a(1413),l=a(4925),n=a(5350),t=a(5597),o=a(2481),s=a(2996),d=a(5113),u=a(6992),c=a(184),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,t.G)((function(e,r){var a,t=(0,o.mq)("FormLabel",e),v=(0,s.Lr)(e),h=(v.className,v.children),f=v.requiredIndicator,b=void 0===f?(0,c.jsx)(p,{}):f,x=v.optionalIndicator,Z=void 0===x?null:x,I=(0,l.Z)(v,m),g=(0,n.NJ)(),y=null!=(a=null==g?void 0:g.getLabelProps(I,r))?a:(0,i.Z)({ref:r},I);return(0,c.jsxs)(d.m.label,(0,i.Z)((0,i.Z)({},y),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,i.Z)({display:"block",textAlign:"start"},t),children:[h,(null==g?void 0:g.isRequired)?b:Z]}))}));v.displayName="FormLabel";var p=(0,t.G)((function(e,r){var a=(0,n.NJ)(),l=(0,n.e)();if(!(null==a?void 0:a.isRequired))return null;var t=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,i.Z)((0,i.Z)({},null==a?void 0:a.getRequiredIndicatorProps(e,r)),{},{__css:l.requiredIndicator,className:t}))}));p.displayName="RequiredIndicator"},7236:function(e,r,a){a.d(r,{I:function(){return f}});var i=a(1413),l=a(4925),n=a(5350),t=a(6992),o=["isDisabled","isInvalid","isReadOnly","isRequired"],s=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var r=function(e){var r,a,o,d=(0,n.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,p=e.isRequired,h=e.isInvalid,f=e.isReadOnly,b=e.isDisabled,x=e.onFocus,Z=e.onBlur,I=(0,l.Z)(e,s),g=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&g.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&g.push(d.helpTextId);return(0,i.Z)((0,i.Z)({},I),{},{"aria-describedby":g.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(r=null!=c?c:b)?r:null==d?void 0:d.isDisabled,isReadOnly:null!=(a=null!=m?m:f)?a:null==d?void 0:d.isReadOnly,isRequired:null!=(o=null!=v?v:p)?o:null==d?void 0:d.isRequired,isInvalid:null!=h?h:null==d?void 0:d.isInvalid,onFocus:(0,t.v0)(null==d?void 0:d.onFocus,x),onBlur:(0,t.v0)(null==d?void 0:d.onBlur,Z)})}(e),a=r.isDisabled,d=r.isInvalid,u=r.isReadOnly,c=r.isRequired,m=(0,l.Z)(r,o);return(0,i.Z)((0,i.Z)({},m),{},{disabled:a,readOnly:u,required:c,"aria-invalid":(0,t.Qm)(d),"aria-required":(0,t.Qm)(c),"aria-readonly":(0,t.Qm)(u)})}var u=a(5597),c=a(2481),m=a(2996),v=a(5113),p=a(184),h=["htmlSize"],f=(0,u.G)((function(e,r){var a=e.htmlSize,n=(0,l.Z)(e,h),o=(0,c.jC)("Input",n),s=d((0,m.Lr)(n)),u=(0,t.cx)("chakra-input",e.className);return(0,p.jsx)(v.m.input,(0,i.Z)((0,i.Z)({size:a},s),{},{__css:o.field,ref:r,className:u}))}));f.displayName="Input",f.id="Input"}}]);
//# sourceMappingURL=820.3e3e96e7.chunk.js.map