(this["webpackJsonptic-toc-ieo-game"]=this["webpackJsonptic-toc-ieo-game"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(2),l=n.n(c),o=(n(12),n(3)),r=n(4),s=n(6),x=n(5),u=(n(13),function(t){Object(s.a)(n,t);var e=Object(x.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={box:[{text:"",clickEvent:!0},{text:"",clickEvent:!0},{text:"",clickEvent:!0},{text:"",clickEvent:!0},{text:"",clickEvent:!0},{text:"",clickEvent:!0},{text:"",clickEvent:!0},{text:"",clickEvent:!0},{text:"",clickEvent:!0}],palyText:"X",eventContinue:!0,winMsg:"",winnerText:"",winStyle:null},t.drawCheck=function(){var e=0;return t.state.box.map((function(t){!1===t.clickEvent&&e++})),e},t.winCheck=function(){var e=t.state.box,n="",a=function(t,e,a){var i="X"===t.text&&"X"===e.text&&"X"===a.text,c="O"===t.text&&"O"===e.text&&"O"===a.text;i?(console.log("X is win"),n="X"):c&&(console.log("O is win"),n="O")};return a(e[0],e[1],e[2]),a(e[3],e[4],e[5]),a(e[6],e[7],e[8]),a(e[0],e[3],e[6]),a(e[1],e[4],e[7]),a(e[2],e[5],e[8]),a(e[0],e[4],e[8]),a(e[2],e[4],e[6]),n||n},t.playGame=function(){if(t.state.eventContinue)return"X"===t.state.palyText?t.setState({palyText:"O"}):t.setState({palyText:"X"}),t.state.palyText},t.handleClick=function(e){var n=e.target.id;if(t.state.box[n].clickEvent){var a=t.state.box;a.splice(n,1,{text:t.playGame(),clickEvent:!1});var i=t.winCheck();i?t.setState({boxText:a,eventContinue:!1,winMsg:i,winnerText:"Winner!",winStyle:{transform:"scale(1)"}}):9===t.drawCheck()?t.setState({boxText:a,eventContinue:!1,winMsg:"X|O",winnerText:"Draw!",winStyle:{transform:"scale(1)"}}):t.setState({boxText:a})}},t.reloadHandle=function(){var e=t.state.box.map((function(t){return t.text="",t.clickEvent=!0,t}));t.setState({box:e,palyText:"X",eventContinue:!0,winMsg:"",winnerText:"",winStyle:null})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"Tic Tac Toe"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"overlay",onClick:this.reloadHandle,style:this.state.winStyle},i.a.createElement("div",null,i.a.createElement("h1",null,this.state.winMsg),i.a.createElement("h2",null,this.state.winnerText))),i.a.createElement("div",{className:"box",onClick:function(e){return t.handleClick(e)},id:"0"},this.state.box[0].text),i.a.createElement("div",{className:"box y",onClick:function(e){return t.handleClick(e)},id:"1"},this.state.box[1].text),i.a.createElement("div",{className:"box",onClick:function(e){return t.handleClick(e)},id:"2"},this.state.box[2].text),i.a.createElement("div",{className:"box x",onClick:function(e){return t.handleClick(e)},id:"3"},this.state.box[3].text),i.a.createElement("div",{className:"box x y",onClick:function(e){return t.handleClick(e)},id:"4"},this.state.box[4].text),i.a.createElement("div",{className:"box x",onClick:function(e){return t.handleClick(e)},id:"5"},this.state.box[5].text),i.a.createElement("div",{className:"box",onClick:function(e){return t.handleClick(e)},id:"6"},this.state.box[6].text),i.a.createElement("div",{className:"box y",onClick:function(e){return t.handleClick(e)},id:"7"},this.state.box[7].text),i.a.createElement("div",{className:"box",onClick:function(e){return t.handleClick(e)},id:"8"},this.state.box[8].text))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.45c3a9fa.chunk.js.map