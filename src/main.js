const iconHamburger = document.querySelector('#icon_hamburger');
const iconClose = document.querySelector('#icon_close');
const menuDesplegable = document.querySelector('#menu_desplegable');
const listsDesplegable = document.querySelectorAll('.list_desplegable');

iconHamburger.addEventListener('click', () => {
    iconHamburger.classList.remove('block');
    iconHamburger.classList.add('hidden');
    iconClose.classList.remove('hidden');
    iconClose.classList.add('block');

    let height = menuDesplegable.scrollHeight;
    menuDesplegable.style.height=`${height}px`;
    

});

iconClose.addEventListener('click', () => {
    iconClose.classList.remove('block');
    iconClose.classList.add('hidden');
    iconHamburger.classList.remove('hidden');
    iconHamburger.classList.add('block');

    let height;
    height = menuDesplegable.clientHeight;
    menuDesplegable.style.height = `${height}px`;
    //console.log(height);
    if (!(height == "0")) {
        height = 0;
        menuDesplegable.style.height=`${height}px`;
    }
});

listsDesplegable.forEach(listDesplegable => {
    let title = listDesplegable.previousElementSibling;
    let arrowDown = title.lastElementChild;
    let heighMenu = menuDesplegable.clientHeight;
    

    title.addEventListener('click', () => {
        menuDesplegable.style.height = `auto`;

        arrowDown.classList.toggle('rotate-180');
        
        let heightList = 0;
        if (listDesplegable.clientHeight == "0") {
            heightList = listDesplegable.scrollHeight;
        }
        listDesplegable.style.height = `${heightList}px`;
        
    });
});

// D E S K T O P

const listsDesplegableDK = document.querySelectorAll('.list_desplegable-dk');

listsDesplegableDK.forEach(listDesplegableDK => {
    const titleDK = listDesplegableDK.previousElementSibling;
    titleDK.addEventListener('click', () => {
        console.log("Gaaaa")
        let heightList = 0;
        if (listDesplegableDK.clientHeight == "0") {
            heightList = listDesplegableDK.scrollHeight;
        }
        listDesplegableDK.style.height = `${heightList}px`;
    });
}); 