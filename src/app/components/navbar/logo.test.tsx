import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import Image from "next/image";

test("navburger render ", () => {
  render(<Navbar />);
  const image = screen.getAllByAltText("navburger");
  expect(image.length).toBeGreaterThan(0);
});

describe("Компонент Navbar", () => {
  test("logo render ", () => {
    render(<Navbar />);
    const image = screen.getAllByAltText("logo");
    expect(image.length).toBeGreaterThan(0);
  });
  test("navburger render ", () => {
    render(<Navbar />);
    const image = screen.getAllByAltText("navburger");
    expect(image.length).toBeGreaterThan(0);
  });
});
