import React from "react";
import renderer from "react-test-renderer";
import Main from "./Main";
import { Provider } from "react-redux";
import "@testing-library/jest-dom/extend-expect";

describe("Компонент Main", () => {
  let store: any;

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
