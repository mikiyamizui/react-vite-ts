import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { App } from "./App";

const meta: Meta = {
  component: App,
};
export default meta;

export const Example: StoryObj<typeof App> = {};

export const Test1: StoryObj<typeof App> = {
  name: "初期値が0であること",
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    expect(button).toHaveTextContent("0");
  },
};

export const Test2: StoryObj<typeof App> = {
  name: "クリックすると値が1増えること",
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    expect(button).toHaveTextContent("1");
  },
};
