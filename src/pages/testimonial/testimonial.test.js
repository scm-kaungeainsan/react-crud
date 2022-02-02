import React from "react";
import { shallow } from "enzyme";
import Testimonial from "./testimonial";

describe("Testimonial", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Testimonial />);
    expect(wrapper).toMatchSnapshot();
  });
});
