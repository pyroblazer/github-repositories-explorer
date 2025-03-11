// @vitest-environment jsdom
import { fireEvent, render, screen } from "@testing-library/react";
import SearchForm from "./SearchForm";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("SearchForm", () => {
  const mockSetQuery = vi.fn();
  const mockOnSearch = vi.fn((e) => e.preventDefault());

  beforeEach(() => {
    mockSetQuery.mockClear();
    mockOnSearch.mockClear();
  });

  it("renders an input and button", () => {
    render(
      <SearchForm query="test" setQuery={mockSetQuery} onSearch={mockOnSearch} />
    );
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("calls setQuery when input changes", () => {
    render(
      <SearchForm query="test" setQuery={mockSetQuery} onSearch={mockOnSearch} />
    );
    const input = screen.getByPlaceholderText("Enter username");
    fireEvent.change(input, { target: { value: "newUser" } });
    expect(mockSetQuery).toHaveBeenCalledWith("newUser");
  });

  it("calls onSearch when form is submitted", () => {
    render(
      <SearchForm query="test" setQuery={mockSetQuery} onSearch={mockOnSearch} />
    );
    const form = screen.getByTestId("search-form");
    fireEvent.submit(form);
    expect(mockOnSearch).toHaveBeenCalled();
  });
});
