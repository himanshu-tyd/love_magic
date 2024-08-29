let highestZ = 1;
let rotate = 0;

class Paper {
  holdingPaper = false;

  preMouseX = 0;
  preMouseY = 0;

  startX = 0;
  startY = 0;

  init(paper) {
    document.addEventListener("DOMContentLoaded", () => {
      let randomRotate = Math.floor(Math.random() * 20) - 10;
      rotate = randomRotate;
      paper.style.transform = `rotate(${rotate}deg)`;
    });

    // Combined event listener for mousedown and touchstart
    const startDrag = (e) => {
      this.holdingPaper = true;

      const event = e.touches ? e.touches[0] : e; // Handle touch event or mouse event
      this.startX = event.clientX;
      this.startY = event.clientY;

      this.preMouseX = parseInt(paper.style.transform.split('(')[1]?.split('px')[0]) || 0;
      this.preMouseY = parseInt(paper.style.transform.split(',')[1]?.split('px')[0]) || 0;

      paper.style.zIndex = highestZ;
      highestZ += 1;
    };

    // Combined event listener for mousemove and touchmove
    const dragging = (e) => {
      if (!this.holdingPaper) return;

      const event = e.touches ? e.touches[0] : e; // Handle touch event or mouse event
      const moveX = event.clientX - this.startX;
      const moveY = event.clientY - this.startY;

      const currentX = this.preMouseX + moveX;
      const currentY = this.preMouseY + moveY;

      paper.style.transform = `translate(${currentX}px, ${currentY}px)`;
    };

    // Combined event listener for mouseup and touchend
    const endDrag = () => {
      this.holdingPaper = false;
    };

    paper.addEventListener("mousedown", startDrag);
    paper.addEventListener("touchstart", startDrag);

    document.addEventListener("mousemove", dragging);
    document.addEventListener("touchmove", dragging);

    document.addEventListener("mouseup", endDrag);
    document.addEventListener("touchend", endDrag);
  }
}

const papers = Array.from(document.querySelectorAll(".papers"));

papers.forEach((paper) => {
  const p = new Paper();
  p.init(paper);
});
