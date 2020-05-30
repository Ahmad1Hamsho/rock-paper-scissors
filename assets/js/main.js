let num1 = 0;
function customB() {
  if (document.getElementById("custom").checked) {
    document.getElementById("customNum").style.display = "block";
  } else if (document.getElementById("three").checked) {
    document.getElementById("customNum").style.display = "none";
  } else if (document.getElementById("six").checked) {
    document.getElementById("customNum").style.display = "none";
  } else if (document.getElementById("nine").checked) {
    document.getElementById("customNum").style.display = "none";
  }
}
const lets = document.getElementById("lets");
const buttons = document.querySelectorAll("button");
let uN = 0;
let cN = 0;
const score = () => {
  const userErg = document.getElementById("userErg");
  const compErg = document.getElementById("compErg");
  userErg.innerHTML = uN;
  compErg.innerHTML = cN;
};
for (let button of buttons) {
  button.addEventListener("click", () => {
    const array = ["paper", "scissors", "rock"];
    let num = Math.round(Math.random() * 2);
    let choise = array[num];
    console.log(choise);
    console.log(num);
    num1 = parseInt(num1) + parseInt(1);
    event.preventDefault();
    const userErg = document.getElementById("userErg");
    const compErg = document.getElementById("compErg");
    document.getElementById("custom").value = document.getElementById(
      "customNum"
    ).value;

    if (button.value == 0) {
      if (num === 2) {
        button.style.borderColor = "green";
        uN++;
        score();
        lets.innerHTML = " ";
        lets.innerHTML = "User (Paper) beats Computer (Rock): you Win";
      } else {
        button.style.borderColor = "red";
        cN++;
        score();
        lets.innerHTML = " ";
        lets.innerHTML = "lose";
      }
    }
    if (button.value == 1) {
      if (num === 0) {
        button.style.borderColor = "green";
        uN++;
        score();
        lets.innerHTML = " ";
        lets.innerHTML = "User (scissors) beats Computer (paper): you Win";
      } else {
        button.style.borderColor = "red";
        cN++;
        score();
        lets.innerHTML = " ";
        lets.innerHTML = "lose";
      }
    }
    if (button.value == 2) {
      if (num === 1) {
        button.style.borderColor = "green";
        uN++;
        score();
        lets.innerHTML = " ";
        lets.innerHTML = "User (Rock) beats Computer (scissors): you Win";
      } else {
        button.style.borderColor = "red";
        cN++;
        score();
        lets.innerHTML = " ";
        lets.innerHTML = "lose";
      }
    }
    if (button.value == num) {
      button.style.borderColor = "blue";
      lets.innerHTML = " ";
      lets.innerHTML = "It was a draw! You both chose " + choise;
    }
    const radio = document.querySelectorAll('input[type="radio"]');
    let selectedValue;
    for (const rb of radio) {
      if (rb.checked) {
        selectedValue = rb.value;
      }
    }
    if (num1 >= selectedValue) {
      if (uN < cN) {
        lets.innerHTML = " ";
        lets.innerHTML = "Copmuter win!!";
      } else {
        lets.innerHTML = " ";
        lets.innerHTML = "you win!!";
      }
      document.getElementById("move").style.display = "none";
      lets.style.fontSize = "7vh";
    }
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").innerHTML =
      "<h4>In how many rounds you think you can winning?</h4>" +
      `${num1}/${selectedValue}`;
  });
}

function ref() {
  window.location.reload();
}
