// Projects.jsx — timeline verticale des projets

const PROJECTS = [
  {
    id:'ymg',
    title:'RAG & Back-office IA',
    blurb:"Stage de fin d'études chez Your Main Guy (Vancouver).",
    role:'AI Intern · cursus ingénieur',
    year:'Mars — Août 2025',
    period:'2025',
    tags:['Python','Mistral API','Pinecone','Next.js','FastAPI','PostgreSQL'],
    kind:'pro',
    note:"Conception d'une chaîne RAG complète (embeddings, LLM Mistral, vector DB Pinecone) et développement full-stack d'un back-office sécurisé avec OAuth Google.",
  },
  {
    id:'gpt2',
    title:'Fine-tuning GPT-2',
    blurb:"Fine-tuning d'un GPT-2 sur un dataset synthétique généré par Mistral, avec interface Next.js pour chatbot interactif.",
    role:'Travail académique — ESIEE Paris',
    year:'Janvier — Mars 2025',
    period:'2025',
    tags:['Transformers','Hugging Face','Next.js'],
    kind:'academique',
    note:'Pipeline complet : génération du dataset synthétique, fine-tuning supervisé, déploiement web.',
  },
  {
    id:'accidents',
    title:'Prédiction de la gravité des accidents',
    blurb:"Pipeline de classification supervisée avec feature engineering avancé (météo, équipements, âge) pour maximiser l'AUC.",
    role:'Travail académique — ESIEE Paris',
    year:'Janvier — Février 2024',
    period:'2024',
    tags:['Scikit-learn','Pandas','Plotly','Jupyter'],
    kind:'academique',
    note:'Classé 1ᵉʳ sur 57 étudiants de la promo E4 — DataScience & IA 2024.',
    highlight:'1ᵉʳ / 57',
  },
  {
    id:'dashboard',
    title:"Dashboard — Site de L'Étudiant",
    blurb:"Extraction de données sur les lycées français via scraping (Scrapy), développement d'un tableau de bord interactif conteneurisé avec Docker.",
    role:'Travail académique — ESIEE Paris',
    year:'Décembre 2023 — Janvier 2024',
    period:'2024',
    tags:['Python','Scrapy','Dash','Plotly','Docker'],
    kind:'academique',
    note:'Déploiement reproductible en Docker, pipeline end-to-end scrape → dashboard.',
  },
  {
    id:'mind7',
    title:'Chatbot GreenIT & résumé d\'entretiens',
    blurb:"Participation à des projets IA chez Mind7 Consulting : chatbot GreenIT et outil de résumé d'entretiens basé sur Speech-to-Text et LLM.",
    role:'Consultant IA · Stage de 4 mois',
    year:'Mai — Août 2024',
    period:'2024',
    tags:['Microsoft Azure','API OpenAI','Gradio'],
    kind:'pro',
    note:'Double mission — transformation digitale et POC IA en contexte conseil.',
  },
];

const kindLabel = {
  pro: 'Professionnel',
  academique: 'Académique',
};
const kindColor = {
  pro: '#fa520f',
  academique: '#ff8105',
};

const ProjectRow = ({ p, last }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className="project-row"
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      style={{
        position:'relative',
        paddingLeft:48,
        paddingBottom: last ? 0 : 48,
        paddingTop:8,
        cursor:'default',
        transition:'background 200ms ease-out',
        background: hover ? 'color-mix(in srgb, #ffe295 20%, transparent)' : 'transparent',
        paddingRight:20,
      }}
    >
      <span className="timeline-dot" style={{
        borderColor: kindColor[p.kind],
        transform: hover ? 'scale(1.2)' : 'scale(1)',
        transition:'transform 200ms ease-out',
      }}/>
      <div className="row-stack-mobile" style={{display:'grid', gridTemplateColumns:'1fr 160px', gap:24, alignItems:'baseline'}}>
        <div>
          <div style={{display:'flex', gap:10, alignItems:'center', marginBottom:10, flexWrap:'wrap'}}>
            <span style={{
              fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase',
              color: kindColor[p.kind], fontWeight:400,
            }}>{kindLabel[p.kind]}</span>
            {p.highlight && (
              <span style={{
                background:'#1f1f1f', color:'#fffaeb',
                padding:'3px 10px', fontSize:11, letterSpacing:'0.08em', textTransform:'uppercase',
              }}>{p.highlight}</span>
            )}
          </div>
          <div style={{fontSize:28, lineHeight:1.15, letterSpacing:'-0.5px', marginBottom:8}}>{p.title}</div>
          <div style={{fontSize:15, lineHeight:1.55, opacity:0.78, maxWidth:640, marginBottom:12}}>{p.blurb}</div>
          <div style={{fontSize:13, opacity:0.6, marginBottom:14, fontStyle:'italic'}}>{p.role}</div>
          <div style={{display:'flex', gap:6, flexWrap:'wrap'}}>
            {p.tags.map(t => <Chip key={t} variant="outline">{t}</Chip>)}
          </div>
        </div>
        <div className="upper row-right" style={{opacity:0.65, textAlign:'right', whiteSpace:'normal'}}>{p.year}</div>
      </div>
    </div>
  );
};

const Projects = ({ full = false }) => {
  useLucide();
  return (
    <section className="container section" style={{paddingTop:96, paddingBottom:96}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:24}}>
        <Marker>Projets · 2023 — 2025</Marker>
        <span className="upper" style={{opacity:0.55}}>{PROJECTS.length} projets</span>
      </div>
      <h2 style={{
        fontSize:'clamp(36px, 4.8vw, 60px)',
        lineHeight:1,
        letterSpacing:'-1.2px',
        fontWeight:400,
        maxWidth:900,
        marginBottom:16,
        textWrap:'pretty',
      }}>
        De la donnée brute<br/>au produit livré.
      </h2>
      <p style={{maxWidth:640, opacity:0.75, fontSize:16, lineHeight:1.55, marginBottom:56}}>
        Cinq projets pro et académiques — chacun pensé pour résoudre un problème concret avec les bons outils : scraping, NLP, RAG, classification supervisée, full-stack.
      </p>

      <div style={{
        display:'flex', gap:20, marginBottom:32,
        fontSize:12, letterSpacing:'0.08em', textTransform:'uppercase',
      }}>
        {Object.entries(kindLabel).map(([k, label]) => (
          <div key={k} style={{display:'flex', alignItems:'center', gap:8}}>
            <span style={{width:10, height:10, borderRadius:9999, background:kindColor[k]}}/>
            {label}
          </div>
        ))}
      </div>

      <div className="timeline-rail">
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.id} p={p} last={i === PROJECTS.length-1}/>
        ))}
      </div>
    </section>
  );
};

Object.assign(window, { Projects, PROJECTS });
