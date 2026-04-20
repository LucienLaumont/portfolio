// app.jsx — shell principal (scroll unique, sections empilées)

const App = () => {
  const [route, setRoute] = React.useState('home');

  const go = (r) => {
    setRoute(r);
    const target = document.getElementById('section-' + r);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else if (r === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Observe scroll to update active nav
  React.useEffect(() => {
    const ids = ['home','projects','experiences','about','contact'];
    const onScroll = () => {
      let active = 'home';
      for (const id of ids) {
        const el = document.getElementById('section-' + id);
        if (el && el.getBoundingClientRect().top < 120) active = id;
      }
      setRoute(active);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <Nav route={route} go={go}/>
      <main>
        <section id="section-home"><Hero go={go}/></section>
        <section id="section-projects"><Projects/></section>
        <section id="section-experiences"><Experiences/></section>
        <section id="section-formation"><Formation/></section>
        <section id="section-skills"><Skills/></section>
        <section id="section-associatif"><Associatif/></section>
        <section id="section-about"><About go={go}/></section>
        <section id="section-contact"><Contact/></section>
      </main>
      <Footer go={go}/>
      <Tweaks/>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

requestAnimationFrame(() => { if (window.lucide) window.lucide.createIcons(); });
