import Vue from "vue";
import ErrorMsg from "./ErrorMsg.vue";
import { mount } from "vue-test-utils";

describe("<ErrorMsg />", () => {
  it("should show massage", () => {
    const wrapper = mount(ErrorMsg);
    wrapper.setProps({ msg: "test" });
    expect(wrapper.html()).toContain("test");
  });
  it("should render component", () => {
    const wrapper = mount(ErrorMsg);
    expect(wrapper.html()).toContain('<pre class="error">');
  });
});
