const links = document.querySelectorAll(".link-element");
const linksPosition = document.querySelector(".links").offsetTop;

//uruchamianie opóżniania
window.addEventListener('scroll', () => {
    if (scrollY >= linksPosition - 200) {
        for (let i = 0; i < links.length; i++) {
            setTimeout(() => {
                links[i].style.opacity = "1"
                links[i].style.transition = "1s"
                console.log(i)
            }, i * 700 + 700);
        }

    }
})