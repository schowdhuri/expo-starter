import { render, waitFor, fireEvent } from "@testing-library/react-native";
import { AppProviders } from "@atoms/AppProviders";
import { AppBar } from ".";

describe("molecules::AppBar", () => {
  test("renders without exploding with variant title", async () => {
    const { toJSON, getByText, unmount } = render(
      <AppProviders>
        <AppBar title="Title" variant="title" />
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
        <AppBar title="Title" variant="title" onGoBack={spy} />
      </AppProviders>
    );
    await waitFor(() => expect(getByTestId("title-header")).toBeDefined());
    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.press(getByTestId("title-header"));
    expect(spy).toHaveBeenCalledTimes(1);
    unmount();
  });
});
