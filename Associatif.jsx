// Associatif.jsx

const ASSOC = [
  {
    title:'Président de liste pour un BDS',
    where:'ESIEE Paris',
    when:'Février — Juin 2023',
    note:"À la tête d'une équipe de 20 personnes avec des partenariats établis (Climb Up, Fitness Park). Campagne, négociation, organisation d'événements sportifs.",
    partners:[
      { name:'Climb Up', logo:'assets/climb-up.jpg' },
      { name:'Fitness Park', logo:'assets/fitness-park.jpg' },
    ],
  },
  {
    title:'CPES Platform',
    where:'Alumni CPGE Lycée Jean Moulin · Torcy',
    when:'Août 2025 — En cours',
    note:"Initiateur et développeur d'une plateforme web pour les alumni de la classe préparatoire Jean Moulin (Next.js · Supabase · ShadCN/UI).",
  },
];

const Associatif = () => {
  useLucide();
  return (
    <section className="container section" style={{paddingTop:80, paddingBottom:96}}>
      <Marker>Engagement & projets personnels</Marker>
      <h2 style={{
        fontSize:'clamp(32px, 4vw, 52px)',
        lineHeight:1.05, letterSpacing:'-1px', fontWeight:400,
        margin:'16px 0 48px',
      }}>
        Associatif & initiatives.
      </h2>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}} className="two-col">
        {ASSOC.map(a => (
          <div key={a.title} className="golden-shadow-md" style={{
            background:'var(--bg-1)',
            border:'1px solid var(--border-warm)',
            padding:32,
          }}>
            <div className="upper" style={{opacity:0.6, marginBottom:12, color:'#fa520f'}}>{a.when}</div>
            <div style={{fontSize:22, lineHeight:1.2, marginBottom:6}}>{a.title}</div>
            <div style={{fontSize:14, opacity:0.7, marginBottom:16}}>{a.where}</div>
            <p style={{fontSize:14, lineHeight:1.6, opacity:0.82, margin:0}}>{a.note}</p>
            {a.partners && (
              <div style={{
                display:'flex', gap:16, alignItems:'center',
                marginTop:20, paddingTop:20,
                borderTop:'1px solid var(--border-warm)',
              }}>
                <div className="upper" style={{opacity:0.55, fontSize:11}}>Partenaires</div>
                <div style={{display:'flex', gap:12, alignItems:'center'}}>
                  {a.partners.map(p => (
                    <img key={p.name} src={p.logo} alt={p.name}
                      title={p.name}
                      style={{height:40, width:'auto', display:'block', objectFit:'contain'}}/>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

Object.assign(window, { Associatif });
