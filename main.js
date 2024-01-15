const text = document.getElementById("text");
const key = document.getElementById("currentKey");
const keyCode = document.getElementById("keyCode");
console.log(text);

document.addEventListener("keyup", (e) => {
  text.innerText = "You Have Pressed : ";
  key.innerText = e.key;
  keyCode.innerText = e.keyCode;
  keyCode.style.padding = "10px";
});
