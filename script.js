const body = document.body;
body.classList.add("js");

const tabs = Array.from(document.querySelectorAll(".tab"));
const panels = Array.from(document.querySelectorAll(".service-panel"));

const setActiveTab = (targetId) => {
  tabs.forEach((tab) => {
    const isActive = tab.dataset.tab === targetId;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
  panels.forEach((panel) => {
    const isActive = panel.id === targetId;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveTab(tab.dataset.tab);
  });
});

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 90}ms`;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const translations = {
  ESP: {
    lang: "es",
    title: "Clever Sell Soluciones de punta a punta",
    "brand.alt": "Clever Sell",
    "lang.toggle": "Cambiar idioma",
    "nav.value": "Propuesta de valor",
    "nav.services": "Servicios",
    "nav.sectors": "Sectores",
    "nav.compliance": "Cumplimiento",
    "nav.contact": "Contacto",
    "nav.access": "Acceder",
    "hero.title":
      "Tecnología integral para organizaciones de alta volumetría en cobranza y pagos.",
    "hero.lead":
      "Soluciones de punta a punta: plataforma multisistemas, trazabilidad, seguridad y cumplimiento normativo en cada operación.",
    "hero.email": "Escribir a hola@cleversell.com.ar",
    "hero.form": "Completar formulario",
    "value.title": "Propuesta de valor",
    "value.desc":
      "Integramos canales físicos y digitales para cobrar, conciliar y reportar con velocidad y precisión.",
    "value.card1.title": "Plataforma propia interoperable",
    "value.card1.desc":
      "APIs, archivos, WhatsApp y redes para integraciones rápidas y robustas.",
    "value.card2.title": "Operación omnicanal",
    "value.card2.desc":
      "Online + locales físicos para recaudo con efectivo y medios digitales.",
    "value.card3.title": "KYC/AML y antifraude",
    "value.card3.desc":
      "Cumplimiento normativo, listas restrictivas y verificación de identidad.",
    "value.card4.title": "Reportes en tiempo real",
    "value.card4.desc":
      "Conciliación automática y saldos claros con métricas operativas.",
    "value.card5.title": "Alta volumetría y efectivo",
    "value.card5.desc":
      "Equipo con experiencia en operaciones masivas y manejo de efectivo.",
    "services.title": "Servicios",
    "services.card1.title": "Cobranza de impuestos y servicios",
    "services.card1.desc":
      "Brindamos el servicio integral de recepción y acreditación de pagos de tasas, impuestos y servicios. Nuestra tecnología multisistemas integra distintas fuentes y formatos (APIs, SFTP, lotes) para validar, cobrar y conciliar en tiempo real. Disponemos de múltiples locales a la calle para atención presencial y recepción de efectivo, además de canales digitales.",
    "services.card2.title": "Desarrollo tecnológico",
    "services.card2.desc":
      "Software de gestión de cobranza y pagos por WhatsApp/redes. Construimos e integramos módulos y procesos de cobro que permiten iniciar y completar pagos directamente desde WhatsApp, Instagram, Facebook y links de pago, con seguimiento del estado, recordatorios automáticos, comprobantes en línea y conciliación y exportación contable. Ofrecemos SDKs, APIs y flujos conversacionales con bots y agentes humanos.",
    "services.card3.title": "Outsourcing de cobranza",
    "services.card3.desc":
      "Operamos como outsourcer de tecnología y procesos: generamos avisos, links de cobro, recaudo, conciliaciones, devengamientos y reportes; administramos medios de pago y reglas de ruteo, y entregamos cuentas claras: qué se cobró, cuándo y a quién se acreditó, con SLA y métricas. Sumado a un completo webclient para acceso y control de cuentas corrientes.",
    "services.card4.title": "Recuento y control de billetes",
    "services.card4.desc":
      "Servicio especializado para transportadoras de caudales, supermercados y negocios de alto efectivo. Incluye recuento, clasificación, detección de falsos, identificación de billetes deteriorados y categorización por calidad para su tratamiento adecuado. Entregamos actas y reportes operativos.",
    "sectors.title": "Sectores que atendemos",
    "sectors.desc": "A través de nuestros sistemas y equipos especializados:",
    "sectors.pill1": "Gobiernos y entes recaudadores",
    "sectors.pill2": "Utilities y telcos",
    "sectors.pill3": "Retail y supermercados",
    "sectors.pill4": "Transportadoras de caudales",
    "sectors.pill5": "Clubes, cámaras y asociaciones",
    "sectors.pill6": "E-commerce y SaaS",
    "compliance.title": "Cumplimiento y seguridad",
    "compliance.item1.prefix": "Controles de prevención de lavado ",
    "compliance.item1.suffix": "y listas restrictivas.",
    "compliance.item2":
      "Verificación de identidad, segregación de funciones y trazabilidad de fondos.",
    "compliance.item3":
      "Protección de datos personales conforme a la Ley 25.326.",
    "compliance.item4.suffix":
      "habilitados para el tratamiento seguro de datos de pago.",
    "compliance.callout.title": "Transparencia operativa",
    "compliance.callout.desc":
      "Reportes en tiempo real, conciliación automática y métricas con SLA.",
    "contact.label.name": "Nombre",
    "contact.placeholder.name": "Tu nombre",
    "contact.label.email": "Email",
    "contact.placeholder.email": "tu@email.com",
    "contact.label.company": "Empresa",
    "contact.placeholder.company": "Razón social / marca",
    "contact.label.message": "Mensaje",
    "contact.placeholder.message": "Contanos brevemente tu necesidad",
    "contact.terms.prefix": "He leído y acepto los ",
    "contact.terms.link": "Términos y condiciones",
    "contact.terms.suffix": ".",
    "contact.submit": "Enviar consulta",
    "footer.text": "Clever Sell - Todos los derechos reservados.",
    "footer.top": "Subir",
  },
  US: {
    lang: "en",
    title: "Clever Sell End-to-End Solutions",
    "brand.alt": "Clever Sell",
    "lang.toggle": "Change language",
    "nav.value": "Value proposition",
    "nav.services": "Services",
    "nav.sectors": "Sectors",
    "nav.compliance": "Compliance",
    "nav.contact": "Contact",
    "nav.access": "Access",
    "hero.title":
      "Comprehensive technology for high-volume organizations in collections and payments.",
    "hero.lead":
      "End-to-end solutions: multi-system platform, traceability, security, and regulatory compliance in every operation.",
    "hero.email": "Email hola@cleversell.com.ar",
    "hero.form": "Complete the form",
    "value.title": "Value proposition",
    "value.desc":
      "We integrate physical and digital channels to collect, reconcile, and report with speed and precision.",
    "value.card1.title": "Interoperable in-house platform",
    "value.card1.desc":
      "APIs, files, WhatsApp, and networks for fast, robust integrations.",
    "value.card2.title": "Omnichannel operation",
    "value.card2.desc":
      "Online + physical locations for cash collections and digital methods.",
    "value.card3.title": "KYC/AML and anti-fraud",
    "value.card3.desc":
      "Regulatory compliance, restrictive lists, and identity verification.",
    "value.card4.title": "Real-time reporting",
    "value.card4.desc":
      "Automatic reconciliation and clear balances with operational metrics.",
    "value.card5.title": "High volume and cash",
    "value.card5.desc":
      "Team experienced in mass operations and cash handling.",
    "services.title": "Services",
    "services.card1.title": "Tax and utility collections",
    "services.card1.desc":
      "We provide the end-to-end service for receiving and crediting payments of fees, taxes, and services. Our multi-system technology integrates different sources and formats (APIs, SFTP, batches) to validate, collect, and reconcile in real time. We have multiple street-level locations for in-person service and cash intake, plus digital channels.",
    "services.card2.title": "Technology development",
    "services.card2.desc":
      "Collections and payments management software via WhatsApp/social networks. We build and integrate modules and collection processes that allow initiating and completing payments directly from WhatsApp, Instagram, Facebook, and payment links, with status tracking, automated reminders, online receipts, and reconciliation and accounting export. We offer SDKs, APIs, and conversational flows with bots and human agents.",
    "services.card3.title": "Collections outsourcing",
    "services.card3.desc":
      "We operate as a technology and process outsourcer: we generate notices, payment links, collections, reconciliations, accruals, and reports; we manage payment methods and routing rules, and deliver clear accounts: what was collected, when, and to whom it was credited, with SLAs and metrics. Plus a full web client for access and control of current accounts.",
    "services.card4.title": "Cash counting and control",
    "services.card4.desc":
      "Specialized service for cash transport companies, supermarkets, and high-cash businesses. Includes counting, classification, counterfeit detection, identification of damaged banknotes, and quality categorization for proper handling. We deliver records and operational reports.",
    "sectors.title": "Sectors we serve",
    "sectors.desc": "Through our systems and specialized teams:",
    "sectors.pill1": "Governments and collecting agencies",
    "sectors.pill2": "Utilities and telcos",
    "sectors.pill3": "Retail and supermarkets",
    "sectors.pill4": "Cash transport companies",
    "sectors.pill5": "Clubs, chambers, and associations",
    "sectors.pill6": "E-commerce and SaaS",
    "compliance.title": "Compliance and security",
    "compliance.item1.prefix": "Anti-money laundering controls ",
    "compliance.item1.suffix": "and restrictive lists.",
    "compliance.item2":
      "Identity verification, segregation of duties, and fund traceability.",
    "compliance.item3":
      "Personal data protection in accordance with Law 25.326.",
    "compliance.item4.suffix":
      "enabled for the secure handling of payment data.",
    "compliance.callout.title": "Operational transparency",
    "compliance.callout.desc":
      "Real-time reporting, automatic reconciliation, and metrics with SLA.",
    "contact.label.name": "Name",
    "contact.placeholder.name": "Your name",
    "contact.label.email": "Email",
    "contact.placeholder.email": "you@email.com",
    "contact.label.company": "Company",
    "contact.placeholder.company": "Legal name / brand",
    "contact.label.message": "Message",
    "contact.placeholder.message": "Tell us briefly what you need",
    "contact.terms.prefix": "I have read and accept the ",
    "contact.terms.link": "Terms and conditions",
    "contact.terms.suffix": ".",
    "contact.submit": "Send inquiry",
    "footer.text": "Clever Sell - All rights reserved.",
    "footer.top": "Back to top",
  },
  BRA: {
    lang: "pt-BR",
    title: "Clever Sell Soluções ponta a ponta",
    "brand.alt": "Clever Sell",
    "lang.toggle": "Mudar idioma",
    "nav.value": "Proposta de valor",
    "nav.services": "Serviços",
    "nav.sectors": "Setores",
    "nav.compliance": "Conformidade",
    "nav.contact": "Contato",
    "nav.access": "Acessar",
    "hero.title":
      "Tecnologia integral para organizações de alto volume em cobrança e pagamentos.",
    "hero.lead":
      "Soluções ponta a ponta: plataforma multisistemas, rastreabilidade, segurança e conformidade normativa em cada operação.",
    "hero.email": "Escrever para hola@cleversell.com.ar",
    "hero.form": "Preencher formulário",
    "value.title": "Proposta de valor",
    "value.desc":
      "Integramos canais físicos e digitais para cobrar, conciliar e reportar com velocidade e precisão.",
    "value.card1.title": "Plataforma própria interoperável",
    "value.card1.desc":
      "APIs, arquivos, WhatsApp e redes para integrações rápidas e robustas.",
    "value.card2.title": "Operação omnicanal",
    "value.card2.desc":
      "Online + pontos físicos para arrecadação com dinheiro e meios digitais.",
    "value.card3.title": "KYC/AML e antifraude",
    "value.card3.desc":
      "Conformidade regulatória, listas restritivas e verificação de identidade.",
    "value.card4.title": "Relatórios em tempo real",
    "value.card4.desc":
      "Conciliação automática e saldos claros com métricas operacionais.",
    "value.card5.title": "Alto volume e dinheiro",
    "value.card5.desc":
      "Equipe com experiência em operações massivas e manuseio de dinheiro.",
    "services.title": "Serviços",
    "services.card1.title": "Cobrança de impostos e serviços",
    "services.card1.desc":
      "Oferecemos o serviço integral de recepção e crédito de pagamentos de taxas, impostos e serviços. Nossa tecnologia multisistemas integra diferentes fontes e formatos (APIs, SFTP, lotes) para validar, cobrar e conciliar em tempo real. Contamos com múltiplos pontos físicos para atendimento presencial e recepção de dinheiro, além de canais digitais.",
    "services.card2.title": "Desenvolvimento tecnológico",
    "services.card2.desc":
      "Software de gestão de cobrança e pagamentos por WhatsApp/redes. Construímos e integramos módulos e processos de cobrança que permitem iniciar e concluir pagamentos diretamente do WhatsApp, Instagram, Facebook e links de pagamento, com acompanhamento de status, lembretes automáticos, comprovantes online e conciliação e exportação contábil. Oferecemos SDKs, APIs e fluxos conversacionais com bots e agentes humanos.",
    "services.card3.title": "Terceirização de cobrança",
    "services.card3.desc":
      "Atuamos como terceirizados de tecnologia e processos: geramos avisos, links de cobrança, arrecadação, conciliações, provisionamentos e relatórios; administramos meios de pagamento e regras de roteamento e entregamos contas claras: o que foi cobrado, quando e para quem foi creditado, com SLAs e métricas. Além de um webclient completo para acesso e controle de contas correntes.",
    "services.card4.title": "Contagem e controle de cédulas",
    "services.card4.desc":
      "Serviço especializado para transportadoras de valores, supermercados e negócios com alto volume de dinheiro. Inclui contagem, classificação, detecção de falsos, identificação de cédulas deterioradas e categorização por qualidade para o tratamento adequado. Entregamos atas e relatórios operacionais.",
    "sectors.title": "Setores que atendemos",
    "sectors.desc": "Por meio de nossos sistemas e equipes especializadas:",
    "sectors.pill1": "Governos e entes arrecadadores",
    "sectors.pill2": "Utilities e telcos",
    "sectors.pill3": "Varejo e supermercados",
    "sectors.pill4": "Transportadoras de valores",
    "sectors.pill5": "Clubes, câmaras e associações",
    "sectors.pill6": "E-commerce e SaaS",
    "compliance.title": "Conformidade e segurança",
    "compliance.item1.prefix": "Controles de prevenção à lavagem ",
    "compliance.item1.suffix": "e listas restritivas.",
    "compliance.item2":
      "Verificação de identidade, segregação de funções e rastreabilidade de fundos.",
    "compliance.item3":
      "Proteção de dados pessoais conforme a Lei 25.326.",
    "compliance.item4.suffix":
      "habilitados para o tratamento seguro de dados de pagamento.",
    "compliance.callout.title": "Transparência operacional",
    "compliance.callout.desc":
      "Relatórios em tempo real, conciliação automática e métricas com SLA.",
    "contact.label.name": "Nome",
    "contact.placeholder.name": "Seu nome",
    "contact.label.email": "Email",
    "contact.placeholder.email": "voce@email.com",
    "contact.label.company": "Empresa",
    "contact.placeholder.company": "Razão social / marca",
    "contact.label.message": "Mensagem",
    "contact.placeholder.message": "Conte brevemente sua necessidade",
    "contact.terms.prefix": "Li e aceito os ",
    "contact.terms.link": "Termos e condições",
    "contact.terms.suffix": ".",
    "contact.submit": "Enviar consulta",
    "footer.text": "Clever Sell - Todos os direitos reservados.",
    "footer.top": "Voltar ao topo",
  },
};

const applyTranslations = (lang) => {
  const dict = translations[lang] || translations.ESP;
  document.documentElement.lang = dict.lang || "es";
  if (dict.title) {
    document.title = dict.title;
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.dataset.i18nAriaLabel;
    if (dict[key]) {
      el.setAttribute("aria-label", dict[key]);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (dict[key]) {
      el.setAttribute("alt", dict[key]);
    }
  });
};

const storageKey = "cleversell_lang";
const defaultLang = "ESP";
const savedLang = localStorage.getItem(storageKey);
const initialLang = translations[savedLang] ? savedLang : defaultLang;
applyTranslations(initialLang);

const langMenu = document.querySelector(".lang-menu");
if (langMenu) {
  const toggle = langMenu.querySelector(".lang-toggle");
  const dropdown = langMenu.querySelector(".lang-dropdown");
  const menuItems = Array.from(dropdown.querySelectorAll("button"));

  const setOpen = (isOpen) => {
    langMenu.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    dropdown.setAttribute("aria-hidden", String(!isOpen));
  };

  const setSelected = (value) => {
    menuItems.forEach((item) => {
      item.classList.toggle("is-selected", item.dataset.lang === value);
    });
  };

  setSelected(initialLang);

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(!langMenu.classList.contains("is-open"));
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const value = item.dataset.lang;
      localStorage.setItem(storageKey, value);
      applyTranslations(value);
      setSelected(value);
      setOpen(false);
    });
  });

  document.addEventListener("click", (event) => {
    if (!langMenu.contains(event.target)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });
}

const backToTop = document.querySelector(".back-to-top");
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
