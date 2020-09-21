import React from "react"
import { render } from "@testing-library/react"
import { shallow, mount } from 'enzyme';
import App from "./App"

describe("Test case for App", () => {
  let wrapper;
  test("should render without throwing an error", () => {
    wrapper = shallow(<App />);
    expect(
      wrapper
        .find(".App")
        .exists()
    ).toBe(true)
  })
});
