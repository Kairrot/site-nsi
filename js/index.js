const rain = document.querySelector('.rain')

/* Creation d'une goute avec un left aléatoire et un temps d'animation aléatoire => Voir CSS pour l'animation */
function addFall() {
    const fall = document.createElement('div')
    fall.classList.add('fall');

    fall.style.left = `${randInt(0, window.innerWidth)}px`
    fall.style.animationDuration = `${randInt(500, 2000)}ms`

    fall.addEventListener('animationend', () => {
        rain.removeChild(fall)
    })

    rain.appendChild(fall)
}

setInterval(() => {
    addFall()
}, 80)


function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}