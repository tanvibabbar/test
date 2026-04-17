/* Components */
const { useState, useEffect, useRef, useMemo } = React;

// ---- Icon helpers ----
function IconSearch({size=18}) {
  return <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="9" r="6"/><path d="m14 14 4 4"/></svg>;
}
function IconBag({size=18}) {
  return <svg width={size} height={size} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 7h12l-1 10H5L4 7z"/><path d="M7 7V5a3 3 0 0 1 6 0v2"/></svg>;
}
function IconArrow({dir="right", size=16}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" style={{transform: dir==="left" ? "rotate(180deg)" : "none"}}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
}
function IconCert({label}) {
  return <svg width="44" height="44" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="22" cy="18" r="10"/><path d="M14 26l-4 12 12-4 12 4-4-12"/><text x="22" y="21" textAnchor="middle" fontSize="8" stroke="none" fill="currentColor" fontFamily="Funnel Sans">{label}</text>
  </svg>;
}

// ---- Nav ----
// ---- Brand logo (uses real Figma Wordmark.svg) ----
function BrandLogo({ color = 'var(--coffee)' }) {
  return (
    <span className="brandmark" aria-label="second form" style={{color}}>
      <img src="assets/Wordmark.svg" alt="second form" className="bm-wordmark"/>
    </span>
  );
}

function Nav({ page, navigate }) {
  const links = ["New In","Bestsellers","Women","Men","Shop by Style","Recycled","Fabrics","About","Corporate Orders"];
  return (
    <div className="nav">
      <a href="#" className="logo" onClick={e=>{e.preventDefault(); navigate('home')}} aria-label="second form">
        <BrandLogo/>
      </a>
      <div className="nav-links">
        {links.map(l => {
          const isCorp = l === "Corporate Orders";
          return (
            <a key={l} href="#" onClick={(e)=>{
                e.preventDefault();
                if (isCorp) { navigate('b2b'); return; }
                if (l === 'Fabrics') {
                  const el = document.getElementById('fabrics-section');
                  if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({top, behavior:'smooth'}); }
                  return;
                }
                navigate('home');
              }}
              className={isCorp && page === 'b2b' ? 'active' : (l==='New In' && page==='home' ? 'active':'')}>{l}</a>
          );
        })}
      </div>
      <div className="nav-icons">
        <button aria-label="search"><IconSearch/></button>
        <button aria-label="bag" style={{position:'relative'}}><IconBag/><span style={{position:'absolute',top:2,right:2,width:14,height:14,borderRadius:'50%',background:'var(--chocolate)',color:'#fff',fontSize:9,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'Funnel Sans'}}>2</span></button>
      </div>
    </div>
  );
}

// ---- Decorative rotating vector ----
function DecoVector({ className, rot }) {
  return (
    <div className={"deco-vector " + className} style={{ transform: `rotate(${rot}deg)`, willChange: "transform" }} />
  );
}

// ---- Product Card ----
function ProductCard({img, name, sub, price, overlay}) {
  return (
    <div className="product-card reveal">
      <div className="img-wrap">
        <img src={img} alt={name}/>
        {overlay && <img src={overlay} alt="" style={{position:'absolute',inset:0}}/>}
        <div className="quick-add">Quick Add +</div>
      </div>
      <div className="meta">
        <div>
          <div className="name">{name}</div>
          <div className="sub">{sub}</div>
        </div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
}

// ---- Animated word for scroll color ----
function LoungePhrase() {
  const tweaks = (typeof window !== 'undefined' && window.__tweaks) || {};
  const baseText = "lounge and hybrid wear that moves with your life, from home to errands, work to travel, without ever asking you to choose between comfort and style.";
  const text = tweaks.loungePhraseUppercase ? baseText.toUpperCase() : baseText;
  const words = text.split(" ");
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when top reaches bottom of viewport, 1 when bottom passes top of viewport
      const total = r.height + vh * 0.8;
      const traveled = vh - r.top;
      const p = Math.max(0, Math.min(1, traveled / total));
      setProgress(p);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', onScroll);
    return () => {window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll)};
  }, []);

  return (
    <section className="lounge-phrase" ref={ref}>
      <DecoVector className="v2" rot={-progress * 360} />
      <h2>
        {words.map((w,i) => {
          const wordP = i / words.length;
          // fade from bone -> chocolate as progress passes each word threshold
          const on = progress * 1.15 > wordP;
          return (
            <span key={i} className="w" style={{
              color: on ? 'var(--chocolate)' : 'var(--bone-2)'
            }}>{w}</span>
          );
        })}
      </h2>
    </section>
  );
}

// Make components global so they can be used across script files (though we use one file)
Object.assign(window, { IconSearch, IconBag, IconArrow, Nav, BrandLogo, DecoVector, ProductCard, LoungePhrase });
