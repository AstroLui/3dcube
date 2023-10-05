const cubo = document.querySelector(".cubo")

function cambiarArista(paramCurr, paramNext) {
    cubo.style.transform = `scale3d(0.75,0.75,0.75) rotate3d(${paramCurr})`
    // cubo.style.transform = `rotate3d(${paramNext})`
    setTimeout(() => {
        cubo.style.transform = `scale3d(0.75,0.75,0.75) rotate3d(${paramNext})`
      }, "1500");
    
      setTimeout(() => {
        cubo.style.transform = `scale3d(1,1,1) rotate3d(${paramNext})`
      }, "3000");
}