// function cambioRango(id){
//     const elemento = document.getElementById(id)
//     const valor = elemento.value

//     console.log(valor)
// }
const cubo = document.querySelector(".cubo")

const inputAxis = document.querySelector("#ejes")
const axis = document.querySelectorAll(".eje")
console.log(axis)

const valorX = document.querySelector("#valorX")
const inputX = document.querySelector("#x")
valorX.value = inputX.value

const valorY = document.querySelector("#valorY")
const inputY = document.querySelector("#y")
valorY.value = inputY.value

const valorZ = document.querySelector("#valorZ")
const inputZ = document.querySelector("#z")
valorZ.value = inputZ.value

const valorDeg = document.querySelector("#valorDeg")
const inpuDeg = document.querySelector("#deg")
valorDeg.value = inpuDeg.value

inputX.addEventListener("input", (event) => {
    valorX.value = event.target.value;
    // console.log(typeof event.target.value)
    // console.log(event.target.value)
    cubo.style.transform = `rotate3d(${event.target.value}, ${inputY.value}, ${inputZ.value}, ${inpuDeg.value}deg)`
});

inputY.addEventListener("input", (event) => {
    valorY.value = event.target.value;
    cubo.style.transform = `rotate3d(${inputX.value}, ${event.target.value}, ${inputZ.value}, ${inpuDeg.value}deg)`
});

inputZ.addEventListener("input", (event) => {
    valorZ.value = event.target.value;
    cubo.style.transform = `rotate3d(${inputX.value}, ${inputY.value}, ${event.target.value}, ${inpuDeg.value}deg)`
});

inpuDeg.addEventListener("input", (event) => {
    valorDeg.value = event.target.value;
    cubo.style.transform = `rotate3d(${inputX.value}, ${inputY.value}, ${inputZ.value}, ${event.target.value}deg)`
});

inputAxis.addEventListener("input", (event) => {
    axis.forEach(element => {
        element.style.display = element.style.display === 'none' ? '' : 'none';
    });
});