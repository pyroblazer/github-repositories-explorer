// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import RepositoryItem from "./RepositoryItem";
import { describe, it, expect } from "vitest";

describe("RepositoryItem", () => {
  it("renders repository name, star count and description", () => {
    render(
      <RepositoryItem
        name="Sample Repo"
        star={42}
        description="This is a sample repository."
      />
    );
    expect(screen.getByText("Sample Repo")).toBeInTheDocument();
    expect(screen.getByText("42")).toBeInTheDocument();
    expect(screen.getByText("This is a sample repository.")).toBeInTheDocument();
  });
});
