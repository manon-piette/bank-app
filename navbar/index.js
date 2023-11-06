const nav     = document.querySelector("nav");
const ul_cont = document.querySelector("nav div.cont");


function navbar_load(){
    const ul    = document.querySelector("nav ul");
    const style = document.createElement("style");
    style.id = "nav-style";
    document.head.appendChild(style);
    style.innerHTML = `
        @keyframes unroll {
            0% {
                height: 0px;
            }
            100% {
                height: ${ul.offsetHeight}px;
            }
        }
        @keyframes roll {
            0% {
                height: ${ul.offsetHeight}px;
            }
            100% {
                height: 0px;
            }
        }
    `;
    nav.addEventListener("mouseenter", () => {
        ul_cont.style.animation = "unroll 0.25s ease-in forwards";
    });
    
    nav.addEventListener("mouseleave", () => {
        ul_cont.style.animation = "roll 0.25s ease-in";
    });
}



