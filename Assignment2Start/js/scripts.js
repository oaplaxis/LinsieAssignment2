// constants for query selector
const custColorButton = document.querySelector('.custColor');
const randomColorButton = document.querySelector('.randColor');

// function to change bg color from user input and add student id
function changeCustomColor() {
    const customNumberInput = document.getElementById('customNumber').value;
    const number = Number(customNumberInput);

    if (number < 0 || number > 100) {
        document.body.style.backgroundColor = 'red';

    } else if (number >= 0 && number <= 20) {
        document.body.style.backgroundColor = "green";

    } else if (number > 20 && number <= 40) {
        document.body.style.backgroundColor = "blue";

    } else if (number > 40 && number <= 60) {    
        document.body.style.backgroundColor = "orange";

    } else if (number > 60 && number <= 80) {    
        document.body.style.backgroundColor = "purple";

    } else if (number > 80 && number <= 100) {        
        document.body.style.backgroundColor = "yellow";
    }

}

// function to change bg color from random no.
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber < 0 || randomNumber > 100) {
        document.body.style.backgroundColor = 'red';

    } else if (randomNumber >= 0 && randomNumber <= 20) {
        document.body.style.backgroundColor = "green";

    } else if (randomNumber > 20 && randomNumber <= 40) {
        document.body.style.backgroundColor = "blue";

    } else if (randomNumber > 40 && randomNumber <= 60) {    
        document.body.style.backgroundColor = "orange";

    } else if (randomNumber > 60 && randomNumber <= 80) {    
        document.body.style.backgroundColor = "purple";

    } else if (randomNumber > 80 && randomNumber <= 100) {        
        document.body.style.backgroundColor = "yellow";
    }
}
// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
}

// function to change image
function changeImage() {

}
// event listeners for on click event of buttons and select

custColorButton.addEventListener('click', changeCustomColor);
randomColorButton.addEventListener('click', changeRandomColor);

// event listeners for on change event of select