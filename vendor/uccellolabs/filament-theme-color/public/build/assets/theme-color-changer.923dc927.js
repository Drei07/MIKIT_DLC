function R(r){var a=r.default;if(typeof a=="function"){var e=function(){return a.apply(this,arguments)};e.prototype=a.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach(function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})}),e}let D="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",F=r=>crypto.getRandomValues(new Uint8Array(r)),O=(r,a,e)=>{let t=(2<<Math.log(r.length-1)/Math.LN2)-1,n=-~(1.6*t*a/r.length);return(s=a)=>{let o="";for(;;){let i=e(n),c=n;for(;c--;)if(o+=r[i[c]&t]||"",o.length===s)return o}}},N=(r,a=21)=>O(r,a,F),G=(r=21)=>crypto.getRandomValues(new Uint8Array(r)).reduce((a,e)=>(e&=63,e<36?a+=e.toString(36):e<62?a+=(e-26).toString(36).toUpperCase():e>62?a+="-":a+="_",a),"");const I=Object.freeze(Object.defineProperty({__proto__:null,nanoid:G,customAlphabet:N,customRandom:O,urlAlphabet:D,random:F},Symbol.toStringTag,{value:"Module"})),B=R(I),T=(r,a)=>{const e=Math.pow(10,a);return Math.round(r*e)/e},H=r=>{r.length===6&&!r.startsWith("#")&&(r=`#${r}`);let{r:a,g:e,b:t}=h(r);a/=255,e/=255,t/=255;const n=Math.min(a,e,t),s=Math.max(a,e,t),o=s-n;let i=0,c=0,m=0;return o===0?i=0:s===a?i=(e-t)/o%6:s===e?i=(t-a)/o+2:i=(a-e)/o+4,i=Math.round(i*60),i<0&&(i+=360),m=(s+n)/2,c=o===0?0:o/(1-Math.abs(2*m-1)),c=+(c*100).toFixed(1),m=+(m*100).toFixed(1),{h:i,s:c,l:m}},h=r=>{r.length===6&&!r.startsWith("#")&&(r=`#${r}`);let a="0",e="0",t="0";return r.length===4?(a=`0x${r[1]}${r[1]}`,e=`0x${r[2]}${r[2]}`,t=`0x${r[3]}${r[3]}`):r.length===7&&(a=`0x${r[1]}${r[2]}`,e=`0x${r[3]}${r[4]}`,t=`0x${r[5]}${r[6]}`),{r:a,g:e,b:t}},W=(r,a,e)=>{let{r:t,g:n,b:s}=E(r,a,e);return t=t.toString(16),n=n.toString(16),s=s.toString(16),t.length===1&&(t=`0${t}`),n.length===1&&(n=`0${n}`),s.length===1&&(s=`0${s}`),`#${t}${n}${s}`},E=(r,a,e)=>{a/=100,e/=100;const t=(1-Math.abs(2*e-1))*a,n=t*(1-Math.abs(r/60%2-1)),s=e-t/2;let o=0,i=0,c=0;return r>=0&&r<60?(o=t,i=n,c=0):r>=60&&r<120?(o=n,i=t,c=0):r>=120&&r<180?(o=0,i=t,c=n):r>=180&&r<240?(o=0,i=n,c=t):r>=240&&r<300?(o=n,i=0,c=t):r>=300&&r<360&&(o=t,i=0,c=n),{r:Math.round((o+s)*255),g:Math.round((i+s)*255),b:Math.round((c+s)*255)}},d=(r,a,e)=>{const[t,n,s]=[r,a,e].map(function(o){return o/=255,o<.03928?o/12.92:Math.pow((o+.055)/1.055,2.4)});return 21.26*t+71.52*n+7.22*s},q=r=>T(d(...Object.values(h(r))),2),z=(r,a,e)=>{const t={};for(let o=99;o>=0;o--)t[o]=Math.abs(e-d(...Object.values(E(r,a,o))));let n=100,s=100;for(let o=Object.keys(t).length-1;o>=0;o--)t[o]<n&&(s=o,n=t[o]);return s},Z=r=>new RegExp(/^[A-Za-z]{3,24}$/i).test(r),J=r=>{const a=r.length===6&&!r.startsWith("#")?`#${r}`:r;return new RegExp(/^#[0-9A-F]{6}$/i).test(a.toUpperCase())},K=r=>{const a={};return r.forEach(e=>{const t={};e.swatches.filter(n=>![0,1e3].includes(n.stop)).forEach(n=>Object.assign(t,{[n.stop]:n.hex.toUpperCase()})),Object.assign(a,{[e.name]:t})}),a};var j={round:T,hexToHSL:H,hexToRGB:h,HSLToHex:W,luminanceFromRGB:d,luminanceFromHex:q,lightnessFromHSLum:z,isValidName:Z,isHex:J,output:K};const{round:b}=j,Q=r=>[{key:0,tweak:Math.round(r*1.15)},{key:50,tweak:Math.round(r*1.125)},{key:100,tweak:Math.round(r)},{key:200,tweak:Math.round(r*.75)},{key:300,tweak:Math.round(r*.5)},{key:400,tweak:Math.round(r*.25)},{key:500,tweak:0},{key:600,tweak:Math.round(r*.25)},{key:700,tweak:Math.round(r*.5)},{key:800,tweak:Math.round(r*.75)},{key:900,tweak:Math.round(r)},{key:1e3,tweak:Math.round(r)*1.25}],X=r=>[{key:0,tweak:r?r*4+r:0},{key:50,tweak:r?r*3.5+r:0},{key:100,tweak:r?r*3+r:0},{key:200,tweak:r?r*2+r:0},{key:300,tweak:r?r*1+r:0},{key:400,tweak:r?r+0:0},{key:500,tweak:0},{key:600,tweak:r||0},{key:700,tweak:r?r*1+r:0},{key:800,tweak:r?r*2+r:0},{key:900,tweak:r?r*3+r:0},{key:1e3,tweak:r?r*4+r:0}],Y=(r,a,e)=>{const t=a!=null?a:100,n=b((t-e)/5,2),s=r!=null?r:0,o=b((e-s)/5,2),i=[{key:0,tweak:Math.round(e+n*5)},{key:50,tweak:Math.round(e+n*4.5)},{key:100,tweak:Math.round(e+n*4)},{key:200,tweak:Math.round(e+n*3)},{key:300,tweak:Math.round(e+n*2)},{key:400,tweak:Math.round(e+n*1)},{key:500,tweak:Math.round(e)},{key:600,tweak:Math.round(e-o*1)},{key:700,tweak:Math.round(e-o*2)},{key:800,tweak:Math.round(e-o*3)},{key:900,tweak:Math.round(e-o*4)},{key:1e3,tweak:Math.round(e-o*5)}];return i.map(m=>({...i,tweak:Math.min(Math.max(m.tweak,0),100)}))};var rr={createSaturationScale:Q,createHueScale:X,createDistributionValues:Y};const er={id:"",name:"",value:"",h:0,s:0,lMin:0,lMax:100,useLightness:!0};var tr={DEFAULT_PALETTE_CONFIG:er};const{nanoid:ar}=B,{createHueScale:or,createSaturationScale:nr,createDistributionValues:sr}=rr,{hexToHSL:ir,HSLToHex:cr,luminanceFromHex:lr,lightnessFromHSLum:mr,isValidName:yr,isHex:ur,output:pr}=j,{DEFAULT_PALETTE_CONFIG:p}=tr,hr=(r,a,e)=>{if(!r||!yr(r)||!a||!ur(a))return null;const t={...p,id:ar(),name:r,value:a.toUpperCase(),swatches:[],...e};return pr([{...t,swatches:dr(t)}])},dr=r=>{var M,v,g,k,$;const{value:a}=r,e=(M=r.useLightness)!=null?M:p.useLightness,t=(v=r.h)!=null?v:p.h,n=(g=r.s)!=null?g:p.s,s=(k=r.lMin)!=null?k:p.lMin,o=($=r.lMax)!=null?$:p.lMax,i=or(t),c=nr(n),{h:m,s:A,l:P}=ir(a),V=e?P:lr(a),f=sr(s,o,V);return i.map(({key:C},y)=>{let l=m+i[y].tweak;l=l<0?360+l-1:l,l=l>720?l-360:l,l=l>360?l-360:l;let u=A+c[y].tweak;u=u>100?100:u;const S=e?f[y].tweak:mr(l,u,f[y].tweak),U=cr(l,u,S),w=C;return{stop:w,hex:w===500?`#${r.value.toUpperCase()}`:U.toUpperCase(),h:l,hScale:i[y].tweak,s:u,sScale:c[y].tweak,l:S}})};var x={createPalleteFromColor:hr};function L(r){r=r.substring(1);var a=parseInt(r,16),e=a>>16&255,t=a>>8&255,n=a&255;return[e,t,n]}function _(r,a){r=r.substring(1),a=a.substring(1);const e=x.createPalleteFromColor("primary",r,{}),t=x.createPalleteFromColor("primary",a,{});for(const o in e.primary)if(Object.hasOwnProperty.call(e.primary,o)){var n=e.primary[o];e.primary[o]=L(n)}for(const o in t.primary)if(Object.hasOwnProperty.call(t.primary,o)){var n=t.primary[o];t.primary[o]=L(n)}const s=document.createElement("style");s.textContent=`
    @layer base{
        :root{
            --theme-primary-color-var-50:`+e.primary[50][0]+" "+e.primary[50][1]+" "+e.primary[50][2]+`;
            --theme-primary-color-var-100:`+e.primary[400][0]+" "+e.primary[100][1]+" "+e.primary[100][2]+`;
            --theme-primary-color-var-200:`+e.primary[200][0]+" "+e.primary[200][1]+" "+e.primary[200][2]+`;
            --theme-primary-color-var-300:`+e.primary[300][0]+" "+e.primary[300][1]+" "+e.primary[300][2]+`;
            --theme-primary-color-var-400:`+e.primary[400][0]+" "+e.primary[400][1]+" "+e.primary[400][2]+`;
            --theme-primary-color-var-500:`+e.primary[500][0]+" "+e.primary[500][1]+" "+e.primary[500][2]+`;
            --theme-primary-color-var-600:`+e.primary[600][0]+" "+e.primary[600][1]+" "+e.primary[600][2]+`;
            --theme-primary-color-var-700:`+e.primary[700][0]+" "+e.primary[700][1]+" "+e.primary[700][2]+`;
            --theme-primary-color-var-800:`+e.primary[800][0]+" "+e.primary[800][1]+" "+e.primary[800][2]+`;
            --theme-primary-color-var-900:`+e.primary[900][0]+" "+e.primary[900][1]+" "+e.primary[900][2]+`;
            --theme-secondary-color-var-50:`+t.primary[50][0]+" "+t.primary[50][1]+" "+t.primary[50][2]+`;
            --theme-secondary-color-var-100:`+t.primary[400][0]+" "+t.primary[100][1]+" "+t.primary[100][2]+`;
            --theme-secondary-color-var-200:`+t.primary[200][0]+" "+t.primary[200][1]+" "+t.primary[200][2]+`;
            --theme-secondary-color-var-300:`+t.primary[300][0]+" "+t.primary[300][1]+" "+t.primary[300][2]+`;
            --theme-secondary-color-var-400:`+t.primary[400][0]+" "+t.primary[400][1]+" "+t.primary[400][2]+`;
            --theme-secondary-color-var-500:`+t.primary[500][0]+" "+t.primary[500][1]+" "+t.primary[500][2]+`;
            --theme-secondary-color-var-600:`+t.primary[600][0]+" "+t.primary[600][1]+" "+t.primary[600][2]+`;
            --theme-secondary-color-var-700:`+t.primary[700][0]+" "+t.primary[700][1]+" "+t.primary[700][2]+`;
            --theme-secondary-color-var-800:`+t.primary[800][0]+" "+t.primary[800][1]+" "+t.primary[800][2]+`;
            --theme-secondary-color-var-900:`+t.primary[900][0]+" "+t.primary[900][1]+" "+t.primary[900][2]+`;
        }
    }
    `,document.head.appendChild(s)}window.addEventListener("change-theme-color",r=>{_(r.detail.primaryColor,r.detail.secondaryColor)});_(document.getElementById("theme-primary-color").content,document.getElementById("theme-secondary-color").content);
