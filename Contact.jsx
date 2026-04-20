// Contact.jsx

const Contact = () => {
  useLucide();
  return (
    <section id="contact" style={{background:'var(--bg-2)'}}>
      <div className="container" style={{paddingTop:96, paddingBottom:120}}>
        <Marker>Contact · disponible dès juillet 2025</Marker>
        <h2 style={{
          fontSize:'clamp(40px, 6vw, 82px)',
          lineHeight:1, letterSpacing:'-2px', fontWeight:400,
          margin:'20px 0 28px', maxWidth:900, textWrap:'pretty',
        }}>
          Vous cherchez un ingénieur<br/>
          <span style={{
            backgroundImage:'linear-gradient(90deg, #fa520f 0%, #ffa110 100%)',
            WebkitBackgroundClip:'text', backgroundClip:'text', color:'transparent',
          }}>Data Science & IA ?</span>
        </h2>
        <p style={{fontSize:18, lineHeight:1.6, maxWidth:560, opacity:0.8, marginBottom:48}}>
          Je suis à l'écoute d'opportunités en CDI à partir de juillet 2025 — en France ou à l'international. N'hésitez pas à me contacter par email ou via LinkedIn.
        </p>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, maxWidth:900}} className="two-col">
          <a href="mailto:laumontlucien@gmail.com" className="golden-shadow-md" style={{
            background:'var(--bg-1)',
            padding:32,
            display:'block',
            transition:'transform 220ms cubic-bezier(.2,.8,.2,1)',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20}}>
              <Icon name="mail" size={24} style={{color:'#fa520f'}}/>
              <Icon name="arrow-up-right" size={18}/>
            </div>
            <div className="upper" style={{opacity:0.6, marginBottom:6}}>Email</div>
            <div style={{fontSize:22, letterSpacing:'-0.3px', wordBreak:'break-all'}}>laumontlucien@gmail.com</div>
            <div style={{fontSize:13, opacity:0.6, marginTop:14}}>Réponse sous 24h.</div>
          </a>

          <a href="https://linkedin.com/lucien-laumont" target="_blank" rel="noreferrer" className="golden-shadow-md" style={{
            background:'var(--fg-1)',
            color:'var(--bg-1)',
            padding:32,
            display:'block',
            transition:'transform 220ms cubic-bezier(.2,.8,.2,1)',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:20}}>
              <img src="assets/linkedin-logo.png" alt="LinkedIn" style={{width:28, height:28, display:'block'}}/>
              <Icon name="arrow-up-right" size={18} style={{color:'var(--bg-1)'}}/>
            </div>
            <div className="upper" style={{opacity:0.6, marginBottom:6}}>LinkedIn</div>
            <div style={{fontSize:22, letterSpacing:'-0.3px'}}>/in/lucien-laumont</div>
            <div style={{fontSize:13, opacity:0.6, marginTop:14}}>Connectons-nous.</div>
          </a>
        </div>

        <div style={{
          display:'flex', gap:32, marginTop:56, flexWrap:'wrap',
          paddingTop:28, borderTop:'1px solid var(--border-warm)',
        }}>
          {[
            { k:'Localisation', v:'77500 Chelles, France' },
            { k:'Mobilité', v:'France · International' },
            { k:'GitHub', v:'github.com/LucienLaumont', href:'https://github.com/LucienLaumont' },
            { k:'CV', v:'Télécharger le PDF', href:'assets/CV_LAUMONT_LUCIEN_FR_2026.pdf' },
          ].map(row => (
            <div key={row.k}>
              <div className="upper" style={{opacity:0.6, marginBottom:4}}>{row.k}</div>
              {row.href ? (
                <a href={row.href} target="_blank" rel="noreferrer" style={{fontSize:16, borderBottom:'1px solid currentColor'}}>{row.v}</a>
              ) : <div style={{fontSize:16}}>{row.v}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Contact });
