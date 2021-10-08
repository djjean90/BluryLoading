//Script.js
const bg = document.querySelector('.bg'),
      text = document.querySelector('.loading-text');

      let load=0;

      const int = setInterval(bluring,30);

function bluring() {
    load++;

    if(load>=100){
        clearInterval(int);
    }
    text.textContent = `${load}%`;
    bg.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`;
    text.style.opacity = scale(load, 0, 100, 1, 0);
}


const scale =function (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};