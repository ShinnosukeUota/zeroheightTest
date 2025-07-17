import{c as ae}from"./Button-DfetVkf1.js";const te=({title:s="Card Title",description:x="This is a card description that explains the content of the card.",imageUrl:i,size:v="medium",variant:n="default",actions:o=[],onClick:c})=>{const a=document.createElement("div");if(a.className=["storybook-card",`storybook-card--${v}`,n!=="default"?`storybook-card--${n}`:""].filter(Boolean).join(" "),c&&(a.style.cursor="pointer",a.addEventListener("click",c)),i){const e=document.createElement("img");e.src=i,e.alt=s,e.className="storybook-card__image",a.appendChild(e)}const r=document.createElement("div");r.className="storybook-card__content";const k=document.createElement("h3");k.className="storybook-card__title",k.textContent=s,r.appendChild(k);const y=document.createElement("p");if(y.className="storybook-card__description",y.textContent=x,r.appendChild(y),o.length>0){const e=document.createElement("div");e.className="storybook-card__actions",o.forEach(T=>{const ee=ae({label:T.label,primary:T.primary||!1,size:"small",onClick:T.onClick});e.appendChild(ee)}),r.appendChild(e)}return a.appendChild(r),a},{fn:t}=__STORYBOOK_MODULE_TEST__,se={title:"Example/Card",tags:["autodocs"],render:({title:s,description:x,imageUrl:i,size:v,variant:n,actions:o,onClick:c})=>te({title:s,description:x,imageUrl:i,size:v,variant:n,actions:o,onClick:c}),argTypes:{title:{control:"text"},description:{control:"text"},imageUrl:{control:"text"},size:{control:{type:"select"},options:["small","medium","large"]},variant:{control:{type:"select"},options:["default","elevated","flat","outlined"]},onClick:{action:"card-clicked"}},args:{title:"Sample Card",description:"This is a sample card description that demonstrates the card component functionality.",onClick:t()}},l={args:{title:"Default Card",description:"This is a default card with standard styling."}},d={args:{title:"Card with Image",description:"This card includes an image at the top.",imageUrl:"https://via.placeholder.com/400x200/555ab9/ffffff?text=Sample+Image"}},m={args:{title:"Card with Actions",description:"This card includes action buttons at the bottom.",actions:[{label:"Primary Action",primary:!0,onClick:t()},{label:"Secondary",primary:!1,onClick:t()}]}},p={args:{title:"Complete Card",description:"This card has both an image and action buttons, demonstrating all features.",imageUrl:"https://via.placeholder.com/400x200/555ab9/ffffff?text=Complete+Card",actions:[{label:"Learn More",primary:!0,onClick:t()},{label:"Share",primary:!1,onClick:t()}]}},f={args:{title:"Small Card",description:"This is a small-sized card.",size:"small",imageUrl:"https://via.placeholder.com/280x200/555ab9/ffffff?text=Small+Card"}},h={args:{title:"Large Card",description:"This is a large-sized card with more space for content.",size:"large",imageUrl:"https://via.placeholder.com/450x200/555ab9/ffffff?text=Large+Card"}},g={args:{title:"Elevated Card",description:"This card has an elevated appearance with enhanced shadow.",variant:"elevated",imageUrl:"https://via.placeholder.com/400x200/555ab9/ffffff?text=Elevated+Card"}},u={args:{title:"Flat Card",description:"This card has a flat appearance with a subtle border.",variant:"flat",imageUrl:"https://via.placeholder.com/400x200/555ab9/ffffff?text=Flat+Card"}},C={args:{title:"Outlined Card",description:"This card has a prominent outline border.",variant:"outlined",imageUrl:"https://via.placeholder.com/400x200/555ab9/ffffff?text=Outlined+Card"}},b={args:{title:"Clickable Card",description:"This card can be clicked and will trigger an action.",imageUrl:"https://via.placeholder.com/400x200/555ab9/ffffff?text=Click+Me",onClick:t()}};var S,E,_;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Default Card',
    description: 'This is a default card with standard styling.'
  }
}`,...(_=(E=l.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var U,w,O;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    title: 'Card with Image',
    description: 'This card includes an image at the top.',
    imageUrl: 'https://via.placeholder.com/400x200/555ab9/ffffff?text=Sample+Image'
  }
}`,...(O=(w=d.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var z,L,A;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: 'Card with Actions',
    description: 'This card includes action buttons at the bottom.',
    actions: [{
      label: 'Primary Action',
      primary: true,
      onClick: fn()
    }, {
      label: 'Secondary',
      primary: false,
      onClick: fn()
    }]
  }
}`,...(A=(L=m.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var F,I,N;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: 'Complete Card',
    description: 'This card has both an image and action buttons, demonstrating all features.',
    imageUrl: 'https://via.placeholder.com/400x200/555ab9/ffffff?text=Complete+Card',
    actions: [{
      label: 'Learn More',
      primary: true,
      onClick: fn()
    }, {
      label: 'Share',
      primary: false,
      onClick: fn()
    }]
  }
}`,...(N=(I=p.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var D,M,W;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: 'Small Card',
    description: 'This is a small-sized card.',
    size: 'small',
    imageUrl: 'https://via.placeholder.com/280x200/555ab9/ffffff?text=Small+Card'
  }
}`,...(W=(M=f.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var B,P,$;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Large Card',
    description: 'This is a large-sized card with more space for content.',
    size: 'large',
    imageUrl: 'https://via.placeholder.com/450x200/555ab9/ffffff?text=Large+Card'
  }
}`,...($=(P=h.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var j,K,R;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Elevated Card',
    description: 'This card has an elevated appearance with enhanced shadow.',
    variant: 'elevated',
    imageUrl: 'https://via.placeholder.com/400x200/555ab9/ffffff?text=Elevated+Card'
  }
}`,...(R=(K=g.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var Y,q,G;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: 'Flat Card',
    description: 'This card has a flat appearance with a subtle border.',
    variant: 'flat',
    imageUrl: 'https://via.placeholder.com/400x200/555ab9/ffffff?text=Flat+Card'
  }
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,Q;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: 'Outlined Card',
    description: 'This card has a prominent outline border.',
    variant: 'outlined',
    imageUrl: 'https://via.placeholder.com/400x200/555ab9/ffffff?text=Outlined+Card'
  }
}`,...(Q=(J=C.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var V,X,Z;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Clickable Card',
    description: 'This card can be clicked and will trigger an action.',
    imageUrl: 'https://via.placeholder.com/400x200/555ab9/ffffff?text=Click+Me',
    onClick: fn()
  }
}`,...(Z=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const ie=["Default","WithImage","WithActions","Complete","Small","Large","Elevated","Flat","Outlined","Clickable"];export{b as Clickable,p as Complete,l as Default,g as Elevated,u as Flat,h as Large,C as Outlined,f as Small,m as WithActions,d as WithImage,ie as __namedExportsOrder,se as default};
