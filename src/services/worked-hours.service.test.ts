import { describe, expect, test } from "@jest/globals";
import { WorkedHoursService } from "./worked-hours.service";
import prismaMock from "@/mocks/prisma.mock";

describe("worked hours service", () => {
  test("worked hours service creation", () => {
    let service: WorkedHoursService | undefined;
    expect(() => (service = new WorkedHoursService(prismaMock))).not.toThrow();
    expect(service).toBeDefined();
  });

  test("add worked hours", async () => {
    const workedHours = 8;
    const date = new Date();
    const service = new WorkedHoursService(prismaMock);

    expect(
      async () => await service.addWorkedHours(workedHours, date)
    ).not.toThrow();
  });
});
