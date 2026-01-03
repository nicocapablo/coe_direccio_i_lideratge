// =======================
// PREGUNTAS (RELLENA TÚ)
// =======================

// --- SENTENCIAS (V / F) ---
const preguntasSentencias = [
  {
    texto: "Les persones són el motor real de l’empresa.",
    correcta: "v"
  },
  {
    texto: "Les emocions són sempre racionals i voluntàries.",
    correcta: "f"
  },
  {
    texto: "Les emocions influeixen en la presa de decisions.",
    correcta: "v"
  },
  {
    texto: "Gestionar bé les emocions ajuda a millorar la motivació i el rendiment laboral.",
    correcta: "v"
  },
  {
    texto: "La teoria X considera que el treballador és mandrós i evita responsabilitats.",
    correcta: "v"
  },
  {
    texto: "Segons la teoria Y, el treball és vist com un càstig inevitable.",
    correcta: "f"
  },
  {
    texto: "La teoria Y defensa que les persones poden assumir responsabilitats.",
    correcta: "v"
  },
  {
    texto: "La teoria Z posa l’èmfasi en la confiança, el compromís i l’estabilitat.",
    correcta: "v"
  },
  {
    texto: "La direcció per objectius se centra més en el procés que en els resultats.",
    correcta: "f"
  },
  {
    texto: "El control serveix per comprovar que allò planificat s’està complint.",
    correcta: "v"
  },
  {
    texto: "El control correctiu actua quan ja s’ha produït una desviació.",
    correcta: "v"
  },
  {
    texto: "L’estil de lideratge autocràtic fomenta la participació de l’equip.",
    correcta: "f"
  },
  {
    texto: "El lideratge burocràtic es basa en normes, protocols i procediments.",
    correcta: "v"
  },
  {
    texto: "El lideratge carismàtic depèn molt de la personalitat del líder.",
    correcta: "v"
  },
  {
    texto: "El lideratge democràtic escolta l’equip abans de prendre decisions.",
    correcta: "v"
  },
  {
    texto: "El lideratge laissez-faire implica un control constant sobre l’equip.",
    correcta: "f"
  },
  {
    texto: "Un bon líder ha de saber adaptar el seu estil a cada situació.",
    correcta: "v"
  },
  {
    texto: "La intel·ligència emocional inclou autocontrol, empatia i habilitats socials.",
    correcta: "v"
  },
  {
    texto: "L’empatia consisteix a entendre les emocions dels altres.",
    correcta: "v"
  },
  {
    texto: "La manca d’autocontrol emocional pot generar conflictes a l’empresa.",
    correcta: "v"
  },
  {
    texto: "El lideratge transaccional es basa en recompenses i càstigs.",
    correcta: "v"
  },
  {
    texto: "El lideratge transformacional inspira i motiva l’equip a créixer.",
    correcta: "v"
  },
  {
    texto: "Un líder eficaç només ha de centrar-se en els resultats econòmics.",
    correcta: "f"
  },
  {
    texto: "La comunicació clara és clau per a un bon lideratge.",
    correcta: "v"
  },
  {
    texto: "La confiança entre líder i equip millora el rendiment.",
    correcta: "v"
  },
  {
    texto: "Un bon líder no comet errors.",
    correcta: "f"
  },
  {
    texto: "Acceptar errors pot ajudar a millorar com a líder.",
    correcta: "v"
  },
  {
    texto: "La motivació del líder influeix en la motivació de l’equip.",
    correcta: "v"
  },
  {
    texto: "El lideratge natural apareix només quan hi ha un càrrec formal.",
    correcta: "f"
  },
  {
    texto: "El lideratge eficaç combina autoritat, empatia i comunicació.",
    correcta: "v"
  }
];


// --- MINITEST (3 OPCIONES) ---

const preguntasMinitest = [
  {
    texto: "Quin és el motor real de l’empresa?",
    opciones: [
      "a) La tecnologia",
      "b) Les persones",
      "c) Els beneficis econòmics"
    ],
    correcta: "b"
  },
  {
    texto: "Quina característica defineix millor les emocions?",
    opciones: [
      "a) Sempre racionals",
      "b) Automàtiques i involuntàries",
      "c) Controlades per normes"
    ],
    correcta: "b"
  },
  {
    texto: "Segons la teoria X, el treballador:",
    opciones: [
      "a) Busca responsabilitats",
      "b) És creatiu i autònom",
      "c) Evita l’esforç i la responsabilitat"
    ],
    correcta: "c"
  },
  {
    texto: "Quina teoria considera el treball com una font de satisfacció?",
    opciones: [
      "a) Teoria X",
      "b) Teoria Y",
      "c) Teoria burocràtica"
    ],
    correcta: "b"
  },
  {
    texto: "La teoria Z posa èmfasi principalment en:",
    opciones: [
      "a) El control estricte",
      "b) La confiança i el compromís",
      "c) La competència interna"
    ],
    correcta: "b"
  },
  {
    texto: "Què és la Direcció per Objectius (DPO)?",
    opciones: [
      "a) Controlar només els costos",
      "b) Centrar-se en resultats pactats",
      "c) Prioritzar les normes internes"
    ],
    correcta: "b"
  },
  {
    texto: "Quina funció té el control a l’empresa?",
    opciones: [
      "a) Castigar errors",
      "b) Verificar que es compleix el planificat",
      "c) Substituir la direcció"
    ],
    correcta: "b"
  },
  {
    texto: "El control correctiu actua:",
    opciones: [
      "a) Abans que aparegui el problema",
      "b) Durant la planificació",
      "c) Quan ja hi ha una desviació"
    ],
    correcta: "c"
  },
  {
    texto: "Quin estil de lideratge pren decisions sense consultar l’equip?",
    opciones: [
      "a) Democràtic",
      "b) Autocràtic",
      "c) Participatiu"
    ],
    correcta: "b"
  },
  {
    texto: "L’estil burocràtic es basa sobretot en:",
    opciones: [
      "a) Carisma personal",
      "b) Normes i protocols",
      "c) Emocions de l’equip"
    ],
    correcta: "b"
  },
  {
    texto: "El lideratge carismàtic destaca per:",
    opciones: [
      "a) L’ús estricte de normes",
      "b) La personalitat del líder",
      "c) La rotació constant"
    ],
    correcta: "b"
  },
  {
    texto: "Quin estil fomenta més la participació de l’equip?",
    opciones: [
      "a) Autocràtic",
      "b) Democràtic",
      "c) Burocràtic"
    ],
    correcta: "b"
  },
  {
    texto: "El lideratge laissez-faire es caracteritza per:",
    opciones: [
      "a) Control constant",
      "b) Absència de direcció",
      "c) Excés de normes"
    ],
    correcta: "b"
  },
  {
    texto: "Què és la intel·ligència emocional?",
    opciones: [
      "a) Capacitat tècnica",
      "b) Gestió de les emocions pròpies i alienes",
      "c) Coneixement normatiu"
    ],
    correcta: "b"
  },
  {
    texto: "Quina habilitat forma part de la intel·ligència emocional?",
    opciones: [
      "a) Autoritarisme",
      "b) Empatia",
      "c) Control burocràtic"
    ],
    correcta: "b"
  },
  {
    texto: "Un líder sense autocontrol emocional pot generar:",
    opciones: [
      "a) Més motivació",
      "b) Conflictes interns",
      "c) Millors resultats"
    ],
    correcta: "b"
  },
  {
    texto: "El lideratge transaccional es basa en:",
    opciones: [
      "a) Inspiració i valors",
      "b) Recompenses i càstigs",
      "c) Autonomia total"
    ],
    correcta: "b"
  },
  {
    texto: "El lideratge transformacional té com a objectiu:",
    opciones: [
      "a) Controlar costos",
      "b) Inspirar i fer créixer l’equip",
      "c) Aplicar sancions"
    ],
    correcta: "b"
  },
  {
    texto: "Quin element és clau per generar confiança?",
    opciones: [
      "a) Comunicació clara",
      "b) Pressió constant",
      "c) Distància jeràrquica"
    ],
    correcta: "a"
  },
  {
    texto: "Un bon líder ha de:",
    opciones: [
      "a) Imposar sempre la seva opinió",
      "b) Adaptar-se a les situacions",
      "c) Evitar el diàleg"
    ],
    correcta: "b"
  },
  {
    texto: "La motivació del líder:",
    opciones: [
      "a) No influeix en l’equip",
      "b) Influeix directament en l’equip",
      "c) Només afecta la direcció"
    ],
    correcta: "b"
  },
  {
    texto: "El lideratge natural apareix quan:",
    opciones: [
      "a) Hi ha un càrrec oficial",
      "b) L’equip reconeix el líder",
      "c) Hi ha normes estrictes"
    ],
    correcta: "b"
  },
  {
    texto: "Quina característica defineix millor un bon líder?",
    opciones: [
      "a) Control absolut",
      "b) Capacitat d’inspirar",
      "c) Distància emocional"
    ],
    correcta: "b"
  },
  {
    texto: "Acceptar errors ajuda a:",
    opciones: [
      "a) Perdre autoritat",
      "b) Millorar el lideratge",
      "c) Generar por"
    ],
    correcta: "b"
  },
  {
    texto: "La comunicació deficient pot provocar:",
    opciones: [
      "a) Millor rendiment",
      "b) Conflictes i confusió",
      "c) Més compromís"
    ],
    correcta: "b"
  },
  {
    texto: "Què reforça el compromís de l’equip?",
    opciones: [
      "a) Ignorar opinions",
      "b) Confiança i respecte",
      "c) Control excessiu"
    ],
    correcta: "b"
  },
  {
    texto: "Un líder eficaç combina:",
    opciones: [
      "a) Autoritat i empatia",
      "b) Rigidesa i distància",
      "c) Por i control"
    ],
    correcta: "a"
  },
  {
    texto: "L’empatia permet:",
    opciones: [
      "a) Imposar decisions",
      "b) Entendre els altres",
      "c) Evitar la comunicació"
    ],
    correcta: "b"
  },
  {
    texto: "El lideratge orientat a les persones prioritza:",
    opciones: [
      "a) Només els resultats",
      "b) Les relacions i el desenvolupament",
      "c) Les sancions"
    ],
    correcta: "b"
  },
  {
    texto: "El lideratge eficaç busca:",
    opciones: [
      "a) Complir ordres sense qüestionar",
      "b) Equilibri entre persones i resultats",
      "c) Control jeràrquic absolut"
    ],
    correcta: "b"
  }
];


// --- FRASES DE ÁNIMO ---
const frases_animo = [
  "¡Muy bien!",
  "¡Correcto!",
  "¡Buen trabajo!",
  "¡Así se hace!",
  "¡Perfecto!"
];

// =======================
// VARIABLES
// =======================

let modo = "";
let preguntasParaEsteTest = [];
let i = 0;
let puntuacion = 0;

// =======================
// FUNCIONES
// =======================

function barajar(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] =
      [array[randomIndex], array[currentIndex]];
  }
}

function mostrarMensaje(texto, tipo) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.classList.add("message", tipo);
  msg.innerHTML = texto.replace(/\n/g, "<br>");
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function mostrarMenuInicial() {
  mostrarMensaje(
    "👋 Hola, bienvenido al Tema 1.\n\n¿Qué quieres practicar?",
    "bot"
  );
  mostrarMensaje(
    "A) Sentencias (Verdadero / Falso)\n      o \n B)Mini-test (3 opciones)",
    "bot"
  );

  configurarBoton("btnA", "A", iniciarSentencias);
  configurarBoton("btnB", "B", iniciarMinitest);
  ocultarBotones(["btnC", "btnD"]);
}

function iniciarSentencias() {
  modo = "sentencias";
  i = 0;
  puntuacion = 0;

  barajar(preguntasSentencias);
  preguntasParaEsteTest = preguntasSentencias.slice(0, 30);

  configurarBoton("btnA", "V", () => responder("v"));
  configurarBoton("btnB", "F", () => responder("f"));
  ocultarBotones(["btnC", "btnD"]);

  mostrarPregunta();
}

function iniciarMinitest() {
  modo = "minitest";
  i = 0;
  puntuacion = 0;

  barajar(preguntasMinitest);
  preguntasParaEsteTest = preguntasMinitest.slice(0, 30);

  configurarBoton("btnA", "A", () => responder("a"));
  configurarBoton("btnB", "B", () => responder("b"));
  configurarBoton("btnC", "C", () => responder("c"));
  ocultarBotones(["btnD"]);

  mostrarPregunta();
}

function mostrarPregunta() {
  if (!preguntasParaEsteTest[i]) return;

  const p = preguntasParaEsteTest[i];
  const texto = `${p.texto}\n\n${p.opciones.join("\n")}`;
  mostrarMensaje(texto, "bot");
}

function responder(opcion) {
  const p = preguntasParaEsteTest[i];
  mostrarMensaje(opcion.toUpperCase(), "user");

  if (opcion === p.correcta) {
    puntuacion++;
    mostrarMensaje(
      frases_animo[Math.floor(Math.random() * frases_animo.length)],
      "bot"
    );
  } else {
    mostrarMensaje(
      `❌ Incorrecte. La correcta era ${p.correcta.toUpperCase()}`,
      "bot"
    );
  }

  i++;

  if (i < preguntasParaEsteTest.length) {
    setTimeout(mostrarPregunta, 600);
  } else {
    setTimeout(() => {
      mostrarMensaje(
        `🏁 Resultat final: ${puntuacion} / ${preguntasParaEsteTest.length}`,
        "bot"
      );
      desactivarBotones();
    }, 600);
  }
}

function configurarBoton(id, texto, accion) {
  const btn = document.getElementById(id);
  btn.style.display = "block";
  btn.textContent = texto;
  btn.onclick = accion;
}

function ocultarBotones(ids) {
  ids.forEach(id => {
    document.getElementById(id).style.display = "none";
  });
}

function desactivarBotones() {
  document.querySelectorAll("button").forEach(b => b.disabled = true);
}

// =======================
// ARRANQUE
// =======================

document.addEventListener("DOMContentLoaded", mostrarMenuInicial);





