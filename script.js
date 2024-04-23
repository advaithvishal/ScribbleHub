$(document).ready(function () {
  // Toggle navigation menu on smaller screens
  $(".nav-toggle").click(function () {
    $(".nav-menu").toggleClass("active");
  });

  // Initialize featured article slider
  $(".article-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".prev-btn"),
    nextArrow: $(".next-btn"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".category-grid").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".categories .prev-btn"),
    nextArrow: $(".categories .next-btn"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Initialize popular articles slider
  $(".article-grid").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".popular-articles .prev-btn"),
    nextArrow: $(".popular-articles .next-btn"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Show modal and populate content when clicking on "Read More" button
  $(".read-more").click(function () {
    const articleTitle = $(this).siblings("h3").text();
    const articleImage = $(this).siblings("img").attr("src");
    const articleDescription = $(this).parent().data('description');

    $("#modalImage").attr("src", articleImage);
    $("#modalHeading").text(articleTitle);
    $("#modalContent").text(articleDescription);
    $("#articleModal").show();
  });

  // Close modal
  $(".close").click(function () {
    $("#articleModal").hide();
  });

  // Close modal when clicked outside
  $(window).click(function (event) {
    if (event.target == $("#articleModal")[0]) {
      $("#articleModal").hide();
    }
  });
});

// Show "About Us" modal
$(".footer-section a").click(function (event) {
  event.preventDefault(); // Prevent default link behavior
  $("#aboutModal").show();
});

// Close "About Us" modal
$("#aboutModal .close").click(function () {
  $("#aboutModal").hide();
});

// Close modal when clicked outside
$(window).click(function (event) {
  if (event.target == $("#aboutModal")[0]) {
    $("#aboutModal").hide();
  }
});

// Theme toggle
const themeButton = $("#themeButton");
const body = $("body");

themeButton.click(function () {
  body.toggleClass("dark-mode");
  $(this).find("i").toggleClass("fa-moon fa-sun");
});

// Smooth scroll to sections
const headerLinks = document.querySelectorAll(".nav-menu a");

headerLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
