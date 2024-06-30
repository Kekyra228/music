import { formatDuration } from "./formatDuration";

describe("Форматирование", () => {
  it("должен корректно форматировать число в строку", () => {
    const result = formatDuration(6);
    expect(result).toBe("00:06");
  });

  it("должен корректно форматировать ноль в строку", () => {
    const result = formatDuration(0);
    expect(result).toBe("00:00");
  });
});
