$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Android Developer", "Software Developer", "Java Developer", "Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Android Developer", "Software Developer", "Java Developer", "Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      //   1000: {
      //     items: 3,
      //     nav: false,
      //   },
    },
  });

  // Get references to the select and button elements
  const cvSelect = document.getElementById("cvSelect");
  const downloadBtn = document.getElementById("downloadBtn");

  // Listen for changes to the select element
  cvSelect.addEventListener("change", () => {
    // Enable the download button if a role is selected
    if (cvSelect.value) {
      downloadBtn.disabled = false;
    } else {
      downloadBtn.disabled = true;
    }
  });

  // Listen for clicks on the download button
  downloadBtn.addEventListener("click", () => {
    // Get the selected role
    const role = cvSelect.value;

    // Redirect the user to the selected CV's download link
    switch (role) {
      case "android":
        window.open("https://drive.google.com/file/d/1o_ITPcR9QIfBu3a1DShUGMy9UfWbe1Kv/view?usp=share_link", "_blank");
        break;
      case "software":
        window.open("https://drive.google.com/file/d/1GgNBP5NbY0C2nnp-xSN3H2Tb8QWbeFcs/view?usp=share_link", "_blank");
        break;
      case "java":
        window.open("https://drive.google.com/file/d/1bt_aEOZvvBIzsw7Xq_m9lRDgjUyjlh0c/view?usp=share_link", "_blank");
        break;
      default:
        console.error("Invalid role selected");
    }
  });
});
