import { units } from "../data.js";
if (!localStorage.getItem("sancharaUser")) {
  window.location = "editme.html";
}

const sancharaUser = JSON.parse(localStorage.getItem("sancharaUser"));


const learn = document.querySelector(".learn");
let left = 50;
let factor = Math.random() < 0.5 ? -1 : 1;

const unitElements = units.map((unit) => {
  let marginTop = 4;
  let totalHeight = 0;

  const unitElement = document.createElement("div");
  unitElement.classList.add("unit");

  const unitHeading = document.createElement("div");
  unitHeading.classList.add("heading");
  unitHeading.innerHTML = `
                    <h1>${unit.unitName}</h1>
                    <h4>${unit.unitDesc}</h4>
                `;
  unitElement.appendChild(unitHeading);

  const unitLessons = document.createElement("ul");
  unitLessons.classList.add("lessons");
  unit.lessons.map((lesson) => {
    const lessonItem = document.createElement("li");
    lessonItem.classList.add("doing");
    lessonItem.style.marginTop = marginTop + "rem";
    lessonItem.style.left = left + "%";

    factor = left === 30 || left === 70 ? factor * -1 : factor;
    left += 10 * factor;

    marginTop += 4 + 4;

    lessonItem.innerHTML = `
                    <a href="lesson.html">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    </a>
                `;

    lessonItem.addEventListener("click", (e) => {
      localStorage.setItem("sancharalesson", JSON.stringify(lesson));
    });
    unitLessons.appendChild(lessonItem);
    totalHeight += 4;
  });

  unitLessons.style.height = marginTop + "rem";
  unitElement.appendChild(unitLessons);

  return unitElement;
});

unitElements.forEach((unitElement) => {
  learn.appendChild(unitElement);
});

document.querySelector(".streak").querySelector("span").innerHTML = sancharaUser.streak;
document.querySelector(".gems").querySelector("span").innerHTML = sancharaUser.gems;
document.querySelector(".xp").querySelector("span").innerHTML = sancharaUser.xp;

