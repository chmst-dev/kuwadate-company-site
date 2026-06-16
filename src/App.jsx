import { useEffect, useState } from 'react'

/* ===========================
   ナビゲーション
   =========================== */
function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} role="navigation" aria-label="メインナビゲーション">
      <a href="#top" className="nav__logo" id="nav-logo">くわだてカンパニー</a>
      <ul className="nav__links">
        <li><a href="#concept" id="nav-concept">コンセプト</a></li>
        <li><a href="#what-we-do" id="nav-what">やっていること</a></li>
        <li><a href="#fields" id="nav-fields">実践フィールド</a></li>
        <li><a href="#profile" id="nav-profile">プロフィール</a></li>
        <li><a href="#contact" id="nav-contact">相談する</a></li>
      </ul>
    </nav>
  )
}

/* ===========================
   Hero セクション
   =========================== */
function HeroSection() {
  return (
    <section className="hero" id="top" aria-label="ヒーローセクション">
      <div className="hero__inner">
        <p className="hero__brand">Kuwadate Company</p>
        <h1 className="hero__main-title">
          プロトタイピングの<br />公共化
        </h1>
        <p className="hero__sub-title">企てを、仲間と試せるかたちに。</p>
        <div className="hero__accent-bar" />
        <p className="hero__description">
          くわだてカンパニーは、仮説検証・プロトタイピング・事業設計・官民連携を通じて、
          地域、農業、教育、行政、事業開発の現場にある「まだ形になっていない企て」を、
          試せるかたちに変えていく活動ブランドです。
        </p>
        <div className="hero__cta">
          <a href="#contact" className="btn btn--primary" id="hero-cta-contact">相談する</a>
          <a href="#what-we-do" className="btn btn--outline" id="hero-cta-activity">活動を見る</a>
        </div>
      </div>
      <div className="hero__scroll-indicator" aria-hidden="true">scroll</div>
    </section>
  )
}

/* ===========================
   Concept セクション
   =========================== */
function ConceptSection() {
  useFadeIn()

  return (
    <section className="concept section" id="concept" aria-label="コンセプト">
      <div className="container">
        <p className="section__eyebrow fade-in">Our Concept</p>
        <h2 className="section__title fade-in fade-in-delay-1">
          プロトタイピングを、<br />一部の人の特権から、<br />社会の共通技能へ。
        </h2>
        <div className="concept__layout">
          <div className="concept__text fade-in fade-in-delay-2">
            <p>
              新しい事業や地域の課題解決は、最初から正解が見えているわけではありません。
              必要なのは、大きな計画をいきなり作ることではなく、小さく試し、反応を見て、学びながら改善していくことです。
            </p>
            <p>
              くわだてカンパニーは、生成AI、ノーコード、データ、対話、現場理解を組み合わせ、
              専門家だけでなく、現場の人自身が仮説検証に参加できる環境づくりを進めます。
            </p>
          </div>
          <div className="concept__visual fade-in fade-in-delay-3">
            <div className="concept__keyword">🌱 小さく試す。反応を見る。学んで改善する。</div>
            <div className="concept__keyword">🤝 現場の人が仮説検証に参加できる</div>
            <div className="concept__keyword">🏘️ 地域・農業・教育・行政・中小事業者も対象</div>
            <div className="concept__keyword">🔧 生成AI・ノーコード・データを組み合わせる</div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===========================
   What We Do セクション
   =========================== */
const activities = [
  {
    number: '01',
    title: '事業構想・仮説検証',
    body: 'まだ曖昧な事業アイデアや地域課題を整理し、検証可能な問いと実行計画に落とし込みます。',
  },
  {
    number: '02',
    title: 'プロトタイピング伴走',
    body: 'ノーコード、生成AI、簡易アプリ、業務フロー、ワークショップなどを組み合わせ、小さく試せる形を作ります。',
  },
  {
    number: '03',
    title: '官民連携・地域実装',
    body: '行政、企業、学校、農業現場など、複数のステークホルダーが関わるプロジェクトを前に進めます。',
  },
  {
    number: '04',
    title: '事業の再設計・Scrap & Build',
    body: '立ち上げだけでなく、停滞した事業、不採算事業、複雑化したプロジェクトの整理・再設計を支援します。',
  },
]

function WhatWeDoSection() {
  useFadeIn()

  return (
    <section className="what-we-do section" id="what-we-do" aria-label="やっていること">
      <div className="container">
        <p className="section__eyebrow fade-in">What We Do</p>
        <h2 className="section__title fade-in fade-in-delay-1">やっていること</h2>
        <div className="cards-grid">
          {activities.map((item, i) => (
            <div
              key={item.number}
              className={`card fade-in fade-in-delay-${Math.min(i + 1, 4)}`}
              id={`activity-card-${item.number}`}
            >
              <div className="card__number">{item.number}</div>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===========================
   Fields セクション
   =========================== */
const fields = [
  {
    id: 'hojoudata',
    orgName: 'hojoudata合同会社',
    tag: '自社活動',
    domain: '農業・地域・アグリテック',
    description:
      '農業・地域・圃場データ・アグリテック領域での実践。現場の農業課題を起点に、圃場情報、作業情報、地域内連携のあり方を探る。',
  },
  {
    id: 'ontherice',
    orgName: '一般社団法人オンザライス',
    tag: '自社活動',
    domain: '米・食・地域文化',
    description:
      '米・食・地域文化をテーマにした発信・企画活動。お米の魅力を伝え、地域や行政との接点をつくる。',
  },
  {
    id: 'hanamii',
    orgName: 'HANAMII株式会社',
    tag: '参画・協業先',
    domain: '仮説検証・プロトタイピング・アプリ開発',
    description:
      '仮説検証・プロトタイピング・アプリ開発支援に関する協業・参画領域。現場の人が自ら課題をアプリ化し、試しながら改善する取り組みを推進。',
  },
  {
    id: 'hanataba',
    orgName: '株式会社HANATABA',
    tag: '参画・協業先',
    domain: '事業開発・提案・実行支援',
    description:
      '事業開発・提案活動・実行支援に関する参画領域。新規事業や業務改善における企画整理、提案、実装支援を行う。',
  },
  {
    id: 'policy-company',
    orgName: '明治大学ポリシーカンパニー',
    tag: '研究・実践活動',
    domain: '公共政策・官民連携・政策実装',
    description:
      '公共政策・官民連携・政策実装に関する研究・実践活動。EBPM、Civic Tech、参加型行政、地域課題解決などをテーマに、研究と実践を接続する。',
  },
]

function FieldsSection() {
  useFadeIn()

  return (
    <section className="fields section" id="fields" aria-label="実践フィールド">
      <div className="container--wide">
        <div className="container" style={{ padding: 0 }}>
          <p className="section__eyebrow fade-in">Practice Fields</p>
          <h2 className="section__title fade-in fade-in-delay-1">実践フィールド</h2>
          <p className="fields__note fade-in fade-in-delay-2">
            ※ 以下は、くわだてカンパニーの活動領域として関わっているフィールドです。
            HANAMII株式会社・株式会社HANATABA・明治大学ポリシーカンパニーはくわだてカンパニーとは独立した組織であり、参画・協業の形で関係しています。
          </p>
        </div>
        <div className="fields-list fade-in fade-in-delay-3">
          {fields.map((f) => (
            <div className="field-item" key={f.id} id={`field-${f.id}`}>
              <div className="field-item__org">
                <div className="field-item__org-name">{f.orgName}</div>
                <span className="field-item__org-tag">{f.tag}</span>
              </div>
              <div className="field-item__content">
                <div className="field-item__domain">{f.domain}</div>
                <p className="field-item__description">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===========================
   Profile セクション
   =========================== */
const careerTags = [
  'カカクコム（事業責任者）',
  'パーソル（PdM）',
  'GovTech東京（官民連携）',
  'プロダクトマネジメント',
  '新規事業開発',
  '仮説検証・事業設計',
  '官民連携',
  '農業・地域・教育',
]

function ProfileSection() {
  useFadeIn()

  return (
    <section className="profile section" id="profile" aria-label="プロフィール">
      <div className="container profile__inner">
        <p className="section__eyebrow fade-in">Profile</p>
        <h2 className="section__title fade-in fade-in-delay-1">越智聖人</h2>
        <div className="profile__layout">
          <div className="profile__avatar fade-in fade-in-delay-2" aria-hidden="true">越</div>
          <div className="fade-in fade-in-delay-3">
            <div className="profile__text">
              <p>
                事業責任者・プロダクトマネージャーとして、複数の事業会社で新規事業、プロダクト開発、事業再編、業務改善、官民連携プロジェクトに関わる。
              </p>
              <p>
                得意領域は、曖昧な構想や複雑な課題を整理し、関係者が動ける仮説・要件・実行計画に翻訳すること。
                立ち上げだけでなく、停滞した事業の再設計、不採算事業の撤退判断、組織やステークホルダーとの調整も含めて、現実に前へ進めることを重視している。
              </p>
              <p>
                現在は、農業、教育、行政、地域、プロトタイピング支援を横断しながら、「誰もが小さく試せる社会」をつくるための活動を進めている。
              </p>
            </div>
            <div className="profile__career">
              {careerTags.map((tag) => (
                <span className="profile__career-tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===========================
   Contact セクション
   =========================== */
const contactTopics = [
  '事業構想・仮説検証',
  '地域課題解決',
  '農業DX',
  '教育プログラム',
  '官民連携',
  'プロトタイピング伴走',
]

function ContactSection() {
  useFadeIn()

  return (
    <section className="contact section" id="contact" aria-label="お問い合わせ">
      <div className="container">
        <p className="section__eyebrow fade-in">Contact</p>
        <h2 className="section__title fade-in fade-in-delay-1">相談・お問い合わせ</h2>
        <p className="section__lead fade-in fade-in-delay-2">
          事業構想、地域課題、農業DX、教育プログラム、官民連携、プロトタイピング伴走などに関するご相談を受け付けています。
        </p>
        <div className="contact__tags fade-in fade-in-delay-3">
          {contactTopics.map((t) => (
            <span className="contact__tag" key={t}>{t}</span>
          ))}
        </div>
        <div className="fade-in fade-in-delay-4">
          <a
            href="mailto:ochimasato@gmail.com"
            className="btn btn--cta"
            id="contact-email-btn"
            aria-label="メールで相談する"
          >
            <span>✉</span>
            メールで相談する
          </a>
        </div>
      </div>
    </section>
  )
}

/* ===========================
   Footer
   =========================== */
function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo">
      <p className="footer__logo">くわだてカンパニー</p>
      <p className="footer__copy">© {year} Kuwadate Company. All rights reserved.</p>
    </footer>
  )
}

/* ===========================
   カスタムフック：フェードインアニメーション
   =========================== */
function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.fade-in:not(.visible)')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

/* ===========================
   App（メインコンポーネント）
   =========================== */
function App() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <HeroSection />
        <ConceptSection />
        <WhatWeDoSection />
        <FieldsSection />
        <ProfileSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
