const btn = document.getElementById('btnChangeTheme')


function toggleDarkTheme() {
    document.body.classList.toggle('dark');
};

btn.addEventListener('change', function() {

    toggleDarkTheme();

});
