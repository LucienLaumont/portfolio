// Hero.jsx — accueil avec photo + headline

const Hero = ({ go }) => {
  useLucide();
  return (
    <section style={{position:'relative', overflow:'hidden'}}>
      <div className="container" style={{
        paddingTop:80, paddingBottom:100,
        display:'grid', gridTemplateColumns:'1.3fr 1fr',
        gap:64, alignItems:'center',
      }} className="container two-col">
        <div>
          <Marker>Portfolio · Ingénieur Data Science & IA</Marker>
          <h1 style={{
            fontSize:'clamp(42px, 5.6vw, 82px)',
            lineHeight:1.02,
            letterSpacing:'-2px',
            fontWeight:400,
            margin:'24px 0 28px',
            textWrap:'pretty',
          }}>
            Data Science & IA<br/>
            <span style={{
              backgroundImage:'linear-gradient(90deg, #fa520f 0%, #ff8105 50%, #ffa110 100%)',
              WebkitBackgroundClip:'text',
              backgroundClip:'text',
              color:'transparent',
            }}>pour un futur durable.</span>
          </h1>
          <p style={{
            fontSize:18, lineHeight:1.6, maxWidth:560, opacity:0.8, marginTop:8,
          }}>
            Des solutions intelligentes au service de la planète. Diplômé ingénieur ESIEE Paris en Data Science & IA, je conçois et déploie des chaînes RAG, des modèles de classification et des outils full-stack qui transforment la donnée en décision.
          </p>
          <div style={{display:'flex', gap:12, marginTop:40, flexWrap:'wrap'}}>
            <Button variant="dark" upper icon="arrow-up-right" onClick={() => go('projects')}>Voir mes projets</Button>
            <Button variant="cream" onClick={() => go('contact')}>Disponible dès juillet 2025 →</Button>
          </div>
          <div style={{
            display:'flex', gap:28, marginTop:56, flexWrap:'wrap',
            paddingTop:32, borderTop:'1px solid var(--border-warm)',
          }}>
            {[
              { k:'Formation', v:'ESIEE Paris' },
              { k:'Classement', v:'6ᵉ / 39' },
              { k:'Dernier stage', v:'Vancouver · AI Intern' },
            ].map(row => (
              <div key={row.k}>
                <div className="upper" style={{opacity:0.6, marginBottom:4}}>{row.k}</div>
                <div style={{fontSize:16}}>{row.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{position:'relative'}}>
          <div className="golden-shadow-md" style={{
            position:'relative',
            background:'var(--bg-2)',
            aspectRatio:'4/5',
            overflow:'hidden',
          }}>
            <img src="assets/profile.png" alt="Lucien Laumont"
              style={{
                width:'100%', height:'100%', objectFit:'cover', display:'block',
                filter:'saturate(1.05) contrast(1.02)',
              }}/>
            <div style={{
              position:'absolute', inset:0,
              background:'linear-gradient(180deg, rgba(255,161,16,0) 60%, rgba(250,82,15,0.12) 100%)',
              pointerEvents:'none',
            }}/>
          </div>
          <div style={{
            position:'absolute', left:-16, top:-16,
            background:'#1f1f1f', color:'#fffaeb',
            padding:'10px 16px',
            fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase',
          }}>Lucien · 2025</div>
          <div style={{
            position:'absolute', right:-8, bottom:-8,
          }}>
            <BlockStrip style={{width:120, height:10}}/>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
