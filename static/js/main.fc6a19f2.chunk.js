(this.webpackJsonpmy_portfolio=this.webpackJsonpmy_portfolio||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(6),i=t.n(r),s=(t(12),t(1)),c=t(2),o=t(4),m=t(3),u=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Education")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,". ",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))}))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(n.Component),d=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"}),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),t}(n.Component),p=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))})))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",null,l.a.createElement("ul",null,e.skills&&e.skills.map((function(e){return l.a.createElement("li",{style:{display:"inline-block",margin:20}},l.a.createElement("em",{style:{color:"black"}},e.skillname))})))))))}}]),t}(n.Component),h=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map((function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:"#modal-01"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name))))),l.a.createElement("p",null,e.description),l.a.createElement("div",{style:{margin:"5px"}},l.a.createElement("a",{href:e.gitlink,target:"_blank",rel:"noopener noreferrer",style:{padding:"20px"}},l.a.createElement("i",{class:"fa fa-github-square fa-2x","aria-hidden":"true"})),l.a.createElement("a",{href:e.livelink,target:"_blank",rel:"noopener noreferrer",style:{padding:"20px"}},l.a.createElement("i",{class:"fa fa-play-circle-o fa-2x","aria-hidden":"true"}))))}))))))}}]),t}(n.Component),E=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Email:",e.email),l.a.createElement("h4",null,"Mobile Number :",e.number),l.a.createElement("h4",null,"Linked in :",e.linkedinId)))))}}]),t}(n.Component),f=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),g={name:"Suraj Singh Negi",role:"Full Stack Developer",linkedinId:"https://www.linkedin.com/in/surajnegi420",twitterid:"https://twitter.com/drunken__monk?s=09",number:" 8433188384 ",email:" 1234surajsinghnegi@gmail.com ",roleDescription:"I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/surajnegi420",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/007surajsinghnegi",className:"fa fa-github"},{name:"twitter",url:"https://twitter.com/drunken__monk?s=09",className:"fa fa-twitter"}],aboutme:"I am currently a final year student at Indian Institute of Information Technology,Una and pursuing my B.Tech from here. I am a self taught Full Stack Web Developer, currently diving deeper in web deveploment with python. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",address:"India",website:"https://github.com/007surajsinghnegi",education:[{UniversityName:"Indian Institute of Information Technology,Una",specialization:"B.Tech",MonthOfPassing:"May",YearOfPassing:"2021"},{UniversityName:"Kendriya Vidyalaya No.6 , Jaipur",specialization:"High School",MonthOfPassing:"May",YearOfPassing:"2016"}],skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Javascript"},{skillname:"Reactjs"},{skillname:"React Native"},{skillname:"NodeJs"}],portfolio:[{name:"Amazon-Clone",description:"Used React to create the Front End of Amazon and used Firebase for backend support (authorization and cloud database). Firebase is used to deploy the Amazon-clone.",imgurl:"https://cdn.vox-cdn.com/thumbor/kM6tkdwwl17xoMMxrxaTgk4XaY8=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/63968152/acastro_181114_1777_amazon_hq2_0006.0.jpg",gitlink:"https://github.com/007surajsinghnegi/Amazon-Clone.git",livelink:"https://clone-cf51f.web.app/"},{name:"Instagram-Clone",description:"Used React to create the Front End of Instagram and used Firebase for backend support (authorization and cloud database). Firebase is used to deploy the Instagram-clone.",imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwnEYJW-xEz-zU-C81qxgdTHcTToXctChfjw&usqp=CAU",gitlink:"https://github.com/007surajsinghnegi/instagram-clone.git",livelink:"https://instagram-clone-78223.web.app/"},{name:"Weather App",description:"Used React to create the Front End of Weather and used OpenWeatherAPI to access the weather data of different cities. GitHub.io is used to deploy the WeatherApp.",imgurl:"https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg",gitlink:"https://github.com/007surajsinghnegi/WeatherApp.git",livelink:"https://007surajsinghnegi.github.io/WeatherApp"},{name:"Tinder-Clone",description:"Used React to create the Front End of Tinder and used Firebase for backend support ( cloud database). Firebase is used to deploy the Tinder-clone.",imgurl:"https://lh3.googleusercontent.com/tPSknKHPUTRNsWt-YBQpcryIUlKiu3tjCdYgO7rFnpiRtl_oosb-oIZjM8LlHCLS5qY=w412-h732-rw",gitlink:"https://github.com/007surajsinghnegi/Tinder-Clone.git",livelink:"https://tinder-clone-c1c77.web.app/"}]},b=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,{resumeData:g}),l.a.createElement(d,{resumeData:g}),l.a.createElement(p,{resumeData:g}),l.a.createElement(h,{resumeData:g}),l.a.createElement(E,{resumeData:g}),l.a.createElement(f,{resumeData:g}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,a,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.fc6a19f2.chunk.js.map