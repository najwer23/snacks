import{j as o}from"./jsx-runtime-DEdD30eg.js";const m="_container_15bq5_2",p="_columns_15bq5_10",s={container:m,columns:p},r=({children:t,widthMin:d=0,widthMax:i=1920,padding:n=0,margin:u="auto",layout:c,gap:a,col:e,...l})=>{if(c=="container")return o.jsx("div",{className:s.container,style:{"--widthMin":d+"px","--widthMax":i+"px","--padding":n,"--margin":u},...l,children:t});if(!a||!e)throw new Error('When layout="columns", gap and col props are required');return o.jsx("div",{className:s.columns,style:{"--col-mobile":e.mobile,"--col-tablet":e.tablet,"--col-small-desktop":e.smallDesktop,"--col-desktop":e.desktop,"--col-gap":a.col,"--row-gap":a.row},...l,children:t})};r.displayName="Grid";r.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{widthMin:{defaultValue:{value:"0",computed:!1},required:!1},widthMax:{defaultValue:{value:"1920",computed:!1},required:!1},padding:{defaultValue:{value:"0",computed:!1},required:!1},margin:{defaultValue:{value:"'auto'",computed:!1},required:!1}}};export{r as G};
