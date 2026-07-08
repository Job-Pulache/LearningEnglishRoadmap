
const CAMPS = [
  {
    code:'A1', name:'Base Camp', subtitle:'Principiante', duration:'2–3 meses',
    elevation:'0m', visibility:'Baja — es normal no entender casi nada al inicio',
    desc:'El primer contacto real con el idioma: sonidos nuevos, la estructura mínima de una frase y el vocabulario que usarás todos los días.',
    topics:[
      'Alfabeto y pronunciación — sonidos que no existen en español (/θ/, /ð/, /ɪ/ vs /iː/)',
      'Verbo "to be" y presente simple',
      'Vocabulario esencial: números, colores, familia, objetos cotidianos',
      'Preguntas básicas y small talk: saludar, presentarte',
      'Artículos, pronombres y plurales'
    ],
    dev:'Lee nombres de variables y comentarios simples en inglés. Familiarízate con el idioma de la interfaz de tu editor y de la documentación básica.'
  },
  {
    code:'A2', name:'Sendero', subtitle:'Elemental', duration:'3 meses',
    elevation:'1,200m', visibility:'Media — reconoces patrones aunque te falte vocabulario',
    desc:'Ya sostienes conversaciones cortas del día a día: puedes hablar de lo que hiciste, lo que harás y comparar cosas.',
    topics:[
      'Pasado simple — verbos regulares e irregulares',
      'Futuro con "going to" y "will"',
      'Comparativos y superlativos',
      'Rutinas diarias, viajes y comida',
      'Preposiciones de tiempo y lugar'
    ],
    dev:'Sigue tutoriales técnicos narrados a velocidad lenta y lee READMEs cortos sin traducir todo.'
  },
  {
    code:'B1', name:'Refugio', subtitle:'Intermedio', duration:'4 meses',
    elevation:'2,500m', visibility:'Media-alta — sigues conversaciones aunque se te escapen detalles',
    desc:'El punto medio de la montaña: navegas conversaciones impredecibles, das tu opinión y la justificas.',
    topics:[
      'Presente perfecto vs. pasado simple',
      'Primer y segundo condicional',
      'Phrasal verbs básicos',
      'Narrar historias y argumentar una opinión',
      'Listening con acentos distintos al americano neutro'
    ],
    dev:'Lee documentación oficial (MDN, FastAPI, React docs) directamente en inglés. Escribe mensajes de commit y descripciones de issues claros en GitHub.'
  },
  {
    code:'B2', name:'Cresta', subtitle:'Intermedio alto', duration:'5 meses',
    elevation:'3,800m', visibility:'Alta — la fluidez empieza a aparecer bajo presión',
    desc:'Aquí el idioma deja de ser un esfuerzo consciente en temas cotidianos: puedes manejar ideas abstractas y debatir.',
    topics:[
      'Voz pasiva y estilo indirecto (reported speech)',
      'Tercer condicional y condicionales mixtos',
      'Idioms y expresiones comunes en contexto real',
      'Debatir, defender una postura, presentaciones cortas',
      'Introducción a business & academic English'
    ],
    dev:'Participa en code reviews en inglés, escribe documentación técnica y sigue podcasts o talks de tecnología a velocidad normal.'
  },
  {
    code:'C1', name:'Filo', subtitle:'Avanzado', duration:'6+ meses',
    elevation:'5,000m', visibility:'Muy alta — captas matices, tono y segundas intenciones',
    desc:'Cerca de la cumbre: matices, registro y comprensión casi nativa de contenido no adaptado para estudiantes.',
    topics:[
      'Vocabulario matizado y registro formal / informal',
      'Redacción avanzada: ensayos, informes técnicos, propuestas',
      'Entender películas y series sin subtítulos',
      'Sarcasmo, humor y referencias culturales',
      'Public speaking y storytelling técnico'
    ],
    dev:'Da charlas técnicas, escribe RFCs o documentos de arquitectura, y entra a entrevistas técnicas en inglés sin fricción mental.'
  },
  {
    code:'C2', name:'Cumbre', subtitle:'Maestría', duration:'Uso continuo',
    elevation:'5,895m', visibility:'Total — ya no traduces, piensas en inglés',
    desc:'Dominio nativo: te mueves con la misma soltura en un chat casual, una negociación o un paper técnico.',
    topics:[
      'Fluidez en cualquier registro: formal, técnico, casual',
      'Escritura profesional y creativa de alto nivel',
      'Negociación, liderazgo y persuasión en inglés',
      'Dialectos, humor y matices culturales finos',
      'Comunicación y mentoría en equipos internacionales'
    ],
    dev:'Lidera equipos internacionales, habla en conferencias y escribe artículos técnicos publicables directamente en inglés.'
  }
];

const KIT = [
  {flag:'INPUT', title:'Inmersión diaria', body:'Cambia el idioma de tu sistema operativo, tus apps y tus series. El inglés pasivo constante vale más que una hora aislada de estudio.'},
  {flag:'OUTPUT', title:'Practica hablando', body:'Intercambios de idioma o clases 1:1 online. Producir el idioma —no solo entenderlo— es lo que consolida la fluidez.'},
  {flag:'FEEDBACK', title:'Corrección real', body:'Escribe y pide que te corrijan: commits, documentación, posts. El error visto a tiempo no se repite.'},
  {flag:'REPASO', title:'Repetición espaciada', body:'Un sistema de tarjetas para vocabulario nuevo evita que lo olvides a la semana de aprenderlo.'}
];

/* =========================================================
   RENDER CAMPS
========================================================= */
const container = document.getElementById('camps-container');
CAMPS.forEach((c, i) => {
  const section = document.createElement('section');
  section.className = 'camp';
  section.id = c.code.toLowerCase();
  section.innerHTML = `
    <div class="camp-head reveal">
      <span class="camp-code">${c.code}</span>
      <span class="camp-elev">${c.elevation} · ${c.name}</span>
    </div>
    <h2 class="reveal">${c.name}</h2>
    <div class="camp-subtitle reveal">${c.subtitle}</div>
    <p class="camp-desc reveal">${c.desc}</p>
    <div class="camp-meta reveal">
      <div>DURACIÓN<b>${c.duration}</b></div>
      <div>VISIBILIDAD<b style="font-size:13px;font-weight:600;">${c.visibility}</b></div>
    </div>
    <div class="topics reveal-stagger">
      ${c.topics.map(t => `<div class="topic-card"><span class="flag">⛳ tema</span><p>${t}</p></div>`).join('')}
    </div>
    <div class="dev-tip reveal">
      <span class="flag">// PARA DEVS</span>
      <p>${c.dev}</p>
    </div>
  `;
  container.appendChild(section);
});

/* =========================================================
   RENDER QUIZ
========================================================= */
const QUIZ = [
  {q:'¿Puedes presentarte y decir de dónde eres en inglés?', opts:[
    {t:'No, apenas reconozco palabras sueltas', s:1},
    {t:'Sí, con frases muy simples', s:2},
    {t:'Sí, sin pensarlo', s:4}
  ]},
  {q:'Si ves un tutorial técnico en inglés sin subtítulos...', opts:[
    {t:'No entiendo casi nada', s:1},
    {t:'Sigo el hilo si hablan despacio', s:3},
    {t:'Lo entiendo todo a velocidad normal', s:5}
  ]},
  {q:'¿Puedes debatir una opinión y defenderla en inglés?', opts:[
    {t:'No, me quedo sin palabras', s:2},
    {t:'Más o menos, con errores', s:3},
    {t:'Sí, con soltura', s:5}
  ]},
  {q:'Leer documentación técnica oficial (MDN, docs de un framework)...', opts:[
    {t:'Necesito traducir casi todo', s:2},
    {t:'La entiendo con esfuerzo', s:3},
    {t:'La leo igual que en español', s:5}
  ]},
  {q:'¿Entiendes sarcasmo, humor o referencias culturales en inglés?', opts:[
    {t:'Casi nunca', s:3},
    {t:'A veces', s:4},
    {t:'Sí, casi siempre', s:6}
  ]}
];

const quizBox = document.getElementById('quiz-box');
let quizState = new Array(QUIZ.length).fill(null);

function renderQuiz(){
  quizBox.innerHTML = QUIZ.map((item, qi) => `
    <div class="quiz-q">
      <p>${qi+1}. ${item.q}</p>
      <div class="quiz-opts">
        ${item.opts.map((o, oi) => `<button type="button" class="quiz-opt" data-q="${qi}" data-o="${oi}" data-s="${o.s}">${o.t}</button>`).join('')}
      </div>
    </div>
  `) + `<div class="quiz-result" id="quiz-result">
      <span class="code" id="qr-code"></span>
      <h3 id="qr-title"></h3>
      <p id="qr-body"></p>
      <a href="#" class="btn primary" id="qr-cta">Ir a mi campamento</a>
    </div>`;

  quizBox.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const qi = btn.dataset.q;
      quizBox.querySelectorAll(`.quiz-opt[data-q="${qi}"]`).forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      quizState[qi] = parseInt(btn.dataset.s, 10);
      if(quizState.every(v => v !== null)) showQuizResult();
    });
  });
}

function showQuizResult(){
  const avg = quizState.reduce((a,b) => a+b, 0) / quizState.length;
  const idx = Math.max(0, Math.min(CAMPS.length - 1, Math.round(avg) - 1));
  const camp = CAMPS[idx];
  document.getElementById('qr-code').textContent = `RESULTADO · NIVEL SUGERIDO ${camp.code}`;
  document.getElementById('qr-title').textContent = `Empieza en ${camp.code} — ${camp.name}`;
  document.getElementById('qr-body').textContent = camp.desc;
  const cta = document.getElementById('qr-cta');
  cta.href = `#${camp.code.toLowerCase()}`;
  document.getElementById('quiz-result').classList.add('show');
}
renderQuiz();

/* =========================================================
   RENDER KIT GRID
========================================================= */
document.getElementById('kit-grid').innerHTML = KIT.map(k => `
  <div class="kit-card">
    <span class="flag">${k.flag}</span>
    <h4>${k.title}</h4>
    <p>${k.body}</p>
  </div>
`).join('');

/* =========================================================
   RENDER PROGRESS RAIL
========================================================= */
const rail = document.getElementById('rail');
CAMPS.forEach(c => {
  const el = document.createElement('div');
  el.className = 'rail-dot';
  el.dataset.target = c.code.toLowerCase();
  el.innerHTML = `<span class="rail-label">${c.code}</span><span class="rail-mark"></span>`;
  el.addEventListener('click', () => document.getElementById(c.code.toLowerCase()).scrollIntoView({behavior:'smooth'}));
  rail.appendChild(el);
});

/* =========================================================
   SCROLL: reveal on view + progress + rail state + altitude readout
========================================================= */
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('is-visible'); });
}, {threshold:0.15});
revealEls.forEach(el => io.observe(el));

const campSections = CAMPS.map(c => document.getElementById(c.code.toLowerCase()));
const railDots = rail.querySelectorAll('.rail-dot');
const topbar = document.getElementById('topbar');
const altReadout = document.getElementById('alt-readout');
const campReadout = document.getElementById('camp-readout');

let scrollProgress = 0;

function onScroll(){
  const doc = document.documentElement;
  const max = doc.scrollHeight - doc.clientHeight;
  scrollProgress = max > 0 ? window.scrollY / max : 0;
  topbar.style.width = (scrollProgress * 100).toFixed(2) + '%';

  let activeIdx = -1;
  campSections.forEach((sec, i) => {
    const r = sec.getBoundingClientRect();
    if(r.top < window.innerHeight * 0.6 && r.bottom > window.innerHeight * 0.2) activeIdx = i;
  });
  railDots.forEach((d, i) => d.classList.toggle('active', i === activeIdx));

  if(activeIdx >= 0){
    altReadout.textContent = CAMPS[activeIdx].elevation;
    campReadout.textContent = CAMPS[activeIdx].code + ' · ' + CAMPS[activeIdx].name.toUpperCase();
  } else if(scrollProgress < 0.05){
    altReadout.textContent = '0m';
    campReadout.textContent = 'BASE';
  } else {
    altReadout.textContent = '5,895m';
    campReadout.textContent = 'CUMBRE';
  }
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

/* =========================================================
   THREE.JS — low-poly mountain the camera climbs as you scroll
========================================================= */
(function(){
  const canvas = document.getElementById('bg-canvas');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 760;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x080b14, isMobile ? 0.011 : 0.0085);

  const camera = new THREE.PerspectiveCamera(52, window.innerWidth/window.innerHeight, 0.1, 500);

  const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  // lighting
  const ambient = new THREE.AmbientLight(0x334066, 0.9);
  scene.add(ambient);
  const sun = new THREE.DirectionalLight(0xffb56b, 1.1);
  sun.position.set(-30, 40, 20);
  scene.add(sun);
  const rim = new THREE.DirectionalLight(0x3fe0c5, 0.35);
  rim.position.set(20, 10, -30);
  scene.add(rim);

  // ---- simple value-noise (hash based) ----
  function hash2(x, y){
    let s = Math.sin(x*127.1 + y*311.7) * 43758.5453123;
    return s - Math.floor(s);
  }
  function noise2D(x, y){
    const xi = Math.floor(x), yi = Math.floor(y);
    const xf = x - xi, yf = y - yi;
    const u = xf*xf*(3-2*xf), v = yf*yf*(3-2*yf);
    const a = hash2(xi, yi), b = hash2(xi+1, yi), c = hash2(xi, yi+1), d = hash2(xi+1, yi+1);
    return (a*(1-u)+b*u)*(1-v) + (c*(1-u)+d*u)*v;
  }

  // ---- mountain mesh ----
  const seg = isMobile ? 26 : 46;
  const mtGeo = new THREE.PlaneGeometry(140, 220, seg, Math.round(seg*1.5));
  mtGeo.rotateX(-Math.PI/2);
  {
    const pos = mtGeo.attributes.position;
    for(let i=0;i<pos.count;i++){
      const x = pos.getX(i), z = pos.getZ(i);
      const dist = Math.sqrt(x*x + (z+55)*(z+55)) / 78;
      const peakBase = Math.max(0, 1 - dist);
      const peak = Math.pow(peakBase, 1.3) * 46;
      const n1 = noise2D(x*0.045, z*0.045) * 8;
      const n2 = noise2D(x*0.14, z*0.14) * 2.4;
      let y = peak + n1 + n2;
      if(y < 0.4) y = 0.4 + noise2D(x*0.08,z*0.08)*0.6;
      pos.setY(i, y);
    }
    mtGeo.computeVertexNormals();
  }
  const mtMat = new THREE.MeshStandardMaterial({
    color:0x151d33, flatShading:true, metalness:0.15, roughness:0.85
  });
  const mountain = new THREE.Mesh(mtGeo, mtMat);
  mountain.position.set(6, -6, -30);
  scene.add(mountain);

  // secondary distant ridge for depth
  const ridgeGeo = new THREE.PlaneGeometry(260, 140, 24, 16);
  ridgeGeo.rotateX(-Math.PI/2);
  {
    const pos = ridgeGeo.attributes.position;
    for(let i=0;i<pos.count;i++){
      const x = pos.getX(i), z = pos.getZ(i);
      const n = noise2D(x*0.03, z*0.03);
      pos.setY(i, n*22 + 4);
    }
    ridgeGeo.computeVertexNormals();
  }
  const ridgeMat = new THREE.MeshStandardMaterial({color:0x0d1220, flatShading:true, roughness:1, transparent:true, opacity:0.85});
  const ridge = new THREE.Mesh(ridgeGeo, ridgeMat);
  ridge.position.set(0, -20, -140);
  scene.add(ridge);

  // ---- trail markers (6 camps climbing the slope) ----
  const trailPoints = [
    new THREE.Vector3(24, 2, 6),
    new THREE.Vector3(18, 10, -10),
    new THREE.Vector3(10, 19, -24),
    new THREE.Vector3(2, 28, -34),
    new THREE.Vector3(-3, 36, -42),
    new THREE.Vector3(-2, 43, -48)
  ];
  const markerGeo = new THREE.OctahedronGeometry(0.9, 0);
  const markers = trailPoints.map((p) => {
    const mat = new THREE.MeshStandardMaterial({color:0xf2b705, emissive:0xf2b705, emissiveIntensity:0.6, flatShading:true});
    const m = new THREE.Mesh(markerGeo, mat);
    m.position.copy(p);
    scene.add(m);
    return m;
  });

  const curve = new THREE.CatmullRomCurve3(trailPoints);
  const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.08, 6, false);
  const tubeMat = new THREE.MeshBasicMaterial({color:0xf2b705, transparent:true, opacity:0.35});
  scene.add(new THREE.Mesh(tubeGeo, tubeMat));

  // ---- drifting particles (embers / snow) ----
  const pCount = isMobile ? 260 : 620;
  const pGeo = new THREE.BufferGeometry();
  const pPos = new Float32Array(pCount*3);
  for(let i=0;i<pCount;i++){
    pPos[i*3] = (Math.random()-0.5) * 90;
    pPos[i*3+1] = Math.random() * 70 - 10;
    pPos[i*3+2] = (Math.random()-0.5) * 120 - 30;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  const pMat = new THREE.PointsMaterial({color:0xffd27a, size:0.22, transparent:true, opacity:0.55, blending:THREE.AdditiveBlending, depthWrite:false});
  const particles = new THREE.Points(pGeo, pMat);
  scene.add(particles);

  camera.position.set(0, 4, 34);
  camera.lookAt(0, 8, -10);

  let targetY = 4, targetZ = 34, targetRotY = 0;
  let mouseX = 0, mouseY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5);
    mouseY = (e.clientY / window.innerHeight - 0.5);
  });

  function updateCameraTarget(){
    const p = scrollProgress;
    targetY = 4 + p * 46;
    targetZ = 34 - p * 66;
    targetRotY = -p * 0.55;
  }
  window.addEventListener('scroll', updateCameraTarget, {passive:true});
  updateCameraTarget();

  function onResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onResize);

  let visible = true;
  document.addEventListener('visibilitychange', () => { visible = !document.hidden; });

  const clock = new THREE.Clock();
  function animate(){
    requestAnimationFrame(animate);
    if(!visible) return;
    const t = clock.getElapsedTime();

    camera.position.y += (targetY - camera.position.y) * 0.045;
    camera.position.z += (targetZ - camera.position.z) * 0.045;
    const parallaxX = isMobile ? 0 : mouseX * 3;
    const parallaxY = isMobile ? 0 : mouseY * 1.5;
    camera.position.x += (parallaxX - camera.position.x) * 0.03;
    camera.lookAt(0, camera.position.y + 4 + parallaxY, camera.position.z - 40);
    mountain.rotation.y += (targetRotY - mountain.rotation.y) * 0.02;
    ridge.rotation.y = mountain.rotation.y * 0.5;

    markers.forEach((m, i) => {
      const pulse = 0.5 + Math.sin(t*1.6 + i) * 0.15;
      m.material.emissiveIntensity = pulse;
      m.rotation.y += 0.01;
    });

    if(!reduceMotion){
      const pos = pGeo.attributes.position;
      for(let i=0;i<pCount;i++){
        let y = pos.getY(i) + 0.03;
        if(y > 60) y = -10;
        pos.setY(i, y);
      }
      pos.needsUpdate = true;
    }

    renderer.render(scene, camera);
  }
  animate();
})();
