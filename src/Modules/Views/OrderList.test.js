import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import OrderList from "./OrderList";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render a orderlist component from data", () => {
    const SonDoong = {
        type: "OrderList",
        heading: "重要な情報",
        items: [
            "4日間の探索、3泊のキャンプ。",
            "年1回の洪水のため、1月から8月にのみ利用できます。"
        ]
    }
    act(() => {
      ReactDOM.render(<OrderList data={SonDoong} />, container);
    });
    const h3 = container.querySelector("h3");
    const lis = container.querySelectorAll("li");

    expect(h3.textContent).toBe(SonDoong.heading);
    expect(lis.length).toBe(SonDoong.items.length);
    expect(lis[0].textContent).toBe(SonDoong.items[0]);
    expect(lis[1].textContent).toBe(SonDoong.items[1]);
  });
  