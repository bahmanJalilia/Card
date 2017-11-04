import Form from "./Form.vue";
import { mount, shallow } from "vue-test-utils";
import Vue from "vue";

describe("<Form />", () => {
  it("should show massage", () => {
    const wrapper = mount(Form);
    wrapper.setProps({ msg: "test" });
    expect(wrapper.html()).toContain("test");
  });
  it("should return value", () => {
    const wrapper = mount(Form);
    wrapper.vm.$emit("changeCard", test);
    expect(wrapper.emitted().changeCard[0]).toEqual([test]);
  });
  it("should call method", () => {
    const wrapper = mount(Form);
    wrapper.vm.$emit("changeExp", test);
    expect(wrapper.emitted().changeExp[0]).toEqual([test]);
  });
  it("should call method", () => {
    const wrapper = mount(Form);
    wrapper.vm.$emit("changeCVC", test);
    expect(wrapper.emitted().changeCVC[0]).toEqual([test]);
  });
  it("should call method", () => {
    const wrapper = mount(Form);
    wrapper.vm.$emit("changeCVC", test);
    expect(wrapper.emitted().changeCVC[0]).toEqual([test]);
  });
  it("should call method", () => {
    const wrapper = mount(Form);
    wrapper.vm.$emit("changeExp", test);
    expect(wrapper.emitted().changeExp[0]).toEqual([test]);
  });
  it("should call method", () => {
    const wrapper = mount(Form);
    wrapper.vm.$emit("submit", test);
    expect(wrapper.emitted().submit[0]).toEqual([test]);
  });
  it("should return 1 error", () => {
    const wrapper = mount(Form);
    wrapper.setProps({ cardError: true });
    expect(wrapper.findAll(".error-status")).toHaveLength(1);
  });
  it("should return 1 error", () => {
    const wrapper = mount(Form);
    wrapper.setProps({ expError: true });
    expect(wrapper.findAll(".error-status")).toHaveLength(1);
  });
  it("should return 1 error", () => {
    const wrapper = mount(Form);
    wrapper.setProps({ cvcError: true });
    expect(wrapper.findAll(".error-status")).toHaveLength(1);
  });
});
