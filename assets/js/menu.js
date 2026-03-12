import outsideClick from "./outsideClick.js"

// const links = document.querySelectorAll('.menu a');

// function ativarLink(link){
//     console.log(links)
//     const url = location.href;
//     const href = link.href;
    
//     if(url.includes(href)){
//         link.classList.add('ativo');
//     }
// }

// links.forEach(ativarLink);

export default function initDropdownMenu(){
    const dropdownMenus = document.querySelectorAll("[data-dropdown]")

    dropdownMenus.forEach(menu => {
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick)
        })
    })

    function handleClick(event){
        this.classList.add('active')
        outsideClick( this, ['touchstart', 'click'],() => {
            this.classList.remove('active')
        })
    }
}