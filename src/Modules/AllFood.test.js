import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import AllFood from "./AllFood";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

it("can render AllFood component from data", () => {
    const AllFoodJSON = [
        {
          id: "tohe",
          title: "Tò he",
          image: "Img/Food/Tohe/tohe.jpg",
          time: "2020年06月06日",
          description:
            "日本の飴細工をご存知でしょうか？ベトナムにも飴細工みたいなものがありますよ。",
        },
        {
          id: "bunbohue",
          title: "ブンボーフェ",
          image: "Img/Food/Bunbohue/bunbohue1.jpg",
          time: "2020年06月20日",
          description:
            "ブンボーフエはベトナム中部都市フエ名物の太いライスヌードルと牛肉を用いた麺料理です。",
        }
      ];

      act(() => {
        const history = createMemoryHistory();
        ReactDOM.render(<Router history={history}>
            <AllFood data={AllFoodJSON} />
          </Router>, container);
      });
      const aTags = container.querySelectorAll("a");
    
      expect(aTags.length).toBe(AllFoodJSON.length);
      expect(aTags.textContent).toBe(AllFoodJSON.id);
    });