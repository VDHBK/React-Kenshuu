import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";
import AllPlaces from "./AllPlaces";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

it("can render AllPlaces component from data", () => {
    const AllPlacesJSON = [
        {
            id: "catba",
            title: "Cát Bà",
            image: "Img/Places/Catba/catba4.jpg",
            time: "2020年06月06日",
            description:
              "グローバルにエコナセイカツを過ごせる、ベトナムでハノイから一番近いビーチリゾートLAN",
          },
          {
            id: "sapa",
            title: "Sapa",
            image: "Img/Places/Sapa/sapa.jpg",
            time: "2020年07月03日",
            description:
              "サパはベトナムの首都ハノイより約250km、標高1,600mの山間部にある高原リゾートです。"
          }
      ];

      act(() => {
        const history = createMemoryHistory();
        ReactDOM.render(<Router history={history}>
            <AllPlaces data={AllPlacesJSON} />
          </Router>, container);
      });
      const aTags = container.querySelectorAll("a");
    
      expect(aTags.length).toBe(AllPlacesJSON.length);
      expect(aTags.textContent).toBe(AllPlacesJSON.id);

    });