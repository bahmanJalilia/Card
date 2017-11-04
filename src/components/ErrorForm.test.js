import Form from "./Form.vue";
import { mount, shallow } from "vue-test-utils";
import Vue from "vue";

describe("<Form />", () => {
  it("should show massage", () => {
    const wrapper = mount(Form);
    wrapper.setProps({ msg: "test" });
    expect(wrapper.html()).toContain("test");
  });
  it("should show the error", () => {
    const wrapper = mount(Form);
    wrapper.vm.$emit("changeCard", 123);
    expect(wrapper.emitted().changeCard[1]).toEqual([123]);
  });

  /*it("should call method", () => {
    const instance = new Vue(Form);
    instance.changeCard("123");
    expect(instance.$emit[1]).toBe("123");
  });*/
});
