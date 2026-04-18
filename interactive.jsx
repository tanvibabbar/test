// Fabrics interactive section
const { useState: useStateF, useEffect: useEffectF } = React;

const FABRICS = [
  { key: 'terry', name: 'French Terry', eyebrow: 'Second-Skin Softness', title: 'ULTRA SOFT WITH\nEFFORTLESS BREATHABILITY',
    desc: 'Our signature French Terry is brushed for a plush hand-feel on the inside and a clean, structured drape on the outside — built to soften beautifully with every wash.',
    img: 'assets/fabric.jpg', props: [['72%','Organic Cotton'],['260 GSM','Midweight'],['PRE-SHRUNK','Finished'],['CERTIFIED','GOTS']]},
  { key: 'jersey', name: 'Ribbed Jersey', eyebrow: 'Fluid Movement', title: '4-way stretch that adapts to your body',
    desc: 'A close-knit rib with a weighted, resilient feel. Sculpts softly, holds its shape, and moves with you — equal parts lounge and street.',
    img: 'assets/prod2.png', props: [['88%','Modal Cotton'],['220 gsm','Lightweight'],['Anti-pill','Treated'],['Made in','India']]},
  { key: 'pima', name: 'Combed Pima', eyebrow: 'Everyday Essential', title: 'Made for daily wear with all-day ease',
    desc: 'Long-staple Pima, combed twice for an unusually smooth surface. Cool to the touch, unbothered by wrinkles, and engineered to outlast trends.',
    img: 'assets/prod1.png', props: [['100%','Pima Cotton'],['180 gsm','Breathable'],['Machine','Washable'],['Oeko-Tex','100']]},
  { key: 'linen', name: 'Tumbled Linen', eyebrow: 'Quiet Luxury', title: 'Airy, relaxed, lived-in from day one',
    desc: 'Stone-washed European flax with a crumpled, characterful drape. Cooler than cotton, lighter than it looks, and only better-looking with age.',
    img: 'assets/prod4.jpg', props: [['100%','European Flax'],['160 gsm','Summer']]},
  { key: 'fleece', name: 'Brushed Fleece', eyebrow: 'Warm & Weightless', title: 'Insulated comfort, without the bulk',
    desc: 'Loft-spun fleece with a quick-dry inner face. The warmth of heavier knits without giving up drape or breathability.',
    img: 'assets/prod3.jpg', props: [['65%','Recycled Poly'],['320 gsm','Heavy']]},
  { key: 'modal', name: 'Soft Modal', eyebrow: 'Second-Skin Softness', title: 'Silken drape with breathable structure',
    desc: 'Botanical fibres spun into a featherweight jersey. Wears like water against the skin and settles into your body without clinging.',
    img: 'assets/top.png', props: [['95%','Modal'],['170 gsm','Light']]},
  { key: 'canvas', name: 'Washed Canvas', eyebrow: 'Built for Travel', title: 'Durable structure, broken-in feel',
    desc: 'Heavy-grain cotton canvas, enzyme-washed until it moves like it\'s been yours for years. Holds tailoring; forgives everything.',
    img: 'assets/pants.png', props: [['100%','Heavy Cotton'],['340 gsm','Structured']]},
];

function Fabrics() {
  const [active, setActive] = useStateF(0);
  const f = FABRICS[active];
  return (
    <section className="fabrics" id="fabrics-section">
      <span className="eyebrow" style={{display:'block', textAlign:'center', color:'var(--chocolate)', marginBottom:12}}>OUR FABRICS</span>
      <h2>OUR FABRICS</h2>
      <div className="fabric-tabs">
        {FABRICS.map((ff, i) => (
          <button key={ff.key} className={"fabric-tab " + (i===active?'active':'')} onClick={()=>setActive(i)}>
            {ff.name}
          </button>
        ))}
      </div>
      <div className="fabric-viewer">
        <div className="fabric-card" key={active}>
          <div className="fabric-swatch">
            <div className="inner" style={{backgroundImage:`url(${f.img})`}} data-name={f.name}/>
          </div>
          <div className="fabric-info">
            <span className="eyebrow">{f.eyebrow}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <div className="fabric-props">
              {f.props.map(([b,s],i) => (
                <div key={i} className="fabric-prop"><b>{b}</b><span>{s}</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials
const TESTIMONIALS = [
  { quote: "The quality is exceptional. Every piece feels luxurious and thoughtfully made. These have become my go-to pieces for work from home and beyond.",
    name: "— Priya Sharma", city: "BENGALURU", link: "Shop the Co-ord Collection", img: "assets/prod3.jpg" },
  { quote: "Finally found a brand that understands comfort without compromising style. The fabrics are soft and the fit is perfect. Worth every penny!",
    name: "— Kabir Patel", city: "MUMBAI", link: "Shop the Lounge Collection", img: "assets/prod2.png" },
  { quote: "The sustainable approach and attention to detail make this brand stand out. These pieces last and only get better with time. Highly recommend!",
    name: "— Rohan Kumar", city: "DELHI", link: "Shop the Hoodie Collection", img: "assets/prod1.png" },
  { quote: "Love the minimalist aesthetic. Every piece is versatile and well-made. Perfect for my lifestyle — from meetings to coffee runs to relaxing at home.",
    name: "— Aditya Singh", city: "PUNE", link: "Shop the Hybrid Collection", img: "assets/prod4.jpg" },
];

function Testimonials() {
  const [i, setI] = useStateF(0);
  const t = TESTIMONIALS[i];
  const prev = () => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setI((i + 1) % TESTIMONIALS.length);
  useEffectF(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [i]);
  return (
    <section className="testimonials">
      <span className="eyebrow">CUSTOMER STORIES</span>
      <h2>WHAT OUR CUSTOMERS SAY</h2>
      <div className="testi-viewer">
        <div className="testi-image" key={'img'+i} style={{backgroundImage: `url(${t.img})`}}>
          <div style={{position:'absolute', top:16, left:16, background:'rgba(255,255,255,0.9)', padding:'6px 10px', fontSize:11, letterSpacing:'0.1em', fontFamily:'Funnel Sans'}}>{t.city}</div>
        </div>
        <div className="testi-body" key={'body'+i}>
          <blockquote style={{animation:'fadein 0.5s both'}}>"{t.quote}"</blockquote>
          <cite>{t.name}</cite>
          <br/>
          <a href="#" className="collection-link">{t.link} →</a>
          <div className="testi-nav">
            <button onClick={prev}><IconArrow dir="left"/></button>
            <button onClick={next}><IconArrow/></button>
            <div className="testi-dots">
              {TESTIMONIALS.map((_,idx) => <span key={idx} className={idx===i?'active':''} onClick={()=>setI(idx)}/>)}
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes fadein { from { opacity:0; transform: translateY(12px);} to {opacity:1; transform:none;} }`}</style>
    </section>
  );
}

Object.assign(window, { Fabrics, Testimonials, FABRICS, TESTIMONIALS });

// ---- CloudSoft-style fabrics block (branded ™ tabs, centered swatch, 4 callout tiles) ----
const CS_FABRICS = [
  { key: 'cloudsoft', label: 'CLOUDSOFT™', ribbon: 'CLOUDSOFT\n™', img: 'assets/fabric2.png',
    cells: [
      ['SECOND-SKIN SOFTNESS', 'Ultra-soft with effortless breathability.'],
      ['FLUID MOVEMENT', '4-way stretch that adapts naturally to your body.'],
      ['AIRY COMFORT', 'Soft & comfortable, easy to wear fabric and suited for all climates.'],
      ['EVERYDAY ESSENTIAL', 'Made for daily wear with all-day ease.'],
    ]},
  { key: 'luxemodal', label: 'LUXEMODAL™', ribbon: 'SILK-LIKE LUXURY', img: 'assets/fabric.jpg',
    cells: [
      ['SILK-LIKE TOUCH', 'Smooth, polished softness with a refined hand feel.'],
      ['LIGHT STRETCH', 'Gentle flexibility that moves without effort.'],
      ['BALANCED BREATHABILITY', 'Keeps you comfortable across changing moments.'],
      ['ELEVATED EASE', 'Perfect for lounging or dressing up your basics.'],
    ]},
  { key: 'airsoft', label: 'AIRSOFT™', ribbon: 'FEATHER-LIGHT AIR', img: 'assets/fabric.jpg',
    cells: [
      ['FEATHER-LIGHT FEEL', 'Barely-there weight for effortless summer layering.'],
      ['MOISTURE WICKING', 'Pulls sweat away to keep you cool under pressure.'],
      ['QUICK DRY', 'Ready to wear again in a fraction of the time.'],
      ['ALL-DAY COMFORT', 'Designed to breathe wherever the day takes you.'],
    ]},
  { key: 'ecosoft', label: 'ECOSOFT™', ribbon: 'PLANT-POWERED COMFORT', img: 'assets/fabric2.png',
    cells: [
      ['PLANT-BASED FIBERS', 'Spun from responsibly grown, low-impact crops.'],
      ['NATURALLY SOFT', 'A plush hand-feel that gets better with every wash.'],
      ['LOW-IMPACT', 'Produced with a fraction of the water of conventional cotton.'],
      ['WARDROBE STAPLE', 'Made to outlast trends, not the planet.'],
    ]},
  { key: 'ecolite', label: 'ECOLITE™', ribbon: 'LIGHT & LIVED-IN', img: 'assets/fabric.jpg',
    cells: [
      ['LIGHTWEIGHT', 'Airy, fluid drape for warmer months.'],
      ['BREATHABLE', 'Open weave keeps the air moving.'],
      ['RECYCLED BLEND', 'Made from reclaimed plant fibers.'],
      ['LIVED-IN LOOK', 'A softer, relaxed aesthetic right out of the bag.'],
    ]},
  { key: 'sculptstretch', label: 'SCULPTSTRETCH™', ribbon: 'HOLD & RELEASE', img: 'assets/fabric2.png',
    cells: [
      ['SUPPORTIVE STRETCH', 'Holds you in without holding you back.'],
      ['RECOVERY', 'Snaps back to shape, wear after wear.'],
      ['SMOOTH SILHOUETTE', 'A clean, sculpted line under everything.'],
      ['ALL-WAY FLEX', 'Designed for movement in every direction.'],
    ]},
  { key: 'texturerib', label: 'TEXTURERIB™', ribbon: 'RIBBED & READY', img: 'assets/fabric.jpg',
    cells: [
      ['TEXTURED HAND', 'A tactile rib with dimensional depth.'],
      ['BODY-SKIMMING', 'Follows your shape without clinging.'],
      ['STRUCTURED STRETCH', 'Holds its form through the day.'],
      ['ENDLESSLY LAYERABLE', 'Pairs with everything in the wardrobe.'],
    ]},
];

function CloudSoftFabrics() {
  const [active, setActive] = useStateF(0);
  const f = CS_FABRICS[active];
  return (
    <section className="cs-fabrics" id="cs-fabrics-section">
      <h2 className="cs-fab-title">OUR FABRICS</h2>
      <div className="cs-fab-tabs">
        {CS_FABRICS.map((ff, i) => (
          <button key={ff.key} className={"cs-fab-tab " + (i===active?'active':'')} onClick={()=>setActive(i)}>
            {ff.label}
          </button>
        ))}
      </div>
      <div className="cs-fab-grid">
        <div className="cs-cell cs-cell-tl">
          <h4>{f.cells[0][0]}</h4>
          <p>{f.cells[0][1]}</p>
        </div>
        <div className="cs-cell cs-cell-tr">
          <h4>{f.cells[2][0]}</h4>
          <p>{f.cells[2][1]}</p>
        </div>
        <div className="cs-swatch-wrap" key={active}>
          <div className="cs-swatch">
            <div className="cs-swatch-inner">
              <div className="cs-swatch-img" style={{backgroundImage:`url(${f.img})`}}/>
              <div className="cs-swatch-ribbon">{f.ribbon}</div>
            </div>
          </div>
        </div>
        <div className="cs-cell cs-cell-bl">
          <h4>{f.cells[1][0]}</h4>
          <p>{f.cells[1][1]}</p>
        </div>
        <div className="cs-cell cs-cell-br">
          <h4>{f.cells[3][0]}</h4>
          <p>{f.cells[3][1]}</p>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CloudSoftFabrics, CS_FABRICS });
