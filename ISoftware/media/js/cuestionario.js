/***************************
* Autor: Equipo 5
* Ingeniería de Software
* 2025-2
****************************/

function valuap(respuest) {
    var reto;
    if (parseInt(respuest) == this.correcta) {
        // var reto;
        alert("Es correcta");
        reto = true;
        return reto;
    } else {
        alert("Es false");
        return reto;
    }
}

function pregunta(pregun, respuesta1, respuesta2, respuesta3, respuesta4, correcta) {
    this.pregun = pregun;
    this.respuestas = [];
    this.respuestas[0] = respuesta1;
    this.respuestas[1] = respuesta2;
    this.respuestas[2] = respuesta3;
    this.respuestas[3] = respuesta4;
    this.correcta = parseInt(correcta);
    this.ocupado = false;
    this.valuap = valuap;
}

var retorno = [];
var preguntas = [];

preguntas[0] = new pregunta("¿Con qué inicia realmente la ingeniería de software?",
    "a) Con la programación inmediata.",
    "b) Con el diseño de interfaces.",
    "c) Con el entendimiento de las necesidades del cliente.",
    "d) Con la selección del lenguaje de programación.",
    2);

preguntas[1] = new pregunta("¿Cuál es el objetivo principal del tutorial mencionado?",
    "a) Manual de usuario",
    "b) Requerimientos funcionales y no funcionales",
    "c) Diagramas de red",
    "d) Contrato con el cliente",
    1);

preguntas[2] = new pregunta("¿Cuál de los siguientes elementos forma parte del documento de especificación de requerimientos?",
    "a) Diseñar la interfaz del programa",
    "b) Comprender lo que el cliente necesita",
    "c) Crear la base de datos",
    "d) Probar el software",
    1);

preguntas[3] = new pregunta("¿Qué son los requerimientos de software?",
    "a) Descripciones de las funciones, características y restricciones que un sistema debe cumplir.",
    "b) Líneas de código que hacen funcionar el sistema.",
    "c) Diagramas de flujo del programa.",
    "d) Manuales de usuario.",
    0);

preguntas[4] = new pregunta("¿Con qué comparó Klaus Pohl los requerimientos de software?",
    "a) Con una receta de cocina.",
    "b) Con los planos de una construcción.",
    "c) Con un manual de usuario.",
    "d) Con un algoritmo.",
    1);

preguntas[5] = new pregunta("¿Cuántos tipos principales de requerimientos existen?",
    "a) Tres.",
    "b) Dos.",
    "c) Cuatro.",
    "d) Cinco.",
    1);

preguntas[6] = new pregunta("¿Qué describen los requerimientos funcionales?",
    "a) El rendimiento del sistema.",
    "b) Los colores y estilos de la interfaz.",
    "c) Las restricciones del hardware.",
    "d) Las acciones o servicios que el sistema debe realizar.",
    3);

preguntas[7] = new pregunta("¿Cuál de los siguientes es un ejemplo de requerimiento funcional?",
    "a) El sistema debe tener disponibilidad del 99.9%.",
    "b) La página debe cargar en menos de dos segundos.",
    "c) El usuario debe poder iniciar sesión con su correo y contraseña.",
    "d) Las contraseñas deben cifrarse con SHA-256.",
    2);

preguntas[8] = new pregunta("¿A qué se refieren los requerimientos no funcionales?",
    "a) A las cualidades o restricciones del sistema.",
    "b) A las funciones principales del sistema.",
    "c) A los errores comunes de programación.",
    "d) A los costos del proyecto.",
    0);

preguntas[9] = new pregunta("¿Qué tipo de requerimiento describe la rapidez con la que el sistema responde a una acción del usuario?",
    "a) Requerimiento funcional",
    "b) Requerimiento de interfaz",
    "c) Requerimiento de desempeño",
    "d) Requerimiento de diseño",
    2);

preguntas[10] = new pregunta("¿Qué herramienta ayuda a modelar visualmente los procesos del sistema y su relación con los usuarios?",
    "a) Lista de verificación",
    "b) Diagrama de casos de uso",
    "c) Diagrama de flujo de datos",
    "d) Matriz de trazabilidad",
    1);

preguntas[11] = new pregunta("¿Cuál es el principal objetivo de validar los requerimientos?",
    "a) Confirmar que los requerimientos reflejan las necesidades reales del usuario",
    "b) Reducir el tiempo de desarrollo",
    "c) Comprobar la compatibilidad del hardware",
    "d) Calcular el costo del sistema",
    0);

preguntas[12] = new pregunta("¿Qué característica debe tener un buen requerimiento?",
    "a) Ser complejo",
    "b) Ser verificable y medible",
    "c) Ser general",
    "d) Ser ambiguo",
    1);

preguntas[13] = new pregunta("¿En qué fase del ciclo de vida del software se documentan y aprueban los requerimientos?",
    "a) Implementación",
    "b) Análisis",
    "c) Pruebas",
    "d) Mantenimiento",
    1);

preguntas[14] = new pregunta("Cuando se detecta un conflicto entre dos requerimientos, ¿qué debe hacerse primero?",
    "a) Ignorar el conflicto y avanzar",
    "b) Aceptar ambos requerimientos",
    "c) Analizar con el cliente cuál tiene mayor prioridad",
    "d) Modificar uno de los requerimientos sin consultar",
    2);

preguntas[15] = new pregunta("¿Cuál de los siguientes es un ejemplo de requerimiento no funcional?",
    "a) El usuario debe de poder modificar su perfil",
    "b) La página principal debe de cargarse en menos de dos segundos.",
    "c) El sistema debe permitir generar reportes",
    "d) El administrador puede eliminar usuarios",
    1);

preguntas[16] = new pregunta("Según Elizabeth Hull, ¿por qué es importante clasificar los requerimientos?",
    "a) Para dividir el trabajo en partes iguales.",
    "b) Para que todos comprendan las expectativas y criterios de calidad del proyecto.",
    "c) Para ahorrar tiempo en la programación.",
    "d) Para facilitar la instalación del software.",
    1);

preguntas[17] = new pregunta("¿Qué señala James Crowder sobre los errores en esta etapa?",
    "a) Que son los más costosos de corregir.",
    "b) Que se pueden ignorar sin consecuencias.",
    "c) Que se corrigen fácilmente al final.",
    "d) Que no afectan al proceso posterior.",
    0);

preguntas[18] = new pregunta("¿Qué ocurre cuando los requerimientos están completos, claros y documentados?",
    "a) Disminuye la comunicación del equipo.",
    "b) Se reduce el tiempo de prueba.",
    "c) El equipo trabaja con una visión común.",
    "d) Aumenta la cantidad de código.",
    2);

preguntas[19] = new pregunta("¿Cuál es uno de los beneficios principales de una correcta gestión de requerimientos?",
    "a) Reducir la cantidad de reportes.",
    "b) Aumentar los costos del sistema.",
    "c) Evitar las pruebas finales.",
    "d) Alinear usuarios, clientes y desarrolladores.",
    3);

preguntas[20] = new pregunta("¿Para qué sirven los requerimientos dentro del proceso de desarrollo?",
    "a) Para elegir el lenguaje de programación.",
    "b) Como guía para el diseño, implementación y pruebas.",
    "c) Para reemplazar la fase de documentación.",
    "d) Para eliminar errores de compilación.",
    1);

preguntas[21] = new pregunta("¿Qué efecto tiene una buena gestión sobre los riesgos?",
    "a) Reduce riesgos innecesarios durante el desarrollo.",
    "b) Los aumenta de forma controlada.",
    "c) Los ignora completamente.",
    "d) Los transfiere al cliente.",
    0);

preguntas[22] = new pregunta("¿Qué incluye el proceso de ingeniería de requerimientos?",
    "a) Planeación, codificación y prueba.",
    "b) Identificación, análisis, documentación, validación y gestión.",
    "c) Diseño, mantenimiento y soporte.",
    "d) Instalación y actualización.",
    1);

preguntas[23] = new pregunta("¿Qué función tienen las técnicas de obtención de requerimientos?",
    "a) Escribir el código base del sistema",
    "b) Identificar, analizar, documentar y validar las necesidades del usuario",
    "c) Sustituir la fase de pruebas",
    "d) Diseñar la interfaz de usuario",
    1);

preguntas[24] = new pregunta("¿Qué afirman Serna y Laplante sobre las técnicas de obtención de requerimientos?",
    "a) Que sólo existe una técnica efectiva.",
    "b) Que cada proyecto necesita una combinación de métodos.",
    "c) Que todas las técnicas son iguales.",
    "d) Que no son necesarias en proyectos pequeños.",
    1);

preguntas[25] = new pregunta("¿Cuál es la principal ventaja de las entrevistas?",
    "a) Requieren poco tiempo.",
    "b) No necesitan la participación del usuario.",
    "c) Permiten profundizar y aclarar dudas.",
    "d) Son completamente automáticas.",
    2);

preguntas[26] = new pregunta("¿Qué desventaja pueden tener las entrevistas?",
    "a) Requieren mucho tiempo si hay varios involucrados.",
    "b) Son poco precisas.",
    "c) No generan resultados útiles.",
    "d) Dificultan la documentación.",
    0);

preguntas[27] = new pregunta("¿Qué ventaja tienen los cuestionarios o encuestas?",
    "a) No requieren análisis posterior.",
    "b) Son útiles sólo en proyectos pequeños.",
    "c) Sustituyen las pruebas finales.",
    "d) Permiten recopilar información de muchos usuarios rápidamente.",
    3);

preguntas[28] = new pregunta("¿Cuál es una limitación de los cuestionarios o encuestas?",
    "a) Las respuestas pueden ser generales o imprecisas.",
    "b) Requieren reuniones prolongadas.",
    "c) No pueden aplicarse en línea.",
    "d) Son muy costosos.",
    0);

preguntas[29] = new pregunta("¿Qué busca la observación directa?",
    "a) Analizar cómo los usuarios realizan sus actividades diarias.",
    "b) Evaluar el rendimiento del sistema.",
    "c) Medir el tiempo de desarrollo.",
    "d) Verificar el código fuente.",
    0);

preguntas[30] = new pregunta("¿Qué posible inconveniente tiene esta técnica?",
    "a) No proporciona información útil.",
    "b) Puede alterar el comportamiento natural del usuario.",
    "c) No requiere observadores.",
    "d) Siempre toma demasiado tiempo.",
    1);

preguntas[31] = new pregunta("¿Qué permite el análisis de documentación?",
    "a) Eliminar información obsoleta.",
    "b) Crear nuevos manuales automáticamente.",
    "c) Conocer procesos actuales revisando manuales o reportes antiguos.",
    "d) Reducir el número de entrevistas.",
    2);

preguntas[32] = new pregunta("¿Cuál es una posible desventaja del análisis documental?",
    "a) La información puede estar desactualizada.",
    "b) Requiere la presencia de los usuarios.",
    "c) Es demasiado costoso.",
    "d) No aporta información relevante.",
    0);

preguntas[33] = new pregunta("¿Qué ventaja tienen los talleres de requerimientos?",
    "a) No requieren planificación.",
    "b) Eliminar la validación de requerimientos.",
    "c) Reducir el tiempo de codificación.",
    "d) Fomentan la colaboración entre usuarios y desarrolladores.",
    3);

preguntas[34] = new pregunta("¿Qué problema puede presentarse en los talleres si no hay buena organización?",
    "a) Se pierde la comunicación.",
    "b) Se omiten requerimientos importantes.",
    "c) Pueden generarse confusiones.",
    "d) Se interrumpe el desarrollo.",
    2);

preguntas[35] = new pregunta("¿Qué consiste el prototipado?",
    "a) Diseñar diagramas de flujo.",
    "b) Construir versiones preliminares del sistema para visualización.",
    "c) Elaborar reportes finales.",
    "d) Crear manuales de usuario.",
    1);

preguntas[36] = new pregunta("¿Qué ventaja tiene el uso de prototipos?",
    "a) Permiten validar requerimientos y detectar errores antes del desarrollo real.",
    "b) Sustituyen la fase de pruebas.",
    "c) Reducen la participación del usuario.",
    "d) Disminuyen la necesidad de documentación.",
    0);

preguntas[37] = new pregunta("¿Qué precaución debe tomarse al usar prototipos?",
    "a) Evitar mostrarlo a los usuarios.",
    "b) Eliminarlo al finalizar el proyecto.",
    "c) No documentarlo.",
    "d) Aclarar que es solo un modelo y no el sistema final.",
    3);

preguntas[38] = new pregunta("¿Qué busca la técnica de tormenta de ideas?",
    "a) Reemplazar la documentación técnica.",
    "b) Crear reportes de errores.",
    "c) Promover la creatividad del equipo y generar nuevas funciones.",
    "d) Automatizar decisiones.",
    2);

preguntas[39] = new pregunta("¿Qué debe hacerse después de una sesión de ideas?",
    "a) Filtrar y conservar solo las ideas viables.",
    "b) Implementarlas todas.",
    "c) Ignorarlas si no son técnicas.",
    "d) Enviarlas al cliente sin revisión.",
    0);

preguntas[40] = new pregunta("¿Qué describen las historias de usuario?",
    "a) Tareas técnicas internas del sistema.",
    "b) Manuales de instalación.",
    "c) Funcionalidades desde el punto de vista del usuario final.",
    "d) Diagramas UML.",
    2);

preguntas[41] = new pregunta("¿En qué tipo de metodologías se usan las historias de usuario?",
    "a) En metodologías ágiles.",
    "b) En metodologías en cascada.",
    "c) En proyectos industriales.",
    "d) En pruebas automáticas.",
    0);

preguntas[42] = new pregunta("¿Qué ventaja tienen las historias de usuario?",
    "a) Evitan la participación del cliente.",
    "b) Son fáciles de entender",
    "c) Sustituyen el código fuente.",
    "d) No requieren validación.",
    1);

preguntas[43] = new pregunta("¿Qué limitación pueden tener las historias de usuario?",
    "a) Requieren mucho tiempo.",
    "b) Son difíciles de escribir.",
    "c) No pueden modificarse.",
    "d) Pueden omitir detalles técnicos.",
    3);

preguntas[44] = new pregunta("¿Cuáles son las fases de la ingeniería de requerimientos?",
    "a) Identificación, análisis, documentación, validación y gestión.",
    "b) Diseño, prueba, mantenimiento, soporte y control.",
    "c) Planeación, codificación, prueba y entrega.",
    "d) Modelado, instalación y evaluación.",
    0);

preguntas[45] = new pregunta("¿Qué muestra el diagrama de flujo del tutorial?",
    "a) Los errores comunes del proceso.",
    "b) Los costos de desarrollo.",
    "c) La relación de cada técnica con las etapas de la ingeniería de requerimientos.",
    "d) Los resultados de las pruebas.",
    2);

preguntas[46] = new pregunta("¿Cuál es el fundamento sobre el cual se construye cualquier sistema?",
    "a) El código fuente.",
    "b) Los requerimientos de software.",
    "c) Las pruebas unitarias.",
    "d) El manual de usuario.",
    1);

preguntas[47] = new pregunta("¿Qué puede causar un mal levantamiento de requerimientos?",
    "a) Fallas graves, sobrecostos y pérdida de tiempo.",
    "b) Una ejecución más rápida.",
    "c) Menor comunicación con el cliente.",
    "d) Un producto más flexible.",
    0);

preguntas[48] = new pregunta("¿Qué garantiza una buena gestión de requerimientos?",
    "a) Que el proyecto termine antes de tiempo.",
    "b) Que el producto final sea funcional, confiable y de alta calidad.",
    "c) Que el diseño sea más complejo.",
    "d) Que el código sea más extenso.",
    1);