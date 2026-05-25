// ============================================
// FLASHCARDS - Konsonantengruppen sp, st, sch, tsch + Doppelbuchstaben + haben
// Claudia Toth · A0 — Fonetică · Lecția 7 · 32 carduri
// Audio profesional pre-generat cu Hedda
// ============================================

const flashcardsData = [
    // ========== Sch (6 carduri) ==========
    { de: "die Schule", ro: "școala · sch sună ca ș → Șule", audio: "audio/letters/schule.wav" },
    { de: "schön", ro: "frumos · → Șö:n", audio: "audio/letters/schoen.wav" },
    { de: "der Schnee", ro: "zăpada · → Șne:", audio: "audio/letters/schnee.wav" },
    { de: "der Schmetterling", ro: "fluturele · → Șmeterling", audio: "audio/letters/schmetterling.wav" },
    { de: "schwarz", ro: "negru · → Șvarț", audio: "audio/letters/schwarz.wav" },
    { de: "schreiben", ro: "a scrie · → Șraibăn", audio: "audio/letters/schreiben.wav" },

    // ========== Sp/St la început sună ca șp/șt (7 carduri) ==========
    { de: "spielen", ro: "a se juca · sp- la început sună ca șp → Șpi:lăn", audio: "audio/letters/spielen.wav" },
    { de: "sprechen", ro: "a vorbi · → Șprehăn", audio: "audio/letters/sprechen.wav" },
    { de: "der Sport", ro: "sportul · → Șport", audio: "audio/letters/sport.wav" },
    { de: "stehen", ro: "a sta în picioare · st- la început sună ca șt → Ște:ăn", audio: "audio/letters/stehen.wav" },
    { de: "die Stadt", ro: "orașul · → Ștat (a SCURT!)", audio: "audio/letters/stadt.wav" },
    { de: "der Stuhl", ro: "scaunul · → Știu:l", audio: "audio/letters/stuhl.wav" },
    { de: "der Stein", ro: "piatra · → Ștain", audio: "audio/letters/stein.wav" },

    // ========== Sp/St în mijloc sună ca sp/st normal (4 carduri) ==========
    { de: "die Wespe", ro: "viespea · sp în mijloc sună ca sp normal → Vespe", audio: "audio/letters/wespe.wav" },
    { de: "die Kiste", ro: "cutia · st în mijloc sună ca st normal → Kiste", audio: "audio/letters/kiste.wav" },
    { de: "das Fenster", ro: "fereastra · → Fenstăr", audio: "audio/letters/fenster.wav" },
    { de: "er ist", ro: "el este · st la sfârșit sună ca st normal → ist", audio: "audio/letters/ist.wav" },

    // ========== Tsch (3 carduri) ==========
    { de: "Deutschland", ro: "Germania · tsch sună ca tș → Doitșland", audio: "audio/letters/deutschland.wav" },
    { de: "tschüss", ro: "pa! · → tșüs", audio: "audio/letters/tschuess.wav" },
    { de: "der Quatsch", ro: "prostia · → Cvatș", audio: "audio/letters/quatsch.wav" },

    // ========== Doppelvokale aa/ee/oo (4 carduri) ==========
    { de: "das Haar", ro: "părul · aa = a LUNG → Ha:r", audio: "audio/letters/haar.wav" },
    { de: "der Tee", ro: "ceaiul · ee = e LUNG → Te:", audio: "audio/letters/tee.wav" },
    { de: "der See", ro: "lacul · → Ze:", audio: "audio/letters/see.wav" },
    { de: "das Boot", ro: "barca · oo = o LUNG → Bo:t", audio: "audio/letters/boot.wav" },

    // ========== Doppelkonsonanten — vocală SCURTĂ (3 carduri) ==========
    { de: "das Wasser", ro: "apa · ss = a SCURT → Vasăr", audio: "audio/letters/wasser.wav" },
    { de: "kommen", ro: "a veni · mm = o SCURT → Comăn", audio: "audio/letters/kommen.wav" },
    { de: "der Mann", ro: "bărbatul · nn = a SCURT → Man", audio: "audio/letters/mann.wav" },

    // ========== Verbul haben (5 carduri) ==========
    { de: "ich habe", ro: "eu am · → ih ha:be", audio: "audio/letters/ich-habe.wav" },
    { de: "du hast", ro: "tu ai · → du: hast", audio: "audio/letters/du-hast.wav" },
    { de: "er hat", ro: "el are · → e:r hat", audio: "audio/letters/er-hat.wav" },
    { de: "wir haben", ro: "noi avem · → vi:r ha:băn", audio: "audio/letters/wir-haben.wav" },
    { de: "ihr habt", ro: "voi aveți · → i:r ha:pt", audio: "audio/letters/ihr-habt.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (6 sch · 7 sp/st la început · 4 sp/st mijloc · 3 tsch · 4 vocale duble · 3 consoane duble · 5 haben).<br>
            Click pe card pentru a vedea traducerea și pronunția. Click pe 🔊 pentru a auzi pronunția germană (voce profesională înregistrată).
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => {
        console.log('Audio nu poate fi redat:', err);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    buildFlashcards();
});
