import { fireEvent, render } from "@testing-library/react-native";
import { MyButton } from "./Button";

describe("atoms::Button", () => {
  test("renders without exploding", () => {
    const clickSpy = jest.fn();
    const { toJSON } = render(
      <MyButton onPress={clickSpy} text="Sample button" />
    );
    expect(toJSON()).toMatchSnapshot();
  });

  test("calls onPress", () => {
    const clickSpy = jest.fn();
    const { getByRole } = render(
      <MyButton onPress={clickSpy} text="Sample button" />
    );
    fireEvent.press(getByRole("button"));
    expect(clickSpy).toHaveBeenCalledTimes(1);
  });
});
