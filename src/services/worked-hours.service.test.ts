import { expect, test } from "@jest/globals";
import { WorkedHoursService } from "./worked-hours.service";
import prismaMock from "@/mocks/prisma.mock";

test("worked hours service creation", () => {
  let service: WorkedHoursService | undefined;
  expect(() => (service = new WorkedHoursService(prismaMock))).not.toThrow();
  expect(service).toBeDefined();
});
