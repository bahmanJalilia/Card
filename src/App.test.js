import Vue from "vue";
import App from "./App.vue";
import { mount, shallow } from "vue-test-utils";

describe("<App />", () => {
  it("should call changeCard method", () => {
    const instance = new Vue(App);
    instance.changeCard("test");
    expect(instance.card).toBe("test");
  });
  it("should call changeExp method", () => {
    const instance = new Vue(App);
    instance.changeExp("test");
    expect(instance.exp).toBe("test");
  });
  it("should fail after calling submit method", () => {
    const instance = new Vue(App);
    instance.submit();
    expect(instance.expError).toBe(true);
  });
  it("should render component", () => {
    const wrapper = mount(App);
    expect(wrapper.html()).toContain('<div id="app">');
  });
  it("should render msg", () => {
    const wrapper = mount(App);
    wrapper.setData({ msg: "test" });
    expect(wrapper.html()).toContain("test");
  });
  it("should click on submit", () => {
    const wrapper = mount(App);
    wrapper.find(".submit-btn").trigger("click");
    expect(wrapper.findAll(".error-status")).toHaveLength(3);
  });
  it("should appear error in card", () => {
    const instance = new Vue(App);
    instance.submit();
    expect(instance.cardError).toBe(true);
  });
});
