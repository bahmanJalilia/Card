import Header from "./Header.vue";
import { mount, shallow } from "vue-test-utils";
import Vue from "vue";

describe("<Header />", () => {
  it("should render component", () => {
    const wrapper = mount(Header);
    expect(wrapper.html()).toContain('<div class="header">');
  });
});
