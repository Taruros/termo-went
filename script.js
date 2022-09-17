////////// Animations

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } //else {
    //   entry.target.classList.remove("show");
    // }
  });
});

const hiddenTop = document.querySelectorAll(".hidden-top");
hiddenTop.forEach((el) => observer.observe(el));

const hiddenBottom = document.querySelectorAll(".hidden-bottom");
hiddenBottom.forEach((el) => observer.observe(el));

const hiddenLeft = document.querySelectorAll(".hidden-left");
hiddenLeft.forEach((el) => observer.observe(el));

const hiddenRight = document.querySelectorAll(".hidden-right");
hiddenRight.forEach((el) => observer.observe(el));
