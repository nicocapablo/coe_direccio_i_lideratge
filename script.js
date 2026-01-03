// --- PREGUNTAS ---
const preguntas = [
  {
    texto: "Si hemos de abrir un establecimiento en Cataluña, como por ejemplo un taller de reparación de automóviles, como mínimo, ¿a qué normativa estaremos sometidos obligatoriamente?",
    opciones: [
      "a) A la Ley 16/2002 de Prevención y Control Integrados de la Contaminación.",
      "b) A la Ley 21/1990 de Intervención Integral de la Administración Ambiental (IIAA).",
      "c) Al Decreto 2414/1961 que publica el Reglamento de Actividades Molestas, Insalubres, Nocivas y Peligrosas.",
      "d) A la Ley 20/2009 de Prevención y Control Ambiental de las Actividades (PCAA)."
    ],
    correcta: "d"
  },
  {
    texto: "Señala la respuesta correcta:",
    opciones: [
      "a) Los escenarios futuros de clima predicen más situaciones extremas en términos de frío.",
      "b) Los modelos de predicción climática a escala regional ofrecen una menor precisión que los modelos globales.",
      "c) Se prevé un incremento mayor de temperatura bajo el escenario SSP5-8.5 que en el escenario SSP1-1.9.",
      "d) En la subregión Mediterránea, se prevé un incremento de la precipitación a finales de siglo."
    ],
    correcta: "c"
  },
  {
    texto: "Señala la respuesta falsa:",
    opciones: [
      "a) El Mecanismo de Aplicación Conjunta pone en contacto países en vías de desarrollo y países ya desarrollados.",
      "b) El Comercio de Emisiones existe tanto a nivel de países como de instalaciones.",
      "c) Los países en vías de desarrollo no están obligados a implementar Mecanismos de Desarrollo Limpio.",
      "d) Tanto en el Mecanismo de Aplicación Conjunta como en el Mecanismo de Desarrollo Limpio, la reducción de emisiones se calcula a partir de las que se producirían en ausencia de la actividad proyectada."
    ],
    correcta: "a"
  },
  {
    texto: "En el marco del concepto de 'Desarrollo sostenible', ¿cuál de las siguientes respuestas es falsa?",
    opciones: [
      "a) La satisfacción de las necesidades provoca una presión exponencial sobre los recursos.",
      "b) El desarrollo sostenible se realiza a través del consumo de bienes y servicios.",
      "c) Para ser sostenible, se deben satisfacer las necesidades del presente aun comprometiendo la capacidad de las generaciones futuras para atender sus propias necesidades.",
      "d) La elasticidad de los factores implica suplir el agotamiento de materias primas por una mayor inversión que permita aumentar la eficiencia de los recursos o encontrar materiales sustitutivos."
    ],
    correcta: "c"
  },
  {
    texto: "¿Cuál de las siguientes afirmaciones es correcta?",
    opciones: [
      "a) El Protocolo de Kioto todavía está vigente.",
      "b) El Protocolo de Kioto entró en vigor cuando lo firmaron 55 países representando el 55% de las emisiones de gases de efecto invernadero emitidas en el año 1990.",
      "c) El Protocolo de Kioto regula sólo las emisiones de CO2.",
      "d) El Acuerdo de París ratificado el 2016 tiene como objetivo la reducción de las emisiones de gases de efecto invernadero en un 100% el 2030."
    ],
    correcta: "b"
  },
  {
    texto: "En el marco del Análisis de Ciclo de Vida, señala la respuesta correcta:",
    opciones: [
      "a) La identificación y cuantificación de las entradas y salidas de cada proceso unitario forma parte de la etapa de análisis de inventario.",
      "b) La asignación de pesos (weighting) a las diferentes categorías de impacto se lleva a cabo mediante un proceso científico.",
      "c) La definición de los límites del sistema se realiza durante la etapa de análisis del inventario.",
      "d) Un aspecto incluido en el inventario sólo puede contribuir a una categoría de impacto ambiental, no a entre otras."
    ],
    correcta: "a"
  },
  {
    texto: "En el marco de los Análisis de Ciclo de Vida, la caracterización:",
    opciones: [
      "a) es una etapa del análisis de inventario.",
      "b) transforma los datos recogidos en el inventario en diferentes categorías de impacto utilizando factores de conversión científicos.",
      "c) identifica las principales categorías de impactos ambientales.",
      "d) clasifica los impactos ambientales en impactos locales, regionales o globales."
    ],
    correcta: "b"
  },
  {
    texto: "Respecto a los regímenes de intervención administrativa de la Ley de Prevención y Control Ambiental de las Actividades, ¿cuál de las siguientes afirmaciones es falsa?",
    opciones: [
      "a) En el Anexo I.1, puede iniciarse la actividad inmediatamente después de haberse presentado el proyecto bajo la responsabilidad del propietario y del técnico.",
      "b) Las actividades del Anexo I.1 están sometidas a control cada 4 años.",
      "c) Las actividades del Anexo I.1 están sujetas a renovación cuando lo solicite el organismo ambiental competente, de acuerdo con la publicación de las conclusiones relativas a las Mejores Técnicas Disponibles.",
      "d) Las actividades del Anexo I.1 están sujetas al Régimen de autorización ambiental con declaración de impacto ambiental."
    ],
    correcta: "a"
  },
  {
    texto: "¿Cuál de las siguientes afirmaciones es correcta?",
    opciones: [
      "a) La huella ecológica mide la máxima población de una especie concreta que puede ser soportada por un hábitat determinado.",
      "b) La capacidad de carga representa la superficie de terreno o de agua ecológicamente productiva necesarios para generar los recursos y asimilar los residuos de una población determinada.",
      "c) En España existe un superávit ecológico.",
      "d) Todas las respuestas anteriores son falsas."
    ],
    correcta: "b"
  },
  {
    texto: "¿Cuál de las siguientes afirmaciones es falsa?",
    opciones: [
      "a) Los Sistemas de Gestión Ambiental se aplican a productos.",
      "b) Los Sistemas de Gestión Ambiental deben ser revisados periódicamente.",
      "c) Tener un Sistema de Gestión Ambiental es voluntario.",
      "d) El ahorro de recursos es una motivación para la implantación de Sistemas de Gestión Ambiental."
    ],
    correcta: "a"
  },
  {
    texto: "En el marco de los Análisis de Ciclo de Vida, señala la respuesta correcta:",
    opciones: [
      "a) El calentamiento global, el agotamiento de la capa de ozono, la acidificación y la eutrofización, entre otras, categorías de impacto incluidas dentro de un Análisis de Ciclo de Vida.",
      "b) La acidificación es un impacto regional.",
      "c) El factor de caracterización para el calentamiento global es el Potencial de Calentamiento Global (GWP, Global Warming Potential).",
      "d) Todas las respuestas son correctas."
    ],
    correcta: "d"
  },
  {
    texto: "En relación al Análisis de Ciclo de Vida de las placas solares fotovoltaicas, señala la respuesta correcta:",
    opciones: [
      "a) Las placas solares fotovoltaicas consumen más energía durante su fabricación que la que proporcionan durante su vida útil.",
      "b) El análisis sobre la rentabilidad energética de las placas solares debe tener en cuenta la ubicación de las mismas.",
      "c) En el Análisis de Ciclo de Vida de las placas solares fotovoltaicas no se tuvo que realizar ninguna hipótesis porque todos los datos eran conocidos.",
      "d) Ninguna de las anteriores, todas son falsas."
    ],
    correcta: "b"
  },
  {
    texto: "Señala la respuesta correcta:",
    opciones: [
      "a) El impacto de la eutrofización es a nivel mundial.",
      "b) La acidificación implica niveles altos de pH en la atmósfera.",
      "c) Los anticiclones prolongados contribuyen a aumentar el impacto del smog en las ciudades.",
      "d) El agujero de la capa de ozono no tiene vía de solución."
    ],
    correcta: "c"
  },
  {
    texto: "De acuerdo con la Directiva 2010/75/EC sobre Emisiones Industriales, señala la respuesta falsa:",
    opciones: [
      "a) Los Valores Límite de Emisión (VLE) pueden definirse como la concentración y/o la masa de sustancias contaminantes contenidas en las emisiones procedentes de instalaciones.",
      "b) Los Valores Límite de Emisión permitidos se fijan en los Anexos de la Directiva IPPC.",
      "c) Los documentos técnicos de referencia para los distintos sectores industriales se denominan BREF.",
      "d) La publicación de los BREF tiene como objetivo dar a conocer las BAT o MTD (Mejores Técnicas Disponibles)."
    ],
    correcta: "b"
  },
  {
    texto: "¿Cuál de las siguientes afirmaciones es cierta?",
    opciones: [
      "a) Los Sistemas de Gestión Ambiental están basados en el ciclo de Meadows.",
      "b) Los Sistemas de Gestión Ambiental no solo deben centrarse en los impactos ambientales habituales de la zona de producción, sino también en los producidos en otros espacios auxiliares.",
      "c) Las empresas del Anexo II que disponen de un Sistema de Gestión Ambiental están exentas de los controles establecidos por la Ley 20/2009 (PCAA).",
      "d) La empresa que obtiene un Sistema de Gestión Ambiental demuestra que no contamina."
    ],
    correcta: "b"
  },
  {
    texto: "Señala la respuesta falsa:",
    opciones: [
      "a) Solo las industrias manufactureras pueden implementar un sistema de gestión ambiental.",
      "b) El número de empresas certificadas con ISO 14001 es mucho mayor que el número de empresas registradas con un sistema EMAS.",
      "c) El promotor del Reglamento EMAS es la administración pública (Unión Europea).",
      "d) La adopción de la norma ISO 14001 es voluntaria."
    ],
    correcta: "a"
  },
  {
    texto: "Señala la respuesta verdadera:",
    opciones: [
      "a) Una actividad que emite por encima del Valor Límite de Emisión es ilegal.",
      "b) Una actividad que emite por encima del valor umbral fijado en el Portal de Emisiones Industriales no es legal.",
      "c) De acuerdo con la Directiva de Emisiones Industriales, una nueva actividad debe adoptar un enfoque basado en la reacción a la contaminación.",
      "d) La última actualización de la Directiva sobre Emisiones Industriales introduce incentivos fiscales para aquellas industrias que logren reducir sus emisiones por debajo de los límites establecidos."
    ],
    correcta: "a"
  },
  {
    texto: "¿Cuál de los siguientes elementos es una parte fundamental de la fase de Act (actuar) en un Sistema de Gestión Ambiental (SGA)?",
    opciones: [
      "a) Evaluación de riesgos y oportunidades.",
      "b) Definición de roles y responsabilidades.",
      "c) Análisis de los costes de implementación del Sistema de Gestión Ambiental.",
      "d) Revisión del desempeño del SGA y la adecuación de las políticas y objetivos ambientales."
    ],
    correcta: "d"
  },
  {
    texto: "¿Cuál de los siguientes pasos es esencial en la fase de 'Evaluación de Impacto' de un Análisis de Ciclo de Vida (ACV)?",
    opciones: [
      "a) Establecer los objetivos y alcance del estudio.",
      "b) Identificar y cuantificar los impactos ambientales potenciales.",
      "c) Recopilar datos sobre las entradas y salidas del sistema.",
      "d) Interpretar los resultados y tomar decisiones basadas en ellos."
    ],
    correcta: "b"
  },
  {
    texto: "¿Cuál de las siguientes afirmaciones es falsa?",
    opciones: [
      "a) La capa de ozono no tiene relación directa con el cambio climático.",
      "b) La capa de ozono es una región de la atmósfera que protege la Tierra de la radiación solar ultravioleta.",
      "c) La capa de ozono regula la temperatura global del planeta y es esencial para prevenir el cambio climático.",
      "d) La degradación de la capa de ozono es causada principalmente por los clorofluorocarbonos (CFCs) liberados por actividades humanas."
    ],
    correcta: "c"
  },
  {
  texto: "En relació al balanç energètic de la Terra, assenyala quina de les següents afirmacions és falsa:",
  opciones: [
    "a) La fracció d’energia solar que arriba a la terra es trobara bàsicament en l’espectre visible",
    "b) Els gasos de l'atmosfera són transparents a les radiacions d'ona curta però no a les radiacions d'ona llarga",
    "c) El principal causant de l'escalfament global de la Terra és la variació en la quantitat de radiació terrestre absorbida",
    "d) Aplicant la llei de Wein es pot trobar la radiació emesa per la Terra (aproximació de la Terra a un cos negre que està a una determinada temperatura)"
  ],
  correcta: "c"
},
{
  texto: "Quina de les següents afirmacions és falsa:",
  opciones: [
    "a) La Cimera de Kyoto (1997) tenia com a objectiu principal la reducció de les emissions de gasos d'efecte hivernacle",
    "b) Com a resultat de la Cimera de Kyoto (1997) es va redatar l'Agenda 21, document que tenia com a objecti afavorir un model de desenvolupament respectuós amb el medi ambient",
    "c) A la Cimera de la Terra celebrada a Rio de Janeiro (1992) es donà especial importancia als problemes del canvi climatic i la biodiversitat",
    "d) A la Cimera de la Terra celebrada a Rio de Janeiro (1992) es conclogué com a punt clau la necessitat de passar d'una acció reparadora a una acció de prevenció"
  ],
  correcta: "b"
},
{
  texto: "Quina de les següents respostes no forma part de les arees d'actuació prioritária del VI Programa d'Acció Ambiental de la UE?",
  opciones: [
    "a) Intentar resoldre el canvi climatic",
    "b) Reducció del forat de la capa d'ozó",
    "c) Protegir la naturalesa i la biodiversitat",
    "d) Utilització sostenible dels recursos naturals"
  ],
  correcta: "b"
},
{
  texto: "A quin tipus de model correspon un ecosistema amb una entrada d'energia limitada, una entrada de recursos limitada i una sortida de recursos limitada?",
  opciones: [
    "a) Model tipus I",
    "b) Model tipus II",
    "c) Model tipus III",
    "d) Model híbrid entre el Tipus I i el Tipus II"
  ],
  correcta: "a"
},
{
  texto: "Respecte els límits de creixement sostenible, quina de les següents afirmacions és certa:",
  opciones: [
    "a) La carrega ecologica d'un recurs es considera sostenible quan aquesta és legal o inferior a la seva capacitat de carrega (L=<KL)",
    "b) El cas d'un recurs sense carrega provoca un creixement insostenible",
    "c) Un creixement sostenible afavoreix que la capacitat de carrega futura sigui més petita que la capacitat de carrega actual (K'L<KL)",
    "d) Per a que el creixement d'una determinada regió sigui sostenible, s'obliga a que la petjada ecològica associada al seu consum de recursos sigui superior a la superfície de la propia regió"
  ],
  correcta: "a"
},
{
  texto: "Respecte als diferents enfocaments de la sostenibilitat, quina de les següents afirmacions és certa?",
  opciones: [
    "a) L'enfocament de la sostenibilitat forta es basa en l'anomenada economia ambiental",
    "b) L'enfocament de la sostenibilitat débil es basa en la desmaterialització de l'economia",
    "c) L'enfocament de la sostenibilitat dèbil inclou afegir un sobrecost economic als productes, destinats a restablir les materies primeres utilitzades",
    "d) L'economia ambiental té com objectiu la reducció/substitució de l'us del capital per matèries primeres"
  ],
  correcta: "a"
},
{
  texto: "Respecte al forat de la capa d'ozó, quina unitat s'utilitza per indicar la concentració de l'ozó en l'atmosfera?",
  opciones: [
    "a) Dobson",
    "b) GWM",
    "c) MTL",
    "d) Cap de les anteriors"
  ],
  correcta: "a"
},
{
  texto: "Respecte als principals problemes mediambientals, quina de les següents substàncies NO és rellevant per la contaminació fotoquímica?",
  opciones: [
    "a) CH4",
    "b) COVs",
    "c) CO2",
    "d) Cap de les anteriors"
  ],
  correcta: "c"
},
{
  texto: "Respecte als principals problemes mediambientals, quina de les següents afirmacions és falsa?",
  opciones: [
    "a) L'esgotament de la capa d'ozó es produit sobretot per l'emissió de CFCs i halons",
    "b) L'acidificació és deguda sobretot a les emissions d'oxid de sofre i diòxid de nitrogen",
    "c) L'eutrofització és deguda principalment a un excés de COVs (compostos orgànics volàtils) en l'aire",
    "d) La contaminació fotoquímica pot causar problemes respiratoris com l'asma"
  ],
  correcta: "c"
},
{
  texto: "Amb quines sigles es coneix l'ordenança municipal que regula la tramitació de llicències ambientals a Barcelona?",
  opciones: [
    "a) IPPC",
    "b) LIIA",
    "c) PCAA",
    "d) OMAIIAA"
  ],
  correcta: "d"
},
{
  texto: "Segons la PCAA, si sol·licitem una autorització ambiental, i en el temps establert no es resolt de manera expressa, indiqueu la resposta incorrecta:",
  opciones: [
    "a) Entendrem l'autorització com positiva per silenci administratiu",
    "b) Entendrem l'autorització com negativa per silenci administratiu",
    "c) La no-resolució en el termini establert indica a la persona sol·licitant que ha estat desestimada la sol·licitud d'autorització",
    "d) En el cas de no-resolució, podem presentar un recurs administratiu"
  ],
  correcta: "a"
},
{
  texto: "Respecte a qui és i qui no és tècnic competent en projectes tècnics ambientals, indiqueu la resposta incorrecta:",
  opciones: [
    "a) La Llei no determina quines titulacions són les habilitades. Diu que han d'estar signades per tècnics competents.",
    "b) Un biòleg no pot ser en cap cas tècnic competent en projectes ambientals",
    "c) Com a norma general, si el projecte és senzill i les instal·lacions són complementàries a l'edifici, es pot considerar que un arquitecte és un tècnic competent",
    "d) Com a norma general, els projectes de l'annex II (incidència mediambiental mitjana) tant els pot fer un enginyer, enginyer tècnic, arquitecte tècnic o arquitectes"
  ],
  correcta: "b"
},
{
  texto: "Respecte als contaminants orgànics persistents, quina de les següents informacions és falsa?",
  opciones: [
    "a) Els COPs són substàncies organoclorades",
    "b) El PCB és un tipus de plaguicida força habitual en països africans",
    "c) Les dioxines i els furans s'inclouen dintre dels anomenats 'dotze bruts'",
    "d) El conveni d'Estocolm és un acord multilateral per adoptar mesures de control per eliminar o restringir l'ús dels COPs"
  ],
  correcta: "b"
},
{
  texto: "Quin dels següents orgànics persistents es produeix de manera accidental?",
  opciones: [
    "a) Les dioxines i furans",
    "b) Els PCBs",
    "c) DDT",
    "d) Tots es produeixen de manera voluntària per aconseguir algun objectiu. Cap és accidental"
  ],
  correcta: "a"
},
{
  texto: "A quins dels següents productes no poden concedir-se etiquetes ecològiques?",
  opciones: [
    "a) Mobiliari",
    "b) Ordinadors",
    "c) Medicaments",
    "d) No hi ha restriccions de cap dels productes anteriors sempre que superin favorablement les proves corresponents"
  ],
  correcta: "c"
},
{
  texto: "Quina de les següents afirmacions és falsa?",
  opciones: [
    "a) Dins dels tipus de riscs associats a instal·lacions industrials, els riscs majors són els considerats com a riscs mediambientals",
    "b) La responsabilitat penal acompanya a les responsabilitats administratives i civils quan s'han de reparar danys al medi ambient",
    "c) Les Ecoetiquetes poden concedir-se a productes i serveis",
    "d) A Catalunya es poden trobar dos tipus d'etiquetes ecològiques: el Distintiu de Garantia de Qualitat Ambiental i l'Etiqueta Ecològica de la Unió Europea"
  ],
  correcta: "a"
},
{
  texto: "Respecte als sistemes de Gestió Ambiental EMAS i ISO 14000, quina de les següents afirmacions és falsa?",
  opciones: [
    "a) El promotor del Reglament EMAS és l'Administració Pública (UE) mentre que el de la norma ISO 14001 és una entitat privada (International Standard Organization)",
    "b) En el Reglament EMAS no és obligatori comunicar externament els resultats, mentre que en la norma ISO 14001 sí que existeix aquesta obligació",
    "c) Tant el Reglament EMAS com la ISO 14001 són d'aplicació voluntàries",
    "d) El Reglament EMAS és d'àmbit europeu mentre que la norma ISO 14001 és d'àmbit internacional"
  ],
  correcta: "b"
},
{
  texto: "En el marco del concepto de 'Desarrollo sostenible', ¿cuál de las siguientes respuestas es falsa?",
  opciones: [
    "a) La satisfacción de las necesidades provoca una presión exponencial sobre los recursos",
    "b) La satisfacción de las necesidades se realiza a través del consumo de bienes y servicios",
    "c) Para un desarrollo sostenible deben satisfacerse las necesidades del presente aun comprometiendo la capacidad de las generaciones futuras para atender sus propias necesidades",
    "d) La elasticidad de los factores implica suplir el agotamiento de materias primas por una mayor inversión que permita aumentar la eficiencia de los recursos o encontrar materiales sustitutivos."
  ],
  correcta: "c"
},
{
  texto: "¿Cuál de las siguientes afirmaciones es correcta?",
  opciones: [
    "a) El Protocolo de Kioto todavia está vigente.",
    "b) El Protocolo de Kioto entró en vigor cuando lo firmaron 55 países representando el 55% de las emisiones de gases de efecto invernadero emitidas en el año 1990.",
    "c) El Protocolo de Kioto regula sólo las emisiones de CO2.",
    "d) El Acuerdo de París ratificado el 2016 tiene como objetivo la reducción de las emisiones de gases de efecto invernadero en un 100% el 2030."
  ],
  correcta: "b"
},
{
  texto: "Respecto al Sistema de Gestión Ambiental EMAS, ¿cuál de las siguientes afirmaciones es falsa?",
  opciones: [
    "a) Las empresas que han implantado un sistema EMAS pueden poner el logo de EMAS en el envase de los productos que fabrican.",
    "b) Contribuye a mejorar la relación de la empresa con el entorno.",
    "c) Reporta beneficios económicos a largo plazo.",
    "d) Utiliza indicadores relativos para no penalizar el crecimiento de la empresa."
  ],
  correcta: "a"
},
{
  texto: "Señala la respuesta falsa:",
  opciones: [
    "a) El Mecanismo de Aplicación Conjunta pone en contacto países en vías de desarrollo y países ya desarrollados.",
    "b) El Comercio de Emisiones existe tanto a nivel de países como de instalaciones.",
    "c) Los países en vías de desarrollo no están obligados a implementar Mecanismos de Desarrollo Limpio.",
    "d) Tanto en el Mecanismo de Aplicación Conjunta como en el Mecanismo de Desarrollo Limpio, la reducción de emisiones se calcula a partir de las que se producirían en ausencia de la actividad proyectada."
  ],
  correcta: "a"
},
{
  texto: "¿Cuál de las siguientes afirmaciones es falsa?",
  opciones: [
    "a) Los Sistemas de Gestión Ambiental se aplican a productos.",
    "b) Los Sistemas de Gestión Ambiental deben ser revisados periódicamente.",
    "c) Tener un Sistema de Gestión Ambiental es voluntario.",
    "d) El ahorro de recursos es una motivación para la implantación de Sistemas de Gestión Ambiental."
  ],
  correcta: "a"
},
{
  texto: "¿Cuál de las siguientes afirmaciones es cierta?",
  opciones: [
    "a) El Análisis de Ciclo de Vida es un instrumento obligatorio para las empresas que quieren fabricar un producto nuevo.",
    "b) Los Sistemas de Gestión Ambiental son obligatorios para licitar con la Administración Pública.",
    "c) El cumplimiento de la Directiva sobre Emisiones Industriales es voluntario para las actividades del Anexo I.",
    "d) Los Sistemas de Gestión Ambiental son instrumentos voluntarios que aplican a organizaciones."
  ],
  correcta: "d"
},
{
  texto: "Señala la respuesta falsa:",
  opciones: [
    "a) Solo las industrias manufactureras pueden implementar un sistema de gestión ambiental.",
    "b) El número de empresas certificadas con ISO 14001 es mucho mayor que el número de empresa registradas con un sistema EMAS.",
    "c) El promotor del Reglamento EMAS es la administración pública (Unión Europea).",
    "d) La adopción de la norma ISO 14001 es voluntaria."
  ],
  correcta: "a"
},
{
  texto: "El Portal de Emisiones Industriales permite conocer las emisiones contaminantes:",
  opciones: [
    "a) De todas las empresas europeas.",
    "b) De todas las empresas europeas que forman parte del Anexo I de la Directiva en Emisiones Industriales.",
    "c) De las empresas europeas que forman parte del Anexo I de la Directiva en Emisiones Industriales y emiten por encima del valor umbral fijado (sin tener una aproximación sectorial).",
    "d) De las empresas europeas que forman parte del Anexo I de la Directiva en Emisiones Industriales y emiten por encima del Valor Límite de Emisión fijado por la Mejor Técnica Disponible."
  ],
  correcta: "c"
},
{
  texto: "¿Cuál de las siguientes afirmaciones es correcta?",
  opciones: [
    "a) La huella ecológica mide la máxima población de una especie concreta que puede ser soportada en un hábitat determinado, sin disminuir permanentemente la productividad de éste.",
    "b) La capacidad de carga representa la superficie de terreno o de agua ecológicamente productivos necesarios para generar los recursos y asimilar los residuos de una población determinada.",
    "c) En España existe un superávit ecológico.",
    "d) Todas las respuestas anteriores son falsas."
  ],
  correcta: "b"
},
{
  texto: "¿Cuál de las siguientes afirmaciones es falsa?",
  opciones: [
    "a) La capa de ozono no tiene relación directa con el cambio climático.",
    "b) La degradación de la capa de ozono es causada principalmente por los clorofluorocarbonos (CFCS) liberados por actividades humanas.",
    "c) La capa de ozono es una región de la atmósfera que protege la Tierra de la radiación solar ultravioleta.",
    "d) La capa de ozono regula la temperatura global del planeta y es esencial para prevenir el cambio climático."
  ],
  correcta: "d"
},
{
  texto: "En relación a la legalización de actividades, ¿cuál de las siguientes afirmaciones es cierta?",
  opciones: [
    "a) Los Valores Límite de Emisión son de carácter sectorial, dependen de cada sector productivo.",
    "b) El proyecto de legalización debe presentarse a todas las administraciones públicas afectadas.",
    "c) Los permisos son indefinidos.",
    "d) Los valores umbrales del Portal de Emisiones Industriales (antiguo Registro Europeo de Emisiones y Transferencia de Contaminantes E-PRTR) cambian en función del tipo de actividad."
  ],
  correcta: "d"
},
{
  texto: "Señala la respuesta verdadera:",
  opciones: [
    "a) De acuerdo con la Directiva de Emisiones Industriales, una actividad nueva debe adoptar un enfoque basado en la reacción a la contaminación.",
    "b) Una actividad que emite por encima del Valor Límite de Emisión es ilegal.",
    "c) La última actualización de la Directiva sobre Emisiones Industriales introduce incentivos fiscales para aquellas industrias que logren reducir sus emisiones por debajo de los límites establecidos.",
    "d) Una actividad que emite por encima del valor umbral fijado en el Portal de Emisiones Industriales no es legal."
  ],
  correcta: "b"
},
{
  texto: "¿Cuál de las siguientes respuestas es cierta?",
  opciones: [
    "a) La predicción de temperaturas futuras conlleva el uso de modelos de simulación y escenarios de emisiones.",
    "b) La concentración de CO2 va a disminuir a lo largo del siglo XXI en todos los escenarios.",
    "c) La generación de emisiones de CO2 va a aumentar a lo largo del siglo XXI en todos los escenarios.",
    "d) Los impactos del cambio climático se distribuirán de forma uniforme en todo el planeta."
  ],
  correcta: "a"
},
{
  texto: "Señala la respuesta correcta:",
  opciones: [
    "a) Los escenarios futuros de clima predicen más situaciones extremas en términos de frío.",
    "b) Los modelos de predicción climática a escala regional ofrecen una menor precisión que los modelos globales.",
    "c) Se prevé un incremento mayor de temperatura bajo el escenario SSP5-8.5 que en el escenario SSP1-1.9.",
    "d) En la subregión Mediterranea, se prevé un incremento de la precipitación a finales de siglo."
  ],
  correcta: "c"
},
{
  texto: "Respecte al concepte de 'desenvolupament sostenible', quina de les següents respostes és falsa?",
  opciones: [
    "a) Desenvolupar-se consisteix en satisfer les necessitats, creant una pressió exponencial sobre els recursos.",
    "b) La satisfacció de les necessitats es realitza mitjançant el consum de béns i serveis.",
    "c) Per aconseguir un desenvolupament sostenible, les necessitats de les generacions presents s’han de satisfer sense comprometre la capacitat de les generacions futures de satisfer les seves pròpies necessitats.",
    "d) La taxa de generació de residus d'un país no ha de superar la seva capacitat d'assimilació més l'exportació a altres països."
  ],
  correcta: "d"
},
{
  texto: "Quina de les següents respostes no és un pilar fonamental del concepte de desenvolupament sostenible?",
  opciones: [
    "a) Creixement econòmic.",
    "b) Protecció i millora del medi ambient.",
    "c) Equitat social.",
    "d) Totes les altres afirmacions són correctes."
  ],
  correcta: "d"
},
{
  texto: "En relació a l'Anàlisi de Cicle de Vida (ACV), quina de les següents afirmacions és falsa?",
  opciones: [
    "a) L'ACV inclou els següents passos interrelacionats: (1) Definició d'objectius i abast, (2) Anàlisi d'inventari, (3) Avaluació d'impacte i (4) Interpretació.",
    "b) Els principis i l'estructura de l'ACV estan definits en la norma UNE-EN ISO 9000 Gestió Ambiental.",
    "c) L'ACV és útil quan es comparen materials, productes, processos o activitats des d'un punt de vista ambiental.",
    "d) L'ACV és un procés utilitzat per avaluar les càrregues ambientals associades a un producte, procés o activitat al llarg del seu cicle de vida."
  ],
  correcta: "b"
},
{
  texto: "L'ACV permet:",
  opciones: [
    "a) Desplaçar problemes ambientals d'un medi a un altre.",
    "b) Quantificar les emissions ambientals a l'aire, a l'aigua i al sòl en relació amb cada etapa del cicle de vida i/o amb els processos principals.",
    "c) Realitzar una comparació ràpida del comportament ambiental de dos productes similars.",
    "d) Avaluar la sensibilitat de l'entorn."
  ],
  correcta: "b"
},
{
  texto: "Quan un sistema o un subsistema proporciona diferents productes i no tots ells estan inclosos dins dels límits de l'ACV:",
  opciones: [
    "a) S'ha de fer una assignació de càrregues.",
    "b) S'han de caracteritzar els impactes.",
    "c) S'han de normalitzar els impactes.",
    "d) S'ha d'indicar la profunditat de l'estudi."
  ],
  correcta: "a"
},
{
  texto: "L'inventari del cicle de vida permet:",
  opciones: [
    "a) Convertir la informació recopilada en informació interpretable.",
    "b) Avaluar els possibles impactes sobre la salut humana i l'ambient d'un producte, procés o activitat.",
    "c) Quantificar els requisits energètics i de matèries primeres, les emissions atmosfèriques, les emissions de corrents residuals líquides, els residus sòlids i altres emissions per a tot el cicle de vida d'un producte, procés o activitat.",
    "d) Definir l'objectiu i l'abast de l'estudi."
  ],
  correcta: "c"
},
{
  texto: "La Directiva 2010/75/UE sobre emissions industrials es basa en el principi de:",
  opciones: [
    "a) Compensació econòmica",
    "b) Múltiples finestres",
    "c) Permisos permanents",
    "d) Dret del públic a participar"
  ],
  correcta: "d"
},
{
  texto: "Dins del marc de la Llei 20/2009 de prevenció i control ambiental de les activitats:",
  opciones: [
    "a) Les activitats de l'Annex I estan subjectes a autorització ambiental amb declaració d'impacte ambiental o Declaració d'impacte ambiental amb autorització substantiva.",
    "b) Les activitats de l'Annex II estan subjectes a llicència ambiental.",
    "c) Les activitats de l'Annex III estan subjectes a comunicació ambiental.",
    "d) Totes les afirmacions són certes."
  ],
  correcta: "d"
},
{
  texto: "Respecte a una activitat inclosa a l'Annex III de la Llei 20/2009 sobre prevenció i control ambiental de les activitats que es troba en una població amb 100.000 habitants, qui és el responsable d'emetre el permís?",
  opciones: [
    "a) La Generalitat de Catalunya",
    "b) El Consell Comarcal",
    "c) L'Associació de Veïns",
    "d) L'Ajuntament"
  ],
  correcta: "d"
},
{
  texto: "La Directiva 2010/75/UE sobre emissions industrials:",
  opciones: [
    "a) Estableix valors límit d'emissió per a cada activitat inclosa a l'Annex I.",
    "b) Té com a objectiu principal la reparació dels danys ambientals.",
    "c) Prescriu l'ús de tècniques o tecnologies específiques depenent de l'annex de l'activitat.",
    "d) Exigeix obtenir un permís en cas d'estar inclosos dins de l'Annex I."
  ],
  correcta: "d"
},
{
  texto: "Respecte als gasos d'efecte hivernacle, quina de les següents afirmacions és falsa?",
  opciones: [
    "a) El vapor d'aigua no és un gas d'efecte hivernacle.",
    "b) El diòxid de carboni (CO2), el metà (CH4) i l'òxid nitrós (N2O) estan presents de manera natural a l'atmosfera però també són d'origen antropogènic.",
    "c) Els gasos d'efecte hivernacle són transparents a l'energia d’ona curta.",
    "d) El Potencial d'Escalfament Global de l'hexafluorur de sofre (SF6) és superior al Potencial d'Escalfament Global del diòxid de carboni (CO2)."
  ],
  correcta: "a"
},
{
  texto: "Pel que fa als escenaris d'emissió, quina de les següents afirmacions és certa?",
  opciones: [
    "a) En tots els escenaris d'emissió, les emissions de CO2 augmentaran durant el segle XXI.",
    "b) En tots els escenaris d'emissió, les emissions de CO2 disminuiran durant el segle XXI.",
    "c) En tots els escenaris d'emissió, la concentració de CO2 a l'atmosfera augmentarà durant el segle XXI.",
    "d) En tots els escenaris d'emissió, la concentració de CO2 a l'atmosfera disminuirà durant el segle XXI."
  ],
  correcta: "c"
},
{
  texto: "Quina de les següents afirmacions és certa?",
  opciones: [
    "a) Segons el Protocol de Kyoto, l’Estat Espanyol havia de disminuir les seves emissions de CO2, N2O i CH4 en un 8% respecte als nivells de l'any 90 durant el període 2008-2012.",
    "b) Segons el Protocol de Kyoto, l’Estat Espanyol havia de disminuir les seves emissions de CO2, N2O i CH4 en un 5% respecte als nivells de l'any 90 durant el període 2008-2012.",
    "c) Segons el Protocol de Kyoto, l’Estat Espanyol podia augmentar les seves emissions de CO2, N2O i CH4 en un 15% respecte als nivells de l'any 90 durant el període 2008-2012.",
    "d) Espanya no ha ratificat el Protocol de Kyoto, i per tant, no té límits en la generació d'emissions de CO2, N2O i CH4."
  ],
  correcta: "c"
},
{
  texto: "Quina de les següents afirmacions és falsa?",
  opciones: [
    "a) El Protocol de Kyoto va entrar en vigor el 2005.",
    "b) La millor opció per fer front al canvi climàtic és implementar mesures d'adaptació en línia amb mesures de mitigació.",
    "c) Els Plans Nacionals d'Assignació de Drets d'Emissió regulen qüestions de comerç internacional.",
    "d) Els països en vies de desenvolupament que ja han ratificat el Protocol de Kyoto no havien de complir cap límit d'emissions."
  ],
  correcta: "c"
},
{
  texto: "Pel que fa a EMAS i ISO 14001, quina de les següents afirmacions és falsa?",
  opciones: [
    "a) Per verificar que el sistema de gestió ambiental compleix els requisits, en cas del Reglament EMAS es fa una certificació mentre que en cas de la norma ISO 14001 es realitza una verificació.",
    "b) La comunicació externa dels resultats no és obligatòria en l'estàndard ISO 14001, mentre que el Reglament EMAS manté aquesta obligació.",
    "c) El Reglament EMAS és d’àmbit europeu, mentre que la norma ISO 14001 és d’àmbit internacional.",
    "d) Tant EMAS com ISO 14001 són voluntaris."
  ],
  correcta: "a"
},
{
  texto: "Pel que fa a EMAS, quina de les següents afirmacions és falsa?",
  opciones: [
    "a) El Reglament EMAS és voluntari.",
    "b) El Reglament EMAS promou la millora contínua del comportament ambiental de les organitzacions, entre altres.",
    "c) El Reglament EMAS només s'aplica a organitzacions privades.",
    "d) Un dels principals beneficis per a les organitzacions que implementen EMAS és augmentar la motivació i la conscienciació dels treballadors."
  ],
  correcta: "c"
},
{
  texto: "Pel que fa als Sistemes de Gestió Ambiental, quina de les següents afirmacions és certa?",
  opciones: [
    "a) Van néixer a la dècada dels 90 com a instrument voluntari per a aquelles empreses que volien assolir un alt nivell de protecció ambiental.",
    "b) Inclouen l'estructura organitzativa, responsabilitats, pràctiques, procediments, processos i recursos per determinar i implementar la política ambiental.",
    "c) Són una manera sistemàtica i planificada de gestionar els aspectes ambientals de l'empresa.",
    "d) Totes les anteriors són certes."
  ],
  correcta: "d"
},
{
  texto: "Pel que fa als Sistemes de Gestió Ambiental, quina de les següents afirmacions és falsa?",
  opciones: [
    "a) Tant el Reglament EMAS com la norma ISO 14001 es basen en el Cicle de Deming.",
    "b) La certificació ISO 14001:2004 és l'acte pel qual un tercer dona proves de la conformitat del sistema de gestió ambiental de l'organització en relació amb els requisits establerts en la norma ISO 14001:2004.",
    "c) La política ambiental quantifica l'objectiu ambiental a assolir l'any vinent.",
    "d) Les auditories externes són obligatòries tant en el Reglament EMAS com en la norma ISO 14001."
  ],
  correcta: "c"
}
];
// --- FRASES DE ÁNIMO ---
const frases_animo = [
  "¡Muy bien! 😎",
  "¡Eso es, perfecto, te camelo caramelo! 🔥",
  "¡Ole tú huevos! 💪",
  "¡Exacto, estás on fire! 🚀",
  "¡Qué máquina eres! 😍",
  "¡Correcto, así se hace! 👏",
  "¡Te lo sabes de memoria ya! 💥"
];

// --- VARIABLES ---
let i = 0;
let puntuacion = 0;
let preguntasParaEsteTest = [];

// --- FUNCIONES ---

/**
 * Baraja un array aleatoriamente (algoritmo Fisher-Yates).
 * @param {Array} array El array a barajar.
 */
function barajarPreguntas(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

/**
 * Muestra un mensaje en el chat.
 * @param {string} texto El contenido del mensaje.
 * @param {string} tipo 'bot' o 'user'.
 */
function mostrarMensaje(texto, tipo) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.classList.add("message", tipo);
  // Convierte los saltos de línea (\n) en etiquetas <br>
  msg.innerHTML = texto.replace(/\n/g, "<br>");
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

/**
 * Muestra la pregunta actual y sus opciones en un solo mensaje.
 */
function mostrarPregunta() {
  // Usa el array de 20 preguntas
  if (!preguntasParaEsteTest[i]) return;

  const p = preguntasParaEsteTest[i];
  // Une la pregunta y las opciones en un solo texto
  const textoCompleto = `${p.texto}\n\n${p.opciones.join("\n")}`;
  mostrarMensaje(textoCompleto, "bot");
}

/**
 * Procesa la respuesta del usuario.
 * @param {string} opcionElegida "a", "b", "c" o "d".
 */
function responder(opcionElegida) {
  // Usa el array de 20 preguntas
  if (!preguntasParaEsteTest[i]) return;

  const p = preguntasParaEsteTest[i];
  // Muestra solo la letra, como pediste
  mostrarMensaje(`${opcionElegida.toUpperCase()}`, "user");

  if (opcionElegida === p.correcta) {
    puntuacion++;
    mostrarMensaje(frases_animo[Math.floor(Math.random() * frases_animo.length)], "bot");
  } else {
    mostrarMensaje(`❌ Incorrecto. La respuesta correcta era ${p.correcta.toUpperCase()}.`, "bot");
  }

  i++;
  // Comprueba si quedan preguntas en el array de 20
  if (i < preguntasParaEsteTest.length) {
    setTimeout(mostrarPregunta, 800);
  } else {
    setTimeout(() => {
      // Muestra la puntuación final sobre 20 (o el total que haya)
      mostrarMensaje(`🏁 Has acertado ${puntuacion} de ${preguntasParaEsteTest.length} preguntas. 💡`, "bot");
      desactivarBotones();
    }, 800);
  }
}

/**
 * Desactiva los botones de opción al final del test.
 */
function desactivarBotones() {
  document.querySelectorAll(".btn-opcion").forEach(btn => btn.disabled = true);
}

// --- ARRANQUE ---
document.addEventListener("DOMContentLoaded", () => {
  i = 0;
  puntuacion = 0;
  
  // 1. Barajamos TODO el array de preguntas
  barajarPreguntas(preguntas); 
  
  // 2. Nos quedamos solo con las 20 primeras (o menos, si el array es más corto)
  preguntasParaEsteTest = preguntas.slice(0, 20); 

  mostrarMensaje(`🧠 Bienvenido al test. Se han elegido ${preguntasParaEsteTest.length} preguntas al azar. 💬`, "bot");
  setTimeout(mostrarPregunta, 500);

  document.getElementById("btnA").onclick = () => responder("a");
  document.getElementById("btnB").onclick = () => responder("b");
  document.getElementById("btnC").onclick = () => responder("c");
  document.getElementById("btnD").onclick = () => responder("d");
});

