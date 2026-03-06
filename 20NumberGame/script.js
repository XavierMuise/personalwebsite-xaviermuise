const randNumEl = document.getElementById('randNum');
const placedCount = document.getElementById('placedCount');
const remainCount = document.getElementById('remainCount');

let num = -1;
let nums = Array(21).fill(-1);
let canPlace = false;
let canGenerate = true;
let placed = 0;

function showToast(message, type) {
    // Remove existing toast
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => toast.classList.add('show'));
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 2500);
}

function updateCounts() {
    placedCount.textContent = placed;
    remainCount.textContent = 20 - placed;
}

function generateNum() {
    if (!canGenerate) {
        showToast('Place the current number first!', 'fail');
        return;
    }
    num = Math.floor(Math.random() * 999) + 1;
    randNumEl.textContent = num;
    randNumEl.classList.remove('pop');
    void randNumEl.offsetWidth; // reflow to restart animation
    randNumEl.classList.add('pop');
    canPlace = true;
    canGenerate = false;
}

function placeNum(number) {
    if (num === -1) {
        showToast('Generate a number first!', 'fail');
        return;
    }
    if (!canPlace) {
        showToast('Generate a new number first!', 'fail');
        return;
    }

    nums[number] = num;
    const slot = document.getElementById(number);
    slot.querySelector('.slot-val').textContent = num;
    slot.classList.add('filled');

    placed++;
    updateCounts();
    canPlace = false;
    canGenerate = true;

    if (checkValid()) {
        if (placed === 20) {
            showToast('🎉 You win! All 20 placed!', 'win');
        }
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') generateNum();
});

function reset() {
    num = -1;
    nums = Array(21).fill(-1);
    canGenerate = true;
    canPlace = false;
    placed = 0;

    randNumEl.textContent = '—';
    updateCounts();

    for (let i = 1; i <= 20; i++) {
        const slot = document.getElementById(i);
        slot.querySelector('.slot-val').textContent = '';
        slot.classList.remove('filled');
    }
}

function checkValid() {
    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] === -1) continue;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === -1) continue;
            if (nums[i] >= nums[j]) {
                showToast('❌ Out of order! Resetting…', 'fail');
                setTimeout(reset, 1200);
                return false;
            }
        }
    }
    return true;
}