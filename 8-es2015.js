(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ndul:function(n,e,t){"use strict";t.r(e);var a=t("8Y7J");class l{}var i=t("xYTU"),o=t("NcP4"),r=t("pMnS"),s=t("bujt"),d=t("Fwaw"),u=t("5GAg"),c=t("omvX"),p=t("SVse"),m=t("c9fC"),b=t("5Bek"),g=t("zMNK"),f=t("8bJo"),h=a.qb({encapsulation:2,styles:[".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;border-radius:4px;overflow:hidden;transition:margin 225ms cubic-bezier(.4,0,.2,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:4px;border-top-left-radius:4px}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:4px;border-bottom-left-radius:4px}@media (-ms-high-contrast:active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel._mat-animation-noopable,.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px}.mat-action-row button.mat-button-base{margin-left:8px}[dir=rtl] .mat-action-row button.mat-button-base{margin-left:0;margin-right:8px}"],data:{animation:[{type:7,name:"bodyExpansion",definitions:[{type:0,name:"collapsed, void",styles:{type:6,styles:{height:"0px",visibility:"hidden"},offset:null},options:void 0},{type:0,name:"expanded",styles:{type:6,styles:{height:"*",visibility:"visible"},offset:null},options:void 0},{type:1,expr:"expanded <=> collapsed, void => collapsed",animation:{type:4,styles:null,timings:"225ms cubic-bezier(0.4,0.0,0.2,1)"},options:null}],options:{}}]}});function x(n){return a.Mb(0,[(n()(),a.hb(0,null,null,0))],null,null)}function w(n){return a.Mb(2,[a.Ib(671088640,1,{_body:0}),a.Cb(null,0),(n()(),a.sb(2,0,[[1,0],["body",1]],null,5,"div",[["class","mat-expansion-panel-content"],["role","region"]],[[24,"@bodyExpansion",0],[1,"aria-labelledby",0],[8,"id",0]],[[null,"@bodyExpansion.done"]],function(n,e,t){var a=!0;return"@bodyExpansion.done"===e&&(a=!1!==n.component._bodyAnimationDone.next(t)&&a),a},null,null)),(n()(),a.sb(3,0,null,null,3,"div",[["class","mat-expansion-panel-body"]],null,null,null,null,null)),a.Cb(null,1),(n()(),a.hb(16777216,null,null,1,null,x)),a.rb(6,212992,null,0,g.c,[a.j,a.O],{portal:[0,"portal"]},null),a.Cb(null,2)],function(n,e){n(e,6,0,e.component._portal)},function(n,e){var t=e.component;n(e,2,0,t._getExpandedState(),t._headerId,t.id)})}var y=a.qb({encapsulation:2,styles:[".mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:0}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-expansion-panel-header-description,.mat-expansion-panel-header-title{display:flex;flex-grow:1;margin-right:16px}[dir=rtl] .mat-expansion-panel-header-description,[dir=rtl] .mat-expansion-panel-header-title{margin-right:0;margin-left:16px}.mat-expansion-panel-header-description{flex-grow:2}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:'';display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle}"],data:{animation:[{type:7,name:"indicatorRotate",definitions:[{type:0,name:"collapsed, void",styles:{type:6,styles:{transform:"rotate(0deg)"},offset:null},options:void 0},{type:0,name:"expanded",styles:{type:6,styles:{transform:"rotate(180deg)"},offset:null},options:void 0},{type:1,expr:"expanded <=> collapsed, void => collapsed",animation:{type:4,styles:null,timings:"225ms cubic-bezier(0.4,0.0,0.2,1)"},options:null}],options:{}},{type:7,name:"expansionHeight",definitions:[{type:0,name:"collapsed, void",styles:{type:6,styles:{height:"{{collapsedHeight}}"},offset:null},options:{params:{collapsedHeight:"48px"}}},{type:0,name:"expanded",styles:{type:6,styles:{height:"{{expandedHeight}}"},offset:null},options:{params:{expandedHeight:"64px"}}},{type:1,expr:"expanded <=> collapsed, void => collapsed",animation:{type:3,steps:[{type:11,selector:"@indicatorRotate",animation:{type:9,options:null},options:{optional:!0}},{type:4,styles:null,timings:"225ms cubic-bezier(0.4,0.0,0.2,1)"}],options:null},options:null}],options:{}}]}});function v(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,0,"span",[["class","mat-expansion-indicator"]],[[24,"@indicatorRotate",0]],null,null,null,null))],null,function(n,e){n(e,0,0,e.component._getExpandedState())})}function k(n){return a.Mb(2,[(n()(),a.sb(0,0,null,null,3,"span",[["class","mat-content"]],null,null,null,null,null)),a.Cb(null,0),a.Cb(null,1),a.Cb(null,2),(n()(),a.hb(16777216,null,null,1,null,v)),a.rb(5,16384,null,0,p.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],function(n,e){n(e,5,0,e.component._showToggle())},null)}var B=t("BV1i"),D=t("IP0z"),M=t("Xd0L"),S=t("cUpR"),C=t("/HVE"),O=t("hOhj"),_=a.qb({encapsulation:2,styles:[],data:{}});function I(n){return a.Mb(2,[a.Cb(null,0)],null,null)}var E=a.qb({encapsulation:2,styles:[],data:{animation:[{type:7,name:"transform",definitions:[{type:0,name:"open, open-instant",styles:{type:6,styles:{transform:"none",visibility:"visible"},offset:null},options:void 0},{type:0,name:"void",styles:{type:6,styles:{"box-shadow":"none",visibility:"hidden"},offset:null},options:void 0},{type:1,expr:"void => open-instant",animation:{type:4,styles:null,timings:"0ms"},options:null},{type:1,expr:"void <=> open, open-instant => void",animation:{type:4,styles:null,timings:"400ms cubic-bezier(0.25, 0.8, 0.25, 1)"},options:null}],options:{}}]}});function z(n){return a.Mb(2,[(n()(),a.sb(0,0,null,null,1,"div",[["class","mat-drawer-inner-container"]],null,null,null,null,null)),a.Cb(null,0)],null,null)}var P=a.qb({encapsulation:2,styles:[".mat-drawer-container{position:relative;z-index:1;box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:background-color,visibility}@media (-ms-high-contrast:active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:.4s;transition-timing-function:cubic-bezier(.25,.8,.25,1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%,0,0)}@media (-ms-high-contrast:active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media (-ms-high-contrast:active){.mat-drawer.mat-drawer-end,[dir=rtl] .mat-drawer{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer{transform:translate3d(100%,0,0)}[dir=rtl] .mat-drawer.mat-drawer-end{left:0;right:auto;transform:translate3d(-100%,0,0)}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}"],data:{}});function T(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,0,"div",[["class","mat-drawer-backdrop"]],[[2,"mat-drawer-shown",null]],[[null,"click"]],function(n,e,t){var a=!0;return"click"===e&&(a=!1!==n.component._onBackdropClicked()&&a),a},null,null))],null,function(n,e){n(e,0,0,e.component._isShowingBackdrop())})}function j(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,2,"mat-drawer-content",[["class","mat-drawer-content"]],[[4,"margin-left","px"],[4,"margin-right","px"]],null,null,I,_)),a.rb(1,1294336,[[1,4]],0,B.d,[a.h,B.c,a.k,O.b,a.y],null,null),a.Cb(0,2)],function(n,e){n(e,1,0)},function(n,e){n(e,0,0,a.Db(e,1)._container._contentMargins.left,a.Db(e,1)._container._contentMargins.right)})}function A(n){return a.Mb(2,[a.Ib(671088640,1,{_userContent:0}),(n()(),a.hb(16777216,null,null,1,null,T)),a.rb(2,16384,null,0,p.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),a.Cb(null,0),a.Cb(null,1),(n()(),a.hb(16777216,null,null,1,null,j)),a.rb(6,16384,null,0,p.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,2,0,t.hasBackdrop),n(e,6,0,!t._content)},null)}var L=t("igqZ"),F=a.qb({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}});function H(n){return a.Mb(2,[a.Cb(null,0),a.Cb(null,1)],null,null)}var J=t("GyhO"),N=t("LRne"),R=t("128B");function K(n,e,t){return 0===t?[e]:(n.push(e),n)}let U=(()=>{class n{constructor(){this.projects={title:"Projects",contents:[{title:"Food Truck Finder",subtitle:"https://ztgluis.github.io/food-truck-challenge",bulletpoints:["This project is a coding challenge with the objective to help anyone in San Francisco find the five closest food trucks to them"]},{title:"Angular Starter with Bootstrap + Material Design",subtitle:"https://ztgluis.github.io/angular-bootstrap-material-starter",bulletpoints:["This project is an Angular starter pack with a robust set of configurations and features integrating Angular Material and Bootstrap to enable quick scaffolding of the project"]}]},this.workExperience={title:"Work Experience",contents:[{title:"Capital One",subtitle:"Manager, Software Engineering",startDate:"July 2019",endDate:"Present",bulletpoints:["People Manager for a software engineering team of 5 developers","Individual Contributor leading the decomposition of monolithic application into micro-service architecture, automated the CI/CD processes and management of AWS resources","Partner with Product Owner, external teams and stakeholders to prioritize and schedule feature releases"]},{title:"Capital One",subtitle:"Principal Software Engineer",startDate:"June 2017",endDate:"July 2019",bulletpoints:["Front-end rewrite for two mission-critical internal Cyber platforms using Angular, TypeScript, CSS3, HTML5, RxJS, D3 and created a custom style system using Material, Bootstrap, D3 and PrimeNG","Defined standards and conventions for Unit Testing with Jasmine, Karma and Jest","Development of Express, NodeJS, MongoDB REST API's and integrate with vendor tools","Development of Microservices using Docker, Kotlin, Scala, Spark and Python","Management and deployment of AWS resources for Computing, Storage, Load Balancing, etc","Drive collaboration with customers and stakeholders to prioritize feature requests","Certified Secure Software Engineer","Complete rewrite and redesign of two high-visibility Cyber platforms used enterprise wide","Technical Lead and mentor for developers across 3 dev teams"]},{title:"Apptricity Corporation",subtitle:"Front End Developer",startDate:"May 2016",endDate:"June 2017",bulletpoints:["Development of the UI/UX for the company's latest suite of web application using: HTML5, AngularJS, SASS and Bootstrap","Responsive Mobile design and Cross-Browser compatibility","Use of third-party libraries such as UI-Router, UI-Bootstrap, drag-and-drop, etc","Worked with an Agile team using Atlassian products: JIRA, Confluence, BitBucket, SourceTree","Leading and mentoring of junior team members"]},{title:"Ziosk",subtitle:"UI/UX Engineer",startDate:"December 2013",endDate:"May 2016",bulletpoints:["Develop and design User Interface Layouts and application skins tailored to each client supporting the Ziosk Tablet main features such as Pay-at-the-table, menu ordering, email club and game launcher","Partnered with clients to build Customer Experience Surveys at their specifications","Collaborated with Marketing for sourcing digital assets and QA team for validations and deployments","Closely worked with developers of internal applications to provide feedback and suggest improvements","Developed the User Experience for all the company's clients and ensured timely deliveries","Implemented a CMS-driven mechanism to dynamically source new content without redeploying binaries"]},{title:"Grupo Revuelta",subtitle:"Webmaster",startDate:"September 2011",endDate:"Nov 2013",bulletpoints:["Design and develop the websites of the Group's companies using HTML, CSS, JavaScript, jQuery and XSLT","www.revuelta.com.mx (Umbraco CMS with VB .NET)","www.rawelt.com.mx (NopCommerce CMS with VB .NET)","www.ganaderiarevuelta.com.mx (Umbraco CMS with VB .NET)","Management of Email Marketing, Google AdWords, SEO and Social Media strategies for all brands","Graphic design, Photography, Video editing and Photoshop for media content generation of all sites","Firmware development to enable custom functionality in electronic weighing scale indicators to control traffic lights, positioning sensors, RFID antennas, etc","Development of a desktop application to interface with weighing scales via serial port using VB .NET","Defined and implemented marketing campaigns and analytic metrics doubling online sales within a year","Developed an internal web application for categorizing and managing a large collection of digital assets"]},{title:"Cia Comercial Cimaco",subtitle:"Webmaster",startDate:"September 2009",endDate:"September 2011",bulletpoints:["Team Manager of 3 photographers and 2 graphic designers","Develop the company's websites with HTML, CSS, JavaScript and JQuery and a COBOL backend:","www.cimaco.com.mx (main eCommerce site)","www.plazacuatrocaminos.com.mx (Mall directory)","www.mayca.mx (Brand/product website)","Design and development of the web application for in-store kiosks","Management of Email Marketing, Google AdWords, SEO and Social Media campaigns","Web design, photography and Photoshop of website themes, banners, promotions, email campaigns","Implemented marketing campaigns and online chat increased online sales by 50% with 6 months","Reduced site's load times by less than half and by optimizing code to adhere to web standards"]},{title:"Universidad Autonoma de la Laguna",subtitle:"Tech Support Engineer",startDate:"September 2007",endDate:"September 2009",bulletpoints:["Managed Microsoft Active Directory and Microsoft Exchange Server user accounts for all students","Maintained and troubleshooted hardware and software for over 150 PCs and Macs for students use","Created a desktop application to check-in students to public workstations and provide usage metrics","Created a point-of-sale desktop application to record sales of office supplies and printing services","Part time teacher for Microsoft Office classes to freshman students"]}]},this.education={title:"Education",contents:[{title:"Universidad Autonoma de la Laguna",subtitle:"Bachelor of Science, Computer Systems Engineering",startDate:"August 2003",endDate:"December 2007"}]},this.skills={title:"Skills",contents:["Typescript","JavaScript","Angular","SASS","HTML","Bootstrap","MongoDB","Material Design","Amazon Web Services (AWS)","Node.js","Express","REST API's","Technical Leadership","People Manager","Docker","CI/CD","Unit Testing","Responsive Web Design","User Interface Design","Test Driven Development"]}}getSections(){return Object(J.a)(Object(N.a)(this.skills),Object(N.a)(this.projects),Object(N.a)(this.workExperience),Object(N.a)(this.education)).pipe(Object(R.a)(K,[]))}}return n.ngInjectableDef=a.Qb({factory:function(){return new n},token:n,providedIn:"root"}),n})();class W{constructor(n,e){this.mediaObserver=n,this.resumeService=e,this.mediaObserver$=this.mediaObserver.asObservable()}ngOnInit(){this.sections=this.resumeService.getSections()}}var q=t("/q54"),$=a.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:flex;flex:1}ul[_ngcontent-%COMP%]{-webkit-padding-start:20px;padding-inline-start:20px}.page-container[_ngcontent-%COMP%]{margin:1em .1em}.mat-progress-spinner[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}mat-drawer-container[_ngcontent-%COMP%]{flex:.99}mat-drawer-container[_ngcontent-%COMP%]   .mat-drawer[_ngcontent-%COMP%]{background:0 0}mat-drawer-container[_ngcontent-%COMP%]   .mat-drawer-side[_ngcontent-%COMP%]{border-right:none}mat-drawer-container[_ngcontent-%COMP%]   mat-drawer.sidenav[_ngcontent-%COMP%]{width:300px}"]],data:{}});function G(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,0,"div",[],null,null,null,null,null))],null,null)}function V(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,3,"span",[["class","m-2"]],null,null,null,null,null)),(n()(),a.sb(1,0,null,null,2,"button",[["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,s.d,s.b)),a.rb(2,180224,null,0,d.b,[a.k,u.e,[2,c.a]],null,null),(n()(),a.Kb(3,0,["",""]))],null,function(n,e){n(e,1,0,a.Db(e,2).disabled||null,"NoopAnimations"===a.Db(e,2)._animationMode),n(e,3,0,e.context.$implicit)})}function Q(n){return a.Mb(0,[(n()(),a.hb(16777216,null,null,1,null,V)),a.rb(1,278528,null,0,p.j,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null),(n()(),a.hb(0,null,null,0))],function(n,e){n(e,1,0,e.parent.parent.context.$implicit.contents)},null)}function X(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,0,"div",[],null,null,null,null,null))],null,null)}function Z(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(n()(),a.Kb(1,null,[" "," "]))],null,function(n,e){n(e,0,0,e.parent.context.$implicit.subtitle),n(e,1,0,e.parent.context.$implicit.subtitle)})}function Y(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,1,"strong",[],null,null,null,null,null)),(n()(),a.Kb(1,null,["",""]))],null,function(n,e){n(e,1,0,e.parent.context.$implicit.subtitle)})}function nn(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,1,"div",[["class","text-muted"]],null,null,null,null,null)),(n()(),a.Kb(1,null,[" "," - "," "]))],null,function(n,e){n(e,1,0,e.parent.context.$implicit.startDate,e.parent.context.$implicit.endDate)})}function en(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,1,"li",[],null,null,null,null,null)),(n()(),a.Kb(1,null,[" "," "]))],null,function(n,e){n(e,1,0,e.context.$implicit)})}function tn(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,12,"div",[],null,null,null,null,null)),(n()(),a.sb(1,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),a.Kb(2,null,["",""])),(n()(),a.sb(3,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),a.hb(16777216,null,null,1,null,X)),a.rb(5,16384,null,0,p.k,[a.O,a.L],{ngIf:[0,"ngIf"],ngIfThen:[1,"ngIfThen"],ngIfElse:[2,"ngIfElse"]},null),(n()(),a.hb(0,[["link",2]],null,0,null,Z)),(n()(),a.hb(0,[["noLink",2]],null,0,null,Y)),(n()(),a.hb(16777216,null,null,1,null,nn)),a.rb(9,16384,null,0,p.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(n()(),a.sb(10,0,null,null,2,"ul",[["class","mt-3"]],null,null,null,null,null)),(n()(),a.hb(16777216,null,null,1,null,en)),a.rb(12,278528,null,0,p.j,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null)],function(n,e){n(e,5,0,"Projects"===e.parent.parent.parent.context.$implicit.title,a.Db(e,6),a.Db(e,7)),n(e,9,0,e.context.$implicit.startDate),n(e,12,0,e.context.$implicit.bulletpoints)},function(n,e){n(e,2,0,e.context.$implicit.title)})}function an(n){return a.Mb(0,[(n()(),a.hb(16777216,null,null,1,null,tn)),a.rb(1,278528,null,0,p.j,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null),(n()(),a.hb(0,null,null,0))],function(n,e){n(e,1,0,e.parent.parent.context.$implicit.contents)},null)}function ln(n){return a.Mb(0,[(n()(),a.hb(16777216,null,null,1,null,G)),a.rb(1,16384,null,0,p.k,[a.O,a.L],{ngIf:[0,"ngIf"],ngIfThen:[1,"ngIfThen"],ngIfElse:[2,"ngIfElse"]},null),(n()(),a.hb(0,[["skills",2]],null,0,null,Q)),(n()(),a.hb(0,[["experience",2]],null,0,null,an))],function(n,e){n(e,1,0,"Skills"===e.parent.context.$implicit.title,a.Db(e,2),a.Db(e,3))},null)}function on(n){return a.Mb(0,[(n()(),a.sb(0,16777216,null,null,11,"mat-expansion-panel",[["class","mat-expansion-panel"],["expanded",""]],[[2,"mat-expanded",null],[2,"_mat-animation-noopable",null],[2,"mat-expansion-panel-spacing",null]],null,null,w,h)),a.rb(1,1753088,null,1,m.e,[[3,m.a],a.h,f.d,a.O,p.d,[2,c.a],[2,m.b]],{expanded:[0,"expanded"]},null),a.Ib(603979776,4,{_lazyContent:0}),a.Hb(256,null,m.a,void 0,[]),(n()(),a.sb(4,0,null,0,5,"mat-expansion-panel-header",[["class","mat-expansion-panel-header"],["role","button"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-controls",0],[1,"aria-expanded",0],[1,"aria-disabled",0],[2,"mat-expanded",null],[2,"mat-expansion-toggle-indicator-after",null],[2,"mat-expansion-toggle-indicator-before",null],[40,"@.disabled",0],[40,"@expansionHeight",0]],[[null,"click"],[null,"keydown"],["component","@expansionHeight.start"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==a.Db(n,5)._toggle()&&l),"keydown"===e&&(l=!1!==a.Db(n,5)._keydown(t)&&l),"component:@expansionHeight.start"===e&&(l=!1!==a.Db(n,5)._animationStarted()&&l),l},k,y)),a.rb(5,180224,[[3,4]],0,m.g,[m.e,a.k,u.e,a.h,[2,m.b]],null,null),a.Gb(6,{collapsedHeight:0,expandedHeight:1}),a.Gb(7,{value:0,params:1}),(n()(),a.sb(8,0,null,2,1,"h5",[],null,null,null,null,null)),(n()(),a.Kb(9,null,["",""])),(n()(),a.hb(0,null,1,1,null,ln)),a.rb(11,16384,[[4,4]],0,m.f,[a.L],null,null),(n()(),a.hb(0,null,null,0))],function(n,e){n(e,1,0,"")},function(n,e){n(e,0,0,a.Db(e,1).expanded,"NoopAnimations"===a.Db(e,1)._animationMode,a.Db(e,1)._hasSpacing());var t=a.Db(e,5).panel._headerId,l=a.Db(e,5).disabled?-1:0,i=a.Db(e,5)._getPanelId(),o=a.Db(e,5)._isExpanded(),r=a.Db(e,5).panel.disabled,s=a.Db(e,5)._isExpanded(),d="after"===a.Db(e,5)._getTogglePosition(),u="before"===a.Db(e,5)._getTogglePosition(),c=a.Db(e,5)._animationsDisabled,p=n(e,7,0,a.Db(e,5)._getExpandedState(),n(e,6,0,a.Db(e,5).collapsedHeight,a.Db(e,5).expandedHeight));n(e,4,0,t,l,i,o,r,s,d,u,c,p),n(e,9,0,e.context.$implicit.title)})}function rn(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,28,"mat-drawer-container",[["autosize",""],["class","sidenav-container mat-drawer-container"]],[[2,"mat-drawer-container-explicit-backdrop",null]],null,null,A,P)),a.rb(1,1490944,null,2,B.c,[[2,D.b],a.k,a.y,a.h,O.e,B.a,[2,c.a]],{autosize:[0,"autosize"]},null),a.Ib(603979776,1,{_drawers:1}),a.Ib(603979776,2,{_content:0}),(n()(),a.sb(4,0,null,0,14,"mat-drawer",[["class","sidenav mat-drawer"],["mode","side"],["opened",""],["tabIndex","-1"]],[[1,"align",0],[2,"mat-drawer-end",null],[2,"mat-drawer-over",null],[2,"mat-drawer-push",null],[2,"mat-drawer-side",null],[2,"mat-drawer-opened",null],[40,"@transform",0]],[["component","@transform.start"],["component","@transform.done"]],function(n,e,t){var l=!0;return"component:@transform.start"===e&&(l=!1!==a.Db(n,5)._animationStartListener(t)&&l),"component:@transform.done"===e&&(l=!1!==a.Db(n,5)._animationDoneListener(t)&&l),l},z,E)),a.rb(5,3325952,[[1,4]],0,B.b,[a.k,u.f,u.e,C.a,a.y,[2,p.d]],{mode:[0,"mode"],opened:[1,"opened"]},null),(n()(),a.sb(6,0,null,0,12,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,H,F)),a.rb(7,49152,null,0,L.a,[[2,c.a]],null,null),(n()(),a.sb(8,0,null,0,10,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),a.rb(9,16384,null,0,L.b,[],null,null),(n()(),a.sb(10,0,null,null,0,"img",[["src","https://avatars3.githubusercontent.com/u/25552995?s=235&v=4"]],null,null,null,null,null)),(n()(),a.sb(11,0,null,null,1,"div",[["class","lead"]],null,null,null,null,null)),(n()(),a.Kb(-1,null,["Luis Gutierrez"])),(n()(),a.sb(13,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Kb(-1,null,[" Software Engineering Manager with strong background on Front-End Development and over 10 years of experience delivering web applications ranging from public-facing eCommerce websites to internal-use Cyber Security platforms. "])),(n()(),a.sb(15,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Kb(-1,null,[" Passionate about solving problems through technology, leading software engineers to build best-in-class enterprise applications and empower users with thoughtfully crafted experiences. "])),(n()(),a.sb(17,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),a.Kb(-1,null,[" Feel free to connect if you would like to collaborate or are seeking Software Development opportunities! One "])),(n()(),a.sb(19,0,null,1,9,"mat-drawer-content",[["class","mat-drawer-content"]],[[4,"margin-left","px"],[4,"margin-right","px"]],null,null,I,_)),a.rb(20,1294336,[[2,4]],0,B.d,[a.h,B.c,a.k,O.b,a.y],null,null),(n()(),a.sb(21,0,null,0,7,"div",[["class","page-container"]],null,null,null,null,null)),(n()(),a.sb(22,0,null,null,6,"mat-accordion",[["class","mat-accordion"],["multi",""]],null,null,null,null,null)),a.Hb(6144,null,m.a,null,[m.c]),a.rb(24,1720320,null,1,m.c,[],{multi:[0,"multi"]},null),a.Ib(603979776,3,{_headers:1}),(n()(),a.hb(16777216,null,null,2,null,on)),a.rb(27,278528,null,0,p.j,[a.O,a.L,a.r],{ngForOf:[0,"ngForOf"]},null),a.Fb(131072,p.b,[a.h])],function(n,e){var t=e.component;n(e,1,0,""),n(e,5,0,"side",""),n(e,20,0),n(e,24,0,""),n(e,27,0,a.Lb(e,27,0,a.Db(e,28).transform(t.sections)))},function(n,e){n(e,0,0,a.Db(e,1)._backdropOverride),n(e,4,0,null,"end"===a.Db(e,5).position,"over"===a.Db(e,5).mode,"push"===a.Db(e,5).mode,"side"===a.Db(e,5).mode,a.Db(e,5).opened,a.Db(e,5)._animationState),n(e,6,0,"NoopAnimations"===a.Db(e,7)._animationMode),n(e,19,0,a.Db(e,20)._container._contentMargins.left,a.Db(e,20)._container._contentMargins.right)})}function sn(n){return a.Mb(0,[(n()(),a.sb(0,0,null,null,1,"zgi-resume",[],null,null,null,rn,$)),a.rb(1,114688,null,0,W,[q.f,U],null,null)],function(n,e){n(e,1,0)},null)}var dn=a.ob("zgi-resume",W,sn,{},{},[]),un=t("IheW"),cn=t("s7LF"),pn=t("POq0"),mn=t("QQfA"),bn=t("gavF"),gn=t("JjoW"),fn=t("qJ5m"),hn=t("Mz6y"),xn=t("VDRc"),wn=t("ura0"),yn=t("Nhcz"),vn=t("u9T3"),kn=t("KPQW"),Bn=t("kNGD"),Dn=t("HsOI"),Mn=t("FVPZ"),Sn=t("Gi4r"),Cn=t("oapL"),On=t("ZwOa"),_n=t("02hT"),In=t("Q+lL"),En=t("W5yJ"),zn=t("elxJ"),Pn=t("lT8R"),Tn=t("dFDH"),jn=t("qJ50"),An=t("zQui"),Ln=t("8rEH"),Fn=t("rWV4"),Hn=t("BzsH"),Jn=t("PCNd"),Nn=t("iInd"),Rn=t("dvZr");t.d(e,"ResumeModuleNgFactory",function(){return Kn});var Kn=a.pb(l,[],function(n){return a.Ab([a.Bb(512,a.j,a.ab,[[8,[i.a,i.b,o.a,r.a,dn]],[3,a.j],a.w]),a.Bb(4608,p.m,p.l,[a.t,[2,p.y]]),a.Bb(4608,un.h,un.n,[p.d,a.A,un.l]),a.Bb(4608,un.o,un.o,[un.h,un.m]),a.Bb(5120,un.a,function(n){return[n]},[un.o]),a.Bb(4608,un.k,un.k,[]),a.Bb(6144,un.i,null,[un.k]),a.Bb(4608,un.g,un.g,[un.i]),a.Bb(6144,un.b,null,[un.g]),a.Bb(4608,un.f,un.j,[un.b,a.q]),a.Bb(4608,un.c,un.c,[un.f]),a.Bb(5120,a.b,function(n,e){return[q.j(n,e)]},[p.d,a.A]),a.Bb(4608,cn.f,cn.f,[]),a.Bb(4608,cn.a,cn.a,[]),a.Bb(4608,pn.a,pn.a,[]),a.Bb(4608,M.a,M.a,[]),a.Bb(4608,mn.a,mn.a,[mn.g,mn.c,a.j,mn.f,mn.d,a.q,a.y,p.d,D.b,[2,p.g]]),a.Bb(5120,mn.h,mn.i,[mn.a]),a.Bb(5120,bn.a,bn.d,[mn.a]),a.Bb(5120,gn.a,gn.b,[mn.a]),a.Bb(4608,S.e,M.b,[[2,M.d],[2,M.f]]),a.Bb(5120,fn.b,fn.a,[[3,fn.b]]),a.Bb(5120,hn.b,hn.c,[mn.a]),a.Bb(1073742336,p.c,p.c,[]),a.Bb(1073742336,un.e,un.e,[]),a.Bb(1073742336,un.d,un.d,[]),a.Bb(1073742336,q.c,q.c,[]),a.Bb(1073742336,D.a,D.a,[]),a.Bb(1073742336,xn.a,xn.a,[]),a.Bb(1073742336,wn.a,wn.a,[]),a.Bb(1073742336,yn.a,yn.a,[]),a.Bb(1073742336,vn.a,vn.a,[[2,q.g],a.A]),a.Bb(1073742336,cn.e,cn.e,[]),a.Bb(1073742336,cn.b,cn.b,[]),a.Bb(1073742336,cn.d,cn.d,[]),a.Bb(1073742336,C.b,C.b,[]),a.Bb(1073742336,pn.b,pn.b,[]),a.Bb(1073742336,u.a,u.a,[]),a.Bb(1073742336,M.f,M.f,[[2,M.c],[2,S.f]]),a.Bb(1073742336,kn.a,kn.a,[]),a.Bb(1073742336,M.k,M.k,[]),a.Bb(1073742336,d.c,d.c,[]),a.Bb(1073742336,L.d,L.d,[]),a.Bb(1073742336,Bn.b,Bn.b,[]),a.Bb(1073742336,b.c,b.c,[]),a.Bb(1073742336,g.g,g.g,[]),a.Bb(1073742336,m.d,m.d,[]),a.Bb(1073742336,Dn.a,Dn.a,[]),a.Bb(1073742336,M.g,M.g,[]),a.Bb(1073742336,Mn.a,Mn.a,[]),a.Bb(1073742336,Sn.c,Sn.c,[]),a.Bb(1073742336,Cn.b,Cn.b,[]),a.Bb(1073742336,On.a,On.a,[]),a.Bb(1073742336,M.i,M.i,[]),a.Bb(1073742336,_n.a,_n.a,[]),a.Bb(1073742336,In.a,In.a,[]),a.Bb(1073742336,O.c,O.c,[]),a.Bb(1073742336,mn.e,mn.e,[]),a.Bb(1073742336,bn.c,bn.c,[]),a.Bb(1073742336,bn.b,bn.b,[]),a.Bb(1073742336,En.a,En.a,[]),a.Bb(1073742336,zn.a,zn.a,[]),a.Bb(1073742336,M.h,M.h,[]),a.Bb(1073742336,gn.c,gn.c,[]),a.Bb(1073742336,B.h,B.h,[]),a.Bb(1073742336,Pn.a,Pn.a,[]),a.Bb(1073742336,Tn.d,Tn.d,[]),a.Bb(1073742336,jn.e,jn.e,[]),a.Bb(1073742336,fn.c,fn.c,[]),a.Bb(1073742336,An.o,An.o,[]),a.Bb(1073742336,Ln.a,Ln.a,[]),a.Bb(1073742336,Fn.a,Fn.a,[]),a.Bb(1073742336,Hn.b,Hn.b,[]),a.Bb(1073742336,hn.e,hn.e,[]),a.Bb(1073742336,Jn.a,Jn.a,[]),a.Bb(1073742336,Nn.m,Nn.m,[[2,Nn.r],[2,Nn.k]]),a.Bb(1073742336,l,l,[]),a.Bb(256,un.l,"XSRF-TOKEN",[]),a.Bb(256,un.m,"X-XSRF-TOKEN",[]),a.Bb(256,Bn.a,{separatorKeyCodes:[Rn.f]},[]),a.Bb(1024,Nn.i,function(){return[[{path:"",component:W}]]},[])])})}}]);