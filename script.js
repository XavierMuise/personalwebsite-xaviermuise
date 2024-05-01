const colorsCheckbox = document.getElementById('Colors');
const root = document.documentElement;

colorsCheckbox.addEventListener('change', () => {
    if (colorsCheckbox.checked) {
        root.style.setProperty('--bg1', 'rgb(40,40,40)');
        root.style.setProperty('--bg2', 'white');
    } else {
        root.style.setProperty('--bg1', 'white');
        root.style.setProperty('--bg2', 'rgb(40,40,40)');
    }
   

});