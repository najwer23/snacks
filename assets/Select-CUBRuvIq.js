import{j as o}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";import{I as f}from"./Input-CpI6in9X.js";const _="_selectWrapper_13fl3_2",D="_arrowDown_13fl3_9",j="_arrowUp_13fl3_17",v="_selectDropdown_13fl3_27",x="_open_13fl3_41",E="_selectDropdownItem_13fl3_45",e={selectWrapper:_,arrowDown:D,arrowUp:j,selectDropdown:v,open:x,selectDropdownItem:E},a=({validatorOptions:d,name:i,label:u,selectOptions:m,...w})=>{const n=s.useRef(null),c=s.useRef(null),[t,l]=s.useState(!1);return s.useEffect(()=>{function r(p){n.current&&!n.current.contains(p.target)&&t&&l(!1)}return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[t,n]),o.jsxs("div",{ref:n,className:[e.selectWrapper,e.arrowUp].join(" "),children:[o.jsx(f,{innerRef:c,label:u,type:"select",kind:"input",name:i,onClick:()=>{l(!t)},readOnly:!0,validatorOptions:d,className:t?e.arrowDown:e.arrowUp,...w}),o.jsx("div",{className:[e.selectDropdown,t?e.open:""].join(" "),children:m.map((r,p)=>o.jsx("div",{className:e.selectDropdownItem,onClick:()=>{c.current.value=r,l(!1),c.current.dispatchEvent(new Event("input",{bubbles:!0}))},children:r},p))})]})};a.displayName="Select";a.__docgenInfo={description:"",methods:[],displayName:"Select"};export{a as S};
