const squareDivs = document.querySelector('.squareDivs');

let quantify = prompt("De cuanto quieres que sea la cuadricula")

function createDivs() {
    let totalOfDivs = (quantify * quantify) ;
    for (i = 0; i < `${totalOfDivs}`; i++) {
        const divs = document.createElement('div');
        divs.classList.add('gridDivs');
        squareDivs.appendChild(divs)
    }
    squareDivs.setAttribute('style', `grid-template-columns: repeat(${quantify}, 1fr)`)
}

function paintBlack () {
    const divsBlack = document.querySelectorAll('.gridDivs')
    divsBlack.forEach(gridDivs => {
        gridDivs.addEventListener('mouseover', () => {
            gridDivs.classList.add('paintBlack')
        })
    })
}

createDivs();
paintBlack();


