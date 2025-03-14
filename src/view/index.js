const LACE_SIZE = [32, 24];
const BINDING_HEIGHT = 24;
const LINE_HEIGHT = 16;

function renderLaces() {
  const screenWidth = window.screen.width;

  const laces = document.getElementsByClassName("lace");
  const count = Math.floor((screenWidth - 64) / (LACE_SIZE[0] * 2));

  Array.from(laces).forEach((lace) => {
    lace.replaceChildren();
    for (let x = 0; x < count; x++) {
      console.log(x);
      const child = document.createElement("div");
      child.classList.add("lace-child");
      child.style.width = `${LACE_SIZE[0]}px`;
      child.style.height = `${LACE_SIZE[1]}px`;
      lace.appendChild(child);
    }
  });
}

function renderBinding() {
  const screenHeight = window.screen.height;
  const divs = document.getElementsByClassName("binding");
  const count = Math.floor(screenHeight / (BINDING_HEIGHT * 5));
  Array.from(divs).forEach((div) => {
    div.replaceChildren();
    for (let x = 0; x < count; x++) {
      console.log(x);
      const child = document.createElement("div");
      child.classList.add("binded");
      child.style.height = `${BINDING_HEIGHT[1]}px`;
      div.appendChild(child);
    }
  });
}

function renderLines() {
  const screenHeight = window.screen.height;
  const divs = document.getElementsByClassName("lines");
  const count = Math.floor(screenHeight / (LINE_HEIGHT * 3));
  Array.from(divs).forEach((div) => {
    div.replaceChildren();
    for (let x = 0; x < count; x++) {
      console.log(x);
      const child = document.createElement("div");
      child.classList.add("line");
      child.appendChild(document.createElement("div"));
      child.appendChild(document.createElement("div"));
      child.appendChild(document.createElement("div"));
      child.style.height = `${LINE_HEIGHT / 4}px`;

      div.appendChild(child);
    }
  });
}

export function renderInitialContent() {
  renderLaces();
  renderBinding();
  renderLines();
}

window.addEventListener("resize", renderInitialContent);
