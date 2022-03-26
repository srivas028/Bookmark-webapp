const toggleButtonElement = document.getElementById('toggleButton');
const navElements = document.getElementById('navElement');
const arrow1Elements = document.getElementById('arrow1Element');
const faq1ParaEleement = document.getElementById('faq1Para');
const arrow2Elements = document.getElementById('arrow2Element');
const faq2ParaEleement = document.getElementById('faq2Para');
const arrow3Elements = document.getElementById('arrow3Element');
const faq3ParaEleement = document.getElementById('faq3Para');
const arrow4Elements = document.getElementById('arrow4Element');
const faq4ParaEleement = document.getElementById('faq4Para');



toggleButtonElement.addEventListener('click', function() {
    navElements.classList.toggle('active')
});

arrow1Elements.addEventListener('click', function() {
    faq1ParaEleement.classList.toggle('active')
});

arrow2Elements.addEventListener('click', function() {
    faq2ParaEleement.classList.toggle('active')
});

arrow3Elements.addEventListener('click', function() {
    faq3ParaEleement.classList.toggle('active')
});

arrow4Elements.addEventListener('click', function() {
    faq4ParaEleement.classList.toggle('active')
});

