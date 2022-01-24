import{o as n,c as i,a as e,b as x,r as b,d as y,F as p,e as h,f as m,t as c,n as f,g,h as w}from"./vendor.04b92a5b.js";const k=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function d(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=d(t);fetch(t.href,r)}};k();var v=(a,o)=>{const d=a.__vccOpts||a;for(const[l,t]of o)d[l]=t;return d};const B={name:"TitleBar"},C={class:"px-10 py-4"},L=e("div",{class:"container mx-auto flex justify-center"},[e("h1",{class:"text-3xl font-semibold"},"Pokemon Stats")],-1),P=[L];function z(a,o,d,l,t,r){return n(),i("header",C,P)}var N=v(B,[["render",z]]);const O={components:{TitleBar:N},data(){return{pokemon_list:[],pokemon:{name:null,base_experience:null,height:null,weight:null,sprites:[],profile:null,types:[],forms:[],abilities:[],moves:[],stats:[]},nav_start:0,nav_end:10,pages:0,isLoading:!0,offset:0,overlay:!1}},beforeCreate(){},created(){this.getPokemonList()},mounted(){setTimeout(()=>{this.isLoading=!1},2e3)},methods:{async getPokemonList(){try{const o=(await x.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset="+this.offset)).data.results;for(let d=0;d<o.length;d++)try{const t=(await x.get(o[d].url)).data;this.pokemon_list.push(t)}catch(l){console.log(l)}}catch(a){console.log(a)}},async getIndiPokemon(a){var o=a.toLowerCase();try{const l=(await x.get("http://pokeapi.co/api/v2/pokemon/"+o)).data;this.pokemon.name=l.name,this.pokemon.base_experience=l.base_experience,this.pokemon.height=l.height,this.pokemon.weight=l.weight,this.pokemon.sprites=l.sprites,this.pokemon.types=l.types,this.pokemon.forms=l.forms,this.pokemon.abilities=l.abilities,this.pokemon.moves=l.moves,this.pokemon.stats=l.stats,console.log(this.pokemon),this.pokemon={pokemon:{name:null,base_experience:null,height:null,weight:null,sprites:[],types:[],forms:[],abilities:[],moves:[],stats:[]}},document.getElementById("search").value=""}catch(d){console.log(d)}},async goBack(){console.log(!(this.nav_start-10<0)),this.nav_start-10<0||(this.nav_start-=10,this.nav_end-=10)},async goForward(){this.nav_end+10>1120||(this.nav_start+=10,this.nav_end+=10,this.offset+=10,this.getPokemonList())},async searchTable(){const a=document.getElementById("search").value;this.getIndiPokemon(a),console.log(this.pokemon)},toggleOverlay(a){this.pokemon=a,this.pokemon.profile=a.sprites.other.home.front_default,this.overlay=!this.overlay}}},T={id:"main",class:"container mx-auto px-10"},j={class:"flex flex-col"},E={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},M={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},F={class:"shadow overflow-hidden border-b border-slate-200 sm:rounded-lg"},S={class:"min-w-full divide-y divide-slate-200"},H=e("thead",{class:"bg-slate-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider flex items-center"},[e("div",{class:""},[e("p",null,"Name")])]),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider"}," Height "),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider"}," Weight "),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider"}," Types "),e("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-slate-100 uppercase tracking-wider"}," Base Experience ")])],-1),I={class:"bg-slate-100 divide-y divide-slate-200"},V={class:"px-6 py-2 whitespace-nowrap"},A={class:"flex items-center"},q={class:"flex-shrink-0 h-10 w-10"},D=["src"],K=["src"],W={class:"ml-4"},G=["onClick"],J={class:"px-6 py-2 whitespace-nowrap"},Q={class:"text-sm text-slate-900"},R=e("span",null,"cm",-1),U={class:"px-6 py-2 whitespace-nowrap"},X={class:"text-sm text-slate-900"},Y=e("span",null,"g",-1),Z={class:"px-6 py-2 whitespace-nowrap"},$={class:"flex space-x-1"},ee={class:"px-6 py-2"},te={class:"text-sm text-slate-900"},se={class:"bg-slate-100 px-4 py-3 flex items-center justify-between border-t border-slate-300 shadow sm:px-6 sm:rounded-lg"},oe={class:"flex-1 flex justify-between items-center"},le={class:"border border-slate-300 px-4 py-2 rounded-md text-sm font-medium text-slate-800"},ne=e("span",null,"to",-1),ie=e("svg",{xmlns:"http://www.w3.org/2000/svg",height:"36px",viewBox:"0 0 24 24",width:"36px",fill:"#000000"},[e("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"})],-1),re=[ie],ae={class:"flex flex-row space-x-4 justify-start items-end"},ce=["src"],de={class:"font-semibold text-2xl pb-2"},pe={class:"font-medium text-md pb-4"},he=m(" Types: "),me={class:"flex -space-x-1"},ue=["src"],_e={class:"flex flex-col space-x-0 space-y-2 md:flex-row md:space-x-2 md:space-y-0 mt-4"},xe={class:"bg-white/70 backdrop-blur-xl md:w-4/6 h-fit rounded-lg py-2 px-4 shadow-xl"},fe={class:"grid grid-cols-2 gap-3"},ge={class:"border-b uppercase mb-2 text-sm"},ve={class:"text-sm font-light"},be=m(" Base Stat: "),ye={class:"text-sm font-light"},we=m(" Effort: "),ke={class:"md:w-2/6 flex-row space-y-2"},Be={class:"bg-white/70 backdrop-blur-xl rounded-lg shadow-xl py-2 px-3"},Ce=e("p",{class:"border-b text-base mb-2"},"Abilities \u{1F447}\u{1F3FC}",-1),Le={class:"text-sm"},Pe={class:"bg-white/70 backdrop-blur-xl w-full h-fit rounded-lg shadow-xl py-2 px-3"},ze=e("p",{class:"border-b text-base mb-2"},"Moves \u{1F447}\u{1F3FC}",-1),Ne={class:"text-sm"},Oe={key:0,id:"loader",class:"top-0 bottom-0 left-0 right-0 fixed z-10 bg-slate-900 flex flex-col items-center justify-center"},Te=e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"72px",viewBox:"0 0 24 24",width:"72px",fill:"#e54545"},[e("rect",{fill:"none",height:"24",width:"24"}),e("path",{d:"M14.5,12c0,1.38-1.12,2.5-2.5,2.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5C13.38,9.5,14.5,10.62,14.5,12z M22,12 c0,5.52-4.48,10-10,10C6.48,22,2,17.52,2,12S6.48,2,12,2C17.52,2,22,6.48,22,12z M20,12h-4c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4H4 c0,4.41,3.59,8,8,8C16.41,20,20,16.41,20,12z"})])],-1),je=e("div",null,[e("span",{class:"text-white text-3xl font-bold"},"Pokemon Stats")],-1),Ee=[Te,je];function Me(a,o,d,l,t,r){const u=b("TitleBar");return n(),i(p,null,[y(u),e("div",T,[e("div",j,[e("div",E,[e("div",M,[e("div",F,[e("table",S,[H,e("tbody",I,[(n(!0),i(p,null,h(t.pokemon_list.slice(t.nav_start,t.nav_end),s=>(n(),i("tr",{key:s,id:"table-row"},[e("td",V,[e("div",A,[e("div",q,[s.sprites.front_default!=null?(n(),i("img",{key:0,src:s.sprites.front_default,alt:""},null,8,D)):(n(),i("img",{key:1,src:s.sprites.back_default,alt:""},null,8,K))]),e("div",W,[e("div",null,[e("button",{onClick:_=>r.toggleOverlay(s),class:"text-sm font-medium text-slate-900 uppercase hover:text-emerald-700"},c(s.name),9,G)])])])]),e("td",J,[e("div",Q,[m(c(s.height),1),R])]),e("td",U,[e("div",X,[m(c(s.weight),1),Y])]),e("td",Z,[e("div",$,[(n(!0),i(p,null,h(s.types,_=>(n(),i("div",{key:_,class:"text-sm text-slate-200 px-3 py-1 inline-flex leading-5 rounded-full bg-emerald-700 w-fit shadow-sm"},c(_.type.name),1))),128))])]),e("td",ee,[e("div",te,c(s.base_experience),1)])]))),128))])])])])])]),e("div",se,[e("div",oe,[e("button",{class:"relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-800 hover:text-slate-200 hover:bg-slate-800",onClick:o[0]||(o[0]=(...s)=>r.goBack&&r.goBack(...s))}," Previous "),e("p",le,[m(c(t.nav_start)+" ",1),ne,m(" "+c(t.nav_end),1)]),e("button",{class:"ml-3 relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-800 hover:text-slate-200 hover:bg-slate-800",onClick:o[1]||(o[1]=(...s)=>r.goForward&&r.goForward(...s))}," Next ")])]),e("div",{class:f(["container mx-auto bg-white/70 backdrop-blur-xl z-20 absolute top-0 w-full h-full md:w-3/5 lg:w-4/5 xl:w-3/6 2xl:w-3/6 border border-white rounded-l-lg right-0 px-8 sm:px-14 py-16 sm:py-20 overflow-auto",t.overlay?"absolute":"hidden"])},[e("div",null,[e("button",{class:"absolute top-5 left-4",onClick:o[2]||(o[2]=s=>t.overlay=!t.overlay)},re),e("div",ae,[e("div",null,[e("img",{src:this.pokemon.profile,alt:"Photo",class:"w-48 bg-white/30 border backdrop-blur-lg rounded-xl shadow-md"},null,8,ce)]),e("div",null,[e("div",null,[e("p",de,c(this.pokemon.name),1)]),e("div",null,[e("p",pe,[he,(n(!0),i(p,null,h(t.pokemon.types,s=>(n(),i("span",{key:s,class:"flex-row mx-1 bg-green-600 text-sm px-2 py-1 rounded-full shadow-md"},c(s.type.name),1))),128))])]),e("div",me,[(n(!0),i(p,null,h(Object.fromEntries(Object.entries(t.pokemon.sprites).slice(0,6)),s=>(n(),i("div",{key:s},[s!=null&&typeof s=="string"?(n(),i("img",{key:0,src:s,class:"w-12 h-12 rounded-full shadow-lg bg-white backdrop-blur-lg"},null,8,ue)):g("",!0)]))),128))])])]),e("div",_e,[e("div",xe,[e("div",null,[e("div",fe,[(n(!0),i(p,null,h(t.pokemon.stats,s=>(n(),i("div",{key:s,class:"bg-white/80 backdrop-blur-xl w-full h-32 shadow-md rounded-lg py-2 px-2"},[e("p",ge,c(s.stat.name),1),e("p",ve,[be,e("span",null,c(s.base_stat),1)]),e("p",ye,[we,e("span",null,c(s.effort),1)])]))),128))])])]),e("div",ke,[e("div",Be,[Ce,(n(!0),i(p,null,h(t.pokemon.abilities,s=>(n(),i("div",{key:s},[e("p",Le,c(s.ability.name),1)]))),128))]),e("div",Pe,[ze,(n(!0),i(p,null,h(t.pokemon.moves.slice(0,15),s=>(n(),i("div",{key:s},[e("p",Ne,c(s.move.name),1)]))),128))])])])])],2),e("div",{class:f(["absolute z-10 top-0 bottom-0 left-0 bg-black/30 backdrop-blur w-screen h-full",t.overlay?"absolute":"hidden"]),onClick:o[3]||(o[3]=s=>t.overlay=!t.overlay)},null,2)]),t.isLoading?(n(),i("div",Oe,Ee)):g("",!0)],64)}var Fe=v(O,[["render",Me]]);w(Fe).mount("#app");
