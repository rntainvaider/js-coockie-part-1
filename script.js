const COLOR = document.getElementById("color");
const TYPE = document.getElementById("type");
const CODE = document.getElementById("code");
const btnSAVE = document.querySelector(".btn_save");
const boxColors = document.querySelector(".box_colors");

let testInputsOne = document.querySelector(".test_inputs_one");
let testInputsTwo = document.querySelector(".test_inputs_two");
let testInputsThree = document.querySelector(".test_inputs_three");

let testNameColor = /^[A-z]+$/;
let testTypeRGB =
  /^([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])[,]\s([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])[,]\s([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
let testTypeRGBA =
  /^([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])[\,]\s([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])[\,]\s([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])[\,]\s(0?\.[0-9]{1,2})|[1]$/;
let testTypeHEX = /^[0-9A-F]{6}$/;

const arrNewColors = []

btnSAVE.addEventListener("click", () => {
  if (!testNameColor.test(COLOR.value)) {
    testInputsOne.style.display = "block";
    return;
  } else {
    testInputsOne.style.display = "none";
  }
  if (TYPE.value === "") {
    testInputsTwo.style.display = "block";
    return;
  } else {
    testInputsTwo.style.display = "none";
  }

  if (TYPE.value === "RGB") {
    if (!testTypeRGB.test(CODE.value)) {
      testInputsThree.textContent = "RGB [0-255], [0-255], [0-255]";
      testInputsThree.style.display = "block";
      return;
    } else {
      testInputsThree.style.display = "none";
    }
  }
  if (TYPE.value === "RGBA") {
    if (!testTypeRGBA.test(CODE.value)) {
      testInputsThree.textContent = "RGBА [0-255], [0-255], [0-255], [0-1]";
      testInputsThree.style.display = "block";
      return;
    } else {
      testInputsThree.style.display = "none";
    }
  }
  if (TYPE.value === "HEX") {
    if (!testTypeHEX.test(CODE.value)) {
      testInputsThree.textContent = "HEX [0-1A-F] 6 симвлов";
      testInputsThree.style.display = "block";
      return;
    } else {
      testInputsThree.style.display = "none";
    }
  }
  if (testNameArr()) {
    return false
  }
  newColor();
  coockie();
});

function newColor() {
  let divColors = document.createElement("div");
  divColors.className = "colors";

  if (TYPE.value === "HEX") {
    divColors.style.backgroundColor = "#" + CODE.value;
  } else if (TYPE.value === "RGB") {
    divColors.style.backgroundColor = "rgb(" + CODE.value + ")";
  } else if (TYPE.value === "RGBA") {
    divColors.style.backgroundColor = "rgba(" + CODE.value + ")";
  }
  boxColors.appendChild(divColors);

  let divColor = document.createElement("div");
  divColors.append(divColor);
  divColor.className = "color";
  divColor.backgroundColor = "aqua";

  let spanColor = document.createElement("span");
  let spanType = document.createElement("span");
  let spanCode = document.createElement("span");
  divColor.append(spanColor);
  divColor.append(spanType);
  divColor.append(spanCode);
  arrNewColors.push(spanColor.textContent = COLOR.value);
  spanType.textContent = TYPE.value;
  spanCode.textContent = CODE.value;
}

function testNameArr() {
  for (let i = 0; i < arrNewColors.length; i++) {
    if (COLOR.value === arrNewColors[i]) {
      alert("Такое имя цвета уже есть. Введите другое имя")
      return true
    }
  }
}


function coockie() {

} 