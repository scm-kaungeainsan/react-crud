import React from "react";
import { shallow } from "enzyme";
import Blog from "./blog";

describe("Blog", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Blog />);
    expect(wrapper).toMatchSnapshot();
  });
});
