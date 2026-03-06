// Attributes: Skating, Shooting, Playmaking, Deking, Strength, Defence, BodyChecking, Position
// Position: 1 = Forward, 2 = Defenseman
// All ratings out of 10 (11 = elite, rare)

let canGenerate = true;
let canSelect = false;
let currentPlayer = 0;
let i = 0;

let skating, shooting, playmaking, deking, strength, defence, bodyChecking, position;

function player(name, pos, Skating, Shooting, Playmaking, Deking, Strength, Defence, BodyChecking) {
    this.name = name;
    this.pos = pos; // 'F' or 'D'
    this.Skating = Skating;
    this.Shooting = Shooting;
    this.Playmaking = Playmaking;
    this.Deking = Deking;
    this.Strength = Strength;
    this.Defence = Defence;
    this.BodyChecking = BodyChecking;
    // Position attribute value: forwards get 6 (offence bonus), D-men get 8 (defence/assist bonus)
    this.Position = pos === 'D' ? 8 : 6;
}

let players = [];

// === MODERN SUPERSTARS ===
players.push(new player("Sidney Crosby",       'F', 9, 9, 10, 9, 8, 8, 6));
players.push(new player("Alexander Ovechkin",  'F', 8, 11, 7, 7, 9, 5, 7));
players.push(new player("Connor McDavid",      'F', 11, 9, 10, 10, 7, 6, 5));
players.push(new player("Auston Matthews",     'F', 8, 11, 8, 8, 8, 6, 5));
players.push(new player("Nathan MacKinnon",    'F', 10, 9, 10, 9, 8, 6, 5));
players.push(new player("Nikita Kucherov",     'F', 9, 9, 11, 9, 7, 6, 4));
players.push(new player("Leon Draisaitl",      'F', 8, 10, 10, 8, 9, 6, 5));
players.push(new player("David Pastrnak",      'F', 9, 10, 8, 9, 7, 5, 5));
players.push(new player("Patrick Kane",        'F', 9, 9, 10, 10, 6, 5, 4));
players.push(new player("Jonathan Toews",      'F', 8, 8, 9, 8, 8, 9, 7));
players.push(new player("Steven Stamkos",      'F', 8, 10, 8, 7, 7, 6, 5));
players.push(new player("John Tavares",        'F', 7, 9, 9, 8, 8, 6, 5));
players.push(new player("Evgeni Malkin",       'F', 9, 9, 10, 9, 8, 5, 5));
players.push(new player("Mark Scheifele",      'F', 8, 9, 9, 7, 7, 6, 5));
players.push(new player("Artemi Panarin",      'F', 9, 8, 10, 9, 6, 5, 4));
players.push(new player("Mitch Marner",        'F', 9, 7, 10, 9, 6, 6, 4));
players.push(new player("Brad Marchand",       'F', 9, 8, 9, 9, 7, 7, 6));
players.push(new player("Brayden Point",       'F', 9, 9, 9, 8, 7, 6, 5));
players.push(new player("Kyle Connor",         'F', 9, 9, 8, 8, 7, 5, 4));
players.push(new player("Elias Pettersson",    'F', 8, 9, 9, 9, 6, 6, 4));
players.push(new player("Aleksander Barkov",   'F', 8, 8, 9, 8, 8, 9, 6));
players.push(new player("Anze Kopitar",        'F', 8, 7, 9, 8, 8, 9, 6));
players.push(new player("Claude Giroux",       'F', 8, 8, 10, 8, 7, 7, 5));
players.push(new player("Evgeny Kuznetsov",    'F', 8, 8, 9, 8, 7, 5, 4));
players.push(new player("Ryan Nugent-Hopkins", 'F', 8, 8, 8, 7, 7, 7, 5));
players.push(new player("Bo Horvat",           'F', 8, 8, 8, 7, 8, 7, 7));
players.push(new player("Sebastian Aho",       'F', 9, 9, 8, 8, 7, 6, 5));
players.push(new player("Tage Thompson",       'F', 8, 10, 7, 7, 9, 5, 6));
players.push(new player("Jason Robertson",     'F', 8, 9, 8, 8, 7, 5, 4));
players.push(new player("Matthew Tkachuk",     'F', 8, 8, 9, 8, 8, 6, 7));
players.push(new player("Brady Tkachuk",       'F', 7, 8, 7, 6, 9, 6, 9));
players.push(new player("J.T. Miller",         'F', 8, 8, 9, 8, 7, 5, 8));
players.push(new player("Kirill Kaprizov",     'F', 9, 9, 9, 9, 7, 5, 4));
players.push(new player("Jack Hughes",         'F', 9, 8, 9, 9, 6, 5, 4));
players.push(new player("Tim Stützle",         'F', 9, 8, 9, 8, 7, 5, 4));

// === DEFENSEMEN ===
players.push(new player("Erik Karlsson",       'D', 10, 7, 10, 8, 6, 7, 5));
players.push(new player("Victor Hedman",       'D', 8, 7, 9, 7, 8, 10, 7));
players.push(new player("Evan Bouchard",       'D', 8, 10, 9, 7, 6, 7, 5));
players.push(new player("Cale Makar",          'D', 10, 8, 9, 9, 7, 8, 5));
players.push(new player("Drew Doughty",        'D', 8, 6, 8, 7, 8, 10, 8));
players.push(new player("Brent Burns",         'D', 8, 8, 8, 6, 8, 7, 7));
players.push(new player("Shea Weber",          'D', 7, 9, 6, 5, 10, 9, 10));
players.push(new player("P.K. Subban",         'D', 8, 7, 8, 7, 8, 8, 8));
players.push(new player("Roman Josi",          'D', 9, 7, 9, 7, 7, 9, 6));
players.push(new player("Alex Pietrangelo",    'D', 7, 6, 8, 6, 8, 9, 7));
players.push(new player("Kris Letang",         'D', 8, 7, 9, 7, 7, 8, 6));
players.push(new player("Morgan Rielly",       'D', 8, 6, 8, 7, 7, 7, 5));
players.push(new player("Seth Jones",          'D', 8, 7, 8, 6, 8, 9, 7));
players.push(new player("Quinn Hughes",        'D', 10, 6, 10, 8, 5, 7, 4));
players.push(new player("Dougie Hamilton",     'D', 8, 8, 8, 6, 7, 7, 6));
players.push(new player("Darnell Nurse",       'D', 7, 6, 6, 5, 9, 8, 9));
players.push(new player("Rasmus Dahlin",       'D', 9, 7, 9, 8, 6, 7, 8));
players.push(new player("Adam Fox",            'D', 8, 6, 9, 7, 6, 8, 5));
players.push(new player("Miro Heiskanen",      'D', 8, 6, 8, 7, 7, 10, 6));

// === LEGENDS ===
players.push(new player("Wayne Gretzky",       'F', 9, 8, 11, 9, 5, 7, 3));
players.push(new player("Mario Lemieux",       'F', 9, 10, 10, 10, 9, 6, 6));
players.push(new player("Joe Sakic",           'F', 9, 10, 9, 8, 7, 7, 5));
players.push(new player("Pavel Datsyuk",       'F', 10, 8, 10, 11, 7, 10, 6));
players.push(new player("Henrik Zetterberg",   'F', 8, 8, 9, 9, 7, 9, 6));
players.push(new player("Jaromir Jagr",        'F', 8, 9, 9, 9, 10, 6, 6));
players.push(new player("Teemu Selanne",       'F', 9, 10, 8, 8, 7, 5, 5));

function showToast(message, type = '') {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add('show')));
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 2800);
}

function setRow(id, playerName, value) {
    const row = document.getElementById(id);
    row.classList.add('filled');
    const displayVal = id === 'Position' ? (value === 8 ? 'D' : 'F') : value;
    row.querySelector('.build-val').innerHTML = `${displayVal} <span class="build-player">${playerName}</span>`;
    document.querySelectorAll('.attr-btn').forEach(btn => {
        if (btn.textContent.trim().replace(' ', '') === id || btn.textContent.trim() === id.replace(/([A-Z])/g, ' $1').trim()) {
            btn.classList.add('taken');
        }
    });
}

function GeneratePlayer() {
    if (!canGenerate) {
        showToast('Pick an attribute first', 'fail');
        return;
    }
    const random = Math.floor(Math.random() * players.length);
    currentPlayer = random;
    const p = players[random];
    document.getElementById('player').textContent = p.name;
    document.getElementById('positionBadge').textContent = p.pos === 'D' ? 'Defenseman' : 'Forward';
    canGenerate = false;
    canSelect = true;
}

function selectAttribute(attr) {
    if (!canSelect) {
        showToast('Generate a player first', 'fail');
        return;
    }

    const p = players[currentPlayer];

    const map = {
        Skating:      { get: () => skating,      set: v => skating = v,      val: p.Skating },
        Shooting:     { get: () => shooting,     set: v => shooting = v,     val: p.Shooting },
        Playmaking:   { get: () => playmaking,   set: v => playmaking = v,   val: p.Playmaking },
        Deking:       { get: () => deking,       set: v => deking = v,       val: p.Deking },
        Strength:     { get: () => strength,     set: v => strength = v,     val: p.Strength },
        Defence:      { get: () => defence,      set: v => defence = v,      val: p.Defence },
        BodyChecking: { get: () => bodyChecking, set: v => bodyChecking = v, val: p.BodyChecking },
        Position:     { get: () => position,     set: v => position = v,     val: p.Position },
    };

    const entry = map[attr];
    if (!entry) return;

    if (entry.get() != null) {
        showToast('Already picked this attribute', 'fail');
        return;
    }

    entry.set(entry.val);
    setRow(attr, p.name, entry.val);
    canGenerate = true;
    canSelect = false;
    i++;

    if (i === 8) {
        calculateStats();
        i = 0;
    }
}

function calculateStats() {
    const isD = position === 8;

    // per-game bases, then multiply by 82
    const goalBase = (shooting * 0.65) + (skating * 0.15) + (deking * 0.15);
    const goals = Math.round(goalBase * (isD ? 0.45 : 1.0) * 82 / 10);

    const assistBase = (playmaking * 0.6) + (skating * 0.10) + (deking * 0.2);
    const assists = Math.round(assistBase * (isD ? 1.25 : 1.0) * 82 / 10);

    const offenceScore = (shooting + playmaking + skating) / 3;
    const pmBase = (defence * 0.5) + (offenceScore * 0.3) + (strength * 0.2);
    const plusMinus = Math.round((pmBase - 5) * (isD ? 2.2 : 1.6) * 82 / 10);

    const hits = Math.round(((bodyChecking * 0.65) + (strength * 0.25) + (skating * 0.15)) * 82 / 10);

    const blockBase = (defence * 0.6) + (strength * 0.2) + (skating * 0.2);
    const blocks = Math.round(blockBase * (isD ? 1.3 : 0.7) * 82 / 10);

    const shotBias = shooting - playmaking;
    const shots = Math.round(((shooting * 0.7) + (skating * 0.2) + (deking * 0.2) + (shotBias * 0.3)) * 82 / 10) * 4;

    const raw = (skating + shooting + playmaking + deking + strength + defence + bodyChecking + position) / 8;
    const overall = Math.min(99, Math.round(raw * 9 + 18));

    document.getElementById('Overall').textContent = overall;
    document.getElementById('StatLine').innerHTML =
        `${goals}G &nbsp; ${assists}A &nbsp; ${plusMinus > 0 ? '+' : ''}${plusMinus} &nbsp; ${hits}H &nbsp; ${blocks}BLK &nbsp; ${shots}SOG`;

    showToast(`🏒 Overall: ${overall}`, 'win');
    canSelect = false;
}

function reset() {
    i = 0;
    canGenerate = true;
    canSelect = false;
    skating = shooting = playmaking = deking = strength = defence = bodyChecking = position = null;

    document.getElementById('player').textContent = '—';
    document.getElementById('positionBadge').textContent = '—';
    document.getElementById('Overall').textContent = '—';
    document.getElementById('StatLine').textContent = 'G   A   +/-   H   BLK   SOG';

    ['Skating','Shooting','Playmaking','Deking','Strength','Defence','BodyChecking','Position'].forEach(id => {
        const row = document.getElementById(id);
        if (row) {
            row.classList.remove('filled');
            row.querySelector('.build-val').textContent = '—';
        }
    });

    document.querySelectorAll('.attr-btn').forEach(btn => btn.classList.remove('taken'));
}