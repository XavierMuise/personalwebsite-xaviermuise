const colorsCheckbox = document.getElementById('Colors');

colorsCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', colorsCheckbox.checked);
})