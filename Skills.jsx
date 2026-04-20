// Skills.jsx — compétences techniques + langues + soft skills

const HARD_SKILLS = [
  {
    level:'Maîtrise avancée',
    items:['Python','R','SQL','Supabase','FastAPI','Canva','Pinecone','Render','Pandas'],
  },
  {
    level:'Maîtrise intermédiaire',
    items:['C','Next.js','Azure AI','Docker','Excel','Next-Auth','LangChain','PowerPoint'],
  },
];

const LANGUAGES = [
  { flag:'🇫🇷', lang:'Français', level:'Langue maternelle', dots:5 },
  { flag:'🇬🇧', lang:'Anglais', level:'B2 — TOEIC 845 · stage de 5 mois au Canada', dots:4 },
];

const SOFT = ['Dynamique','Rigueur','Curieux','Sociable','Indépendant'];

const SkillCol = ({ level, items }) => (
  <div>
    <div className="upper" style={{opacity:0.7, marginBottom:16, fontSize:12}}>{level}</div>
    <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
      {items.map(s => (
        <span key={s} style={{
          background:'var(--bg-3)',
          border:'1px solid var(--border-warm)',
          padding:'8px 14px',
          fontSize:14,
          letterSpacing:'-0.1px',
        }}>{s}</span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  useLucide();
  return (
    <section className="container section" style={{paddingTop:96, paddingBottom:96}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:64}} className="two-col">
        <div>
          <Marker>Compétences techniques</Marker>
          <h2 style={{
            fontSize:'clamp(32px, 4vw, 52px)',
            lineHeight:1.05, letterSpacing:'-1px', fontWeight:400,
            margin:'16px 0 40px',
          }}>
            Outils & langages.
          </h2>
          <div style={{display:'flex', flexDirection:'column', gap:32}}>
            {HARD_SKILLS.map(s => <SkillCol key={s.level} {...s}/>)}
          </div>
        </div>

        <div>
          <Marker>Langues & soft skills</Marker>
          <h2 style={{
            fontSize:'clamp(32px, 4vw, 52px)',
            lineHeight:1.05, letterSpacing:'-1px', fontWeight:400,
            margin:'16px 0 40px',
          }}>
            Langues parlées.
          </h2>
          <div style={{display:'flex', flexDirection:'column', gap:18, marginBottom:40}}>
            {LANGUAGES.map(l => (
              <div key={l.lang} style={{
                display:'grid', gridTemplateColumns:'auto 1fr auto', gap:16,
                alignItems:'center',
                paddingBottom:14,
                borderBottom:'1px solid var(--border-warm)',
              }}>
                <span style={{fontSize:24}}>{l.flag}</span>
                <div>
                  <div style={{fontSize:20}}>{l.lang}</div>
                  <div style={{fontSize:13, opacity:0.7, marginTop:2}}>{l.level}</div>
                </div>
                <div style={{display:'flex', gap:3}}>
                  {[0,1,2,3,4].map(i => (
                    <span key={i} style={{
                      width:8, height:8, borderRadius:9999,
                      background: i < l.dots ? '#fa520f' : 'var(--border-warm)',
                    }}/>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="upper" style={{opacity:0.7, marginBottom:16, fontSize:12}}>Qualités</div>
          <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
            {SOFT.map(s => (
              <span key={s} style={{
                padding:'8px 14px',
                border:'1px solid #fa520f',
                color:'#fa520f',
                fontSize:13,
                letterSpacing:'0.03em',
              }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Skills });
