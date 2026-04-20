// Nav.jsx

const Nav = ({ route, go }) => {
  const [dark, setDark] = React.useState(
    () => document.body.classList.contains('theme-dark')
       || localStorage.getItem('theme') === 'dark'
  );

  React.useEffect(() => {
    document.body.classList.toggle('theme-dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useLucide([route, dark]);
  const link = (key, label) => (
    <a
      onClick={() => go(key)}
      style={{
        cursor:'pointer',
        fontSize:13,
        letterSpacing:'0.1em',
        textTransform:'uppercase',
        padding:'8px 0',
        opacity: route === key ? 1 : 0.55,
        borderBottom: route === key ? '1px solid currentColor' : '1px solid transparent',
        transition:'opacity 180ms ease-out',
      }}
    >{label}</a>
  );

  return (
    <div style={{
      position:'sticky', top:0, zIndex:10,
      background:'color-mix(in srgb, var(--bg-1) 78%, transparent)',
      backdropFilter:'blur(14px)',
      WebkitBackdropFilter:'blur(14px)',
    }}>
      <BlockStrip />
      <div className="container" style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'16px 48px',
      }}>
        <a onClick={() => go('home')} style={{display:'flex',alignItems:'center',gap:12,cursor:'pointer'}}>
          <LogoMark size={26}/>
          <span style={{fontSize:16,letterSpacing:'-0.3px'}}>Lucien Laumont</span>
        </a>
        <nav className="hide-mobile" style={{display:'flex',gap:28,alignItems:'center'}}>
          {link('home','Accueil')}
          {link('projects','Projets')}
          {link('experiences','Expériences')}
          {link('about','À propos')}
          {link('contact','Contact')}
        </nav>
        <div style={{display:'flex', gap:10, alignItems:'center'}}>
          <button
            onClick={() => setDark(d => !d)}
            aria-label={dark ? 'Passer en mode clair' : 'Passer en mode sombre'}
            title={dark ? 'Mode clair' : 'Mode sombre'}
            style={{
              width:38, height:38,
              display:'inline-flex', alignItems:'center', justifyContent:'center',
              border:'1px solid var(--border-warm)',
              background:'transparent',
              color:'inherit',
              cursor:'pointer',
              transition:'background 180ms ease-out',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,176,50,0.08)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <Icon name={dark ? 'sun' : 'moon'} size={16}/>
          </button>
          <Button variant="ghost" iconLeft="download" href="assets/CV_LAUMONT_LUCIEN_FR_2026.pdf" target="_blank" style={{padding:'10px 14px', fontSize:13}}>
            <span className="hide-mobile">CV</span>
          </Button>
          <Button variant="dark" upper onClick={() => go('contact')}>Me contacter</Button>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { Nav });
