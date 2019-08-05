const buttonStart = document.getElementsByClassName('btn-start');
const corgisContainer = document.getElementById('corgis-container');
const optionsList = document.getElementsByClassName('question-list');
const fullContainer = document.getElementsByClassName('full-container-style');
const optionsBox = document.getElementsByClassName('options-box');
const textOption = document.getElementsByClassName('text-option1');

buttonStart[0].onclick = () => {
    corgisContainer.style.display = 'block';
    document.getElementsByClassName('summary-style')[0].style.display = 'none';
}

const options = () => {
    for(let i = 0; i < optionsList.length; i++) {
        optionsList[i].onclick = () => {
            if(i === 0) {
                optionOne();
            }
            if(i === 1) {
                console.log('opcion 2');
            }
            if(i === 2) {
                console.log('opcion 3');
            }
            if(i === 3) {
                console.log('opcion 4');
            }
        }
    }
}



const createListItem = text => {
    let div = document.createElement('div');
    div.classList.add('continue-btn');
    div.textContent = text;
    options();
    return div;
}

const appendChildren = (parent, children) => {
    children.forEach(function(child) {
        parent.appendChild(child);
    });
}

let items = [
    createListItem(option1Object.button[0]),
    createListItem(option1Object.button[1]),
    createListItem(option1Object.button[2]),
    createListItem(option1Object.button[3])
]

const optionOne = () => {
    corgisContainer.style.display = 'none';
    document.getElementById('full-container').style.display = 'block';
    textOption[0].innerText = `Lamento que te sientas así
    ${option1Object.important}`;  
    appendChildren(optionsBox[0], items);
    corgisOption();
};

const corgisOption = () => {
    const buttonContinue = document.getElementsByClassName('continue-btn');
    buttonContinue[0].onclick = () => {
        fullContainer[0].innerHTML = "";
        const img = document.createElement('img');
        img.style.width = '400px';
        img.src = option1Object.images[0];
        fullContainer[0].appendChild(img);
    }
    
}

const optionTwo = () => {

};

const optionThree = () => {

};

const optionFour = () => {

};



options();