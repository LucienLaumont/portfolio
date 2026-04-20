// components.jsx — primitives partagés

const Marker = ({ children, style }) => (
  <span className="section-marker" style={style}>{children}</span>
);

const BlockStrip = ({ style }) => (
  <div className="block-strip" style={style}>
    <div/><div/><div/><div/><div/><div/>
  </div>
);

const LogoMark = ({ size = 28 }) => (
  <img src="assets/logo-mark.svg" alt="" width={size} height={size} style={{display:'block'}}/>
);

const Chip = ({ children, variant = 'cream' }) => {
  const chipStyles = {
    cream:   { background:'var(--bg-2)', color:'var(--fg-1)' },
    dark:    { background:'#1f1f1f', color:'#fffaeb' },
    accent:  { background:'#fa520f', color:'#fff' },
    outline: { background:'transparent', color:'var(--fg-1)', border:'1px solid var(--border-warm)' },
  }[variant];
  return (
    <span style={{
      ...chipStyles,
      padding:'5px 11px',
      borderRadius:9999,
      fontSize:11,
      letterSpacing:'0.06em',
      textTransform:'uppercase',
      display:'inline-block',
    }}>{children}</span>
  );
};

const Button = ({ variant='dark', upper=false, icon, iconLeft, children, onClick, href, style, target }) => {
  const cls = `btn ${variant} ${upper ? 'upper' : ''}`;
  const inner = (
    <>
      {iconLeft && <i data-lucide={iconLeft} style={{width:16,height:16}}/>}
      {children}
      {icon && <i data-lucide={icon} style={{width:16,height:16}}/>}
    </>
  );
  if (href) {
    return (
      <a className={cls} href={href} target={target} style={{...style, textDecoration:'none'}}>{inner}</a>
    );
  }
  return (
    <button className={cls} onClick={onClick} style={style}>{inner}</button>
  );
};

const Icon = ({ name, size = 20, style }) => (
  <i data-lucide={name} style={{ width: size, height: size, ...style }} />
);

const useLucide = (dep) => {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [dep]);
};

Object.assign(window, { Marker, BlockStrip, LogoMark, Chip, Button, Icon, useLucide });
