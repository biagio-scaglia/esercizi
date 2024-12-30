// Dati esercizi
const exercises = [
    // Gambe - Principiante
    { name: "Squat a corpo libero", level: "principiante", bodyPart: "gambe", description: "3 serie x 15 ripetizioni" },
    { name: "Affondi sul posto", level: "principiante", bodyPart: "gambe", description: "3 serie x 10 per lato" },
    { name: "Ponte glutei", level: "principiante", bodyPart: "gambe", description: "3 serie x 12 ripetizioni" },
    { name: "Step laterali con elastico", level: "principiante", bodyPart: "gambe", description: "3 serie x 12 per lato" },
    { name: "Calf raises (alzate sui polpacci)", level: "principiante", bodyPart: "gambe", description: "3 serie x 20 ripetizioni" },

    // Gambe - Intermedio
    { name: "Squat jump", level: "intermedio", bodyPart: "gambe", description: "3 serie x 12 ripetizioni" },
    { name: "Affondi laterali", level: "intermedio", bodyPart: "gambe", description: "3 serie x 10 per lato" },
    { name: "Bulgarian split squat", level: "intermedio", bodyPart: "gambe", description: "3 serie x 10 per lato" },
    { name: "Good morning senza pesi", level: "intermedio", bodyPart: "gambe", description: "3 serie x 12 ripetizioni" },
    { name: "Wall sit (tenuta)", level: "intermedio", bodyPart: "gambe", description: "3 serie x 30-45 secondi" },

    // Gambe - Esperto
    { name: "Pistol squat (assistito o completo)", level: "esperto", bodyPart: "gambe", description: "3 serie x 8 per gamba" },
    { name: "Jumping lunges", level: "esperto", bodyPart: "gambe", description: "3 serie x 12 per lato" },
    { name: "Squat esplosivi con salto", level: "esperto", bodyPart: "gambe", description: "3 serie x 10 ripetizioni" },
    { name: "Nordic hamstring curl (assistito)", level: "esperto", bodyPart: "gambe", description: "3 serie x 8-10 ripetizioni" },
    { name: "Wall sit con peso (zaino)", level: "esperto", bodyPart: "gambe", description: "3 serie x 45 secondi" },

    // Petto e Tricipiti - Principiante
    { name: "Push-up inclinati (mani su una superficie elevata)", level: "principiante", bodyPart: "petto", description: "3 serie x 12 ripetizioni" },
    { name: "Dips su sedia o panca", level: "principiante", bodyPart: "petto", description: "3 serie x 8-10 ripetizioni" },
    { name: "Plank to knee tap", level: "principiante", bodyPart: "petto", description: "3 serie x 10 per lato" },
    { name: "Push-up con le ginocchia a terra", level: "principiante", bodyPart: "petto", description: "3 serie x 12 ripetizioni" },

    // Petto e Tricipiti - Intermedio
    { name: "Push-up classici", level: "intermedio", bodyPart: "petto", description: "3 serie x 12-15 ripetizioni" },
    { name: "Diamond push-up (per i tricipiti)", level: "intermedio", bodyPart: "petto", description: "3 serie x 10 ripetizioni" },
    { name: "Archer push-up (un braccio più esteso)", level: "intermedio", bodyPart: "petto", description: "3 serie x 8 per lato" },
    { name: "Dips su parallele (se disponibili)", level: "intermedio", bodyPart: "petto", description: "3 serie x 10 ripetizioni" },

    // Petto e Tricipiti - Esperto
    { name: "Push-up pliometrici (con battito di mani)", level: "esperto", bodyPart: "petto", description: "3 serie x 8-10 ripetizioni" },
    { name: "Handstand push-up (contro il muro)", level: "esperto", bodyPart: "petto", description: "3 serie x 6-8 ripetizioni" },
    { name: "One-arm push-up (assistito)", level: "esperto", bodyPart: "petto", description: "3 serie x 6 per lato" },
    { name: "Planche push-up (iniziare in lean)", level: "esperto", bodyPart: "petto", description: "3 serie x 5 ripetizioni" },

    // Schiena e Bicipiti - Principiante
    { name: "Superman hold (tenuta)", level: "principiante", bodyPart: "schiena", description: "3 serie x 30 secondi" },
    { name: "Reverse snow angel (a terra)", level: "principiante", bodyPart: "schiena", description: "3 serie x 12 ripetizioni" },
    { name: "Bird-dog (alternato)", level: "principiante", bodyPart: "schiena", description: "3 serie x 10 per lato" },

    // Schiena e Bicipiti - Intermedio
    { name: "Australian pull-up (barra bassa o tavolo stabile)", level: "intermedio", bodyPart: "schiena", description: "3 serie x 8-10 ripetizioni" },
    { name: "Reverse plank (tenuta)", level: "intermedio", bodyPart: "schiena", description: "3 serie x 20-30 secondi" },
    { name: "Push-up con focus dorsale (presa larga)", level: "intermedio", bodyPart: "schiena", description: "3 serie x 12 ripetizioni" },

    // Schiena e Bicipiti - Esperto
    { name: "Pull-up classici", level: "esperto", bodyPart: "schiena", description: "3 serie x 10 ripetizioni" },
    { name: "Chin-up (presa supina)", level: "esperto", bodyPart: "schiena", description: "3 serie x 8-10 ripetizioni" },
    { name: "Archer pull-up", level: "esperto", bodyPart: "schiena", description: "3 serie x 6 per lato" },

    // Addome - Principiante
    { name: "Plank (tenuta isometrica)", level: "principiante", bodyPart: "addome", description: "3 serie x 20-30 secondi" },
    { name: "Crunch tradizionale", level: "principiante", bodyPart: "addome", description: "3 serie x 15 ripetizioni" },
    { name: "Toe taps (tocco alternato dei piedi da terra)", level: "principiante", bodyPart: "addome", description: "3 serie x 15 ripetizioni" },

    // Addome - Intermedio
    { name: "Side plank", level: "intermedio", bodyPart: "addome", description: "3 serie x 20 secondi per lato" },
    { name: "Mountain climber", level: "intermedio", bodyPart: "addome", description: "3 serie x 20 ripetizioni" },
    { name: "V-up", level: "intermedio", bodyPart: "addome", description: "3 serie x 10-12 ripetizioni" },

    // Addome - Esperto
    { name: "Dragon flag (assistito)", level: "esperto", bodyPart: "addome", description: "3 serie x 5-8 ripetizioni" },
    { name: "Windshield wiper (pulitore di parabrezza)", level: "esperto", bodyPart: "addome", description: "3 serie x 8 per lato" },
    { name: "Plank to side reach (con rotazione)", level: "esperto", bodyPart: "addome", description: "3 serie x 10 ripetizioni" },

    // Spalle - Principiante
    { name: "Shoulder taps in plank", level: "principiante", bodyPart: "spalle", description: "3 serie x 10 per lato" },
    { name: "Push-up con presa larga", level: "principiante", bodyPart: "spalle", description: "3 serie x 10 ripetizioni" },

    // Spalle - Intermedio
    { name: "Pike push-up", level: "intermedio", bodyPart: "spalle", description: "3 serie x 10 ripetizioni" },
    { name: "Hand release push-up", level: "intermedio", bodyPart: "spalle", description: "3 serie x 10-12 ripetizioni" },

    // Spalle - Esperto
    { name: "Handstand hold (tenuta in verticale)", level: "esperto", bodyPart: "spalle", description: "3 serie x 20-30 secondi" },
    { name: "Archer pike push-up", level: "esperto", bodyPart: "spalle", description: "3 serie x 6 per lato" },
    { "name": "Burpee classico", "level": "principiante", "bodyPart": "Cardio e Resistenza", "description": "3 serie x 10 ripetizioni" },
    { "name": "Jumping jacks", "level": "principiante", "bodyPart": "Cardio e Resistenza", "description": "3 serie x 20 secondi" },
    { "name": "High knees (alzate ginocchia)", "level": "principiante", "bodyPart": "Cardio e Resistenza", "description": "3 serie x 15 secondi" },
    { "name": "Mountain climber", "level": "intermedio", "bodyPart": "Cardio e Resistenza", "description": "3 serie x 20 ripetizioni" },
    { "name": "Sprint sul posto", "level": "intermedio", "bodyPart": "Cardio e Resistenza", "description": "3 serie x 15 secondi" },
    { "name": "Burpee con salto esplosivo", "level": "esperto", "bodyPart": "Cardio e Resistenza", "description": "3 serie x 8 ripetizioni" },
    { "name": "Plank run", "level": "esperto", "bodyPart": "Cardio e Resistenza", "description": "3 serie x 20 secondi" },
    { "name": "Squat jump con atterraggio controllato", "level": "intermedio", "bodyPart": "Gambe", "description": "3 serie x 12 ripetizioni" },
    { "name": "Affondi con salto alternato", "level": "esperto", "bodyPart": "Gambe", "description": "3 serie x 10 per lato" },
    { "name": "Pistol squat assistito", "level": "intermedio", "bodyPart": "Gambe", "description": "3 serie x 8 per lato" },
    { "name": "Calf raises", "level": "principiante", "bodyPart": "Gambe", "description": "3 serie x 20 ripetizioni" },
    { "name": "Wall sit", "level": "principiante", "bodyPart": "Gambe", "description": "3 serie x 20 secondi" },
    { "name": "Bulgarian split squat", "level": "intermedio", "bodyPart": "Gambe", "description": "3 serie x 10 per lato" },
    { "name": "Nordic curl", "level": "esperto", "bodyPart": "Gambe", "description": "3 serie x 8 ripetizioni" },
    { "name": "Push-up inclinato", "level": "principiante", "bodyPart": "Petto e Tricipiti", "description": "3 serie x 10 ripetizioni" },
    { "name": "Push-up classico", "level": "intermedio", "bodyPart": "Petto e Tricipiti", "description": "3 serie x 12 ripetizioni" },
    { "name": "Push-up esplosivo", "level": "esperto", "bodyPart": "Petto e Tricipiti", "description": "3 serie x 8 ripetizioni" },
    { "name": "Diamond push-up", "level": "intermedio", "bodyPart": "Petto e Tricipiti", "description": "3 serie x 10 ripetizioni" },
    { "name": "Dips su sedia", "level": "principiante", "bodyPart": "Petto e Tricipiti", "description": "3 serie x 8 ripetizioni" },
    { "name": "Archer push-up", "level": "esperto", "bodyPart": "Petto e Tricipiti", "description": "3 serie x 6 per lato" },
    { "name": "Pull-up", "level": "esperto", "bodyPart": "Schiena e Bicipiti", "description": "3 serie x 8 ripetizioni" },
    { "name": "Australian pull-up", "level": "intermedio", "bodyPart": "Schiena e Bicipiti", "description": "3 serie x 10 ripetizioni" },
    { "name": "Face pull con elastico", "level": "intermedio", "bodyPart": "Schiena e Bicipiti", "description": "3 serie x 12 ripetizioni" },
    { "name": "Bird-dog", "level": "principiante", "bodyPart": "Schiena e Bicipiti", "description": "3 serie x 10 per lato" },
    { "name": "Superman hold", "level": "principiante", "bodyPart": "Schiena e Bicipiti", "description": "3 serie x 20 secondi" },
    { "name": "Archer pull-up", "level": "esperto", "bodyPart": "Schiena e Bicipiti", "description": "3 serie x 6 per lato" },
    { "name": "Plank classico", "level": "principiante", "bodyPart": "Addome", "description": "3 serie x 20 secondi" },
    { "name": "Side plank", "level": "intermedio", "bodyPart": "Addome", "description": "3 serie x 15 secondi per lato" },
    { "name": "Plank con rotazione", "level": "esperto", "bodyPart": "Addome", "description": "3 serie x 10 per lato" },
    { "name": "Crunch classico", "level": "principiante", "bodyPart": "Addome", "description": "3 serie x 15 ripetizioni" },
    { "name": "Bicycle crunch", "level": "intermedio", "bodyPart": "Addome", "description": "3 serie x 12 per lato" },
    { "name": "Dragon flag", "level": "esperto", "bodyPart": "Addome", "description": "3 serie x 6 ripetizioni" },
    { "name": "Shoulder taps", "level": "principiante", "bodyPart": "Spalle", "description": "3 serie x 10 per lato" },
    { "name": "Pike push-up", "level": "intermedio", "bodyPart": "Spalle", "description": "3 serie x 10 ripetizioni" },
    { "name": "Handstand push-up", "level": "esperto", "bodyPart": "Spalle", "description": "3 serie x 6 ripetizioni" },
    { "name": "Wall push-up", "level": "principiante", "bodyPart": "Spalle", "description": "3 serie x 12 ripetizioni" },
    { "name": "Plank con rotazione del busto", "level": "intermedio", "bodyPart": "Spalle", "description": "3 serie x 10 per lato" },
    { "name": "Planche lean", "level": "esperto", "bodyPart": "Spalle", "description": "3 serie x 15 secondi" },
    { "name": "Skater jump", "level": "intermedio", "bodyPart": "Cardio e Resistenza", "description": "3 serie x 12 per lato" },
    { "name": "Tuck jump", "level": "esperto", "bodyPart": "Cardio e Resistenza", "description": "3 serie x 10 ripetizioni" }
  ]

;

// Funzione per visualizzare gli esercizi
function displayExercises(filteredExercises) {
    const exerciseList = document.getElementById('exercise-list');
    exerciseList.innerHTML = ""; // Pulisci l'elenco

    if (filteredExercises.length === 0) {
        exerciseList.innerHTML = "<p>Nessun esercizio trovato.</p>";
        return;
    }

    filteredExercises.forEach(exercise => {
        const exerciseElement = document.createElement('div');
        exerciseElement.classList.add('exercise');
        exerciseElement.innerHTML = `
            <h3>${exercise.name}</h3>
            <p><strong>Livello:</strong> ${exercise.level}</p>
            <p><strong>Parte del corpo:</strong> ${exercise.bodyPart}</p>
            <p>${exercise.description}</p>
        `;
        exerciseList.appendChild(exerciseElement);
    });
}

// Funzione per filtrare gli esercizi
function filterExercises() {
    const level = document.getElementById('level').value;
    const bodyPart = document.getElementById('bodyPart').value;

    const filteredExercises = exercises.filter(exercise => {
        return (level === "all" || exercise.level === level) &&
               (bodyPart === "all" || exercise.bodyPart === bodyPart);
    });

    displayExercises(filteredExercises);
}

// Inizializza con tutti gli esercizi
displayExercises(exercises);
