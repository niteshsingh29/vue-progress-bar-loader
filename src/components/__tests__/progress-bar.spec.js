import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ProgressBar from "./../.././components/progress-bar.vue";
import STATIC_VALUES from "../../enums/static.enum";

describe("Progress bar loader", () => {
  it("renders properly", () => {
    const wrapper = mount(ProgressBar, {
      props: {
        height: {
          type: String,
          default: STATIC_VALUES.HEIGHT,
        },
        width: {
          type: String,
          default: STATIC_VALUES.WIDTH,
        },
        backgroundColor: {
          type: String,
          default: STATIC_VALUES.BACKGROUNDCOLOR,
        },
        borderRadius: {
          type: String,
          default: STATIC_VALUES.BORDERADIUS,
        },
        loading: {
          type: Boolean,
          default: STATIC_VALUES.LOADING,
        },
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
