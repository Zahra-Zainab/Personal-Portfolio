// Word Splitting and Animation
const words = document.querySelectorAll(".word");
words.forEach((word) => {
  const letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
const maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

const changeText = () => {
  const currentWord = words[currentWordIndex];
  const nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  nextWord.style.opacity = "1";

  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });

  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

// Hire Me Now Button Functionality
document
  .getElementById("hireMeBtn")
  .addEventListener("click", function (event) {
    // Prevent the default action of the link (scrolling to #contact)
    event.preventDefault();

    // Scroll to the contact section
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });

    // Open the email client after scrolling
    setTimeout(function () {
      window.location.href =
        "mailto:zahrayasin2209@gmail.com?subject=Hire%20Me";
    }, 500); // Adjust delay time as needed
  });

function toggleReadMore() {
  const briefContent = document.getElementById("about-brief");
  const fullContent = document.getElementById("about-full");
  const btn = document.getElementById("read-more-btn");

  if (fullContent.style.display === "none") {
    fullContent.style.display = "block";
    briefContent.style.display = "none";
    btn.textContent = "Read Less";
  } else {
    fullContent.style.display = "none";
    briefContent.style.display = "block";
    btn.textContent = "Read More";
  }
}

function toggleService(service) {
  const briefContent = document.getElementById(`${service}-brief`);
  const fullContent = document.getElementById(`${service}-full`);
  const btn = briefContent.closest(".service-box").querySelector(".btn");

  if (
    fullContent.style.display === "none" ||
    fullContent.style.display === ""
  ) {
    fullContent.style.display = "block";
    briefContent.style.display = "none";
    btn.textContent = "Read Less";
  } else {
    fullContent.style.display = "none";
    briefContent.style.display = "block";
    btn.textContent = "Read More";
  }
}

// Circle Skill
const circles = document.querySelectorAll(".circle");
circles.forEach((elem) => {
  const dots = elem.getAttribute("data-dots");
  const marked = elem.getAttribute("data-percent");
  const percent = Math.floor((dots * marked) / 100);
  let points = "";
  const rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }

  elem.innerHTML = points;

  const pointsMarked = elem.querySelectorAll(".points");

  for (let i = 0; i < percent; i++) {
    pointsMarked[i].classList.add("marked");
  }
});

// Mix it up with Portfolio Section
var mixer = mixitup(".portfolio-gallery");

// Active Menu
const menuLi = document.querySelectorAll("header ul li a");
const sections = document.querySelectorAll("section");

function activeMenu() {
  let len = sections.length;
  while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// Sticky navbar
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 50);
});

// Toggle icon navbar
const menuIcon = document.querySelector("#menu-icon");
const navList = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navList.classList.remove("open");
};

// Parallax
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));

document.querySelector("form").addEventListener("submit", function (event) {
  const name = document.querySelector('input[name="Name"]').value;
  const email = document.querySelector('input[name="Email"]').value;
  const message = document.querySelector('textarea[name="Message"]').value;

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    event.preventDefault(); // Prevent the form from submitting
  }
});



