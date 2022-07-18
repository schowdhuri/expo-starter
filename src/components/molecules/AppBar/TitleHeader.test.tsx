import { render, waitFor, fireEvent } from "@testing-library/react-native";
import { AppProviders } from "@atoms/AppProviders";
import { TitleHeader } from "./TitleHeader";

describe("molecules::TitleHeader", () => {
  test("renders without exploding", async () => {
    const { toJSON, getByText, unmount } = render(
      <AppProviders>
        <TitleHeader onGoBack={jest.fn()} title="Title" />
      </AppProviders>
    );

    await waitFor(() => expect(getByText("Title")).toBeDefined());
    expect(toJSON()).toMatchSnapshot();
    unmount();
  });

  test("calls onPress", async () => {
    const spy = jest.fn();
    const { getByTestId, unmount } = render(
      <AppProviders>
        <TitleHeader onGoBack={spy} title="Title" />
      </AppProviders>
    );
    await waitFor(() => expect(getByTestId("title-header")).toBeDefined());
    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.press(getByTestId("title-header"));
    expect(spy).toHaveBeenCalledTimes(1);
    unmount();
  });
});
