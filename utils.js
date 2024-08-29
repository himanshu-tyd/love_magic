const textList = Array.from(document.querySelectorAll(".text"));


class Rotate {
  init(text) {
    document.addEventListener("DOMContentLoaded", () => {
      const randomRotation = Math.floor(Math.random() * 20) - 10;
      text.style.transform = `rotate(${randomRotation}deg)`;

    });
  }
}

textList.forEach((text) => {
  const t = new Rotate();
  t.init(text);
});


