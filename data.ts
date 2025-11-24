
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
        feedback: "INCORRECTA - Este comentario refleja un enfoque homogeneizador, no inclusivo. Busca que todos alcancen los mismos desempeños, lo cual niega la diversidad y las características individuales de cada estudiante."
      },
      { 
        id: 'B', 
        text: "\"La escuela debe favorecer que los estudiantes con discapacidad cuenten con las mismas posibilidades de aprender que cualquier otro estudiante\".",
        feedback: "CORRECTA - Este comentario se alinea perfectamente con el enfoque inclusivo porque enfatiza la igualdad de oportunidades (mismas posibilidades), respeta la diversidad (no exige mismos desempeños) y reconoce el derecho al aprendizaje de todos."
      },
      { 
        id: 'C', 
        text: "\"La escuela debe promover que los estudiantes con discapacidad reciban tanto un tratamiento especializado como una atención pedagógica\".",
        feedback: "INCORRECTA - Aunque menciona aspectos importantes, este comentario se centra en un enfoque médico-rehabilitador o de integración, no de inclusión. Se enfoca en \"tratar\" la discapacidad más que en equiparar oportunidades."
      }
    ],
    correctAnswer: 'B',
    explanation: "La alternativa B es la única que refleja el valor fundamental del enfoque inclusivo: garantizar que todos los estudiantes tengan las mismas oportunidades para aprender, respetando sus diferencias individuales y reconociendo que no todos aprenderán de la misma manera ni alcanzarán los mismos resultados, pero todos tienen el mismo derecho a desarrollar su máximo potencial."
  },
  {
    id: 2,
    category: "Inclusión y DUA",
    text: "Durante una reunión sobre la implementación del diseño universal para el aprendizaje (DUA), el docente a cargo ofrece algunas sugerencias sobre los recursos que se pueden utilizar para acompañar a los estudiantes en el aula. A continuación, se presenta una de esas sugerencias:\n\n\"Cuando diseñemos una sesión de aprendizaje, es necesario que los recursos que utilicemos respondan a las características de nuestros estudiantes. De esta manera, podemos ofrecer textos, gráficos o materiales audiovisuales para que ellos puedan aprender sin sentirse limitados por los recursos que usemos\".\n\n¿Cuál de los siguientes principios del DUA se evidencia en la sugerencia anterior?",
    options: [
      { 
        id: 'A', 
        text: "Proporcionar múltiples formas de compromiso.",
        feedback: "INCORRECTA - El compromiso/implicación se refiere a la motivación y el interés de los estudiantes. La sugerencia no habla de estrategias para motivar o captar el interés, sino de diferentes formatos para presentar información."
      },
      { 
        id: 'B', 
        text: "Proporcionar múltiples formas de representación.",
        feedback: "CORRECTA - La sugerencia claramente se refiere a ofrecer diversos formatos para presentar el contenido (textos, gráficos, audiovisuales), permitir que los estudiantes accedan a la información de diferentes maneras y eliminar barreras en la percepción y comprensión de la información."
      },
      { 
        id: 'C', 
        text: "Proporcionar múltiples formas de acción y expresión.",
        feedback: "INCORRECTA - Este principio se refiere a cómo los estudiantes demuestran lo que saben, no a cómo reciben la información. La sugerencia no habla de diferentes formas de expresar conocimientos, sino de diferentes formatos para acceder al contenido."
      }
    ],
    correctAnswer: 'B',
    explanation: "La sugerencia del docente ejemplifica perfectamente el principio de proporcionar múltiples formas de representación porque ofrece variedad de formatos: textos (verbal-escrito), gráficos (visual-espacial), audiovisuales (auditivo-visual), se centra en el acceso al contenido y elimina barreras de percepción."
  },
  {
    id: 3,
    category: "Inclusión",
    text: "En una IE de EBR, se realiza una charla sobre la atención a las personas en condición de discapacidad. Dado que en la escuela hay estudiantes que presentan discapacidades físicas, el docente facilitador sugiere realizar algunas actividades autónomas en el patio de la IE. A continuación, se presenta una de las propuestas de adaptación compartida por el docente facilitador:\n\n\"Para que los estudiantes con discapacidad física puedan disfrutar de los juegos en el patio, es necesario dar un tratamiento manual periódico a las rampas. Además, es esencial que los juegos que tienen asientos sean de seguridad. Así también, sería oportuno acondicionar en el patio algunas zonas de descanso\".\n\nTres docentes comparten sus ideas sobre la propuesta. ¿Cuál de los siguientes comentarios de los docentes se alinea al enfoque inclusivo?",
    options: [
      { 
        id: 'A', 
        text: "\"Considero que, con la propuesta, se está priorizando el cuidado de los estudiantes que tienen discapacidad física. Al implementarla, estaremos ayudando a prevenir accidentes en el patio mientras dichos estudiantes disfrutan de los juegos\".",
        feedback: "INCORRECTA - Este comentario refleja un enfoque de protección/prevención, no inclusivo. Se centra en \"prevenir accidentes\" y prioriza el cuidado sobre la autonomía, con un matiz paternalista."
      },
      { 
        id: 'B', 
        text: "\"Creo que la propuesta favorecerá la integración de los estudiantes. Me refiero a que será más fácil que aquellos que tienen discapacidad física reciban apoyo de sus compañeros para realizarse en el patio, de modo que todos disfruten de los juegos\".",
        feedback: "INCORRECTA - Este comentario refleja un enfoque de integración, NO inclusión. Habla de \"recibir apoyo de compañeros\", promoviendo la ayuda constante de otros en lugar de la autonomía."
      },
      { 
        id: 'C', 
        text: "\"Me parece que la propuesta tiene como finalidad crear condiciones favorables para los estudiantes que tienen discapacidad física. Esto ayudará a que dichos estudiantes, así como sus compañeros, puedan disfrutar libremente del patio y de los juegos\".",
        feedback: "CORRECTA - Este comentario se alinea perfectamente con el enfoque inclusivo porque crea condiciones favorables adaptando el entorno, promueve autonomía (\"disfrutar libremente\") y reconoce el beneficio para todos."
      }
    ],
    correctAnswer: 'C',
    explanation: "El enfoque inclusivo no se trata de proteger ni de que unos ayuden a otros, sino de crear las condiciones necesarias (adaptar el entorno) para que TODOS puedan participar autónomamente y en igualdad de condiciones."
  },
  {
    id: 4,
    category: "Comunicación",
    text: "Lee la siguiente situación y responda las preguntas 4, 5, 6, 7 y 8.\n\nLos estudiantes de quinto grado, con orientación de la docente, desarrollan un proyecto de aprendizaje cuyo propósito es que la comunidad educativa sobre el rol de las abejas en el funcionamiento del ecosistema. Para eso, a la comunidad educativa sobre el rol de las abejas están leyendo diferentes textos para recabar información. A continuación, se presenta uno de esos textos:\n\n[TEXTO SOBRE LAS ABEJAS]\nEn 2017, la Asamblea General de la Organización de las Naciones Unidas (ONU) proclamó el 20 de mayo como el Día Mundial de las Abejas. Esto se hizo para sensibilizar a la comunidad internacional respecto al importante rol que juegan las abejas en la preservación ecológica de nuestro planeta.\nSegún los expertos en abejas de la Organización de las Naciones Unidas para la Agricultura y la Alimentación (FAO), un tercio de la producción mundial de alimentos depende de las abejas. A través de la polinización, las abejas, junto con otros animales, recogen el polen de las flores y lo esparcen en otras plantas. De este modo, contribuyen con la preservación de la biodiversidad y la seguridad alimentaria.\nEn los últimos años, un problema que preocupa es la desaparición y muerte masiva de abejas. Si estas desaparecieran, la cadena alimentaria se vería afectada, lo que causaría un desequilibrio ecológico y la posible extinción de muchas especies. La causa exacta de la desaparición de las abejas no es fácil de precisar, pero se cree que se debe a una combinación de factores. Algunos factores son la invasión de su hábitat por parte de los humanos, las prácticas agrícolas intensivas, el uso indiscriminado de plaguicidas y la introducción de especies exóticas.\nPodemos contribuir a preservar a las abejas de muchas maneras, tanto a nivel comunitario como individual. A nivel individual, acciones como plantar flores nativas, comprar productos apícolas locales, y reducir el uso de pesticidas en jardines y huertos ayudan a protegerlas. A nivel comunitario, se recomienda promover la biodiversidad; impulsar prácticas agrícolas sostenibles aumentando la diversidad de los cultivos; y fomentar la conservación, la gestión y la restauración de hábitats específicos para abejas, así como, prohibir el uso de plaguicidas perjudiciales para ellas.\nAdaptado de FAO. (s.f.). \"Día mundial de las abejas\". Recuperado el 27 de enero de 2025 de: https://www.un.org/es/observances/bee-day y de National Geographic España. (18 de abril de 2023). \"Abejas: por qué es importante y cómo podemos evitar su desaparición\". Recuperado el 27 de enero de 2025 de: https://n9.cl/iv1a1\n\nPREGUNTA 4\nPara contribuir a la comprensión del texto, la docente plantea varias preguntas a los estudiantes. ¿Cuál de las siguientes preguntas se centra en que los estudiantes obtengan información explícita?",
    options: [
      { 
        id: 'A', 
        text: "¿Para qué se creó el Día Mundial de las Abejas?",
        feedback: "CORRECTA - Esta pregunta solicita información EXPLÍCITA. La respuesta está directamente expresada en el texto: \"Esto se hizo para sensibilizar a la comunidad internacional respecto al importante rol que juegan las abejas...\"."
      },
      { 
        id: 'B', 
        text: "¿Por qué se busca proteger a las abejas?",
        feedback: "INCORRECTA - Esta pregunta requiere INFERENCIA. No hay una respuesta directa; el estudiante debe deducir que se busca protegerlas por su importancia en la polinización y porque están en peligro de desaparición."
      },
      { 
        id: 'C', 
        text: "¿Cuál es el propósito principal del texto?",
        feedback: "INCORRECTA - Esta pregunta requiere REFLEXIÓN Y EVALUACIÓN. Requiere que el estudiante analice el texto completo, identifique la intención del autor y evalúe la estructura global."
      }
    ],
    correctAnswer: 'A',
    explanation: "Las preguntas de información explícita (nivel literal) solicitan datos que están escritos directamente en el texto y pueden ser localizados y copiados textual o casi textualmente."
  },
  {
    id: 5,
    category: "Comunicación",
    text: "En otro momento de la sesión, los estudiantes intercambian ideas sobre el texto. En este contexto, los estudiantes y la docente dialogan sobre la intención del autor al incluir el siguiente fragmento:\n\n\"Según los expertos en abejas de la Organización de las Naciones Unidas para la Agricultura y la Alimentación (FAO), un tercio de la producción mundial de alimentos depende de las abejas\".\n\n¿Cuál de los siguientes estudiantes identifica adecuadamente la intención del autor al incluir ese fragmento en el texto?",
    options: [
      { 
        id: 'A', 
        text: "Ramiro dice: \"Considero que el fragmento sirve para que el lector sepa que algunas personas se especializan en el estudio de las abejas\".",
        feedback: "INCORRECTA - Esta respuesta se centra en un detalle secundario (que existen expertos) y no identifica la función argumentativa del fragmento dentro del texto."
      },
      { 
        id: 'B', 
        text: "Merlina dice: \"Creo que la intención del autor era destacar que existe una organización mundial de la agricultura y la alimentación\".",
        feedback: "INCORRECTA - Confunde la fuente de autoridad (FAO) con el propósito del texto. El texto es sobre la importancia de las abejas, no sobre la existencia de la FAO."
      },
      { 
        id: 'C', 
        text: "Rocío dice: \"Me parece que el autor busca dar soporte a su argumento sobre los peligros de que las abejas desaparezcan\".",
        feedback: "CORRECTA - Identifica adecuadamente la intención del autor: usar una cita de autoridad y un dato estadístico para dar soporte (sustentar) al argumento principal sobre la importancia crucial de las abejas."
      }
    ],
    correctAnswer: 'C',
    explanation: "Identificar la intención implica comprender la función argumentativa de un fragmento: en este caso, el autor incluye el dato de la FAO para respaldar la tesis de que las abejas son vitales y su desaparición sería catastrófica."
  },
  {
    id: 6,
    category: "Ciencia y Tecnología",
    text: "A partir del texto, algunos estudiantes se muestran interesados por conocer más sobre el proceso de la polinización. Ante la pregunta sobre lo que saben de la polinización, varios estudiantes intervienen. ¿Cuál de los estudiantes maneja información correcta sobre la polinización?",
    options: [
      { 
        id: 'A', 
        text: "Mary dice: \"La polinización permite que las plantas obtengan nuevos individuos idénticos a ellas\".",
        feedback: "INCORRECTA - Esta afirmación es científicamente falsa. Confunde reproducción sexual (polinización) con asexual. La polinización genera variabilidad genética, no clones idénticos."
      },
      { 
        id: 'B', 
        text: "Favio dice: \"Entonces, todas las plantas realizan la polinización para reproducirse\".",
        feedback: "INCORRECTA - Es una generalización falsa. No todas las plantas se polinizan (ej. helechos, musgos usan esporas) y algunas se reproducen asexualmente."
      },
      { 
        id: 'C', 
        text: "Matías dice: \"Debido a la polinización, las plantas producen frutos y semillas\".",
        feedback: "CORRECTA - Esta afirmación es científicamente precisa. La polinización es el proceso necesario para la fecundación, cuyo resultado biológico directo es la formación de frutos y semillas."
      }
    ],
    correctAnswer: 'C',
    explanation: "La comprensión científica correcta vincula la polinización (transporte de polen) con su consecuencia biológica directa en las plantas con flor: la producción de semillas (embrión) y frutos (ovario maduro)."
  },
  {
    id: 7,
    category: "Comunicación",
    text: "La docente busca que los estudiantes reflexionen sobre el contenido del texto. ¿Cuál de las siguientes acciones pedagógicas es adecuada para su propósito?",
    options: [
      { 
        id: 'A', 
        text: "Solicitar a los estudiantes que señalen las propuestas para proteger a las abejas, de acuerdo con el texto. Luego, pedirles que seleccionen las propuestas que podrían aplicar, según su contexto.",
        feedback: "CORRECTA - Esta actividad promueve la reflexión porque exige evaluar la información del texto y conectarla con su realidad (\"según su contexto\"), implicando toma de decisiones y pensamiento crítico."
      },
      { 
        id: 'B', 
        text: "Solicitar a los estudiantes que indiquen los aportes de las abejas para la humanidad, según el texto. Luego, pedirles que escriban dicha información en carteles para colocarlos en la IE.",
        feedback: "INCORRECTA - Es una actividad de localización y reproducción de información (nivel literal). Escribir carteles es una actividad de difusión, no necesariamente de reflexión crítica."
      },
      { 
        id: 'C', 
        text: "Solicitar a los estudiantes que identifiquen los peligros que enfrentan las abejas, con base en el texto. Luego, pedirles que elaboren un gráfico que represente dichos peligros.",
        feedback: "INCORRECTA - Es una actividad de reorganización de información (nivel inferencial básico/organización), pero no implica necesariamente evaluación ni juicio crítico sobre el contenido."
      }
    ],
    correctAnswer: 'A',
    explanation: "Reflexionar sobre el contenido implica un proceso metacognitivo donde el estudiante piensa críticamente sobre la información, evalúa su relevancia y aplicabilidad, y conecta el contenido con su propia realidad."
  },
  {
    id: 8,
    category: "Personal Social",
    text: "En otro momento de la sesión, los estudiantes buscan información en otras fuentes para complementar lo que leyeron. Durante el intercambio de ideas sobre la información recogida, los estudiantes realizan comentarios. ¿En cuál de los siguientes comentarios se evidencia una relación entre elementos naturales y sociales del espacio geográfico?",
    options: [
      { 
        id: 'A', 
        text: "Violeta dice: \"Yo leí en internet que, en Perú, hay más de 250 mil colmenas apícolas, y que están principalmente en Cusco. Además, leí que son más de 1500 familias que se dedican a la apicultura como parte de sus actividades económicas\".",
        feedback: "CORRECTA - Este comentario evidencia claramente la relación: vincula un elemento natural (colmenas/abejas) con un elemento social (familias organizadas en actividad económica), mostrando cómo la sociedad aprovecha el recurso natural."
      },
      { 
        id: 'B', 
        text: "Rosa dice: \"Yo vi en un video que, en Perú, hay casi 25 mil especies de plantas con flores. Esas miles de flores dan néctar y polen a las abejas. Por eso, creo que es muy probable que las abejas puedan producir un montón de miel y que los apicultores la extraigan para que se pueda vender\".",
        feedback: "INCORRECTA - La conexión es hipotética y especulativa (\"creo que es probable\"). Se centra principalmente en describir procesos naturales (plantas-flores-néctar)."
      },
      { 
        id: 'C', 
        text: "Javier dice: \"Yo leí en un libro que las abejas son conocidas por su sistema de trabajo y que cada una tiene un rol. Por ejemplo, la mayoría, que son las obreras, cuidan las larvas y construyen el panal, entre otras labores; por otro lado, la abeja reina tiene otros roles, como engendrar a nuevas abejas. Creo que las abejas son un ejemplo de trabajo en equipo\".",
        feedback: "INCORRECTA - Solo describe la organización biológica/natural de las abejas. No menciona interacción con humanos ni elementos sociales geográficos."
      }
    ],
    correctAnswer: 'A',
    explanation: "El espacio geográfico se define por la interacción dinámica entre la sociedad y la naturaleza. Identificar actividades económicas concretas (apicultura) que se basan en recursos naturales (abejas) es clave para esta comprensión."
  },
  {
    id: 9,
    category: "Comunicación",
    text: "En el marco de una recopilación de canciones, los estudiantes de primer grado, con ayuda de la docente, leen y cantan la canción \"¿Lobo estás?\". Luego de cantarla, la docente les propone algunas actividades. Una de estas consiste en entregar, a cada estudiante, una tira de papel que contenga el estribillo de la canción. Luego, les pide que señalen cada palabra de la canción mientras cantan y que repitan esta acción, las veces que crean necesarias. Al finalizar, organiza a los estudiantes en pares y les pide que comparten, entre ellos, cómo les fue con la realización de la actividad.\n\n¿Por qué la actividad propuesta favorece la lectura de textos escritos?",
    options: [
      { 
        id: 'A', 
        text: "Porque favorece que los estudiantes tomen en cuenta, progresivamente, la correspondencia que existe entre lo que cantan y lo que está escrito.",
        feedback: "CORRECTA - Esta actividad permite establecer la relación término a término (correspondencia) entre la oralidad (que ya dominan por la canción) y la escritura, base fundamental del principio alfabético y la lectura inicial."
      },
      { 
        id: 'B', 
        text: "Porque promueve que los estudiantes recuerden la escritura correcta de algunas palabras que se encuentran en el estribillo de la canción.",
        feedback: "INCORRECTA - El objetivo en esta etapa inicial no es la memoria ortográfica (visual), sino comprender el sistema de escritura (cómo lo oral se representa por escrito)."
      },
      { 
        id: 'C', 
        text: "Porque propicia que los estudiantes centren su atención en la adecuada pronunciación de las palabras de una canción.",
        feedback: "INCORRECTA - El foco de la actividad es la lectura (conexión con el texto escrito), no la oralidad o dicción. Señalar el texto no mejora la pronunciación."
      }
    ],
    correctAnswer: 'A',
    explanation: "La estrategia de \"lectura de textos memorizados\" con señalamiento ayuda a los niños a descubrir que lo escrito representa lo hablado, a segmentar el flujo del habla en palabras y a entender la direccionalidad de la lectura."
  },
  {
    id: 10,
    category: "Comunicación",
    text: "Como parte de una sesión de aprendizaje, los estudiantes de cuarto grado están escuchando audios de leyendas de animales. En este contexto, el docente les propone analizar la leyenda del jaguar. A continuación, se presenta un fragmento de la grabación:\n\n\"Cuentan por ahí que, hace mucho tiempo, el jaguar era el único rey de la selva. Su gran fuerza y habilidad lo hacían sentir orgulloso. Esto le permitía dar órdenes a todos los animales, que lo obedecían. Y así fue, hasta que un grillo se cansó de cumplir sus mandatos. Entonces, decidió retarlo a una pelea...\"\n\nEl docente propone a los estudiantes realizar una pausa a la grabación para dialogar sobre el contenido de este fragmento. El comentario de los estudiantes evidencia una deducción de información a partir del texto oral?",
    options: [
      { 
        id: 'A', 
        text: "\"Veo que este grillo ya no aguantó seguir haciendo caso al jaguar\".",
        feedback: "INCORRECTA - Este comentario es una paráfrasis de lo que dice el texto explícitamente (\"se cansó de cumplir sus mandatos\"). No aporta información nueva inferida."
      },
      { 
        id: 'B', 
        text: "\"Es gracioso que el que quiere pelearse con el jaguar sea un animal tan chiquito\".",
        feedback: "INCORRECTA - Este comentario es una valoración personal o apreciación sobre la situación, no una deducción lógica derivada del texto."
      },
      { 
        id: 'C', 
        text: "\"Los otros animales no se enfrentaban al jaguar porque pensaban que este les podía hacer daño\".",
        feedback: "CORRECTA - Este comentario evidencia una deducción. Infiere una causa (miedo/daño) que no está explícita en el texto para explicar un hecho (la obediencia de los animales), basándose en las pistas del texto (\"gran fuerza\")."
      }
    ],
    correctAnswer: 'C',
    explanation: "Deducir o inferir implica extraer información implícita a partir de pistas del texto y conocimientos previos. Aquí el estudiante construye una relación causal (fuerza -> miedo -> obediencia) que no está escrita literalmente."
  },
  {
    id: 11,
    category: "Comunicación",
    text: "Durante una sesión de aprendizaje, los estudiantes de primer grado se encuentran escribiendo una lista de personajes de los cuentos leídos hasta ese momento. En este contexto, un estudiante pide a la docente que lo ayude a revisar su lista. Atendiendo su pedido, la docente se acerca al sitio del estudiante, observa su lista y le pide que la lea en voz alta. Durante la lectura, la docente nota que hay aspectos logrados y por mejorar con respecto al sistema de escritura empleado por el estudiante.\n\nLa docente busca aprovechar la escritura de la palabra \"IOCO\" (\"Pinocho\"), presente en dicha lista, con el propósito de que el estudiante reflexione sobre el sistema de escritura. ¿Cuál de las siguientes acciones pedagógicas es más adecuada para el logro de dicho propósito?",
    options: [
      { 
        id: 'A', 
        text: "Mostrarle tarjetas con las sílabas que conforman el nombre \"Pinocho\". Luego, solicitarle que organice dichas sílabas siguiendo el orden que utilizó para escribir el nombre del cuento en su lista.",
        feedback: "INCORRECTA - Es muy directiva y trabaja a nivel silábico, que el estudiante ya parece estar superando. No ayuda a analizar la composición interna de la sílaba (que necesita consonantes)."
      },
      { 
        id: 'B', 
        text: "Entregarle un cartel con palabras como \"pepino\" y \"chupete\" y preguntarle qué tienen en común con la palabra \"Pinocho\". Luego, pedirle que identifique qué letras utilizadas en esos carteles le pueden servir para escribir \"Pinocho\".",
        feedback: "CORRECTA - Esta estrategia de andamiaje ofrece referentes conocidos (\"pepino\", \"chupete\") para que el estudiante descubra por sí mismo las letras que le faltan (P, N, CH) mediante comparación y análisis fonológico."
      },
      { 
        id: 'C', 
        text: "Brindarle tarjetas con las letras que conforman el nombre \"Pinocho\" y pedirle que, usando todas las tarjetas y la palabra \"Pinocho\" de la lista que escribió, realice una comparación entre el nombre formado con las tarjetas y la palabra \"Pinocho\" de la lista que escribió.",
        feedback: "INCORRECTA - Le da la respuesta completa (todas las letras). La comparación puede ser mecánica (\"me faltan letras\") sin generar comprensión de por qué faltaban esas letras específicas."
      }
    ],
    correctAnswer: 'B',
    explanation: "El uso de palabras referentes o 'palabras seguras' permite al estudiante analizar la estructura interna de las sílabas y avanzar de una hipótesis silábica (una letra por sílaba) a una hipótesis alfabética."
  },
  {
    id: 12,
    category: "Comunicación",
    text: "Con el fin de motivar a la comunidad educativa a participar en los talleres de teatro gratuitos de la municipalidad, una estudiante decidió elaborar una exposición en la que explicó por qué le gustan estos talleres. En este contexto, le ha pedido al docente que escuche la práctica de su exposición, cuya transcripción es la siguiente:\n\n\"Holas. Este... les hablaré un poquitín acerca de por qué me gusta el taller de teatro. Eh... En primer lugar, este taller es algo bien divertido porque nos ayuda a conocer muchas historias... Este... cuando voy a mi taller, me gusta que jugamos mucho... Además, me gusta porque puedo ser diferentes personajes, como seres mágicos y extraterrestres. En este taller, juego mucho y puedo hacer de diferentes personajes como un ogro o una maga... Este... En este taller, también creamos juegos entre amigos y eso nos ayuda a que podamos hacer cosas que nos sorprenden, ¿no?, y aprendo a trabajar en equipo... eh... a escucharnos con respeto... Además... eh... siempre solemos representar a diferentes cosas en cada historia\".\n\nLuego de escuchar a la estudiante, el docente busca ofrecerle una retroalimentación que la ayude a mejorar su texto oral. ¿Cuál de los siguientes aspectos debe priorizar el docente para lograr ello?",
    options: [
      { 
        id: 'A', 
        text: "La utilización de léxico impreciso en su texto oral.",
        feedback: "INCORRECTA - El léxico puede mejorarse, pero no es lo más crítico en este momento. El mensaje se entiende a pesar de la imprecisión."
      },
      { 
        id: 'B', 
        text: "La limitada progresión de ideas en su texto oral.",
        feedback: "CORRECTA - Es el problema más grave. El texto da vueltas sobre lo mismo ('jugar', 'personajes') de forma desordenada y repetitiva, sin avanzar lógicamente. Sin progresión, el mensaje pierde eficacia comunicativa."
      },
      { 
        id: 'C', 
        text: "El uso constante de muletillas en su texto oral.",
        feedback: "INCORRECTA - Las muletillas afectan la fluidez (forma), pero son un problema menor comparado con la falta de coherencia y desarrollo de ideas (contenido)."
      }
    ],
    correctAnswer: 'B',
    explanation: "En la producción de textos orales o escritos, la coherencia (organización y progresión temática) es prioritaria sobre aspectos formales como el vocabulario o la fluidez. Si las ideas no avanzan, el texto no cumple su propósito."
  },
  {
    id: 13,
    category: "Comunicación",
    text: "Un equipo de estudiantes decidió entrevistar a la directora de un museo de la localidad. Para ayudar a los estudiantes en la preparación de las entrevistas, el docente les ha entregado una lista con criterios que deben considerar en la formulación de preguntas. ¿Cuál de los siguientes criterios se centra en favorecer el desarrollo de las ideas de la entrevistada?",
    options: [
      { 
        id: 'A', 
        text: "Pronunciar con claridad las preguntas para asegurar que sean entendibles por la entrevistada.",
        feedback: "INCORRECTA - Ayuda a la comprensión, pero es un aspecto de forma que no garantiza que la respuesta sea extensa o profunda."
      },
      { 
        id: 'B', 
        text: "Usar, en las preguntas, un vocabulario variado y preciso acorde al tema de la entrevista.",
        feedback: "INCORRECTA - Mejora la calidad técnica de la pregunta, pero no necesariamente su potencial para generar desarrollo de ideas."
      },
      { 
        id: 'C', 
        text: "Elaborar preguntas para aclarar algunas de las ideas ofrecidas por la entrevistada.",
        feedback: "CORRECTA - Las preguntas de seguimiento, aclaración o profundización invitan explícitamente a la entrevistada a expandir, explicar y desarrollar sus ideas."
      }
    ],
    correctAnswer: 'C',
    explanation: "Para obtener información rica en una entrevista, es fundamental la capacidad de escucha activa y de formular preguntas de seguimiento que permitan profundizar en los temas tratados."
  },
  {
    id: 14,
    category: "Comunicación",
    text: "Durante la planificación del texto, el docente y los estudiantes dialogan sobre el género que van a escribir. En este contexto, el docente busca recoger los saberes previos de los estudiantes acerca de los aspectos que deben considerarse al escribir una semblanza. ¿Cuál de los estudiantes ofrece un comentario que se corresponde con las características de una semblanza?",
    options: [
      { 
        id: 'A', 
        text: "Pedro dice: \"Considero que, en las semblanzas de las científicas, es mejor evitar algunos aspectos de sus vidas como sus pasatiempos, aspectos sobre su carácter o alguna anécdota personal que le restaría valor a su trabajo\".",
        feedback: "INCORRECTA - Confunde semblanza con currículum. Una semblanza busca precisamente humanizar al personaje, por lo que lo personal es esencial."
      },
      { 
        id: 'B', 
        text: "Juana dice: \"Pienso que, en las semblanzas de las científicas, hay que centrarnos en detallar sus experiencias y reconocimientos en su vida profesional, y extender esta información cuanto sea posible\".",
        feedback: "INCORRECTA - Describe una biografía exhaustiva o un CV. La semblanza suele ser más breve, selectiva y narrativa."
      },
      { 
        id: 'C', 
        text: "Carla dice: \"Creo que, en las semblanzas de las científicas, es necesario incluir el contexto en el que ellas vivieron para que se pueda entender mejor el porqué de las actividades o acciones que realizaron\".",
        feedback: "CORRECTA - La contextualización es una característica clave de la semblanza, ya que permite interpretar y valorar los logros y la vida del personaje en su dimensión justa."
      }
    ],
    correctAnswer: 'C',
    explanation: "La semblanza es un texto que combina información objetiva con una visión interpretativa y humana. El contexto histórico y social es fundamental para comprender la trascendencia de la vida del personaje."
  },
  {
    id: 15,
    category: "Comunicación",
    text: "Durante el acompañamiento del trabajo en el aula, uno de los equipos le pide al docente que lo ayude a revisar la primera versión de la semblanza. El docente nota que se repiten innecesariamente algunas ideas en el texto. Por ello, brindar retroalimentación a los estudiantes del equipo para que revisen su texto. ¿Cuál de las siguientes acciones pedagógicas es más adecuada para ello?",
    options: [
      { 
        id: 'A', 
        text: "Pedirles que comenten por qué creen que es importante evitar la repetición innecesaria de ideas en un texto. Luego, solicitarles que revisen en su texto qué ideas se repiten varias veces. A partir de esto, pedirles que planteen algunas alternativas para evitar dicha repetición.",
        feedback: "INCORRECTA - Es reflexiva, pero puede ser demasiado teórica al principio. Falta el paso de analizar su propio texto antes de teorizar sobre la importancia."
      },
      { 
        id: 'B', 
        text: "Pedirles que lean su texto en voz alta e irles indicando las ideas que se repiten de forma innecesaria. Luego, solicitarles algunas alternativas para reemplazar dichas ideas en su texto. A partir de esto, solicitarles que hagan un listado de estrategias que podrían usar para evitar dicha repetición.",
        feedback: "INCORRECTA - Es muy directiva. El docente hace el trabajo de identificación (\"irles indicando\"), lo que reduce la autonomía del estudiante."
      },
      { 
        id: 'C', 
        text: "Pedirles que vuelvan a leer con detenimiento su texto e identifiquen si alguna idea se repite. Luego, solicitarles que revisen si dichas ideas repetidas son indispensables para que se comprenda su texto. A partir de esto, pedirles que planteen propuestas de qué podrían hacer cuando se repite una idea de forma innecesaria.",
        feedback: "CORRECTA - Promueve la revisión autónoma. Entrega un criterio claro (\"si son indispensables\") para tomar decisiones de edición y fomenta que ellos mismos propongan soluciones."
      }
    ],
    correctAnswer: 'C',
    explanation: "La revisión efectiva debe promover la autonomía del estudiante para detectar y corregir sus propios textos. El docente debe guiar con preguntas y criterios, no corregir directamente."
  },
  {
    id: 16,
    category: "Comunicación",
    text: "Los estudiantes de sexto grado, organizados en equipos, participan en un proyecto cuyo propósito es elaborar una revista literaria para promover la lectura de cuentos de diversos autores. Entre las actividades propuestas para el desarrollo de este proyecto, los estudiantes escribirán reseñas de los últimos cuentos que han leído para compartirlas con los compañeros de la IE. En este contexto, los estudiantes intercambian ideas sobre la escritura de las reseñas. ¿Cuál de los siguientes comentarios se ajusta al propósito de una reseña?",
    options: [
      { 
        id: 'A', 
        text: "\"Me parece que en la reseña podemos señalar los hechos que ayuden a saber lo que sucede en el cuento. Luego, podemos decirles qué tal nos pareció el cuento para que los lectores decidan si lo leen o no\".",
        feedback: "CORRECTA - Este comentario captura la esencia de la reseña: combina una síntesis informativa del contenido con una valoración crítica u opinión personal para orientar al lector."
      },
      { 
        id: 'B', 
        text: "\"Creo que, primero, necesitamos indicar las partes que más nos gustaron del cuento y explicar por qué. Con esto, podemos escribir una reseña para motivar a que nuestros compañeros lean la obra\".",
        feedback: "INCORRECTA - Esto es más un comentario de opinión personal o recomendación emocional. Le falta la parte informativa/descriptiva objetiva de la obra."
      },
      { 
        id: 'C', 
        text: "\"Podemos escribir la reseña usando lo que dice el mismo cuento, realizando algunos cambios de palabras. A partir de esto, los lectores podrán tener una idea de lo que trata el cuento\".",
        feedback: "INCORRECTA - Esto describe un resumen o paráfrasis. Una reseña exige una postura crítica y una valoración, no solo contar de qué trata."
      }
    ],
    correctAnswer: 'A',
    explanation: "Una reseña tiene el doble propósito de informar sobre el contenido de una obra (síntesis) y ofrecer una opinión justificada (crítica) para orientar a potenciales lectores."
  },
  {
    id: 17,
    category: "Comunicación",
    text: "El docente le pide al equipo hacer una pausa para repasar algunos aspectos logrados de su texto oral. ¿Cuál es un aspecto logrado en la presentación del equipo?",
    options: [
      { 
        id: 'A', 
        text: "Utilizar causas de manera estratégica en el texto.",
        feedback: "CORRECTA - El equipo utiliza conectores y explicaciones causales (\"porque ayudan a mantener\", \"causar la desaparición\") para relacionar ideas, lo cual es clave en un texto expositivo."
      },
      { 
        id: 'B', 
        text: "Plantear el propósito del texto explícitamente.",
        feedback: "INCORRECTA - En la transcripción presentada, el equipo no declara explícitamente su propósito al inicio."
      },
      { 
        id: 'C', 
        text: "Mantener la unidad temática del texto.",
        feedback: "INCORRECTA - El texto divaga un poco, saltando de las rocas a los insectos y al cambio climático, perdiendo el foco central."
      }
    ],
    correctAnswer: 'A',
    explanation: "La capacidad de explicar 'por qué' ocurren las cosas (establecer relaciones causales) es fundamental en los textos expositivos, y el equipo demuestra un buen uso de este recurso lingüístico."
  },
  {
    id: 18,
    category: "Comunicación",
    text: "En otro momento, la docente nota que los estudiantes utilizan algunas expresiones o términos que dificultan la comprensión de su texto oral. Por ello, busca brindarles retroalimentación. La docente empieza por recordar junto con ellos el propósito de su texto y el público al que está dirigido. ¿Cuál de las siguientes acciones pedagógicas es más adecuada para continuar con la retroalimentación?",
    options: [
      { 
        id: 'A', 
        text: "Pedirles que vuelvan a escuchar la grabación de su texto oral. Luego, preguntarles si el uso de palabras nuevas o desconocidas es relevante para que el público comprenda el texto. Finalmente, indicarles que busquen en el diccionario las definiciones de dichas palabras y que las incluyan en su texto oral.",
        feedback: "INCORRECTA - Es una solución mecánica. Las definiciones de diccionario pueden ser igual de complejas y no garantizan que el público escolar las entienda."
      },
      { 
        id: 'B', 
        text: "Pedirles que vuelvan a escuchar el audio de su texto oral. Luego, preguntarles qué términos creen que podrían ser explicados con mayor detalle, tomando en cuenta al público. Finalmente, solicitarles que planteen algunas propuestas para presentar esa información, según el público al que está dirigida.",
        feedback: "CORRECTA - Centra la reflexión en la audiencia (el público) y promueve la búsqueda creativa y autónoma de formas de explicar los términos difíciles."
      },
      { 
        id: 'C', 
        text: "Pedirles que vuelvan a escuchar el audio de su texto oral haciendo una pausa en la expresión \"casimero biológico\". Luego, indicarles que evalúen si saber a qué alude dicha expresión es relevante para que el público comprenda su texto. Finalmente, preguntar de qué fuente la obtuvieron y por qué decidieron incluir esa expresión.",
        feedback: "INCORRECTA - Se enfoca en la validez de la información y la fuente, no en la adecuación comunicativa al público."
      }
    ],
    correctAnswer: 'B',
    explanation: "La adecuación textual implica ajustar el registro y la complejidad del lenguaje a las características del destinatario. La retroalimentación debe guiar al estudiante a pensar en su público."
  },
  {
    id: 19,
    category: "Comunicación",
    text: "En una sesión de aprendizaje, una estudiante de primer grado escribe el nombre de su compañera en una tarjeta de cumpleaños y se lo muestra a la docente. La estudiante escribió \"Karlota\" (para decir \"Carlota\"). Ante esto, la docente le propone buscar ese nombre en la lista de asistencia y le pide que se fije en cómo está escrito. La estudiante dice: \"No está, señorita\". La docente se acerca y le pregunta en qué se fijó. La estudiante le indica que revisó el comienzo de cada nombre, pero ninguno empieza con \"Kar\". A partir de esto, la docente le señala el nombre de Carlota y le pide que lo lea. La estudiante lee despacio (\"Caer...\"), duda, vuelve a leer, lee despacio (\"Car-lo-ta\") y mira lo que escribió (\"Karlota\"). Luego, se detiene a observar los inicios \"Car\" y \"Kar\". Entonces, \"Carlota también se escribe así, ¿no?\". A partir de esto, la docente elabora, junto con ella, algunos ejemplos similares. Finalmente, la estudiante va señalando cada letra del nombre de Carlota y lo va copiando en su tarjeta.\n\n¿Cuál de los aprendizajes sobre la comprensión del sistema de escritura se evidencia en las acciones de la estudiante?",
    options: [
      { 
        id: 'A', 
        text: "Identifica que un mismo sonido puede representarse con diversas letras.",
        feedback: "CORRECTA - La estudiante descubre la correspondencia polivalente del fonema /k/: se da cuenta de que puede representarse con \"K\" (como ella escribió) o con \"C\" (como está en la lista)."
      },
      { 
        id: 'B', 
        text: "Identifica que las letras de las palabras tienen una organización determinada.",
        feedback: "INCORRECTA - La estudiante ya respetaba el orden de las letras en \"Karlota\", su problema no era de organización secuencial."
      },
      { 
        id: 'C', 
        text: "Identifica que existen reglas ortográficas para escribir las letras de las palabras.",
        feedback: "INCORRECTA - La estudiante aún no conoce la regla ortográfica (cuándo usar C y cuándo K), solo ha descubierto la posibilidad de variación gráfica."
      }
    ],
    correctAnswer: 'A',
    explanation: "Este es un hito importante en la alfabetización: comprender que la relación sonido-letra no siempre es biunívoca (uno a uno), sino que un sonido puede tener varias representaciones gráficas."
  },
  {
    id: 20,
    category: "Ciencia y Tecnología",
    text: "Durante una unidad didáctica en la que los estudiantes están identificando las características de los hongos, una estudiante comenta, a veces, en el pan crece moho. Varios estudiantes están de acuerdo con este comentario y, a partir de esto, formulan diversas hipótesis. A continuación, se muestra la hipótesis que un equipo presentó a la docente:\n\n\"Los hongos tardarán más tiempo en crecer en los panes artesanales de panadería que se guardan en una bolsa de papel, en comparación con los que se guardan dentro de una bolsa de plástico.\"\n\nPREGUNTA 20\n¿Cuál es la variable independiente en la hipótesis planteada?",
    options: [
      { 
        id: 'A', 
        text: "El tipo de pan que se ha empleado.",
        feedback: "INCORRECTA - El tipo de pan (artesanal) se mantiene constante en ambos casos, por lo que es una variable controlada."
      },
      { 
        id: 'B', 
        text: "El material del que están hechas las bolsas.",
        feedback: "CORRECTA - Es la variable que se manipula o cambia intencionalmente (papel vs. plástico) para observar su efecto."
      },
      { 
        id: 'C', 
        text: "El tiempo que tarda el crecimiento de hongos en el pan.",
        feedback: "INCORRECTA - Esta es la variable dependiente, el efecto o resultado que se va a medir u observar."
      }
    ],
    correctAnswer: 'B',
    explanation: "En una indagación experimental, la variable independiente es la causa presunta que el investigador modifica deliberadamente para estudiar su influencia sobre otra variable."
  },
  {
    id: 21,
    category: "Ciencia y Tecnología",
    text: "Los integrantes del equipo se encuentran planteando los pasos a seguir como parte de la propuesta de indagación para comprobar la hipótesis. ¿Cuál de los siguientes pasos es necesario incorporar en la propuesta de indagación?",
    options: [
      { 
        id: 'A', 
        text: "Cortar un mismo pan, recién comprado, en cuatro rebanadas iguales. Luego, colocar las cuatro rebanadas dentro de una bolsa de papel. Después, colocar la bolsa de papel dentro de una bolsa de plástico y guardarlas en un ambiente cálido durante tres días.",
        feedback: "INCORRECTA - Este diseño mezcla las condiciones (papel dentro de plástico) y no permite comparar los efectos por separado."
      },
      { 
        id: 'B', 
        text: "Cortar un mismo pan, recién comprado, en cuatro rebanadas iguales. Luego, colocar dos rebanadas en una bolsa de papel y las otras dos en una bolsa de plástico. Después, guardar ambas bolsas en un mismo ambiente durante tres días.",
        feedback: "CORRECTA - Este diseño establece dos grupos claros diferenciados solo por la variable independiente (material de bolsa) y controla las demás variables (mismo pan, mismo ambiente)."
      },
      { 
        id: 'C', 
        text: "Cortar un mismo pan, recién comprado, en cuatro rebanadas iguales. Luego, colocar dos rebanadas en una bolsa de papel y las otras dos en una bolsa de plástico. Después, colocar cada bolsa en un ambiente diferente durante tres días.",
        feedback: "INCORRECTA - Introduce una variable de confusión (ambiente diferente), lo que invalida la comparación ya que no se sabría si el efecto es por la bolsa o por el ambiente."
      }
    ],
    correctAnswer: 'B',
    explanation: "Un diseño experimental válido requiere el control de variables: todo debe mantenerse constante excepto la variable independiente que se quiere probar."
  },
  {
    id: 22,
    category: "Ciencia y Tecnología",
    text: "Al final de la indagación, los integrantes del equipo y la docente comparten algunas interpretaciones sobre los resultados obtenidos. En este contexto, los estudiantes comentan que tuvieron como resultado que los panes que estaban dentro de la bolsa de papel tardaron más tiempo en desarrollar hongos, en comparación con los panes que estaban dentro de la bolsa de plástico. Después de esto, la docente pregunta a los estudiantes lo siguiente: \"En la indagación que realizaron usaron pan artesanal de la panadería. Ahora, ¿creen que suceda lo mismo si usan pan envasado hecho por una fábrica? Justifiquen su respuesta\".\n\n¿Cuál es el propósito principal de la docente al plantear esta pregunta a los estudiantes?",
    options: [
      { 
        id: 'A', 
        text: "Promover la elaboración de hipótesis de una indagación.",
        feedback: "INCORRECTA - La etapa de formulación de hipótesis ya pasó. Ahora están en la fase de análisis y conclusiones."
      },
      { 
        id: 'B', 
        text: "Promover la elaboración de conclusiones de una indagación.",
        feedback: "CORRECTA - La pregunta busca que los estudiantes reflexionen sobre el alcance y la generalización de sus hallazgos (validez externa), lo cual es parte fundamental de elaborar conclusiones científicas robustas."
      },
      { 
        id: 'C', 
        text: "Promover la elaboración de un diseño de un plan de indagación.",
        feedback: "INCORRECTA - No les pide diseñar un nuevo experimento, sino reflexionar sobre el conocimiento generado a partir del anterior."
      }
    ],
    correctAnswer: 'B',
    explanation: "Las conclusiones científicas no solo resumen los resultados, sino que también analizan su alcance: ¿son válidos solo para el caso estudiado o pueden generalizarse? Esta reflexión es clave."
  },
  {
    id: 23,
    category: "Ciencia y Tecnología",
    text: "Los estudiantes de cuarto grado están desarrollando un proyecto denominado \"Valorando la diversidad de nuestra localidad\". En este contexto, ellos han realizado una visita de estudio a una reserva natural. Al regresar de la visita, los estudiantes comentan al docente que lo que más les llamó la atención fue el musgo verde que cubría las rocas. La mayoría de estudiantes afirma que los musgos no son plantas, puesto que no tienen tallos, hojas ni raíces.\n\nA partir de la afirmación, el docente busca que los estudiantes identifiquen las características que permiten clasificar a los musgos como plantas. ¿Cuál de las siguientes acciones pedagógicas es más adecuada para lograr dicho propósito?",
    options: [
      { 
        id: 'A', 
        text: "Presentarles las características de los musgos. Luego, a partir de esto, proponerles corroborar dichas características en los musgos de su localidad.",
        feedback: "INCORRECTA - No confronta la idea errónea principal (que 'planta' equivale a tener tallo/hoja/raíz)."
      },
      { 
        id: 'B', 
        text: "Presentarles las características de los diferentes grupos de plantas que habitan el planeta. Luego, mencionarles a qué grupo de plantas pertenecen los musgos considerando que no tienen tallos, hojas ni raíces.",
        feedback: "INCORRECTA - Es un aprendizaje memorístico y receptivo. El docente da la respuesta en lugar de que los estudiantes construyan el concepto."
      },
      { 
        id: 'C', 
        text: "Presentarles información sobre las características que diferencian a las plantas de otros seres vivos. Luego, a partir de esto, ayudarles a identificar cuáles de dichas características están presentes en los musgos.",
        feedback: "CORRECTA - Esta estrategia confronta la concepción errónea ayudando a identificar las características ESENCIALES (fotosíntesis, clorofila) frente a las accesorias, promoviendo el cambio conceptual."
      }
    ],
    correctAnswer: 'C',
    explanation: "Para lograr el cambio conceptual, es necesario confrontar las ideas previas con criterios científicos esenciales que permitan reclasificar el objeto de estudio basándose en evidencia."
  },
  {
    id: 24,
    category: "Ciencia y Tecnología",
    text: "Durante una de las actividades, los equipos buscan información sobre por qué el uso de los abanicos genera sensación de frescura. La mayoría de equipos ha identificado que es porque los abanicos desplazan el aire caliente que rodea nuestro cuerpo, lo cual da lugar al aire frío que está alejado de nosotros ante lo siguiente: ¿Qué mecanismo de transferencia de calor han identificado los estudiantes?",
    options: [
      { 
        id: 'A', 
        text: "Conducción.",
        feedback: "INCORRECTA - La conducción requiere contacto directo entre materiales sin movimiento de materia."
      },
      { 
        id: 'B', 
        text: "Convección.",
        feedback: "CORRECTA - La convección es el mecanismo de transferencia de calor caracterizado por el movimiento y desplazamiento de un fluido (en este caso, el aire)."
      },
      { 
        id: 'C', 
        text: "Radiación.",
        feedback: "INCORRECTA - La radiación es la transferencia de energía mediante ondas electromagnéticas, no requiere medio material ni movimiento de fluidos."
      }
    ],
    correctAnswer: 'B',
    explanation: "La convección implica el transporte de calor por medio del movimiento de un fluido (líquido o gas). El abanico fuerza este movimiento, acelerando la transferencia de calor."
  },
  {
    id: 25,
    category: "Ciencia y Tecnología",
    text: "En otro momento, cada equipo elabora una hipótesis que luego pondrá a prueba. A continuación, se presenta la hipótesis de uno de los equipos:\n\n\"Los abanicos que tienen forma plana funcionan mejor que los abanicos que tienen forma de acordeón.\"\n\nLa docente lee la hipótesis y nota que la variable dependiente (\"funcionan mejor\") propuesta por el equipo no es precisa. Por ello, busca brindarles retroalimentación para que puedan mejorar su hipótesis. ¿Cuál de las siguientes acciones pedagógicas es más adecuada para ello?",
    options: [
      { 
        id: 'A', 
        text: "Preguntarles a qué se refieren con que un tipo de abanico funciona mejor que otro y cómo podrá darse cuenta de ello. Luego, brindarles información sobre las características de una variable dependiente. A partir de todo esto, pedirles que ajusten su hipótesis.",
        feedback: "CORRECTA - Promueve la reflexión y la operacionalización de la variable. Ayuda a los estudiantes a definir qué significa \"mejor\" en términos medibles y observables."
      },
      { 
        id: 'B', 
        text: "Solicitarles que identifiquen la variable dependiente de su hipótesis sobre el funcionamiento de los abanicos. Luego, mencionarles que esta variable requiere mejorarse. A partir de todo esto, preguntarles qué mejoras son necesarias realizar en la hipótesis de su indagación.",
        feedback: "INCORRECTA - Falta orientación específica (andamiaje) sobre qué hace que una variable sea científica. Puede generar confusión si no saben cómo mejorarla."
      },
      { 
        id: 'C', 
        text: "Ponerles ejemplos de hipótesis que se ajusten a su indagación. Luego, indicarles qué características de un mismo pan, recién comprado, en uno de los ejemplos presentados que podrían usar en su indagación para terminar el funcionamiento de los abanicos. A partir de todo esto, pedirles que reemplacen su hipótesis con el ejemplo seleccionado.",
        feedback: "INCORRECTA - Promueve la copia y anula la construcción del conocimiento. El estudiante no aprende a formular, solo a seleccionar."
      }
    ],
    correctAnswer: 'A',
    explanation: "Una buena variable científica debe ser clara, específica y medible (operacionalizable). La retroalimentación debe guiar al estudiante a transformar términos vagos en variables observables."
  },
  {
    id: 26,
    category: "Ciencia y Tecnología",
    text: "Lee la siguiente situación y responda las preguntas 26 y 27.\n\nEn una de las sesiones de aprendizaje, los estudiantes de tercer grado comentan al docente que han notado la presencia de polillas al interior de tres armarios del aula y quieren ahuyentarlas. Estos tres armarios guardan características y están vacíos porque pronto los van a pintar. A partir de esta situación, el docente propone a los estudiantes que, en equipos, planteen propuestas de indagación para identificar qué podría ahuyentar a las polillas de dichos armarios.\n\nA continuación, un estudiante, de uno de los equipos, menciona lo siguiente:\n\n\"Nosotros pondremos clavos de olor en bolsitas de plástico bien cerradas para que los clavos no se salgan de ellas y guarden su aroma por más tiempo. Con el olor, ya no habrá polillas. Luego, pondremos las bolsitas en dos de los tres armarios que hay en el aula. Después de una semana, registraremos lo que pasa en los armarios donde pusimos las bolsitas y en el armario en el que no pusimos nada\".\n\nPREGUNTA 26\n¿Cuál de las siguientes preguntas es pertinente que el docente realice a los estudiantes para que mejoren su propuesta de indagación?",
    options: [
      { 
        id: 'A', 
        text: "¿Qué sustancia tiene el clavo de olor que podría ahuyentar a las polillas que están en los armarios?",
        feedback: "INCORRECTA - Es una pregunta sobre conocimiento teórico (química), no ayuda a corregir el error metodológico del diseño."
      },
      { 
        id: 'B', 
        text: "¿El aroma del clavo de olor podrá llegar a las polillas y ahuyentarlas si las bolsitas están cerradas?",
        feedback: "CORRECTA - Es una pregunta socrática que evidencia la contradicción lógica del diseño: si cierran las bolsas, la variable independiente (aroma) no podrá actuar."
      },
      { 
        id: 'C', 
        text: "¿Qué otras plantas parecidas al clavo de olor podrían usar para comparar cuál de ellas logra ahuyentar a las polillas?",
        feedback: "INCORRECTA - Sugiere cambiar el foco de la investigación en lugar de corregir el diseño actual."
      }
    ],
    correctAnswer: 'B',
    explanation: "La validación del diseño experimental requiere verificar que el procedimiento permita que la variable independiente actúe realmente sobre la dependiente."
  },
  {
    id: 27,
    category: "Ciencia y Tecnología",
    text: "En la propuesta del equipo, ¿por qué es importante registrar lo que sucede en el tercer armario?",
    options: [
      { 
        id: 'A', 
        text: "Porque permite identificar qué otros aspectos, además del clavo de olor, pueden ahuyentar a las polillas de los armarios.",
        feedback: "INCORRECTA - El grupo control no introduce nuevas variables, mantiene las condiciones naturales."
      },
      { 
        id: 'B', 
        text: "Porque permite comprobar si los resultados obtenidos en los dos primeros armarios son reproducibles.",
        feedback: "INCORRECTA - La reproducibilidad se logra con réplicas (repetir el experimento), no con el grupo control."
      },
      { 
        id: 'C', 
        text: "Porque permite asegurarse si el aroma del clavo de olor ahuyenta o no a las polillas de los armarios.",
        feedback: "CORRECTA - El tercer armario actúa como GRUPO CONTROL. Permite comparar y asegurar que el efecto observado se debe al tratamiento y no a otros factores o al azar."
      }
    ],
    correctAnswer: 'C',
    explanation: "El grupo control es esencial en el método científico para establecer una línea base y validar que los cambios observados son causados por la variable experimental."
  },
  {
    id: 28,
    category: "Ciencia y Tecnología",
    text: "Lee la siguiente situación y responda las preguntas 28 y 29.\n\nComo parte de una unidad didáctica sobre los cambios físicos y químicos de la materia, algunos estudiantes de sexto grado comentan a la docente que han notado que la pulpa de algunas frutas, como la manzana, se oscurece al estar expuesta al aire. A partir de ello, dichos comentarios, los estudiantes quieren indagar sobre los factores que pueden hacer que dicho oscurecimiento sea más lento. En una de las sesiones de la unidad, uno de los equipos ha planteado la siguiente hipótesis:\n\n\"Si a la pulpa de una manzana se le echa jugo de limón y está expuesta al aire, la pulpa demora más en oscurecerse en comparación con la pulpa de otra manzana a la que se le echa agua.\"\n\nPREGUNTA 28\nEn la hipótesis planteada por los estudiantes, ¿cuál es la variable dependiente?",
    options: [
      { 
        id: 'A', 
        text: "La cantidad de manzanas que se use en el experimento.",
        feedback: "INCORRECTA - Esta es una variable controlada (debe ser igual)."
      },
      { 
        id: 'B', 
        text: "El tipo de líquido que se echará en las manzanas cortadas.",
        feedback: "INCORRECTA - Esta es la variable INDEPENDIENTE (la causa que se manipula)."
      },
      { 
        id: 'C', 
        text: "El tiempo que tardarán las manzanas cortadas en cambiar de color.",
        feedback: "CORRECTA - Es la variable DEPENDIENTE, el efecto o resultado que se observa y mide como consecuencia de la manipulación."
      }
    ],
    correctAnswer: 'C',
    explanation: "En una hipótesis causal del tipo \"Si X, entonces Y\", la variable dependiente es Y (el efecto esperado)."
  },
  {
    id: 29,
    category: "Ciencia y Tecnología",
    text: "A partir de la hipótesis planteada, el equipo elabora propuestas de indagación para comprobarla. ¿Cuál de las siguientes propuestas es adecuada para ello?",
    options: [
      { 
        id: 'A', 
        text: "Usar tres mitades de manzana de iguales características y ubicarlas en lugares con las mismas condiciones. Luego, echar, en volúmenes iguales, jugo de limón en la pulpa de una de las mitades; en otra mitad, agua; y, en la tercera mitad, no echar ningún líquido. Después, observar las tres mitades y registrar el tiempo de la pulpa que se oscurece primero.",
        feedback: "CORRECTA - Es un diseño válido: controla variables intervinientes (mismas condiciones), varía solo la independiente (líquido) e incluye un control (sin nada)."
      },
      { 
        id: 'B', 
        text: "Emplear tres mitades de manzanas de iguales características y ubicarlas en un mismo lugar. Luego, en la pulpa de una mitad, echar jugo de limón; en otra mitad, echar agua en menor volumen que el jugo de limón; y, en la última mitad, no echar ningún líquido...",
        feedback: "INCORRECTA - Introduce una variable de confusión al usar VOLÚMENES DIFERENTES."
      },
      { 
        id: 'C', 
        text: "Conseguir tres mitades de manzanas de iguales características y ubicarlas en diferentes ambientes. Luego, echar, en volúmenes iguales, jugo de limón en la pulpa de una de la otra mitad, agua...",
        feedback: "INCORRECTA - Introduce una variable de confusión al usar AMBIENTES DIFERENTES."
      }
    ],
    correctAnswer: 'A',
    explanation: "El rigor experimental exige 'ceteris paribus': mantener constantes todas las variables excepto la que se quiere probar."
  },
  {
    id: 30,
    category: "Ciencia y Tecnología",
    text: "Al volver del recreo, los estudiantes, entusiasmados, le cuentan al docente que estuvieron jugando con sus carritos de juguete y que hicieron rampas con diversos objetos para deslizar los carritos y cuál llegaba más lejos. Entonces, el docente dialoga con los estudiantes y les pregunta si creen que se debe que un carrito recorra más distancia que otro carrito, desde el final de la rampa hasta el lugar donde se detuvieron. Varios estudiantes dicen que la distancia recorrida depende de la altura de la rampa utilizada. A partir de esta hipótesis, los estudiantes, organizados en equipos y con orientación del docente, realizan una propuesta de indagación. A continuación, se presenta esta propuesta:\n\nLos estudiantes consiguieron los siguientes materiales:\n1. Dos tablas de madera lisa de igual estructura y espesor.\n2. En uno de los extremos de cada tabla, trazaron una línea de inicio, teniendo en cuenta la longitud de los carritos.\n3. Apilaron los cuadernos sobre el piso y, usando las tablas, armaron dos rampas: una de 10 cuadernos y otra de 5 cuadernos.\n4. Ubicaron cada carrito de juguete antes de la línea de inicio de la marca y los dejaron caer sobre la rampa.\n5. Midieron y anotaron la distancia horizontal que recorrieron los carritos sobre el piso.\n\nA partir de la propuesta de indagación presentada, ¿cuál es la variable independiente?",
    options: [
      { 
        id: 'A', 
        text: "La distancia que recorren los carritos sobre el piso.",
        feedback: "INCORRECTA - Es la variable dependiente (el resultado medido)."
      },
      { 
        id: 'B', 
        text: "La altura de las rampas construidas.",
        feedback: "CORRECTA - Es el factor que los estudiantes manipularon intencionalmente (10 cuadernos vs. 5 cuadernos) para ver su efecto."
      },
      { 
        id: 'C', 
        text: "La longitud de las tablas.",
        feedback: "INCORRECTA - Es una variable controlada (usaron tablas iguales)."
      }
    ],
    correctAnswer: 'B',
    explanation: "La variable independiente es aquella condición que el investigador modifica deliberadamente al inicio del experimento para estudiar su influencia."
  },
  {
    id: 31,
    category: "Ciencia y Tecnología",
    text: "En el marco de una unidad didáctica sobre cómo se relacionan los sistemas que conforman la función de nutrición en el ser humano, una docente de cuarto grado ha planteado varias actividades. Durante una de las actividades, ella identifica que la mayoría de los estudiantes tiene la idea errónea de que el sistema respiratorio no guarda relación con la función de nutrición.\n\nAnte esto, la docente, usando una maqueta de los órganos del cuerpo humano, busca brindar retroalimentación a los estudiantes sobre dicha idea. ¿Cuál de las siguientes acciones pedagógicas es más adecuada para retroalimentar a los estudiantes?",
    options: [
      { 
        id: 'A', 
        text: "Mencionarles cómo el sistema respiratorio participa en la función de nutrición. Pedirles que identifiquen, en la maqueta, los órganos del sistema respiratorio y sus funciones...",
        feedback: "INCORRECTA - Es una estrategia de transmisión directa. La docente da la respuesta en lugar de que los estudiantes la construyan."
      },
      { 
        id: 'B', 
        text: "Mencionarles qué sistemas intervienen en la función de nutrición del ser humano. Luego, pedirles que dialoguen en parejas sobre qué creen que ocurriría si uno de esos sistemas no funcionara adecuadamente...",
        feedback: "INCORRECTA - Aunque promueve el diálogo, parte de dar la respuesta (\"mencionarles qué sistemas\") y no confronta directamente la idea errónea específica."
      },
      { 
        id: 'C', 
        text: "Mencionarles que la función de nutrición brinda al ser humano todos los nutrientes necesarios para vivir. Luego, preguntarles qué otros nutrientes, además de los que se encuentran en los alimentos, necesita el ser humano para vivir...",
        feedback: "CORRECTA - Utiliza el descubrimiento guiado. A través de preguntas (\"¿qué otros nutrientes?\"), lleva a los estudiantes a identificar el oxígeno y conectar el sistema respiratorio con la nutrición por sí mismos."
      }
    ],
    correctAnswer: 'C',
    explanation: "El aprendizaje es más significativo y duradero cuando el estudiante construye la relación conceptual por sí mismo a través de un andamiaje adecuado que conecta sus saberes previos."
  },
  {
    id: 32,
    category: "Ciencia y Tecnología",
    text: "Como parte de un proyecto acerca del cuidado de las plantas de la IE, los estudiantes de cuarto grado comentan lo que conocen sobre estas. En este contexto, la mayoría de estudiantes coincide en que todas las plantas tienen hojas de iguales características. La docente los escucha y como sabe que las hojas del cactus (espinas) se encuentran modificadas, decide presentarles la imagen de un cactus en su totalidad. A partir de ello, pide a los estudiantes que comparen las partes del cactus con las partes de otras plantas que conocen.\n\n¿Qué proceso de aprendizaje busca promover, principalmente, la docente cuando presenta la imagen de un cactus a los estudiantes?",
    options: [
      { 
        id: 'A', 
        text: "La metacognición sobre las estrategias de aprendizaje.",
        feedback: "INCORRECTA - No se promueve reflexión sobre el proceso de aprendizaje."
      },
      { 
        id: 'B', 
        text: "La generación de conflicto cognitivo.",
        feedback: "CORRECTA - La docente presenta deliberadamente un contraejemplo (cactus) que contradice la creencia previa de los estudiantes (\"todas las hojas son iguales\"), generando desequilibrio mental."
      },
      { 
        id: 'C', 
        text: "La transferencia de aprendizaje.",
        feedback: "INCORRECTA - No están aplicando un conocimiento previo a un nuevo contexto, sino cuestionando su conocimiento actual."
      }
    ],
    correctAnswer: 'B',
    explanation: "El conflicto cognitivo es el motor del cambio conceptual: la contradicción entre lo que el estudiante cree saber y la nueva evidencia obliga a reestructurar los esquemas mentales."
  },
  {
    id: 33,
    category: "Desarrollo Personal",
    text: "Durante el desarrollo de una sesión de aprendizaje, el docente de primer grado realiza una actividad cuyo propósito es favorecer que los estudiantes reconozcan sus emociones. ¿Cuál de las siguientes acciones pedagógicas es más adecuada para promover el logro de dicho propósito?",
    options: [
      { 
        id: 'A', 
        text: "Presentar a los estudiantes imágenes de rostros que expresen diversas emociones. Luego, solicitarles que imiten, frente a sus compañeros y por turnos, cada uno de los rostros presentados.",
        feedback: "INCORRECTA - Se enfoca en el reconocimiento de emociones AJENAS (imágenes) y en la imitación externa, no en la conciencia interna."
      },
      { 
        id: 'B', 
        text: "Pedir que cada estudiante comparta, en plenaria, una situación personal importante para ellos. Luego, comentarles, a cada uno de ellos, qué emoción suele ser más frecuente...",
        feedback: "INCORRECTA - El docente es quien identifica la emoción, generando dependencia. El estudiante no desarrolla la habilidad por sí mismo."
      },
      { 
        id: 'C', 
        text: "Pedir a los estudiantes que mencionen algunas emociones, las representen frente al espejo y se observen mientras lo hacen. Luego, pedirles que comenten voluntariamente alguna situación personal en la que hayan sentido una de las emociones mencionadas.",
        feedback: "CORRECTA - Integra la autoobservación (espejo) con la conexión vivencial (situación personal), favoreciendo el autoconocimiento emocional."
      }
    ],
    correctAnswer: 'C',
    explanation: "El reconocimiento de las propias emociones requiere conectar la experiencia interna (sentir) con la expresión externa (ver) y el contexto (situación), promoviendo la autoconciencia."
  },
  {
    id: 34,
    category: "Desarrollo Personal",
    text: "Una estudiante cuenta a sus amigas lo siguiente: \"¡Estoy muy molesta! Mi mamá es una mandona. Ayer en la noche me peleé con ella porque nunca me escucha, siempre quiere que haga lo que ella quiere\".\n\nLuego de escucharla, sus compañeras le hicieron algunos comentarios. ¿Cuál de los siguientes comentarios de las compañeras evidencia empatía?",
    options: [
      { 
        id: 'A', 
        text: "\"Nuestras mamás nos quieren mucho y saben lo que es mejor para nosotras. Piensa que lo que te ha dicho es por tu bien. Mejor conversa con ella\".",
        feedback: "INCORRECTA - Justifica a la otra parte (la mamá) y da consejos no solicitados, invalidando el sentimiento de la estudiante."
      },
      { 
        id: 'B', 
        text: "\"Ahora entiendo por qué estás así. Me imagino que debe ser difícil que no tome en cuenta lo que tú quieres y ella sola decida por ti\".",
        feedback: "CORRECTA - Valida el sentimiento (\"debe ser difícil\"), se pone en el lugar del otro (\"me imagino\") y demuestra comprensión de la perspectiva ajena sin juzgar."
      },
      { 
        id: 'C', 
        text: "\"Es que así son todas las mamás, ¿no? Mi mamá y yo, a veces, nos enojamos, pero se nos pasa rápido. Se te va a pasar el enojo, ya verás\".",
        feedback: "INCORRECTA - Minimiza el problema generalizando y cambia el foco de atención hacia sí misma (\"mi mamá y yo\")."
      }
    ],
    correctAnswer: 'B',
    explanation: "La empatía implica resonar emocionalmente con el otro, validar su experiencia y comprender su perspectiva sin emitir juicios ni dar soluciones prematuras."
  },
  {
    id: 35,
    category: "Convivencia",
    text: "Como parte del proyecto, una docente de cuarto grado presenta a los estudiantes la siguiente situación hipotética para que la analicen en plenaria:\n\nDurante la realización de una actividad artística, Sol y Javier –dos estudiantes– están compartiendo los lápices de colores... Ambos desean usar el lápiz rojo... Empiezan a discutir...\n\nLa docente pide a los estudiantes que propongan mecanismos para resolver la situación. ¿Cuál de las siguientes intervenciones se centra en un mecanismo de mediación?",
    options: [
      { 
        id: 'A', 
        text: "Aminta dice: \"Yo creo que Sol y Javier deberían conversar amablemente, acordar turnos... y avisar a la profesora que ya no hay problema\".",
        feedback: "INCORRECTA - Describe una NEGOCIACIÓN DIRECTA entre las partes, sin intervención de un tercero facilitador."
      },
      { 
        id: 'B', 
        text: "Carlos dice: \"Yo creo que Sol y Javier deberían llamar a la profesora y pedirle que les dé los turnos para usar el lápiz de color; así ya no hay más discusión\".",
        feedback: "INCORRECTA - Describe un ARBITRAJE, donde el tercero (la profesora) toma la decisión y soluciona el conflicto por ellos."
      },
      { 
        id: 'C', 
        text: "Valeria dice: \"Creo que Sol y Javier deberían llamar a la profesora para que los ayude a llegar a un acuerdo sobre el turno en que cada uno pueda usar el lápiz de color\".",
        feedback: "CORRECTA - Describe la MEDIACIÓN: hay un tercero (profesora) que facilita (\"los ayude\"), pero la solución es construida por las partes (\"llegar a un acuerdo\")."
      }
    ],
    correctAnswer: 'C',
    explanation: "La mediación se caracteriza por la intervención de un tercero neutral que no decide, sino que facilita el diálogo para que las partes encuentren su propia solución."
  },
  {
    id: 36,
    category: "Desarrollo Personal",
    text: "Como parte del proyecto, una docente de quinto grado ha compartido con sus estudiantes algunas situaciones de convivencia para promover la reflexión sobre estas. ¿Cuál de las siguientes situaciones corresponde a un dilema moral?",
    options: [
      { 
        id: 'A', 
        text: "En una escuela, un grupo de estudiantes está constantemente molestando a un niño... Renzo le cuenta la situación al docente y ahora se siente mal por acusar a sus compañeros.",
        feedback: "INCORRECTA - Es una reflexión post-decisión (ya actuó). El dilema se presenta ANTES de tomar la decisión."
      },
      { 
        id: 'B', 
        text: "Durante el recreo, las compañeras de María le han contado... que ponen apodos... María sabe que es incorrecto... Por un lado, piensa que debería contarle a la profesora... pero, por otro, piensa que no debería traicionar la confianza...",
        feedback: "CORRECTA - Presenta un conflicto activo entre dos valores (justicia vs. lealtad), hay dos opciones de acción y la decisión no es fácil."
      },
      { 
        id: 'C', 
        text: "Un equipo de estudiantes está diseñando un cómic... Liz... da una idea... Sol se burla... Liz se molesta porque cree que el comportamiento de Sol es incorrecto, pero no sabe cómo decírselo.",
        feedback: "INCORRECTA - Es un problema de asertividad o habilidades comunicativas, no un conflicto de valores morales."
      }
    ],
    correctAnswer: 'B',
    explanation: "Un dilema moral es una situación donde el individuo debe elegir entre dos opciones, y cada una implica transgredir un valor moral importante, requiriendo una deliberación ética."
  },
  {
    id: 37,
    category: "Desarrollo Personal",
    text: "Durante una reunión colegiada, un docente de segundo grado menciona que Diego, uno de los estudiantes, suele realizar comentarios como \"no soy bueno para hacerlo\" cuando se enfrenta a actividades que le resultan retadoras... ¿Cuál de las siguientes propuestas de los docentes es más adecuada para ayudar a Diego?",
    options: [
      { 
        id: 'A', 
        text: "\"Yo creo que podrías elaborar un panel en el que se coloque el desempeño académico alcanzado por Diego y los otros estudiantes...\"",
        feedback: "INCORRECTA - La comparación social negativa disminuye la autoeficacia, especialmente en quien ya se siente menos capaz."
      },
      { 
        id: 'B', 
        text: "\"Me parece que podrías elaborar una lista de metas en la que Diego proponga, tras dialogar contigo, una meta que considere factible de realizar. Así, al finalizar el mes, puedes conversar con él sobre si alcanzó su logro...\"",
        feedback: "CORRECTA - Se basa en \"experiencias de dominio\" (éxito personal). Al proponer metas alcanzables y lograrlas, Diego construye evidencia de su propia capacidad."
      },
      { 
        id: 'C', 
        text: "\"Pienso que podrías hacer un diario de logros en el que, cada día, registres un logro que Diego haya alcanzado en alguna dimensión de su vida y que consideres que ya esté fortalecida...\"",
        feedback: "INCORRECTA - Enfocarse solo en fortalezas existentes no ayuda necesariamente a enfrentar los nuevos retos donde se siente incapaz."
      }
    ],
    correctAnswer: 'B',
    explanation: "La autoeficacia (la creencia en la propia capacidad) se desarrolla principalmente a través de experiencias de éxito repetidas en tareas desafiantes pero alcanzables."
  },
  {
    id: 38,
    category: "Convivencia",
    text: "Los estudiantes de sexto grado están desarrollando un proyecto cuya finalidad es promover que la comunidad educativa identifique y actúe ante distintas situaciones de discriminación... [Situación: Corina es rechazada por su forma de hablar]... El docente busca que los estudiantes reflexionen sobre la discriminación lingüística... ¿Cuál de los siguientes conjuntos de preguntas es más adecuado para dicho propósito?",
    options: [
      { 
        id: 'A', 
        text: "¿Qué derechos de Corina garantizarían que no se la trate de forma diferente? ¿Cuáles son las entidades encargadas...?",
        feedback: "INCORRECTA - Tiene un enfoque legal/institucional. No promueve la reflexión sobre las actitudes y prejuicios personales."
      },
      { 
        id: 'B', 
        text: "¿Qué dijeron las estudiantes para justificar el no considerar a Corina...? ¿En qué creencias se basan para justificar sus acciones? ¿Cómo se ven afectados los derechos...?",
        feedback: "CORRECTA - Promueve una reflexión profunda al analizar el acto, cuestionar las creencias/prejuicios subyacentes (la raíz) y comprender el impacto humano y social."
      },
      { 
        id: 'C', 
        text: "¿Qué frase evidencia que las estudiantes no están respetando el derecho...? ¿De qué otra manera... podrían haberse dirigido...? ¿Qué creen que Corina debió haber contestado...?",
        feedback: "INCORRECTA - Se centra en lo conductual y pone responsabilidad en la víctima (\"qué debió contestar\"), sin analizar las causas profundas."
      }
    ],
    correctAnswer: 'B',
    explanation: "Para combatir la discriminación, es esencial deconstruir los estereotipos y prejuicios que la originan, analizando las creencias que sustentan las conductas discriminatorias."
  },
  {
    id: 39,
    category: "Personal Social",
    text: "El docente ha planificado la siguiente actividad para sus estudiantes de tercer ciclo: cada estudiante traerá a la clase fotos de su familia en épocas, sin indicación de la fecha... En una cartulina, cada estudiante ordenará cronológicamente las fotos... y explicará oralmente los criterios que utilizó... Si el docente tiene como propósito que los estudiantes se ejerciten en el uso de categorías temporales, ¿por qué es pertinente esta actividad?",
    options: [
      { 
        id: 'A', 
        text: "Porque la actividad promueve que los estudiantes utilicen sus experiencias familiares como insumo para ejercitarse en la elaboración de una secuencia, verbalizando los criterios usados para elaborarla.",
        feedback: "CORRECTA - La actividad exige ordenar (secuenciar) y justificar usando nociones de tiempo (antes, después, antiguo, reciente), anclando el aprendizaje en vivencias significativas."
      },
      { 
        id: 'B', 
        text: "Porque la actividad permite que los estudiantes valoren la influencia que ciertos hechos de la historia de sus familias tuvieron en sus propias vidas, identificando relaciones multicausales.",
        feedback: "INCORRECTA - Se refiere a la competencia de explicación histórica (causas/consecuencias), no al uso de categorías temporales."
      },
      { 
        id: 'C', 
        text: "Porque la actividad promueve que los estudiantes utilicen fotos de su entorno cercano como insumos para interpretar imágenes.",
        feedback: "INCORRECTA - Se refiere al uso de fuentes (interpretación), que es una habilidad distinta a la noción de tiempo."
      }
    ],
    correctAnswer: 'A',
    explanation: "El tiempo histórico se construye inicialmente desde el tiempo personal vivido. Secuenciar eventos propios y familiares es la base para comprender la cronología histórica."
  },
  {
    id: 40,
    category: "Personal Social",
    text: "Durante una sesión de aprendizaje, la docente de segundo grado se percata de que algunos estudiantes empiezan a tajar los lápices de colores hasta obtener mucha viruta para jugar... Si la docente busca que los estudiantes reflexionen sobre el cuidado de un recurso como los lápices, ¿cuál de los siguientes conjuntos de preguntas es más pertinente para ello?",
    options: [
      { 
        id: 'A', 
        text: "\"¿Para qué usamos los lápices de colores en la escuela? ¿Qué sucede si tajamos mucho los lápices para jugar con la viruta? Entonces, ¿qué sucedería si nos quedáramos sin lápices de colores?\"",
        feedback: "CORRECTA - Promueve la reflexión sobre la función del recurso y las consecuencias naturales de su mal uso, fomentando una responsabilidad intrínseca."
      },
      { 
        id: 'B', 
        text: "\"¿Creen que los lápices de colores cuestan dinero? Si cuestan dinero, ¿por qué los tajamos a cada rato...?\"",
        feedback: "INCORRECTA - Centra la reflexión en el valor monetario, que es externo al niño y menos significativo pedagógicamente."
      },
      { 
        id: 'C', 
        text: "\"¿Por qué está mal tajar los lápices...? Si está mal, ¿por qué lo siguen haciendo? Entonces, ¿no creen que deberíamos cuidar...?\"",
        feedback: "INCORRECTA - Tiene un enfoque moralizante y autoritario que busca la obediencia, no la reflexión ni la comprensión."
      }
    ],
    correctAnswer: 'A',
    explanation: "La educación en valores y ciudadanía se basa en comprender el sentido de las normas y el impacto de nuestras acciones en el bien común, no en la imposición o el valor económico."
  },
  {
    id: 41,
    category: "Personal Social",
    text: "En el marco de un proyecto llamado \"Viajando por las ciudades del Perú\"... una de las estudiantes realiza el siguiente comentario: \"Profesor, yo tengo un tío que vive en Mollendo... Yo pensaba que la ciudad de Mollendo estaba al norte... y que estaba cerquita a la ciudad de Piura... Pero mi tío me contó que, cuando él viaja en bus desde Piura a Mollendo, el viaje dura ¡más de un día! Luego, mi tío me mostró un mapa del Perú y ahí me di cuenta de que estaba equivocada porque observé que Mollendo está al sur y Piura al norte, y que entre ellas había varias ciudades más\".\n\n¿Cuáles de las siguientes alternativas se evidencia en este comentario?",
    options: [
      { 
        id: 'A', 
        text: "Describe un recorrido usando los puntos cardinales para situarse en un espacio geográfico.",
        feedback: "INCORRECTA - Menciona puntos cardinales, pero no describe un recorrido. Su foco es la corrección de su percepción de ubicación."
      },
      { 
        id: 'B', 
        text: "Identifica puntos de referencia para desplazarse dentro de un espacio geográfico.",
        feedback: "INCORRECTA - No utiliza hitos o referencias para orientar un desplazamiento."
      },
      { 
        id: 'C', 
        text: "Reconoce la distancia entre puntos dentro de un espacio geográfico.",
        feedback: "CORRECTA - La estudiante reconstruye su noción de distancia (cercanía/lejanía) utilizando el tiempo de viaje y la ubicación en el mapa como evidencia."
      }
    ],
    correctAnswer: 'C',
    explanation: "La noción de distancia geográfica en primaria se construye vinculando la representación cartográfica (mapa) con la experiencia vivida del espacio (tiempo de viaje)."
  },
  {
    id: 42,
    category: "Personal Social",
    text: "Durante la revisión de las fuentes, la integrante de un equipo lee el título de una noticia: \"Distribuyen guano en Cajamarca\", y comenta al docente lo siguiente: \"¿Van a distribuir guano? Es decir, ¿aún lo extraen? Yo entendí que se había acabado todo en el siglo XIX, durante la era del guano\".\n\n¿Cuál de los siguientes procesos de aprendizaje se evidencia, principalmente, en el comentario de la estudiante?",
    options: [
      { 
        id: 'A', 
        text: "Conflicto cognitivo.",
        feedback: "CORRECTA - Se evidencia la contradicción entre lo que la estudiante creía saber (saber previo: \"se acabó en el s. XIX\") y la nueva información (\"aún lo extraen\"), generando duda y desequilibrio."
      },
      { 
        id: 'B', 
        text: "Transferencia del aprendizaje.",
        feedback: "INCORRECTA - No está aplicando un saber a un contexto nuevo, está cuestionando su saber."
      },
      { 
        id: 'C', 
        text: "Metacognición sobre las estrategias de aprendizaje.",
        feedback: "INCORRECTA - No está reflexionando sobre cómo aprende, sino sobre el contenido."
      }
    ],
    correctAnswer: 'A',
    explanation: "El conflicto cognitivo es el desequilibrio que se produce cuando la nueva información contradice los esquemas mentales previos, siendo el motor para la construcción de nuevo conocimiento."
  },
  {
    id: 43,
    category: "Personal Social",
    text: "Al finalizar la lectura del texto [sobre el guano], los estudiantes intercambian sus ideas. De acuerdo con el Currículo Nacional, ¿cuál de las siguientes intervenciones ha considerado tres dimensiones del desarrollo sostenible?",
    options: [
      { 
        id: 'A', 
        text: "Lua dice: \"Está bien impulsar la extracción del guano porque se puede comercializar un abono... (económico). Este abono ayuda a cuidar los suelos... (ambiental). Además... se reduce el riesgo de consumir frutas... con residuos dañinos... (social/salud)\".",
        feedback: "CORRECTA - Integra explícitamente las tres dimensiones del desarrollo sostenible: Económica (ingresos/comercio), Ambiental (cuidado de suelos) y Social (salud pública)."
      },
      { 
        id: 'B', 
        text: "Adriana dice: \"Me llamó la atención que se subsidie el guano. Si el guano mantiene un precio barato... (económico)...\"",
        feedback: "INCORRECTA - Se centra casi exclusivamente en la dimensión económica (precios, ingresos)."
      },
      { 
        id: 'C', 
        text: "Ulises dice: \"Pienso que es importante que se siga extrayendo guano, pero cuidando las islas y las aves marinas... (ambiental)...\"",
        feedback: "INCORRECTA - Se centra predominantemente en la dimensión ambiental (conservación)."
      }
    ],
    correctAnswer: 'A',
    explanation: "El enfoque de desarrollo sostenible requiere una visión sistémica que integre el crecimiento económico, el cuidado del medio ambiente y el bienestar social de las personas."
  },
  {
    id: 44,
    category: "Personal Social",
    text: "Durante una reunión colegiada, algunos docentes comparten diversas acciones para favorecer la reflexión ética de los estudiantes. ¿Cuál de los docentes propone una actividad adecuada para ello?",
    options: [
      { 
        id: 'A', 
        text: "Pedro dice: \"Considero que... podemos planificar una actividad sobre la parábola del buen samaritano... pedir a los estudiantes que... utilicen como referente al protagonista...\".",
        feedback: "INCORRECTA - Propone un modelo moral para imitar, no una situación para reflexionar críticamente."
      },
      { 
        id: 'B', 
        text: "Pablo dice: \"...podemos preguntar... qué harían si su mejor amigo les pide que copien la tarea, explicando que el día anterior no la hizo por ayudar a sus papás... A partir de sus respuestas, podemos pedirles que señalen razones...\".",
        feedback: "CORRECTA - Plantea un dilema moral realista y cercano, y exige la argumentación ética (\"señalen razones\"), promoviendo el juicio moral autónomo."
      },
      { 
        id: 'C', 
        text: "María dice: \"...podemos presentar... un dilema moral en el que una persona encontró una billetera... se puede pedir a los estudiantes que indiquen algunas acciones para que la billetera retorne a su dueño\".",
        feedback: "INCORRECTA - Aunque plantea una situación, dirige hacia una única solución correcta (\"que retorne\"), limitando la reflexión sobre el conflicto de valores."
      }
    ],
    correctAnswer: 'B',
    explanation: "La reflexión ética se desarrolla enfrentando situaciones de conflicto de valores (dilemas) donde no hay una respuesta única, exigiendo al estudiante argumentar y asumir una postura razonada."
  },
  {
    id: 45,
    category: "Personal Social",
    text: "Los estudiantes de sexto grado están desarrollando una unidad didáctica en la que van a elaborar interpretaciones históricas... En este contexto, los estudiantes están observando un conjunto de imágenes de acuarelas de Pancho Fierro... Durante el análisis de estas imágenes, se suscita el siguiente diálogo:\n\nAurelio: \"Miren esta imagen... dice ‘vendedor de velas’. ¿Por qué vendería solo velas?...\"\nHugo: \"Es que en esa época no había electricidad...\"\nAurelio: \"Ah... tienes razón. Como ahora existe la electricidad, ya no hay necesidad de comprar tantas velas... Y mira... también existía el aguador...\"\nHugo: \"Y se sigue vendiendo agua, aunque se compra de un camión cisterna, no de un aguador\".\n\n¿Qué noción histórica se evidencia, principalmente, en el diálogo de los estudiantes?",
    options: [
      { 
        id: 'A', 
        text: "Cambios y permanencias.",
        feedback: "CORRECTA - Los estudiantes identifican qué ha cambiado (velas por electricidad, aguador por camión) y qué permanece (necesidad de luz, venta de agua), comprendiendo la historia como proceso."
      },
      { 
        id: 'B', 
        text: "Secuencialidad.",
        feedback: "INCORRECTA - No están ordenando hechos en una línea de tiempo, sino comparando características de dos épocas."
      },
      { 
        id: 'C', 
        text: "Simultaneidad.",
        feedback: "INCORRECTA - No están analizando eventos que ocurren al mismo tiempo en diferentes lugares."
      }
    ],
    correctAnswer: 'A',
    explanation: "El pensamiento histórico implica comprender que las sociedades se transforman, pero que ciertos elementos continúan existiendo, aunque modificados. Esta dialéctica cambio-permanencia es central en la interpretación histórica."
  },
  {
    id: 46,
    category: "Matemática",
    text: "¿Cuál de las siguientes acciones pedagógicas es pertinente para que los estudiantes se inicien en el proceso de construcción de la noción de doble?",
    options: [
      { 
        id: 'A', 
        text: "Preguntar: \"¿Qué entienden por doble?... Luego, entregar un grupo de 5 semillas... pedirles que las coloquen frente a un espejo. Después, preguntar: ¿Cuánto es el doble de 5?\".",
        feedback: "CORRECTA - Utiliza un recurso concreto y visual (espejo) que permite al estudiante construir el significado de \"doble\" como duplicación de una cantidad, partiendo de lo manipulativo."
      },
      { 
        id: 'B', 
        text: "Plantear el siguiente problema: \"Ana tiene 5 años y Pedro tiene el doble... ¿Cuántos años tiene Pedro?\"...",
        feedback: "INCORRECTA - Parte de un problema verbal abstracto que asume que el niño ya entiende el concepto de doble, en lugar de construirlo."
      },
      { 
        id: 'C', 
        text: "Preguntar: \"En la manga de una camisa hay 3 botones. ¿Cuántas botones habrá en total en las dos mangas...?\"...",
        feedback: "INCORRECTA - Aunque trabaja con cantidades, se enfoca más en la suma repetida o agrupación que en la noción explícita de duplicación como concepto base."
      }
    ],
    correctAnswer: 'A',
    explanation: "Para construir nociones matemáticas en los primeros grados, es fundamental seguir la secuencia CPA (Concreto-Pictórico-Abstracto). El uso del espejo es una estrategia concreta potente para visualizar la duplicación."
  },
  {
    id: 47,
    category: "Matemática",
    text: "Los estudiantes de primer grado... se encuentran contando... una estudiante comenta a la docente: \"ya sé contar hasta treinta. Mira (menciona un número mientras señala cada semilla): uno, dos, tres... treinta semillas. ¿Ves? ¡Ya sé contar!\".\n\nAnte ello, la docente se propone recoger mayor evidencia acerca de la habilidad de contar de la estudiante. ¿Cuál de las siguientes actividades se ajusta al propósito de la docente?",
    options: [
      { 
        id: 'A', 
        text: "Proponerle que identifique el número treinta en el calendario.",
        feedback: "INCORRECTA - Evalúa reconocimiento de numerales (símbolo), no la habilidad de conteo de colecciones."
      },
      { 
        id: 'B', 
        text: "Pedirle que escriba los números del uno al treinta en tarjetas.",
        feedback: "INCORRECTA - Evalúa la escritura de números, no el proceso de contar objetos."
      },
      { 
        id: 'C', 
        text: "Solicitarle que entregue treinta botones a un compañero.",
        feedback: "CORRECTA - Esta acción exige aplicar el conteo en una situación real: requiere correspondencia uno a uno, orden estable y, crucialmente, cardinalidad (detenerse al llegar al 30)."
      }
    ],
    correctAnswer: 'C',
    explanation: "Saber contar implica no solo recitar la serie numérica, sino coordinarla con objetos (correspondencia) y comprender que el último número dicho representa la cantidad total (cardinalidad)."
  },
  {
    id: 48,
    category: "Matemática",
    text: "Un docente busca promover la formulación de problemas matemáticos... A continuación, se presenta el problema formulado por uno de los equipos:\n\"Hugo fue al mercado a comprar 1 kilogramo de pollo que le costó 10 soles y pagó con un billete de 50 soles. Al volver a su cuenta da se da cuenta que le faltaba comprar un 1 kilogramo más. Entonces, fue a la tienda y el kilogramo le costó 12 soles. Si luego de realizar ambas compras, todavía le queda dinero, ¿cuánto dinero le queda a Hugo?\"\n\nPREGUNTA 48\nA partir del propósito del docente, ¿cuál es el principal logro de aprendizaje que se evidencia en el planteamiento de este problema?",
    options: [
      { 
        id: 'A', 
        text: "Propone hallar un valor desconocido a partir de los datos del problema.",
        feedback: "CORRECTA - El estudiante estructura una situación con datos coherentes y una pregunta que requiere operar con ellos para encontrar una incógnita, que es la esencia de formular un problema."
      },
      { 
        id: 'B', 
        text: "Identifica el precio de un producto en dos contextos diferentes dentro del problema.",
        feedback: "INCORRECTA - Es un detalle del contexto, no la habilidad matemática principal de formulación."
      },
      { 
        id: 'C', 
        text: "Emplea adecuadamente términos vinculados con las unidades de masa en el problema.",
        feedback: "INCORRECTA - El uso de unidades es correcto pero secundario; no constituye el logro central de la competencia de resolución de problemas."
      }
    ],
    correctAnswer: 'A',
    explanation: "La capacidad de formular problemas implica crear una situación retadora donde se relacionan datos conocidos para averiguar algo desconocido, demostrando comprensión de la estructura de un problema matemático."
  },
  {
    id: 49,
    category: "Matemática",
    text: "Otro equipo presentó el siguiente problema:\n\"Podemos decir que una niña fue al mercado. Primero, compró naranjas por un valor de 10 soles. Luego, decidió comprar manzanas. Si para hacer sus compras llevó 20 soles, ¿cuánto le faltaría para comprar 2 kilogramos de menestra?\"\n\nEl docente identifica que, para resolver el problema, falta incorporar algunos datos. Por ello, busca brindar retroalimentación al equipo sobre la formulación de dicho problema. ¿Qué acción pedagógica es más adecuada para ello?",
    options: [
      { 
        id: 'A', 
        text: "Pedirles que traten de resolver el problema tal como lo han propuesto. Luego, solicitarles que verifiquen si han colocado toda la información necesaria para responder al problema.",
        feedback: "CORRECTA - Promueve la metacognición y el autodescubrimiento del error. Al intentar resolverlo, los estudiantes se darán cuenta por sí mismos de que faltan datos."
      },
      { 
        id: 'B', 
        text: "Indicarles que se requieren más datos sobre las naranjas, verduras y menestras para responder la pregunta. Luego, solicitarles que ajusten el problema por sí mismos.",
        feedback: "INCORRECTA - Es directiva. El docente señala el error en lugar de permitir que los estudiantes lo descubran."
      },
      { 
        id: 'C', 
        text: "Solicitarles que indiquen cuánto cuesta el kilogramo de menestra. Luego, pedirles que comprueben si con ese dato se puede responder la pregunta del problema.",
        feedback: "INCORRECTA - Induce la respuesta específica que falta, reduciendo la demanda cognitiva de la actividad."
      }
    ],
    correctAnswer: 'A',
    explanation: "La retroalimentación efectiva en matemáticas debe guiar al estudiante a revisar su propio proceso y detectar inconsistencias, fomentando la autonomía y la validación lógica."
  },
  {
    id: 50,
    category: "Matemática",
    text: "Durante una sesión de aprendizaje... Uno de los equipos está resolviendo el siguiente problema:\nJosé tenía en una bolsa el doble de caramelos de menta que de miel. Luego, compró 7 caramelos de miel y los agregó a la bolsa. Después, sacó 5 caramelos de menta y se los dio a su hermanita. Ahora tiene la misma cantidad de caramelos de menta y de miel. ¿Cuántos caramelos tiene de cada sabor?\n\nLuego de leer el problema, una estudiante comparte su propuesta...: \"Creo que ya sé qué podemos hacer. Miren... en la bolsa había 'x' caramelos de miel y, como tenía el doble de caramelos de menta que de miel, entonces '2x' significa la cantidad de los caramelos de menta. Luego, al agregar 7 caramelos de miel y al sacar 5 de menta, ahora la cantidad de ambos sabores es la misma. Entonces, quedaría así: x + 7 = 2x – 5. Y miren, x + 7 sería la cantidad de los caramelos de miel y 2x – 5 sería la cantidad de los de menta\".\n\n¿Cuál de los siguientes aprendizajes se evidencia en el comentario de la estudiante?",
    options: [
      { 
        id: 'A', 
        text: "Argumenta la forma de organización de los datos de una ecuación para encontrar el valor de la incógnita.",
        feedback: "INCORRECTA - La estudiante no está argumentando sobre la organización de datos, está construyendo el modelo."
      },
      { 
        id: 'B', 
        text: "Interpreta los datos y el valor desconocido de una situación para representarlos en una ecuación.",
        feedback: "CORRECTA - La estudiante realiza el proceso de traducción del lenguaje verbal al lenguaje algebraico, identificando variables y relaciones para formular la ecuación."
      },
      { 
        id: 'C', 
        text: "Explica lo que ocurre al agregar o quitar una misma cantidad a ambos lados de una ecuación.",
        feedback: "INCORRECTA - Esto se referiría a la resolución de la ecuación (operar), no al planteamiento (modelar), que es lo que hace la estudiante."
      }
    ],
    correctAnswer: 'B',
    explanation: "La competencia de regularidad, equivalencia y cambio implica la capacidad de traducir situaciones de la vida real a modelos matemáticos (ecuaciones), identificando variables y relaciones."
  },
  {
    id: 51,
    category: "Matemática",
    text: "Durante una sesión de aprendizaje, los estudiantes de primer grado resuelven el siguiente problema: Dalia puso 8 tapitas en una caja vacía. Luego, Carlos agregó 5 tapitas. ¿Cuántas tapitas hay en la caja en total?\n\nEn la plenaria, una estudiante comenta: \"Yo lo hice así. Miren, me guardé ocho en mi mente y, ahora, (levanta un dedo a la vez y menciona el nombre de cada número...), con los dedos cuento lo que sigue: 'nueve, diez, once, doce, trece'. Entonces, ocho más cinco es trece...\".\n\n¿Cuál de las siguientes etapas de la secuencia verbal del conteo es la que más se evidencia en el comentario de la estudiante?",
    options: [
      { 
        id: 'A', 
        text: "Cadena bidireccional.",
        feedback: "INCORRECTA - Implica contar hacia adelante y hacia atrás con fluidez. Aquí solo cuenta hacia adelante."
      },
      { 
        id: 'B', 
        text: "Cadena numerable.",
        feedback: "CORRECTA - Es la capacidad de comenzar a contar desde cualquier número de la serie (en este caso, desde el 8) para seguir contando. Es la base del sobreconteo."
      },
      { 
        id: 'C', 
        text: "Cadena irrompible.",
        feedback: "INCORRECTA - Es cuando el niño necesita empezar siempre desde el 1 para contar. La estudiante no hizo esto."
      }
    ],
    correctAnswer: 'B',
    explanation: "La etapa de cadena numerable permite al estudiante realizar operaciones de suma mediante la estrategia de 'contar hacia adelante' (sobreconteo) sin necesidad de volver a contar el primer conjunto."
  },
  {
    id: 52,
    category: "Matemática",
    text: "Durante una de las actividades... un integrante le muestra al docente un rectángulo... y dice: \"El rectángulo es el único cuadrilátero que tiene dos lados cortos iguales y dos lados largos iguales\". Después de escucharlo, el docente le entrega la figura de un romboide... y le pide al estudiante que mida los lados... A partir de ello, el docente le pregunta: \"¿Cuánto miden los lados del romboide? ¿Tiene lados que son iguales? Entonces, ¿el rectángulo será el único cuadrilátero que tiene dos lados cortos iguales y dos lados largos iguales?\".\n\n¿Qué proceso busca promover, principalmente, el docente al mostrar al estudiante un romboide cuyos lados miden 5 cm y 8 cm?",
    options: [
      { 
        id: 'A', 
        text: "La transferencia del aprendizaje.",
        feedback: "INCORRECTA - No busca aplicar lo aprendido a un contexto nuevo, sino cuestionar lo aprendido."
      },
      { 
        id: 'B', 
        text: "La activación de saberes previos.",
        feedback: "INCORRECTA - No busca recordar, busca confrontar una idea errónea."
      },
      { 
        id: 'C', 
        text: "La generación de conflicto cognitivo.",
        feedback: "CORRECTA - El docente presenta un contraejemplo (el romboide) que contradice la generalización del estudiante, generando un desequilibrio que obliga a reestructurar el concepto."
      }
    ],
    correctAnswer: 'C',
    explanation: "El conflicto cognitivo es una estrategia pedagógica potente donde se presenta evidencia que desafía las concepciones previas (erróneas o incompletas) del estudiante, motivando la modificación de sus esquemas mentales."
  },
  {
    id: 53,
    category: "Matemática",
    text: "En una IE, se viene desarrollando un proyecto de aprendizaje... A partir de las anotaciones, se produce el siguiente diálogo:\nMabel dice: \"Veo que no necesitamos mucho espacio para el vivero. Creo que necesitamos tres quintos de los noventa metros cuadrados del jardín\".\nJorge dice: \"¿Tú crees? A ver, creo que para saber cuánto es los tres quintos de noventa, deberíamos dividir el noventa en cinco cantidades iguales y tomamos tres de ellas. Entonces (mostrando sus anotaciones) eso significa que se divide noventa entre cinco y nuestro vivero mide cincuenta y cuatro metros cuadrados\".\n\n¿Qué significado de la fracción se evidencia en el comentario de Jorge?",
    options: [
      { 
        id: 'A', 
        text: "La fracción como medida.",
        feedback: "INCORRECTA - Implica usar la fracción para medir una magnitud continua."
      },
      { 
        id: 'B', 
        text: "La fracción como cociente.",
        feedback: "INCORRECTA - Implica ver la fracción como el resultado de una división (reparto)."
      },
      { 
        id: 'C', 
        text: "La fracción como operador.",
        feedback: "CORRECTA - La fracción actúa sobre una cantidad (90) para transformarla. Jorge aplica la fracción al entero (3/5 de 90) mediante operaciones de multiplicación y división."
      }
    ],
    correctAnswer: 'C',
    explanation: "El significado de fracción como operador se manifiesta cuando la fracción se utiliza para transformar una cantidad discreta o continua (un 'operador' que modifica un estado inicial)."
  },
  {
    id: 54,
    category: "Matemática",
    text: "Como parte de una de las actividades, un equipo de estudiantes culminó de leer un texto... En este contexto, se suscita el siguiente diálogo:\nLuis dice...: \"Aquí dice que el 'Brachiosaurus'... medía 30 metros de largo; y... el 'Microceratops'... media alrededor de 50 centímetros de largo\".\nLa docente dice: \"De los dos dinosaurios, ¿cuál creen que es el más largo?\".\nLuis dice: \"El Microceratops es más largo, porque 50 es mayor que uno\".\nLa docente dice: \"Entonces, ¿puedes intentar hacer la equivalencia entre centímetros y metros?\".\nLuis dice: \"Es que no sé cómo hacerlo\".\n\nA partir de lo dicho por el estudiante, la docente busca ayudarlo a establecer la equivalencia entre unidades del mismo para resolver el problema. ¿Cuál de las siguientes acciones pedagógicas es la más adecuada para ello?",
    options: [
      { 
        id: 'A', 
        text: "Entregarle una tira de papelote de 100 centímetros de largo, sin indicarle la medida, y un listón métrico. Luego, preguntarle: \"¿Cuántas veces cabe el listón en la tira. Después, preguntarle: \"Si el listón mide 20 centímetros, ¿cuánto mide el largo de papelote? ¿es posible que 60 sea mayor que 100 centímetros?\".",
        feedback: "INCORRECTA - Es confusa y no aborda directamente la relación metro-centímetro."
      },
      { 
        id: 'B', 
        text: "Entregarle una cinta métrica e indicarle que un metro equivale a 100 centímetros. Luego pedirle que marque la cinta métrica hasta dónde hay 50 centímetros y 100 centímetros. Después preguntarle: \"¿Cuál es el mayor? ¿es correcto decir que 50 centímetros es mayor que 1 metro?\".",
        feedback: "CORRECTA - Proporciona el conocimiento necesario (1m=100cm) y permite visualizar y comparar concretamente las magnitudes en un mismo instrumento, corrigiendo el error conceptual."
      },
      { 
        id: 'C', 
        text: "Entregarle una tira de papel y mencionarle que esta mide 1 metro de largo. Luego, pedirle que con una regla determine cuántos centímetros mide 1 tira de papel y la marque el resultado en metro y en centímetros?\". Luego, pedirle que marque el resultado en metro y en centímetros\".",
        feedback: "INCORRECTA - Es procedimental y menos directa para la comparación de magnitudes que la alternativa B."
      }
    ],
    correctAnswer: 'B',
    explanation: "Para comprender la equivalencia y comparación de medidas, es fundamental visualizar las magnitudes físicas reales y tener un marco de referencia común (la cinta métrica)."
  },
  {
    id: 55,
    category: "Matemática",
    text: "En otra actividad, un equipo recopiló información sobre cuál era el dinosaurio favorito de los estudiantes... El equipo decidió compartir la información de la tabla en un pictograma horizontal con escala. Sin embargo, tiene dificultades sobre cómo realizar la representación del número de estudiantes. ¿Cuál de las siguientes acciones pedagógicas es más adecuada para orientar a estos estudiantes?",
    options: [
      { 
        id: 'A', 
        text: "Mostrarles ejemplos de pictogramas horizontales con escala y, junto con ellos, identificar al criterio usado para dar valor a los símbolos. A partir de esto, pedirles que elijan un símbolo y le den un único valor, el cual puede valer uno o más, para representar el número de estudiantes que corresponde a cada dinosaurio. Después, indicarles que ordenen dichos símbolos en su pictograma.",
        feedback: "CORRECTA - Utiliza el modelado y el análisis de ejemplos para que los estudiantes comprendan la lógica de la escala (un símbolo = varios datos) y luego apliquen ese criterio autónomamente."
      },
      { 
        id: 'B', 
        text: "Solicitarles que escriban los nombres de los dinosaurios a la izquierda de la línea vertical del pictograma. A partir de ello, pedirles que, a la derecha de cada nombre, coloquen la cantidad de símbolos que corresponde a cada dinosaurio, considerando que cada símbolo representa a seis estudiantes...",
        feedback: "INCORRECTA - Es directiva. El docente decide la escala (6 estudiantes) en lugar de enseñar a los estudiantes a determinarla."
      },
      { 
        id: 'C', 
        text: "Entregarles un pictograma horizontal que solo tenga los nombres de los dinosaurios de la tabla. A partir de esto, indicarles un símbolo y determinen cuántos estudiantes representará dicho símbolo...",
        feedback: "INCORRECTA - Provee demasiado andamiaje inicial (estructura hecha) y da instrucciones parciales sin asegurar la comprensión previa de la escala."
      }
    ],
    correctAnswer: 'A',
    explanation: "La construcción de gráficos estadísticos requiere comprender sus elementos estructurales. Analizar modelos permite entender la función de la escala antes de aplicarla."
  },
  {
    id: 56,
    category: "Matemática",
    text: "Durante una sesión de aprendizaje centrada en favorecer la comprensión sobre el área de formas bidimensionales... Un estudiante comenta lo siguiente: \"Como el cuadro tiene la forma de un rectángulo y sus lados miden 15 y 20 centímetros, entonces multiplico esos números, con lo cual el área del rectángulo me da 300 centímetros cuadrados. Es decir, tenemos 300 cuadrados que miden un centímetro en cada lado. Por eso, son 300 centímetros cuadrados\".\n\n¿Qué aprendizaje se evidencia en el comentario del estudiante?",
    options: [
      { 
        id: 'A', 
        text: "Emplea la descomposición numérica para calcular el área de un rectángulo.",
        feedback: "INCORRECTA - El estudiante no descompone los números, usa el algoritmo de multiplicación directo."
      },
      { 
        id: 'B', 
        text: "Comprueba el valor del área de un rectángulo mediante el uso de cuadrados.",
        feedback: "INCORRECTA - No dice que haya dibujado o superpuesto cuadrados físicos para comprobar."
      },
      { 
        id: 'C', 
        text: "Interpreta el área de un rectángulo a partir de la cantidad de unidades de superficie.",
        feedback: "CORRECTA - El estudiante demuestra comprensión conceptual profunda al explicar que el resultado numérico (300) representa una cantidad de unidades de medida (cuadrados de 1cm de lado) que cubren la superficie."
      }
    ],
    correctAnswer: 'C',
    explanation: "Comprender el área va más allá de aplicar una fórmula; implica entender que medir una superficie es contar cuántas unidades de área (cuadrados unitarios) caben en ella."
  },
  {
    id: 57,
    category: "Matemática",
    text: "Durante una sesión de aprendizaje, los estudiantes de sexto grado se encuentran resolviendo problemas que implican el uso de ecuaciones. A continuación, se presenta uno de estos problemas: Gladys tiene 5 soles más que Héctor. Al sumar el dinero de ambos, se obtiene 35 soles. ¿Cuánto dinero tiene Héctor?\n\nDurante el acompañamiento del docente, un estudiante le pide ayuda...: \"Entiendo que se desconoce la cantidad de dinero... Pero no sé cómo expresar toda esta información en una ecuación. ¿Podría ayudarme?\".\n\nTomando en cuenta el comentario del estudiante, ¿cuál de las siguientes acciones pedagógicas es la más adecuada para ayudarlo a expresar la información mediante una ecuación?",
    options: [
      { 
        id: 'A', 
        text: "Pedirle que represente el dinero de Héctor con la letra \"x\" y el dinero de Gladys como \"x + 5\". Luego, indicarle que sume... e iguale a 35. A partir de esto, preguntarle: \"¿Cuál es la ecuación que se obtiene?...\".",
        feedback: "INCORRECTA - Es directiva. Le dice exactamente cómo representar las variables, impidiendo que el estudiante construya el modelo por sí mismo."
      },
      { 
        id: 'B', 
        text: "Mostrarle en una hoja la letra \"n\" y pedirle que indique la operación necesaria para representar otra cantidad '5 unidades mayor' que la primera. Luego, preguntarle: \"¿Cuál de las expresiones 'n' o 'n + 5', representa el dinero de Héctor? ¿Y el de Gladys?\"...",
        feedback: "CORRECTA - Provee andamiaje conceptual. Ayuda a construir las expresiones algebraicas paso a paso, promoviendo que el estudiante razone sobre la relación entre las cantidades antes de formular la ecuación completa."
      },
      { 
        id: 'C', 
        text: "Preguntarle: \"¿Qué condiciones se debe tener en cuenta...?\". Luego, entregarle 7 monedas de 5 soles y pedirle que forme con ella 2 grupos... A partir de esto, indicarle que verifique...",
        feedback: "INCORRECTA - Utiliza material concreto para resolver aritméticamente el problema, pero no ayuda a traducir el problema al lenguaje algebraico (ecuación), que es la dificultad expresada."
      }
    ],
    correctAnswer: 'B',
    explanation: "El paso de la aritmética al álgebra requiere apoyo para simbolizar relaciones. Ayudar a construir las expresiones algebraicas parciales es un paso clave antes de plantear la ecuación global."
  },
  {
    id: 58,
    category: "Matemática",
    text: "En el marco de los juegos deportivos escolares... uno de los integrantes de un equipo comparte el procedimiento que realizó para identificar a la jugadora que ha anotado más goles en promedio por partido de fútbol femenino.\n\n\"Ofelia jugó 5 partidos y anotó la siguiente cantidad de goles: (muestra su registro) en el primer partido anotó 2, en el segundo no anotó, en el tercero marcó 3, en el cuarto hizo 1 y en el quinto anotó 2. Para calcular el promedio, primero puse los datos de mayor a menor: 3, 2, 2, 1 y 0. Luego sumé los números: 3 + 2 + 2 + 1; el resultado es 8. El cero no lo sumé porque no tiene valor. Después, dividí el 8 entre 4 y me salió 2. Entonces, su promedio es 2 goles por partido\".\n\n¿En cuál de los siguientes procedimientos realizados por el estudiante se evidencia un error que el docente debe atender en la retroalimentación?",
    options: [
      { 
        id: 'A', 
        text: "El ordenar los datos de mayor a menor.",
        feedback: "INCORRECTA - Ordenar los datos no es un error, aunque no es necesario para el promedio (sí para la mediana). No afecta el resultado."
      },
      { 
        id: 'B', 
        text: "El sumar únicamente los datos diferentes de cero.",
        feedback: "INCORRECTA - Matemáticamente, sumar cero no cambia el total de la suma. El error no está en la suma, sino en lo que implica conceptualmente omitir el dato."
      },
      { 
        id: 'C', 
        text: "El dividir la suma de los datos entre una cantidad distinta al total de datos.",
        feedback: "CORRECTA - Este es el error conceptual grave. Al dividir entre 4 (excluyendo el partido con 0 goles) en lugar de 5, altera el concepto de promedio, que debe considerar el total de eventos, incluso aquellos con valor cero."
      }
    ],
    correctAnswer: 'C',
    explanation: "El promedio (media aritmética) representa el valor equitativo de un conjunto de datos. Excluir los datos con valor cero del divisor distorsiona la representatividad del promedio."
  },
  {
    id: 59,
    category: "Matemática",
    text: "Como parte de una unidad didáctica, una docente de primer grado ha planificado diferentes actividades para favorecer la construcción de la noción de número... Durante la actividad, Jaime... se acerca a la caja y cuenta en voz alta las pelotas que logró meter. Mientras señala con su dedo cada pelota, dice: \"Uno, dos, tres, cuatro, cinco, seis, siete, ocho\". Luego, el docente se acerca a Jaime y le pide que le entregue ocho pelotas. A partir de esto, Jaime señala cada pelota que le entregó, dice: \"Uno, dos, tres, cuatro, cinco\". Toda la última pelota que señaló y se la entrega a la docente.\n\n¿Cuál de los siguientes principios del conteo NO se evidencia en las intervenciones de Jaime?",
    options: [
      { 
        id: 'A', 
        text: "Principio de correspondencia.",
        feedback: "INCORRECTA - Jaime sí señala cada pelota mientras dice un número (uno a uno), evidenciando correspondencia."
      },
      { 
        id: 'B', 
        text: "Principio de orden estable.",
        feedback: "INCORRECTA - Jaime recita la serie numérica en el orden convencional correcto (uno, dos, tres...), evidenciando orden estable."
      },
      { 
        id: 'C', 
        text: "Principio de cardinalidad.",
        feedback: "CORRECTA - Jaime no comprende que el último número dicho (\"ocho\") representa la cantidad total del conjunto. Al pedirle 8, vuelve a contar y entrega solo la que corresponde al número, no el grupo."
      }
    ],
    correctAnswer: 'C',
    explanation: "El principio de cardinalidad implica comprender que el último número mencionado en el conteo representa la cantidad total de objetos del conjunto."
  },
  {
    id: 60,
    category: "Matemática",
    text: "Como parte de una sesión de aprendizaje, la docente de sexto grado propone a los estudiantes usar diversas estrategias para resolver el siguiente problema: Leo tenía 5 soles y recibe 3 soles de propina. Si su hermana tenía cierta cantidad de dinero y recibe 2 soles de propina. Ahora, ambos tienen la misma cantidad de dinero. ¿Cuánta dinero tenía la hermana de Leo inicialmente?\n\nEn este contexto, una estudiante menciona a la docente que una forma de resolver el problema es usando ecuaciones y describe su procedimiento:\n(Muestra su registro y dice) Escribí la ecuación: 5 + 2 = x + 3. Para hallar el valor de 'x', le quité 1 al 5 y se lo pasé al 2. La ecuación quedó como 4 + 3 = x + 3. En esta ecuación, hay dos términos en cada lado. Además, en ambos lados está el 3. Entonces, para que ambos lados sean iguales, el otro número que también debe estar en los dos lados es el 4. Por eso, x vale 4\".\n\n¿Cuál de los siguientes aprendizajes se evidencia en el procedimiento descrito por la estudiante?",
    options: [
      { 
        id: 'A', 
        text: "Emplea la transposición de términos para resolver la ecuación.",
        feedback: "INCORRECTA - No usa reglas de transposición (pasar restando, etc.). Manipula los números dentro de un mismo lado."
      },
      { 
        id: 'B', 
        text: "Emplea la sustitución de diferentes valores en la incógnita para resolver la ecuación.",
        feedback: "INCORRECTA - No prueba valores para x (ensayo y error), deduce el valor por comparación."
      },
      { 
        id: 'C', 
        text: "Emplea la correspondencia entre los términos de una igualdad para resolver la ecuación.",
        feedback: "CORRECTA - La estudiante transforma la expresión para que ambos lados tengan la misma estructura (4+3 = x+3) y deduce por comparación directa (correspondencia) que x debe ser 4."
      }
    ],
    correctAnswer: 'C',
    explanation: "El pensamiento relacional permite ver la ecuación como una estructura de equilibrio. Identificar que si una parte es igual, la otra también debe serlo, es una estrategia algebraica intuitiva potente."
  }
];
