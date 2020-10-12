import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Article from "./Article";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it("can render article component from data", () => {
    const Data = {
        type: "Article",
        heading: "人気の食べ物",
        paragraphs: [
            {image: {src: "catba10.png", alt: ""},text: "カブトガニ"},
            {image: {src: "catba11.jpg", alt: ""},text: "ジオダック"}
              ]
    };
    act(() => {
        ReactDOM.render(<Article rootImgPath={"Img/Places/Catba/"} data={Data} />, container);
      });
      const h3 = container.querySelector("h3");
      const imgTags = container.querySelectorAll("img");
      const pTags = container.querySelectorAll("p");
    
      expect(h3.textContent).toBe(Data.heading);
      expect(pTags.length).toBe(Data.paragraphs.length);
      expect(imgTags.length).toBe(Data.paragraphs.length);
      expect(Data.paragraphs[0].image.src).toContain(imgTags[0].getAttribute('src'));
      expect(Data.paragraphs[1].image.src).toContain(imgTags[1].getAttribute('src'));
      expect(Data.paragraphs[0].image.alt).toBe(imgTags[0].alt);
      expect(Data.paragraphs[1].image.alt).toBe(imgTags[1].alt);
      expect(pTags[0].text).toBe(Data.paragraphs[0].textContent);
      expect(pTags[1].text).toBe(Data.paragraphs[1].textContent);
    });
    