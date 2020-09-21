import React from "react"
import Calculator from "./calculator"
import { shallow } from 'enzyme';

describe("Test case for Calculator", () => {
  let wrapper;
  test("should render without throwing an error", () => {
    wrapper = shallow(<Calculator />);
    expect(
      wrapper
        .find(".calculate-form")
        .exists()
    ).toBe(true)
  })

  it("renders a first input value", () => {
    wrapper = shallow(<Calculator />);
    wrapper.find
    expect(shallow(<Calculator />).find("#number1").length).toEqual(1)
  })
  
  it("renders a second input value", () => {
    expect(shallow(<Calculator />).find("#number2").length).toEqual(1)
  })

  function sum(a, b) {
      return a + b;
  }
  function minus(a, b) {
    return a - b;
 }

 function multiply(a, b) {
    return a * b;
 }

 function divide(a, b) {
    return a / b;
 }
 it('Testting sum', () => {
     expect(sum(2,2)).toBe(4);
 })

 it('Testting minus', () => {
    expect(minus(5,3)).toBe(2);
})

it('Testting multiply', () => {
    expect(multiply(2,2)).toBe(4);
})

it('Testting divide', () => {
    expect(divide(2,2)).toBe(1);
})

});


