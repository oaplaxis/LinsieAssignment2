// constants for query selector
const studentIdP = document.getElementById("studentIdDisplay");
const custColorButton = document.querySelector('.custColor');
const randomColorButton = document.querySelector('.randColor');
const selectElement = document.getElementById("imageSelect");
const gokuImage = document.getElementById("gokuImage");

// Array storing the different Goku images
const gokuForms = [
    { name: "Base Goku", src: "./img/base.png" },
    { name: "Super Saiyan Goku", src: "./img/ss1.png" },
    { name: "Super Saiyan 2 Goku", src: "./img/ss2.png" },
    { name: "Super Saiyan 3 Goku", src: "./img/ss3.png" },
    { name: "Super Saiyan 4 Goku", src: "./img/ss4.png" },
    { name: "Super Saiyan God Goku", src: "./img/ssg.png" },
    { name: "Super Saiyan Blue Goku", src: "./img/ssb.png" },
    { name: "Ultra Instinct -Sign- Goku", src: "./img/uisign2.png" },
    { name: "Mastered Ultra Instinct Goku", src: "./img/mui2.png" }
];

// function to change bg color from user input and add student id
function changeCustomColor() {
    const customNumberInput = document.getElementById('customNumber').value;
    studentIdP.textContent = "Student ID: 200495638";
    const number = Number(customNumberInput);


    if (number < 0 || number > 100) {
        document.body.style.backgroundColor = "rgb(125, 0, 0)";
        document.body.style.color = 'white';

    } else if (number >= 0 && number <= 20) {
        document.body.style.backgroundColor = "rgb(7, 97, 30)";
        document.body.style.color = 'white';

    } else if (number > 20 && number <= 40) {
        document.body.style.backgroundColor = "rgb(31, 132, 233)";
        document.body.style.color = 'black';

    } else if (number > 40 && number <= 60) {    
        document.body.style.backgroundColor = "rgb(203, 129, 50)";
        document.body.style.color = 'black';

    } else if (number > 60 && number <= 80) {    
        document.body.style.backgroundColor = "rgb(114, 21, 124)";
        document.body.style.color = 'white';

    } else if (number > 80 && number <= 100) {        
        document.body.style.backgroundColor = "rgb(255, 229, 62)";
        document.body.style.color = 'black';
    }

}

// function to change bg color from random no.
function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber < 0 || randomNumber > 100) {
        document.body.style.backgroundColor = "rgb(125, 0, 0)";
        document.body.style.color = 'white';

    } else if (randomNumber >= 0 && randomNumber <= 20) {
        document.body.style.backgroundColor = "rgb(7, 97, 30)";
        document.body.style.color = 'white';

    } else if (randomNumber > 20 && randomNumber <= 40) {
        document.body.style.backgroundColor = "rgb(31, 132, 233)";
        document.body.style.color = 'black';

    } else if (randomNumber > 40 && randomNumber <= 60) {    
        document.body.style.backgroundColor = "rgb(203, 129, 50)";
        document.body.style.color = 'black';

    } else if (randomNumber > 60 && randomNumber <= 80) {    
        document.body.style.backgroundColor = "rgb(114, 21, 124)";
        document.body.style.color = 'white';

    } else if (randomNumber > 80 && randomNumber <= 100) {        
        document.body.style.backgroundColor = "rgb(255, 229, 62)";
        document.body.style.color = 'black';
    }
}
// function to generate options for select list
function populateSelectList() {
    // Prevent duplicate options by checking if already populated
    if (selectElement.options.length > 1) return; 

    gokuForms.forEach(form => {
        const option = document.createElement("option");
        option.value = form.src;
        option.textContent = form.name;
        selectElement.appendChild(option);
    });
}

// function to change image
function changeImage() {
    const selectedSrc = selectElement.value;

    if (selectedSrc) {
        gokuImage.src = selectedSrc;
        gokuImage.style.display = "block";
    } else {
        gokuImage.style.display = "none";
    }
}
// event listeners for on click event of buttons and select
custColorButton.addEventListener('click', changeCustomColor);
randomColorButton.addEventListener('click', changeRandomColor);

// event listeners for on change event of select
selectElement.addEventListener("focus", populateSelectList); // Populate options when select is clicked
selectElement.addEventListener("change", changeImage); // Change image on selection