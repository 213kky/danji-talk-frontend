import type { Meta, StoryObj } from "@storybook/react";
import SelectBox from "./SelectBox";

const meta: Meta<typeof SelectBox> = {
  title: "Components/Common/SelectBox",
  component: SelectBox,
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "changed" },
    option: {
      control: "object",
      description: "셀렉트 박스 옵션값 배열 형식으로 입력하세요.",
    },
    isOpen: {
      control: "boolean",
      description: "셀렉트 박스 On Off 값",
    },
    placeholder: {
      control: "text",
      description: "기본값이 되는 default 값",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "SelectBox 컴포넌트는 사용자가 선택할 수 있는 옵션을 제공하는 UI 요소입니다.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof SelectBox>;

export const Default: Story = {
  args: {
    placeholder: "SelectBox",
    isOpen: false,
    option: [
      {
        value: "f",
        label: "Front",
      },
      {
        value: "b",
        label: "BackEnd",
      },
      {
        value: "d",
        label: "Design",
      },
    ],
  },
};
