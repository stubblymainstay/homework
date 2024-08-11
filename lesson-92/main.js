const button = document.querySelector(`.btn-open`);
const afterСlick = document.querySelector(`.modal`); 
const returnBack = document.querySelector(`.modal__close-btn`);
const modalWindow = document.querySelector(`.modal__window`); 

button.addEventListener(`click`, () => {
afterСlick.style.display = `flex`; 
});

returnBack.addEventListener(`click`, () => {
afterСlick.style.display = `none`; 
});

afterСlick.addEventListener('click', (event) => {
if (event.target == modalWindow || event.target == returnBack) {
    return; 
}

afterСlick.style.display = `none`; 
});



