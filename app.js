const daily = document.getElementById("daily");
const monthly = document.getElementById("monthly");
const weekly = document.getElementById("weekly");

let hours = null;
async function getData() {
  const data = await fetch("data.json");
  const dataHours = await data.json();
  hours = dataHours;
}

getData().then(() => console.log(hours));

daily.addEventListener("click", (e) => {
  dailyLoad();
});

function dailyLoad() {
  weekly.classList.remove("selected");
  monthly.classList.remove("selected");
  if (!daily.classList.contains("selected")) daily.classList.add("selected");
  {
    daily.classList.add("selected");
    const cards = document.querySelectorAll(".main-container-cards-card");

    cards.forEach((element, index) => {
      const ele1 = element.querySelector(
        ".main-container-cards-card-background-content-hours"
      );
      ele1.innerText = `${hours[index].timeframes.daily.current}hrs`;
      const ele2 = element.querySelector(
        ".main-container-cards-card-background-content-bottom"
      );
      ele2.innerText = `Yesterday - ${hours[index].timeframes.daily.previous}hrs`;
    });
  }
}

weekly.addEventListener("click", (e) => {
  daily.classList.remove("selected");
  monthly.classList.remove("selected");
  if (!weekly.classList.contains("selected")) weekly.classList.add("selected");
  {
    weekly.classList.add("selected");
    const cards = document.querySelectorAll(".main-container-cards-card");

    cards.forEach((element, index) => {
      const ele1 = element.querySelector(
        ".main-container-cards-card-background-content-hours"
      );
      ele1.innerText = `${hours[index].timeframes.weekly.current}hrs`;
      const ele2 = element.querySelector(
        ".main-container-cards-card-background-content-bottom"
      );
      ele2.innerText = `Last week - ${hours[index].timeframes.weekly.previous}hrs`;
    });
  }
});

monthly.addEventListener("click", (e) => {
  daily.classList.remove("selected");
  weekly.classList.remove("selected");
  if (!monthly.classList.contains("selected")) {
    monthly.classList.add("selected");
    const cards = document.querySelectorAll(".main-container-cards-card");

    cards.forEach((element, index) => {
      const ele1 = element.querySelector(
        ".main-container-cards-card-background-content-hours"
      );
      ele1.innerText = `${hours[index].timeframes.monthly.current}hrs`;
      const ele2 = element.querySelector(
        ".main-container-cards-card-background-content-bottom"
      );
      ele2.innerText = `Last month - ${hours[index].timeframes.monthly.previous}hrs`;
    });
  }
});

window.addEventListener("load", (e) => setTimeout(dailyLoad, 300));
