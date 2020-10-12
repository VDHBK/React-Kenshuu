import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Images from "./Images";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render images component from data", () => {
  const Data = {
    type: "Images",
    heading: "トーへ粉の準備",
    images: [
      { src: "fl1.jpg", alt: "flour 1" },
      { src: "fl2.jpg", alt: "flour 2" },
    ],
  };
  act(() => {
    ReactDOM.render(
      <Images rootImgPath={"Img/Food/Tohe/"} data={Data} />,
      container
    );
  });
  const h3 = container.querySelector("h3");
  const imgTags = container.querySelectorAll("img");

  expect(h3.textContent).toBe(Data.heading);
  expect(imgTags.length).toBe(Data.images.length);
  expect(Data.images[0].src).toContain(imgTags[0].getAttribute("src"));
  expect(Data.images[1].src).toContain(imgTags[1].getAttribute("src"));
  expect(Data.images[0].alt).toBe(imgTags[0].alt);
  expect(Data.images[1].alt).toBe(imgTags[1].alt);
});
