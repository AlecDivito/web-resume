(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{216:function(e,t,a){"use strict";a.r(t);a(251);var n=a(0),i=a.n(n),r=a(217),c=a(253),l=a(223),o=a(222),s=(a(230),function(e){var t=e.children,a=Object(n.useState)(!1),s=a[0],d=a[1];return i.a.createElement(r.b,{query:"3134031423",render:function(e){return i.a.createElement("div",{className:"page"},i.a.createElement(l.a,{links:e.allInternalNavJson.nodes,navActive:s,onNavClick:function(){return d(!s)}},i.a.createElement(o.a,{external:e.allExternalNavJson.nodes,email:e.site.siteMetadata.email})),i.a.createElement("main",{className:"page--content"},t))},data:c})}),d=a(225),m=(a(254),function(){function e(e,t){var a=this;if(!e)throw new Error("Couldn't create particles because canvas doesn't exist");this.canvas=e,this.context=e.getContext("2d"),this.particles=[],this.maxParticles=t,this.width=e.clientWidth,this.height=e.clientHeight,e.height=this.height,e.width=this.width,this.angle=0,this.deltaTime=1/60;for(var n=0;n<t;n++)this.particles.push({x:Math.random()*this.width,y:Math.random()*this.height,radius:5*Math.random()+1,density:Math.random()*t,color:"rgba("+Math.floor(255*Math.random())+", "+Math.floor(255*Math.random())+", "+Math.floor(255*Math.random())+", 0.8)"});window.addEventListener("resize",function(){a.width=e.clientWidth,a.header=e.clientHeight,e.height=a.height,e.width=a.width})}var t=e.prototype;return t.update=function(){this.angle+=.01;for(var e=0;e<this.maxParticles;e++){var t=this.particles[e],a=this.angle+t.density;t.y+=Math.cos(a)+t.radius/2,t.x+=Math.sin(a),(t.x>this.width+t.radius||t.y<-1*t.radius||t.y>this.height+t.radius)&&(t.x=Math.random()*this.width,t.y=0)}},t.render=function(){this.context.clearRect(0,0,this.width,this.height);for(var e=0;e<this.maxParticles;e++){var t=this.particles[e];this.context.beginPath(),this.context.fillStyle=t.color,this.context.moveTo(t.x,t.y),this.context.arc(t.x,t.y,t.radius,0,2*Math.PI),this.context.fill()}},e}());t.default=function(){var e=null;return"undefined"!=typeof window&&window.requestAnimationFrame(function t(){if(!e){var a=document.getElementById("bg-canvas");if(!a)return void("undefined"!=typeof window&&window.requestAnimationFrame(t));e=new m(a,25)}e.update(),e.render(),"undefined"!=typeof window&&window.requestAnimationFrame(t)}),i.a.createElement(s,null,i.a.createElement(d.a,{title:"Home"}),i.a.createElement("canvas",{id:"bg-canvas",className:"home--background"}),i.a.createElement("div",{className:"home"},i.a.createElement("div",null),i.a.createElement("header",{className:"home__header"},i.a.createElement("h1",{className:"home__header--name"},"Alec Di",i.a.createElement("span",{className:"home__header--name--space"},"Vito")),i.a.createElement("h3",{className:"home__header--title"},"Full Stack Web Developer"),i.a.createElement("p",{className:"home__header__description"},"Aspiring Designer and Machine Learning Engineer"),i.a.createElement(r.a,{className:"home__header--learn link",to:"/about"},"Learn More")),i.a.createElement("section",{className:"home__section"},i.a.createElement("div",{className:"home__section__links"},i.a.createElement(r.a,{className:"home__section__links--link link",to:"/personal/"},"projects"),i.a.createElement(r.a,{className:"home__section__links--link link",to:"/about/"},"work")))))}},217:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),i=a.n(n),r=a(70),c=a.n(r);a.d(t,"a",function(){return c.a});a(219),a(10).default.enqueue;var l=i.a.createContext({});function o(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,c=a?a.data:t[n]&&t[n].data;return i.a.createElement(i.a.Fragment,null,c&&r(c),!c&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return i.a.createElement(l.Consumer,null,function(e){return i.a.createElement(o,{data:t,query:a,render:n||r,staticQueryData:e})})}},219:function(e,t,a){var n;e.exports=(n=a(220))&&n.default||n},220:function(e,t,a){"use strict";a.r(t);a(53),a(18),a(13),a(14),a(7),a(22);var n=a(0),i=a.n(n),r=a(98);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(r.a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach(function(t){l(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({location:t,pageResources:a},a.json)):null}},221:function(e){e.exports={data:{file:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACwklEQVQ4y52U2U8TURTG+4cAIgVaWqhUCggS04DEJSSlLXSzDa2FWKEWyHShQEtUgixdqCSiNKA8GMEnY2JifDDxxUf+pc9z7nTaibLJw5c7c5ffnDnfuUdjfRCBO7CAUbcEhzdxJdk9cbj8KQyNTEMzJ23ioPwZ5XdH2Ht7JMaraH/vGMl0AZrp2BqKxQ+4c+8Jeqwh3BoMkx5X1TcUFlLP1RSujrmtfcxJG9BE514hnz+AoccLbecYWm6Oo8U8LsZWUoNxFE03nLV5c21deW42j2F9fQ9SMicDC/n3MPX7oetyo63bAwNJ1+UioAsP7bPotgbFO88bejxij87irj7rSRsbZUiJLSVCAvY9QisdMvZ6ca3djsnIcyQXCljKvBaJb+xwiDUG84fNAwEBFUAa/wF23vajzmDDxGSWwi+LFMRTOdwdmYGWflmGudFMaUlR8u+PxkSKzgEGUE9A78Qivn35gUh0FYFwBqGpFVw3OcRBzlV6aVvs4Tn+KMPOBfqCi/j5/ReOP35FerkkomJx8hfp3TuRFvsYpkR3KpBN0XY6MTA8heBUVkTBv8+JZ9hSpgQXXYB6ct3Y6xOw84FkihIJH2rssKOuzSaczqzsYJxuggyTc6m3XALILvOmdopAX3EwS7AxX7IK43lTn1+UkP7iCGWgMmayO3D6EgSzCVgbHWyx+LD75hOswyFo6W/OdFkN5FsQp6rn+lNgbEITOTtok3Dy+wTRp8tooHo1Vpw+E8iLDOB7zVdOKQ0+2NDuQFTK4+XqLlZf7EBndlIA3osj5A1shlIaVUdJXF5cj6b+AH3EI8w5BXiADpUpetWVUotz2KrKs3qNb5eUyMntSwFy7v6GXCSl8DnC+fim3GD3qcGWtg9F1+HeWCxcUpW928VDucFSM9Fw62fyzOwaYvPrePaf4jOctllqrlz8fwDWOz+R/k3RdgAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/b936dd19f0bb95bf2bcf7e283a46ef08/e9aae/logo.png",srcSet:"/static/b936dd19f0bb95bf2bcf7e283a46ef08/e22c9/logo.png 75w,\n/static/b936dd19f0bb95bf2bcf7e283a46ef08/e9aae/logo.png 128w",sizes:"(max-width: 128px) 100vw, 128px"}}}}}},222:function(e,t,a){"use strict";a(218);var n=a(0),i=a.n(n);a(229);t.a=function(e){var t=e.external,a=e.email;return i.a.createElement("div",{className:"footer--social"},a?i.a.createElement("a",{href:"mailto:"+a,className:"footer--social__email"},i.a.createElement("span",null,"Let's Talk"),i.a.createElement("span",null,a)):null,t.map(function(e){return i.a.createElement("a",{key:e.id,href:e.link,className:"footer--social__icon",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:e.image,alt:e.alt,className:"footer--social__icon"}))}))}},223:function(e,t,a){"use strict";a(218);var n=a(0),i=a.n(n),r=a(217),c=a(221),l=a(97),o=a.n(l),s=function(){var e=c.data;return i.a.createElement(o.a,{className:"logo",alt:"Alec Di Vito logo",fluid:e.file.childImageSharp.fluid})};t.a=function(e){var t=e.links,a=e.navActive,n=e.onNavClick,c=e.children;return i.a.createElement("nav",{className:"nav"},i.a.createElement("div",{className:"nav--header"},i.a.createElement(r.a,{to:"/",className:"nav__logo"},i.a.createElement(s,null)),i.a.createElement("div",{className:"burger--wrapper"},i.a.createElement("div",{className:"burger "+(a?"burger--active":""),onClick:n}))),i.a.createElement("div",{className:"nav__mobile "+(a?"nav__list--dropdown":"")},i.a.createElement("div",{className:"nav__list"},t?t.filter(function(e){return e.ready}).map(function(e,t){return i.a.createElement(r.a,{key:e.id,to:e.link,className:"nav__list__item",activeClassName:"nav__list__item--active"},e.title)}):null),i.a.createElement("div",{className:"nav__children"},c)))}},225:function(e,t,a){"use strict";var n=a(226),i=a(0),r=a.n(i),c=a(232),l=a.n(c);function o(e){var t=e.description,a=e.lang,i=e.meta,c=e.title,o=n.data.site,s=t||o.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(i)})}o.defaultProps={lang:"en",meta:[],description:""},t.a=o},226:function(e){e.exports={data:{site:{siteMetadata:{title:"Alec Divito's Resume website",description:"Hi! I'm Alec Di Vito and I'm just another fullstack javascript engineer",author:"@alecdivito"}}}}},251:function(e,t,a){var n=a(1);n(n.P,"Array",{fill:a(252)}),a(75)("fill")},252:function(e,t,a){"use strict";var n=a(20),i=a(150),r=a(19);e.exports=function(e){for(var t=n(this),a=r(t.length),c=arguments.length,l=i(c>1?arguments[1]:void 0,a),o=c>2?arguments[2]:void 0,s=void 0===o?a:i(o,a);s>l;)t[l++]=e;return t}},253:function(e){e.exports={data:{allExternalNavJson:{nodes:[{id:"2b170551-589b-5725-9807-a06afb55713f",image:"/svgs/link.svg",link:"/AlecDivito-resume.pdf",alt:"Alec Divito's Resume"},{id:"95ca9838-32fa-5041-b1c3-040725e30383",image:"/svgs/github-square.svg",link:"https://github.com/Alecdivito",alt:"Alec Divito's Github"},{id:"792e5d90-9b15-554a-a3cd-8a46d0ac4099",image:"/svgs/linkedin-square.svg",link:"https://www.linkedin.com/in/alec-divito-3a1922140/",alt:"Alec Divito's Linkedin"}]},allInternalNavJson:{nodes:[{id:"7d13ab7b-0e6c-5bca-b9d7-3bf0c40473b6",link:"/",ready:!0,title:"Home"},{id:"6c8e4850-2308-5fbf-ace2-e4fed6f8b2ac",link:"/about",ready:!0,title:"About"},{id:"965f9bad-4ffa-5c63-b197-512f045803cb",link:"/personal",ready:!0,title:"Projects"},{id:"1253e916-8c9b-57d0-9df0-38018f5966be",link:"/work",ready:!0,title:"Work"},{id:"c27a5e91-41bf-58e3-b1c1-fef6dbed9aeb",link:"/blog",ready:!1,title:"Blog"},{id:"cfe8c505-14e0-5d3d-9c72-87f43fb3755f",link:"/contact",ready:!0,title:"Contact"}]},site:{siteMetadata:{email:"divitoa@sheridancollege.ca",title:"Alec Divito's Resume website"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-8feb14abe4a65732af90.js.map