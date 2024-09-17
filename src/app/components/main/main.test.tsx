import React from "react";
import renderer from "react-test-renderer";
import Main from "./Main";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import configureStore from "redux-mock-store";
import { initialState } from "@/store/features/playlistSlice";

describe("Компонент Main", () => {
  const mockStore = configureStore([]);
  let store = mockStore({ playlist: initialState });

  test("компонент рендерится", () => {
    const component = renderer.create(
      <Provider store={store}>
        <Main tracks={[]} />
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
