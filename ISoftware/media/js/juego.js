// Definición de los conceptos y sus descripciones
const concepts = [
    {
        word: "REQUISITOS",
        hint: "Descripciones de lo que un sistema debe hacer o sus características",
        description: "Los requisitos son declaraciones que identifican atributos, capacidades o características del sistema que tienen valor para las partesnteresadas. Son la base para el desarrollo y evaluación del software."
    },
    {
        word: "FUNCIONALES",
        hint: "Tipo de requisitos que describen lo que el sistema debe hacer",
        description: "Los requisitos funcionales (RF) describen las funciones o servicios que el sistema debe proveer. Ejemplo: 'El usuario debe poder iniciar sesiónon su correo y contraseña.'"
    },
    {
        word: "NOFUNCIONALES",
        hint: "Tipo de requisitos que describen cómo debe funcionar el sistema",
        description: "Los requisitos no funcionales (RNF) describen las cualidades, atributos o restricciones del sistema. No se refieren a qué hace, sino a cómo lo hac Ejemplo: 'La página debe cargar en menos de 2 segundos.'"
    },
    {
        word: "ELICITACION",
        hint: "Proceso de descubrir y obtener requisitos de las partes interesadas",
        description: "La elicitación de requisitos es la fase inicial donde se identifican las necesidades de los stakeholders mediante técnicas como entrevistas, obseación, talleres de trabajo, etc."
    },
    {
        word: "VALIDACION",
        hint: "Proceso de verificar que los requisitos cumplen con las necesidades del usuario",
        description: "La validación responde a la pregunta '¿Estamos construyendo el producto correcto?' Se asegura de que los requisitos reflejen fielmente lo que el usuio necesita."
    },
    {
        word: "VERIFICACION",
        hint: "Proceso de comprobar que los requisitos están bien especificados",
        description: "La verificación responde a la pregunta '¿Estamos construyendo el producto bien?' Se asegura de que los requisitos sean completos, consistentes y vericables."
    },
    {
        word: "PROTOTIPADO",
        hint: "Técnica que utiliza modelos preliminares para validar requisitos",
        description: "El prototipado consiste en crear versiones preliminares del sistema para que los usuarios visualicen cómo funcionará, permitiendo validarequisitos antes del desarrollo completo."
    },
    {
        word: "TRAZABILIDAD",
        hint: "Capacidad de seguir un requisito desde su origen hasta su implementación",
        description: "La trazabilidad permite rastrear cada requisito a través de todo el ciclo de vida del desarrollo, desde su origen con el stakeholder hasta su impmentación y pruebas."
    },
    {
        word: "STAKEHOLDERS",
        hint: "Todas las personas u organizaciones afectadas por el sistema",
        description: "Los stakeholders son todas las partes interesadas en el sistema, incluyendo clientes, usuarios, desarrolladores, gerentes y cualquier persona u orgazación impactada por el software."
    },
    {
        word: "ESPECIFICACION",
        hint: "Documento que describe detalladamente los requisitos del sistema",
        description: "La especificación de requisitos es el documento formal que describe de manera completa, consistente y precisa lo que el sistema debe hacer y sus rericciones."
    },
    {
        word: "USUARIO",
        hint: "Persona que interactúa directamente con el sistema",
        description: "El usuario final es quien utilizará el sistema directamente. Sus necesidades y características son fundamentales para definir requisitos útiles y usabs."
    },
    {
        word: "NEGOCIACION",
        hint: "Proceso de resolver conflictos entre requisitos contradictorios",
        description: "La negociación de requisitos implica mediar entre diferentes stakeholders para resolver conflictos, establecer prioridades y alcanzar acuerd sobre lo que incluirá el sistema."
    },
    {
        word: "PRIORIZACION",
        hint: "Proceso de determinar qué requisitos son más importantes",
        description: "La priorización ayuda a determinar qué requisitos se implementarán primero, considerando factores como valor para el negocio, urgencia, costo y ries."
    }
];
// Variables del juego
let currentConcept = null;
let guessedLetters = [];
let wrongAttempts = 0;
let maxAttempts = 6;
let score = 0;
let hintsRemaining = 5;
let conceptsGuessed = 0;
let totalConcepts = concepts.length;

// Elementos DOM
const wordDisplay = document.getElementById('word-display');
const hintText = document.getElementById('hint-text');
const keyboard = document.getElementById('keyboard');
const hintButton = document.getElementById('hint-btn');
const newGameButton = document.getElementById('new-game-btn');
const gameResult = document.getElementById('game-result');
const conceptExplanation = document.getElementById('concept-explanation');
const conceptName = document.getElementById('concept-name');
const conceptDescription = document.getElementById('concept-description');
const conceptCount = document.getElementById('concept-count');
const scoreElement = document.getElementById('score');
const hintsElement = document.getElementById('hints');
const progressBar = document.getElementById('progress-bar');
// Inicializar el juego
function initGame() {
    // Reiniciar variables
    guessedLetters = [];
    wrongAttempts = 0;
    hintsRemaining = 5;
    conceptsGuessed = 0;
    score = 0;
    
    // Actualizar UI
    updateUI();
    
    // Seleccionar concepto aleatorio
    selectRandomConcept();
    
    // Crear teclado
    createKeyboard();
    
    // Ocultar resultados anteriores
    gameResult.style.display = 'none';
    conceptExplanation.style.display = 'none';
    
    // Habilitar botones
    hintButton.disabled = false;
}

// Seleccionar un concepto aleatorio
function selectRandomConcept() {
    // Filtrar conceptos que no se han adivinado aún
    const availableConcepts = concepts.filter(concept => 
        !guessedLetters.some(item => item.concept === concept.word)
    );
    
    if (availableConcepts.length === 0) {
        // Todos los conceptos han sido adivinados
        endGame(true);
        return;
    }
    
    // Seleccionar concepto aleatorio
    const randomIndex = Math.floor(Math.random() * availableConcepts.length);
    currentConcept = availableConcepts[randomIndex];
    
    // Reiniciar variables de intentos
    wrongAttempts = 0;
    guessedLetters = [];
    
    // Actualizar display
    updateWordDisplay();
    hintText.textContent = currentConcept.hint;
    
    // Ocultar explicación
    conceptExplanation.style.display = 'none';
}

// Crear teclado virtual
function createKeyboard() {
    keyboard.innerHTML = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let letter of letters) {
        const button = document.createElement('button');
        button.className = 'letter';
        button.textContent = letter;
        button.dataset.letter = letter;
        button.addEventListener('click', () => handleLetterClick(letter));
        keyboard.appendChild(button);
    }
}

// Manejar clic en letra
function handleLetterClick(letter) {
    // Deshabilitar la letra clickeada
    const button = document.querySelector(`.letter[data-letter="${letter}"]`);
    button.disabled = true;
    
    // Agregar a letras adivinadas
    guessedLetters.push(letter);
    
    // Verificar si la letra está en la palabra
    if (currentConcept.word.includes(letter)) {
        button.classList.add('correct');
        
        // Verificar si se adivinó toda la palabra
        if (checkWin()) {
            handleWin();
        }
    } else {
        button.classList.add('incorrect');
        wrongAttempts++;
        
        // Verificar si se agotaron los intentos
        if (wrongAttempts >= maxAttempts) {
            handleLoss();
        }
    }
    
    // Actualizar display
    updateWordDisplay();
}

// Actualizar display de la palabra
function updateWordDisplay() {
    let display = '';
    for (let letter of currentConcept.word) {
        if (guessedLetters.includes(letter)) {
            display += letter + ' ';
        } else {
            display += '_ ';
        }
    }
    wordDisplay.textContent = display.trim();
}

// Verificar si el jugador ganó
function checkWin() {
    for (let letter of currentConcept.word) {
        if (!guessedLetters.includes(letter)) {
            return false;
        }
    }
    return true;
}

// Manejar victoria
function handleWin() {
    conceptsGuessed++;
    score += 100 - (wrongAttempts * 10);
    
    // Mostrar explicación del concepto
    conceptName.textContent = currentConcept.word;
    conceptDescription.textContent = currentConcept.description;
    conceptExplanation.style.display = 'block';
    
    // Deshabilitar teclado
    disableKeyboard();
    
    // Mostrar mensaje de victoria
    gameResult.textContent = `¡Correcto! Has adivinado el concepto. Puntos: +${100 - (wrongAttempts * 10)}`;
    gameResult.className = 'game-result win';
    gameResult.style.display = 'block';
    
    // Actualizar UI
    updateUI();
    
    // Pasar al siguiente concepto después de un breve delay
    setTimeout(() => {
        if (conceptsGuessed < totalConcepts) {
            selectRandomConcept();
            enableKeyboard();
            gameResult.style.display = 'none';
        } else {
            endGame(true);
        }
    }, 3000);
}

// Manejar pérdida
function handleLoss() {
    // Mostrar palabra completa
    wordDisplay.textContent = currentConcept.word.split('').join(' ');
    
    // Mostrar explicación del concepto
    conceptName.textContent = currentConcept.word;
    conceptDescription.textContent = currentConcept.description;
    conceptExplanation.style.display = 'block';
    
    // Deshabilitar teclado
    disableKeyboard();
    
    // Mostrar mensaje de pérdida
    gameResult.textContent = `¡Agotaste tus intentos! El concepto era: ${currentConcept.word}`;
    gameResult.className = 'game-result lose';
    gameResult.style.display = 'block';
    
    // Pasar al siguiente concepto después de un breve delay
    setTimeout(() => {
        if (conceptsGuessed < totalConcepts) {
            selectRandomConcept();
            enableKeyboard();
            gameResult.style.display = 'none';
        } else {
            endGame(false);
        }
    }, 5000);
}

// Finalizar juego
function endGame(isWin) {
    disableKeyboard();
    
    if (isWin) {
        gameResult.textContent = `¡Felicidades! Has adivinado todos los conceptos. Puntuación final: ${score}`;
        gameResult.className = 'game-result win';
    } else {
        gameResult.textContent = `Juego terminado. Puntuación final: ${score}`;
        gameResult.className = 'game-result lose';
    }
    
    gameResult.style.display = 'block';
    hintButton.disabled = true;
}

// Deshabilitar teclado
function disableKeyboard() {
    const buttons = document.querySelectorAll('.letter');
    buttons.forEach(button => {
        button.disabled = true;
    });
    hintButton.disabled = true;
}

// Habilitar teclado
function enableKeyboard() {
    const buttons = document.querySelectorAll('.letter');
    buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove('correct', 'incorrect');
    });
    hintButton.disabled = hintsRemaining <= 0;
}

// Usar pista
function useHint() {
    if (hintsRemaining <= 0) return;
    
    // Encontrar una letra no adivinada
    const unguessedLetters = [];
    for (let letter of currentConcept.word) {
        if (!guessedLetters.includes(letter) && !unguessedLetters.includes(letter)) {
            unguessedLetters.push(letter);
        }
    }
    
    if (unguessedLetters.length > 0) {
        // Seleccionar una letra aleatoria no adivinada
        const randomLetter = unguessedLetters[Math.floor(Math.random() * unguessedLetters.length)];
        
        // Simular clic en esa letra
        handleLetterClick(randomLetter);
        
        // Reducir contador de pistas
        hintsRemaining--;
        updateUI();
    }
}

// Actualizar UI
function updateUI() {
    conceptCount.textContent = `${conceptsGuessed}/${totalConcepts}`;
    scoreElement.textContent = score;
    hintsElement.textContent = hintsRemaining;
    
    // Actualizar barra de progreso
    const progress = (conceptsGuessed / totalConcepts) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Actualizar estado del botón de pistas
    hintButton.disabled = hintsRemaining <= 0;
}

// Configurar event listeners
function setupEventListeners() {
    hintButton.addEventListener('click', useHint);
    newGameButton.addEventListener('click', initGame);
}

// Inicializar el juego cuando se carga la página
window.addEventListener('DOMContentLoaded', () => {
    initGame();
    setupEventListeners();
});