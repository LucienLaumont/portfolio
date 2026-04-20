// About.jsx

const About = ({ go }) => {
  useLucide();
  return (
    <section className="container section page-enter" style={{paddingTop:80, paddingBottom:96}}>
      <Marker>À propos</Marker>
      <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:64, marginTop:28, alignItems:'start'}} className="two-col">
        <div>
          <h1 style={{
            fontSize:'clamp(40px, 5.2vw, 72px)', lineHeight:1,
            letterSpacing:'-1.8px', fontWeight:400, margin:0, textWrap:'pretty',
          }}>
            Ingénieur, curieux, indépendant — <span style={{color:'#fa520f'}}>et encore étudiant du monde.</span>
          </h1>
          <p style={{fontSize:17, lineHeight:1.65, marginTop:32, maxWidth:580, opacity:0.85}}>
            Diplômé de l'ESIEE Paris en Data Science & IA, j'ai passé cinq ans entre mathématiques, ingénierie logicielle et apprentissage automatique. Mon stage de fin d'études à Vancouver m'a appris à livrer des systèmes IA complets — de la chaîne RAG au back-office sécurisé — et à travailler dans un environnement anglophone.
          </p>
          <p style={{fontSize:17, lineHeight:1.65, marginTop:18, maxWidth:580, opacity:0.85}}>
            Je cherche un poste en Data Science ou IA à partir de juillet 2026, avec une préférence pour des sujets à impact — énergie, environnement, éducation. En parallèle je développe CPES Platform, un réseau d'anciens élèves pour ma prépa d'origine.
          </p>

          <div style={{display:'flex', gap:12, marginTop:40, flexWrap:'wrap'}}>
            <Button variant="dark" upper onClick={() => go('contact')}>Travailler ensemble</Button>
            <Button variant="cream" iconLeft="download" href="assets/CV_LAUMONT_LUCIEN_FR_2026.pdf" target="_blank">Télécharger le CV</Button>
          </div>
        </div>

        <div>
          <div className="golden-shadow-md" style={{background:'var(--bg-2)', aspectRatio:'4/5', overflow:'hidden'}}>
            <img src="assets/profile.png" alt="" style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}/>
          </div>
          <div className="upper" style={{opacity:0.6, marginTop:12}}>Chelles · 2025</div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { About });
