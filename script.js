const cubo = document.querySelector(".cubo")

function cambiarArita(param) {
    cubo.style.transform = `rotate3d(${param})`
}