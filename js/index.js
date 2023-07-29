const units = [
  {
    unitName: "Unit 1",
    unitDesc: "basic phrases",
    lessons: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 3", "Lesson 3", "Lesson 3", "Lesson 3"],
  },
  {
    unitName: "Unit 2",
    unitDesc: "basic phrases",
    lessons: ["Lesson A", "Lesson B", "Lesson B", "Lesson B", "Lesson B", "Lesson B", "Lesson B", "Lesson B", "Lesson B", "Lesson B", "Lesson B", "Lesson B"],
  },
];

const learn = document.querySelector(".learn");
let left = 50;
let factor = Math.random() < 0.5 ? -1 : 1;

const unitElements = units.map((unit) => {
  let marginTop = 2;
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
    
    factor = left === 30||left===70? factor*-1:factor;
    left += 10 * factor;

    marginTop += 2 + 4;

    lessonItem.innerHTML = `
                    <a href="lesson">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                    </a>
                `;
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
