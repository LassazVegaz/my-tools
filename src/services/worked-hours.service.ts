import { PrismaClient } from "@prisma/client";

export class WorkedHoursService {
  constructor(private readonly prisma: PrismaClient) {}

  async addWorkedHours(workedHours: number, date: Date): Promise<void> {
    const dateWithoutTime = new Date(date.toDateString());

    await this.prisma.workedHours.create({
      data: {
        hours: workedHours,
        date: dateWithoutTime,
      },
    });
  }
}
