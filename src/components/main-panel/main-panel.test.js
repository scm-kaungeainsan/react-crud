import React from "react";
import { shallow } from "enzyme";
import MainPanel from "./main-panel";

describe("MainPanel", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MainPanel />);
    expect(wrapper).toMatchSnapshot();
  });
});
