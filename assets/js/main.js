const lanArray = ["de", "ar", "en"];
const select = document.createElement("select");
const div1 = document.querySelector("#div1");
const userDiv = document.querySelector(".user");
const compDiv = document.querySelector(".comp");
const logIn = document.createElement("div");
const letsDiv = document.querySelector(".lets");
const roundMessageElement = document.createElement("h1");
const user = document.createElement("h1");
const comp = document.createElement("h1");
const lets = document.createElement("h1");
const nameInput = document.createElement("input");
const start = document.createElement("button");
start.innerHTML = "start";
document.querySelector("section").style.display = "none";
nameInput.placeholder = "Your Name";
document.body.appendChild(logIn);
logIn.appendChild(start);
logIn.appendChild(nameInput);
logIn.appendChild(select);
logIn.id = "logIn";
lets.id = "lets";
letsDiv.appendChild(lets);
div1.appendChild(roundMessageElement);
div1.insertBefore(
  document.querySelector(".radio"),
  roundMessageElement.childNodes[0]
);
userDiv.appendChild(user);
compDiv.appendChild(comp);
let thisLanguage = [
  {
    comp: "Comp",
    draw: "Es war Gleichstand, ihr beiden habt gewählt ",
    letsPlay: "Los spielen",
    lose: "verloren",
    restart: "Restart",
    roundsMessage: "Wie viele Runden brauchst du, um zu gewinnen?",
    title: " de ",
    user: "User",
    win: "gewinnen",
    youWin: "Du bist der Gewinner",
  },
];
let rPs = [{ paper: "Papier", rock: "Stein", scissors: "Schere" }];
let num1 = 0;
const buttons = document.querySelectorAll("button");
let uN = 0;
let cN = 0;
const score = () => {
  const userErg = document.getElementById("userErg");
  const compErg = document.getElementById("compErg");
  userErg.innerHTML = uN;
  compErg.innerHTML = cN;
  lets.innerHTML = " ";
};
const xhr = new XMLHttpRequest();
xhr.open("Get", "assets/js/languages.xml");
xhr.send();
xhr.onload = () => {
  if (xhr.status === 200) {
    let languagesArray = [];
    const languagesLists = xhr.responseXML.querySelectorAll("language");
    languagesLists.forEach((e) => {
      const lanObject = {
        title: e.querySelector("title").textContent,
        roundsMessage: e.querySelector("roundsMessage").textContent,
        comp: e.querySelector("comp").textContent,
        user: e.querySelector("user").textContent,
        letsPlay: e.querySelector("letsPlay").textContent,
        restart: e.querySelector("restart").textContent,
        youWin: e.querySelector("youWin").textContent,
        win: e.querySelector("win").textContent,
        lose: e.querySelector("lose").textContent,
        draw: e.querySelector("draw").textContent,
        rock: e.querySelector("rock").textContent,
        paper: e.querySelector("paper").textContent,
        scissors: e.querySelector("scissors").textContent,
      };
      languagesArray.push(lanObject);
    });
    lanArray.forEach((e) => {
      const option = document.createElement("option");
      option.innerHTML = option.value = e;
      select.appendChild(option);
    });
    start.addEventListener("click", () => {
      localStorage.setItem("name", nameInput.value);
      document.querySelector("section").style.display = "block";
      logIn.style.display = "none";
      roundMessageElement.innerHTML = `Hi ${localStorage.getItem("name")} <br>${
        thisLanguage[0].roundsMessage
      }`;
      user.innerHTML = `${thisLanguage[0].user}`;
      comp.innerHTML = `${thisLanguage[0].comp}`;
      lets.innerHTML = `${thisLanguage[0].letsPlay}`;
      customB = () => {
        if (document.getElementById("custom").checked) {
          document.getElementById("customNum").style.display = "block";
        } else if (document.getElementById("three").checked) {
          document.getElementById("customNum").style.display = "none";
        } else if (document.getElementById("six").checked) {
          document.getElementById("customNum").style.display = "none";
        } else if (document.getElementById("nine").checked) {
          document.getElementById("customNum").style.display = "none";
        }
      };
      const borderColor = (paper, rock, scissors) => {
        document.querySelector(
          ".move button[value= '0']"
        ).style.borderColor = paper;
        document.querySelector(
          ".move button[value= '1']"
        ).style.borderColor = rock;
        document.querySelector(
          ".move button[value= '2']"
        ).style.borderColor = scissors;
      };

      for (let button of buttons) {
        button.addEventListener("click", () => {
          const array = ["paper", "scissors", "rock"];
          let num = Math.round(Math.random() * 2);
          let choise = array[num].toString();
          num1 = parseInt(num1) + parseInt(1);
          event.preventDefault();
          document.getElementById("custom").value = document.getElementById(
            "customNum"
          ).value;
          if (button.value == 0) {
            if (num === 2) {
              borderColor("green", "", "");
              uN++;
              score();
              lets.innerHTML = `${thisLanguage[0].user} ( ${rPs[0].paper} ) ${thisLanguage[0].comp} ( ${rPs[0].rock} ): ${thisLanguage[0].youWin}`;
            } else {
              borderColor("red", "", "");
              cN++;
              score();
              lets.innerHTML = `${thisLanguage[0].user} ( ${rPs[0].paper} ) ${thisLanguage[0].comp} ( ${rPs[0][choise]} ): ${thisLanguage[0].lose} `;
            }
          }
          if (button.value == 1) {
            if (num === 0) {
              borderColor("", "green", "");
              uN++;
              score();
              lets.innerHTML = `${thisLanguage[0].user} ( ${rPs[0].scissors} ) ${thisLanguage[0].comp} ( ${rPs[0].paper} ): ${thisLanguage[0].youWin}`;
            } else {
              borderColor("", "red", "");
              cN++;
              score();
              lets.innerHTML = `${thisLanguage[0].user} ( ${rPs[0].scissors} ) ${thisLanguage[0].comp} ( ${rPs[0][choise]} ): ${thisLanguage[0].lose}`;
            }
          }
          if (button.value == 2) {
            if (num === 1) {
              borderColor("", "", "green");
              uN++;
              score();
              lets.innerHTML = `${thisLanguage[0].user} ( ${rPs[0].rock} ) ${thisLanguage[0].comp} ( ${rPs[0].scissors} ): ${thisLanguage[0].youWin}`;
            } else {
              borderColor("", "", "red");
              cN++;
              score();
              lets.innerHTML = `${thisLanguage[0].user} ( ${rPs[0].rock} ) ${thisLanguage[0].comp} ( ${rPs[0][choise]} ): ${thisLanguage[0].lose}`;
            }
          }
          if (button.value == num) {
            button.style.borderColor = "blue";
            lets.innerHTML = " ";
            lets.innerHTML = `${thisLanguage[0].draw} ${rPs[0][choise]}`;
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
              lets.innerHTML = `${thisLanguage[0].comp} ${thisLanguage[0].win}`;
            } else {
              lets.innerHTML = " ";
              lets.innerHTML = `${thisLanguage[0].youWin}`;
            }
            document.getElementById("move").style.display = "none";
            lets.style.fontSize = "7vh";
          }
          document.getElementById("div1").style.display = "none";
          document.getElementById("div2").innerHTML = `${localStorage.getItem(
            "name"
          )} <br> ${num1}/${selectedValue}`;
        });
      }
      const res = document.createElement("h1");
      document.body.appendChild(res);
      res.classList.add("res");
      res.innerHTML = `${thisLanguage[0].restart}`;
      res.addEventListener("click", () => {
        window.location.reload();
      });
    });
    select.addEventListener("click", () => {
      thisLanguage.length = 0;
      rPs.length = 0;
      let lan = select[select.selectedIndex].value;
      const a = languagesArray.filter((e) => e.title.includes(lan));
      a.forEach((s) => {
        thisLanguage.push({
          title: s.title,
          roundsMessage: s.roundsMessage,
          comp: s.comp,
          user: s.user,
          letsPlay: s.letsPlay,
          restart: s.restart,
          youWin: s.youWin,
          win: s.win,
          lose: s.lose,
          draw: s.draw,
        });
        rPs.push({
          rock: s.rock,
          paper: s.paper,
          scissors: s.scissors,
        });
      });
    });
  }
};
