const publications=[
{series:"UNIVERSAL MORAL CONCEPTS I",title:"God Father",author:"Cézjah",type:"Novel",keywords:"philosophy morality fiction",cover:"assets/images/covers/god-father.jpg",access_url:null},
{series:"UNIVERSAL MORAL CONCEPTS II",title:"The Art of Sovereignty",author:"Cézjah",type:"Philosophy",keywords:"morality ethics sovereignty constructivism",cover:"assets/images/covers/the-art-of-sovereignty.jpg",access_url:null},
{series:"UNIVERSAL MORAL CONCEPTS III",title:"How To Design an Emotion",author:"Cézjah",type:"Psychology · Affective Neuroscience",keywords:"emotion affect feeling psychology neuroscience philosophy",cover:"assets/images/covers/how-to-design-an-emotion.jpg",access_url:"https://REPLACE-WITH-REQUEST-ACCESS-FORM-URL.invalid/"}
];
const grid=document.querySelector("#publicationGrid");
function render(q=""){const s=q.toLowerCase();const items=publications.filter(p=>Object.values(p).join(" ").toLowerCase().includes(s));grid.innerHTML=items.map(p=>`<article class="card"><div class="cover"><img src="${p.cover}" alt="${p.title} book cover"></div><p class="meta">${p.type}</p><h3>${p.title}</h3><p class="author">by ${p.author}</p>${p.access_url?`<a href="${p.access_url}" target="_blank" rel="noopener">REQUEST ACCESS →</a>`:`<span class="coming-soon">COMING SOON</span>`}</article>`).join("")||"<p>No publications found.</p>"}
render();
document.querySelector("#searchToggle").addEventListener("click",()=>{const p=document.querySelector("#searchPanel");p.hidden=!p.hidden;if(!p.hidden)document.querySelector("#publicationSearch").focus()});
document.querySelector("#publicationSearch").addEventListener("input",e=>render(e.target.value));
