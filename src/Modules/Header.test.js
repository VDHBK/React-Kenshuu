import React from "react";
import { Router } from 'react-router-dom'
import { act } from "react-dom/test-utils";
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from "./Header";

test('full app rendering/navigating', () => {
  // Test href
    const history = createMemoryHistory()
    const { getByText } = render(
        <Router history={history}>
          <Header />
        </Router>
      )
    
    expect(history.location.pathname).toBe("/");

    fireEvent.click(getByText(/food/i));
    expect(history.location.pathname).toBe("/food");

    fireEvent.click(getByText(/place/i));
    expect(history.location.pathname).toBe("/place");

    // Test Link Content
    act(() => {
      const goHomeLink = document.querySelector('#home');
      const goFoodLink = document.querySelector('#food');
      const goPlaceLink = document.querySelector('#place');

      // Click it
      goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      goFoodLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      goPlaceLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));

      // Check correct link content showed up
      expect(goHomeLink.textContent).toBe('Home');
      expect(goFoodLink.textContent).toBe('Food');
      expect(goPlaceLink.textContent).toBe('Places');
    });
  })
  