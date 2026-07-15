/* ==========================================================================
   LEMON TREE ARQUITECTURA — script.js (v3, sitio multi-página)
   Sin dependencias externas. Un único archivo compartido por todas las
   páginas: cabecera/pie inyectados por JS, i18n ES/CA/EN, datos de
   proyectos con ficha + galería, parallax y lightbox.
   ========================================================================== */
(function(){
  "use strict";

  var PAGE = document.body.getAttribute("data-page") || "home";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------ *
   * 0. UI CHROME — textos de navegación, pie y etiquetas comunes
   * ------------------------------------------------------------------ */
  var UI = {
    es: {
      navStudio: "Estudio", navServices: "Servicios", navProjects: "Proyectos", navContact: "Contacto",
      footerTagline: "Arquitectura e interiorismo en Barcelona",
      footerA11y: "Accesibilidad", footerPrivacy: "Política de Privacidad",
      footerCookies: "Política de Cookies", footerLegal: "Aviso Legal",
      footerCopy: "© 2026 Lemon Tree Arquitectura. Estudio de arquitectura en Barcelona.",
      skip: "Saltar al contenido",
      catAll: "Todos", catReforma: "Reforma", catContract: "Contract & Retail", catNew: "Obra Nueva",
      specProject: "Proyecto", specLocation: "Situación", specYear: "Año", specSurface: "Superficie", specBuilder: "Obra",
      related: "Más proyectos", back: "Volver a proyectos",
      photoBy: "Fotografía",
      scopeA: "Arquitectura y Dirección de Obra",
      scopeB: "Arquitectura, Diseño Interior y Dirección de Obra"
    },
    ca: {
      navStudio: "Estudi", navServices: "Serveis", navProjects: "Projectes", navContact: "Contacte",
      footerTagline: "Arquitectura i interiorisme a Barcelona",
      footerA11y: "Accessibilitat", footerPrivacy: "Política de Privacitat",
      footerCookies: "Política de Cookies", footerLegal: "Avís Legal",
      footerCopy: "© 2026 Lemon Tree Arquitectura. Estudi d'arquitectura a Barcelona.",
      skip: "Salta al contingut",
      catAll: "Tots", catReforma: "Reforma", catContract: "Contract & Retail", catNew: "Obra Nova",
      specProject: "Projecte", specLocation: "Situació", specYear: "Any", specSurface: "Superfície", specBuilder: "Obra",
      related: "Més projectes", back: "Tornar a projectes",
      photoBy: "Fotografia",
      scopeA: "Arquitectura i Direcció d'Obra",
      scopeB: "Arquitectura, Disseny Interior i Direcció d'Obra"
    },
    en: {
      navStudio: "Studio", navServices: "Services", navProjects: "Projects", navContact: "Contact",
      footerTagline: "Architecture and interior design in Barcelona",
      footerA11y: "Accessibility", footerPrivacy: "Privacy Policy",
      footerCookies: "Cookie Policy", footerLegal: "Legal Notice",
      footerCopy: "© 2026 Lemon Tree Arquitectura. Architecture studio in Barcelona.",
      skip: "Skip to content",
      catAll: "All", catReforma: "Renovation", catContract: "Contract & Retail", catNew: "New Build",
      specProject: "Project", specLocation: "Location", specYear: "Year", specSurface: "Surface area", specBuilder: "Built by",
      related: "More projects", back: "Back to projects",
      photoBy: "Photography",
      scopeA: "Architecture & Site Management",
      scopeB: "Architecture, Interior Design & Site Management"
    }
  };

  var PAGES = [
    { key: "home",      href: "index.html" },
    { key: "estudio",   href: "estudio.html" },
    { key: "servicios", href: "servicios.html" },
    { key: "proyectos", href: "proyectos.html" },
    { key: "contacto",  href: "contacto.html" }
  ];

  /* ------------------------------------------------------------------ *
   * 1. PROYECTOS — ficha completa + galería (fotografías reales de
   *    lemontreearquitectura.com). El array "img" admite varias URLs:
   *    de momento incluye la(s) confirmada(s); añade más URLs de tu
   *    biblioteca de medios en esta misma lista para ampliar cada galería.
   * ------------------------------------------------------------------ */
  var PROJECTS = [
    {
      slug: "baumes-residencial", name: "Baumes Residencial", place: "Pallejà", cat: "obranueva",
      year: "2020", surface: "1.010 m²", builder: "Absolute Properties Real Estate", scope: "scopeA",
      img: ["https://lemontreearquitectura.com/wp-content/uploads/2025/02/MMF_2025_02_NarcisMonturiol_01-scaled.jpg"],
      desc: {
        es: "Diseño y desarrollo de un edificio plurifamiliar para un promotor privado que busca un producto competitivo y rentable. El edificio proyecta 5 viviendas, dos de ellas amplios dúplex, y funciona con energía renovable mediante aerotermia. Con tres fachadas orientadas a captar luz natural, predominan los tonos claros y una carpintería exterior en color champán que aporta modernidad al conjunto. Los interiores, minimalistas, buscan el bienestar de quienes los habitan.",
        ca: "Disseny i desenvolupament d'un edifici plurifamiliar per a un promotor privat que busca un producte competitiu i rendible. L'edifici projecta 5 habitatges, dos d'ells amplis dúplex, i funciona amb energia renovable mitjançant aerotèrmia. Amb tres façanes orientades a captar llum natural, hi predominen els tons clars i una fusteria exterior en color xampany que aporta modernitat al conjunt. Els interiors, minimalistes, busquen el benestar de qui els habita.",
        en: "Design and development of a multi-family building for a private developer seeking a competitive, profitable product. The building comprises 5 homes, two of them spacious duplexes, and runs on renewable energy through an air-source heat pump. With three façades oriented to capture natural light, pale tones and champagne-coloured exterior joinery bring a modern edge to the whole. The minimalist interiors are designed around the wellbeing of the people who live in them."
      }
    },
    {
      slug: "api-center", name: "API Center", place: "Barcelona", cat: "contract",
      year: "2024", surface: "525 m²", builder: "Efik + Absolute Properties Real Estate", scope: "scopeA",
      img: ["https://lemontreearquitectura.com/wp-content/uploads/2025/02/MMF_2024_07_Apicenter_7-scaled.jpg"],
      desc: {
        es: "Diseño integral de un club social con aulas de formación para los agentes de la propiedad del Colegio de Barcelona (COAPI Bcn). Cada espacio se plantea a medida de las necesidades del cliente, incorporando su identidad de marca en estancias principales como el auditorio y la sala de exposiciones, y poniendo en valor elementos arquitectónicos originales como bóvedas y arcos.",
        ca: "Disseny integral d'un club social amb aules de formació per als agents de la propietat del Col·legi de Barcelona (COAPI Bcn). Cada espai es planteja a mida de les necessitats del client, incorporant la seva identitat de marca en estances principals com l'auditori i la sala d'exposicions, i posant en valor elements arquitectònics originals com voltes i arcs.",
        en: "Full interior design of a members' club with training rooms for the Barcelona Association of Real Estate Agents (COAPI Bcn). Every space was tailored to the client's needs, weaving their brand identity into key rooms such as the auditorium and exhibition hall, while highlighting original architectural features like vaults and arches."
      }
    },
    {
      slug: "oficina-estetica", name: "Oficina Estética", place: "Madrid", cat: "contract",
      year: "2021", surface: "180 m²", builder: "Absolute Properties Real Estate", scope: "scopeA",
      img: ["https://lemontreearquitectura.com/wp-content/uploads/2025/02/estetica-6.jpg"],
      desc: {
        es: "Diseño integral de oficinas para una marca reconocida de productos de estética. El cliente buscaba un espacio de trabajo donde su identidad de marca y su estilo quedaran reflejados en cada rincón, con un resultado cuidado hasta el último detalle.",
        ca: "Disseny integral d'oficines per a una marca reconeguda de productes d'estètica. El client buscava un espai de treball on la seva identitat de marca i el seu estil quedessin reflectits en cada racó, amb un resultat cuidat fins a l'últim detall.",
        en: "Full office design for a well-known beauty and aesthetics brand. The client wanted a workspace where their brand identity and style would come through in every corner, with careful attention paid to every last detail."
      }
    },
    {
      slug: "sant-just", name: "Sant Just", place: "Sant Just Desvern", cat: "reforma",
      year: "2022", surface: "105 m²", builder: "Absolute Properties Real Estate", scope: "scopeA",
      img: ["https://lemontreearquitectura.com/wp-content/uploads/2025/02/SantJust_07-scaled.jpg"],
      desc: {
        es: "Reforma integral de una vivienda unifamiliar antigua entre medianeras, en el corazón de Sant Just Desvern. Se redistribuyen todos los espacios interiores y se crea un nuevo núcleo de escalera que aprovecha un espacio de servidumbre exterior en desuso. Los propietarios, una pareja que quería dar una segunda vida a la casa recién adquirida, obtienen un hogar lleno de luz.",
        ca: "Reforma integral d'un habitatge unifamiliar antic entre mitgeres, al cor de Sant Just Desvern. Es redistribueixen tots els espais interiors i es crea un nou nucli d'escala que aprofita un espai de servitud exterior en desús. Els propietaris, una parella que volia donar una segona vida a la casa acabada d'adquirir, obtenen una llar plena de llum.",
        en: "Full renovation of an old terraced single-family home in the heart of Sant Just Desvern. Every interior space was redistributed and a new stairwell core was created, reclaiming a disused exterior service area. For the owners, a couple giving new life to their newly bought home, the result is a house full of light."
      }
    },
    {
      slug: "arago", name: "Aragó", place: "Barcelona", cat: "reforma",
      year: "2020", surface: "65 m²", builder: null, scope: "scopeA", credit: "fotointeriores.com",
      img: ["https://lemontreearquitectura.com/wp-content/uploads/2025/02/arago-11-scaled.jpg"],
      desc: {
        es: "Reforma parcial para renovar la imagen de un piso destinado al alquiler. Se integran el salón, el comedor y la cocina en un único espacio abierto, recuperando elementos originales como el pavimento y las puertas. El resultado es el renacer de un piso típico del Eixample.",
        ca: "Reforma parcial per renovar la imatge d'un pis destinat al lloguer. S'integren el saló, el menjador i la cuina en un únic espai obert, recuperant elements originals com el paviment i les portes. El resultat és el renaixement d'un pis típic de l'Eixample.",
        en: "Partial renovation to refresh a flat for rental. The living room, dining area and kitchen are merged into a single open space, with original features such as flooring and doors restored. The result: a typical Eixample flat, reborn."
      }
    },
    {
      slug: "bonsucces", name: "Bonsuccés", place: "Barcelona", cat: "reforma",
      year: "2019", surface: "102 m²", builder: null, scope: "scopeB",
      img: ["https://lemontreearquitectura.com/wp-content/uploads/2025/02/bonsucces-1-scaled.jpg"],
      desc: {
        es: "Reforma integral de un piso antiguo en Ciutat Vella. La zona de día se transforma en un espacio de aire loft, con más de 40 m² en altura libre que respetan la atmósfera constructiva original. La zona de noche se plantea más recogida, con un baño en suite abierto al dormitorio.",
        ca: "Reforma integral d'un pis antic a Ciutat Vella. La zona de dia es transforma en un espai d'aire loft, amb més de 40 m² d'alçada lliure que respecten l'atmosfera constructiva original. La zona de nit es planteja més recollida, amb un bany en suite obert al dormitori.",
        en: "Full renovation of an old flat in Ciutat Vella. The living area becomes a loft-style space with over 40 m² of open height that respects the building's original character, while the sleeping area is more intimate, with an en-suite bathroom open to the bedroom."
      }
    },
    {
      slug: "centro-de-yoga", name: "Centro de Yoga", place: "Pallejà", cat: "contract",
      year: "2020", surface: "95 m²", builder: null, scope: "scopeA",
      img: ["https://lemontreearquitectura.com/wp-content/uploads/2025/02/yoga-2.jpg"],
      desc: {
        es: "Implantación integral de un centro de yoga en un local en planta baja. Se diseña una sala diáfana con el vestidor delimitado por una estantería de madera, creando un ambiente minimalista y sereno en el que la madera natural es la gran protagonista.",
        ca: "Implantació integral d'un centre de ioga en un local en planta baixa. Es dissenya una sala diàfana amb el vestidor delimitat per una prestatgeria de fusta, creant un ambient minimalista i serè en què la fusta natural n'és la gran protagonista.",
        en: "Full fit-out of a yoga studio in a ground-floor unit. An open, column-free room was designed with the changing area defined by a timber shelving unit, creating a minimalist, calm atmosphere where natural wood takes centre stage."
      }
    },
    {
      slug: "manigua", name: "Manigua", place: "Barcelona", cat: "reforma",
      year: "2020", surface: "97 m²", builder: null, scope: "scopeA", credit: "fotointeriores.com",
      img: ["https://lemontreearquitectura.com/wp-content/uploads/2025/02/manigua-3.jpg"],
      desc: {
        es: "Reforma de un piso en el barrio de la Sagrera para una pareja joven que encontró en él la ilusión de crear su primer hogar. Se renueva por completo su imagen, con acabados actuales, y se rediseñan la cocina y el baño con un aire contemporáneo.",
        ca: "Reforma d'un pis al barri de la Sagrera per a una parella jove que hi va trobar la il·lusió de crear la seva primera llar. Se'n renova completament la imatge, amb acabats actuals, i es redissenyen la cuina i el bany amb un aire contemporani.",
        en: "Renovation of a flat in the Sagrera neighbourhood for a young couple who found in it the excitement of creating their first home. Its image is fully renewed with contemporary finishes, and the kitchen and bathroom are redesigned with a modern feel."
      }
    },
    {
      slug: "llanca", name: "Llançà", place: "Barcelona", cat: "reforma",
      year: "2019", surface: "80 m²", builder: null, scope: "scopeA",
      img: ["https://lemontreearquitectura.com/wp-content/uploads/2025/02/llanca-2.jpg"],
      desc: {
        es: "Reforma sencilla en el Eixample Esquerra de Barcelona para una pareja joven con un bebé, que buscaba dar calidez de hogar a un piso antiguo. Se emplean materiales sencillos y nobles para construir una atmósfera minimalista y acogedora.",
        ca: "Reforma senzilla a l'Eixample Esquerra de Barcelona per a una parella jove amb un nadó, que buscava donar escalfor de llar a un pis antic. S'hi fan servir materials senzills i nobles per construir una atmosfera minimalista i acollidora.",
        en: "A simple renovation in Barcelona's Eixample Esquerra for a young couple with a baby, looking to bring homely warmth to an old flat. Simple, honest materials were used to build a minimalist, welcoming atmosphere."
      }
    },
    {
      slug: "urbine-distrito-cultural", name: "Urbine Distrito Cultural", place: "L'Hospitalet de Llobregat", cat: "contract",
      year: "2019", surface: "2.505 m²", builder: null, scope: "scopeA",
      img: ["https://lemontreearquitectura.com/wp-content/uploads/2025/02/urbine-22-scaled.jpg"],
      desc: {
        es: "Reforma integral de un edificio industrial de 2.500 m² en Hospitalet de Llobregat para convertirlo en un espacio de carácter cultural con salas de exposición, coworking y oficinas privadas. Se mantiene el carácter industrial original, adaptado a una normativa exigente, dentro del proyecto L'H ON para impulsar el nuevo distrito cultural de la ciudad.",
        ca: "Reforma integral d'un edifici industrial de 2.500 m² a l'Hospitalet de Llobregat per convertir-lo en un espai de caràcter cultural amb sales d'exposició, coworking i oficines privades. Es manté el caràcter industrial original, adaptat a una normativa exigent, dins el projecte L'H ON per impulsar el nou districte cultural de la ciutat.",
        en: "Full renovation of a 2,500 m² industrial building in L'Hospitalet de Llobregat, turning it into a cultural venue with exhibition halls, coworking space and private offices. The original industrial character is preserved, brought up to demanding regulations, as part of the L'H ON project driving the city's new cultural district."
      }
    },
    {
      slug: "bruc", name: "Bruc", place: "Barcelona", cat: "reforma",
      year: "2018", surface: "180 m²", builder: null, scope: "scopeB",
      img: ["https://lemontreearquitectura.com/wp-content/uploads/2025/02/bruc-4-scaled.jpg"],
      desc: {
        es: "Reforma integral de lujo en pleno Eixample de Barcelona para un cliente extranjero, con un programa pensado para una familia numerosa. Se combinan acabados y materiales de alta gama para diferenciar con claridad la zona de día, la zona de noche y el área de servicio.",
        ca: "Reforma integral de luxe en ple Eixample de Barcelona per a un client estranger, amb un programa pensat per a una família nombrosa. Es combinen acabats i materials d'alta gamma per diferenciar amb claredat la zona de dia, la zona de nit i l'àrea de servei.",
        en: "A luxury full renovation in Barcelona's Eixample for a foreign client, with a brief built around a large family. High-end finishes and materials are combined to clearly define the day zone, the night zone and the service area."
      }
    },
    {
      slug: "casa-ecologica", name: "Casa Ecológica", place: "Lima", cat: "obranueva",
      year: null, surface: null, builder: null, scope: "scopeA",
      img: ["https://lemontreearquitectura.com/wp-content/uploads/2025/02/casa-ecologica-5.jpg"],
      desc: {
        es: "Vivienda unifamiliar de obra nueva en Lima (Perú), proyectada con criterios de sostenibilidad y bajo consumo energético, en línea con la trayectoria de Anna Duelo en el país.",
        ca: "Habitatge unifamiliar d'obra nova a Lima (Perú), projectat amb criteris de sostenibilitat i baix consum energètic, en línia amb la trajectòria d'Anna Duelo al país.",
        en: "A new-build single-family home in Lima, Peru, designed around sustainability and low energy consumption, in keeping with Anna Duelo's career in the country."
      }
    }
  ];

  var LOGO_BLACK = "https://lemontreearquitectura.com/wp-content/uploads/2025/03/logo_black.png";
  var LOGO_WHITE = "https://lemontreearquitectura.com/wp-content/uploads/2025/03/logo_white.png";
  var HERO_DARK = (PAGE === "home" || PAGE === "proyecto" || PAGE === "contacto");

  function catLabel(cat, lang){
    var t = UI[lang] || UI.es;
    return cat === "reforma" ? t.catReforma : cat === "contract" ? t.catContract : t.catNew;
  }

  /* ------------------------------------------------------------------ *
   * 2. HEADER / FOOTER — inyectados en cada página
   * ------------------------------------------------------------------ */
  function buildHeader(lang){
    var t = UI[lang] || UI.es;
    var activeKey = (PAGE === "proyecto") ? "proyectos" : PAGE;
    var links = [
      { key:"estudio", href:"estudio.html", label:t.navStudio },
      { key:"servicios", href:"servicios.html", label:t.navServices },
      { key:"proyectos", href:"proyectos.html", label:t.navProjects },
      { key:"contacto", href:"contacto.html", label:t.navContact }
    ];
    var navHTML = links.map(function(l){
      var active = (activeKey === l.key) ? " is-active" : "";
      return '<a href="'+l.href+'" class="'+active.trim()+'">'+l.label+'</a>';
    }).join("");

    return '' +
    '<div class="header-inner container">' +
      '<a href="index.html" class="wordmark" aria-label="Lemon Tree Arquitectura — inicio">' +
        '<img src="'+(HERO_DARK ? LOGO_WHITE : LOGO_BLACK)+'" id="headerLogo" alt="Lemon Tree Arquitectura" width="170" height="44">' +
      '</a>' +
      '<nav class="main-nav" aria-label="Navegación principal">'+ navHTML +'</nav>' +
      '<div class="header-right">' +
        '<div class="lang-switch" role="group" aria-label="Selector de idioma">' +
          '<button type="button" class="lang-btn'+(lang==="es"?" is-active":"")+'" data-lang="es">ES</button>' +
          '<button type="button" class="lang-btn'+(lang==="ca"?" is-active":"")+'" data-lang="ca">CA</button>' +
          '<button type="button" class="lang-btn'+(lang==="en"?" is-active":"")+'" data-lang="en">EN</button>' +
        '</div>' +
        '<button type="button" class="menu-toggle" id="menuToggle" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '</div>' +
    '</div>' +
    '<nav class="mobile-nav" id="mobileNav" aria-label="Navegación móvil">'+ navHTML +'</nav>';
  }

  function buildFooter(lang){
    var t = UI[lang] || UI.es;
    var mailIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7 L12 13 L20 7"/></svg>';
    var igIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>';
    return '' +
    '<div class="footer-inner">' +
      '<div class="footer-brand">' +
        '<img src="'+LOGO_WHITE+'" alt="Lemon Tree Arquitectura" width="160" height="42">' +
      '</div>' +
      '<div class="footer-links">' +
        '<a href="mailto:info@lemontreearquitectura.com" class="icon-link" aria-label="Enviar email a info@lemontreearquitectura.com">'+mailIcon+'</a>' +
        '<a href="https://www.instagram.com/lemontreearquitectura/" target="_blank" rel="noopener" class="icon-link" aria-label="Instagram de Lemon Tree Arquitectura">'+igIcon+'</a>' +
      '</div>' +
      '<div class="footer-legal">' +
        '<a href="/declaracion-de-accesibilidad/">'+t.footerA11y+'</a>' +
        '<a href="/politica-de-privacidad/">'+t.footerPrivacy+'</a>' +
        '<a href="/politica-de-cookies/">'+t.footerCookies+'</a>' +
        '<a href="/aviso-legal/">'+t.footerLegal+'</a>' +
      '</div>' +
      '<p class="footer-copy">'+t.footerCopy+'</p>' +
    '</div>';
  }

  function mountChrome(lang){
    var headerEl = document.getElementById("siteHeader");
    var footerEl = document.getElementById("siteFooter");
    if(headerEl){
      headerEl.innerHTML = buildHeader(lang);
      headerEl.classList.toggle("header-on-dark", HERO_DARK);
    }
    if(footerEl) footerEl.innerHTML = buildFooter(lang);

    // listeners que dependen del DOM recién montado
    document.querySelectorAll(".lang-btn").forEach(function(btn){
      btn.addEventListener("click", function(){ applyLanguage(btn.getAttribute("data-lang")); });
    });
    var menuToggle = document.getElementById("menuToggle");
    var mobileNav = document.getElementById("mobileNav");
    if(menuToggle && mobileNav){
      menuToggle.addEventListener("click", function(){
        var open = mobileNav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      mobileNav.querySelectorAll("a").forEach(function(a){
        a.addEventListener("click", function(){
          mobileNav.classList.remove("is-open");
          menuToggle.setAttribute("aria-expanded", "false");
        });
      });
    }
    var skip = document.querySelector(".skip-link");
    if(skip) skip.textContent = (UI[lang] || UI.es).skip;
  }

  /* ------------------------------------------------------------------ *
   * 3. i18n de contenido estático de cada página (data-i18n vive en ES
   *    dentro del HTML; aquí solo CA/EN)
   * ------------------------------------------------------------------ */
  var PAGE_STRINGS = { ca: {}, en: {} };

  PAGE_STRINGS.ca.home = {
    "meta.title": "Lemon Tree Arquitectura | Estudi d'Arquitectura a Barcelona",
    "meta.description": "Estudi d'arquitectura i interiorisme a Barcelona. Reformes integrals, obra nova, retail i project management, dirigit per l'arquitecta Anna Duelo.",
    "hero.eyebrow": "Estudi d'arquitectura i interiorisme — Barcelona",
    "hero.title": "Arquitectura amb identitat,<br>des de Barcelona",
    "hero.sub": "Dissenyem i executem reformes integrals, interiorisme, obra nova i espais comercials a Barcelona, acompanyant cada projecte des de la cerca de l'immoble fins a la direcció d'obra.",
    "hero.ctaProjects": "Veure projectes", "hero.ctaContact": "Parlem del teu projecte",
    "intro.eyebrow": "L'estudi", "intro.heading": "Cada espai explica una història",
    "intro.p1": "A <strong>Lemon Tree Estudi</strong> creiem que l'arquitectura i l'interiorisme han de respondre a qui habita l'espai. Amb seu a Barcelona, treballem reformes integrals, interiorisme i obra nova amb un enfocament a mida.",
    "intro.p2": "Oferim un servei integral: acompanyem cada projecte des de la cerca de l'immoble fins a l'execució de l'obra, incloent-hi la direcció tècnica i la selecció de materials.",
    "intro.signature": "Dirigit per <strong>Anna Duelo</strong>, arquitecta amb trajectòria internacional entre el Perú i Barcelona, l'estudi combina creativitat i rigor tècnic per materialitzar cada visió amb un disseny precís i atemporal.",
    "featured.eyebrow": "Portfolio seleccionat", "featured.heading": "Projectes que parlen per si sols",
    "featured.sub": "Una selecció de reformes, retail i obra nova a Barcelona i més enllà.",
    "featured.viewAll": "Veure tots els projectes",
    "services.eyebrow": "Serveis", "services.heading": "Arquitectura, obra i estratègia immobiliària a Barcelona",
    "services.sub": "Quatre serveis per cobrir tot el recorregut d'un projecte: del disseny a les claus a la mà.",
    "services.viewAll": "Veure tots els serveis"
  };
  PAGE_STRINGS.en.home = {
    "meta.title": "Lemon Tree Arquitectura | Architecture Studio in Barcelona",
    "meta.description": "Architecture and interior design studio in Barcelona. Full renovations, new-build homes, retail fit-outs and project management, led by architect Anna Duelo.",
    "hero.eyebrow": "Architecture & interior design studio — Barcelona",
    "hero.title": "Architecture with identity,<br>from Barcelona",
    "hero.sub": "We design and deliver full renovations, interior design, new-build homes and commercial spaces in Barcelona, guiding every project from the property search through to site management.",
    "hero.ctaProjects": "View projects", "hero.ctaContact": "Talk about your project",
    "intro.eyebrow": "The studio", "intro.heading": "Every space tells a story",
    "intro.p1": "At <strong>Lemon Tree Estudio</strong> we believe architecture and interior design should respond to the people who live in a space. Based in Barcelona, we work on full renovations, interior design and new-build projects with a tailored approach.",
    "intro.p2": "We offer a complete service, accompanying every project from the property search through to construction, including technical direction and material selection.",
    "intro.signature": "Led by <strong>Anna Duelo</strong>, an architect with an international career across Peru and Barcelona, the studio combines creativity and technical precision to bring every vision to life with a considered, timeless design.",
    "featured.eyebrow": "Selected portfolio", "featured.heading": "Projects that speak for themselves",
    "featured.sub": "A selection of renovations, retail fit-outs and new-build homes in Barcelona and beyond.",
    "featured.viewAll": "View all projects",
    "services.eyebrow": "Services", "services.heading": "Architecture, construction and real-estate strategy in Barcelona",
    "services.sub": "Four services designed to cover a project's full journey, from design to handover.",
    "services.viewAll": "View all services"
  };

  PAGE_STRINGS.ca.estudio = {
    "meta.title": "Estudi | Lemon Tree Arquitectura Barcelona",
    "meta.description": "Anna Duelo, arquitecta. Trajectòria entre el Perú i Barcelona i l'equip de Lemon Tree Arquitectura.",
    "page.eyebrow": "L'estudi", "page.heading": "Anna Duelo, arquitecta",
    "page.sub": "Estudi d'arquitectura i interiorisme amb seu a Barcelona, fundat per Anna Duelo. Treballem el disseny des d'un concepte que identifica el client amb el seu projecte, acompanyant el procés creatiu d'inici a fi.",
    "cred.degree": "Formació", "cred.degreeText": "Llicenciada en Arquitectura, Universitat Internacional de Catalunya (ESARQ), 2010",
    "cred.based": "Seu", "cred.basedText": "Barcelona, des del 2020",
    "t1.place": "Perú", "t1.text": "Col·labora amb estudis d'arquitectura peruans en projectes residencials i comercials a tot el país. Cofunda Nayaraq, col·lectiu per a la reconstrucció d'habitatges després del terratrèmol de Pisco, formant part de l'equip constructor.",
    "t2.place": "Barcelona", "t2.text": "De nou a Barcelona, funda l'estudi Duelo & Bustillo, desenvolupant projectes residencials, comercials i d'oficines a la ciutat.",
    "t3.year": "2020—Actualitat", "t3.place": "Barcelona",
    "t3.text": "Crea de forma independent Lemon Tree Arquitectura. El mateix any cofunda Absolute Properties Real Estate SA, la constructora que materialitza els projectes de l'estudi. Imparteix també formació en arquitectura per a agents immobiliaris en col·legis i associacions professionals.",
    "partners.title": "Partners i col·laboradors",
    "partners.text": "El nostre equip es complementa amb una xarxa de col·laboradors externs —interioristes, enginyeries, industrials i constructores— per portar cada projecte d'inici a fi."
  };
  PAGE_STRINGS.en.estudio = {
    "meta.title": "Studio | Lemon Tree Arquitectura Barcelona",
    "meta.description": "Anna Duelo, architect. A career spanning Peru and Barcelona, and the team behind Lemon Tree Arquitectura.",
    "page.eyebrow": "The studio", "page.heading": "Anna Duelo, architect",
    "page.sub": "Architecture and interior design studio based in Barcelona, founded by Anna Duelo. We approach design from a concept that connects the client with their project, guiding the creative process from start to finish.",
    "cred.degree": "Education", "cred.degreeText": "Degree in Architecture, International University of Catalonia (ESARQ), 2010",
    "cred.based": "Based in", "cred.basedText": "Barcelona, since 2020",
    "t1.place": "Peru", "t1.text": "Works with Peruvian architecture practices on residential and commercial projects across the country. Co-founds Nayaraq, a collective rebuilding homes after the Pisco earthquake, taking part in the construction team.",
    "t2.place": "Barcelona", "t2.text": "Back in Barcelona, founds the Duelo & Bustillo studio, developing residential, commercial and office projects in the city.",
    "t3.year": "2020—Present", "t3.place": "Barcelona",
    "t3.text": "Independently founds Lemon Tree Arquitectura. The same year, co-founds Absolute Properties Real Estate SA, the construction company that delivers the studio's projects. Also trains real-estate agents in architecture through professional colleges and associations.",
    "partners.title": "Partners & collaborators",
    "partners.text": "Our team is complemented by a network of external collaborators — interior designers, engineers, trades and construction firms — to carry each project from start to finish."
  };

  PAGE_STRINGS.ca.servicios = {
    "meta.title": "Serveis | Lemon Tree Arquitectura Barcelona",
    "meta.description": "Arquitectura i interiorisme, direcció d'obra, project management 360º i assessorament d'inversió immobiliària a Barcelona.",
    "page.eyebrow": "Serveis", "page.heading": "Del disseny a les claus a la mà",
    "page.sub": "Quatre serveis pensats per cobrir tot el recorregut d'un projecte d'arquitectura a Barcelona.",
    "s1.title": "Arquitectura i Interiorisme",
    "s1.desc": "Dissenyem arquitectura residencial, comercial i d'oficines a Barcelona, amb especial atenció a la distribució, la il·luminació, els materials i els acabats. De la reforma integral a l'obra nova, cada projecte busca l'equilibri entre estètica, funcionalitat i confort.",
    "s1.li1": "Reformes integrals d'habitatge", "s1.li2": "Interiorisme residencial i comercial", "s1.li3": "Projectes d'obra nova",
    "s2.title": "Desenvolupament de Projectes i Obres",
    "s2.desc": "Acompanyem cada projecte des de la idea fins a l'execució: desenvolupament tècnic, planificació detallada i direcció d'obra a Barcelona per a un procés fluid i sense imprevistos.",
    "s2.li1": "Projecte arquitectònic i d'interiorisme", "s2.li2": "Selecció de materials i acabats",
    "s2.li3": "Coordinació amb industrials i proveïdors", "s2.li4": "Supervisió en obra: qualitat i terminis",
    "s3.title": "Project Management 360º",
    "s3.desc": "Centralitzem la planificació, execució i control de cada etapa perquè el projecte avanci sense desviacions de pressupost ni retards, amb un procés segur i transparent d'inici a fi.",
    "s3.li1": "Gestió de permisos i llicències", "s3.li2": "Planificació de costos i terminis",
    "s3.li3": "Supervisió de proveïdors i contractistes", "s3.li4": "Control de qualitat i imprevistos",
    "s4.title": "Assessorament d'Inversió Immobiliària",
    "s4.desc": "Ajudem a prendre decisions intel·ligents en la compra, venda i optimització d'immobles a Barcelona, analitzant cada oportunitat des d'una perspectiva arquitectònica i estratègica.",
    "s4.li1": "Cerca i anàlisi de propietats", "s4.li2": "Estudis de viabilitat i valoració",
    "s4.li3": "Propostes de millora i revaloració", "s4.li4": "Assessoria en gestió i comercialització",
    "cta.heading": "Tens un projecte al cap?", "cta.text": "Parlem-ne i el convertim en un espai amb identitat.", "cta.btn": "Contacta amb l'estudi"
  };
  PAGE_STRINGS.en.servicios = {
    "meta.title": "Services | Lemon Tree Arquitectura Barcelona",
    "meta.description": "Architecture and interior design, site management, 360º project management and real-estate investment advisory in Barcelona.",
    "page.eyebrow": "Services", "page.heading": "From design to handover",
    "page.sub": "Four services designed to cover a full architecture project's journey in Barcelona.",
    "s1.title": "Architecture & Interior Design",
    "s1.desc": "We design residential, commercial and office architecture in Barcelona, with close attention to layout, lighting, materials and finishes. From full renovations to new-build homes, every project balances aesthetics, function and comfort.",
    "s1.li1": "Full home renovations", "s1.li2": "Residential and commercial interior design", "s1.li3": "New-build projects",
    "s2.title": "Project Development & Construction",
    "s2.desc": "We take every project from concept to completion: technical development, detailed planning and site management in Barcelona for a smooth process, free of surprises.",
    "s2.li1": "Architectural and interior design project", "s2.li2": "Material and finish selection",
    "s2.li3": "Coordination with trades and suppliers", "s2.li4": "On-site supervision: quality and deadlines",
    "s3.title": "360º Project Management",
    "s3.desc": "We centralise the planning, execution and control of every stage so the project moves forward without budget overruns or delays, with a secure, transparent process from start to finish.",
    "s3.li1": "Permits and licences management", "s3.li2": "Cost and schedule planning",
    "s3.li3": "Supplier and contractor oversight", "s3.li4": "Quality control and contingencies",
    "s4.title": "Real Estate Investment Advisory",
    "s4.desc": "We help clients make smart decisions when buying, selling or optimising property in Barcelona, assessing every opportunity from both an architectural and strategic perspective.",
    "s4.li1": "Property search and analysis", "s4.li2": "Feasibility studies and valuation",
    "s4.li3": "Improvement proposals and value uplift", "s4.li4": "Management and marketing advisory",
    "cta.heading": "Have a project in mind?", "cta.text": "Let's talk, and turn it into a space with identity.", "cta.btn": "Contact the studio"
  };

  PAGE_STRINGS.ca.proyectos = {
    "meta.title": "Proyectes | Lemon Tree Arquitectura Barcelona",
    "meta.description": "Reformes integrals, retail i obra nova a Barcelona. Portfolio complet de Lemon Tree Arquitectura.",
    "page.eyebrow": "Portfolio", "page.heading": "Projectes d'arquitectura i reforma a Barcelona",
    "page.sub": "Reformes integrals, locals comercials i obra nova fets a Barcelona i altres ciutats."
  };
  PAGE_STRINGS.en.proyectos = {
    "meta.title": "Projects | Lemon Tree Arquitectura Barcelona",
    "meta.description": "Full renovations, retail fit-outs and new-build homes in Barcelona. Complete Lemon Tree Arquitectura portfolio.",
    "page.eyebrow": "Portfolio", "page.heading": "Architecture and renovation projects in Barcelona",
    "page.sub": "Full renovations, commercial fit-outs and new-build projects across Barcelona and beyond."
  };

  PAGE_STRINGS.ca.contacto = {
    "meta.title": "Contacte | Lemon Tree Arquitectura Barcelona",
    "meta.description": "Parla amb Lemon Tree Arquitectura sobre el teu projecte de reforma, obra nova o interiorisme a Barcelona.",
    "page.eyebrow": "Contacte", "page.heading": "Parlem del teu projecte",
    "page.sub": "Explica'ns la teva idea i t'ajudem a donar-li forma: des de la primera visita fins a l'última clau lliurada.",
    "locationLabel": "Ubicació", "location": "Barcelona, Espanya", "socialLabel": "Xarxes",
    "form.name": "Nom", "form.email": "Email", "form.phone": "Telèfon (opcional)", "form.type": "Tipus de projecte",
    "form.type1": "Reforma integral", "form.type2": "Obra nova", "form.type3": "Interiorisme",
    "form.type4": "Retail i oficines", "form.type5": "Inversió immobiliària",
    "form.message": "Explica'ns el teu projecte", "form.submit": "Enviar missatge",
    "form.note": "En enviar s'obrirà el teu gestor de correu amb el missatge ja redactat."
  };
  PAGE_STRINGS.en.contacto = {
    "meta.title": "Contact | Lemon Tree Arquitectura Barcelona",
    "meta.description": "Talk to Lemon Tree Arquitectura about your renovation, new-build or interior design project in Barcelona.",
    "page.eyebrow": "Contact", "page.heading": "Let's talk about your project",
    "page.sub": "Tell us your idea and we'll help shape it, from the first visit to the final handover.",
    "locationLabel": "Location", "location": "Barcelona, Spain", "socialLabel": "Social",
    "form.name": "Name", "form.email": "Email", "form.phone": "Phone (optional)", "form.type": "Project type",
    "form.type1": "Full renovation", "form.type2": "New build", "form.type3": "Interior design",
    "form.type4": "Retail & offices", "form.type5": "Real estate investment",
    "form.message": "Tell us about your project", "form.submit": "Send message",
    "form.note": "Submitting opens your email client with the message ready to send."
  };

  // Copia ES desde el propio HTML de la página actual
  var ES_CACHE = {};
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    ES_CACHE[el.getAttribute("data-i18n")] = el.innerHTML;
  });
  var titleEl = document.querySelector('title');
  var descEl = document.querySelector('meta[name="description"]');
  if(titleEl) ES_CACHE["meta.title"] = titleEl.textContent;
  if(descEl) ES_CACHE["meta.description"] = descEl.getAttribute("content");
  if(!PAGE_STRINGS.es) PAGE_STRINGS.es = {};
  PAGE_STRINGS.es[PAGE] = ES_CACHE;

  function applyLanguage(lang){
    var dict = (PAGE_STRINGS[lang] && PAGE_STRINGS[lang][PAGE]) || PAGE_STRINGS.es[PAGE] || {};
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if(dict[key] !== undefined) el.innerHTML = dict[key];
    });
    if(dict["meta.title"] && titleEl) document.title = dict["meta.title"];
    if(dict["meta.description"] && descEl) descEl.setAttribute("content", dict["meta.description"]);
    document.documentElement.setAttribute("lang", lang);

    mountChrome(lang);

    if(PAGE === "home") renderFeatured(lang);
    if(PAGE === "proyectos") renderProjectFeed(lang);
    if(PAGE === "proyecto") renderProjectDetail(lang);

    var ct = UI[lang] || UI.es;
    document.querySelectorAll("[data-cat-label]").forEach(function(btn){
      var key = btn.getAttribute("data-cat-label");
      if(ct[key]) btn.textContent = ct[key];
    });

    initReveal();
    initParallax();
    try{ localStorage.setItem("ltq_lang", lang); }catch(e){}
  }

  /* ------------------------------------------------------------------ *
   * 4. HOME — destacados
   * ------------------------------------------------------------------ */
  function renderFeatured(lang){
    var lead = document.getElementById("featuredLead");
    var grid = document.getElementById("featuredGrid");
    if(!lead || !grid) return;
    var picks = PROJECTS.slice(0, 5);
    var leadP = picks[0];

    lead.href = "proyecto.html?slug=" + leadP.slug;
    lead.innerHTML =
      '<img src="'+leadP.img[0]+'" alt="'+leadP.name+' — '+catLabel(leadP.cat,lang)+', '+leadP.place+'" loading="eager">' +
      '<span class="featured-lead-caption"><h3>'+leadP.name+'</h3><span>'+leadP.place+' · '+catLabel(leadP.cat,lang)+'</span></span>';

    grid.innerHTML = picks.slice(1).map(function(p){
      return '<a class="project-media" href="proyecto.html?slug='+p.slug+'">' +
        '<img src="'+p.img[0]+'" alt="'+p.name+' — '+catLabel(p.cat,lang)+', '+p.place+'" loading="lazy">' +
      '</a>';
    }).join("");
  }

  /* ------------------------------------------------------------------ *
   * 5. PROYECTOS — listado completo sin cajas
   * ------------------------------------------------------------------ */
  var currentFilter = "todos";
  function renderProjectFeed(lang){
    var feed = document.getElementById("projectFeed");
    if(!feed) return;
    feed.innerHTML = PROJECTS.map(function(p, i){
      var wide = (i % 4 === 0) ? " is-wide" : "";
      return '' +
        '<article class="project-row'+wide+'" data-cat="'+p.cat+'">' +
          '<a class="project-media" href="proyecto.html?slug='+p.slug+'">' +
            '<img src="'+p.img[0]+'" alt="'+p.name+' — '+catLabel(p.cat,lang)+', '+p.place+'" loading="lazy">' +
          '</a>' +
          '<div class="project-caption">' +
            '<h3><a href="proyecto.html?slug='+p.slug+'">'+p.name+'</a></h3>' +
            '<div class="project-meta"><span>'+p.place+'</span><span class="dot"></span><span>'+catLabel(p.cat,lang)+'</span>'+(p.year?'<span class="dot"></span><span>'+p.year+'</span>':'')+'</div>' +
          '</div>' +
        '</article>';
    }).join("");
    applyFilter();
    initParallax();
  }
  function applyFilter(){
    document.querySelectorAll(".project-row").forEach(function(row){
      row.hidden = !(currentFilter === "todos" || row.getAttribute("data-cat") === currentFilter);
    });
  }
  document.querySelectorAll(".filter-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      currentFilter = btn.getAttribute("data-filter");
      document.querySelectorAll(".filter-btn").forEach(function(b){ b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      applyFilter();
    });
  });

  /* ------------------------------------------------------------------ *
   * 6. FICHA DE PROYECTO
   * ------------------------------------------------------------------ */
  function currentSlug(){
    var params = new URLSearchParams(window.location.search);
    return params.get("slug");
  }

  function renderProjectDetail(lang){
    var root = document.getElementById("projectDetail");
    if(!root) return;
    var t = UI[lang] || UI.es;
    var slug = currentSlug();
    var p = PROJECTS.filter(function(x){ return x.slug === slug; })[0] || PROJECTS[0];

    document.title = p.name + " · " + p.place + " — Lemon Tree Arquitectura";
    if(descEl) descEl.setAttribute("content", (p.desc[lang] || p.desc.es).slice(0, 156));

    var specs = [
      { label: t.specProject, value: t[p.scope] },
      { label: t.specLocation, value: p.place },
      p.year ? { label: t.specYear, value: p.year } : null,
      p.surface ? { label: t.specSurface, value: p.surface } : null,
      p.builder ? { label: t.specBuilder, value: p.builder } : null
    ].filter(Boolean);

    var galleryImgs = p.img;
    var galleryHTML = galleryImgs.map(function(src, i){
      var big = (galleryImgs.length > 1 && i === 0) ? " span-2" : "";
      return '<button type="button" class="'+big.trim()+'" data-index="'+i+'" aria-label="'+p.name+' — '+(i+1)+'">' +
        '<img src="'+src+'" alt="'+p.name+' — '+t.specLocation+' '+p.place+'" loading="lazy">' +
      '</button>';
    }).join("");

    var related = PROJECTS.filter(function(x){ return x.slug !== p.slug && x.cat === p.cat; });
    if(related.length < 3){
      PROJECTS.forEach(function(x){ if(related.length < 3 && x.slug !== p.slug && related.indexOf(x) === -1) related.push(x); });
    }
    related = related.slice(0,3);

    root.innerHTML = '' +
    '<section class="pd-hero parallax-host">' +
      '<div class="pd-hero-media"><img class="parallax-img" src="'+p.img[0]+'" alt=""></div>' +
      '<div class="pd-hero-scrim"></div>' +
      '<div class="pd-hero-inner"><div class="container">' +
        '<p class="pd-tag">'+catLabel(p.cat,lang)+'</p>' +
        '<h1 class="pd-title">'+p.name+'</h1>' +
        '<p class="pd-place">'+p.place+'</p>' +
      '</div></div>' +
    '</section>' +
    '<div class="pd-specs">' + specs.map(function(s){
      return '<div class="pd-spec"><span>'+s.label+'</span><strong>'+s.value+'</strong></div>';
    }).join("") + '</div>' +
    '<div class="pd-desc reveal">' +
      '<p>'+ (p.desc[lang] || p.desc.es) +'</p>' +
      (p.credit ? '<p class="pd-credit">'+t.photoBy+': '+p.credit+'</p>' : '') +
    '</div>' +
    '<div class="pd-gallery">'+ galleryHTML +'</div>' +
    '<section class="pd-related">' +
      '<div class="container">' +
        '<p class="eyebrow">'+t.related+'</p>' +
        '<div class="pd-related-grid">' + related.map(function(r){
          return '<a class="project-media" href="proyecto.html?slug='+r.slug+'">' +
            '<img src="'+r.img[0]+'" alt="'+r.name+'" loading="lazy" style="aspect-ratio:4/3.2;height:auto;">' +
          '</a>';
        }).join("") + '</div>' +
        '<p style="margin-top:2.4rem;"><a class="btn btn-ghost" href="proyectos.html">← '+t.back+'</a></p>' +
      '</div>' +
    '</section>';

    // lightbox
    root.querySelectorAll(".pd-gallery button").forEach(function(btn){
      btn.addEventListener("click", function(){
        openLightbox(galleryImgs, parseInt(btn.getAttribute("data-index"), 10));
      });
    });

    initParallax();
  }

  /* ------------------------------------------------------------------ *
   * 7. LIGHTBOX
   * ------------------------------------------------------------------ */
  var lightboxRoot, lbImages = [], lbIndex = 0;
  function ensureLightbox(){
    if(lightboxRoot) return;
    lightboxRoot = document.createElement("div");
    lightboxRoot.className = "lightbox";
    lightboxRoot.innerHTML =
      '<button type="button" class="lightbox-close" aria-label="Cerrar">✕</button>' +
      '<button type="button" class="lightbox-prev" aria-label="Anterior">‹</button>' +
      '<img class="lightbox-img" src="" alt="">' +
      '<button type="button" class="lightbox-next" aria-label="Siguiente">›</button>' +
      '<span class="lightbox-counter"></span>';
    document.body.appendChild(lightboxRoot);
    lightboxRoot.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    lightboxRoot.querySelector(".lightbox-prev").addEventListener("click", function(){ stepLightbox(-1); });
    lightboxRoot.querySelector(".lightbox-next").addEventListener("click", function(){ stepLightbox(1); });
    lightboxRoot.addEventListener("click", function(e){ if(e.target === lightboxRoot) closeLightbox(); });
    document.addEventListener("keydown", function(e){
      if(!lightboxRoot.classList.contains("is-open")) return;
      if(e.key === "Escape") closeLightbox();
      if(e.key === "ArrowLeft") stepLightbox(-1);
      if(e.key === "ArrowRight") stepLightbox(1);
    });
    var touchStartX = null;
    lightboxRoot.addEventListener("touchstart", function(e){ touchStartX = e.changedTouches[0].clientX; }, {passive:true});
    lightboxRoot.addEventListener("touchend", function(e){
      if(touchStartX === null) return;
      var dx = e.changedTouches[0].clientX - touchStartX;
      if(Math.abs(dx) > 40) stepLightbox(dx > 0 ? -1 : 1);
      touchStartX = null;
    }, {passive:true});
  }
  function renderLightbox(){
    var img = lightboxRoot.querySelector(".lightbox-img");
    img.src = lbImages[lbIndex];
    var counter = lightboxRoot.querySelector(".lightbox-counter");
    counter.textContent = (lbIndex+1) + " / " + lbImages.length;
    var multi = lbImages.length > 1;
    lightboxRoot.querySelector(".lightbox-prev").style.display = multi ? "" : "none";
    lightboxRoot.querySelector(".lightbox-next").style.display = multi ? "" : "none";
  }
  function openLightbox(images, index){
    ensureLightbox();
    lbImages = images; lbIndex = index || 0;
    renderLightbox();
    lightboxRoot.classList.add("is-open");
    document.documentElement.style.overflow = "hidden";
  }
  function closeLightbox(){
    if(!lightboxRoot) return;
    lightboxRoot.classList.remove("is-open");
    document.documentElement.style.overflow = "";
  }
  function stepLightbox(dir){
    lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
    renderLightbox();
  }

  /* ------------------------------------------------------------------ *
   * 8. PARALLAX — imágenes de cabecera con desplazamiento suave
   * ------------------------------------------------------------------ */
  var parallaxEls = [];
  function initParallax(){
    parallaxEls = Array.prototype.slice.call(document.querySelectorAll(".parallax-img"));
    if(reduceMotion || !parallaxEls.length) return;
    onParallaxScroll();
  }
  var ticking = false;
  function onParallaxScroll(){
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(function(){
      parallaxEls.forEach(function(img){
        var host = img.closest(".parallax-host") || img.parentElement;
        var rect = host.getBoundingClientRect();
        if(rect.bottom < 0 || rect.top > window.innerHeight) return;
        var progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        var shift = (progress - 0.5) * 60; // rango de desplazamiento en px
        img.style.transform = "translateY(" + shift.toFixed(1) + "px) scale(1.06)";
      });
      ticking = false;
    });
  }
  if(!reduceMotion){
    document.addEventListener("scroll", onParallaxScroll, { passive: true });
    window.addEventListener("resize", onParallaxScroll);
  }

  /* ------------------------------------------------------------------ *
   * 9. Header scroll state
   * ------------------------------------------------------------------ */
  function onHeaderScroll(){
    var header = document.getElementById("siteHeader");
    if(!header) return;
    var scrolled = window.scrollY > 30;
    var wasScrolled = header.classList.contains("is-scrolled");
    header.classList.toggle("is-scrolled", scrolled);
    if(HERO_DARK && scrolled !== wasScrolled){
      var logo = document.getElementById("headerLogo");
      if(logo) logo.src = scrolled ? LOGO_BLACK : LOGO_WHITE;
    }
  }
  document.addEventListener("scroll", onHeaderScroll, { passive: true });

  /* ------------------------------------------------------------------ *
   * 10. Reveal-on-scroll
   * ------------------------------------------------------------------ */
  var io;
  function initReveal(){
    document.querySelectorAll(".section-head, .service-card, .project-row, .timeline-item, .intro-inner, .contact-grid, .pd-desc, .credentials")
      .forEach(function(el){ el.classList.add("reveal"); });
    if(!("IntersectionObserver" in window)){
      document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("is-visible"); });
      return;
    }
    if(io) io.disconnect();
    io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){ entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { threshold: .1, rootMargin: "0px 0px -60px 0px" });
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function(el){ io.observe(el); });
  }

  /* ------------------------------------------------------------------ *
   * 11. Formulario de contacto → mailto
   * ------------------------------------------------------------------ */
  var form = document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var name = document.getElementById("f-name").value.trim();
      var email = document.getElementById("f-email").value.trim();
      var phone = document.getElementById("f-phone").value.trim();
      var type = document.getElementById("f-type").value;
      var message = document.getElementById("f-message").value.trim();
      var subject = "Nuevo proyecto — " + type + (name ? " — " + name : "");
      var bodyLines = ["Nombre: " + name, "Email: " + email, phone ? "Teléfono: " + phone : null, "Tipo de proyecto: " + type, "", message].filter(Boolean);
      window.location.href = "mailto:info@lemontreearquitectura.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(bodyLines.join("\n"));
    });
  }

  /* ------------------------------------------------------------------ *
   * 12. Init
   * ------------------------------------------------------------------ */
  var savedLang = "es";
  try{ savedLang = localStorage.getItem("ltq_lang") || "es"; }catch(e){}
  applyLanguage(savedLang);
  onHeaderScroll();

})();
