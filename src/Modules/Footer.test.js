import React from "react";
import { Router } from 'react-router-dom'
import { act } from "react-dom/test-utils";
import { createMemoryHistory } from 'history'
import { render, } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from "./Footer";

test('full app rendering/navigating', () => {
  
    const history = createMemoryHistory()
    const { } = render(
        <Router history={history}>
          <Footer />
        </Router>
      )
    
    act(() => {
      const goHomeLink = document.querySelector('#home');
      const goFoodLink = document.querySelector('#food');
      const goPlaceLink = document.querySelector('#place');

      // Click it
      goHomeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      goFoodLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      goPlaceLink.dispatchEvent(new MouseEvent("click", { bubbles: true}));

      // Test href
      expect(goHomeLink.getAttribute("href")).toBe('/');
      expect(goFoodLink.getAttribute("href")).toBe('/food');
      expect(goPlaceLink.getAttribute("href")).toBe('/place');

      // Test Link Content
      expect(goHomeLink.textContent).toBe('運営会社');
      expect(goFoodLink.textContent).toBe('お問い合わせ');
      expect(goPlaceLink.textContent).toBe('プライバシーポリシー');
    });
  })