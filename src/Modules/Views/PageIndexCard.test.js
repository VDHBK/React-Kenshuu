import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import PageIndexCard from './PageIndexCard';
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

let container;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it("Card Info render", () => {

    const Data =
    {
        id: "tohe",
        title: "Tò he",
        image: "Img/Food/Tohe/tohe.jpg",
        time: "2020年06月06日",
        description:
            "日本の飴細工をご存知でしょうか？ベトナムにも飴細工みたいなものがありますよ。",
    };

    act(() => {
        const history = createMemoryHistory();
        ReactDOM.render(<Router history={history}><PageIndexCard parentPath={"food"} data={Data} /></Router>, container);
    });


    const spanTags = container.querySelectorAll("span");
    const imgTag = container.querySelector("img");
    const pTag = container.querySelector("p");


    expect(spanTags[1].textContent).toBe(Data.title);
    expect(spanTags[0].textContent).toBe(Data.time);
    expect(pTag.textContent).toBe(Data.description);
    expect(Data.image).toContain(imgTag.getAttribute('src'));

});