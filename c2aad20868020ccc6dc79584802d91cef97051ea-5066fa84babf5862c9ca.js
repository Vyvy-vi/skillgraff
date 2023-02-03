"use strict";(self.webpackChunkgatsby_starter_contentful_homepage_ts=self.webpackChunkgatsby_starter_contentful_homepage_ts||[]).push([[269],{4725:function(e,t,a){function n(e){let{blocktype:t}=e;return console.warn("No component found for: "+t),null}a.d(t,{Z:function(){return n}})},2596:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294);function r(e){let{title:t,description:a,image:r}=e;return n.createElement(n.Fragment,null,n.createElement("meta",{charSet:"utf-8"}),n.createElement("title",null,t),a&&n.createElement("meta",{name:"description",property:"og:description",content:a}),n.createElement("meta",{property:"og:title",content:t}),r&&n.createElement("meta",{property:"og:image",content:r.url}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:title",content:t}),a&&n.createElement("meta",{name:"twitter:description",content:a}),r&&n.createElement("meta",{name:"twitter:image",content:r.url}))}},2891:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),r=(a(3326),a(1883));var l=e=>{let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement(r.Slice,{alias:"header"}),t,n.createElement(r.Slice,{alias:"footer"}))}},3951:function(e,t,a){a.r(t),a.d(t,{AboutHero:function(){return x},AboutLeadership:function(){return W},AboutLogoList:function(){return j},AboutStatList:function(){return w},HomepageBenefitList:function(){return o},HomepageCta:function(){return k},HomepageFeatureList:function(){return m},HomepageHero:function(){return c},HomepageLogoList:function(){return E},HomepageProductList:function(){return h},HomepageStatList:function(){return v},HomepageTestimonialList:function(){return d}});var n=a(8032),r=a(7294),l=a(1729);function c(e){return r.createElement(l.$0,null,r.createElement(l.W2,null,r.createElement(l.kC,{gap:4,variant:"responsive"},r.createElement(l.xu,{width:"half"},e.image&&r.createElement(n.G,{alt:e.image.alt,image:(0,n.c)(e.image.gatsbyImageData)})),r.createElement(l.xu,{width:"half"},r.createElement(l.X6,{as:"h1"},e.kicker&&r.createElement(l.Yw,null,e.kicker),e.h1),r.createElement(l.vF,{as:"h2"},e.subhead),r.createElement(l.xv,{as:"p"},e.text),r.createElement(l.ui,{links:e.links})))))}function i(e){return r.createElement(l.$0,{padding:4,background:"muted"},r.createElement(l.W2,null,r.createElement(l.kC,{gap:4,variant:"responsive"},r.createElement(l.xu,{width:"half",order:e.flip?1:null},e.image&&r.createElement(n.G,{alt:e.image.alt,image:(0,n.c)(e.image.gatsbyImageData)})),r.createElement(l.xu,{width:"half"},r.createElement(l.vF,null,e.kicker&&r.createElement(l.Yw,null,e.kicker),e.heading),r.createElement(l.xv,{variant:"lead"},e.text),r.createElement(l.ui,{links:e.links})))))}function m(e){return r.createElement(l.W2,{width:"fullbleed"},r.createElement(l.xu,{background:"muted",radius:"large"},r.createElement(l.xu,{center:!0,paddingY:5},r.createElement(l.X6,null,e.kicker&&r.createElement(l.Yw,null,e.kicker),e.heading),e.text&&r.createElement(l.xv,null,e.text)),e.content.map(((e,t)=>r.createElement(i,Object.assign({key:e.id},e,{flip:Boolean(t%2)}))))))}function u(e){return e.image?r.createElement(l.TR,{alt:e.alt,image:e.image.gatsbyImageData,size:"medium"}):null}function E(e){return r.createElement(l.$0,{paddingY:4},r.createElement(l.W2,{width:"narrow"},e.text&&r.createElement(l.xv,{center:!0,variant:"lead"},e.text),r.createElement(l.T,{size:4}),r.createElement(l.jq,{gap:4,variant:"center"},e.logos.map((e=>e&&r.createElement("li",{key:e.id},r.createElement(u,e)))))))}function g(e){return r.createElement(l.xu,{as:"li",width:"third",padding:4,paddingY:3},e.image&&r.createElement(l.JO,{alt:e.image.alt,image:e.image.gatsbyImageData,size:"small"}),r.createElement(l.T,{size:2}),r.createElement(l.X6,{variant:"subheadSmall"},e.heading),r.createElement(l.xv,null,e.text))}function o(e){return r.createElement(l.$0,null,r.createElement(l.W2,null,r.createElement(l.xu,{center:!0},e.heading&&r.createElement(l.X6,null,e.heading),e.text&&r.createElement(l.xv,{variant:"lead"},e.text)),r.createElement(l.T,{size:3}),r.createElement(l.jq,{gutter:3,variant:"start",responsive:!0,wrap:!0},e.content.map((e=>r.createElement(g,Object.assign({key:e.id},e)))))))}function s(e){return r.createElement(l.kC,{variant:"start"},e.avatar&&r.createElement(l.qE,{alt:e.avatar.alt,image:e.avatar.gatsbyImageData}),r.createElement(l.V6,null,r.createElement(l.xv,{as:"p",variant:"lead"},e.quote),r.createElement("figcaption",null,r.createElement(l.xv,{as:"cite",bold:!0,variant:"caps"},e.source))))}function d(e){return r.createElement(l.$0,null,r.createElement(l.W2,null,r.createElement(l.xu,{center:!0},r.createElement(l.X6,null,e.kicker&&r.createElement(l.Yw,null,e.kicker),e.heading)),r.createElement(l.jq,{gutter:3,variant:"start",responsive:!0,wrap:!0},e.content.map(((e,t)=>r.createElement(l.xu,{as:"li",key:e.id+t,width:"half",padding:3},r.createElement(s,e)))))))}function p(e){return r.createElement(l.xu,null,r.createElement(l.xv,{variant:"stat"},e.value),r.createElement(l.xv,{variant:"statLabel"},e.label))}function v(e){return r.createElement(l.W2,{width:"fullbleed"},r.createElement(l.$0,{padding:5,radius:"large",background:"primary"},r.createElement(l.kC,{responsive:!0,variant:"end"},r.createElement(l.xu,{width:"half"},e.icon&&r.createElement(l.JO,{alt:e.icon.alt,image:e.icon.gatsbyImageData}),r.createElement(l.X6,null,e.kicker&&r.createElement(l.Yw,null,e.kicker),e.heading),e.text&&r.createElement(l.xv,{variant:"lead"},e.text),r.createElement(l.jq,{wrap:!0,gap:4},null!=e.content&&e.content.map((e=>r.createElement("li",{key:e.id},r.createElement(p,e))))),r.createElement(l.ui,{links:e.links,reversed:!0})),r.createElement(l.xu,{width:"half"},e.image&&r.createElement(l.pM,{right:5,bottom:5},r.createElement(n.G,{alt:e.image.alt,image:(0,n.c)(e.image.gatsbyImageData)}))))))}function k(e){return r.createElement(l.W2,{width:"fullbleed"},r.createElement(l.$0,{padding:5,radius:"large",background:"primary"},r.createElement(l.X6,{center:!0},e.kicker&&r.createElement(l.Yw,{center:!0},e.kicker),e.heading),r.createElement(l.xv,{as:"p",center:!0,variant:"lead"},e.text),r.createElement(l.ui,{links:e.links,variant:"center",reversed:!0}),e.image&&r.createElement(l.pM,{left:5,right:5,bottom:5},r.createElement(n.G,{alt:e.image.alt,image:(0,n.c)(e.image.gatsbyImageData)}))))}function f(e){return r.createElement(l.xu,{center:!0},e.image&&r.createElement(l.JO,{alt:e.image.alt,image:e.image.gatsbyImageData,size:"large"}),r.createElement(l.vF,null,e.heading),r.createElement(l.xv,null,e.text),r.createElement(l.Mc,{links:e.links}))}function h(e){return r.createElement(l.$0,null,r.createElement(l.W2,null,r.createElement(l.xu,{center:!0,paddingY:4},r.createElement(l.X6,null,e.kicker&&r.createElement(l.Yw,null,e.kicker),e.heading),e.text&&r.createElement(l.xv,null,e.text)),r.createElement(l.jq,{gap:4,variant:"responsive"},e.content.map((e=>r.createElement("li",{key:e.id},r.createElement(f,e)))))))}a(3326),a(9718);function x(e){return r.createElement(l.$0,null,r.createElement(l.W2,null,r.createElement(l.cS,{className:"_1ym2l5g0"},e.heading),e.text&&r.createElement(l.xv,{className:"_1ym2l5g1"},e.text)),r.createElement(l.W2,{width:"wide"},e.image&&r.createElement(n.G,{alt:e.image.alt,image:(0,n.c)(e.image.gatsbyImageData),className:"_1ym2l5g2"})))}function b(e){return r.createElement(l.xu,{width:"fitContent",className:"lgshx41"},e.value&&r.createElement(l.xv,{variant:"stat"},e.value),e.label&&r.createElement(l.xv,{variant:"statLabel"},e.label))}function w(e){return r.createElement(r.Fragment,null,null!=e.content&&r.createElement(l.$0,null,r.createElement(l.W2,null,r.createElement(l.jq,{className:"lgshx40",variant:"center",responsive:!0},e.content.map((e=>r.createElement(b,Object.assign({key:e.id},e))))))))}function y(e){return r.createElement(l.xu,{width:"third",padding:4,center:!0},e.image&&r.createElement(n.G,{alt:e.image.alt,image:(0,n.c)(e.image.gatsbyImageData)}),r.createElement(l.T,{size:3}),r.createElement(l.xu,null,e.name&&r.createElement(l.xv,{variant:"medium",bold:!0,center:!0},e.name),e.jobTitle&&r.createElement(l.xv,{variant:"medium",center:!0},e.jobTitle)))}function W(e){return r.createElement(l.$0,null,r.createElement(l.W2,{width:"tight"},r.createElement(l.xu,{center:!0,paddingY:4},e.kicker&&r.createElement(l.Yw,null,e.kicker),e.heading&&r.createElement(l.X6,{as:"h1"},e.heading),e.subhead&&r.createElement(l.xv,null,e.subhead)),r.createElement(l.jq,{gap:0,variant:"center",alignItems:"start"},e.content.map((e=>r.createElement(y,Object.assign({key:e.id},e)))))))}function j(e){return r.createElement(l.$0,null,r.createElement(l.W2,null,r.createElement(l.xu,{center:!0},e.heading&&r.createElement(l.X6,null,e.heading),r.createElement(l.Mc,{links:e.links}))),r.createElement(r.Fragment,null," ",null!=e.logos&&r.createElement(l.W2,{width:"narrow"},r.createElement(l.xu,{paddingY:6},r.createElement(l.jq,{gap:5,variant:"center"},e.logos.map(((e,t)=>r.createElement("li",{key:e.id+"-"+t},r.createElement(u,e)))))))))}}}]);
//# sourceMappingURL=c2aad20868020ccc6dc79584802d91cef97051ea-5066fa84babf5862c9ca.js.map