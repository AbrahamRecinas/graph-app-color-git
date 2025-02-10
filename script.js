function updateColor() {
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;

    document.getElementById("redValue").value = red;
    document.getElementById("greenValue").value = green;
    document.getElementById("blueValue").value = blue;
    document.getElementById("colorPicker").value = rgbToHex(red, green, blue);

    applyColor(red, green, blue);
}

function updateFromInput() {
    let red = document.getElementById("redValue").value;
    let green = document.getElementById("greenValue").value;
    let blue = document.getElementById("blueValue").value;

    document.getElementById("red").value = red;
    document.getElementById("green").value = green;
    document.getElementById("blue").value = blue;
    document.getElementById("colorPicker").value = rgbToHex(red, green, blue);

    applyColor(red, green, blue);
}

function updateFromPicker() {
    let color = document.getElementById("colorPicker").value;
    let red = parseInt(color.substring(1, 3), 16);
    let green = parseInt(color.substring(3, 5), 16);
    let blue = parseInt(color.substring(5, 7), 16);
    
    document.getElementById("red").value = red;
    document.getElementById("green").value = green;
    document.getElementById("blue").value = blue;
    document.getElementById("redValue").value = red;
    document.getElementById("greenValue").value = green;
    document.getElementById("blueValue").value = blue;

    applyColor(red, green, blue);
}

function applyColor(red, green, blue) {
    let color = `rgb(${red}, ${green}, ${blue})`;
    let hexCode = rgbToHex(red, green, blue);

    document.getElementById("colorBox").style.backgroundColor = color;
    document.getElementById("hexCode").textContent = hexCode;
}

function rgbToHex(r, g, b) {
    return `#${parseInt(r).toString(16).padStart(2, '0')}${parseInt(g).toString(16).padStart(2, '0')}${parseInt(b).toString(16).padStart(2, '0')}`.toUpperCase();
}

document.addEventListener("DOMContentLoaded", updateColor);
