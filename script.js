/* ==========================================================================
   LEMON TREE ARQUITECTURA — script.js
   Sin dependencias externas. i18n ES/CA/EN + portfolio generativo + UI.
   ========================================================================== */
(function(){
  "use strict";

  /* ------------------------------------------------------------------ *
   * 1. TRADUCCIONES (ES vive en el HTML; aquí CA y EN)
   * ------------------------------------------------------------------ */
  var STRINGS = {
    ca: {
      "meta.title": "Lemon Tree Arquitectura | Estudi d'Arquitectura a Barcelona",
      "meta.description": "Estudi d'arquitectura i interiorisme a Barcelona. Reformes integrals, obra nova, retail i project management, dirigit per l'arquitecta Anna Duelo.",
      "a11y.skip": "Salta al contingut",
      "nav.studio": "Estudi", "nav.services": "Serveis", "nav.projects": "Projectes", "nav.contact": "Contacte",
      "hero.eyebrow": "Estudi d'arquitectura i interiorisme — Barcelona",
      "hero.title": "Arquitectura i interiorisme<br>amb identitat, des de Barcelona",
      "hero.sub": "Dissenyem i executem reformes integrals, interiorisme, obra nova i espais comercials a Barcelona, acompanyant cada projecte des de la cerca de l'immoble fins a la direcció d'obra.",
      "hero.ctaProjects": "Veure projectes",
      "hero.ctaContact": "Parlem del teu projecte",
      "hero.trust": "Estudi propi des del 2020 · Projectes residencials, comercials i d'oficines",
      "intro.eyebrow": "L'estudi",
      "intro.heading": "Cada espai<br>explica una història",
      "intro.p1": "A <strong>Lemon Tree Estudi</strong> creiem que l'arquitectura i l'interiorisme han de respondre a qui habita l'espai. Amb seu a Barcelona, treballem reformes integrals, interiorisme i obra nova amb un enfocament a mida, donant forma a projectes residencials, comercials i d'oficines que reflecteixen la identitat de cada client.",
      "intro.p2": "Oferim un servei integral: acompanyem cada projecte des de la cerca de l'immoble fins a l'execució de l'obra, incloent-hi la direcció tècnica, la selecció de materials i, si cal, la creació de marca i imatge corporativa.",
      "intro.signature": "Dirigit per <strong>Anna Duelo</strong>, arquitecta amb trajectòria internacional entre el Perú i Barcelona, l'estudi combina creativitat i rigor tècnic per materialitzar cada visió amb un disseny precís i atemporal.",
      "services.eyebrow": "Serveis",
      "services.heading": "Arquitectura, obra i estratègia immobiliària a Barcelona",
      "services.sub": "Quatre serveis pensats per cobrir tot el recorregut d'un projecte: del disseny a les claus a la mà.",
      "services.s1.title": "Arquitectura i Interiorisme",
      "services.s1.desc": "Dissenyem arquitectura residencial, comercial i d'oficines a Barcelona, amb especial atenció a la distribució, la il·luminació, els materials i els acabats. De la reforma integral a l'obra nova, cada projecte busca l'equilibri entre estètica, funcionalitat i confort.",
      "services.s1.li1": "Reformes integrals d'habitatge",
      "services.s1.li2": "Interiorisme residencial i comercial",
      "services.s1.li3": "Projectes d'obra nova",
      "services.s2.title": "Desenvolupament de Projectes i Obres",
      "services.s2.desc": "Acompanyem cada projecte des de la idea fins a l'execució: desenvolupament tècnic, planificació detallada i direcció d'obra a Barcelona per a un procés fluid i sense imprevistos.",
      "services.s2.li1": "Projecte arquitectònic i d'interiorisme",
      "services.s2.li2": "Selecció de materials i acabats",
      "services.s2.li3": "Coordinació amb industrials i proveïdors",
      "services.s2.li4": "Supervisió en obra: qualitat i terminis",
      "services.s3.title": "Project Management 360º",
      "services.s3.desc": "Centralitzem la planificació, execució i control de cada etapa perquè el projecte avanci sense desviacions de pressupost ni retards, amb un procés segur i transparent d'inici a fi.",
      "services.s3.li1": "Gestió de permisos i llicències",
      "services.s3.li2": "Planificació de costos i terminis",
      "services.s3.li3": "Supervisió de proveïdors i contractistes",
      "services.s3.li4": "Control de qualitat i imprevistos",
      "services.s4.title": "Assessorament d'Inversió Immobiliària",
      "services.s4.desc": "Ajudem a prendre decisions intel·ligents en la compra, venda i optimització d'immobles a Barcelona, analitzant cada oportunitat des d'una perspectiva arquitectònica i estratègica.",
      "services.s4.li1": "Cerca i anàlisi de propietats",
      "services.s4.li2": "Estudis de viabilitat i valoració",
      "services.s4.li3": "Propostes de millora i revaloració",
      "services.s4.li4": "Assessoria en gestió i comercialització",
      "projects.eyebrow": "Portfolio",
      "projects.heading": "Projectes d'arquitectura i reforma a Barcelona",
      "projects.sub": "Reformes integrals, locals comercials i obra nova fets a Barcelona i altres ciutats.",
      "projects.filter.all": "Tots", "projects.filter.reforma": "Reforma",
      "projects.filter.contract": "Contract & Retail", "projects.filter.new": "Obra Nova",
      "studio.eyebrow": "Trajectòria",
      "studio.heading": "Anna Duelo, arquitecta",
      "studio.sub": "Llicenciada en Arquitectura per la Universitat Internacional de Catalunya (ESARQ), 2010.",
      "studio.t1.place": "Perú",
      "studio.t1.text": "Col·labora amb estudis d'arquitectura peruans en projectes residencials i comercials a tot el país. Cofunda Nayaraq, col·lectiu per a la reconstrucció d'habitatges després del terratrèmol de Pisco, formant part de l'equip constructor.",
      "studio.t2.place": "Barcelona",
      "studio.t2.text": "De nou a Barcelona, funda l'estudi Duelo & Bustillo, desenvolupant projectes residencials, comercials i d'oficines a la ciutat.",
      "studio.t3.year": "2020—Actualitat",
      "studio.t3.place": "Barcelona",
      "studio.t3.text": "Crea de forma independent Lemon Tree Arquitectura. El mateix any cofunda Absolute Properties Real Estate SA, la constructora que materialitza els projectes de l'estudi. Imparteix també formació en arquitectura per a agents immobiliaris en col·legis i associacions professionals.",
      "studio.partners.title": "Partners i col·laboradors",
      "studio.partners.text": "El nostre equip es complementa amb una xarxa de col·laboradors externs —interioristes, enginyeries, industrials i constructores— per portar cada projecte d'inici a fi.",
      "contact.eyebrow": "Contacte",
      "contact.heading": "Parlem del teu projecte",
      "contact.sub": "Explica'ns la teva idea i t'ajudem a donar-li forma: des de la primera visita fins a l'última clau lliurada.",
      "contact.locationLabel": "Ubicació", "contact.location": "Barcelona, Espanya",
      "contact.socialLabel": "Xarxes",
      "contact.form.name": "Nom", "contact.form.email": "Email", "contact.form.phone": "Telèfon (opcional)",
      "contact.form.type": "Tipus de projecte",
      "contact.form.type1": "Reforma integral", "contact.form.type2": "Obra nova",
      "contact.form.type3": "Interiorisme", "contact.form.type4": "Retail i oficines",
      "contact.form.type5": "Inversió immobiliària",
      "contact.form.message": "Explica'ns el teu projecte",
      "contact.form.submit": "Enviar missatge",
      "contact.form.note": "En enviar s'obrirà el teu gestor de correu amb el missatge ja redactat.",
      "footer.tagline": "Arquitectura i interiorisme a Barcelona",
      "footer.a11y": "Accessibilitat", "footer.privacy": "Política de Privacitat",
      "footer.cookies": "Política de Cookies", "footer.legal": "Avís Legal",
      "footer.copy": "© 2026 Lemon Tree Arquitectura. Estudi d'arquitectura a Barcelona."
    },
    en: {
      "meta.title": "Lemon Tree Arquitectura | Architecture Studio in Barcelona",
      "meta.description": "Architecture and interior design studio in Barcelona. Full renovations, new-build homes, retail fit-outs and project management, led by architect Anna Duelo.",
      "a11y.skip": "Skip to content",
      "nav.studio": "Studio", "nav.services": "Services", "nav.projects": "Projects", "nav.contact": "Contact",
      "hero.eyebrow": "Architecture & interior design studio — Barcelona",
      "hero.title": "Architecture and interior design<br>with identity, from Barcelona",
      "hero.sub": "We design and deliver full renovations, interior design, new-build homes and commercial spaces in Barcelona, guiding every project from the property search through to site management.",
      "hero.ctaProjects": "View projects",
      "hero.ctaContact": "Talk about your project",
      "hero.trust": "Independent studio since 2020 · Residential, commercial and office projects",
      "intro.eyebrow": "The studio",
      "intro.heading": "Every space<br>tells a story",
      "intro.p1": "At <strong>Lemon Tree Estudio</strong> we believe architecture and interior design should respond to the people who live in a space. Based in Barcelona, we work on full renovations, interior design and new-build projects with a tailored approach, shaping residential, commercial and office projects that reflect each client's identity.",
      "intro.p2": "We offer a complete service, accompanying every project from the property search through to construction, including technical direction, material selection and, where needed, brand identity.",
      "intro.signature": "Led by <strong>Anna Duelo</strong>, an architect with an international career across Peru and Barcelona, the studio combines creativity and technical precision to bring every vision to life with a considered, timeless design.",
      "services.eyebrow": "Services",
      "services.heading": "Architecture, construction and real-estate strategy in Barcelona",
      "services.sub": "Four services designed to cover a project's full journey, from design to handover.",
      "services.s1.title": "Architecture & Interior Design",
      "services.s1.desc": "We design residential, commercial and office architecture in Barcelona, with close attention to layout, lighting, materials and finishes. From full renovations to new-build homes, every project balances aesthetics, function and comfort.",
      "services.s1.li1": "Full home renovations",
      "services.s1.li2": "Residential and commercial interior design",
      "services.s1.li3": "New-build projects",
      "services.s2.title": "Project Development & Construction",
      "services.s2.desc": "We take every project from concept to completion: technical development, detailed planning and site management in Barcelona for a smooth process, free of surprises.",
      "services.s2.li1": "Architectural and interior design project",
      "services.s2.li2": "Material and finish selection",
      "services.s2.li3": "Coordination with trades and suppliers",
      "services.s2.li4": "On-site supervision: quality and deadlines",
      "services.s3.title": "360º Project Management",
      "services.s3.desc": "We centralise the planning, execution and control of every stage so the project moves forward without budget overruns or delays, with a secure, transparent process from start to finish.",
      "services.s3.li1": "Permits and licences management",
      "services.s3.li2": "Cost and schedule planning",
      "services.s3.li3": "Supplier and contractor oversight",
      "services.s3.li4": "Quality control and contingencies",
      "services.s4.title": "Real Estate Investment Advisory",
      "services.s4.desc": "We help clients make smart decisions when buying, selling or optimising property in Barcelona, assessing every opportunity from both an architectural and strategic perspective.",
      "services.s4.li1": "Property search and analysis",
      "services.s4.li2": "Feasibility studies and valuation",
      "services.s4.li3": "Improvement proposals and value uplift",
      "services.s4.li4": "Management and marketing advisory",
      "projects.eyebrow": "Portfolio",
      "projects.heading": "Architecture and renovation projects in Barcelona",
      "projects.sub": "Full renovations, commercial fit-outs and new-build projects across Barcelona and beyond.",
      "projects.filter.all": "All", "projects.filter.reforma": "Renovation",
      "projects.filter.contract": "Contract & Retail", "projects.filter.new": "New Build",
      "studio.eyebrow": "Career",
      "studio.heading": "Anna Duelo, architect",
      "studio.sub": "Degree in Architecture from the International University of Catalonia (ESARQ), 2010.",
      "studio.t1.place": "Peru",
      "studio.t1.text": "Works with Peruvian architecture practices on residential and commercial projects across the country. Co-founds Nayaraq, a collective rebuilding homes after the Pisco earthquake, taking part in the construction team.",
      "studio.t2.place": "Barcelona",
      "studio.t2.text": "Back in Barcelona, founds the Duelo & Bustillo studio, developing residential, commercial and office projects in the city.",
      "studio.t3.year": "2020—Present",
      "studio.t3.place": "Barcelona",
      "studio.t3.text": "Independently founds Lemon Tree Arquitectura. The same year, co-founds Absolute Properties Real Estate SA, the construction company that delivers the studio's projects. Also trains real-estate agents in architecture through professional colleges and associations.",
      "studio.partners.title": "Partners & collaborators",
      "studio.partners.text": "Our team is complemented by a network of external collaborators — interior designers, engineers, trades and construction firms — to carry each project from start to finish.",
      "contact.eyebrow": "Contact",
      "contact.heading": "Let's talk about your project",
      "contact.sub": "Tell us your idea and we'll help shape it, from the first visit to the final handover.",
      "contact.locationLabel": "Location", "contact.location": "Barcelona, Spain",
      "contact.socialLabel": "Social",
      "contact.form.name": "Name", "contact.form.email": "Email", "contact.form.phone": "Phone (optional)",
      "contact.form.type": "Project type",
      "contact.form.type1": "Full renovation", "contact.form.type2": "New build",
      "contact.form.type3": "Interior design", "contact.form.type4": "Retail & offices",
      "contact.form.type5": "Real estate investment",
      "contact.form.message": "Tell us about your project",
      "contact.form.submit": "Send message",
      "contact.form.note": "Submitting opens your email client with the message ready to send.",
      "footer.tagline": "Architecture and interior design in Barcelona",
      "footer.a11y": "Accessibility", "footer.privacy": "Privacy Policy",
      "footer.cookies": "Cookie Policy", "footer.legal": "Legal Notice",
      "footer.copy": "© 2026 Lemon Tree Arquitectura. Architecture studio in Barcelona."
    }
  };

  // Copia ES desde el propio HTML para poder volver a ella sin recargar
  var ES_CACHE = {};
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    ES_CACHE[el.getAttribute("data-i18n")] = el.innerHTML;
  });
  ES_CACHE["meta.title"] = document.title;
  ES_CACHE["meta.description"] = document.querySelector('meta[name="description"]').getAttribute("content");
  STRINGS.es = ES_CACHE;

  var HTML_LANG = { es: "es", ca: "ca", en: "en" };

  function applyLanguage(lang){
    var dict = STRINGS[lang] || STRINGS.es;
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if(dict[key] !== undefined) el.innerHTML = dict[key];
    });
    if(dict["meta.title"]) document.title = dict["meta.title"];
    var metaDesc = document.querySelector('meta[name="description"]');
    if(metaDesc && dict["meta.description"]) metaDesc.setAttribute("content", dict["meta.description"]);
    document.querySelectorAll('meta[property="og:title"]').forEach(function(m){ if(dict["meta.title"]) m.setAttribute("content", dict["meta.title"]); });
    document.querySelectorAll('meta[property="og:description"]').forEach(function(m){ if(dict["meta.description"]) m.setAttribute("content", dict["meta.description"]); });

    document.documentElement.setAttribute("lang", HTML_LANG[lang] || "es");
    document.querySelectorAll(".lang-btn").forEach(function(btn){
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });
    renderProjects(lang);
    try{ localStorage.setItem("ltq_lang", lang); }catch(e){}
  }

  document.querySelectorAll(".lang-btn").forEach(function(btn){
    btn.addEventListener("click", function(){ applyLanguage(btn.getAttribute("data-lang")); });
  });

  /* ------------------------------------------------------------------ *
   * 2. PORTFOLIO — datos de proyecto + elevaciones generativas en SVG
   * ------------------------------------------------------------------ */
  var PROJECTS = [
    { name: "Baumes Residencial", place: "Pallejà",                     cat: "reforma",  seed: 11,  img: "https://lemontreearquitectura.com/wp-content/uploads/2025/02/MMF_2025_02_NarcisMonturiol_01-scaled.jpg" },
    { name: "API Center",          place: "Barcelona",                  cat: "contract", seed: 22,  img: "https://lemontreearquitectura.com/wp-content/uploads/2025/02/MMF_2024_07_Apicenter_7-scaled.jpg" },
    { name: "Oficina Estética",    place: "Madrid",                     cat: "contract", seed: 33,  img: "https://lemontreearquitectura.com/wp-content/uploads/2025/02/estetica-6.jpg" },
    { name: "Sant Just",           place: "Sant Just Desvern",          cat: "reforma",  seed: 44,  img: "https://lemontreearquitectura.com/wp-content/uploads/2025/02/SantJust_07-scaled.jpg" },
    { name: "Aragó",               place: "Barcelona",                  cat: "reforma",  seed: 55,  img: "https://lemontreearquitectura.com/wp-content/uploads/2025/02/arago-11-scaled.jpg" },
    { name: "Bonsuccés",           place: "Barcelona",                  cat: "reforma",  seed: 66,  img: "https://lemontreearquitectura.com/wp-content/uploads/2025/02/bonsucces-1-scaled.jpg" },
    { name: "Centro de Yoga",      place: "Pallejà",                    cat: "contract", seed: 77,  img: "https://lemontreearquitectura.com/wp-content/uploads/2025/02/yoga-2.jpg" },
    { name: "Manigua",             place: "Barcelona",                  cat: "contract", seed: 88,  img: "https://lemontreearquitectura.com/wp-content/uploads/2025/02/manigua-3.jpg" },
    { name: "Llançà",              place: "Barcelona",                  cat: "obranueva",seed: 99,  img: "https://lemontreearquitectura.com/wp-content/uploads/2025/02/llanca-2.jpg" },
    { name: "Urbine Distrito Cultural", place: "L'Hospitalet de Llobregat", cat: "contract", seed: 111, img: "https://lemontreearquitectura.com/wp-content/uploads/2025/02/urbine-22-scaled.jpg" },
    { name: "Bruc",                place: "Barcelona",                  cat: "reforma",  seed: 122, img: "https://lemontreearquitectura.com/wp-content/uploads/2025/02/bruc-4-scaled.jpg" },
    { name: "Casa Ecológica",      place: "Lima",                       cat: "obranueva",seed: 133, img: "https://lemontreearquitectura.com/wp-content/uploads/2025/02/casa-ecologica-5.jpg" }
  ];

  var CAT_LABELS = {
    es: { reforma: "Reforma", contract: "Contract & Retail", obranueva: "Obra Nueva" },
    ca: { reforma: "Reforma", contract: "Contract & Retail", obranueva: "Obra Nova" },
    en: { reforma: "Renovation", contract: "Contract & Retail", obranueva: "New Build" }
  };

  // PRNG determinista (mulberry32) para que cada proyecto tenga siempre el mismo dibujo
  function mulberry32(a){
    return function(){
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Genera una elevación arquitectónica lineal abstracta y única por proyecto
  function elevationSVG(project){
    var rnd = mulberry32(project.seed);
    var W = 400, H = 300;
    var floors = project.cat === "contract" ? 2 + Math.floor(rnd() * 2) : 3 + Math.floor(rnd() * 3);
    var baseY = 250;
    var bodyW = 220 + rnd() * 90;
    var x0 = (W - bodyW) / 2;
    var floorH = (baseY - 60) / floors;
    var parts = [];

    parts.push('<rect x="0" y="0" width="'+W+'" height="'+H+'" fill="none"/>');
    parts.push('<line x1="0" y1="'+baseY+'" x2="'+W+'" y2="'+baseY+'" stroke="currentColor" stroke-width="1" opacity=".5"/>');

    if(project.cat === "obranueva"){
      // volumen contemporáneo escalonado
      var step = bodyW * 0.22;
      parts.push('<path d="M'+x0+' '+baseY+' L'+x0+' '+(baseY-floorH*floors)+' L'+(x0+bodyW-step)+' '+(baseY-floorH*floors)+' L'+(x0+bodyW-step)+' '+(baseY-floorH*(floors-1))+' L'+(x0+bodyW)+' '+(baseY-floorH*(floors-1))+' L'+(x0+bodyW)+' '+baseY+' Z" fill="none" stroke="currentColor" stroke-width="1.6"/>');
    } else if(project.cat === "contract"){
      // planta baja acristalada + fachada de cuadrícula
      parts.push('<rect x="'+x0+'" y="'+(baseY-floorH*floors)+'" width="'+bodyW+'" height="'+(floorH*floors)+'" fill="none" stroke="currentColor" stroke-width="1.6"/>');
      var mullions = 5 + Math.floor(rnd()*3);
      for(var m=1;m<mullions;m++){
        var mx = x0 + (bodyW/mullions)*m;
        parts.push('<line x1="'+mx+'" y1="'+(baseY-floorH)+'" x2="'+mx+'" y2="'+baseY+'" stroke="currentColor" stroke-width="1" opacity=".55"/>');
      }
      parts.push('<line x1="'+x0+'" y1="'+(baseY-floorH)+'" x2="'+(x0+bodyW)+'" y2="'+(baseY-floorH)+'" stroke="currentColor" stroke-width="1.2"/>');
    } else {
      // residencial: cubierta a dos aguas sutil
      var roofH = 22 + rnd()*14;
      parts.push('<path d="M'+(x0-10)+' '+(baseY-floorH*floors)+' L'+(x0+bodyW/2)+' '+(baseY-floorH*floors-roofH)+' L'+(x0+bodyW+10)+' '+(baseY-floorH*floors)+'" fill="none" stroke="currentColor" stroke-width="1.6"/>');
      parts.push('<rect x="'+x0+'" y="'+(baseY-floorH*floors)+'" width="'+bodyW+'" height="'+(floorH*floors)+'" fill="none" stroke="currentColor" stroke-width="1.6"/>');
    }

    // ventanas
    var cols = 3 + Math.floor(rnd()*3);
    for(var f=0; f<floors; f++){
      var fy = baseY - floorH*(f+1) + floorH*0.22;
      var fh = floorH*0.56;
      for(var c=0;c<cols;c++){
        if(project.cat==="contract" && f===0) continue; // planta baja acristalada ya dibujada
        if(rnd() < 0.14) continue; // hueco ocasional
        var cw = (bodyW - 24) / cols;
        var cx = x0 + 12 + c*cw + cw*0.12;
        var ww = cw*0.62;
        parts.push('<rect x="'+cx.toFixed(1)+'" y="'+fy.toFixed(1)+'" width="'+ww.toFixed(1)+'" height="'+fh.toFixed(1)+'" fill="none" stroke="currentColor" stroke-width="1" opacity=".8"/>');
      }
    }

    // línea de terreno / vegetación mínima
    parts.push('<line x1="'+(x0-46)+'" y1="'+baseY+'" x2="'+x0+'" y2="'+baseY+'" stroke="currentColor" stroke-width="1"/>');
    parts.push('<line x1="'+(x0+bodyW)+'" y1="'+baseY+'" x2="'+(x0+bodyW+46)+'" y2="'+baseY+'" stroke="currentColor" stroke-width="1"/>');

    return '<svg viewBox="0 0 '+W+' '+H+'" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+project.name+'">'+
      '<rect width="'+W+'" height="'+H+'" fill="none"/>' + parts.join("") + '</svg>';
  }

  var grid = document.getElementById("projectsGrid");

  function renderProjects(lang){
    var labels = CAT_LABELS[lang] || CAT_LABELS.es;
    grid.innerHTML = "";

    PROJECTS.forEach(function(p){
      var article = document.createElement("article");
      article.className = "project-card reveal";
      article.setAttribute("data-cat", p.cat);

      var figure = document.createElement("div");
      figure.className = "project-figure";

      var img = document.createElement("img");
      img.src = p.img;
      img.alt = p.name + " — " + labels[p.cat] + ", " + p.place;
      img.loading = "lazy";
      img.decoding = "async";
      img.className = "photo";
      // Si la fotografía original no está disponible, se sustituye por una
      // elevación generada para que la tarjeta nunca quede vacía.
      img.addEventListener("error", function(){
        figure.innerHTML = elevationSVG(p);
      }, { once: true });
      figure.appendChild(img);

      var body = document.createElement("div");
      body.className = "project-body";
      var tag = document.createElement("span");
      tag.className = "project-tag";
      tag.textContent = labels[p.cat];
      var name = document.createElement("h3");
      name.className = "project-name";
      name.textContent = p.name;
      var place = document.createElement("p");
      place.className = "project-place";
      place.textContent = p.place;
      body.appendChild(tag); body.appendChild(name); body.appendChild(place);

      article.appendChild(figure);
      article.appendChild(body);
      grid.appendChild(article);
    });

    initReveal(); // los nuevos nodos necesitan observador
    applyActiveFilter();
  }

  var currentFilter = "todos";
  function applyActiveFilter(){
    document.querySelectorAll(".project-card").forEach(function(card){
      var show = currentFilter === "todos" || card.getAttribute("data-cat") === currentFilter;
      card.hidden = !show;
    });
  }
  document.querySelectorAll(".filter-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      currentFilter = btn.getAttribute("data-filter");
      document.querySelectorAll(".filter-btn").forEach(function(b){ b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      applyActiveFilter();
    });
  });

  /* ------------------------------------------------------------------ *
   * 3. HEADER en scroll + menú móvil
   * ------------------------------------------------------------------ */
  var header = document.getElementById("siteHeader");
  function onScroll(){ header.classList.toggle("is-scrolled", window.scrollY > 30); }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var menuToggle = document.getElementById("menuToggle");
  var mobileNav = document.getElementById("mobileNav");
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

  /* ------------------------------------------------------------------ *
   * 4. Reveal-on-scroll
   * ------------------------------------------------------------------ */
  var io;
  function initReveal(){
    document.querySelectorAll(".section-head, .service-card, .project-card, .timeline-item, .intro-inner, .contact-grid")
      .forEach(function(el){ el.classList.add("reveal"); });

    if(!("IntersectionObserver" in window)){
      document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("is-visible"); });
      return;
    }
    if(io) io.disconnect();
    io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: "0px 0px -60px 0px" });
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function(el){ io.observe(el); });
  }

  /* ------------------------------------------------------------------ *
   * 5. Formulario de contacto → mailto (sin backend)
   * ------------------------------------------------------------------ */
  var form = document.getElementById("contactForm");
  form.addEventListener("submit", function(e){
    e.preventDefault();
    var name = document.getElementById("f-name").value.trim();
    var email = document.getElementById("f-email").value.trim();
    var phone = document.getElementById("f-phone").value.trim();
    var type = document.getElementById("f-type").value;
    var message = document.getElementById("f-message").value.trim();

    var subject = "Nuevo proyecto — " + type + (name ? " — " + name : "");
    var bodyLines = [
      "Nombre: " + name,
      "Email: " + email,
      phone ? "Teléfono: " + phone : null,
      "Tipo de proyecto: " + type,
      "",
      message
    ].filter(Boolean);

    var mailto = "mailto:info@lemontreearquitectura.com" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(bodyLines.join("\n"));

    window.location.href = mailto;
  });

  /* ------------------------------------------------------------------ *
   * 6. Init
   * ------------------------------------------------------------------ */
  var savedLang = "es";
  try{ savedLang = localStorage.getItem("ltq_lang") || "es"; }catch(e){}
  applyLanguage(savedLang);

})();
