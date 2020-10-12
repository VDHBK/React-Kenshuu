import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Description from "./Description";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it("can render Description component from data", () => {
    const Data = {
        type: "Description",
        heading: "ブンボーフェとは",
        paragraphs: [
          "ブンボーフエはベトナム中部都市フエ名物の太いライスヌードルと牛肉を用いた麺料理です。",
          "牛や豚の骨を材料にした味たっぷりのスープが特徴で、味付けにはレモングラスと赤唐辛子を炒めて作った調味料とニョクマム（魚醤）を使用されます。",
          "ブンボーフエは中部の古都フエの名物麺料理ですが、ベトナム全国で朝食、昼食、夕食と時間を問わず広く食べられています。",
        ]
    };
    act(() => {
        ReactDOM.render(<Description data={Data} />, container);
      });
      const h3 = container.querySelector("h3");
      const pTags = container.querySelectorAll("p");
    
      expect(h3.textContent).toBe(Data.heading);
      expect(pTags.length).toBe(Data.paragraphs.length);
      expect(pTags[0].textContent).toBe(Data.paragraphs[0]);
      expect(pTags[1].textContent).toBe(Data.paragraphs[1]);
      expect(pTags[2].textContent).toBe(Data.paragraphs[2]);
      });
    