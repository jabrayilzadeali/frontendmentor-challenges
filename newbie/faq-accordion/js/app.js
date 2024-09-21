const accordionsData = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer: `
      Frontend Mentor offers realistic coding challenges to help developers improve their 
      frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
      all levels and ideal for portfolio building.
    `,
  },
  {
    question: "Is Frontend Mentor free?",
    answer: `
      Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
      option providing access to a range of projects suitable for all skill levels.
    `,
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: `
      Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
      way to showcase your skills to potential employers!
    `,
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer: `
      The best place to get help is inside Frontend Mentor's Discord community. There's a help 
      channel where you can ask questions and seek support from other community members.
    `,
  },
];

class View {
  $ = {};

  constructor() {
    this.$.accordions = document.querySelector("[data-accordions]");
    this.$.accordionsUl = document.querySelector("[data-accordions]");
    this.dataset = accordionsData;
  }

  addQuestions() {
    const el = accordionsData.map(({ question, answer }, index) => {
      return `
        <li class="border-bottom" tabindex="0">
          <div data-accordion class="my-1 flex justify-between items-center gap-3">
            <h3 class="text-md-sm">${question}</h3>
            <img data-img class="${index === 0 && 'hidden'}" src="assets/images/icon-plus.svg" alt="">
            <img data-img class="${index !== 0 && 'hidden'}" src="assets/images/icon-minus.svg" alt="">
          </div>

          <div data-answer class="grid grid-rows-0 ${index === 0 && 'grid-rows-1'}">
            <div class="overflow-hidden">
              <p class="text-grayish-purple">
                ${answer}
              </p>
            </div>
          </div>
        </li>
      `;
    });
    
    const htmlString = el.join('')
    this.$.accordionsUl.innerHTML += htmlString;
  }
}

const view = new View();

view.addQuestions();

// view.$.accordions.forEach((accordion) => {
//   accordion.addEventListener("click", () => {
//     const images = accordion.querySelectorAll("[data-img]");
//     images.forEach((image) => image.classList.toggle("hidden"));
//     const answer = accordion.querySelector("[data-answer]");
//     answer.classList.toggle("grid-rows-1");
//   });
// });

view.$.accordions.addEventListener("click", e => {
  const accordionElement = e.target.closest("[data-accordion]")
  if (accordionElement) {
    const images = accordionElement.querySelectorAll("[data-img]");
    images.forEach((image) => image.classList.toggle("hidden"));
    const answer = accordionElement.parentElement.querySelector("[data-answer]");
    answer.classList.toggle("grid-rows-1");
  }
})

view.$.accordions.addEventListener("keydown", e => {
  if (e.key === ' ') {
    const images = e.target.querySelectorAll("[data-img]");
    images.forEach((image) => image.classList.toggle("hidden"));
    const answer = e.target.querySelector("[data-answer]");
    answer.classList.toggle("grid-rows-1");
  }
})