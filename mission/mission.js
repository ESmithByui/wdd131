const selectElem = document.querySelector('select');
let logo = document.querySelector('img');



function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark'){
        //change body to dark
        document.body.classList.add('dark');
        logo.setAttribute("src", "byui-logo_white.png")
    } else {
        //change back
        document.body.classList.remove('dark');
        logo.setAttribute("src", "byui-logo_blue.webp")
    }
}

selectElem.addEventListener('change', changeTheme);