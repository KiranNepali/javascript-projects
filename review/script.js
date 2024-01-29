// local reviews array data
const reviews = [
  {
    id: 1,
    name: "John Doe",
    job: "Software Engineer",
    img: "images/user1.png",
    text: "Great service and friendly staff! I would highly recommend this place.",
  },
  {
    id: 2,
    name: "Alice Smith",
    job: "Graphic Designer",
    img: "images/user2.png",
    text: "The atmosphere is cozy, and the food is delicious. Will definitely come back!",
  },
  {
    id: 3,
    name: "Bob Johnson",
    job: "Marketing Specialist",
    img: "images/user3.png",
    text: "Fantastic experience! The prices are reasonable, and the quality is top-notch.",
  },
  {
    id: 4,
    name: "Emily Brown",
    job: "Project Manager",
    img: "images/user4.png",
    text: "Quick and efficient service. The staff is knowledgeable and attentive.",
  },
  {
    id: 5,
    name: "Michael Taylor",
    job: "Chef",
    img: "images/user5.png",
    text: "Lovely ambiance and a diverse menu. A perfect spot for any occasion.",
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const randomBtn = document.querySelector(".random");

let currentItem = 0;

// load beginning review
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson(currentItem) {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.author;
  job.textContent = item.job;
  text.textContent = item.text;
}

// show next review btn
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson(currentItem);
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// get random review from randomBtn
randomBtn.addEventListener("click", function () {
  const currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
