(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{214:function(e,a,t){"use strict";t.r(a);var n=t(252),i=t(0),c=t.n(i),s=t(223),r=t(224),l=t(217),o=t(97),d=t.n(o),b=(t(253),t(226));a.default=function(){var e=n.data;return c.a.createElement(s.a,null,c.a.createElement(r.a,{title:"Projects"}),c.a.createElement("section",{className:"personal layout--max-width"},c.a.createElement(b.a,{text:"Featured Personal Projects",isCenter:!0}),c.a.createElement("p",{className:"personal__description"},"These are the projects that I'm most proud of and like to show off!"),c.a.createElement("div",{className:"personal__cards"},e.allProjectsJson.nodes.map(function(e){return c.a.createElement("div",{className:"card",key:e.id},c.a.createElement("a",{className:e.blogPost?"":"card__image--no-link",href:e.blogPost?e.blogPost:"javascript:void(0);"},c.a.createElement(d.a,{className:"card__image",fluid:e.image.childImageSharp.fluid})),c.a.createElement("div",{className:"card__content"},c.a.createElement("div",{className:"card__header"},c.a.createElement("h3",null,e.title),c.a.createElement("h5",null,e.stage)),c.a.createElement("p",{className:"card__description"},e.description),e.blogPost?c.a.createElement(l.a,{className:"card__read-more",to:e.blogPost},"Read more..."):null,c.a.createElement("div",{className:"card__footer"},c.a.createElement("div",{className:"card__footer__tags"},e.technologies.map(function(e,a){return c.a.createElement("span",{className:"tag",key:a},e)})),c.a.createElement("div",{className:"card__footer__links"},e.siteLink?c.a.createElement("a",{href:e.siteLink,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"card__footer__links__link",alt:"Site Url for title",src:"/svgs/link.svg"})):null,e.githubLink?c.a.createElement("a",{href:e.githubLink,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{className:"card__footer__links__link",alt:"Github Url for title",src:"/svgs/github-square.svg"})):null))))}))))}},217:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),i=t.n(n),c=t(70),s=t.n(c);t.d(a,"a",function(){return s.a});t(219),t(10).default.enqueue;var r=i.a.createContext({});function l(e){var a=e.staticQueryData,t=e.data,n=e.query,c=e.render,s=t?t.data:a[n]&&a[n].data;return i.a.createElement(i.a.Fragment,null,s&&c(s),!s&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var o=function(e){var a=e.data,t=e.query,n=e.render,c=e.children;return i.a.createElement(r.Consumer,null,function(e){return i.a.createElement(l,{data:a,query:t,render:n||c,staticQueryData:e})})}},219:function(e,a,t){var n;e.exports=(n=t(221))&&n.default||n},220:function(e){e.exports={data:{allExternalNavJson:{nodes:[{id:"2b170551-589b-5725-9807-a06afb55713f",image:"/svgs/link.svg",link:"/AlecDivito-resume.pdf",alt:"Alec Divito's Resume"},{id:"95ca9838-32fa-5041-b1c3-040725e30383",image:"/svgs/github-square.svg",link:"https://github.com/Alecdivito",alt:"Alec Divito's Github"},{id:"792e5d90-9b15-554a-a3cd-8a46d0ac4099",image:"/svgs/linkedin-square.svg",link:"https://www.linkedin.com/in/alec-divito-3a1922140/",alt:"Alec Divito's Linkedin"}]},allInternalNavJson:{nodes:[{id:"7d13ab7b-0e6c-5bca-b9d7-3bf0c40473b6",link:"/",ready:!0,title:"Home"},{id:"6c8e4850-2308-5fbf-ace2-e4fed6f8b2ac",link:"/about",ready:!0,title:"About"},{id:"965f9bad-4ffa-5c63-b197-512f045803cb",link:"/personal",ready:!0,title:"Projects"},{id:"1253e916-8c9b-57d0-9df0-38018f5966be",link:"/work",ready:!0,title:"Work"},{id:"c27a5e91-41bf-58e3-b1c1-fef6dbed9aeb",link:"/blog",ready:!1,title:"Blog"},{id:"cfe8c505-14e0-5d3d-9c72-87f43fb3755f",link:"/contact",ready:!0,title:"Contact"}]},site:{siteMetadata:{email:"divitoa@sheridancollege.ca",title:"Alec Divito's Resume website"}}}}},221:function(e,a,t){"use strict";t.r(a);t(53),t(18),t(13),t(14),t(7),t(22);var n=t(0),i=t.n(n),c=t(98);function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}a.default=function(e){var a=e.location,t=e.pageResources;return t?i.a.createElement(c.a,function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(t,!0).forEach(function(a){r(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({location:a,pageResources:t},t.json)):null}},222:function(e){e.exports={data:{file:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACwklEQVQ4y52U2U8TURTG+4cAIgVaWqhUCggS04DEJSSlLXSzDa2FWKEWyHShQEtUgixdqCSiNKA8GMEnY2JifDDxxUf+pc9z7nTaibLJw5c7c5ffnDnfuUdjfRCBO7CAUbcEhzdxJdk9cbj8KQyNTEMzJ23ioPwZ5XdH2Ht7JMaraH/vGMl0AZrp2BqKxQ+4c+8Jeqwh3BoMkx5X1TcUFlLP1RSujrmtfcxJG9BE514hnz+AoccLbecYWm6Oo8U8LsZWUoNxFE03nLV5c21deW42j2F9fQ9SMicDC/n3MPX7oetyo63bAwNJ1+UioAsP7bPotgbFO88bejxij87irj7rSRsbZUiJLSVCAvY9QisdMvZ6ca3djsnIcyQXCljKvBaJb+xwiDUG84fNAwEBFUAa/wF23vajzmDDxGSWwi+LFMRTOdwdmYGWflmGudFMaUlR8u+PxkSKzgEGUE9A78Qivn35gUh0FYFwBqGpFVw3OcRBzlV6aVvs4Tn+KMPOBfqCi/j5/ReOP35FerkkomJx8hfp3TuRFvsYpkR3KpBN0XY6MTA8heBUVkTBv8+JZ9hSpgQXXYB6ct3Y6xOw84FkihIJH2rssKOuzSaczqzsYJxuggyTc6m3XALILvOmdopAX3EwS7AxX7IK43lTn1+UkP7iCGWgMmayO3D6EgSzCVgbHWyx+LD75hOswyFo6W/OdFkN5FsQp6rn+lNgbEITOTtok3Dy+wTRp8tooHo1Vpw+E8iLDOB7zVdOKQ0+2NDuQFTK4+XqLlZf7EBndlIA3osj5A1shlIaVUdJXF5cj6b+AH3EI8w5BXiADpUpetWVUotz2KrKs3qNb5eUyMntSwFy7v6GXCSl8DnC+fim3GD3qcGWtg9F1+HeWCxcUpW928VDucFSM9Fw62fyzOwaYvPrePaf4jOctllqrlz8fwDWOz+R/k3RdgAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/b936dd19f0bb95bf2bcf7e283a46ef08/e9aae/logo.png",srcSet:"/static/b936dd19f0bb95bf2bcf7e283a46ef08/e22c9/logo.png 75w,\n/static/b936dd19f0bb95bf2bcf7e283a46ef08/e9aae/logo.png 128w",sizes:"(max-width: 128px) 100vw, 128px"}}}}}},223:function(e,a,t){"use strict";var n=t(220),i=t(0),c=t.n(i),s=t(217),r=(t(218),t(222)),l=t(97),o=t.n(l),d=function(){var e=r.data;return c.a.createElement(o.a,{className:"logo",alt:"Alec Di Vito logo",fluid:e.file.childImageSharp.fluid})},b=function(e){var a=e.links,t=e.navActive,n=e.onNavClick,i=e.children;return c.a.createElement("nav",{className:"nav"},c.a.createElement("div",{className:"nav--header"},c.a.createElement(s.a,{to:"/",className:"nav__logo"},c.a.createElement(d,null)),c.a.createElement("div",{className:"burger--wrapper"},c.a.createElement("div",{className:"burger "+(t?"burger--active":""),onClick:n}))),c.a.createElement("div",{className:"nav__mobile "+(t?"nav__list--dropdown":"")},c.a.createElement("div",{className:"nav__list"},a?a.filter(function(e){return e.ready}).map(function(e,a){return c.a.createElement(s.a,{key:e.id,to:e.link,className:"nav__list__item",activeClassName:"nav__list__item--active"},e.title)}):null),c.a.createElement("div",{className:"nav__children"},i)))},m=(t(227),function(e){var a=e.siteLinks,t=e.children;return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"footer__top layout--max-width"},c.a.createElement("div",{className:"footer__top__about"},c.a.createElement("h3",null,"Alec Di Vito"),c.a.createElement("p",null,"I'm a creative, ambitious, and enterprising software engineer as well as an aspiring designer and machine learning engineer.")),c.a.createElement("div",{className:"footer__top__blog"}),c.a.createElement("div",{className:"footer__top__site"},c.a.createElement("h3",null,"Site Links"),c.a.createElement("ul",{className:"footer__top__site__list"},a.filter(function(e){return e.ready}).map(function(e,a){return c.a.createElement("li",{key:a},c.a.createElement(s.a,{className:"link",to:e.link},e.title))})))),c.a.createElement("div",{className:"footer__bottom layout--max-width"},c.a.createElement("div",{className:"footer__bottom__copyright"},"Alec Divito © ",(new Date).getFullYear(),", Built with"," ",c.a.createElement("a",{className:"link",href:"https://www.gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby")),t))}),f=(t(228),function(e){var a=e.external,t=e.email;return c.a.createElement("div",{className:"footer--social"},t?c.a.createElement("a",{href:"mailto:"+t,className:"footer--social__email"},c.a.createElement("span",null,"Let's Talk"),c.a.createElement("span",null,t)):null,a.map(function(e){return c.a.createElement("a",{key:e.id,href:e.link,className:"footer--social__icon",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{src:e.image,alt:e.alt,className:"footer--social__icon"}))}))});t(229),a.a=function(e){var a=e.children,t=Object(i.useState)(!1),r=t[0],l=t[1],o=!1;return"/"===window.location.pathname&&(o=!0),c.a.createElement(s.b,{query:"3406259466",render:function(e){return c.a.createElement("div",{className:"page"},c.a.createElement(b,{links:e.allInternalNavJson.nodes,navActive:r,onNavClick:function(){return l(!r)}},c.a.createElement(f,{external:e.allExternalNavJson.nodes,email:e.site.siteMetadata.email})),c.a.createElement("main",{className:"page--content"},a),o?null:c.a.createElement(m,{siteLinks:e.allInternalNavJson.nodes},c.a.createElement(f,{external:e.allExternalNavJson.nodes})))},data:n})}},224:function(e,a,t){"use strict";var n=t(225),i=t(0),c=t.n(i),s=t(230),r=t.n(s);function l(e){var a=e.description,t=e.lang,i=e.meta,s=e.title,l=n.data.site,o=a||l.siteMetadata.description;return c.a.createElement(r.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:s},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:o}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},a.a=l},225:function(e){e.exports={data:{site:{siteMetadata:{title:"Alec Divito's Resume website",description:"Hi! I'm Alec Di Vito and I'm just another fullstack javascript engineer",author:"@alecdivito"}}}}},226:function(e,a,t){"use strict";var n=t(0),i=t.n(n);t(231);a.a=function(e){var a=e.text,t="header "+(e.isCenter?"header--center":"");return i.a.createElement("header",{className:t},i.a.createElement("h1",{className:"header__h1"},a))}},252:function(e){e.exports={data:{allProjectsJson:{nodes:[{id:"e20d8a9f-bcd1-5451-932f-da53ad34cceb",stage:"✔ Completed",title:"Budgetise",technologies:["Angular 2+","Nest.js","Express","Typescript","SQL","NGRX","SCSS","HTML","Javascript"],description:"Capstone project for my final year in the SDNE program at sheridan. Created to manage multiple McDonald's expenses.",blogPost:"/personal/budgetise",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAAAsSAAALEgHS3X78AAAB2ElEQVQoz11RS2/UMBDOn+UElVAvCAkqIbjwDzhy4ABFHMoFUDn3gFKJZbts973bJNtsNi/H8WPssc2kR6RP9oznm/F8MxF79OxeqqJqai4aLgcIxfoBrfgfFG17VfO+4qItksicnEEIVhkggNFgrHMmBAISnEd0ZDkcDKXBGnJC8MGgi8TjF/uuXVfbeb1G75RS90kqpnM+mgSLrOuSPLutl3t2wODLukqL7Ka83bR3VCaqn77aK5YUu32T9k5zwcu7VM5XZrH21FvH0uN+Xq8O/VE7KJoyKbNZs8rkoQcZmdM3eX6A31N3PcGuh4Yddwn8mep4ZOu2aettkY6bWSZyScltmVTpqJluedqpPoLnby1pEwJJLZd2UGUBwFvrLYK1pmeGbmV0Jw0ahk4TwyEgRvr0Nc3Gg0ZEIxWlKWMMzcc7572x6EBTIdd2hvfG2L5uAX3wHi1G8OSlpdkhPVCN4SDPo7dDttP6gamF/1s8xGxxPTmuMz1fNJtDBCdnygdoGsG5rDvohO6UqDvauGICaIMaguDHccU2y3yxiD9/nZ1f7s4vsnU+/KxDkEwi00hESZ0JtBCA1Fuv5ejbr+JqHP+4uftyufz0Pf5wEb/7Gb//uN/k/wBDsCnJWiL8uAAAAABJRU5ErkJggg==",aspectRatio:2.0021008403361344,src:"/static/1b9358dd091ac7321d29222935cc23ca/af144/budgetise.png",srcSet:"/static/1b9358dd091ac7321d29222935cc23ca/7c0ed/budgetise.png 200w,\n/static/1b9358dd091ac7321d29222935cc23ca/647de/budgetise.png 400w,\n/static/1b9358dd091ac7321d29222935cc23ca/af144/budgetise.png 800w,\n/static/1b9358dd091ac7321d29222935cc23ca/ba299/budgetise.png 1200w,\n/static/1b9358dd091ac7321d29222935cc23ca/9ecf6/budgetise.png 1600w,\n/static/1b9358dd091ac7321d29222935cc23ca/bdeec/budgetise.png 1906w",sizes:"(max-width: 800px) 100vw, 800px"}}},githubLink:null,siteLink:null},{id:"c5b53b55-04c5-5519-8893-b43bea715ecf",stage:"✔ Completed",title:"MineSweeper Clone",technologies:["Typescript","PWA","React","CRA","Canvas2d","Indexdb","CSS","HTML"],description:"A Minesweeper clone inspired by Google's proxx.app. Added more features on top of the game.",blogPost:"/personal/bomb-finder",image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACP0lEQVQ4y3XTz1MSYRwG8NdFnALRJH6DCSy4gjQpzSR1soGx6ceQoDZKEEgWOE6njko1k52aSepSeYs2+nHI1JnS7h3M/0Kbbln+BU/f3VVhcTx85nn3u9/n3dOyNqsFrWYTGNcE1sRqpGeOUtsMg80KnbSjO6a80zTsMgZtext0J41gH/QuvNe5UNFa8Ibs51tmhMg68I7yk9aGj1orqk0mmnfQ3IiKxlzbb7agetwhYzucHTucA/80zgO75HdXGNs9F7DdHcGWf0AmnX8J57FF+UfvwW5d7y+dJeynzgHJxgE7Nim/XYpjJZ3D6ngaqxMZlWWa/XAI2GyxYkOv9PbvYevtTtRbI9/J8tA1LFF5aSyFpRs1X8jnsQl8PdWD9VYb1k6o+0w0u9CoKuXV6xAzOYgTaYipjEpFmvFBiEY7REunqsvKji40ek5exhNYzOXxOn0Li5msyiuavegJoWx1oex0q7psrssLyayUbiVLbh5PEyMo56ewkM1hITepyCr5jGaPTp/BbKebOrzS3cMK/m40KvoFlEbH8GTqDuYn85jP75HPt/GY8l7/Wdz1+uTd+i4bCQRRLyllMIj7qRQezsygVCjiwfS0rFQskmnMFQpInxtAQhBot7fWpx4b7O/HxXD4kNHLV3AzmURqeBjj8bgslUgoaDYUiWCwr0/Vke5iAn3F5/Md4vV64fV44CG99OVQKASP2y3PJDzPq/Z5EggEwAwGg/wvHoXjOESjUcRiMfmsbWk5ctdkMuE/mUzQ+CQtjZoAAAAASUVORK5CYII=",aspectRatio:1.5673624288425048,src:"/static/9af3622bba468c0a0103f1a57dfa3f8b/af144/bomb-finder.png",srcSet:"/static/9af3622bba468c0a0103f1a57dfa3f8b/7c0ed/bomb-finder.png 200w,\n/static/9af3622bba468c0a0103f1a57dfa3f8b/647de/bomb-finder.png 400w,\n/static/9af3622bba468c0a0103f1a57dfa3f8b/af144/bomb-finder.png 800w,\n/static/9af3622bba468c0a0103f1a57dfa3f8b/76d90/bomb-finder.png 826w",sizes:"(max-width: 800px) 100vw, 800px"}}},githubLink:"https://github.com/AlecDivito/bomb-finder",siteLink:"https://alecdivito.github.io/bomb-finder/"},{id:"0242e85a-52b5-5537-bb89-adb04032124d",stage:"⚠ In Progress",title:"Personal Website",technologies:["Gatsby","Javascript","React","Canvas2d","SCSS","HTML"],description:"This website! Learning gatsby (which is pretty cool) and creating a blog and resume website at the same time!",blogPost:null,image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAABIklEQVQ4y5WSvU6EQBSF57UkZu1NTOzNqsVq7aP4GlBR0EFHQkEsiIWVlS5kYVUSw2j4u0dmhDjL4gKTfDl3uJeTM5Nh9+d34Cc3wGIFWgjdhyQr4PgW8dkSr6cX+Dy6xlZbItWu8K5d4qNB1IxHW1CYAA2d9qGut06QJzG+4w2qpi7DWFK1KmBoF2F8TZlhVBMEULTP7kzdQor+wermY0dVVRKi3yydzlns3+P1TKeaM8/z4Ps+giCA67pwHAdpmg6aTzK0LAu6rsO2bZimCcMwEEWRbBZFMT+hGCzLEnmeSwNxl6LOsgycc3mnsw1Hn8ucI4vhMWYlVFOoP9dU7+yn9AafTT+Juj/UO5gw4SGe3h6QfK33eiLdc/qIDX8ZTPgDjS4wMuLe7K4AAAAASUVORK5CYII=",aspectRatio:1.3863898500576701,src:"/static/bc6960dba52ed5564b05ce3b12ecf115/af144/PersonalWebsite.png",srcSet:"/static/bc6960dba52ed5564b05ce3b12ecf115/7c0ed/PersonalWebsite.png 200w,\n/static/bc6960dba52ed5564b05ce3b12ecf115/647de/PersonalWebsite.png 400w,\n/static/bc6960dba52ed5564b05ce3b12ecf115/af144/PersonalWebsite.png 800w,\n/static/bc6960dba52ed5564b05ce3b12ecf115/ba299/PersonalWebsite.png 1200w,\n/static/bc6960dba52ed5564b05ce3b12ecf115/43b96/PersonalWebsite.png 1202w",sizes:"(max-width: 800px) 100vw, 800px"}}},githubLink:"https://github.com/AlecDivito/bomb-finder",siteLink:null},{id:"5037f013-0d20-5155-85d7-2c6b58d19fd9",stage:"⚠ In Progress",title:"Rusty Bitmap",technologies:["Rust"],description:"A small library that focuses on creating a library on crates.io and hopefully a webassembly one on npm. Ability to read, edit and write bitmaps.",blogPost:null,image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACD0lEQVQoz23Sy2sTURTH8f4TbUzSFowgmEfbvDuZTCaTTC1JFApdGEp8LezCdOmqW/0nXLhwowvFahGVbkSsiAqCLm1JtBRR16Konfv1ZDLTjo/F4d5ZzIffOfeMYK3gVrXrnqo6qC7KvV8E8wJftSWurqTpXpuksxjhV64KOQ2Vy8BsGoxp+TcFxxOMHGBSHoaHKcHQz3OlmaJzO8zq5RhvZ/OClVxM/YXRjAv4H8zxku0Zp0Frs9o4yqX5w7wuCJbR2QtgysWSLkbLTTjE2McG38t81zusH7G5HjW4kyzxcLLCrUiZrVQWSjOosp/Mx6SaA7AanJ+c5jLfBHsQs3kVqtIP13lyqMqbiMU7ud8TdDsr6WopnLkkShAfC7Q8RJ2KzKxyju3cAjdCOi/DFd5H63yM2uxIfRm32RyrsX5MHqORwJFSAcxr2UsoyRzjjMylTS/T4maozPOwwYuwya5g/UidzwI+Ha1xPyEJT8ZxBFIBzGt5iCGY0k/JfBb4UZxnI1ZmU1reilr0IjafBOuFbdbGS3wwZW4n4i6mAtgwoYudlfVou5iabUCxJrumCVpgY9RibULj0ZjJ3YkSO1ZiP507O7/llg+6mCTTPKxg4ciekcvys5jmcSLDrjbFs/Q0fTP1B6b8lltBsLwkyRZl41uSzEblDcjmUQWZkz4jrzkFc8MWB3WQ7F9sUL8BnkoStQiV+y8AAAAASUVORK5CYII=",aspectRatio:1.7777777777777777,src:"/static/fe4c2f284237605b717e630df01c13e9/af144/bitmap_logo.png",srcSet:"/static/fe4c2f284237605b717e630df01c13e9/7c0ed/bitmap_logo.png 200w,\n/static/fe4c2f284237605b717e630df01c13e9/647de/bitmap_logo.png 400w,\n/static/fe4c2f284237605b717e630df01c13e9/af144/bitmap_logo.png 800w,\n/static/fe4c2f284237605b717e630df01c13e9/ba299/bitmap_logo.png 1200w,\n/static/fe4c2f284237605b717e630df01c13e9/9ecf6/bitmap_logo.png 1600w,\n/static/fe4c2f284237605b717e630df01c13e9/ec873/bitmap_logo.png 1920w",sizes:"(max-width: 800px) 100vw, 800px"}}},githubLink:"https://github.com/AlecDivito/rusty-bitmap",siteLink:null},{id:"6ee6ee74-94e5-5c59-bf36-123824bf176c",stage:"⚠ In Progress",title:"Tetris Clone",technologies:["Rust","Web assembly","Typescript","Canvas2d","CSS","HTML"],description:"A tetris clone focusing on using webassembly compiled by rust. Used to learn advantages using webassembly beside javascript development",blogPost:null,image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABp0lEQVQoz5WTz2sTQRiGVwm1Nb82VbNZm6Qtsc1uzWZnZmc3CnpJQIJgoBTppZTSQ3uQFi8RxItnBUFQT170PxAv9a97nN2aqEXoenj5YOadh/eb+caKooi/pBQqrUGA9v1sTf9Sti+MBtr4IuNTXDxvXVxIYUkY0hqPqeztsbq+Tq1ep+Y2aN9o4ezewp6UEF1BFBu/UpcAjSHRmhXPo9zpUHMcZPE6vXKZUnWZ6oZDwV0m7Iu5/1JgWoVp+Z4QVBq3GSwW2VkqUC0vsDR4iDWeIKScd5QLqJQ05oS+3+SFJ+jeecmzt0ecbF+jaRcITEKtcyQ8lyI28uSAd0OHH58k3tdv1D9/5/GwQ69tsdWT+YAzQwbsJ3w4aHD2pM50/4jiqwccnC6w6V/FM6njOHdCA9SKbhDz/vkaX95c4fBsymj3I1ulVdxFl15oxirS+YGpQiWYxCP8nRFrj14zPQ5R7iYrlTbB/wBTk1LndylDM9SeRgrJ/bsa+2kVa2jln8M/H2YGjWKV/QqtE5rdFvZNGxHmnMO5afa11O/EGVTqrNV/wVL9BESxfqZJWoTEAAAAAElFTkSuQmCC",aspectRatio:1.7029608404966572,src:"/static/ff935cbab67bc1a63baabb978fb5c9a9/af144/tetris.png",srcSet:"/static/ff935cbab67bc1a63baabb978fb5c9a9/7c0ed/tetris.png 200w,\n/static/ff935cbab67bc1a63baabb978fb5c9a9/647de/tetris.png 400w,\n/static/ff935cbab67bc1a63baabb978fb5c9a9/af144/tetris.png 800w,\n/static/ff935cbab67bc1a63baabb978fb5c9a9/ba299/tetris.png 1200w,\n/static/ff935cbab67bc1a63baabb978fb5c9a9/9ecf6/tetris.png 1600w,\n/static/ff935cbab67bc1a63baabb978fb5c9a9/29703/tetris.png 1783w",sizes:"(max-width: 800px) 100vw, 800px"}}},githubLink:"https://github.com/AlecDivito/weby-rusty-tetris",siteLink:null}]}}}}}]);
//# sourceMappingURL=component---src-pages-personal-js-39345a65887e2ec63536.js.map