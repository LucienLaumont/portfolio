// Experiences.jsx — timeline pro

const EXPERIENCES = [
  {
    title:'AI Intern',
    org:'Your Main Guy',
    logo:'assets/YourMainGuy_logo.png',
    where:'Vancouver, Canada',
    when:'Mars — Août 2025',
    context:'Stage de fin d\'études (6 mois) · cursus ingénieur',
    bullets:[
      "Conçu en autonomie un système d'IA (RAG) pour un outil interne de questions-réponses sur environ 100 documents : ingestion, recherche sémantique et génération des réponses par LLM.",
      "Évalué sur un jeu de questions-réponses : documents pertinents retrouvés dans environ 85 % des cas.",
    ],
    stack:['Python','FastAPI','API Mistral (OCR, LLM, embeddings)','Pinecone'],
  },
  {
    title:'Consultant en processus & transformation digitale',
    org:'Mind7 Consulting',
    logo:'assets/Mind7Consulting_logo.png',
    where:'Paris, France',
    when:'Mai — Août 2024',
    context:'Stage de 4 mois · cursus ingénieur',
    bullets:[
      "Développé et testé le module de recherche documentaire (retrieval) d'un chatbot pour une compagnie d'assurance.",
      "Contribué à un chatbot conforme aux principes GreenIT et à un outil de résumé automatique d'entretiens (speech-to-text puis LLM).",
    ],
    stack:['Python','Azure AI Foundry','API OpenAI'],
  },
];

const ExperienceCard = ({ e, last }) => (
  <div className="experience-row" style={{
    position:'relative',
    paddingLeft:48,
    paddingBottom: last ? 0 : 56,
    paddingTop:4,
  }}>
    <span className="timeline-dot" style={{borderColor:'#fa520f'}}/>
    <div className="row-stack-mobile" style={{display:'grid', gridTemplateColumns:'1fr 180px', gap:32, alignItems:'start'}}>
      <div>
        <div style={{display:'flex', alignItems:'center', gap:16, marginBottom:12, flexWrap:'wrap'}}>
          {e.logo && (
            <img src={e.logo} alt={e.org}
              style={{
                width:56, height:56, flexShrink:0,
                objectFit:'cover', display:'block',
              }}/>
          )}
          <div style={{fontSize:32, lineHeight:1.1, letterSpacing:'-0.5px'}}>
            {e.title}
          </div>
        </div>
        <div style={{fontSize:17, opacity:0.85, marginBottom:4}}>
          <span style={{color:'#fa520f'}}>{e.org}</span>
          <span style={{opacity:0.6}}> · {e.where}</span>
        </div>
        <div className="upper" style={{opacity:0.55, marginBottom:20}}>{e.context}</div>
        <ul style={{margin:0, padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:8}}>
          {e.bullets.map((b, i) => (
            <li key={i} style={{
              fontSize:15, lineHeight:1.55, opacity:0.82,
              paddingLeft:18, position:'relative',
            }}>
              <span style={{
                position:'absolute', left:0, top:10,
                width:6, height:1, background:'#fa520f',
              }}/>
              {b}
            </li>
          ))}
        </ul>
        <div style={{display:'flex', gap:6, flexWrap:'wrap', marginTop:20}}>
          {e.stack.map(t => <Chip key={t} variant="outline">{t}</Chip>)}
        </div>
      </div>
      <div className="upper row-right" style={{opacity:0.65, textAlign:'right', fontSize:13}}>{e.when}</div>
    </div>
  </div>
);

const Experiences = () => {
  useLucide();
  return (
    <section style={{background:'var(--bg-2)', padding:'96px 0'}}>
      <div className="container">
        <Marker>Expériences professionnelles</Marker>
        <h2 style={{
          fontSize:'clamp(36px, 4.8vw, 60px)',
          lineHeight:1,
          letterSpacing:'-1.2px',
          fontWeight:400,
          margin:'20px 0 56px',
          maxWidth:900,
        }}>
          De Paris,<br/>à Vancouver.
        </h2>
        <div className="timeline-rail">
          {EXPERIENCES.map((e, i) => (
            <ExperienceCard key={e.org} e={e} last={i === EXPERIENCES.length-1}/>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Experiences });
