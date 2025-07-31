import {
  formatCurrency,
  capitalize,
  truncate,
  isValidEmail,
  debounce,
} from "../helpers";

describe("Utility Functions", () => {
  describe("formatCurrency", () => {
    it("formats USD currency correctly", () => {
      expect(formatCurrency(1234.56)).toBe("$1,234.56");
      expect(formatCurrency(0)).toBe("$0.00");
      expect(formatCurrency(1000000)).toBe("$1,000,000.00");
    });

    it("formats different currencies", () => {
      expect(formatCurrency(1234.56, "EUR")).toBe("€1,234.56");
      expect(formatCurrency(1234.56, "GBP")).toBe("£1,234.56");
    });

    it("handles negative numbers", () => {
      expect(formatCurrency(-1234.56)).toBe("-$1,234.56");
    });
  });

  describe("capitalize", () => {
    it("capitalizes the first letter of a string", () => {
      expect(capitalize("hello")).toBe("Hello");
      expect(capitalize("world")).toBe("World");
      expect(capitalize("javascript")).toBe("Javascript");
    });

    it("handles empty string", () => {
      expect(capitalize("")).toBe("");
    });

    it("handles single character", () => {
      expect(capitalize("a")).toBe("A");
    });

    it("handles already capitalized string", () => {
      expect(capitalize("Hello")).toBe("Hello");
    });
  });

  describe("truncate", () => {
    it("truncates strings longer than maxLength", () => {
      expect(truncate("Hello World", 5)).toBe("Hello...");
      expect(truncate("This is a long string", 10)).toBe("This is a ...");
    });

    it("returns original string if shorter than maxLength", () => {
      expect(truncate("Hello", 10)).toBe("Hello");
      expect(truncate("", 5)).toBe("");
    });

    it("handles exact length", () => {
      expect(truncate("Hello", 5)).toBe("Hello");
    });
  });

  describe("isValidEmail", () => {
    it("validates correct email addresses", () => {
      expect(isValidEmail("test@example.com")).toBe(true);
      expect(isValidEmail("user.name@domain.co.uk")).toBe(true);
      expect(isValidEmail("user+tag@example.org")).toBe(true);
    });

    it("rejects invalid email addresses", () => {
      expect(isValidEmail("invalid-email")).toBe(false);
      expect(isValidEmail("test@")).toBe(false);
      expect(isValidEmail("@example.com")).toBe(false);
      expect(isValidEmail("test@.com")).toBe(false);
      expect(isValidEmail("")).toBe(false);
    });
  });

  describe("debounce", () => {
    beforeEach(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it("debounces function calls", () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 1000);

      // Call the function multiple times
      debouncedFn("test1");
      debouncedFn("test2");
      debouncedFn("test3");

      // Function should not be called immediately
      expect(mockFn).not.toHaveBeenCalled();

      // Fast forward time
      jest.advanceTimersByTime(1000);

      // Function should be called once with the last arguments
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFn).toHaveBeenCalledWith("test3");
    });

    it("resets timer on subsequent calls", () => {
      const mockFn = jest.fn();
      const debouncedFn = debounce(mockFn, 1000);

      debouncedFn("test1");

      // Advance time but not enough to trigger
      jest.advanceTimersByTime(500);
      expect(mockFn).not.toHaveBeenCalled();

      // Call again, should reset timer
      debouncedFn("test2");
      jest.advanceTimersByTime(500);
      expect(mockFn).not.toHaveBeenCalled();

      // Advance to trigger
      jest.advanceTimersByTime(500);
      expect(mockFn).toHaveBeenCalledWith("test2");
    });
  });
});
