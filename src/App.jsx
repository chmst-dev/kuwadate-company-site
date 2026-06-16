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
        <li><a href="#use-cases" id="nav-cases">支援事例</a></li>
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
          プロトタイピングを、<br />専門家だけのものから、<br />誰もが使える技能へ。
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
   Use Cases セクション
   =========================== */
const useCases = [
  {
    id: 'agriculture',
    emoji: '🌾',
    title: '農業現場の「困った」を、使える仕組みにする',
    area: '農業・地域 DX',
    body: '圃場情報、作業予定、地域内の手伝い、農地・地図情報など、農業現場に散らばる情報を整理し、現場で使えるアプリや運用ルールとして試します。',
    examples: ['圃場情報共有マップ', '作業・手伝いの可視化', '地域内ワークシェアの仕組みづくり'],
  },
  {
    id: 'education',
    emoji: '🏫',
    title: '子どもたちが、地域課題をアプリで試せる場をつくる',
    area: '教育・探究学習',
    body: '学校や教育委員会と連携し、地域課題やSDGsをテーマに、子どもたちが自分たちでアイデアを出し、アプリやデジタルの形で試す学びを設計します。',
    examples: ['プログラミング出張授業', '地域課題をテーマにした探究学習', '生成AI・ノーコードを活用したプロトタイピング授業'],
  },
  {
    id: 'public',
    emoji: '🏙️',
    title: '行政と現場のあいだに、試せるプロジェクトをつくる',
    area: '自治体・官民連携',
    body: '行政、事業者、地域団体、学校、農業者など、複数の関係者が関わるテーマを整理し、小さく試せる事業スキームやプロトタイプに落とし込みます。',
    examples: ['地域課題解決プロジェクトの設計', '官民連携事業の仮説検証', '補助事業・実証事業の企画整理'],
  },
  {
    id: 'startup',
    emoji: '🚀',
    title: 'アイデアを、営業できるデモや検証計画に変える',
    area: '新規事業・ PoC',
    body: '新規事業やサービスアイデアを、資料だけで終わらせず、觸れるデモ、検証用アプリ、提案ストーリー、初期営業の仮説に落とし込みます。',
    examples: ['提案用プロトタイプ作成', 'PoC設計', '価格・ターゲット・販売仮説の整理'],
  },
  {
    id: 'operations',
    emoji: '🛠️',
    title: 'Excelや口頭運用を、無理なく試せる仕組みにする',
    area: '業務改善・小さなシステム化',
    body: '現場で属人化している業務、Excelで限界が来ている管理、手作業で回している情報共有を、大規模開発せず、小さなアプリや運用改善として試します。',
    examples: ['案件・顧客・作業管理', '申請・報告・台帳管理', '現場に合わせた簡易業務アプリ'],
  },
  {
    id: 'rebuild',
    emoji: '🔄',
    title: '進めるだけでなく、やめ方・作り直し方も設計する',
    area: '事業の再設計・ Scrap & Build',
    body: '停滞した事業、不採算事業、複雑化したプロジェクトを整理し、続けるもの、やめるもの、作り直すものを判断できる状態にします。',
    examples: ['事業課題の整理', '撃退・縮小・再設計の論点整理', '関係者への説明ストーリー作成'],
  },
]

function UseCasesSection() {
  useFadeIn()

  return (
    <section className="use-cases section" id="use-cases" aria-label="支援事例">
      <div className="container">
        <p className="section__eyebrow fade-in">Use Cases</p>
        <h2 className="section__title fade-in fade-in-delay-1">たとえば、こんな企てを支援します</h2>
        <p className="section__lead fade-in fade-in-delay-2">
          くわだてカンパニーが支援するのは、完成された企画だけではありません。<br />
          まだ要件になっていない違和気、現場で起きている困りごと、誰に相談すればよいか分からない構想を、仮説検証とプロトタイピングの形に変えていきます。
        </p>
        <div className="use-cases-grid">
          {useCases.map((uc, i) => (
            <div
              key={uc.id}
              className={`use-case-card fade-in fade-in-delay-${Math.min((i % 3) + 1, 3)}`}
              id={`use-case-${uc.id}`}
            >
              <div className="use-case-card__area">{uc.area}</div>
              <div className="use-case-card__emoji" aria-hidden="true">{uc.emoji}</div>
              <h3 className="use-case-card__title">{uc.title}</h3>
              <p className="use-case-card__body">{uc.body}</p>
              <ul className="use-case-card__examples">
                {uc.examples.map((ex) => (
                  <li key={ex}>{ex}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===========================
   Consultation セクション
   =========================== */
const consultItems = [
  '現場の困りごとはあるが、解決策がまだ分からない',
  'アイデアはあるが、どう検証すればよいか分からない',
  '事業・地域・行政・教育など、関係者が多くて整理できない',
  'システム開発にする前に、小さく試してみたい',
  '補助金、実証事業、提案活動に向けて企画を整理したい',
  '進めるべきか、やめるべきか、作り直すべきかを判断したい',
]

function ConsultationSection() {
  useFadeIn()

  return (
    <section className="consultation" id="consultation" aria-label="相談導線">
      <div className="container">
        <div className="consultation__inner fade-in">
          <p className="section__eyebrow" style={{ color: 'var(--color-accent-light)' }}>Consultation</p>
          <h2 className="consultation__title">まだ言葉になっていない相談も歓迎します</h2>
          <p className="consultation__lead">
            「アプリを作りたい」と決まっていなくても構いません。<br />
            むしろ、最初に必要なのは、何を作るかを決めることではなく、何を試すべきかを一緒に見つけることです。
          </p>
          <p className="consultation__sub">たとえば、こんな段階から相談できます。</p>
          <ul className="consultation__list">
            {consultItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="consultation__cta-lead">「これは相談していいのかな？」という段階から、お気軽にご相談ください。</p>
          <a href="#contact" className="btn btn--consultation" id="consultation-cta-btn">相談する</a>
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
    role: '代表社員',
    url: 'https://www.hojoudata.jp/',
    tag: '自社活動',
    domain: '農業・地域・アグリテック',
    description:
      '農業・地域・圃場データ・アグリテック領域での実践。現場の農業課題を起点に、圃場情報、作業情報、地域内連携のあり方を探る。',
  },
  {
    id: 'ontherice',
    orgName: '一般社団法人オンザライス',
    role: '共同代表理事',
    url: 'https://www.ontherice.net/',
    tag: '自社活動',
    domain: '米・食・地域文化',
    description:
      '米・食・地域文化をテーマにした発信・企画活動。お米の魅力を伝え、地域や行政との接点をつくる。',
  },
  {
    id: 'hanamii',
    orgName: 'HANAMII株式会社',
    role: '事業開発',
    url: 'https://hanamii.jp/',
    tag: '協力会社',
    domain: '仮説検証・プロトタイピング・アプリ開発',
    description:
      '仮説検証・プロトタイピング・アプリ開発支援に関する協業・参画領域。現場の人が自ら課題をアプリ化し、試しながら改善する取り組みを推進。',
  },
  {
    id: 'hanataba',
    orgName: '株式会社HANATABA',
    role: '事業開発',
    url: 'https://hanataber.co.jp/',
    tag: '協力会社',
    domain: '事業開発・提案・実行支援',
    description:
      '事業開発・提案活動・実行支援に関する参画領域。新規事業や業務改善における企画整理、提案、実装支援を行う。',
  },
  {
    id: 'policy-company',
    orgName: '明治大学ポリシーカンパニー',
    role: '客員研究員',
    url: null,
    tag: '協力機関',
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
        </div>
        <div className="fields-list fade-in fade-in-delay-2">
          {fields.map((f) => (
            <div className="field-item" key={f.id} id={`field-${f.id}`}>
              <div className="field-item__org">
                {f.url ? (
                  <a
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="field-item__org-name field-item__org-name--link"
                  >
                    {f.orgName} <span className="field-item__org-link-icon" aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <div className="field-item__org-name">{f.orgName}</div>
                )}
                <div className="field-item__org-role">{f.role}</div>
                <span className="field-item__org-tag">{f.tag}</span>
              </div>
              <div className="field-item__content">
                <div className="field-item__domain">{f.domain}</div>
                <p className="field-item__description">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="fields__note fade-in">
          ※「自社活動」はくわだてカンパニーが直接運営・主導する活動です。「協力会社」「協力機関」は、それぞれ独立した組織であり、くわだてカンパニーとの協力・連携関係のもとで活動をともにしています。くわだてカンパニーの所有・傘下組織ではありません。
        </p>
      </div>
    </section>
  )
}

/* ===========================
   Profile セクション
   =========================== */
const careerTags = [
  'カカクコム（事業開発）',
  'パーソル（事業責任者・PdM・事業企画）',
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
        <p className="profile__role fade-in fade-in-delay-1">くわだてカンパニー 主宰</p>
        <div className="profile__layout">
          <div className="profile__avatar fade-in fade-in-delay-2">
            <img src="/profile.png" alt="越智聖人" />
          </div>
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
        <UseCasesSection />
        <ConsultationSection />
        <FieldsSection />
        <ProfileSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
