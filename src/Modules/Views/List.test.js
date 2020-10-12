import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import List from "./List";


let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render list component from data", () => {
   const Data = {
        type: "List",
        heading: "原材料(0,5 Kg の分)",
        items: [
            "小麦粉　 ：　0,3 Kg",
            "もち米粉 ：　0,2 Kg"
        ]
    };
  act(() => {
    ReactDOM.render(<List data={Data} />, container);
  });
  const h3 = container.querySelector("h3");
  const liTags = container.querySelectorAll("li");
  expect(h3.textContent).toBe(Data.heading);
  expect(liTags.length).toBe(Data.items.length);
  expect(liTags[0].textContent).toBe(Data.items[0]);
  expect(liTags[1].textContent).toBe(Data.items[1]);
});