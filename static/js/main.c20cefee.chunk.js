(this.webpackJsonpcsci39547_assignment4=this.webpackJsonpcsci39547_assignment4||[]).push([[0],{15:function(e,n,t){e.exports=t(26)},20:function(e,n,t){},21:function(e,n,t){},24:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(1),l=t.n(a),i=(t(20),t(2)),s=t(3),c=t(6),d=t(5),f=(t(21),function(e){var n=e.selectedColor,t=e.getSelectedColor;return r.a.createElement("select",{value:n,onChange:t},r.a.createElement("option",{value:"green"},"green"),r.a.createElement("option",{value:"red"},"red"),r.a.createElement("option",{value:"blue"},"blue"),r.a.createElement("option",{value:"purple"},"purple"))}),u=function(e){var n=e.rows,t=e.cols;return r.a.createElement("div",{className:"container dimension"},r.a.createElement("p",{style:{fontWeight:900,fontSize:14}},"Row Size ",n),r.a.createElement("p",{style:{fontWeight:900,fontSize:14}},"Column Size ",t),r.a.createElement("p",{style:{fontWeight:900,fontSize:14}},"Total Squares ",t*n))},m=t(7),p=t(8);function g(){var e=Object(m.a)(["\n  background: blue;\n  width: 100%;\n  color: white;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n"]);return g=function(){return e},e}function b(){var e=Object(m.a)(["\n  display: inline-flex;\n  height: 40px;\n  width: fit-content;\n  border: 2px solid #fff;\n  margin: 20px;\n  padding: 5px 20px;\n  color: #333;\n  background: #fff;\n  text-transform: uppercase;\n  text-decoration: none;\n  font-size: 0.8em;\n  letter-spacing: 1.5px;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n\n  &:hover {\n    animation: LGBT-Flag-animation 2.5s ease-in-out infinite;\n    background: linear-gradient(\n      70deg,\n      #ff0018,\n      #ffa52c,\n      #ffff41,\n      #008018,\n      #0000f9,\n      #86007d\n    );\n    color: white;\n    font-weight: bold;\n    border-color: white;\n  }\n  /* Hover Animation (rainbow) */\n  @keyframes LGBT-Flag-animation {\n    0% {\n      background: linear-gradient(\n        70deg,\n        #ff0018,\n        #ffa52c,\n        #ffff41,\n        #008018,\n        #0000f9,\n        #86007d\n      );\n    }\n    20% {\n      background: linear-gradient(\n        120deg,\n        #ff0018,\n        #ffa52c,\n        #ffff41,\n        #008018,\n        #0000f9,\n        #86007d\n      );\n    }\n    40% {\n      background: linear-gradient(\n        150deg,\n        #ff0018,\n        #ffa52c,\n        #ffff41,\n        #008018,\n        #0000f9,\n        #86007d\n      );\n    }\n\n    60% {\n      background: linear-gradient(\n        150deg,\n        #ff0018,\n        #ffa52c,\n        #ffff41,\n        #008018,\n        #0000f9,\n        #86007d\n      );\n    }\n    80% {\n      background: linear-gradient(\n        170deg,\n        #ff0018,\n        #ffa52c,\n        #ffff41,\n        #008018,\n        #0000f9,\n        #86007d\n      );\n    }\n\n    100% {\n      background: linear-gradient(\n        190deg,\n        #ff0018,\n        #ffa52c,\n        #ffff41,\n        #008018,\n        #0000f9,\n        #86007d\n      );\n    }\n  }\n"]);return b=function(){return e},e}function w(){var e=Object(m.a)(["\n  height: 1000vh;\n  width: 100%;\n  color: white;\n  max-width: 100%;\n\n  /* Chrome, Safari, Opera */\n-webkit-animation-name:myfirst;\n-webkit-animation-duration:20s;\n-webkit-animation-timing-function:linear;\n-webkit-animation-delay:0s;\n-webkit-animation-iteration-count:infinite;\n-webkit-animation-direction:alternate;\n-webkit-animation-play-state:running;\n/* Standard syntax */\nanimation-name:LGBTFlagColors;\nanimation-duration:20s;\nanimation-timing-function:linear;\nanimation-delay:0s;\nanimation-iteration-count:infinite;\nanimation-direction:alternate;\nanimation-play-state:running;\n}\n\n\n/* Animation keyframe */\n/* Chrome, Safari, Opera */\n@-webkit-keyframes LGBTFlagColors\n{\n0%   {background: #FF0018; left:0px; top:0px;}\n20%  {background: #FFA52C; left:0px; top:0px;}\n40%  {background: #FFFF41; left:0px; top:0px;}\n60%  {background: #008018; left:0px; top:0px;}\n80%  {background: #0000F9; left:0px; top:0px;}\n100% {background: #86007D; left:0px; top:0px;}\n}\n\n/* Standard syntax */\n@keyframes LGBTFlagColors\n{\n0%   {background: #FF0018; left:0px; top:0px;}\n20%  {background: #FFA52C; left:0px; top:0px;}\n40%  {background: #FFFF41; left:0px; top:0px;}\n60%  {background: #008018; left:0px; top:0px;}\n80%  {background: #0000F9; left:0px; top:0px;}\n100% {background: #86007D; left:0px; top:0px;}\n}\n"]);return w=function(){return e},e}var h=p.a.div(w()),v=p.a.button(b()),k=(p.a.button(g()),function(e){Object(c.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))).state={rows:e.props.rows,cols:e.props.cols},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state,n=e.rows,t=e.cols;return r.a.createElement("div",{className:"container"},r.a.createElement(v,{className:"btn-sm btn-primary m-2",onClick:this.props.addRow},"Add Row"),r.a.createElement(v,{className:"btn-sm btn-primary m-2",onClick:this.props.addCol},"Add Column"),r.a.createElement(v,{className:"btn-sm btn-primary m-2",onClick:this.props.removeRow},"Remove Row"),r.a.createElement(v,{className:"btn-sm btn-primary m-1",onClick:this.props.removeCol},"Remove Column"),n>0&t>0?r.a.createElement("div",{className:"grid view btn",id:"gv-btn"},r.a.createElement(v,{className:"btn-sm  m-2",onClick:this.props.fillAll},"Fill All"),r.a.createElement(v,{className:"btn-sm btn-primary m-2",onClick:this.props.fillUncolored},"Fill Uncolored"),r.a.createElement(v,{className:"btn-sm btn-primary m-2",onClick:this.props.clearGrid},"Clear")):null,r.a.createElement(v,{className:"btn-sm btn-primary m-2",style:{backgroundColor:"red"},onClick:this.props.resetGrid},"Reset Grid"),r.a.createElement(f,{selectedColor:this.props.selectedColor,getSelectedColor:this.props.getSelectedColor}),r.a.createElement(u,{rows:n,cols:t}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return n.rows!==e.rows||n.cols!==e.cols?{rows:e.rows,cols:e.cols}:null}}]),t}(o.Component)),C=(t(24),function(e){var n=e.rows,t=e.cols,o=(e.colorBox,e.colorMultiple),a=e.onMouseRelease,l=e.onMouseDown;return n>0&t>0?r.a.createElement("table",{className:"container",id:"grid"},Array.from(Array(n),(function(e,n){return r.a.createElement("div",{className:"row",key:n,id:"row"},Array.from(Array(t),(function(e,n){return r.a.createElement("div",{className:"container col",key:n,onMouseOver:function(e){return o(e)},onMouseDown:function(e){return l(e)},onMouseUp:function(e){return a(e)},id:"col"})})))}))):null}),y=function(e){Object(c.a)(t,e);var n=Object(d.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=n.call(this,e)).addRow=function(){var e=o.state,n=e.rows,t=e.cols,r=n+1;0===t?o.setState({rows:r,cols:t+1}):o.setState({rows:r})},o.addCol=function(){var e=o.state,n=e.rows,t=e.cols+1;0===n?o.setState({cols:t,rows:n+1}):o.setState({cols:t})},o.removeRow=function(){var e=o.state.rows-1;o.setState({rows:e<0?0:e})},o.removeCol=function(){var e=o.state.cols-1;o.setState({cols:e<0?0:e})},o.resetGrid=function(){var e=o.state,n=e.rows,t=e.cols;0===n&&0===t?alert("you good bro"):o.setState({rows:0,cols:0})},o.fillAll=function(){for(var e=o.state,n=e.rows,t=e.cols,r=e.selectedColor,a=l.a.findDOMNode(o.myRef.current).childNodes[1].childNodes,i=0;i<n;i++)for(var s=0;s<t;s++)a[i].childNodes[s].style.backgroundColor=r},o.fillUncolored=function(){for(var e=o.state,n=e.rows,t=e.cols,r=e.selectedColor,a=l.a.findDOMNode(o.myRef.current).childNodes[1].childNodes,i=0;i<n;i++)for(var s=0;s<t;s++)""===a[i].childNodes[s].style.backgroundColor&&(a[i].childNodes[s].style.backgroundColor=r)},o.clearGrid=function(){for(var e=o.state,n=e.rows,t=e.cols,r=l.a.findDOMNode(o.myRef.current).childNodes[1].childNodes,a=0;a<n;a++)for(var i=0;i<t;i++)r[a].childNodes[i].style.backgroundColor=""},o.onMouseRelease=function(e){o.setState({mouseReleased:!0,mouseDown:!1})},o.onMouseDown=function(e){o.setState({mouseDown:!0,mouseReleased:!1}),e.target.style.backgroundColor=o.state.selectedColor},o.colorMultiple=function(e){!0===o.state.mouseDown&&(e.target.style.backgroundColor=o.state.selectedColor)},o.getSelectedColor=function(e){o.setState({selectedColor:e.target.value})},o.state={rows:1,cols:1,selectedColor:"green",mouseReleased:!0,mouseDown:!1},o.myRef=r.a.createRef(),o}return Object(s.a)(t,[{key:"render",value:function(){var e=this.state,n=e.rows,t=e.cols,o=e.selectedColor;return r.a.createElement(h,{className:"container",ref:this.myRef},r.a.createElement(k,{addRow:this.addRow,addCol:this.addCol,removeRow:this.removeRow,removeCol:this.removeCol,resetGrid:this.resetGrid,fillAll:this.fillAll,fillUncolored:this.fillUncolored,clearGrid:this.clearGrid,getSelectedColor:this.getSelectedColor,selectedColor:o,rows:n,cols:t}),r.a.createElement(C,{rows:n,cols:t,colorMultiple:this.colorMultiple,onMouseRelease:this.onMouseRelease,onMouseDown:this.onMouseDown}))}}]),t}(o.Component);t(25),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.c20cefee.chunk.js.map