const createArticleForm = document.getElementById("createArticleForm");
const input = document.getElementById("imageUpload");

createArticleForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const heading = document.getElementById("heading").value;
  const content = document.getElementById("content").value;
  const file = input.files[0];
  const category = document.getElementById("category").value;

  if (!category) {
    alert("Please select a category");
    return;
  }

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    const imageDataUrl = reader.result;

    const article = {
      imageUpload: imageDataUrl,
      heading,
      content,
    };

    const storageKey = `articles-${category}`;

    let articles = JSON.parse(localStorage.getItem(storageKey)) || [];
    articles.push(article);
    localStorage.setItem(storageKey, JSON.stringify(articles));

    createArticleForm.reset();
    alert("Article created successfully!");
  };
});

// Toggle navigation menu on smaller screens
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Theme toggle
const themeButton = document.getElementById("themeButton");
const body = document.querySelector("body");

themeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  themeButton.querySelector("i").classList.toggle("fa-moon");
  themeButton.querySelector("i").classList.toggle("fa-sun");
});

// Show "About Us" modal
const aboutLinks = document.querySelectorAll(".footer-section a");

aboutLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("aboutModal").style.display = "block";
  });
});

// Close "About Us" modal
const aboutModalCloseBtn = document
  .getElementById("aboutModal")
  .querySelector(".close");

aboutModalCloseBtn.addEventListener("click", () => {
  document.getElementById("aboutModal").style.display = "none";
});

// Close modal when clicked outside
window.addEventListener("click", (event) => {
  if (event.target == document.getElementById("aboutModal")) {
    document.getElementById("aboutModal").style.display = "none";
  }
});
