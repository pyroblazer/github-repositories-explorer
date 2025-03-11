// @vitest-environment jsdom
import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "./Accordion";
import { describe, it, expect } from "vitest";

describe("Accordion", () => {
  it("renders title and toggles content visibility", () => {
    render(<Accordion title="Test Accordion">Content goes here</Accordion>);
    expect(screen.getByText("Test Accordion")).toBeInTheDocument();

    expect(screen.queryByText("Content goes here")).toBeNull();

    fireEvent.click(screen.getByText("Test Accordion"));
    expect(screen.getByText("Content goes here")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Test Accordion"));
    expect(screen.queryByText("Content goes here")).toBeNull();
  });
});
