// B2B page
const { useState: useStateB } = React;

function B2BPage({ navigate }) {
  const products = [
    { name: 'CO-ORD SETS', num: '01', img: 'assets/prod3.jpg' },
    { name: 'HOODIES', num: '02', img: 'assets/prod1.png' },
    { name: 'T-SHIRTS', num: '03', img: 'assets/prod2.png' },
    { name: 'ACCESSORIES', num: '04', img: 'assets/prod4.jpg' },
  ];
  const caps = [
    { t: 'Fabric selection', d: 'Choose from premium materials', i: 'fabric' },
    { t: 'Design customization', d: 'Modify styles to your needs', i: 'design' },
    { t: 'Logo branding', d: 'Multiple placement options', i: 'logo' },
    { t: 'Sizing customization', d: 'Inclusive size ranges', i: 'size' },
    { t: 'Premium packaging', d: 'Gift-ready presentation', i: 'gift' },
  ];
  const steps = [
    { n: '01', t: 'Submit Inquiry', d: 'Share your vision, volumes & timelines with our team' },
    { n: '02', t: 'Design & Sampling', d: 'Review prototypes and approve materials & fit' },
    { n: '03', t: 'Production', d: 'Manufacturing begins with quality checks at every stage' },
    { n: '04', t: 'Delivery', d: 'Receive your order on time, ready to distribute' },
  ];
  return (
    <div>
      <Nav page="b2b" navigate={navigate}/>
      <section className="hero" style={{paddingTop:96}}>
        <div className="b2b-hero-inner" style={{backgroundImage:`linear-gradient(rgba(39,9,3,0.55),rgba(39,9,3,0.55)), url(assets/b2bhero.jpg)`}}>
          <h1>CORPORATE<br/>ORDERS</h1>
          <p>Employee experience programs, gifting, and internal branding at scale.</p>
        </div>
      </section>

      <section className="b2b-intro reveal">
        <h2>We work with teams to create apparel and gifting that feels aligned with your brand. Designed to fit seamlessly into real work lives.</h2>
      </section>

      <section className="b2b-products">
        <div className="section-head" style={{padding:'0 0 32px'}}>
          <div><h2 style={{color:'var(--coffee)'}}>FOR YOUR TEAM</h2><span className="eyebrow" style={{color:'var(--warm-taupe)'}}>CATEGORIES</span></div>
          <a href="#" className="btn-outline">View Catalog →</a>
        </div>
        <div className="b2b-product-grid">
          {products.map((p,i) => (
            <div key={i} className="b2b-prod-card reveal" style={{backgroundImage:`url(${p.img})`}}>
              <span className="num">{p.num}</span>
              <span className="label">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="capabilities reveal">
        <h2>Customization & Capabilities</h2>
        <div className="cap-grid">
          {caps.map((c, i) => (
            <div key={i} className="cap-card">
              <div className="icon">
                <svg viewBox="0 0 44 44" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {c.i==='fabric' && <><rect x="8" y="8" width="28" height="28" rx="2"/><path d="M8 16h28M8 24h28M8 32h28M16 8v28M24 8v28M32 8v28" opacity="0.4"/></>}
                  {c.i==='design' && <><path d="M22 6l4 8 10 1-7 7 2 10-9-5-9 5 2-10-7-7 10-1z"/></>}
                  {c.i==='logo' && <><circle cx="22" cy="22" r="14"/><path d="M8 22h28M22 8a20 20 0 0 1 0 28M22 8a20 20 0 0 0 0 28"/></>}
                  {c.i==='size' && <><rect x="6" y="16" width="32" height="12" rx="1"/><path d="M12 16v6M18 16v6M24 16v6M30 16v6M15 16v4M21 16v4M27 16v4M33 16v4"/></>}
                  {c.i==='gift' && <><rect x="8" y="16" width="28" height="22" rx="1"/><path d="M6 16h32M22 16v22M22 16s-6-8-10-4 10 4 10 4 6-8 10-4-10 4-10 4"/></>}
                </svg>
              </div>
              <h4>{c.t}</h4><p>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="how-it-works reveal">
        <h2>HOW IT WORKS</h2>
        <p>End-to-end support — from idea to execution.</p>
        <div className="how-grid">
          {steps.map((s,i) => (
            <div key={i} className="how-step">
              <div className="step-num">{s.n}</div>
              <h5>{s.t}</h5><p>{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="manufacturing reveal">
        <h2>Built on Proven Manufacturing</h2>
        <p>Second Form is backed by our in-house manufacturing partner, Daiko Exports Pvt. Ltd. — a globally compliant garment unit with established international relationships.</p>
        <div className="stats">
          <div className="stat"><b>15+</b><span>Years of exports</span></div>
          <div className="stat"><b>120k</b><span>Units monthly capacity</span></div>
          <div className="stat"><b>12</b><span>Global certifications</span></div>
        </div>
      </section>

      <section className="cta-band reveal">
        <h2>Ready to start your order?</h2>
        <p>Minimum order quantities start at 50 units. Let's talk.</p>
        <div style={{display:'flex', gap:16, justifyContent:'center'}}>
          <a href="#" className="btn btn-light">Submit Inquiry →</a>
          <a href="#" onClick={(e)=>{e.preventDefault(); navigate('home')}} className="btn-outline on-dark" style={{alignSelf:'center'}}>Back to Shop</a>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="foot-cols">
        <div><h4>Products</h4><ul><li><a href="#">T-shirts</a></li><li><a href="#">Co-ord Sets</a></li><li><a href="#">Hoodies</a></li><li><a href="#">Accessories</a></li></ul></div>
        <div><h4>Bottoms</h4><ul><li><a href="#">Pants</a></li><li><a href="#">Tank Tops</a></li><li><a href="#">Corporate</a></li></ul></div>
        <div><h4>Company</h4><ul><li><a href="#">About</a></li><li><a href="#">Our Process</a></li><li><a href="#">Certifications</a></li><li><a href="#">Contact</a></li></ul></div>
        <div><h4>Legal</h4><ul><li><a href="#">Privacy Policy</a></li><li><a href="#">Terms of Service</a></li><li><a href="#">Shipping Policy</a></li></ul></div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Second Form. All rights reserved.</span>
        <span className="it">Built on the foundation of export-grade manufacturing, designed for modern teams.</span>
      </div>
    </footer>
  );
}

Object.assign(window, { B2BPage, Footer });
