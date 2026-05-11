// ============================================
// TEORIE - Konsonantengruppen sp, st, sch, tsch + Doppelbuchstaben + haben
// Claudia Toth · A0 — Fonetică · Lecția 7 din 7 (FINALĂ)
// ============================================

const theoryHTML = `
    <!-- 0: Sch/sch -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🐠 1. Grupul Sch/sch = „ș" (un singur sunet, mereu)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-grupul-sch.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Cele 3 litere s + c + h = un singur sunet „ș"</h4>
                <p>Grupul <strong>sch</strong> se citește <strong>MEREU</strong> ca <strong>„ș"</strong> românesc — exact ca în „șapte" sau „mașină". Cele 3 litere fuzionează într-un sunet unic.</p>
                <p style="margin-top: 8px;">📌 Apare la început, mijloc și sfârșit de cuvânt — pronunția nu se schimbă niciodată.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Cum se scrie</th><th>Cum se citește</th></tr></thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>die Schule</strong><br>
                            <strong>schön</strong><br>
                            <strong>der Schnee</strong><br>
                            <strong>der Schmetterling</strong><br>
                            <strong>schwarz</strong><br>
                            <strong>schreiben</strong><br>
                            <strong>der Fisch</strong><br>
                            <strong>der Tisch</strong>
                        </td>
                        <td>
                            Șule<br>
                            Șö:n<br>
                            Șne:<br>
                            Șmeterling<br>
                            Șvarț<br>
                            Șraibăn<br>
                            Fiș<br>
                            Tiș<br>
                            <span class="ro-translation">școala · frumos · zăpada · fluturele · negru · a scrie · peștele · masa</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 1: Sp/sp și St/st -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🎯 2. Sp/sp și St/st — depinde de POZIȚIE!</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-grupul-sp-st.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Regula de aur: poziție în cuvânt</h4>
                <p>📍 <strong>La ÎNCEPUT de cuvânt sau de silabă</strong> → sp = <strong>„șp"</strong>, st = <strong>„șt"</strong></p>
                <p>📍 <strong>În MIJLOC sau la SFÂRȘIT</strong> → sp = <strong>„sp"</strong> normal, st = <strong>„st"</strong> normal</p>
                <p style="margin-top: 8px;">💡 Trucul: dacă „s" stă lângă „p" sau „t" la start, devine „ș". Restul timpului, rămâne „s" obișnuit.</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>La început = „șp" / „șt"</th><th>În mijloc/sfârșit = „sp" / „st"</th></tr></thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>spielen</strong> → Șpi:lăn (a se juca)<br>
                            <strong>sprechen</strong> → Șpreheăn (a vorbi)<br>
                            <strong>der Sport</strong> → Șport (sportul)<br>
                            <strong>stehen</strong> → Ște:ăn (a sta în picioare)<br>
                            <strong>die Stadt</strong> → Ștat (orașul)<br>
                            <strong>der Stuhl</strong> → Știu:l (scaunul)<br>
                            <strong>der Stein</strong> → Ștain (piatra)
                        </td>
                        <td>
                            <strong>die Wespe</strong> → Vespe (viespea)<br>
                            <strong>die Knospe</strong> → Cnospe (mugurele)<br>
                            <strong>die Kiste</strong> → Kiste (cutia)<br>
                            <strong>der Osten</strong> → Ostăn (estul)<br>
                            <strong>das Fenster</strong> → Fenstăr (fereastra)<br>
                            <strong>er ist</strong> → ist (el este)<br>
                            <strong>die Lust</strong> → Lust (pofta)
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="theory-box" style="margin-top: 12px; background: #fef3c7; border-left: 4px solid #f59e0b;">
                <p>⚠️ <strong>Atenție la cuvintele compuse:</strong> dacă „st" sau „sp" începe a doua parte a unui cuvânt compus, se citește tot „șt" / „șp". Exemplu: <strong>aufstehen</strong> = auf-<u>ște</u>:ăn (a se trezi), <strong>versprechen</strong> = fer-<u>șpre</u>heăn (a promite).</p>
            </div>
        </div>
    </div>

    <!-- 2: Tsch/tsch -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🎵 3. Grupul Tsch/tsch = „tș" (ca „cea" românesc)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-grupul-tsch.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>4 litere t + s + c + h = un sunet unic „tș"</h4>
                <p>Grupul <strong>tsch</strong> se citește mereu <strong>„tș"</strong> — exact ca <strong>„cea"</strong> sau <strong>„ci"</strong> din română (ceai, ciocolată).</p>
                <p style="margin-top: 8px;">📌 E rar comparativ cu sch, dar apare în cuvinte foarte des folosite (Deutschland, tschüss).</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Cum se scrie</th><th>Cum se citește</th></tr></thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>Deutschland</strong><br>
                            <strong>deutsch</strong><br>
                            <strong>tschüss</strong><br>
                            <strong>Tschechien</strong><br>
                            <strong>der Quatsch</strong><br>
                            <strong>rutschen</strong><br>
                            <strong>der Matsch</strong>
                        </td>
                        <td>
                            Doitș-land<br>
                            doitș<br>
                            tșüs<br>
                            Tșe-hi-ăn<br>
                            Cvatș<br>
                            Rutșăn<br>
                            Matș<br>
                            <span class="ro-translation">Germania · german/germană · pa! · Cehia · prostia · a aluneca · noroiul</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 3: Doppelvokale (aa, ee, oo) -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>📏 4. Vocale duble (aa, ee, oo) — MEREU LUNGI</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-doppelvokale.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Vocala dublată = vocala lungă (NU se pronunță de 2 ori!)</h4>
                <p>În germană există 3 perechi de vocale duble: <strong>aa, ee, oo</strong>. Dublarea e doar un <strong>semnal grafic</strong> că vocala se pronunță <strong>LUNG</strong>.</p>
                <p style="margin-top: 8px;">📌 NU pronunți „a-a" sau „e-e" separat — pronunți un singur „a" / „e" / „o" mai lung decât normal (cam de 2× durata).</p>
                <p style="margin-top: 8px;">⚠️ <strong>Vocalele „ii" și „uu" nu există</strong> ca dublare în germană. Pentru „i lung" se folosește <strong>ie</strong> (vezi Lecția 2).</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>aa, ee, oo</th><th>Cum se citește</th></tr></thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>das Haar</strong><br>
                            <strong>das Paar</strong><br>
                            <strong>der Saal</strong><br>
                            <strong>der Tee</strong><br>
                            <strong>der See</strong><br>
                            <strong>das Beet</strong><br>
                            <strong>das Boot</strong><br>
                            <strong>der Zoo</strong><br>
                            <strong>das Moor</strong>
                        </td>
                        <td>
                            Ha:r (a lung)<br>
                            Pa:r (a lung)<br>
                            Za:l (a lung)<br>
                            Te: (e lung)<br>
                            Ze: (e lung)<br>
                            Be:t (e lung)<br>
                            Bo:t (o lung)<br>
                            Țo: (o lung)<br>
                            Mo:r (o lung)<br>
                            <span class="ro-translation">părul · perechea · sala · ceaiul · lacul · răsadnița · barca · grădina zoologică · mlaștina</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 4: Doppelkonsonanten + verbul haben -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🔁 5. Consoane duble + verbul haben (a avea)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-doppelkonsonanten-haben.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>
            <div class="theory-box">
                <h4>Consoană dublă = vocala dinainte e SCURTĂ</h4>
                <p>Consoanele se pot dubla: <strong>ss, bb, dd, ff, gg, ll, mm, nn, pp, rr, tt, zz</strong>. Dublarea e un <strong>semnal grafic</strong> că vocala dinaintea ei se pronunță <strong>SCURT</strong>.</p>
                <p style="margin-top: 8px;">📌 Consoana în sine se pronunță o singură dată — NU dublu. „Wasser" = <em>Vasăr</em> (cu „a" scurt), nu <em>Vas-sar</em>.</p>
                <p style="margin-top: 8px;">💡 Comparați: <strong>Staat</strong> (a lung — statul) vs. <strong>Stadt</strong> (a scurt — orașul).</p>
            </div>

            <table class="theory-table">
                <thead><tr><th>Consoană dublă</th><th>Cum se citește (vocala scurtă)</th></tr></thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>das Wasser</strong><br>
                            <strong>die Kasse</strong><br>
                            <strong>kommen</strong><br>
                            <strong>der Mann</strong><br>
                            <strong>die Sonne</strong><br>
                            <strong>der Sommer</strong><br>
                            <strong>schwimmen</strong><br>
                            <strong>der Bett</strong>
                        </td>
                        <td>
                            Vasăr (a scurt)<br>
                            Kase (a scurt)<br>
                            Comăn (o scurt)<br>
                            Man (a scurt)<br>
                            Zone (o scurt)<br>
                            Zomăr (o scurt)<br>
                            Șvimăn (i scurt)<br>
                            Bet (e scurt)<br>
                            <span class="ro-translation">apa · casa de marcat · a veni · bărbatul · soarele · vara · a înota · patul</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="theory-box" style="margin-top: 16px; background: #d1fae5; border-left: 4px solid #10b981;">
                <h4>📚 Verbul haben (a avea) — al doilea verb fundamental după sein</h4>
                <p>Pe lângă <strong>sein</strong> (a fi — Lecția 5), <strong>haben</strong> (a avea) e cel mai important verb din germană. Se folosește pentru: posesie, vârstă, foame/sete, timpuri compuse.</p>

                <table class="theory-table" style="margin-top: 10px;">
                    <thead><tr><th>Pronume</th><th>haben</th><th>Exemplu</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ich</strong> (eu)</td><td><strong>habe</strong></td><td>Ich habe ein Auto. (Eu am o mașină.)</td></tr>
                        <tr><td><strong>du</strong> (tu)</td><td><strong>hast</strong></td><td>Du hast Zeit. (Tu ai timp.)</td></tr>
                        <tr><td><strong>er/sie/es</strong> (el/ea)</td><td><strong>hat</strong></td><td>Sie hat Hunger. (Ea îi este foame.)</td></tr>
                        <tr><td><strong>wir</strong> (noi)</td><td><strong>haben</strong></td><td>Wir haben Durst. (Nouă ne este sete.)</td></tr>
                        <tr><td><strong>ihr</strong> (voi)</td><td><strong>habt</strong></td><td>Ihr habt Glück. (Voi aveți noroc.)</td></tr>
                        <tr><td><strong>sie/Sie</strong> (ei/Dvs.)</td><td><strong>haben</strong></td><td>Sie haben Recht. (Ei au dreptate. / Dvs. aveți dreptate.)</td></tr>
                    </tbody>
                </table>

                <p style="margin-top: 10px;">💡 <strong>Expresii cu haben fără articol:</strong> Hunger haben (a-i fi foame), Durst haben (a-i fi sete), Zeit haben (a avea timp), Glück haben (a avea noroc), Recht haben (a avea dreptate).</p>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const header = content.previousElementSibling;
    const arrow = header.querySelector('.sub-arrow');
    content.classList.toggle('open');
    arrow.classList.toggle('open');
}

function toggleAudio(event, audioId) {
    event.stopPropagation();
    const audio = document.getElementById(audioId);
    const btn = document.getElementById('btn-' + audioId);
    if (audio.paused) {
        document.querySelectorAll('audio').forEach(a => { if (a !== audio) { a.pause(); a.currentTime = 0; } });
        document.querySelectorAll('.audio-btn').forEach(b => b.textContent = '▶');
        audio.play();
        btn.textContent = '⏸';
        audio.onended = () => { btn.textContent = '▶'; };
    } else {
        audio.pause();
        btn.textContent = '▶';
    }
}
