// ============================================
// EXERCIȚII - Konsonantengruppen sp, st, sch, tsch + Doppelbuchstaben + haben
// Claudia Toth · A0 — Fonetică · Lecția 7 · 5 exerciții
// ============================================
// Normalizare răspuns: acceptă AMBELE forme (cu/fără diacritice germane)
// ß↔ss · ä↔ae · ö↔oe · ü↔ue · lowercase · trim · fără punctuație
function normalizeAnswer(str) {
    return (str || '')
        .toString()
        .toLowerCase()
        .trim()
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'ae')
        .replace(/ö/g, 'oe')
        .replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a')
        .replace(/î/g, 'i')
        .replace(/[șş]/g, 's')
        .replace(/[țţ]/g, 't')
        .replace(/\s+/g, ' ')
        .replace(/[.,!?;:]/g, '');
}


// ============================================
// EXERCIȚIUL 1: Cum se citește grupul îngroșat?
// ============================================
const ex1Data = [
    { id: 'a', word: 'die Schule', options: ['ș', 'șp', 'șt', 'tș'], correct: 'ș', explanation: '„Schule" → Șule. Sch = mereu „ș".' },
    { id: 'b', word: 'spielen', options: ['ș', 'șp', 'șt', 'tș'], correct: 'șp', explanation: '„spielen" → șpi:lăn. Sp la ÎNCEPUT = „șp".' },
    { id: 'c', word: 'stehen', options: ['ș', 'șp', 'șt', 'tș'], correct: 'șt', explanation: '„stehen" → ște:ăn. St la ÎNCEPUT = „șt".' },
    { id: 'd', word: 'Deutschland', options: ['ș', 'șp', 'șt', 'tș'], correct: 'tș', explanation: '„Deutschland" → Doitșland. Tsch = mereu „tș".' },
    { id: 'e', word: 'der Schnee', options: ['ș', 'șp', 'șt', 'tș'], correct: 'ș', explanation: '„Schnee" → Șne:. Sch = „ș".' },
    { id: 'f', word: 'der Sport', options: ['ș', 'șp', 'șt', 'tș'], correct: 'șp', explanation: '„Sport" → Șport. Sp la început = „șp".' },
    { id: 'g', word: 'tschüss', options: ['ș', 'șp', 'șt', 'tș'], correct: 'tș', explanation: '„tschüss" → tșüs. Tsch = „tș".' },
    { id: 'h', word: 'die Stadt', options: ['ș', 'șp', 'șt', 'tș'], correct: 'șt', explanation: '„Stadt" → Ștat. St la început = „șt".' }
];

function buildEx1() {
    const c = document.getElementById('ex1-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Cum se citește grupul consonantic din cuvântul îngroșat?</strong><br><em>Reamintire:</em> sch = „ș" mereu · sp/st la început = „șp"/„șt" · tsch = „tș".</div>`;
    ex1Data.forEach((it, i) => {
        let opts = '';
        it.options.forEach((o, k) => {
            opts += `<div class="mc-option"><input type="radio" name="ex1-${it.id}" value="${o.replace(/"/g, '&quot;')}" id="ex1-${it.id}-${k}"><label for="ex1-${it.id}-${k}">${o}</label></div>`;
        });
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label><span class="nomen-highlight">${it.word}</span></label><div class="mc-options">${opts}</div></div><div class="feedback" id="ex1-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    ex1Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex1-${it.id}"]:checked`);
        const fb = document.getElementById(`ex1-f${it.id}`);
        const ans = sel ? sel.value : '';
        if (ans === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex1Data.length };
}

// ============================================
// EXERCIȚIUL 2: sp/st la început sau în mijloc?
// ============================================
const ex2Data = [
    { id: 'a', word: 'der Sport', options: ['început = șp/șt', 'mijloc = sp/st'], correct: 'început = șp/șt', explanation: 'Sp- la început → „Șport".' },
    { id: 'b', word: 'die Wespe', options: ['început = șp/șt', 'mijloc = sp/st'], correct: 'mijloc = sp/st', explanation: 'sp în interior → „Vespe" (sp normal).' },
    { id: 'c', word: 'die Stadt', options: ['început = șp/șt', 'mijloc = sp/st'], correct: 'început = șp/șt', explanation: 'St- la început → „Ștat".' },
    { id: 'd', word: 'die Kiste', options: ['început = șp/șt', 'mijloc = sp/st'], correct: 'mijloc = sp/st', explanation: 'st în interior → „Kiste" (st normal).' },
    { id: 'e', word: 'sprechen', options: ['început = șp/șt', 'mijloc = sp/st'], correct: 'început = șp/șt', explanation: 'Spr- la început → „Șprehăn".' },
    { id: 'f', word: 'das Fenster', options: ['început = șp/șt', 'mijloc = sp/st'], correct: 'mijloc = sp/st', explanation: 'st în interior → „Fenstăr" (st normal).' },
    { id: 'g', word: 'der Stuhl', options: ['început = șp/șt', 'mijloc = sp/st'], correct: 'început = șp/șt', explanation: 'St- la început → „Știu:l".' },
    { id: 'h', word: 'er ist', options: ['început = șp/șt', 'mijloc = sp/st'], correct: 'mijloc = sp/st', explanation: 'st la sfârșit → „ist" (st normal).' }
];

function buildEx2() {
    const c = document.getElementById('ex2-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 sp/st se citește „șp"/„șt" sau „sp"/„st" normal?</strong><br><em>Regulă:</em> la ÎNCEPUT de cuvânt/silabă = „șp"/„șt". În MIJLOC sau la SFÂRȘIT = „sp"/„st" normal.</div>`;
    ex2Data.forEach((it, i) => {
        let opts = '';
        it.options.forEach((o, k) => {
            opts += `<div class="mc-option"><input type="radio" name="ex2-${it.id}" value="${o.replace(/"/g, '&quot;')}" id="ex2-${it.id}-${k}"><label for="ex2-${it.id}-${k}">${o}</label></div>`;
        });
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label><span class="nomen-highlight">${it.word}</span></label><div class="mc-options">${opts}</div></div><div class="feedback" id="ex2-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    ex2Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex2-${it.id}"]:checked`);
        const fb = document.getElementById(`ex2-f${it.id}`);
        const ans = sel ? sel.value : '';
        if (ans === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex2Data.length };
}

// ============================================
// EXERCIȚIUL 3: Completează cu sch / sp / st / tsch
// ============================================
const ex3Data = [
    { id: 'a', word: 'die __ule (școala)', correct: 'sch', accept: ['sch'], hint: '„ș" la început' },
    { id: 'b', word: 'der __ort (sportul)', correct: 'sp', accept: ['sp'], hint: '„șp" la început' },
    { id: 'c', word: 'die __adt (orașul)', correct: 'st', accept: ['st'], hint: '„șt" la început' },
    { id: 'd', word: 'deu__land (Germania)', correct: 'tsch', accept: ['tsch'], hint: '„tș" în mijloc' },
    { id: 'e', word: '__ön (frumos)', correct: 'sch', accept: ['sch'], hint: '„ș" la început' },
    { id: 'f', word: '__ielen (a se juca)', correct: 'sp', accept: ['sp'], hint: '„șp" la început' },
    { id: 'g', word: 'der __uhl (scaunul)', correct: 'st', accept: ['st'], hint: '„șt" la început' },
    { id: 'h', word: '__üss! (pa!)', correct: 'tsch', accept: ['tsch'], hint: '„tș" la început' }
];

function buildEx3() {
    const c = document.getElementById('ex3-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Completează cu sch, sp, st sau tsch.</strong><br><em>Reamintire:</em> sch = „ș" · sp = „șp" · st = „șt" · tsch = „tș".</div>`;
    ex3Data.forEach((it, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${it.word} <small style="color:#6b7280;">💡 ${it.hint}</small></label><input type="text" id="ex3-${it.id}" placeholder="sch / sp / st / tsch"></div><div class="feedback" id="ex3-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    ex3Data.forEach(it => {
        const inp = document.getElementById(`ex3-${it.id}`);
        const fb = document.getElementById(`ex3-f${it.id}`);
        const ans = normalizeAnswer(inp.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex3Data.length };
}

// ============================================
// EXERCIȚIUL 4: Vocală LUNGĂ sau SCURTĂ?
// ============================================
const ex4Data = [
    { id: 'a', word: 'das Haar (părul)', options: ['LUNGĂ', 'SCURTĂ'], correct: 'LUNGĂ', explanation: 'aa = vocală dublă → mereu LUNGĂ. „Ha:r".' },
    { id: 'b', word: 'das Wasser (apa)', options: ['LUNGĂ', 'SCURTĂ'], correct: 'SCURTĂ', explanation: 'ss = consoană dublă → vocala dinainte e SCURTĂ. „Vasăr".' },
    { id: 'c', word: 'der Tee (ceaiul)', options: ['LUNGĂ', 'SCURTĂ'], correct: 'LUNGĂ', explanation: 'ee = vocală dublă → mereu LUNGĂ. „Te:".' },
    { id: 'd', word: 'der Mann (bărbatul)', options: ['LUNGĂ', 'SCURTĂ'], correct: 'SCURTĂ', explanation: 'nn = consoană dublă → vocala dinainte e SCURTĂ. „Man".' },
    { id: 'e', word: 'das Boot (barca)', options: ['LUNGĂ', 'SCURTĂ'], correct: 'LUNGĂ', explanation: 'oo = vocală dublă → mereu LUNGĂ. „Bo:t".' },
    { id: 'f', word: 'kommen (a veni)', options: ['LUNGĂ', 'SCURTĂ'], correct: 'SCURTĂ', explanation: 'mm = consoană dublă → vocala dinainte e SCURTĂ. „Comăn".' },
    { id: 'g', word: 'der Saal (sala)', options: ['LUNGĂ', 'SCURTĂ'], correct: 'LUNGĂ', explanation: 'aa = vocală dublă → mereu LUNGĂ. „Za:l".' },
    { id: 'h', word: 'die Sonne (soarele)', options: ['LUNGĂ', 'SCURTĂ'], correct: 'SCURTĂ', explanation: 'nn = consoană dublă → vocala dinainte e SCURTĂ. „Zone".' }
];

function buildEx4() {
    const c = document.getElementById('ex4-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Vocala marcată este LUNGĂ sau SCURTĂ?</strong><br><em>Regulă:</em> vocală dublă (aa, ee, oo) = LUNGĂ · consoană dublă după vocală = vocala e SCURTĂ.</div>`;
    ex4Data.forEach((it, i) => {
        let opts = '';
        it.options.forEach((o, k) => {
            opts += `<div class="mc-option"><input type="radio" name="ex4-${it.id}" value="${o.replace(/"/g, '&quot;')}" id="ex4-${it.id}-${k}"><label for="ex4-${it.id}-${k}">${o}</label></div>`;
        });
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label><span class="nomen-highlight">${it.word}</span></label><div class="mc-options">${opts}</div></div><div class="feedback" id="ex4-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    ex4Data.forEach(it => {
        const sel = document.querySelector(`input[name="ex4-${it.id}"]:checked`);
        const fb = document.getElementById(`ex4-f${it.id}`);
        const ans = sel ? sel.value : '';
        if (ans === it.correct) {
            fb.className = 'feedback correct';
            fb.textContent = `${it.correct} — ${it.explanation}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct} — ${it.explanation}`;
        }
    });
    return { correct, total: ex4Data.length };
}

// ============================================
// EXERCIȚIUL 5: Conjugă verbul haben
// ============================================
const ex5Data = [
    { id: 'a', word: 'Ich ___ ein Auto. (Eu am o mașină.)', correct: 'habe', accept: ['habe'], hint: 'persoana I sg.' },
    { id: 'b', word: 'Du ___ Zeit. (Tu ai timp.)', correct: 'hast', accept: ['hast'], hint: 'persoana a II-a sg.' },
    { id: 'c', word: 'Er ___ Hunger. (Lui îi este foame.)', correct: 'hat', accept: ['hat'], hint: 'persoana a III-a sg.' },
    { id: 'd', word: 'Wir ___ Durst. (Nouă ne este sete.)', correct: 'haben', accept: ['haben'], hint: 'persoana I pl.' },
    { id: 'e', word: 'Ihr ___ Glück. (Voi aveți noroc.)', correct: 'habt', accept: ['habt'], hint: 'persoana a II-a pl.' },
    { id: 'f', word: 'Sie ___ Recht. (Ei au dreptate.)', correct: 'haben', accept: ['haben'], hint: 'persoana a III-a pl.' },
    { id: 'g', word: 'Sie ___ ein Haus. (Dvs. aveți o casă.)', correct: 'haben', accept: ['haben'], hint: 'forma de politețe (Sie)' },
    { id: 'h', word: 'Das Kind ___ ein Buch. (Copilul are o carte.)', correct: 'hat', accept: ['hat'], hint: 'persoana a III-a sg. (das Kind = el/ea)' }
];

function buildEx5() {
    const c = document.getElementById('ex5-container');
    if (!c) return;
    let html = `<div class="exercise-instruction"><strong>📝 Completează cu forma corectă a verbului haben (a avea).</strong><br><em>Reamintire:</em> ich habe · du hast · er/sie/es hat · wir haben · ihr habt · sie/Sie haben.</div>`;
    ex5Data.forEach((it, i) => {
        html += `<div class="exercise-item"><span class="exercise-number">${i+1}</span><div class="input-group"><label>${it.word} <small style="color:#6b7280;">💡 ${it.hint}</small></label><input type="text" id="ex5-${it.id}" placeholder="habe / hast / hat / haben / habt"></div><div class="feedback" id="ex5-f${it.id}"></div></div>`;
    });
    c.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    ex5Data.forEach(it => {
        const inp = document.getElementById(`ex5-${it.id}`);
        const fb = document.getElementById(`ex5-f${it.id}`);
        const ans = normalizeAnswer(inp.value);
        if (it.accept.some(a => normalizeAnswer(a) === ans)) {
            fb.className = 'feedback correct';
            fb.textContent = `Corect: ${it.correct}`;
            correct++;
        } else {
            fb.className = 'feedback incorrect';
            fb.textContent = `Corect: ${it.correct}`;
        }
    });
    return { correct, total: ex5Data.length };
}

// ============================================
// INIT EXERCIȚII
// ============================================
buildEx1();
buildEx2();
buildEx3();
buildEx4();
buildEx5();
