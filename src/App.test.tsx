// @vitest-environment jsdom
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { beforeAll, beforeEach, afterEach, describe, it, vi, expect } from "vitest";

beforeAll(() => {
  HTMLFormElement.prototype.submit = () => {};
});

beforeEach(() => {
  vi.spyOn(globalThis, "fetch").mockImplementation((url: RequestInfo | URL, _init?: RequestInit) => {
    if (typeof url === "string" && url.includes("search/users")) {
      return new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              ok: true,
              json: () =>
                Promise.resolve({
                  total_count: 1,
                  incomplete_results: false,
                  items: [
                    {
                      login: "testuser",
                      id: 1,
                      repos_url: "https://api.github.com/users/testuser/repos",
                      score: 1,
                    },
                  ],
                }),
            } as Response),
          50
        )
      );
    } else if (typeof url === "string" && url.includes("users/testuser/repos")) {
      return new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              ok: true,
              json: () =>
                Promise.resolve([
                  {
                    id: 101,
                    name: "Repo1",
                    stargazers_count: 10,
                    description: "Repo description",
                  },
                ]),
            } as Response),
          50
        )
      );
    }
    return Promise.reject(new Error("Unknown URL"));
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("App integration test", () => {
  it("searches for users and displays repositories", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText("Enter username");
    const button = screen.getByRole("button", { name: /search/i });

    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(button);

    expect(await screen.findByText(/loading/i)).toBeInTheDocument();

    const resultText = await screen.findByText(/Showing results for "test"/i);
    expect(resultText).toBeInTheDocument();

    fireEvent.click(screen.getByText("testuser"));

    expect(screen.getByText("testuser")).toBeInTheDocument();
    expect(screen.getByText("Repo1")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Repo description")).toBeInTheDocument();
  });
});
