// Formation.jsx

const FORMATIONS = [
  {
    school:'ESIEE Paris',
    degree:"École d'ingénieurs — Université Gustave Eiffel",
    filiere:'Filière DataScience & IA',
    when:'Septembre 2022 — Août 2025',
    where:'Noisy-le-Grand, France',
    notes:[
      { label:'Classement 2024 — 2025', value:'6ᵉ / 39' },
      { label:'Classement 2023 — 2024', value:'12ᵉ / 62' },
    ],
  },
  {
    school:'Classe Préparatoire — Lycée Jean Moulin',
    degree:'CPGE Mathématiques, Physique et Informatique',
    filiere:'Classe Préparatoire aux Enseignements Scientifiques',
    when:'Septembre 2020 — Juin 2022',
    where:'Torcy, France',
    notes:[],
  },
];

const Formation = () => {
  useLucide();
  return (
    <section className="container section" style={{paddingTop:96, paddingBottom:96}}>
      <Marker>Formation</Marker>
      <h2 style={{
        fontSize:'clamp(36px, 4.8vw, 60px)',
        lineHeight:1, letterSpacing:'-1.2px', fontWeight:400,
        margin:'20px 0 56px', maxWidth:900,
      }}>
        Cinq ans de<br/>sciences et d'ingénierie.
      </h2>

      <div style={{display:'flex', flexDirection:'column', gap:0}}>
        {FORMATIONS.map((f, i) => (
          <div key={f.school} className="formation-row" style={{
            padding:'40px 0',
            borderTop:'1px solid var(--border-warm)',
            borderBottom: i === FORMATIONS.length-1 ? '1px solid var(--border-warm)' : 'none',
            display:'grid',
            gridTemplateColumns:'1.4fr 1fr 240px',
            gap:32,
            alignItems:'start',
          }}>
            <div>
              <div style={{fontSize:28, lineHeight:1.15, letterSpacing:'-0.5px', marginBottom:8}}>{f.school}</div>
              <div style={{fontSize:15, opacity:0.75, marginBottom:6}}>{f.degree}</div>
              <div style={{fontSize:14, opacity:0.6, fontStyle:'italic'}}>{f.filiere}</div>
            </div>
            <div>
              {f.notes.length > 0 ? f.notes.map(n => (
                <div key={n.label} style={{marginBottom:12}}>
                  <div className="upper" style={{opacity:0.6, fontSize:11, marginBottom:3}}>{n.label}</div>
                  <div style={{fontSize:22, color:'#fa520f'}}>{n.value}</div>
                </div>
              )) : (
                <div style={{fontSize:14, opacity:0.6}}>Préparation aux concours des écoles d'ingénieurs.</div>
              )}
            </div>
            <div className="row-right" style={{textAlign:'right'}}>
              <div className="upper" style={{opacity:0.65, marginBottom:4}}>{f.when}</div>
              <div style={{fontSize:13, opacity:0.55}}>{f.where}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Object.assign(window, { Formation });
