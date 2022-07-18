import { render, waitFor } from "@testing-library/react-native";
import { Box, Text } from "native-base";
import { AppProviders } from "@atoms/AppProviders";
import { LeftCenterRight } from "./LeftCenterRight";

describe("molecules::LeftCenterRight", () => {
  test("renders without exploding", async () => {
    const { toJSON, getByText, unmount } = render(
      <AppProviders>
        <LeftCenterRight
          LeftComponent={
            <Box flex={2}>
              <Text>LeftComponent</Text>
            </Box>
          }
          CenterComponent={
            <Box flex={3}>
              <Text>CenterComponent</Text>
            </Box>
          }
          RightComponent={
            <Box flex={2} alignItems="flex-end">
              <Text>RightComponent</Text>
            </Box>
          }
        />
      </AppProviders>
    );
    await waitFor(() => expect(getByText("LeftComponent")).toBeDefined());
    expect(toJSON()).toMatchSnapshot();
    unmount();
  });
});
