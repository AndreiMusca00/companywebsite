import { useEffect, useRef, useState } from 'react'
import { emailLink, projects, studio, type Project } from './projects'
import NearPlayPage, { NearPlayCover } from './NearPlay'
import NearPlayLegal from './NearPlayLegal'
import NearPlaySupport from './NearPlaySupport'

function Arrow() { return <span className="arrow" aria-hidden="true">↗</span> }
function Brand() { return <a className="brand" href="/" aria-label="Fly Technology & Innovation home">fly<span>Technology<br />& Innovation</span></a> }
const nav = ['About', 'Services', 'Projects', 'Approach']
function Header() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLElement>(null)
  useEffect(() => {
    const media = window.matchMedia('(max-width: 900px)')
    const sync = () => { if (!media.matches) setOpen(false) }
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])
  useEffect(() => {
    if (!open) return
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => panel.current?.querySelector('a')?.focus({ preventScroll: true }), 100)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); toggle.current?.focus({ preventScroll: true }) }
      if (e.key === 'Tab') {
        const nodes = [toggle.current, ...Array.from(panel.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])].filter((node): node is HTMLButtonElement | HTMLAnchorElement => Boolean(node))
        const i = nodes.indexOf(document.activeElement as HTMLAnchorElement)
        if (e.shiftKey && i <= 0) { e.preventDefault(); nodes.at(-1)?.focus({ preventScroll: true }) }
        else if (!e.shiftKey && (i === nodes.length - 1 || i < 0)) { e.preventDefault(); nodes[0]?.focus({ preventScroll: true }) }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = oldOverflow; clearTimeout(timer); document.removeEventListener('keydown', onKey) }
  }, [open])
  const close = () => { setOpen(false); toggle.current?.focus({ preventScroll: true }) }
  return <header className={`header ${open ? 'menu-is-open' : ''}`}>
    <div className="header-inner"><Brand /><nav className="desktop-nav" aria-label="Main navigation">{nav.map(item => <a href={`/#${item.toLowerCase()}`} key={item}>{item}</a>)}<a className="nav-contact" href="/#contact">Let’s talk <Arrow /></a></nav>
      <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}><span>{open ? 'Close' : 'Menu'}</span><i aria-hidden="true"><b/><b/></i></button></div>
    <button className="menu-backdrop" tabIndex={-1} aria-label="Close navigation" onClick={close}/>
    <div className="drawer-clip"><nav ref={panel} id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" inert={!open}>
      <p className="eyebrow">A SMALL STUDIO. A WORLD OF IDEAS.</p>
      <div className="mobile-links">{[...nav, 'Contact'].map((item, i) => <a href={`/#${item.toLowerCase()}`} onClick={close} key={item} style={{'--i': i} as React.CSSProperties}><span className="nav-number">0{i + 1}</span><span>{item}</span><Arrow /></a>)}</div>
      <div className="menu-bottom"><span>Independent by choice.<br/>Thoughtful by nature.</span><a href={emailLink()}>{studio.email} <Arrow /></a></div>
    </nav></div>
  </header>
}
function ProductArt({ kind, large = false }: {kind: string; large?: boolean}) {
  if (kind === 'nearplay') return <NearPlayCover/>
  return <div className={`product-art pictarrow ${large ? 'large' : ''}`} aria-hidden="true"><div className="art-grid"/><div className="pictarrow-mark"><span/><span/><span/></div><span className="art-word">pictarrow<span>↗</span></span><div className="art-bottom"><span>A NEW DIRECTION.</span><span>FLY / 02</span></div></div>
}
function ProjectCard({ project }: {project: Project}) {
  return <a className={`project-card ${project.slug}`} href={`/projects/${project.slug}`}><div className="project-image"><ProductArt kind={project.slug}/><span className="status-pill"><i/>{project.slug === 'nearplay' ? 'LIVE ON THE APP STORE' : 'IN DEVELOPMENT'}</span><span className="card-open"><Arrow/></span></div><div className="project-info"><div><p className="eyebrow">{project.category}</p><h3>{project.name}</h3></div><span className="project-action">Explore project <Arrow/></span></div><p className="project-summary">{project.summary}</p></a>
}
function Contact() {
 return <section id="contact" className="contact section"><div className="contact-heading"><p className="eyebrow">05 / SAY HELLO</p><span className="contact-star" aria-hidden="true">✳</span></div><h2>Good things start<br/>with a <em>hello.</em></h2><div className="contact-bottom"><div><p>Have an idea, a question, or just something to share?<br/>There’s a person behind this studio. Let’s talk.</p><address>{studio.address}</address></div><a className="email-link" href={emailLink()}><span>WRITE TO THE STUDIO</span><strong>{studio.email}</strong><Arrow/><small>Open your email app</small></a></div></section>
}
function Home() {
 return <><section className="hero"><div className="hero-top"><p className="eyebrow"><i className="status-dot"/> INDEPENDENT STUDIO · ORADEA, ROMANIA</p><span className="hero-index">SMALL BY CHOICE. THOUGHTFUL BY DESIGN.</span></div><div className="hero-layout"><div className="hero-copy"><h1>A small studio.<br/>A little more<br/><em>attention.</em></h1><p>Solo-built digital products. Carefully considered, quietly distinctive, and made to be a pleasure to use.</p><a href="#projects" className="button primary">Discover the products <Arrow/></a><span className="hero-signature">ONE MAKER. EVERY DETAIL.</span></div><div className="sculpture" role="img" aria-label="Sculptural lime rings in an orbital arrangement"><div className="art-grid"/><span className="art-coordinate">EXPLORATION / 001</span><div className="orbit-group"><div className="orbital orbital-one"/><div className="orbital orbital-two"/><div className="orbital orbital-three"/></div><div className="sculpture-floor"/><span className="art-caption">INDEPENDENT THINKING.<br/>THOUGHTFUL EXECUTION.</span><span className="art-cross">+</span></div></div><div className="hero-bottom"><span>DESIGN WITH INTENT. BUILD WITH CARE.</span><a href="#about">GET TO KNOW THE STUDIO <span>↓</span></a></div></section>
 <div className="studio-strip"><span>Independently made</span><b>✳</b><span>Built for real life</span><b>✳</b><span>Quality over quantity</span><b>✳</b></div>
 <section id="about" className="section about"><p className="eyebrow">01 / BEHIND THE STUDIO</p><div><h2>One person.<br/><span className="muted">A considered approach.</span></h2><div className="about-text"><p>Fly Technology & Innovation is a solo studio creating mobile and web products. A place for independent ideas, hands-on craft, and the freedom to take the time a good product deserves.</p><p>From the first sketch to the final interaction, the work stays close to its maker. Fewer handovers. Clearer decisions. More attention to what makes an everyday experience feel right.</p></div><a className="text-link" href="#approach">The thinking behind the work <Arrow/></a></div></section>
 <section id="services" className="section services"><div className="section-heading"><p className="eyebrow">02 / THE CRAFT</p><h2>From an idea.<br/>To something<br/><em> you can use.</em></h2><p className="section-note">Design and development, connected<br/>from the very beginning.</p></div><div className="service-list">{[['01','Mobile applications','Thoughtful experiences for the small screen. Clear interfaces, considered interactions, and a reason to come back.','MOBILE / PRODUCT DEVELOPMENT'],['02','Web experiences','Responsive websites and web applications that give each idea the space and clarity it needs.','REACT / TYPESCRIPT / WEB'],['03','Product thinking','Finding the useful idea, shaping the experience, and refining the details. Then doing it again until it feels right.','CONCEPT / INTERFACE / ITERATION']].map(([n,title,desc,tags])=><article className="service" key={n}><span className="service-number">{n}</span><div><h3>{title}</h3><p>{desc}</p><small>{tags}</small></div><Arrow/></article>)}</div></section>
 <section id="projects" className="section projects"><div className="section-heading"><div><p className="eyebrow">03 / SELECTED PRODUCTS</p><h2>Out in the world.<br/><em>And on the way.</em></h2></div><p className="section-note">One ready to play.<br/>One still taking shape.</p></div><div className="project-grid">{projects.map(p=><ProjectCard key={p.slug} project={p}/>)}</div></section>
 <section id="approach" className="section approach"><div className="approach-heading"><div><p className="eyebrow">04 / THE WAY I WORK</p><h2>Less noise.<br/><em>More intention.</em></h2></div><p className="section-note">Being small means staying close to the work.<br/>Every decision has a reason to be there.</p></div><div className="steps">{[['01','Find the point','Start with something worth making. Understand who it is for and what should feel easier.'],['02','Make it clear','Strip away the unnecessary. Find the flow, the character and the details that belong.'],['03','Build it well','Bring it to life, test it on real devices, and take care of the parts you might never notice.'],['04','Keep refining','A release is a beginning. Listen, learn, and make the experience better over time.']].map(([n,title,desc])=><article key={n}><span>{n} /</span><h3>{title}</h3><p>{desc}</p></article>)}</div></section><Contact/></>
}
function ProjectPage({project}: {project: Project}) {
 const live = project.slug === 'nearplay'
 const next = projects.find(p=>p.slug !== project.slug)!
 return <><section className="project-intro section"><a className="back-link" href="/#projects">← All products</a><div className="project-title-row"><div><p className="eyebrow">{project.category}</p><h1>{project.name}<span>.</span></h1><p className="project-line">{project.line}</p></div><span className={`detail-status ${live ? 'live' : ''}`}><i/>{project.status}</span></div><ProductArt kind={project.slug} large/></section><section className="section project-story"><div><p className="eyebrow">{live ? 'THE PRODUCT' : 'INSIDE THE STUDIO'}</p><h2>{live ? <>A little time.<br/><em>A good game.</em></> : <>Care takes time.<br/><em>This is the beginning.</em></>}</h2></div><div><p className="story-lead">{project.description}</p>{live ? <><a className="button primary" href={studio.appStore} target="_blank" rel="noreferrer">View on the App Store <Arrow/></a><a className="product-privacy" href="/projects/nearplay/privacy">NearPlay privacy policy <Arrow/></a></> : <a className="text-link" href={emailLink('A question about Pictarrow')}>Ask about Pictarrow <Arrow/></a>}<p className="fine-print">{project.note}</p></div></section><section className="section product-details">{project.features.map(([title,desc],i)=><article key={title}><span className="eyebrow">0{i+1}</span><h3>{title}</h3><p>{desc}</p></article>)}</section><section className="next-project section"><p className="eyebrow">KEEP EXPLORING</p><a href={`/projects/${next.slug}`}><span>{next.name}</span><Arrow/></a><p>{next.status}</p></section><Contact/></>
}
function Privacy() {
 return <section className="privacy section"><a className="back-link" href="/">← Back to the studio</a><p className="eyebrow">THE SMALL PRINT</p><h1>Privacy policy.</h1><p className="fine-print">Local website version · October 21, 2026</p><h2>The website</h2><p>This presentation website has no accounts, contact forms, analytics or advertising trackers. It does not use non-essential cookies or store visitor data in your browser.</p><h2>Getting in touch</h2><p>The email links open your chosen email application. An email is sent only when you send it yourself. Your email provider processes it under its own terms. For website privacy questions, contact <a href={emailLink('Website privacy question')}>{studio.email}</a>.</p><h2>Products and external links</h2><p>App Store links lead to Apple, whose privacy policy applies there. This website policy does not describe the data practices of the apps. See the <a href="/projects/nearplay/privacy">NearPlay privacy policy</a> for that product.</p><h2>Before public launch</h2><p>This is a local preview. Before publication, the operator must complete the policy with the actual hosting provider, technical logs, contact handling, retention periods, legal basis and applicable data protection rights.</p></section>
}
export default function App() {
 const path = window.location.pathname.replace(/\/$/, '') || '/'
 const project = projects.find(p => path === `/projects/${p.slug}`)
 const nearPlayLegal = path === '/projects/nearplay/privacy' || path === '/projects/nearplay/terms'
 const support = path === '/projects/nearplay/support'
 const terms = path.endsWith('/terms')
 const privacy = path === '/privacy' || window.location.hash === '#privacy'
 const home = path === '/' && !privacy
 useEffect(() => { document.title = `${support ? 'NearPlay Support' : nearPlayLegal ? `NearPlay ${terms ? 'Terms of Use' : 'Privacy Policy'}` : project ? project.name : privacy ? 'Privacy Policy' : home ? 'Independent Product Studio' : 'Page not found'} — Fly Technology & Innovation` }, [project,privacy,home,nearPlayLegal,terms,support])
 return <><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{support ? <NearPlaySupport/> : nearPlayLegal ? <NearPlayLegal terms={terms}/> : project?.slug === 'nearplay' ? <NearPlayPage/> : project ? <ProjectPage project={project}/> : privacy ? <Privacy/> : home ? <Home/> : <section className="privacy section"><p className="eyebrow">404 / A DIFFERENT DIRECTION</p><h1>This page flew away.</h1><a className="button primary" href="/">Back to the studio <Arrow/></a></section>}</main><footer><Brand/><p>Small studio.<br/>Thoughtful products.</p><span>© {new Date().getFullYear()} Fly Technology & Innovation</span><a href="/privacy">Privacy policy <Arrow/></a><a href="#main" className="back-top" aria-label="Back to top">↑</a></footer></>
}
