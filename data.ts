import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    category: "Inclusión",
    text: "En una IE, se está realizando una reunión colegiada sobre los documentos de gestión pedagógica. En este contexto, los docentes están compartiendo sus ideas sobre una gestión escolar que considere los valores del enfoque inclusivo. ¿Cuál de los siguientes comentarios de los docentes se alinea a dichos valores?",
    options: [
      { 
        id: 'A', 
        text: "\"La escuela debe contribuir a que los estudiantes con discapacidad puedan tener desempeños como los de sus compañeros que no tienen esa condición\".",
        feedback: "Refleja un enfoque homogeneizador, no inclusivo. Busca que todos alcancen los mismos desempeños, negando la diversidad y características individuales."
      },
      { 
        id: 'B', 
        text: "\"La escuela debe favorecer que los estudiantes con discapacidad cuenten con las mismas posibilidades de aprender que cualquier otro estudiante\".",
        feedback: "Se alinea perfectamente con el enfoque inclusivo: enfatiza la igualdad de oportunidades y el derecho al aprendizaje sin exigir los mismos desempeños."
      },
      { 
        id: 'C', 
        text: "\"La escuela debe promover que los estudiantes con discapacidad reciban tanto un tratamiento especializado como una atención pedagógica\".",
        feedback: "Se centra en un enfoque médico-rehabilitador o de integración. Pone el foco en 'tratar' la discapacidad más que en equiparar oportunidades educativas."
      }
    ],
    correctAnswer: 'B',
    explanation: "La alternativa B es la única que refleja el valor fundamental del enfoque inclusivo: garantizar que todos los estudiantes tengan las mismas oportunidades para aprender, respetando sus diferencias individuales."
  },
  {
    id: 2,
    category: "Inclusión y DUA",
    text: "Durante una reunión sobre el DUA, el docente sugiere: \"Cuando diseñemos una sesión... es necesario que los recursos respondan a las características de nuestros estudiantes. De esta manera, podemos ofrecer textos, gráficos o materiales audiovisuales...\". ¿Qué principio del DUA se evidencia?",
    options: [
      { 
        id: 'A', 
        text: "Proporcionar múltiples formas de compromiso.",
        feedback: "El compromiso se refiere a la motivación y el interés (el 'por qué'). La sugerencia no habla de motivación, sino de formatos de información."
      },
      { 
        id: 'B', 
        text: "Proporcionar múltiples formas de representación.",
        feedback: "Correcto. Se refiere explícitamente a ofrecer diversos formatos (texto, gráficos, video) para que los estudiantes accedan a la información (el 'qué' del aprendizaje)."
      },
      { 
        id: 'C', 
        text: "Proporcionar múltiples formas de acción y expresión.",
        feedback: "Este principio se refiere a cómo los estudiantes demuestran lo que saben (el 'cómo'). La sugerencia habla de cómo reciben la información."
      }
    ],
    correctAnswer: 'B',
    explanation: "El principio de Representación busca que la información sea accesible para todos mediante diferentes formatos, eliminando barreras de percepción y comprensión."
  },
  {
    id: 3,
    category: "Inclusión",
    text: "Sobre una propuesta para adaptar el patio (rampas, seguridad, zonas de descanso) para estudiantes con discapacidad física. ¿Cuál comentario se alinea al enfoque inclusivo?",
    options: [
      { 
        id: 'A', 
        text: "\"Considero que... se está priorizando el cuidado... estaremos ayudando a prevenir accidentes...\"",
        feedback: "Refleja un enfoque de protección/prevención. Prioriza el cuidado sobre la autonomía y tiene un matiz paternalista."
      },
      { 
        id: 'B', 
        text: "\"Creo que la propuesta favorecerá la integración... será más fácil que reciban apoyo de sus compañeros...\"",
        feedback: "Refleja integración, no inclusión. Fomenta la dependencia ('recibir apoyo') en lugar de la autonomía en el uso del espacio."
      },
      { 
        id: 'C', 
        text: "\"Me parece que la propuesta tiene como finalidad crear condiciones favorables... ayudará a que dichos estudiantes, así como sus compañeros, puedan disfrutar libremente...\"",
        feedback: "Correcto. Se centra en adaptar el entorno para permitir la participación autónoma ('disfrutar libremente') y reconoce el beneficio para todos."
      }
    ],
    correctAnswer: 'C',
    explanation: "El enfoque inclusivo no busca proteger o ayudar individualmente, sino crear condiciones en el entorno que permitan la participación plena y autónoma de todos los estudiantes."
  },
  {
    id: 4,
    category: "Comunicación",
    text: "Para contribuir a la comprensión del texto sobre las abejas, la docente plantea varias preguntas. ¿Cuál se centra en obtener información explícita?",
    options: [
      { 
        id: 'A', 
        text: "¿Para qué se creó el Día Mundial de las Abejas?",
        feedback: "Correcto. La respuesta está literal en el primer párrafo ('para sensibilizar a la comunidad internacional...'). Es información explícita."
      },
      { 
        id: 'B', 
        text: "¿Por qué se busca proteger a las abejas?",
        feedback: "Requiere inferencia. El estudiante debe deducir la razón conectando la importancia de las abejas con su peligro de desaparición."
      },
      { 
        id: 'C', 
        text: "¿Cuál es el propósito principal del texto?",
        feedback: "Requiere reflexión y evaluación global del texto para identificar la intención del autor. Es nivel crítico."
      }
    ],
    correctAnswer: 'A',
    explanation: "Las preguntas de nivel literal (explícitas) solicitan información que está escrita directamente en el texto y puede ser localizada y copiada."
  },
  {
    id: 5,
    category: "Comunicación",
    text: "Sobre el fragmento que cita a expertos de la FAO acerca de la dependencia alimentaria. ¿Qué estudiante identifica la intención del autor?",
    options: [
      { 
        id: 'A', 
        text: "Ramiro: \"...sirve para que el lector sepa que algunas personas se especializan en el estudio de las abejas\".",
        feedback: "Se centra en un detalle secundario (que existen expertos) y no en la función del dato dentro del argumento."
      },
      { 
        id: 'B', 
        text: "Merlina: \"...la intención del autor era destacar que existe una organización mundial de la agricultura...\".",
        feedback: "Confunde la fuente de autoridad (FAO) con el propósito del texto. El texto es sobre abejas, no sobre la FAO."
      },
      { 
        id: 'C', 
        text: "Rocío: \"...el autor busca dar soporte a su argumento sobre los peligros de que las abejas desaparezcan\".",
        feedback: "Correcto. Identifica que la cita y el dato estadístico sirven para sustentar (dar soporte) la idea de por qué es peligroso que desaparezcan."
      }
    ],
    correctAnswer: 'C',
    explanation: "Identificar la intención implica comprender la función argumentativa de un fragmento: en este caso, usar una autoridad y datos para respaldar la tesis central."
  },
  {
    id: 6,
    category: "Ciencia y Tecnología",
    text: "Sobre la polinización. ¿Cuál de los estudiantes maneja información correcta?",
    options: [
      { 
        id: 'A', 
        text: "Mary: \"La polinización permite que las plantas obtengan nuevos individuos idénticos a ellas\".",
        feedback: "Incorrecto. Confunde reproducción sexual con asexual (clones). La polinización genera variabilidad genética, no individuos idénticos."
      },
      { 
        id: 'B', 
        text: "Favio: \"Entonces, todas las plantas realizan la polinización para reproducirse\".",
        feedback: "Incorrecto. Es una generalización falsa. Musgos y helechos (esporas) o plantas con reproducción vegetativa no usan polinización."
      },
      { 
        id: 'C', 
        text: "Matías: \"Debido a la polinización, las plantas producen frutos y semillas\".",
        feedback: "Correcto. La polinización es el paso previo necesario para la fecundación, que da como resultado la formación de frutos y semillas."
      }
    ],
    correctAnswer: 'C',
    explanation: "La comprensión científica correcta vincula la polinización (transporte de polen) con su consecuencia biológica directa en las plantas con flor: la producción de semillas y frutos."
  },
  {
    id: 7,
    category: "Comunicación",
    text: "La docente busca que los estudiantes reflexionen sobre el contenido del texto. ¿Cuál acción es adecuada?",
    options: [
      { 
        id: 'A', 
        text: "Pedir que señalen propuestas del texto y seleccionen las que podrían aplicar según su contexto.",
        feedback: "Correcto. Exige evaluar la información del texto y conectarla con su realidad ('según su contexto'), lo que implica reflexión y toma de decisiones."
      },
      { 
        id: 'B', 
        text: "Pedir que indiquen los aportes de las abejas y los escriban en carteles.",
        feedback: "Es una actividad de localización y reproducción de información (nivel literal), no de reflexión crítica."
      },
      { 
        id: 'C', 
        text: "Pedir que identifiquen los peligros y elaboren un gráfico.",
        feedback: "Es una actividad de reorganización de información (nivel inferencial básico/organización), pero no implica evaluación ni juicio crítico."
      }
    ],
    correctAnswer: 'A',
    explanation: "La reflexión sobre el contenido requiere que el estudiante vaya más allá del texto, evaluando su utilidad, validez o aplicabilidad en situaciones nuevas o personales."
  },
  {
    id: 8,
    category: "Personal Social",
    text: "¿En cuál comentario se evidencia una relación entre elementos naturales y sociales del espacio geográfico?",
    options: [
      { 
        id: 'A', 
        text: "Violeta: \"...más de 250 mil colmenas (natural)... y más de 1500 familias se dedican a la apicultura (social)...\".",
        feedback: "Correcto. Vincula explícitamente un recurso natural con una actividad económica y social humana, mostrando la interacción que define el espacio geográfico."
      },
      { 
        id: 'B', 
        text: "Rosa: \"...25 mil especies de plantas... probable que las abejas produzcan mucha miel y los apicultores la extraigan...\".",
        feedback: "La conexión es hipotética ('creo que es probable') y se centra más en la descripción biológica que en la interacción geográfica concreta."
      },
      { 
        id: 'C', 
        text: "Javier: \"...las abejas tienen un sistema de trabajo... las obreras cuidan larvas... la reina engendra...\".",
        feedback: "Describe la organización biológica de las abejas, no una relación con la sociedad humana."
      }
    ],
    correctAnswer: 'A',
    explanation: "El espacio geográfico se define por la interacción entre la sociedad y la naturaleza. Identificar actividades económicas basadas en recursos naturales es clave para esta comprensión."
  },
  {
    id: 9,
    category: "Comunicación",
    text: "Actividad: Señalar en una tira de papel el estribillo de una canción conocida mientras cantan. ¿Por qué favorece la lectura?",
    options: [
      { 
        id: 'A', 
        text: "Porque favorece que tomen en cuenta, progresivamente, la correspondencia entre lo que cantan y lo que está escrito.",
        feedback: "Correcto. Permite establecer la relación término a término entre la oralidad (que ya dominan) y la escritura, base del principio alfabético."
      },
      { 
        id: 'B', 
        text: "Porque promueve que recuerden la escritura correcta de algunas palabras.",
        feedback: "El objetivo no es memorizar ortografía (visual), sino comprender el sistema de escritura (correspondencia oral-escrito)."
      },
      { 
        id: 'C', 
        text: "Porque propicia que centren su atención en la adecuada pronunciación.",
        feedback: "El foco de la actividad es la lectura (relación con el texto escrito), no la oralidad o dicción."
      }
    ],
    correctAnswer: 'A',
    explanation: "Esta estrategia de 'lectura de textos memorizados' ayuda a los niños a descubrir que lo escrito representa lo hablado y a segmentar el flujo del habla en palabras."
  },
  {
    id: 10,
    category: "Comunicación",
    text: "Sobre la leyenda del jaguar. ¿Qué comentario evidencia una deducción?",
    options: [
      { 
        id: 'A', 
        text: "\"Veo que este grillo ya no aguantó seguir haciendo caso al jaguar\".",
        feedback: "Es una paráfrasis de lo que dice el texto ('se cansó de cumplir mandatos'). No aporta información nueva."
      },
      { 
        id: 'B', 
        text: "\"Es gracioso que el que quiere pelearse con el jaguar sea un animal tan chiquito\".",
        feedback: "Es una valoración personal o apreciación sobre el contenido, no una deducción lógica."
      },
      { 
        id: 'C', 
        text: "\"Los otros animales no se enfrentaban al jaguar porque pensaban que este les podía hacer daño\".",
        feedback: "Correcto. Infiere una causa (miedo/daño) que no está explícita en el texto para explicar un hecho (la obediencia de los animales)."
      }
    ],
    correctAnswer: 'C',
    explanation: "Deducir implica extraer información implícita a partir de pistas del texto y conocimientos previos. Aquí se infiere la motivación (miedo) a partir de la descripción de fuerza del jaguar."
  },
  {
    id: 11,
    category: "Comunicación",
    text: "Estudiante escribe \"IOCO\" por \"Pinocho\". ¿Qué acción ayuda a reflexionar sobre el sistema de escritura?",
    options: [
      { 
        id: 'A', 
        text: "Mostrar tarjetas con sílabas PI-NO-CHO y pedir que ordene.",
        feedback: "Es muy directivo y trabaja a nivel silábico, que el estudiante ya parece superar. No ayuda a analizar la composición de la sílaba."
      },
      { 
        id: 'B', 
        text: "Entregar cartel con \"pepino\" y \"chupete\", preguntar qué tienen en común con Pinocho e identificar letras útiles.",
        feedback: "Correcto. Ofrece andamiaje mediante referentes conocidos para que el estudiante descubra por sí mismo las letras que le faltan."
      },
      { 
        id: 'C', 
        text: "Brindar tarjetas con letras P-I-N-O-C-H-O y pedir comparar.",
        feedback: "Le da la respuesta (todas las letras). La comparación puede ser mecánica sin comprensión de por qué faltaban letras."
      }
    ],
    correctAnswer: 'B',
    explanation: "El uso de palabras referentes permite al estudiante analizar la estructura interna de las sílabas y avanzar de una hipótesis silábica a una alfabética."
  },
  {
    id: 12,
    category: "Comunicación",
    text: "Exposición oral con ideas repetitivas y desordenadas. ¿Qué priorizar en la retroalimentación?",
    options: [
      { 
        id: 'A', 
        text: "La utilización de léxico impreciso.",
        feedback: "El léxico puede mejorarse, pero no es lo más crítico si la estructura general falla."
      },
      { 
        id: 'B', 
        text: "La limitada progresión de ideas en su texto oral.",
        feedback: "Correcto. El texto da vueltas sobre lo mismo ('jugar', 'personajes') sin avanzar. Sin progresión, el mensaje no es efectivo."
      },
      { 
        id: 'C', 
        text: "El uso constante de muletillas.",
        feedback: "Las muletillas afectan la fluidez (forma), pero son menos graves que la falta de coherencia y desarrollo de ideas (contenido)."
      }
    ],
    correctAnswer: 'B',
    explanation: "En la producción de textos orales o escritos, la coherencia (progresión temática) es prioritaria sobre aspectos formales como el vocabulario o la fluidez."
  },
  {
    id: 13,
    category: "Comunicación",
    text: "Preparación de entrevista. ¿Qué criterio favorece el desarrollo de las ideas de la entrevistada?",
    options: [
      { 
        id: 'A', 
        text: "Pronunciar con claridad las preguntas.",
        feedback: "Ayuda a la comprensión, pero no garantiza que la respuesta sea extensa."
      },
      { 
        id: 'B', 
        text: "Usar vocabulario variado y preciso.",
        feedback: "Mejora la calidad de la pregunta, pero no necesariamente su potencial para generar desarrollo."
      },
      { 
        id: 'C', 
        text: "Elaborar preguntas para aclarar algunas de las ideas ofrecidas.",
        feedback: "Correcto. Las preguntas de seguimiento y aclaración invitan explícitamente a profundizar y expandir la información."
      }
    ],
    correctAnswer: 'C',
    explanation: "Para obtener información rica en una entrevista, es fundamental saber repreguntar y pedir aclaraciones o ejemplos sobre lo dicho."
  },
  {
    id: 14,
    category: "Comunicación",
    text: "Sobre semblanzas. ¿Qué comentario corresponde a sus características?",
    options: [
      { 
        id: 'A', 
        text: "Pedro: \"Es mejor evitar aspectos personales... restaría valor al trabajo\".",
        feedback: "Incorrecto. Una semblanza busca humanizar al personaje, por lo que lo personal es esencial."
      },
      { 
        id: 'B', 
        text: "Juana: \"Centrarnos en detallar experiencias profesionales y extenderlo cuanto sea posible\".",
        feedback: "Incorrecto. Describe un currículum o biografía detallada. La semblanza suele ser más breve y selectiva."
      },
      { 
        id: 'C', 
        text: "Carla: \"Incluir el contexto en el que vivieron para entender mejor el porqué de sus actividades\".",
        feedback: "Correcto. La contextualización es clave en la semblanza para dar sentido y profundidad a los logros del personaje."
      }
    ],
    correctAnswer: 'C',
    explanation: "La semblanza es un texto que combina información objetiva con una visión interpretativa y humana, donde el contexto ayuda a valorar los aportes del personaje."
  },
  {
    id: 15,
    category: "Comunicación",
    text: "Retroalimentación ante repetición innecesaria de ideas. ¿Qué acción es más adecuada?",
    options: [
      { 
        id: 'A', 
        text: "Pedir que comenten por qué es importante evitar repetición y planteen alternativas.",
        feedback: "Es reflexivo, pero falta el paso de analizar su propio texto antes de teorizar."
      },
      { 
        id: 'B', 
        text: "Leer su texto, indicar las repeticiones y solicitar reemplazos.",
        feedback: "Es muy directivo. El docente hace el trabajo de identificación por ellos."
      },
      { 
        id: 'C', 
        text: "Pedir que relean, identifiquen si se repite y evalúen si es indispensable.",
        feedback: "Correcto. Promueve la revisión autónoma y entrega un criterio claro (indispensabilidad) para tomar decisiones de edición."
      }
    ],
    correctAnswer: 'C',
    explanation: "La revisión efectiva debe promover la autonomía del estudiante para detectar y corregir sus propios textos basándose en criterios claros."
  },
  {
    id: 16,
    category: "Comunicación",
    text: "Sobre reseñas de cuentos. ¿Qué comentario se ajusta al propósito?",
    options: [
      { 
        id: 'A', 
        text: "\"Señalar hechos que ayuden a saber qué sucede y decir qué nos pareció para que lectores decidan\".",
        feedback: "Correcto. Combina la síntesis argumental con la valoración crítica, que es la esencia de la reseña."
      },
      { 
        id: 'B', 
        text: "\"Indicar partes que más nos gustaron y explicar por qué\".",
        feedback: "Esto es más un comentario de opinión personal, le falta la parte informativa/descriptiva de la obra."
      },
      { 
        id: 'C', 
        text: "\"Escribir usando lo que dice el cuento con cambios de palabras\".",
        feedback: "Esto describe un resumen o paráfrasis, no una reseña (falta la opinión)."
      }
    ],
    correctAnswer: 'A',
    explanation: "Una reseña tiene el doble propósito de informar sobre el contenido de una obra y ofrecer una opinión justificada para orientar a otros lectores."
  },
  {
    id: 17,
    category: "Comunicación",
    text: "Exposición sobre rocas. Usan conectores (\"porque\", \"causar\"). ¿Qué aspecto está logrado?",
    options: [
      { 
        id: 'A', 
        text: "Utilizar causas de manera estratégica en el texto.",
        feedback: "Correcto. El uso adecuado de conectores y explicaciones causales muestra capacidad para relacionar ideas."
      },
      { 
        id: 'B', 
        text: "Plantear el propósito explícitamente.",
        feedback: "El texto de la exposición no incluye una declaración explícita de propósito."
      },
      { 
        id: 'C', 
        text: "Mantener la unidad temática.",
        feedback: "El texto divaga un poco ('insectos', 'cambio climático') y pierde el foco en las rocas."
      }
    ],
    correctAnswer: 'A',
    explanation: "La capacidad de explicar 'por qué' ocurren las cosas (relaciones causales) es fundamental en textos expositivos, y el equipo lo demuestra con su lenguaje."
  },
  {
    id: 18,
    category: "Comunicación",
    text: "Uso de términos difíciles (\"casimero biológico\"). ¿Cómo retroalimentar la adecuación?",
    options: [
      { 
        id: 'A', 
        text: "Buscar definiciones en diccionario e incluirlas.",
        feedback: "Solución mecánica. Las definiciones de diccionario pueden ser igual de difíciles y no garantizan comprensión."
      },
      { 
        id: 'B', 
        text: "Preguntar qué términos podrían explicarse mejor tomando en cuenta al público y pedir propuestas.",
        feedback: "Correcto. Centra la reflexión en la audiencia (el público) y promueve la búsqueda creativa de formas de explicar."
      },
      { 
        id: 'C', 
        text: "Preguntar fuente y razón de inclusión.",
        feedback: "Se enfoca en la validez de la información, no en su adecuación comunicativa al público."
      }
    ],
    correctAnswer: 'B',
    explanation: "La adecuación textual implica adaptar el registro y la complejidad del lenguaje a las características del destinatario."
  },
  {
    id: 19,
    category: "Comunicación",
    text: "Estudiante compara \"Karlota\" con \"Carlota\" y descubre que se escriben igual (mismo sonido). ¿Qué aprendizaje evidencia?",
    options: [
      { 
        id: 'A', 
        text: "Identifica que un mismo sonido puede representarse con diversas letras.",
        feedback: "Correcto. Descubre la correspondencia polivalente del fonema /k/ (puede ser C o K)."
      },
      { 
        id: 'B', 
        text: "Identifica que las letras tienen una organización determinada.",
        feedback: "Esto se referiría al orden de las letras, que la estudiante ya respetaba en 'Karlota'."
      },
      { 
        id: 'C', 
        text: "Identifica que existen reglas ortográficas.",
        feedback: "Aún no conoce la regla (cuándo usar C o K), solo ha descubierto la posibilidad de variación."
      }
    ],
    correctAnswer: 'A',
    explanation: "Este es un hito importante en la alfabetización: comprender que la relación sonido-letra no siempre es biunívoca (uno a uno)."
  },
  {
    id: 20,
    category: "Ciencia y Tecnología",
    text: "Hipótesis sobre bolsas de papel vs plástico y hongos. ¿Cuál es la variable independiente?",
    options: [
      { 
        id: 'A', 
        text: "El tipo de pan.",
        feedback: "Es una variable controlada (se usa el mismo pan)."
      },
      { 
        id: 'B', 
        text: "El material de las bolsas.",
        feedback: "Correcto. Es el factor que se manipula o cambia intencionalmente para ver su efecto."
      },
      { 
        id: 'C', 
        text: "El tiempo de crecimiento de hongos.",
        feedback: "Es la variable dependiente (el efecto que se mide)."
      }
    ],
    correctAnswer: 'B',
    explanation: "En una indagación experimental, la variable independiente es la causa presunta que el investigador modifica."
  },
  {
    id: 21,
    category: "Ciencia y Tecnología",
    text: "¿Qué paso es necesario para comprobar la hipótesis (papel vs plástico)?",
    options: [
      { 
        id: 'A', 
        text: "Colocar todas las rebanadas en papel y luego dentro de plástico.",
        feedback: "No permite comparar porque mezcla las condiciones."
      },
      { 
        id: 'B', 
        text: "Colocar dos en papel y dos en plástico, en el mismo ambiente.",
        feedback: "Correcto. Establece dos grupos diferenciados por la variable independiente y controla las demás variables."
      },
      { 
        id: 'C', 
        text: "Colocar en diferentes bolsas y ambientes distintos.",
        feedback: "Introduce una variable de confusión (ambiente), invalidando la comparación."
      }
    ],
    correctAnswer: 'B',
    explanation: "El diseño experimental debe garantizar que la única diferencia entre los grupos sea la variable que se quiere probar (control de variables)."
  },
  {
    id: 22,
    category: "Ciencia y Tecnología",
    text: "Docente pregunta: \"¿Creen que suceda lo mismo con pan de fábrica? Justifiquen\". ¿Cuál es el propósito?",
    options: [
      { 
        id: 'A', 
        text: "Promover elaboración de hipótesis.",
        feedback: "Ya pasaron esa etapa. Ahora están analizando resultados."
      },
      { 
        id: 'B', 
        text: "Promover elaboración de conclusiones (alcance).",
        feedback: "Correcto. Busca que reflexionen sobre la generalización de sus hallazgos y sus limitaciones."
      },
      { 
        id: 'C', 
        text: "Promover diseño de indagación.",
        feedback: "No pide diseñar un nuevo experimento, sino reflexionar sobre el conocimiento generado."
      }
    ],
    correctAnswer: 'B',
    explanation: "Las conclusiones científicas deben analizar si los resultados son válidos solo para el caso estudiado o si pueden generalizarse a otros contextos."
  },
  {
    id: 23,
    category: "Ciencia y Tecnología",
    text: "Estudiantes creen que musgos no son plantas por no tener hojas/tallos. ¿Qué acción es adecuada?",
    options: [
      { 
        id: 'A', 
        text: "Presentar características de musgos y corroborar.",
        feedback: "No ataca la idea errónea de que 'planta = tallo+hoja'."
      },
      { 
        id: 'B', 
        text: "Mencionar el grupo taxonómico de los musgos.",
        feedback: "Es aprendizaje memorístico, no comprensión conceptual."
      },
      { 
        id: 'C', 
        text: "Presentar características que diferencian a plantas de otros seres y ver cuáles tienen los musgos.",
        feedback: "Correcto. Ayuda a identificar las características esenciales (fotosíntesis, etc.) frente a las accesorias (tallos)."
      }
    ],
    correctAnswer: 'C',
    explanation: "Para el cambio conceptual, es necesario confrontar la concepción errónea con criterios científicos esenciales que permitan reclasificar el objeto de estudio."
  },
  {
    id: 24,
    category: "Ciencia y Tecnología",
    text: "Abanicos desplazan aire caliente y traen aire frío. ¿Qué mecanismo es?",
    options: [
      { 
        id: 'A', 
        text: "Conducción.",
        feedback: "Requiere contacto directo sin movimiento de materia."
      },
      { 
        id: 'B', 
        text: "Convección.",
        feedback: "Correcto. Implica transferencia de calor por movimiento de un fluido (aire)."
      },
      { 
        id: 'C', 
        text: "Radiación.",
        feedback: "Es transferencia por ondas electromagnéticas, no por movimiento de materia."
      }
    ],
    correctAnswer: 'B',
    explanation: "La convección es el mecanismo principal de transferencia de calor en líquidos y gases, caracterizado por el desplazamiento de masas."
  },
  {
    id: 25,
    category: "Ciencia y Tecnología",
    text: "Variable dependiente imprecisa: \"funcionan mejor\". ¿Qué retroalimentación es adecuada?",
    options: [
      { 
        id: 'A', 
        text: "Preguntar a qué se refieren y cómo medirlo, dar info sobre VD y pedir ajustar.",
        feedback: "Correcto. Promueve la operacionalización de la variable (hacerla medible) mediante reflexión y andamiaje."
      },
      { 
        id: 'B', 
        text: "Decir que requiere mejorarse y preguntar qué mejoras harían.",
        feedback: "Falta orientación específica sobre QUÉ hace que una variable sea buena."
      },
      { 
        id: 'C', 
        text: "Mostrar ejemplos correctos y pedir reemplazar.",
        feedback: "Promueve la copia, no la construcción del conocimiento."
      }
    ],
    correctAnswer: 'A',
    explanation: "Una buena variable científica debe ser clara y medible (operacionalizable). La retroalimentación debe guiar hacia esa precisión."
  },
  {
    id: 26,
    category: "Ciencia y Tecnología",
    text: "Propuesta: Clavos de olor en bolsas CERRADAS. ¿Qué pregunta mejora el diseño?",
    options: [
      { 
        id: 'A', 
        text: "¿Qué sustancia tiene el clavo...?",
        feedback: "Información teórica no relevante para el error de diseño."
      },
      { 
        id: 'B', 
        text: "¿El aroma podrá llegar a las polillas si las bolsas están cerradas?",
        feedback: "Correcto. Evidencia la contradicción lógica del diseño experimental mediante una pregunta socrática."
      },
      { 
        id: 'C', 
        text: "¿Qué otras plantas podrían usar...?",
        feedback: "Cambia el foco de la investigación en lugar de arreglar el diseño actual."
      }
    ],
    correctAnswer: 'B',
    explanation: "Identificar fallas en el procedimiento es parte crítica del diseño experimental. La pregunta guía a los estudiantes a notar que su diseño impide que actúe la variable independiente."
  },
  {
    id: 27,
    category: "Ciencia y Tecnología",
    text: "¿Por qué es importante el tercer armario (sin nada) en el experimento de las polillas?",
    options: [
      { 
        id: 'A', 
        text: "Para identificar otros aspectos que ahuyentan.",
        feedback: "Incorrecto. No se introducen otras variables."
      },
      { 
        id: 'B', 
        text: "Para comprobar reproducibilidad.",
        feedback: "Incorrecto. La reproducibilidad se logra repitiendo el experimento (réplicas)."
      },
      { 
        id: 'C', 
        text: "Para asegurarse si el aroma es lo que ahuyenta.",
        feedback: "Correcto. Actúa como Grupo Control para comparar y atribuir el efecto a la causa probada."
      }
    ],
    correctAnswer: 'C',
    explanation: "El grupo control permite establecer una línea base para saber qué ocurriría sin la intervención, validando que el efecto observado es real."
  },
  {
    id: 28,
    category: "Ciencia y Tecnología",
    text: "Hipótesis: \"Si se echa limón... demora más en oscurecerse\". ¿Cuál es la variable dependiente?",
    options: [
      { 
        id: 'A', 
        text: "Cantidad de manzanas.",
        feedback: "Variable controlada."
      },
      { 
        id: 'B', 
        text: "Tipo de líquido.",
        feedback: "Variable independiente (causa)."
      },
      { 
        id: 'C', 
        text: "El tiempo que tardan en cambiar de color.",
        feedback: "Correcto. Es el efecto que se observa y mide."
      }
    ],
    correctAnswer: 'C',
    explanation: "En una hipótesis causal (Si X, entonces Y), la variable dependiente corresponde a Y, el resultado esperado."
  },
  {
    id: 29,
    category: "Ciencia y Tecnología",
    text: "¿Qué propuesta es adecuada para probar la hipótesis del limón?",
    options: [
      { 
        id: 'A', 
        text: "Tres mitades iguales, mismo lugar. Una con limón, otra con agua, otra sin nada (volúmenes iguales).",
        feedback: "Correcto. Controla variables intervinientes y varía solo la independiente."
      },
      { 
        id: 'B', 
        text: "Tres mitades... agua en menor volumen...",
        feedback: "Introduce una variable extra (volumen) que confunde los resultados."
      },
      { 
        id: 'C', 
        text: "Tres mitades en diferentes ambientes...",
        feedback: "Introduce variables ambientales no controladas."
      }
    ],
    correctAnswer: 'A',
    explanation: "El diseño experimental riguroso exige 'ceteris paribus': todo igual excepto lo que se quiere probar."
  },
  {
    id: 30,
    category: "Ciencia y Tecnología",
    text: "Rampas de diferente altura (10 vs 5 cuadernos). ¿Variable independiente?",
    options: [
      { 
        id: 'A', 
        text: "Distancia recorrida.",
        feedback: "Variable dependiente (resultado)."
      },
      { 
        id: 'B', 
        text: "Altura de las rampas.",
        feedback: "Correcto. Es el factor manipulado por los estudiantes."
      },
      { 
        id: 'C', 
        text: "Longitud de tablas.",
        feedback: "Variable controlada (constante)."
      }
    ],
    correctAnswer: 'B',
    explanation: "La variable independiente es aquella que el investigador modifica deliberadamente para estudiar su influencia."
  },
  {
    id: 31,
    category: "Ciencia y Tecnología",
    text: "Idea errónea: sistema respiratorio no se relaciona con nutrición. ¿Retroalimentación adecuada?",
    options: [
      { 
        id: 'A', 
        text: "Mencionar cómo participa y pedir que expliquen.",
        feedback: "Transmisión directa, bajo nivel cognitivo."
      },
      { 
        id: 'B', 
        text: "Pedir que dialoguen sobre qué pasaría si falla.",
        feedback: "No asegura que descubran la conexión conceptual específica."
      },
      { 
        id: 'C', 
        text: "Preguntar qué otros nutrientes necesitamos además de comida (oxígeno) y quién lo aporta.",
        feedback: "Correcto. Guía el descubrimiento mediante preguntas que conectan conocimientos previos (necesidad de oxígeno)."
      }
    ],
    correctAnswer: 'C',
    explanation: "El aprendizaje es más duradero cuando el estudiante construye la relación conceptual por sí mismo a través de un andamiaje adecuado."
  },
  {
    id: 32,
    category: "Ciencia y Tecnología",
    text: "Docente muestra cactus a estudiantes que creen que todas las hojas son iguales. ¿Qué proceso promueve?",
    options: [
      { 
        id: 'A', 
        text: "Metacognición.",
        feedback: "No es reflexión sobre el aprendizaje."
      },
      { 
        id: 'B', 
        text: "Conflicto cognitivo.",
        feedback: "Correcto. La evidencia (cactus) contradice directamente la creencia previa, generando desequilibrio."
      },
      { 
        id: 'C', 
        text: "Transferencia.",
        feedback: "No aplica lo aprendido a un nuevo contexto, sino que cuestiona lo aprendido."
      }
    ],
    correctAnswer: 'B',
    explanation: "El conflicto cognitivo es el motor del cambio conceptual: obliga a revisar y modificar esquemas mentales ante información que no encaja."
  },
  {
    id: 33,
    category: "Desarrollo Personal",
    text: "Actividad para reconocer emociones propias en primer grado.",
    options: [
      { 
        id: 'A', 
        text: "Imitar rostros de imágenes.",
        feedback: "Enfoca en emociones ajenas y externas."
      },
      { 
        id: 'B', 
        text: "Docente dice qué sienten.",
        feedback: "Genera dependencia, no autoconocimiento."
      },
      { 
        id: 'C', 
        text: "Representar frente al espejo y conectar con situaciones propias.",
        feedback: "Correcto. Integra lo corporal (espejo) con lo vivencial (situaciones), clave para la edad."
      }
    ],
    correctAnswer: 'C',
    explanation: "El autoconocimiento emocional requiere conectar la experiencia interna (sentir) con la expresión externa (ver) y el contexto (situación)."
  },
  {
    id: 34,
    category: "Desarrollo Personal",
    text: "Comentario empático ante conflicto con mamá.",
    options: [
      { 
        id: 'A', 
        text: "\"Tu mamá te quiere... es por tu bien\".",
        feedback: "Justifica al otro, invalidando el sentimiento del estudiante."
      },
      { 
        id: 'B', 
        text: "\"Entiendo... debe ser difícil que no tome en cuenta lo que quieres\".",
        feedback: "Correcto. Valida el sentimiento y adopta la perspectiva del otro sin juzgar."
      },
      { 
        id: 'C', 
        text: "\"A mí también me pasa... ya se pasará\".",
        feedback: "Centra la atención en sí mismo y minimiza el problema."
      }
    ],
    correctAnswer: 'B',
    explanation: "La empatía implica resonancia emocional y validación de la experiencia del otro, absteniéndose de dar consejos o juicios prematuros."
  },
  {
    id: 35,
    category: "Convivencia",
    text: "Conflicto por lápices. ¿Qué intervención es MEDIACIÓN?",
    options: [
      { 
        id: 'A', 
        text: "\"Conversen y acuerden\" (Negociación).",
        feedback: "Es negociación directa, no hay tercero ayudando."
      },
      { 
        id: 'B', 
        text: "\"Pidan a la profesora que decida\" (Arbitraje).",
        feedback: "Es arbitraje, el tercero impone la solución."
      },
      { 
        id: 'C', 
        text: "\"Llamen a la profesora para que los ayude a llegar a un acuerdo\".",
        feedback: "Correcto. Tercero facilita, pero las partes deciden."
      }
    ],
    correctAnswer: 'C',
    explanation: "La mediación se caracteriza por la presencia de un tercero neutral que facilita el proceso comunicativo sin imponer soluciones."
  },
  {
    id: 36,
    category: "Desarrollo Personal",
    text: "¿Cuál es un dilema moral?",
    options: [
      { 
        id: 'A', 
        text: "Renzo ya contó y se siente mal.",
        feedback: "Es una consecuencia emocional post-decisión, no un dilema activo."
      },
      { 
        id: 'B', 
        text: "María duda entre contar a la profesora (correcto) o lealtad a amigas.",
        feedback: "Correcto. Hay conflicto de valores y necesidad de elección difícil."
      },
      { 
        id: 'C', 
        text: "Liz no sabe cómo decir que le molesta una burla.",
        feedback: "Es un problema de asertividad/comunicación, no moral."
      }
    ],
    correctAnswer: 'B',
    explanation: "Un dilema moral implica una encrucijada donde dos o más valores éticos entran en conflicto, exigiendo una decisión reflexiva."
  },
  {
    id: 37,
    category: "Desarrollo Personal",
    text: "Diego tiene baja autoeficacia (\"no soy bueno\"). ¿Qué ayuda más?",
    options: [
      { 
        id: 'A', 
        text: "Panel de desempeños comparativo.",
        feedback: "La comparación social negativa disminuye la autoeficacia."
      },
      { 
        id: 'B', 
        text: "Lista de metas propias factibles y revisión de logros.",
        feedback: "Correcto. Genera experiencias de dominio (éxito personal), la fuente más potente de autoeficacia."
      },
      { 
        id: 'C', 
        text: "Diario de logros en áreas ya fuertes.",
        feedback: "No transfiere confianza al área de dificultad."
      }
    ],
    correctAnswer: 'B',
    explanation: "La autoeficacia se construye principalmente mediante la experiencia directa de éxito en tareas desafiantes pero alcanzables."
  },
  {
    id: 38,
    category: "Convivencia",
    text: "Discriminación lingüística. ¿Preguntas para reflexión profunda?",
    options: [
      { 
        id: 'A', 
        text: "Sobre derechos legales.",
        feedback: "Enfoque formal/legal, no actitudinal."
      },
      { 
        id: 'B', 
        text: "¿Qué dijeron? ¿En qué creencias se basan? ¿Cómo afecta?",
        feedback: "Correcto. Va a la raíz (creencias/prejuicios) y analiza consecuencias reales."
      },
      { 
        id: 'C', 
        text: "Conductas alternativas.",
        feedback: "Se queda en lo conductual sin cuestionar el prejuicio de fondo."
      }
    ],
    correctAnswer: 'B',
    explanation: "Combatir la discriminación requiere deconstruir los prejuicios y estereotipos que la originan, no solo prohibir la conducta."
  },
  {
    id: 39,
    category: "Personal Social",
    text: "Ordenar fotos familiares. ¿Por qué sirve para categorías temporales?",
    options: [
      { 
        id: 'A', 
        text: "Porque usan experiencias para ejercitar secuencias y verbalizar criterios.",
        feedback: "Correcto. Aplica nociones (antes, después) a vivencias significativas."
      },
      { 
        id: 'B', 
        text: "Porque valoran multicausalidad.",
        feedback: "Es una competencia explicativa, no de secuenciación."
      },
      { 
        id: 'C', 
        text: "Porque interpretan imágenes.",
        feedback: "Es una habilidad de fuente, no temporal."
      }
    ],
    correctAnswer: 'A',
    explanation: "El tiempo histórico se construye inicialmente desde el tiempo personal vivido. Secuenciar eventos propios es la base para comprender el tiempo cronológico."
  },
  {
    id: 40,
    category: "Personal Social",
    text: "Cuidado de lápices. ¿Preguntas pertinentes?",
    options: [
      { 
        id: 'A', 
        text: "\"¿Para qué usamos? ¿Qué pasa si tajamos mucho? ¿Y si nos quedamos sin ellos?\"",
        feedback: "Correcto. Reflexión sobre función y consecuencias naturales."
      },
      { 
        id: 'B', 
        text: "\"¿Cuestan dinero?\"",
        feedback: "Enfoque económico externo al niño."
      },
      { 
        id: 'C', 
        text: "\"¿Por qué está mal?\"",
        feedback: "Enfoque moralizante y autoritario."
      }
    ],
    correctAnswer: 'A',
    explanation: "La responsabilidad se desarrolla comprendiendo el sentido de las normas y el impacto de las acciones en el bien común o personal."
  },
  {
    id: 41,
    category: "Personal Social",
    text: "Estudiante relaciona tiempo de viaje (1 día) con distancia geográfica. ¿Qué evidencia?",
    options: [
      { 
        id: 'A', 
        text: "Uso de puntos cardinales.",
        feedback: "Secundario en su razonamiento."
      },
      { 
        id: 'B', 
        text: "Puntos de referencia.",
        feedback: "No es el eje de su reflexión."
      },
      { 
        id: 'C', 
        text: "Reconoce distancia entre puntos.",
        feedback: "Correcto. Construye la noción de espacio/distancia a través de la variable tiempo."
      }
    ],
    correctAnswer: 'C',
    explanation: "La noción de distancia en geografía escolar suele construirse inicialmente vinculada al tiempo de desplazamiento y la 'cantidad de espacio' vivido."
  },
  {
    id: 42,
    category: "Personal Social",
    text: "Estudiante sorprendida: \"¿Aún extraen guano? Creí que acabó en s. XIX\". ¿Proceso?",
    options: [
      { 
        id: 'A', 
        text: "Conflicto cognitivo.",
        feedback: "Correcto. Choque entre saber previo y nueva información."
      },
      { 
        id: 'B', 
        text: "Transferencia.",
        feedback: "No está aplicando, está cuestionando."
      },
      { 
        id: 'C', 
        text: "Metacognición.",
        feedback: "No reflexiona sobre su aprendizaje."
      }
    ],
    correctAnswer: 'A',
    explanation: "El conflicto cognitivo surge ante la discrepancia, generando la necesidad de acomodar los esquemas mentales a la nueva realidad."
  },
  {
    id: 43,
    category: "Personal Social",
    text: "¿Qué comentario integra las 3 dimensiones del desarrollo sostenible?",
    options: [
      { 
        id: 'A', 
        text: "Lua: Suelos (ambiental), ingresos (económico), salud (social).",
        feedback: "Correcto. Visión integral y sistémica."
      },
      { 
        id: 'B', 
        text: "Adriana: Subsidio y precios.",
        feedback: "Visión economicista."
      },
      { 
        id: 'C', 
        text: "Ulises: Cuidar recurso y aves.",
        feedback: "Visión ecologista/ambientalista pura."
      }
    ],
    correctAnswer: 'A',
    explanation: "El desarrollo sostenible busca el equilibrio entre crecimiento económico, cuidado ambiental y bienestar social."
  },
  {
    id: 44,
    category: "Personal Social",
    text: "Actividad para reflexión ética.",
    options: [
      { 
        id: 'A', 
        text: "Parábola para imitar.",
        feedback: "Moralización/modelado, no reflexión crítica."
      },
      { 
        id: 'B', 
        text: "Dilema de copiar tarea por ayudar amigo. Analizar razones.",
        feedback: "Correcto. Situación cercana que exige ponderar valores en conflicto."
      },
      { 
        id: 'C', 
        text: "Devolver billetera.",
        feedback: "Acción correcta obvia, poco espacio para debate ético real."
      }
    ],
    correctAnswer: 'B',
    explanation: "La ética se desarrolla enfrentando situaciones complejas donde no hay una única respuesta correcta automática, exigiendo juicio autónomo."
  },
  {
    id: 45,
    category: "Personal Social",
    text: "Comparación oficios coloniales vs actuales (aguador -> cisterna). ¿Noción histórica?",
    options: [
      { 
        id: 'A', 
        text: "Cambios y permanencias.",
        feedback: "Correcto. Identifica lo que se transforma y lo que persiste en el tiempo."
      },
      { 
        id: 'B', 
        text: "Secuencialidad.",
        feedback: "No ordena eventos, compara estados."
      },
      { 
        id: 'C', 
        text: "Simultaneidad.",
        feedback: "No compara eventos sincrónicos."
      }
    ],
    correctAnswer: 'A',
    explanation: "El análisis de la historia implica comprender que el presente es producto de transformaciones, pero contiene elementos del pasado (continuidad)."
  },
  {
    id: 46,
    category: "Matemática",
    text: "Iniciar noción de \"doble\". ¿Acción pertinente?",
    options: [
      { 
        id: 'A', 
        text: "Usar espejo para reflejar 5 semillas y preguntar.",
        feedback: "Correcto. Representación concreta y visual del concepto 'dos veces lo mismo'."
      },
      { 
        id: 'B', 
        text: "Problema numérico abstracto.",
        feedback: "Muy abstracto para iniciar."
      },
      { 
        id: 'C', 
        text: "Suma repetida en botones.",
        feedback: "Enfoca en la operación, no en el concepto de duplicación."
      }
    ],
    correctAnswer: 'A',
    explanation: "Los conceptos matemáticos en primaria deben construirse desde lo concreto-pictórico hacia lo simbólico (C-P-A)."
  },
  {
    id: 47,
    category: "Matemática",
    text: "Evaluar habilidad real de contar (no solo recitar).",
    options: [
      { 
        id: 'A', 
        text: "Identificar número en calendario.",
        feedback: "Lectura de numerales, no conteo."
      },
      { 
        id: 'B', 
        text: "Escribir números.",
        feedback: "Escritura de numerales, no conteo."
      },
      { 
        id: 'C', 
        text: "Entregar 30 botones.",
        feedback: "Correcto. Exige correspondencia uno a uno y cardinalidad en acción."
      }
    ],
    correctAnswer: 'C',
    explanation: "Saber contar implica coordinar la secuencia verbal con la acción de señalar/separar objetos y comprender que el último número es el total."
  },
  {
    id: 48,
    category: "Matemática",
    text: "Problema formulado: Compras y vuelto. ¿Qué evidencia?",
    options: [
      { 
        id: 'A', 
        text: "Propone hallar valor desconocido a partir de datos.",
        feedback: "Correcto. Estructura relaciones para encontrar una incógnita."
      },
      { 
        id: 'B', 
        text: "Identifica precios.",
        feedback: "Habilidad básica de lectura de datos."
      },
      { 
        id: 'C', 
        text: "Uso de términos de masa.",
        feedback: "Aspecto contextual, no el logro matemático central."
      }
    ],
    correctAnswer: 'A',
    explanation: "La competencia de resolver problemas se evidencia en la capacidad de modelar una situación buscando una solución no evidente."
  },
  {
    id: 49,
    category: "Matemática",
    text: "Problema formulado incompleto (falta dato). ¿Retroalimentación?",
    options: [
      { 
        id: 'A', 
        text: "Pedir que intenten resolverlo y verifiquen si tienen todo.",
        feedback: "Correcto. Promueve autodescubrimiento del error y metacognición."
      },
      { 
        id: 'B', 
        text: "Indicar que faltan datos.",
        feedback: "Directivo. No genera aprendizaje sobre validación."
      },
      { 
        id: 'C', 
        text: "Pedir dato específico.",
        feedback: "Resuelve el problema por ellos."
      }
    ],
    correctAnswer: 'A',
    explanation: "La validación de problemas (comprobar si se pueden resolver) es una habilidad clave que se desarrolla enfrentando la imposibilidad de solución."
  },
  {
    id: 50,
    category: "Matemática",
    text: "Estudiante plantea ecuación traduciendo enunciado verbal. ¿Qué evidencia?",
    options: [
      { 
        id: 'A', 
        text: "Argumenta organización.",
        feedback: "No explica por qué, solo hace."
      },
      { 
        id: 'B', 
        text: "Interpreta datos y representa en ecuación.",
        feedback: "Correcto. Traduce lenguaje natural a lenguaje simbólico."
      },
      { 
        id: 'C', 
        text: "Explica equivalencia.",
        feedback: "No habla de propiedades de la igualdad."
      }
    ],
    correctAnswer: 'B',
    explanation: "La modelación algebraica implica identificar variables y relaciones en una situación y expresarlas mediante símbolos matemáticos."
  },
  {
    id: 51,
    category: "Matemática",
    text: "Estrategia de suma: \"Guardo 8 en la mente y sigo 9, 10...\". ¿Etapa de conteo?",
    options: [
      { 
        id: 'A', 
        text: "Bidireccional.",
        feedback: "Implicaría contar hacia atrás también."
      },
      { 
        id: 'B', 
        text: "Numerable.",
        feedback: "Correcto. Capacidad de contar a partir de un número distinto de 1."
      },
      { 
        id: 'C', 
        text: "Irrompible.",
        feedback: "Necesitaría empezar siempre desde 1."
      }
    ],
    correctAnswer: 'B',
    explanation: "La cadena numerable permite operaciones de suma mediante sobreconteo, siendo un avance sobre el conteo simple desde uno."
  },
  {
    id: 52,
    category: "Matemática",
    text: "Estudiante cree solo rectángulo tiene lados iguales 2 a 2. Docente muestra romboide. ¿Proceso?",
    options: [
      { 
        id: 'A', 
        text: "Transferencia.",
        feedback: "No aplica saber previo, lo cuestiona."
      },
      { 
        id: 'B', 
        text: "Activación.",
        feedback: "No recupera info, confronta idea."
      },
      { 
        id: 'C', 
        text: "Conflicto cognitivo.",
        feedback: "Correcto. El contraejemplo desafía la generalización errónea."
      }
    ],
    correctAnswer: 'C',
    explanation: "El conflicto cognitivo es esencial en matemáticas para refinar definiciones y romper conceptos erróneos o limitados."
  },
  {
    id: 53,
    category: "Matemática",
    text: "Cálculo de 3/5 de 90 (divide y multiplica). ¿Significado de fracción?",
    options: [
      { 
        id: 'A', 
        text: "Medida.",
        feedback: "Implica comparación con unidad."
      },
      { 
        id: 'B', 
        text: "Cociente.",
        feedback: "Implica resultado de reparto."
      },
      { 
        id: 'C', 
        text: "Operador.",
        feedback: "Correcto. Transforma una cantidad (90) en otra (54)."
      }
    ],
    correctAnswer: 'C',
    explanation: "La fracción como operador actúa sobre un conjunto o magnitud, modificándola multiplicativamente."
  },
  {
    id: 54,
    category: "Matemática",
    text: "Error comparando 50 cm vs 1 m. ¿Acción adecuada?",
    options: [
      { 
        id: 'A', 
        text: "Tira sin marcas.",
        feedback: "Muy abstracto."
      },
      { 
        id: 'B', 
        text: "Cinta métrica, marcar 50 y 100 cm, comparar visualmente.",
        feedback: "Correcto. Visualiza la magnitud real y la equivalencia numérica."
      },
      { 
        id: 'C', 
        text: "Pedir medir tira.",
        feedback: "Procedimental, no conceptual."
      }
    ],
    correctAnswer: 'B',
    explanation: "Para comprender medidas, es necesario vincular el valor numérico con la magnitud física que representa."
  },
  {
    id: 55,
    category: "Matemática",
    text: "Dificultad con escala en pictograma. ¿Acción adecuada?",
    options: [
      { 
        id: 'A', 
        text: "Mostrar ejemplos, analizar escalas y co-construir valor.",
        feedback: "Correcto. Modelado y construcción conceptual de la escala."
      },
      { 
        id: 'B', 
        text: "Pedir dibujar con valor dado.",
        feedback: "Ejecución mecánica."
      },
      { 
        id: 'C', 
        text: "Pictograma incompleto.",
        feedback: "Falta soporte para entender la escala."
      }
    ],
    correctAnswer: 'A',
    explanation: "La escala es un concepto abstracto (1 representa muchos) que requiere comprensión antes de aplicación."
  },
  {
    id: 56,
    category: "Matemática",
    text: "Estudiante explica área 300 cm2 como \"300 cuadrados de 1 cm\". ¿Aprendizaje?",
    options: [
      { 
        id: 'A', 
        text: "Descomposición.",
        feedback: "No usa estrategias de cálculo aditivo."
      },
      { 
        id: 'B', 
        text: "Comprobación.",
        feedback: "No dibuja para verificar."
      },
      { 
        id: 'C', 
        text: "Interpreta área como cantidad de unidades de superficie.",
        feedback: "Correcto. Comprende el significado geométrico de la medida."
      }
    ],
    correctAnswer: 'C',
    explanation: "La comprensión profunda del área implica entenderla como un recubrimiento del plano, no solo como el resultado de una fórmula."
  },
  {
    id: 57,
    category: "Matemática",
    text: "Dificultad para plantear ecuación. ¿Estrategia?",
    options: [
      { 
        id: 'A', 
        text: "Pedir usar x y x+5.",
        feedback: "Da la respuesta."
      },
      { 
        id: 'B', 
        text: "Partir de 'n', representar 'n+5' y analizar quién es quién.",
        feedback: "Correcto. Construye el significado de la variable y la relación."
      },
      { 
        id: 'C', 
        text: "Usar monedas.",
        feedback: "Regresión a lo aritmético/concreto."
      }
    ],
    correctAnswer: 'B',
    explanation: "El paso a la ecuación requiere simbolizar relaciones verbales. Construir las expresiones algebraicas paso a paso facilita este proceso."
  },
  {
    id: 58,
    category: "Matemática",
    text: "Promedio (5 datos). Divide entre 4 porque \"0 no cuenta\". ¿Error?",
    options: [
      { 
        id: 'A', 
        text: "Ordenar datos.",
        feedback: "Es irrelevante pero no error."
      },
      { 
        id: 'B', 
        text: "No sumar cero.",
        feedback: "No afecta la suma, no es el error grave."
      },
      { 
        id: 'C', 
        text: "Dividir entre cantidad distinta al total.",
        feedback: "Correcto. Altera conceptualmente el promedio al ignorar un caso."
      }
    ],
    correctAnswer: 'C',
    explanation: "El promedio debe representar a todo el conjunto de datos. Omitir los valores cero en el divisor sesga el resultado hacia arriba."
  },
  {
    id: 59,
    category: "Matemática",
    text: "Jaime cuenta hasta 8, pero al pedirle 8 entrega el quinto objeto. ¿Qué falla?",
    options: [
      { 
        id: 'A', 
        text: "Correspondencia.",
        feedback: "Señala correctamente 1 a 1."
      },
      { 
        id: 'B', 
        text: "Orden estable.",
        feedback: "Usa secuencia correcta."
      },
      { 
        id: 'C', 
        text: "Cardinalidad.",
        feedback: "Correcto. No entiende que el último número dicho es el total del conjunto."
      }
    ],
    correctAnswer: 'C',
    explanation: "La cardinalidad es la comprensión de que el conteo finaliza en un número que representa la cantidad del grupo, no la etiqueta del último objeto."
  },
  {
    id: 60,
    category: "Matemática",
    text: "Resolución intuitiva de ecuación por equilibrio (4+3 = x+3 -> x=4). ¿Evidencia?",
    options: [
      { 
        id: 'A', 
        text: "Transposición.",
        feedback: "No usa reglas de pasar términos."
      },
      { 
        id: 'B', 
        text: "Sustitución.",
        feedback: "No prueba valores."
      },
      { 
        id: 'C', 
        text: "Correspondencia entre términos.",
        feedback: "Correcto. Identifica estructuras idénticas en ambos lados para hallar el valor faltante."
      }
    ],
    correctAnswer: 'C',
    explanation: "Este razonamiento relacional es precursor del álgebra formal y demuestra una comprensión profunda del signo igual como equivalencia."
  }
];