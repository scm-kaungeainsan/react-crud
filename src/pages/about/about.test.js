import React from "react";
import { shallow } from "enzyme";
import About from "./about";

describe("About", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<About />);
    expect(wrapper).toMatchSnapshot();
  });
});
