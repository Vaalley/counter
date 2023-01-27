let decreaseButton = document.getElementById("decrease");
let resetButton = document.getElementById("reset");
let increaseButton = document.getElementById("increase");
let counter = document.getElementById("counter");

// when the decrease button is clicked, decrease the counter by 1
decreaseButton.addEventListener("click", function () {
    counter.textContent--;
});

// when the reset button is clicked, reset the counter to 0
resetButton.addEventListener("click", function () {
    counter.textContent = 0;
});

// when the increase button is clicked, increase the counter by 1
increaseButton.addEventListener("click", function () {
    counter.textContent++;
});

// if counter is negative, change the color to red
// if counter is positive, change the color to green
// if counter is 0, change the color to black
function changeColor() {
    if (counter.textContent < 0) {
        counter.style.color = "red";
    } else if (counter.textContent > 0) {
        counter.style.color = "green";
    } else {
        counter.style.color = "black";
    }
}

// when the decrease, reset, or increase button is clicked, change the color
decreaseButton.addEventListener("click", changeColor);
resetButton.addEventListener("click", changeColor);
increaseButton.addEventListener("click", changeColor);
