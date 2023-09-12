const redSlider = document.getElementById("redslider");
const blueSlider = document.getElementById("blueslider");
const greenSlider = document.getElementById("greenslider");

const redValue = document.getElementById("redvalue");
const greenValue = document.getElementById("greenvalue");
const blueValue = document.getElementById("bluevalue");

const colorBox = document.getElementById("colorbox");
const copyButton = document.getElementById("copybutton");
const inputType = document.getElementById("inputType");

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);

function copyRgb() {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  const rgbColor = `rgb( ${r},${g},${b})`;
  navigator.clipboard
    .writeText(rgbColor)
    .then(() => {
      alert("RGB value copied");
    })
    .catch((err) => {
      alert("failed to copy");
    });
}

copyButton.addEventListener("click", copyRgb);

function updateColor() {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  const rgbColor = `rgb( ${r},${g},${b})`;
  colorBox.style.background = rgbColor;

  redValue.innerText = r;
  greenValue.innerText = g;
  blueValue.innerText = b;

  inputType.innerText = `rgb( ${r},${g},${b})`;
}

updateColor();
