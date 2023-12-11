const elements = document.querySelectorAll("#txt");

elements.forEach(txt => {
  window.addEventListener('scroll', e => {
    if (pageYOffset >= 220) {
      txt.classList.add("op");
    } else {
      txt.classList.remove("op");
    }
  });
});
