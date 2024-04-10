const reviews = [
    {
        id: 1,
        name: "Sally Zang",
        job: "React Developer",
        img: "https://www.course-api.com/images/people/person-1.jpeg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quas eius neque rerum."
    },
    {
        id: 2,
        name: "Anabella Sinus",
        job: "Web Designer",
        img: "https://www.course-api.com/images/people/person-2.jpeg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quas eius Beatae quas eius neque rerum aperiam alias neque rerum."
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'trainee',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quas eius neque rerum.'

    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the manager',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quas eius neque rerum aperiam alias'
    },
];

const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

addEventListener("DOMContentLoaded", () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

let showPerson = (person) => {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;

    }
    showPerson(currentItem);
});

randomBtn.addEventListener("click", () => {
    console.log("Hello");

    currentItem = Math.floor(Math.random() * reviews.length);

    showPerson(currentItem);
});


