import PriceRow from "./PriceRow.vue";
import { mount, shallow } from "vue-test-utils";
import Vue from "vue";

describe("<PriceRow />", () => {
  it("should show massage", () => {
    const wrapper = mount(PriceRow);
    wrapper.setProps({ label: "test" });
    expect(wrapper.html()).toContain("test");
  });
  it("should show massage", () => {
    const wrapper = mount(PriceRow);
    wrapper.setProps({ amount: "test" });
    expect(wrapper.html()).toContain("test");
  });
  it("should show massage", () => {
    const wrapper = mount(PriceRow);
    wrapper.setProps({ bold: true });
    expect(wrapper.findAll(".price-bold")).toHaveLength(2);
  });
  it("should render component", () => {
    const wrapper = mount(PriceRow);
    expect(wrapper.html()).toContain('<div class="price-row">');
  });
});
