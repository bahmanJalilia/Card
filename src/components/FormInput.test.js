import FormInput from "./FormInput.vue";
import { mount, shallow } from "vue-test-utils";
import Vue from "vue";

describe("<FormInput />", () => {
  it("should show massage", () => {
    const wrapper = mount(FormInput);
    wrapper.setProps({ placeholder: "test" });
    expect(wrapper.html()).toContain("test");
  });
  it("should return 1", () => {
    const wrapper = mount(FormInput);
    wrapper.setProps({ inline: true });
    expect(wrapper.findAll(".inline-input")).toHaveLength(1);
  });
  it("should return 1", () => {
    const wrapper = mount(FormInput);
    wrapper.setProps({ error: true });
    expect(wrapper.findAll(".error-status")).toHaveLength(1);
  });
  it("should return value", () => {
    const wrapper = mount(FormInput);
    wrapper.vm.$emit("changeData", 123);
    expect(wrapper.emitted().changeData[0]).toEqual([123]);
  });
});
