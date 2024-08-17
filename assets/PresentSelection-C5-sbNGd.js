import{d as t,m as k,T as l,a as w,u as v,r as P,j as e,E as S,f as y}from"./index-CcOahO8U.js";const o=t.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #a777e3, #6e8efb);
  padding: 2rem;
`,a=t(l)`
  color: white;
`,d=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`,E=t.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  ${({selected:n})=>n&&`
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  `}

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`,C=t.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  margin-bottom: 1rem;
`,z=t.h3`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 0.5rem;
`,T=t.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`,F=t.p`
  font-size: 0.8rem;
  text-align: center;
  color: #666;
`,c=t.button`
  padding: 0.8rem 2rem;
  background: #a777e3;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  display: block;
  margin: 0 auto;

  &:hover {
    background: #9166d9;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`,$=t.div`
  position: absolute;
  top: -10px;
  right: -10px;
  background: #4caf50;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
`,L=k`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`,I=t.div`
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: 800px 400px;
  border-radius: 10px;
  height: 330px;
  animation: ${L} 1.5s linear infinite;
`,N=t.p`
  text-align: center;
  color: white;
  font-size: 1.2rem;
  margin-top: 2rem;
`,A=()=>{const n=w(),{selectedPresent:i,setSelectedPresent:g,setStep:x,presents:m,loading:p,error:h,step:s,handleEvent:f}=v(),b=r=>{g(r)};P.useEffect(()=>{s===1&&n("/player-selection")},[s]);const u=()=>{i&&(console.log(`selected ${i.title}`),f(y.success),x(3),n("/thanks"))};return p?e.jsxs(o,{children:[e.jsx(a,{children:"Select a Present"}),e.jsx(d,{children:[...Array(10)].map((r,j)=>e.jsx(I,{},j))}),e.jsx(N,{children:"Loading presents..."})]}):h?e.jsxs(o,{children:[e.jsx(l,{children:"Error"}),e.jsx(S,{children:"Failed to fetch presents. Please try again later."}),e.jsx(c,{onClick:()=>{window.location.reload()},children:"Retry"})]}):e.jsxs(o,{children:[e.jsxs(a,{children:["Select a Present for ",localStorage.getItem("selectedPlayer")]}),e.jsx(d,{children:m.map(r=>e.jsxs(E,{selected:(i==null?void 0:i.id)===r.id,onClick:()=>b(r),children:[e.jsx(C,{src:r.image,alt:r.title}),e.jsx(z,{children:r.title}),e.jsxs(T,{children:["$",r.price.toFixed(2)]}),e.jsxs(F,{children:[r.description.slice(0,40),"..."]}),(i==null?void 0:i.id)===r.id&&e.jsx($,{children:"Selected"})]},r.id))}),e.jsx(c,{onClick:u,disabled:!i,children:"Finish"})]})};export{A as default};
