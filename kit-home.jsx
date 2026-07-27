/* Founders Retreat — invitation landing page.
   Editorial one-page scroll built on the design-system components.
   Attaches window.FRLanding. */
const DS = window.TheFoundersEditDesignSystem_0cfd4a;
const { Button, Eyebrow, Tag, Ribbon, SectionHeading, Input, Select, Checkbox } = DS;
const { useState, useRef } = React;
const P = '../../assets/photos/';
const PR = '../../assets/portraits/';
const AIRBNB = 'https://www.airbnb.com/rooms/1208903670876748539?adults=15&check_in=2026-10-02&check_out=2026-10-05&guests=15';
const GFORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdkhc1sxb-jko5rLag4RQfRqT17zy3yxjQU2fxCESkKlB6iCQ/viewform?embedded=true';

const WRAP = { maxWidth: '1120px', margin: '0 auto', padding: '0 40px' };
const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 24, behavior: 'smooth' });
};

/* ---------- Nav ---------- */
function Nav() {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, background: 'rgba(244,235,219,.86)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ ...WRAP, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: '68px' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          {[['The Weekend', 'weekend'], ['Who', 'who'], ['Details', 'details'], ['Stay', 'stay']].map(([l, id]) =>
          <button key={id} onClick={() => scrollToId(id)} style={{ background: 'none', border: 0, cursor: 'pointer', fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--ink)' }}>{l}</button>
          )}
          <Button variant="primary" size="sm" onClick={() => scrollToId('rsvp')}>Secure your seat</Button>
        </nav>
      </div>
    </header>);

}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: 'calc(100vh - 68px)', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
      <img src={P + 'courtyard-table.webp'} alt="A long table set under the trees" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', filter: 'saturate(.92) contrast(1.02)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(51,40,30,.30) 0%, rgba(51,40,30,.05) 40%, rgba(51,40,30,.62) 100%)' }} />
      <div style={{ ...WRAP, position: 'relative', paddingBottom: '72px', paddingTop: '120px', color: 'var(--paper-2)', width: '100%', boxSizing: 'border-box' }}>
        <div style={{ display: 'inline-flex', background: 'rgba(23,21,15,.55)', backdropFilter: 'blur(3px)', padding: '9px 18px', borderRadius: 'var(--radius-pill)', border: '1px solid rgba(250,248,243,.25)' }}>
          <Eyebrow color="paper">October 2&ndash;5, 2026 &nbsp;&middot;&nbsp; By invitation only</Eyebrow>
        </div>
        <h1 style={{ margin: '20px 0 0', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(58px, 11vw, 148px)', lineHeight: .9, letterSpacing: '-.025em' }}>
          A Founders<br /><span style={{ fontFamily: 'var(--font-script)', fontWeight: 400, letterSpacing: 0, color: 'var(--paper-2)', fontSize: 'clamp(52px,10vw,132px)' }}>Retreat</span>
        </h1>
        <p style={{ maxWidth: '640px', margin: '26px 0 0', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(19px,2.4vw,26px)', lineHeight: 1.55, color: 'rgba(251,245,233,.94)' }}>
          A collaborative weekend for women who own &mdash; and are actively growing &mdash; their businesses.
        </p>
        <div style={{ marginTop: '34px' }}>
          <Button variant="primary" size="lg" arrow onClick={() => scrollToId('rsvp')}>Secure your seat</Button>
        </div>
      </div>
    </section>);

}

/* ---------- The big question ---------- */
function Question() {
  return (
    <section id="weekend" style={{ background: 'var(--paper)', padding: '110px 0 96px' }}>
      <div style={WRAP}>
        <h2 style={{ margin: 0, maxWidth: '17ch', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(34px,5.2vw,68px)', lineHeight: 1.06, letterSpacing: '-.02em', color: 'var(--ink)', textWrap: 'balance' }}>
            What if your next breakthrough came from someone sitting across the dinner table?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', marginTop: '56px', alignItems: 'start' }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-lg)', lineHeight: 1.75, color: 'var(--ink-2)' }}>
            <p style={{ margin: 0 }}>Owning a business is exciting, rewarding, and deeply personal. It can also be surprisingly lonely.</p>
            <p style={{ margin: '20px 0 0' }}>Most of us spend our days making decisions without anyone to bounce ideas off of. We celebrate wins quietly, second-guess ourselves, and spend hours solving problems someone else may have already figured out.</p>
            <p style={{ margin: '20px 0 0' }}>So we wanted to create the kind of weekend we all wish existed.</p>
          </div>
          <div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {['Not a conference.', 'Not a networking event.', 'Not a room where one person teaches while everyone else listens.'].map((t, i) =>
              <li key={i} style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(22px,3vw,30px)', color: 'var(--ink-3)', textDecoration: 'line-through', textDecorationColor: 'var(--sand-deep)', textDecorationThickness: '2px' }}>{t}</li>
              )}
            </ul>
            <p style={{ margin: '28px 0 0', fontFamily: 'var(--font-serif)', fontSize: '24px', lineHeight: 1.5, color: 'var(--ink)' }}>
              A small group of thoughtful business owners coming together to share what they&rsquo;ve learned, ask for help where they&rsquo;re stuck, and build alongside one another.
            </p>
            <p style={{ margin: '20px 0 0', fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 'var(--fs-body-lg)', color: 'var(--ink)' }}>
              For one weekend, we&rsquo;ll bring our businesses together under one roof.
            </p>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------- Handwritten divider ---------- */
function GatherDivider() {
  return (
    <section style={{ background: 'var(--ink)', padding: '58px 24px', textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(46px,8vw,96px)', lineHeight: 1.05, color: 'var(--paper-2)' }}>Gather. Learn. Build.</div>
    </section>);

}

/* ---------- Full-bleed photo break ---------- */
function PhotoBreak({ src, alt, caption }) {
  return (
    <section style={{ position: 'relative', height: '58vh', minHeight: '420px', overflow: 'hidden' }}>
      <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.92)' }} />
      {caption &&
      <>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(51,40,30,.5), transparent 55%)' }} />
          <div style={{ ...WRAP, position: 'absolute', left: 0, right: 0, bottom: '40px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(22px,3vw,34px)', color: 'var(--paper-2)' }}>{caption}</span>
          </div>
        </>
      }
    </section>);

}

/* ---------- Two-column story block ---------- */
function Story({ id, eyebrow, title, body, img, alt, flip }) {
  const text =
  <div style={{ maxWidth: '520px' }}>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div style={{ marginTop: '22px', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-lg)', lineHeight: 1.75, color: 'var(--ink-2)' }}>{body}</div>
    </div>;

  const image =
  <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid var(--border-muted)', aspectRatio: '4/5', boxShadow: 'var(--shadow-frame)' }}>
      <img src={img} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.92)' }} />
    </div>;

  return (
    <section id={id} style={{ background: 'var(--paper-2)', padding: '96px 0' }}>
      <div style={{ ...WRAP, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }}>
        {flip ? <>{image}{text}</> : <>{text}{image}</>}
      </div>
    </section>);

}

/* ---------- What the weekend looks like ---------- */
function Weekend() {
  const bullets = [
  'Short sessions led by the business owners in the room',
  'Collaborative problem-solving around real business challenges',
  'Honest feedback on websites, branding, messaging, and offers',
  'Time for headshots, product photography, and content creation',
  'Shared meals and late-night conversations',
  'Morning coffee, beach walks, and plenty of space to recharge'];

  return (
    <section style={{ background: 'var(--paper)', padding: '100px 0' }}>
      <div style={WRAP}>
        <SectionHeading eyebrow="What the weekend looks like" title="Not your average networking event" lede="Yes, there will be a few short talks — but mostly it&rsquo;s space for meaningful conversations, practical learning, and time to actually work on our businesses." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px 48px', marginTop: '48px' }}>
          {bullets.map((b, i) =>
          <div key={i} style={{ display: 'flex', gap: '18px', alignItems: 'baseline', padding: '20px 0', borderTop: '1px solid var(--border-muted)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '18px', color: 'var(--ink-3)', minWidth: '28px' }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-lg)', lineHeight: 1.5, color: 'var(--ink)' }}>{b}</span>
            </div>
          )}
        </div>
        <p style={{ margin: '44px 0 0', maxWidth: '54ch', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '24px', lineHeight: 1.5, color: 'var(--ink-2)' }}>
          Some of the most valuable conversations probably won&rsquo;t happen during a scheduled session. They&rsquo;ll happen over breakfast, on the porch, or while walking down the beach.
        </p>
      </div>
    </section>);

}

/* ---------- Who you'll meet ---------- */
function Who() {
  const fields = ['Photography', 'Product', 'Ecommerce', 'Travel', 'Wellness', 'Fitness', 'Content Creation', 'Creative Services', 'Brand Strategy', 'Community Building'];
  const leftPix = [PR + 'portrait-02.jpeg', PR + 'portrait-05.jpeg', PR + 'portrait-09.jpeg'];
  const rightPix = [PR + 'portrait-06.jpeg', PR + 'portrait-07.jpeg', PR + 'portrait-10.jpeg'];
  const col = (pix, edge) =>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {pix.map((src, i) =>
    <div key={i} style={{ overflow: 'hidden', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)', aspectRatio: '4/5', transform: `rotate(${(edge === 'left' ? -1 : 1) * (i % 2 ? 1.4 : -1)}deg)` }}>
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.9) grayscale(.15)' }} />
        </div>
    )}
    </div>;

  return (
    <section id="who">
      <Ribbon text="Different businesses · Different perspectives · One shared goal" tone="ink" speed={30} />
      <div style={{ background: 'var(--paper-2)', padding: '100px 0' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'minmax(150px, 1fr) minmax(0, 2.1fr) minmax(150px, 1fr)', gap: '40px', alignItems: 'center' }}>
          {col(leftPix, 'left')}
          <div>
            <SectionHeading eyebrow="Who you'll meet" title="We're keeping the guest list a surprise" align="center" lede="Every person has been carefully chosen for the perspective they bring and their willingness to contribute. Among the group, you'll find owners building in areas like:" />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', maxWidth: '620px', margin: '40px auto 0' }}>
              {fields.map((f, i) =>
              <Tag key={i} tone="ink">{f}</Tag>
              )}
            </div>
          </div>
          {col(rightPix, 'right')}
        </div>
      </div>
    </section>);

}

/* ---------- Where we'll stay ---------- */
function Stay() {
  return (
    <section id="stay" style={{ background: 'var(--paper)', padding: '100px 0' }}>
      <div style={WRAP}>
        <SectionHeading eyebrow="Where we'll stay" title="A beach house in Wilmington, NC" lede="We'll share one roof for the weekend — an ocean-view great room for sessions, a long table for dinners, wraparound porches, and a firepit under string lights for the late-night conversations." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: '128px', gap: '12px', marginTop: '44px' }}>
          <figure style={{ margin: 0, gridColumn: 'span 4', gridRow: 'span 3', position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }}>
            <img src={P + 'house-exterior.png'} alt="The beach house exterior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <figcaption style={{ position: 'absolute', left: '18px', bottom: '16px', fontFamily: 'var(--font-script)', fontSize: '34px', color: 'var(--paper-2)', textShadow: '0 1px 12px rgba(23,21,15,.6)' }}>Home for the weekend</figcaption>
          </figure>
          <div style={{ gridColumn: 'span 2', gridRow: 'span 2', overflow: 'hidden', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }}>
            <img src={P + 'house-living.png'} alt="Ocean-view living and dining room" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ gridColumn: 'span 2', overflow: 'hidden', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }}>
            <img src={P + 'house-firepit.png'} alt="The firepit at sunset" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }} />
          </div>
          <div style={{ gridColumn: 'span 2', gridRow: 'span 2', overflow: 'hidden', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }}>
            <img src={P + 'house-porch.png'} alt="The wraparound porch" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ gridColumn: 'span 2', gridRow: 'span 2', overflow: 'hidden', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }}>
            <img src={P + 'house-bedroom.png'} alt="A light-filled bedroom" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ gridColumn: 'span 2', gridRow: 'span 2', overflow: 'hidden', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-muted)' }}>
            <img src={P + 'house-marsh.png'} alt="The marsh and gazebo out back" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Button variant="secondary" arrow as="a" href={AIRBNB} target="_blank" rel="noopener">View the house on Airbnb</Button>
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '18px', color: 'var(--ink-2)' }}>Sleeps the whole group · Oct 2&ndash;5, 2026</span>
        </div>
      </div>
    </section>);

}

/* ---------- Details ---------- */
function Details() {
  const rows = [
  { k: 'When', v: 'October 2\u20135, 2026', n: 'Friday afternoon through Sunday.' },
  { k: 'Where', v: 'A beach house in Wilmington, NC', n: 'On the Carolina coast \u2014 see \u201cWhere we\u2019ll stay\u201d below.' },
  { k: 'Group size', v: 'Approximately 10\u201312', n: 'Kept small so everyone has a seat at the table.' },
  { k: 'Cost', v: '$350 per person', n: 'Accommodations and shared meals, split evenly \u2014 not a paid retreat.' }];

  return (
    <section id="details" style={{ background: 'var(--ink)', color: 'var(--paper-2)', padding: '100px 0' }}>
      <div style={WRAP}>
        <SectionHeading eyebrow="A few details" title="The practical parts" tone="paper" />
        <div style={{ marginTop: '48px', borderTop: '1px solid rgba(251,245,233,.24)' }}>
          {rows.map((r, i) =>
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '32px', padding: '28px 0', borderBottom: '1px solid rgba(251,245,233,.24)', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: '12px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--sand)' }}>{r.k}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3vw,34px)', lineHeight: 1.15, color: 'var(--paper-2)' }}>{r.v}</div>
                <div style={{ marginTop: '8px', fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'rgba(251,245,233,.72)' }}>{r.n}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- Before the weekend ---------- */
function Before() {
  const qs = ['What could you teach?', 'What\u2019s the biggest challenge you\u2019re working through?', 'What would you love to leave the weekend with?'];
  return (
    <section style={{ background: 'var(--paper)', padding: '100px 0' }}>
      <div style={{ ...WRAP, maxWidth: '860px' }}>
        <SectionHeading eyebrow="Before the weekend" title="A short questionnaire" align="center" lede="We'll use your answers to shape the conversations and build the weekend around the people actually in the room. No two retreats should ever look the same." />
        <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {qs.map((q, i) =>
          <div key={i} style={{ display: 'flex', gap: '22px', alignItems: 'center', background: 'var(--paper-2)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '24px 28px' }}>
              <span style={{ fontFamily: 'var(--font-script)', fontSize: '44px', color: 'var(--ink-3)', lineHeight: 1 }}>{i + 1}</span>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', color: 'var(--ink)' }}>{q}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- RSVP ---------- */
function RSVP() {
  return (
    <section id="rsvp" style={{ position: 'relative', overflow: 'hidden' }}>
      <img src={P + 'pier-sunset.png'} alt="Under the pier at sunset" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(.9) brightness(.86)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(51,40,30,.55), rgba(51,40,30,.72))' }} />
      <div style={{ ...WRAP, position: 'relative', maxWidth: '760px', padding: '110px 40px', textAlign: 'center', color: 'var(--paper-2)' }}>
        <div style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(40px,7vw,72px)', color: 'var(--paper-2)', lineHeight: 1 }}>Secure your seat</div>
        <p style={{ margin: '20px auto 0', maxWidth: '48ch', fontFamily: 'var(--font-sans)', fontSize: 'var(--fs-body-lg)', lineHeight: 1.7, color: 'rgba(251,245,233,.92)' }}>
          You&rsquo;ve been nominated — now claim your spot. Fill out the form below by <strong style={{ color: 'var(--paper-2)' }}>August 8</strong> and we&rsquo;ll follow up with the details and next steps.
        </p>
        <div style={{ marginTop: '40px', background: 'var(--paper-2)', borderRadius: 'var(--radius-lg)', padding: '16px', boxShadow: 'var(--shadow-lg)' }}>
          <iframe title="A Founders Retreat RSVP form" src={GFORM} style={{ width: '100%', height: '820px', border: 0, borderRadius: 'var(--radius-md)', background: 'var(--paper-2)' }}>Loading…</iframe>
        </div>
        <p style={{ margin: '30px 0 0', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '20px', color: 'var(--paper-2)' }}>
          Come ready to share what you&rsquo;ve learned. Leave with ideas you couldn&rsquo;t have found on your own.
        </p>
      </div>
    </section>);

}

/* ---------- Footer ---------- */
function FooterBar() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--paper-2)', padding: '52px 0 40px' }}>
      <div style={{ ...WRAP, display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'var(--font-script)', fontSize: '34px' }}>A Founders Retreat</div>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(251,245,233,.6)' }}>October 2&ndash;5, 2026 &middot; Carolina Coast &middot; By invitation</div>
      </div>
    </footer>);

}

function FRLanding() {
  return (
    <div style={{ background: 'var(--paper)' }}>
      <Nav />
      <Hero />
      <Question />
      <GatherDivider />
      <Story id="invited" eyebrow="Why you were invited" title="Someone believes you'll make the weekend better"
      img={P + 'garden-painting-class.webp'} alt="Working together outdoors"
      body={<>
          <p style={{ margin: 0 }}>Every person attending has been personally nominated by one of our retreat leaders &mdash; because someone who knows the work you do believes you&rsquo;ll make the weekend better.</p>
          <p style={{ margin: '18px 0 0' }}>We&rsquo;re intentionally bringing together owners from different industries, experiences, and stages. Some have been building for years. Others are just beginning their next chapter.</p>
          <p style={{ margin: '18px 0 0' }}>The best groups aren&rsquo;t made of people who think alike &mdash; they&rsquo;re made of people generous enough to share what they&rsquo;ve learned and curious enough to ask for help.</p>
        </>} />
      <PhotoBreak src={P + 'water-dusk.jpeg'} alt="The water at dusk" caption="Everyone teaches. Everyone learns." />
      <Story id="teach" eyebrow="Everyone teaches, everyone learns" title="You already know something someone else needs" flip
      img={P + 'journaling-candles.png'} alt="Notebooks and candles on a wooden table"
      body={<>
          <p style={{ margin: 0 }}>Everyone will share something that&rsquo;s helped them build &mdash; client acquisition, branding, content, partnerships, systems, pricing, or hard-won lessons. And everyone gets dedicated time to bring one of their biggest challenges to the group:</p>
          <ul style={{ margin: '20px 0 0', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {['The idea you\u2019ve been sitting on.', 'The offer that isn\u2019t converting.', 'The website that doesn\u2019t quite feel right.', 'The next step you can\u2019t see clearly.'].map((t, i) =>
          <li key={i} style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '21px', color: 'var(--ink)', paddingLeft: '18px', borderLeft: '2px solid var(--ink)' }}>{t}</li>
          )}
          </ul>
          <p style={{ margin: '20px 0 0' }}>We&rsquo;ll ask questions, offer honest feedback, and help each other move forward.</p>
        </>} />
      <Weekend />
      <Who />
      <Details />
      <Stay />
      <Before />
      <RSVP />
      <FooterBar />
    </div>);

}
window.FRLanding = FRLanding;