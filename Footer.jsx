// Footer.jsx

const Footer = ({ go }) => {
  useLucide();
  return (
    <footer style={{
      background:'linear-gradient(180deg, #ffa110 0%, #fb6424 40%, #1f1f1f 100%)',
      color:'#fffaeb',
      paddingTop:96, paddingBottom:48,
    }}>
      <div className="container">
        <h2 style={{
          fontSize:'clamp(40px, 6.5vw, 82px)', lineHeight:0.98,
          letterSpacing:'-2px', fontWeight:400, margin:0, maxWidth:900,
        }}>
          Construisons quelque chose de durable.
        </h2>
        <div style={{display:'flex', gap:12, marginTop:36, flexWrap:'wrap'}}>
          <button className="btn" onClick={() => go('contact')} style={{
            background:'#fffaeb', color:'#1f1f1f',
            textTransform:'uppercase', letterSpacing:'0.08em', fontSize:13,
          }}>Me contacter</button>
          <a className="btn" href="mailto:laumontlucien@gmail.com" style={{
            background:'rgba(255,255,255,0.12)', color:'#fffaeb',
            backdropFilter:'blur(6px)',
          }}>laumontlucien@gmail.com</a>
        </div>

        <div style={{
          display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:32,
          marginTop:96, paddingTop:32,
          borderTop:'1px solid rgba(255,250,235,0.2)',
          fontSize:14,
        }} className="two-col">
          <div>
            <div className="upper" style={{opacity:0.55, marginBottom:12}}>Profil</div>
            <div>Lucien Laumont</div>
            <div style={{opacity:0.7}}>Ingénieur Data Science & IA</div>
            <div style={{opacity:0.7}}>Chelles · France</div>
          </div>
          <div>
            <div className="upper" style={{opacity:0.55, marginBottom:12}}>Navigation</div>
            <div style={{display:'flex', flexDirection:'column', gap:6}}>
              <a style={{cursor:'pointer'}} onClick={() => go('projects')}>Projets</a>
              <a style={{cursor:'pointer'}} onClick={() => go('experiences')}>Expériences</a>
              <a style={{cursor:'pointer'}} onClick={() => go('about')}>À propos</a>
            </div>
          </div>
          <div>
            <div className="upper" style={{opacity:0.55, marginBottom:12}}>Présence</div>
            <div style={{display:'flex', flexDirection:'column', gap:6}}>
              <a href="https://github.com/LucienLaumont" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://linkedin.com/in/lucien-laumont" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="mailto:laumontlucien@gmail.com">Email</a>
            </div>
          </div>
          <div>
            <div className="upper" style={{opacity:0.55, marginBottom:12}}>Colophon</div>
            <div style={{opacity:0.8}}>Composé en Arial 400. Sur ivoire chaud. © 2026 Lucien Laumont.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Footer });
