"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[228],{228:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,i=t(2791),o=t(9434),s=t(4270),u=function(n){return n.contacts.loading},c=function(n){return n.contacts.items},l=function(n){return n.filter},d=t(3634),m=t(168),p=t(7686),x=p.Z.li(r||(r=(0,m.Z)(["\n  font-size: 16px;\n  margin-bottom: 10px;\n\n  button {\n    margin-left: 10px;\n  }\n"]))),f=t(3329),h=function(){var n=(0,o.v9)(c);console.log(n);var e=(0,o.v9)(l),t=(0,o.I0)(),r=function(){if(n)return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}();return(0,f.jsx)("ul",{children:r.map((function(n){return(0,f.jsxs)(x,{children:[n.name,": ",n.number,(0,f.jsx)("button",{onClick:function(){t((0,d.GK)(n.id))},children:"Delete"})]},n.id)}))})},b=t(5705),j=(0,p.Z)(b.l0)(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 200px;\n  input {\n    width: 150px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n  button {\n    width: 100px;\n    border-radius: 20px;\n  }\n  border: solid 1px;\n  padding: 10px;\n"]))),g={name:"",number:""},v=function(){var n=(0,o.v9)(c),e=(0,o.I0)(),t=function(t){var r=t.name,a=t.number;if(n.some((function(n){return n.name.toLowerCase()===r.toLowerCase()})))alert("".concat(r," is already in contacts."));else{var i={name:r,number:a};e((0,d.uK)(i))}};return(0,f.jsx)(b.J9,{initialValues:g,onSubmit:function(n,e){var r=e.resetForm;t(n),r()},children:(0,f.jsxs)(j,{children:[(0,f.jsxs)("label",{children:["Name",(0,f.jsx)(b.gN,{type:"text",name:"name",pattern:"^[A-Za-z\\u0080-\\uFFFF ']+$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,f.jsxs)("label",{children:["Number",(0,f.jsx)(b.gN,{type:"tel",name:"number",pattern:"^(\\+?[0-9.\\(\\)\\-\\s]*)$",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,f.jsx)("button",{type:"submit",children:"Add contact"})]})})};function w(){var n=(0,o.I0)(),e=(0,o.v9)(u);return(0,i.useEffect)((function(){n((0,d.yF)())}),[n]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.q,{children:(0,f.jsx)("title",{children:"Your contacts"})}),(0,f.jsx)(v,{}),(0,f.jsx)("div",{children:e&&"Request in progress..."}),(0,f.jsx)(h,{})]})}}}]);
//# sourceMappingURL=228.6ab1b2d4.chunk.js.map