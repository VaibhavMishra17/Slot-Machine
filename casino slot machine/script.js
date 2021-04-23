let value1 = document.querySelector("#value1");
let value2 = document.querySelector("#value2");
let value3 = document.querySelector("#value3");

let inpSpeed = document.querySelector("#inpSpeed");

let values = ["1", "2", "3", "4", "5", "6", "7"];

function getRandVal() {
  return values[Math.floor(Math.random() * 7)];
}

let animationId;

function updateAnim(newSpeed) {
  if (animationId) clearInterval(animationId);

  animationId = setInterval(() => {
    value1.innerText = getRandVal();
    value2.innerText = getRandVal();
    value3.innerText = getRandVal();
  }, 1000 / newSpeed);
}

inpSpeed.addEventListener("change", (e) => {
  //   document.documentElement => :root of css
  document.documentElement.style.setProperty("--speed", e.target.value);
  updateAnim(e.target.value);
});
