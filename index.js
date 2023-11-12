// Définissez la fonction que vous souhaitez appeler lors du redimensionnement
ration_end_mockup = 2133 / 2186
function update_size() {
    text_p = document.querySelector("#text p");
    text_p.style.top = `${window.innerHeight / 2 - (text_p.clientHeight / 2)}px`

    document.querySelector("#text img").style.transform = `translateX(-50%) translateY( calc(100% - ${text_p.clientHeight - 100}px))`;
    console.log(document.querySelector("#text img").clientHeight - text_p.clientHeight*1.1)
    document.querySelector("#sep-1").style.height = `${document.querySelector("#text img").clientHeight - text_p.clientHeight + 100}px`

    document.querySelector("#end img:last-child").style.height = `${document.querySelector("#end img:first-child").clientHeight * 0.82}px`;
    document.querySelector("#end img:last-child").style.width = `${document.querySelector("#end img:first-child").clientHeight * 0.82 * ration_end_mockup}px`
}

function load(){
    navbar_load();
    update_size();
    scroll();
}



function scroll(){
    home_rect = document.querySelector("#home").getBoundingClientRect()
    home_cont_rect = document.querySelector("#home div.cont").getBoundingClientRect()
    arrived_1 = 1 - (Math.max(0, (home_rect.bottom - (3/4) * home_rect.height)) / ((1/4) * home_rect.height))
    arrived_2 = Math.max(1,2 - (Math.max(0, (home_rect.bottom - (2/4) * home_rect.height)) / ((1/4) * home_rect.height))) - 1
    console.log(arrived_2)
    // console.log("2",arrived_2)
    // arrived = arrived > 1 ? 1 : arrived
    // console.log(arrived)
    document.querySelector("#home div.cont").style.borderRadius = `${30*(arrived_2)}px`
    document.querySelector("#home div.cont").style.width = `calc(100% - ${60*(arrived_2)}px)`


    document.querySelector("#home div.cont").style.height = `calc(100vh - ${60*(arrived_2)}px)`
    document.querySelector("#home div.cont").style.top = `${30*(arrived_2)}px`

    document.querySelector("#home img:last-child").style.opacity = `${arrived_1}`
    document.querySelector("#home img:first-child").style.opacity = `${arrived_1}`
}
// Attachez un écouteur d'événement 'resize' à la fenêtre
window.addEventListener('resize', update_size);
window.addEventListener('load', load);
window.addEventListener('scroll', scroll);