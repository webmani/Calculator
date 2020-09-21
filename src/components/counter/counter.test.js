import React from "react"
import Counter from "./Counter"
import { shallow } from 'enzyme';

describe("Test case for Counter", () => {
  let wrapper;
  test("should render without throwing an error", () => {
    wrapper = shallow(<Counter />);
    expect(
      wrapper
        .find(".calculate-form")
        .exists()
    ).toBe(true)
  })

});
