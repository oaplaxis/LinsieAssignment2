// constants for query selector
const randomColor = document.getElementById("randColor"); 

// function to change bg color from user input and add student id
function changeCustomColor() {

}

// function to change bg color from random no.
function changeRandomColor() {
    // Generate a random number between 1 and 100
    const randomNum = Math.floor(Math.random() * 100) + 1;

    if (randomNum < 0 || randomNum > 100) {
        // If input is less than 0 or more than 100, set background to red
        document.body.style.background = "red";
    } else if (randomNum >= 0 && randomNum <= 20) {
        // If input is between 0 and 20, set background to green
        document.body.style.background = "green";
    } else if (randomNum > 20 && randomNum <= 40) {
        // If input is between 20 and 40, set background to blue
        document.body.style.background = "blue";
    } else if (randomNum > 40 && randomNum <= 60) {
        // If input is between 40 and 60, set background to orange
        document.body.style.background = "orange";
    } else if (randomNum > 60 && randomNum <= 80) {
        // If input is between 60 and 80, set background to purple
        document.body.style.background = "purple";
    } else if (randomNum > 80 && randomNum <= 100) {
        // If input is between 80 and 100, set background to yellow
        document.body.style.background = "yellow";
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
randomColor.addEventListener("click", changeRandomColor);

// event listeners for on change event of select