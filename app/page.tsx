import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  GraduationCap,
  House,
  MapPin,
  Phone,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
const img1 = "/images/1_Служи_Закону!_Народу!_Отечеству.png";
const img2 = "/images/2 (Вместе на защите Родины).png";
const img3 = "/images/3 (Под надежной защитой).png";
const img4 = "/images/4 (Горжусь сыном).png";
const img6 = "/images/6 (Нам доверяют).png";
const img8 = "/images/8 (Горжусь папой).png";
const logo110 = "/images/110_лет_в едином строю.png";
const logoGUVD = "/images/Эмблема ГУВД.png";
const videoSrc =
  "https://vkjddfgbkhmwkxnslaxk.supabase.co/storage/v1/object/public/video/video.mp4";

const benefits = [
  {
    icon: Clock3,
    title: "Стабильный график",
    text: "Служебный режим 2/2, возможность дополнительных выходных и социальный отпуск продолжительностью от 30 до 45 суток.",
  },
  {
    icon: Building2,
    title: "Комфортные условия",
    text: "Оборудованное рабочее место, гардероб, душ, бытовая зона, спортивный зал и бассейн.",
  },
  {
    icon: WalletCards,
    title: "Достойное денежное довольствие",
    text: "От 3 000 BYN с учётом предусмотренного премирования.",
  },
  {
    icon: House,
    title: "Жильё и компенсации",
    text: "Жильё для иногородних, а также возмещение денежных средств в случае найма жилья.",
  },
  {
    icon: ShieldCheck,
    title: "Медицина для всей семьи",
    text: "Собственная поликлиника и бесплатное медицинское обслуживание для сотрудников и членов их семей.",
  },
  {
    icon: GraduationCap,
    title: "Ведомственное образование",
    text: "Обучение в ведомственных учреждениях образования: Могилёвский институт МВД и Академия МВД.",
  },
  {
    icon: ShieldCheck,
    title: "Размеренная специфика",
    text: "Без патрулирования улиц и выездов на массовые мероприятия.",
  },
];

const requirements = [
  "Наличие образования",
  "Возраст от 18 до 27 лет",
  "Гражданство Республики Беларусь",
  "Соответствие требованиям к состоянию здоровья",
  "Готовность к дисциплине и командной работе",
];

const gallery = [
  {
    src: logoGUVD,
    alt: "Эмблема ГУВД Минска",
    label: "ГУВД Минского горисполкома",
    text: "Эмблема объединяет историю, ответственность и ежедневную готовность служить интересам жителей столицы.",
    emblem: true,
  },
  {
    src: logo110,
    alt: "110 лет в едином строю",
    label: "110 лет в едином строю",
    text: "История службы — это преемственность поколений, уважение к традициям и уверенный взгляд в будущее.",
    emblem: true,
  },
  {
    src: img3,
    alt: "Под надёжной защитой",
    label: "Под надёжной защитой",
    text: "Профессионализм сотрудников помогает сохранять спокойствие, порядок и чувство защищённости в городской среде.",
  },
  {
    src: img1,
    alt: "Служим Закону, Народу, Отечеству",
    label: "Служим Закону, Народу, Отечеству",
    text: "Служба требует внутренней собранности, чести и готовности отвечать за результат каждого решения.",
  },
  {
    src: img2,
    alt: "Вместе на защите Родины",
    label: "Вместе на защите Родины",
    text: "В подразделениях ценят взаимовыручку, доверие и команду, на которую можно положиться.",
  },
  {
    src: img4,
    alt: "Горжусь сыном",
    label: "Горжусь сыном",
    text: "Стабильная служба становится поводом для гордости семьи и открывает возможности для профессионального роста.",
  },
  {
    src: img8,
    alt: "Горжусь папой",
    label: "Горжусь папой",
    text: "За формой — человек, которому доверяют. Внимательное отношение к гражданам начинается с ответственности каждого сотрудника.",
  },
  {
    src: img6,
    alt: "Нам доверяют",
    label: "Нам доверяют",
    text: "Доверие жителей — главный результат службы и ежедневная оценка профессионализма сотрудников.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f6f8] text-[#102b4e]">
      <header className="relative overflow-hidden bg-[#09294f]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(72,132,190,.3),transparent_34%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-3 px-4 py-3 sm:px-5 sm:py-4 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center gap-3 text-white">
            <div className="size-11 shrink-0">
              <img
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Emblem_of_the_Ministry_of_Internal_Affairs_of_Belarus.svg/500px-Emblem_of_the_Ministry_of_Internal_Affairs_of_Belarus.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
                alt="Эмблема Министерства внутренних дел Беларуси"
                className="size-full object-contain"
              />
            </div>
            <div>
              <p className="text-[9px] font-semibold tracking-[0.18em] text-white/65">
                СЛУЖБА И ПОРЯДОК
              </p>
              <p className="text-xs font-bold tracking-wide">
                ВАКАНСИЯ В СИСТЕМЕ МВД
              </p>
            </div>
          </div>
          <nav
            className="flex w-full flex-col gap-0.5 border-t border-white/15 pt-2 text-xs font-semibold text-white/75 lg:w-auto lg:flex-row lg:gap-6 lg:border-0 lg:pt-0 lg:text-sm"
            aria-label="Основная навигация"
          >
            <a
              href="#about"
              className="rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-white"
            >
              О службе
            </a>
            <a
              href="#gallery"
              className="rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-white"
            >
              Галерея
            </a>
            <a
              href="#video"
              className="rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-white"
            >
              Видео
            </a>
            <a
              href="#conditions"
              className="rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-white"
            >
              Условия службы
            </a>
            <a
              href="#contacts"
              className="rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-white"
            >
              Контакты отдела кадров
            </a>
          </nav>
          <a
            href="#contacts"
            className="hidden items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 sm:flex"
          >
            Связаться <ArrowRight className="size-4" />
          </a>
        </div>
      </header>
      <section className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-8 sm:px-5 sm:pt-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:pb-24 lg:pt-16">
        <div className="pointer-events-none absolute -right-24 top-8 size-64 rounded-full bg-[#d8b36d]/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 size-72 rounded-full bg-[#4c91c7]/10 blur-3xl" />
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8b36d]/40 bg-[#fffaf1] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#926b27] shadow-sm">
            <MapPin className="size-3.5" /> Минск
          </div>
          <h1 className="max-w-2xl text-[2.65rem] font-black leading-[.98] tracking-[-0.045em] text-[#09294f] sm:text-6xl lg:text-7xl">
            Приглашаем на службу в{" "}
            <span className="text-[#b7893e]">ГУВД Минского горисполкома</span>
          </h1>
          <div className="relative mt-7 overflow-hidden rounded-2xl border-[6px] border-white bg-white shadow-2xl shadow-[#0d3155]/15 lg:hidden">
            <img
              src="https://img.belta.by/images/storage/news/with_archive/2024/000023_1722501423_651610_big.jpg"
              alt="Здание и сотрудники ГУВД Минского горисполкома"
              className="h-[22rem] w-full object-cover object-center"
            />
            <div className="absolute bottom-4 left-4 rounded bg-[#09294f]/90 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white">
              ГУВД МИНСКОГО ГОРИСПОЛКОМА
            </div>
          </div>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#52677d]">
            Приглашаем мужчин и женщин, целеустремлённых кандидатов,
            присоединиться к команде ГУВД Минского горисполкома. Это возможность
            выбрать стабильный профессиональный путь, развивать компетенции и
            ежедневно вносить вклад в обеспечение порядка, безопасности и
            благополучия жителей столицы.
          </p>
          <p className="mt-4 max-w-xl border-l-2 border-[#b7893e] pl-4 text-sm leading-6 text-[#64748b]">
            Служба строится на профессионализме, дисциплине и уважении к
            гражданам. Мы создаём условия, в которых ответственность становится
            основой развития, а командная работа — источником уверенности.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#conditions"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#b7893e] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#b7893e]/20 transition hover:bg-[#9f7432]"
            >
              Узнать об условиях <ArrowRight className="size-4" />
            </a>
            <a
              href="#contacts"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#b8cde0] bg-white px-6 py-3.5 text-sm font-bold text-[#163d66] transition hover:border-[#163d66]"
            >
              Контакты отдела кадров
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#52677d]">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#b7893e]" /> Официальное
              трудоустройство
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-[#b7893e]" /> Социальный
              пакет
            </span>
          </div>
        </div>
        <div className="relative hidden overflow-hidden rounded-2xl border-[6px] border-white bg-white shadow-2xl shadow-[#0d3155]/15 lg:block">
          <img
            src="https://img.belta.by/images/storage/news/with_archive/2024/000023_1722501423_651610_big.jpg"
            alt="Здание и сотрудники ГУВД Минского горисполкома"
            className="h-[22rem] w-full object-cover object-center sm:h-[30rem] lg:h-[38rem]"
          />
          <div className="absolute bottom-4 left-4 rounded bg-[#09294f]/90 px-3 py-2 text-[10px] font-bold tracking-[0.16em] text-white">
            ГУВД МИНСКОГО ГОРИСПОЛКОМА
          </div>
        </div>
      </section>

      <section id="video" className="bg-[#e9f0f6] px-4 py-14 sm:px-5 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b7893e]">
              Видео о службе
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#09294f] sm:text-4xl">
              Посмотрите, как устроена служба
            </h2>
          </div>
          <div className="overflow-hidden rounded-2xl border-4 border-white bg-[#09294f] shadow-xl">
            {videoSrc ? (
              <video
                src={videoSrc}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="aspect-video w-full object-cover"
              />
            ) : (
              <div className="flex aspect-video items-center justify-center px-6 text-center text-sm text-white/65">
                Добавьте путь к видео в переменную{" "}
                <code className="mx-1 rounded bg-white/10 px-1.5 py-0.5 text-[#d8b36d]">
                  videoSrc
                </code>{" "}
                в файле страницы — после этого ролик будет воспроизводиться
                автоматически.
              </div>
            )}
          </div>
        </div>
      </section>
      <section
        id="gallery"
        className="bg-[#09294f] px-4 py-14 text-white sm:px-5 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d8b36d]">
                Люди и служба
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Служба, которой доверяют
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/65">
              Истории о призвании, ответственности и людях, которые каждый день
              выбирают служить городу и стране.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {gallery.map((item, index) => (
              <article
                key={`${item.label}-${index}`}
                className="group grid overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/10 md:grid-cols-2"
              >
                <div className="flex min-h-80 items-center justify-center overflow-hidden bg-[#e7edf2]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`h-90 w-full transition duration-700 group-hover:scale-[1.03] sm:h-80 md:h-[28rem] ${item.emblem ? "object-contain p-8 sm:p-12 md:p-16" : "object-cover"}`}
                  />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                    {item.label}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="conditions" className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b7893e]">
                Условия службы
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#09294f] sm:text-4xl">
                Профессиональная служба с ясными перспективами
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#64748b]">
              Мы ценим ответственность, выдержку и желание работать на благо
              города и его жителей. Здесь важны взаимное уважение,
              профессиональная собранность и готовность действовать в интересах
              общества.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-xl border border-[#dce4ec] bg-[#dce4ec] sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group bg-white p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#f8fafc] hover:shadow-lg sm:p-7"
              >
                <div className="mb-5 grid size-12 place-items-center rounded-xl bg-[#edf3f8] text-[#174a79] shadow-sm transition duration-300 group-hover:bg-[#09294f] group-hover:text-[#d8b36d]">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-bold text-[#163d66]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#64748b]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="about"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:py-24"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#b7893e]">
            Кандидату
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#09294f] sm:text-4xl">
            Профессиональный путь, которому доверяют
          </h2>
          <p className="mt-5 max-w-md leading-7 text-[#64748b]">
            Служба в органах внутренних дел — это ответственная и системная
            работа, стабильность, достойные условия и возможность
            профессионального роста в коллективе единомышленников. Каждый
            сотрудник получает пространство для развития, совершенствования
            навыков и реализации личного потенциала. В основе службы — уважение
            к гражданам, точность в работе, ответственность за результат и
            поддержка коллег. Мы приглашаем тех, кто готов расти вместе с
            коллективом и достойно представлять интересы столицы.
          </p>
        </div>
        <div className="rounded-xl border border-[#dce4ec] bg-white p-7 shadow-sm">
          <h3 className="font-bold text-[#163d66]">Базовые требования</h3>
          <ul className="mt-5 flex flex-col gap-4">
            {requirements.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-[#52677d]"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#b7893e]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-7 border-t border-[#e7edf2] pt-5 text-sm text-[#64748b]">
            Подробные требования и перечень документов уточняются у специалистов
            кадрового подразделения.
          </div>
        </div>
      </section>
      <section id="contacts" className="bg-[#09294f] text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d8b36d]">
                Отдел кадров
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Остались вопросы?
              </h2>
              <p className="mt-4 max-w-md leading-7 text-white/65">
                Свяжитесь со специалистами, чтобы узнать актуальные условия и
                записаться на консультацию.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+375297642827"
                className="rounded-xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <p className="text-xs text-white/55">Заместитель начальника</p>
                <p className="mt-1 font-bold">Гурский Александр Михайлович</p>
                <p className="mt-4 flex items-center gap-2 text-lg font-black text-[#d8b36d]">
                  <Phone className="size-4" /> +375 29 764 28 27
                </p>
              </a>
              <a
                href="tel:+375256899697"
                className="rounded-xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <p className="text-xs text-white/55">Командир группы</p>
                <p className="mt-1 font-bold">Черняев Денис Олегович</p>
                <p className="mt-4 flex items-center gap-2 text-lg font-black text-[#d8b36d]">
                  <Phone className="size-4" /> +375 25 689 96 97
                </p>
              </a>
              <a
                href="tel:+375336906198"
                className="rounded-xl border border-white/15 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <p className="text-xs text-white/55">Командир группы</p>
                <p className="mt-1 font-bold">Володько Максим Александрович</p>
                <p className="mt-4 flex items-center gap-2 text-lg font-black text-[#d8b36d]">
                  <Phone className="size-4" /> +375 33 690 61 98
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#061d38] px-5 py-6 text-center text-[11px] leading-5 tracking-[0.12em] text-white/45">
        <p>
          ИНФОРМАЦИОННЫЕ МАТЕРИАЛЫ · 2026 · СТАБИЛЬНОСТЬ, РАЗВИТИЕ, УВАЖЕНИЕ
        </p>
        <p className="mt-2 tracking-[0.08em]">
          ИНФОРМАЦИОННАЯ СТРАНИЦА О ВАКАНСИИ · НЕ ЯВЛЯЕТСЯ ОФИЦИАЛЬНЫМ САЙТОМ
          МВД
        </p>
      </footer>
    </main>
  );
}
