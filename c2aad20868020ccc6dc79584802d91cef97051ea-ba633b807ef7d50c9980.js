"use strict";(self.webpackChunkgatsby_starter_contentful_homepage_ts=self.webpackChunkgatsby_starter_contentful_homepage_ts||[]).push([[269],{4725:function(e,t,n){function a(e){let{blocktype:t}=e;return console.warn("No component found for: "+t),null}n.d(t,{Z:function(){return a}})},2596:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294);function l(e){let{title:t,description:n,image:l}=e;return a.createElement(a.Fragment,null,a.createElement("meta",{charSet:"utf-8"}),a.createElement("title",null,t),n&&a.createElement("meta",{name:"description",property:"og:description",content:n}),a.createElement("meta",{property:"og:title",content:t}),l&&a.createElement("meta",{property:"og:image",content:l.url}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:title",content:t}),n&&a.createElement("meta",{name:"twitter:description",content:n}),l&&a.createElement("meta",{name:"twitter:image",content:l.url}))}},2891:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),l=(n(3326),n(1883));var r=e=>{let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(l.Slice,{alias:"header"}),t,a.createElement(l.Slice,{alias:"footer"}))}},3951:function(e,t,n){n.r(t),n.d(t,{AboutHero:function(){return x},AboutLeadership:function(){return W},AboutLogoList:function(){return j},AboutStatList:function(){return w},HomepageBenefitList:function(){return o},HomepageCta:function(){return k},HomepageFeatureList:function(){return i},HomepageHero:function(){return c},HomepageLogoList:function(){return E},HomepageProductList:function(){return h},HomepageStatList:function(){return v},HomepageTestimonialList:function(){return d}});var a=n(8032),l=n(7294),r=n(1729);function c(e){return l.createElement(r.$0,null,l.createElement(r.W2,null,l.createElement(r.kC,{gap:4,variant:"responsive"},l.createElement(r.xu,{width:"half"},e.image&&l.createElement(a.G,{alt:e.image.alt,image:(0,a.c)(e.image.gatsbyImageData)})),l.createElement(r.xu,{width:"half"},l.createElement(r.X6,{as:"h1"},e.kicker&&l.createElement(r.Yw,null,e.kicker),e.h1),l.createElement(r.vF,{as:"h2"},e.subhead),l.createElement(r.xv,{as:"p"},e.text),l.createElement(r.ui,{links:e.links})))))}function m(e){return l.createElement(r.$0,{padding:4,background:"muted"},l.createElement(r.W2,null,l.createElement(r.kC,{gap:4,variant:"responsive"},l.createElement(r.xu,{width:"half",order:e.flip?1:null},e.image&&l.createElement(a.G,{alt:e.image.alt,image:(0,a.c)(e.image.gatsbyImageData)})),l.createElement(r.xu,{width:"half"},l.createElement(r.vF,null,e.kicker&&l.createElement(r.Yw,null,e.kicker),e.heading),l.createElement(r.xv,{variant:"lead"},e.text),l.createElement(r.ui,{links:e.links})))))}function i(e){return l.createElement(l.Fragment,null,null!=e.content&&l.createElement(r.W2,{width:"fullbleed"},l.createElement(r.xu,{background:"muted",radius:"large"},l.createElement(r.xu,{center:!0,paddingY:5},l.createElement(r.X6,null,e.kicker&&l.createElement(r.Yw,null,e.kicker),e.heading),e.text&&l.createElement(r.xv,null,e.text)),e.content.map(((e,t)=>l.createElement(m,Object.assign({key:e.id},e,{flip:Boolean(t%2)})))))))}function u(e){return e.image?l.createElement(r.TR,{alt:e.alt,image:e.image.gatsbyImageData,size:"medium"}):null}function E(e){return l.createElement(l.Fragment,null,null!=e.logos&&l.createElement(r.$0,{paddingY:4},l.createElement(r.W2,{width:"narrow"},e.text&&l.createElement(r.xv,{center:!0,variant:"lead"},e.text),l.createElement(r.T,{size:4}),l.createElement(r.jq,{gap:4,variant:"center"},e.logos.map((e=>e&&l.createElement("li",{key:e.id},l.createElement(u,e))))))))}function g(e){return l.createElement(r.xu,{as:"li",width:"third",padding:4,paddingY:3},e.image&&l.createElement(r.JO,{alt:e.image.alt,image:e.image.gatsbyImageData,size:"small"}),l.createElement(r.T,{size:2}),l.createElement(r.X6,{variant:"subheadSmall"},e.heading),l.createElement(r.xv,null,e.text))}function o(e){return l.createElement(r.$0,null,l.createElement(r.W2,null,l.createElement(r.xu,{center:!0},e.heading&&l.createElement(r.X6,null,e.heading),e.text&&l.createElement(r.xv,{variant:"lead"},e.text)),l.createElement(r.T,{size:3}),l.createElement(r.jq,{gutter:3,variant:"start",responsive:!0,wrap:!0},e.content.map((e=>l.createElement(g,Object.assign({key:e.id},e)))))))}function s(e){return l.createElement(r.kC,{variant:"start"},e.avatar&&l.createElement(r.qE,{alt:e.avatar.alt,image:e.avatar.gatsbyImageData}),l.createElement(r.V6,null,l.createElement(r.xv,{as:"p",variant:"lead"},e.quote),l.createElement("figcaption",null,l.createElement(r.xv,{as:"cite",bold:!0,variant:"caps"},e.source))))}function d(e){return l.createElement(r.$0,null,l.createElement(r.W2,null,l.createElement(r.xu,{center:!0},l.createElement(r.X6,null,e.kicker&&l.createElement(r.Yw,null,e.kicker),e.heading)),l.createElement(r.jq,{gutter:3,variant:"start",responsive:!0,wrap:!0},e.content.map(((e,t)=>l.createElement(r.xu,{as:"li",key:e.id+t,width:"half",padding:3},l.createElement(s,e)))))))}function p(e){return l.createElement(r.xu,null,l.createElement(r.xv,{variant:"stat"},e.value),l.createElement(r.xv,{variant:"statLabel"},e.label))}function v(e){return l.createElement(l.Fragment,null,null!=e.content&&l.createElement(r.W2,{width:"fullbleed"},l.createElement(r.$0,{padding:5,radius:"large",background:"primary"},l.createElement(r.kC,{responsive:!0,variant:"end"},l.createElement(r.xu,{width:"half"},e.icon&&l.createElement(r.JO,{alt:e.icon.alt,image:e.icon.gatsbyImageData}),l.createElement(r.X6,null,e.kicker&&l.createElement(r.Yw,null,e.kicker),e.heading),e.text&&l.createElement(r.xv,{variant:"lead"},e.text),l.createElement(r.jq,{wrap:!0,gap:4},null!=e.content&&e.content.map((e=>l.createElement("li",{key:e.id},l.createElement(p,e))))),l.createElement(r.ui,{links:e.links,reversed:!0})),l.createElement(r.xu,{width:"half"},e.image&&l.createElement(r.pM,{right:5,bottom:5},l.createElement(a.G,{alt:e.image.alt,image:(0,a.c)(e.image.gatsbyImageData)})))))))}function k(e){return l.createElement(r.W2,{width:"fullbleed"},l.createElement(r.$0,{padding:5,radius:"large",background:"primary"},l.createElement(r.X6,{center:!0},e.kicker&&l.createElement(r.Yw,{center:!0},e.kicker),e.heading),l.createElement(r.xv,{as:"p",center:!0,variant:"lead"},e.text),l.createElement(r.ui,{links:e.links,variant:"center",reversed:!0}),e.image&&l.createElement(r.pM,{left:5,right:5,bottom:5},l.createElement(a.G,{alt:e.image.alt,image:(0,a.c)(e.image.gatsbyImageData)}))))}function f(e){return l.createElement(r.xu,{center:!0},e.image&&l.createElement(r.JO,{alt:e.image.alt,image:e.image.gatsbyImageData,size:"large"}),l.createElement(r.vF,null,e.heading),l.createElement(r.xv,null,e.text),l.createElement(r.Mc,{links:e.links}))}function h(e){return l.createElement(l.Fragment,null,null!=e.content&&l.createElement(r.$0,null,l.createElement(r.W2,null,l.createElement(r.xu,{center:!0,paddingY:4},l.createElement(r.X6,null,e.kicker&&l.createElement(r.Yw,null,e.kicker),e.heading),e.text&&l.createElement(r.xv,null,e.text)),l.createElement(r.jq,{gap:4,variant:"responsive"},e.content.map((e=>l.createElement("li",{key:e.id},l.createElement(f,e))))))))}n(3326),n(9718);function x(e){return l.createElement(r.$0,null,l.createElement(r.W2,null,l.createElement(r.cS,{className:"_1ym2l5g0"},e.heading),e.text&&l.createElement(r.xv,{className:"_1ym2l5g1"},e.text)),l.createElement(r.W2,{width:"wide"},e.image&&l.createElement(a.G,{alt:e.image.alt,image:(0,a.c)(e.image.gatsbyImageData),className:"_1ym2l5g2"})))}function b(e){return l.createElement(r.xu,{width:"fitContent",className:"lgshx41"},e.value&&l.createElement(r.xv,{variant:"stat"},e.value),e.label&&l.createElement(r.xv,{variant:"statLabel"},e.label))}function w(e){return l.createElement(l.Fragment,null,null!=e.content&&l.createElement(r.$0,null,l.createElement(r.W2,null,l.createElement(r.jq,{className:"lgshx40",variant:"center",responsive:!0},e.content.map((e=>l.createElement(b,Object.assign({key:e.id},e))))))))}function y(e){return l.createElement(r.xu,{width:"third",padding:4,center:!0},e.image&&l.createElement(a.G,{alt:e.image.alt,image:(0,a.c)(e.image.gatsbyImageData)}),l.createElement(r.T,{size:3}),l.createElement(r.xu,null,e.name&&l.createElement(r.xv,{variant:"medium",bold:!0,center:!0},e.name),e.jobTitle&&l.createElement(r.xv,{variant:"medium",center:!0},e.jobTitle)))}function W(e){return l.createElement(r.$0,null,l.createElement(r.W2,{width:"tight"},l.createElement(r.xu,{center:!0,paddingY:4},e.kicker&&l.createElement(r.Yw,null,e.kicker),e.heading&&l.createElement(r.X6,{as:"h1"},e.heading),e.subhead&&l.createElement(r.xv,null,e.subhead)),l.createElement(r.jq,{gap:0,variant:"center",alignItems:"start"},e.content.map((e=>l.createElement(y,Object.assign({key:e.id},e)))))))}function j(e){return l.createElement(r.$0,null,l.createElement(r.W2,null,l.createElement(r.xu,{center:!0},e.heading&&l.createElement(r.X6,null,e.heading),l.createElement(r.Mc,{links:e.links}))),l.createElement(l.Fragment,null," ",null!=e.logos&&l.createElement(r.W2,{width:"narrow"},l.createElement(r.xu,{paddingY:6},l.createElement(r.jq,{gap:5,variant:"center"},e.logos.map(((e,t)=>l.createElement("li",{key:e.id+"-"+t},l.createElement(u,e)))))))))}}}]);
//# sourceMappingURL=c2aad20868020ccc6dc79584802d91cef97051ea-ba633b807ef7d50c9980.js.map