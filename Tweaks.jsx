// Tweaks.jsx — panneau live pour theme / densité

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "density": "comfortable"
}/*EDITMODE-END*/;

const applyTweaks = (t) => {
  document.body.classList.toggle('theme-dark', t.theme === 'dark');
  document.body.classList.toggle('density-compact', t.density === 'compact');
};

const Tweaks = () => {
  const [visible, setVisible] = React.useState(false);
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const onMsg = (e) => {
      if (e.data?.type === '__activate_edit_mode') setVisible(true);
      if (e.data?.type === '__deactivate_edit_mode') setVisible(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({type:'__edit_mode_available'}, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  React.useEffect(() => { applyTweaks(tweaks); }, [tweaks]);

  const update = (key, val) => {
    const next = { ...tweaks, [key]: val };
    setTweaks(next);
    window.parent.postMessage({type:'__edit_mode_set_keys', edits: { [key]: val }}, '*');
  };

  if (!visible) return null;

  const toggle = (label, key, options) => (
    <div style={{marginBottom:18}}>
      <div className="upper" style={{opacity:0.6, marginBottom:8, fontSize:11}}>{label}</div>
      <div style={{display:'flex', gap:0, border:'1px solid var(--border-warm)'}}>
        {options.map(opt => (
          <button key={opt.value}
            onClick={() => update(key, opt.value)}
            style={{
              flex:1, padding:'10px 14px',
              background: tweaks[key] === opt.value ? '#fa520f' : 'transparent',
              color: tweaks[key] === opt.value ? '#fff' : 'inherit',
              border:0, cursor:'pointer',
              fontSize:13, fontFamily:'inherit',
              letterSpacing:'0.04em',
            }}
          >{opt.label}</button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="tweaks-panel">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16}}>
        <strong style={{fontSize:14, letterSpacing:'0.06em', textTransform:'uppercase'}}>Tweaks</strong>
        <span style={{fontSize:11, opacity:0.55}}>live</span>
      </div>
      {toggle('Thème', 'theme', [
        {value:'light', label:'Ivoire'},
        {value:'dark', label:'Sombre'},
      ])}
      {toggle('Densité', 'density', [
        {value:'comfortable', label:'Confortable'},
        {value:'compact', label:'Compact'},
      ])}
    </div>
  );
};

// apply initial defaults
applyTweaks(TWEAK_DEFAULTS);

Object.assign(window, { Tweaks, TWEAK_DEFAULTS });
