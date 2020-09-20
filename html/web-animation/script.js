var circle = document.getElementById("circle");
var up_btn = document.getElementById("up");
var down_btn = document.getElementById("down");
var rotateValue = circle.style.transform;
var rotateSum;

up_btn.addEventListener("click", () => {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
});

down_btn.addEventListener("click", () => {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
});
