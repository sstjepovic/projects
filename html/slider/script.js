let slider = document.querySelector('.slider-container');
let sliderInd = document.querySelectorAll('.slider-test');

let contador = 1;
const sliderWidth = sliderInd[0].clientWidth;
const intervalo = 3000;

window.addEventListener("resize", function(){
    sliderWidth = sliderInd[0].clientWidth;
})

setInterval(function tiempo (){
    slides();
}, intervalo);

function slides(){
    slider.style.transform = 'translate(' + ( - sliderWidth * contador) + 'px)';
    slider.style.transition = 'transform 1.5s'
    contador++;

    if (contador == sliderInd.length) {
        contador = 0;
        setTimeout(function(){
            slider.style.transform = 'translate(0px)';
            slider.style.transition = 'transform 0s'
        }, intervalo);
    }
}