import { describe, expect, it } from "vitest";
import { allowContactRequest } from "./contact-rate-limit";

describe("allowContactRequest", () => {
  it("allows four requests and blocks the next one in a day", () => {
    const headers = new Headers({ "x-forwarded-for": "test-client-rate-cap" });

    for (let request = 0; request < 4; request += 1) {
      expect(allowContactRequest(headers, 1_000_000)).toBe(true);
    }
    expect(allowContactRequest(headers, 1_000_000)).toBe(false);
  });

  it("allows requests again after the rate-limit window expires", () => {
    const headers = new Headers({ "x-forwarded-for": "test-client-window-reset" });
    for (let request = 0; request < 4; request += 1) {
      allowContactRequest(headers, 2_000_000);
    }

    expect(allowContactRequest(headers, 2_000_000 + 24 * 60 * 60 * 1000 + 1)).toBe(true);
  });
});
