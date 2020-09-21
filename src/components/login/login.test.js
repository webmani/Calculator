import React from "react"
import Login from "./login"
import { shallow } from 'enzyme';


describe("Test case for testing login", () => {
  let wrapper;
  test("should render without throwing an error", () => {
    wrapper = shallow(<Login />);
    expect(
      wrapper
        .find(".login-form")
        .exists()
    ).toBe(true)
  })

  it("renders a username check", () => {
    wrapper = shallow(<Login />);
    wrapper.find
    expect(shallow(<Login />).find("#username").length).toEqual(1)
  })
  
  it("renders a password input", () => {
    expect(shallow(<Login />).find("#password").length).toEqual(1)
  })

});


