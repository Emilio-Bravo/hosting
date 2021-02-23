window.addEventListener("load", () => {
  main();
});
function main() {
  setCharacter();
  buy();
  sell();
}
function setCharacter() {
  const outstanding = get("outstanding");
  const character_1 = get("c_1");
  const character_2 = get("c_2");
  const character_3 = get("c_3");
  const character_4 = get("c_4");
  const character_5 = get("c_5");
  outstanding.addEventListener("click", () => {
    setMoney("Don Vicente", "∞", "outstanding");
  });
  character_1.addEventListener("click", () => {
    setMoney("Jeff Bezos", 200000000, null);
  });
  character_2.addEventListener("click", () => {
    setMoney("Elon Musk", 195000000, null);
  });
  character_3.addEventListener("click", () => {
    setMoney("Bill Gates", 134000000, null);
  });
  character_4.addEventListener("click", () => {
    setMoney("Mark Zuckerberg", 100000000, null);
  });
  character_5.addEventListener("click", () => {
    setMoney("Warren Buffet", 70000000, null);
  });
}
function setMoney(name, amount, attr) {
  get("ma").textContent = "";
  get("character").textContent = "";
  get("ma").innerHTML = amount;
  get("character").innerHTML = name;
  if (attr != null) {
    get("character").setAttribute("class", attr);
  } else {
    get("character").classList.remove("outstanding");
  }
}
function substract(amount) {
  if (document.getElementById("character").textContent != "Don Vicente") {
    let result = get("ma").textContent - amount;
    get("ma").textContent = "";
    get("ma").textContent = result;
  }
}
function add(amount) {
  if (document.getElementById("character").textContent != "Don Vicente") {
    let num = parseFloat(get("ma").textContent);
    let result = num + amount;
    get("ma").textContent = "";
    get("ma").textContent = result;
  }
}
const get = (name) => document.getElementById(name);
function buy() {
  /* Buggati */
  get("o_1").addEventListener("click", () => {
    substract(3000000);
  });
  /* Iphone */
  get("o_2").addEventListener("click", () => {
    substract(1650);
  });
  /* Coca Cola */
  get("o_3").addEventListener("click", () => {
    substract(1.5);
  });
  /* SR-71 */
  get("o_4").addEventListener("click", () => {
    substract(400000);
  });
  /* Mansion */
  get("o_5").addEventListener("click", () => {
    substract(500000);
  });
  /* Ssyscrapper */
  get("o_6").addEventListener("click", () => {
    substract(15000000);
  });
  /* Burj */
  get("o_7").addEventListener("click", () => {
    substract(40000);
  });
  /* AC-130 */
  get("o_8").addEventListener("click", () => {
    substract(130000000);
  });
  /* Private yet */
  get("o_9").addEventListener("click", () => {
    substract(3000000);
  });
  /* White House */
  get("o_10").addEventListener("click", () => {
    substract(400000000);
  });
}
function sell() {
  /* Buggati */
  get("o_1s").addEventListener("click", () => {
    add(3000000);
  });
  /* Iphone */
  get("o_2s").addEventListener("click", () => {
    add(1650);
  });
  /* Coca Cola */
  get("o_3s").addEventListener("click", () => {
    add(1.5);
  });
  /* SR-71 */
  get("o_4s").addEventListener("click", () => {
    add(400000);
  });
  /* Mansion */
  get("o_5s").addEventListener("click", () => {
    add(500000);
  });
  /* Ssyscrapper */
  get("o_6s").addEventListener("click", () => {
    add(15000000);
  });
  /* Burj */
  get("o_7s").addEventListener("click", () => {
    add(40000);
  });
  /* AC-130 */
  get("o_8s").addEventListener("click", () => {
    add(130000000);
  });
  /* Private yet */
  get("o_9s").addEventListener("click", () => {
    add(3000000);
  });
  /* White House */
  get("o_10s").addEventListener("click", () => {
    add(400000000);
  });
}
