let ratioWidth = document.getElementById("ratio-width");
let ratioHeight = document.getElementById("ratio-height");
let width = document.getElementById("width");
let height = document.getElementById("height");

let calculateWidth = () => {
    let aspectRatio = ratioWidth.value / ratioHeight.value;
    if (height.value > 0) {
        width.value = parseFloat((height.value * aspectRatio).toFixed(2));
    } else {
        width.value = 0;
    }
};

let calculateHeight = () => {
    let aspectRatio = ratioWidth.value / ratioHeight.value;
    if (width.value > 0) {
        height.value = parseFloat((width.value / aspectRatio).toFixed(2));
    } else {
        height.value = 0;
    }
};

let validateRatio = (ratioElement) => {
    if (ratioElement.value <= 0) {
        ratioElement.value = 1; // Default to 1 to prevent division by zero or negative aspect ratios
    }
};

height.addEventListener("input", calculateWidth);
width.addEventListener("input", calculateHeight);

ratioWidth.addEventListener("input", () => {
    validateRatio(ratioWidth);
    calculateHeight();
});

ratioHeight.addEventListener("input", () => {
    validateRatio(ratioHeight);
    calculateWidth();
});
