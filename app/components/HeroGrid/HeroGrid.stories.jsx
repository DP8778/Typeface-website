import HeroGrid from "./index";
import Navbar from "../Navbar";

const meta = {
  title: "Sections/HeroGrid",
  component: HeroGrid,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "imageFocus"],
    },
  },
  decorators: [
    (Story) => (
      <>
        <Navbar />
        <Story />
      </>
    ),
  ],
};

export default meta;

export const Default = {
  args: {
    variant: "default",
  },
};

export const ImageFocus = {
  args: {
    variant: "imageFocus",
  },
};
