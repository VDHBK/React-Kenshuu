import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Header from "./ArticleHeader";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it("can render articleHeader component from data", () => {
    const Data = {
        title: "BANH CAY LANG NGUYEN!",
        subtitle: "Vietnamese Culture",
        text: "July 06, 2020",
        image: { src: "banh-cay-header.jpg", alt: "Banh Cay" },
    };
    act(() => {
        ReactDOM.render(<Header rootImgPath={"Img/Food/Banhcay/"} data={Data} />, container);
      });
      const h2 = container.querySelector("h2");
      const spanTag = container.querySelector("span");
      const pTag = container.querySelector("address");
      const imgTag = container.querySelector("img");
      
    
      expect(h2.textContent).toBe(Data.title);
      expect(spanTag.textContent).toBe(Data.subtitle);
      expect(pTag.textContent).toBe(Data.text);
     
      expect(Data.image.src).toContain(imgTag.getAttribute("src"));
      expect(Data.image.alt).toBe(imgTag.alt);
    });
    