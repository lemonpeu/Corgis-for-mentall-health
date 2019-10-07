const buttonStart = document.getElementsByClassName('btn-start');
const corgisContainer = document.getElementById('corgis-container');
const optionsList = document.getElementsByClassName('question-list');
const fullContainer = document.getElementsByClassName('full-container-style');

const optionsBox = document.getElementsByClassName('options-box');
const textOption = document.getElementsByClassName('text-option1');
const summarySection = document.getElementById('summary');

const btnRead = document.getElementsByClassName('btn-read')
const letterContent = document.getElementsByClassName('letter-content');
const btnHide = document.getElementsByClassName('btn-hide');

const navList = document.getElementsByClassName('nav-list');

const btnOptions = document.getElementsByClassName('btn-for-options');
const nextCorgi = document.getElementById('next-corgi');

buttonStart[0].onclick = () => {
    corgisContainer.style.display = 'block';
    document.getElementById('full-container').style.display = 'none';
    document.getElementsByClassName('summary-style')[0].style.display = 'none';
}

btnOptions[0].onclick = () => {
    corgisContainer.style.display = 'block';
    document.getElementsByClassName('summary-style')[0].style.display = 'none';
    document.getElementById('full-container').style.display = 'none';
}

const options = () => {
    for (let i = 0; i < optionsList.length; i++) {
        optionsList[i].onclick = () => {
            if (i === 0) {
                optionOne();
            }
            if (i === 1) {
                optionTwo();
            }
            if (i === 2) {
                optionThree();
            }
            if (i === 3) {
                optionFour();
            }
        }
    }
}
//////////// HOME //////////////

const HOME = () => {
    navList[0].onclick = () => {
        corgisContainer.style.display = 'none';
        document.getElementsByClassName('summary-style')[0].style.display = 'block';
        // document.getElementById('full-container').innerHTML = "";
        document.getElementById('full-container').style.display = 'none';
    }

}
//////////// HOME //////////////

//////////// SHOW LETTER /////////////

const showLetter = () => {
    btnRead[0].onclick = () => {
        let contrasena = prompt("Contraseña");
        if (contrasena === "brocoli") {
            btnRead[0].style.display = 'none';
            letterContent[0].innerText = LETTER.text;
            btnHide[0].style.display = 'block';
        } else {
            alert("No tenés permiso para ver esta página")
        }

    }
};

const hideLetter = () => {
    btnHide[0].onclick = () => {
        letterContent[0].innerText = "";
        btnRead[0].style.display = 'block';
        btnHide[0].style.display = 'none';
    }
};

//////////// SHOW LETTER /////////////

///////////////////////APPENDEANDO MULTIPLES DIVS ////////////////////////////

const createListItem = text => {
    let div = document.createElement('div');
    div.classList.add('continue-btn');
    div.textContent = text;
    options();
    return div;
}

const appendChildren = (parent, children) => {
    children.forEach(function (child) {
        parent.appendChild(child);
    });
}

let items = [
    createListItem(option1Object.button[0]),
    createListItem(option1Object.button[1]),
    createListItem(option1Object.button[2]),
    createListItem(option1Object.button[3])
]

///////////////////////APPENDEANDO MULTIPLES DIVS ////////////////////////////

const optionOne = () => {
    corgisContainer.style.display = 'none';
    document.getElementById('full-container').style.display = 'block';
    nextCorgi.style.display = "block";
    textOption[0].innerText = `Los corgis siempre van a levantarnos el ánimo, así que acá tenés muchas fotos de corgis lindos`;
    randomCorgi();
    nextCorgo();
};

const randomCorgi = () => {
    optionsBox[0].innerHTML = "";
    const img = document.createElement('img');
    img.style.width = '400px';
    let randomNumber = Math.floor((Math.random() * 42));
    img.src = `images_gallery/corgi${randomNumber}.jpg`;
    optionsBox[0].appendChild(img);
}

const nextCorgo = () => {

    nextCorgi.onclick = () => {
        optionsBox[0].innerHTML = "";
        randomCorgi();
    }
}


const optionTwo = () => {
    corgisContainer.style.display = 'none';
    document.getElementById('full-container').style.display = 'block';
    nextCorgi.style.display = "block";
    textOption[0].innerText = `Videos lindos para levantar el ánimo`;
    randomDaily();
    nextDaily();
};


////////////////// video ///////////////

const randomDaily = () => {
    optionsBox[0].innerHTML = "";
    const video = document.createElement('iframe');
    video.style.width = '600px';
    video.style.height = '400px';
    video.setAttribute("allow", "accelerometer");
    video.setAttribute("frameborder", "0");
    let randomNumber = Math.floor((Math.random() * 41));
    console.log(randomNumber);
    video.src = dailyDoseVideos[randomNumber];
    optionsBox[0].appendChild(video);
}

const nextDaily = () => {
    nextCorgi.onclick = () => {
        optionsBox[0].innerHTML = "";
        randomDaily();
    }
}

const optionThree = () => {
    corgisContainer.style.display = 'none';
    document.getElementById('full-container').style.display = 'block';
    textOption[0].innerText = `Música que está buena escuchar`;
    nextCorgi.style.display = "block";
    randomSong();
    nextSong();
};

const randomSong = () => {
    optionsBox[0].innerHTML = "";
    const video = document.createElement('iframe');
    video.style.width = '600px';
    video.style.height = '400px';
    video.setAttribute("allow", "accelerometer");
    video.setAttribute("frameborder", "0");
    let randomNumber = Math.floor((Math.random() * 28));
    video.src = randomSongs[randomNumber];
    optionsBox[0].appendChild(video);
}

const nextSong = () => {
    nextCorgi.onclick = () => {
        optionsBox[0].innerHTML = "";
        randomSong();
    }
}

///////////////////////////////

const optionFour = () => {
    corgisContainer.style.display = 'none';
    document.getElementById('full-container').style.display = 'block';
    nextCorgi.style.display = "none";
    textOption[0].innerText = `Cositas random`;
    optionsBox[0].innerHTML = "";
    let randomNumber = Math.floor((Math.random() * 2) + 1);
    if (randomNumber === 1) {
        textOption[0].innerText = `Videos totalmente randoms`;
        randomVideo();
    } else if (randomNumber === 2) {
        textOption[0].innerText = `Hace click en el link y te va a llevar a una pagina random`;
        randomPage();
    }
};

const randomVideo = () => {
    optionsBox[0].innerHTML = "";
    const video = document.createElement('iframe');
    video.style.width = '600px';
    video.style.height = '400px';
    video.setAttribute("allow", "accelerometer");
    video.setAttribute("frameborder", "0");
    let random = Math.floor((Math.random() * 7));
    console.log(random);
    video.src = randomVideos[random];
    optionsBox[0].appendChild(video);
}

const randomPage = () => {
    optionsBox[0].innerHTML = "";
    const url = document.createElement('a');
    url.innerText = 'Click';
    let random = Math.floor((Math.random() * 23));
    url.href = randomPages[random];
    optionsBox[0].appendChild(url);
}


options();
showLetter();
hideLetter();
HOME();