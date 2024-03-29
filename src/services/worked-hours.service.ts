import { PrismaClient, WorkedHours } from "@prisma/client";

export class WorkedHoursService {
  constructor(private readonly prisma: PrismaClient) {}

  /**
   * Adds worked hours for a given date.
   * @param date - Don't worry about the time part of the date. It will be ignored.
   */
  async addWorkedHours(workedHours: number, date: Date): Promise<void> {
    const dateWithoutTime = new Date(date.toDateString());

    await this.prisma.workedHours.create({
      data: {
        hours: workedHours,
        date: dateWithoutTime,
      },
    });
  }

  /**
   * Updates worked hours for a given date.
   * @param date - Don't worry about the time part of the date. It will be ignored.
   */
  async updateWorkedHours(workedHours: number, date: Date): Promise<void> {
    const dateWithoutTime = new Date(date.toDateString());

    await this.prisma.workedHours.update({
      where: {
        date: dateWithoutTime,
      },
      data: {
        hours: workedHours,
      },
    });
  }

  /**
   * Checks if worked hours exist for a given date.
   * @param date - Don't worry about the time part of the date. It will be ignored.
   */
  async workedHoursExist(date: Date): Promise<boolean> {
    const dateWithoutTime = new Date(date.toDateString());

    const workedHours = await this.prisma.workedHours.findUnique({
      where: {
        date: dateWithoutTime,
      },
    });

    return workedHours !== null;
  }

  /**
   * Get worked hours ordered by date. You can filter data between two dates.
   * `startDate` and `endDate` are inclusive.
   */
  async getWorkedHours(
    startDate?: Date,
    endDate?: Date
  ): Promise<WorkedHours[]> {
    return await this.prisma.workedHours.findMany({
      where: {
        date: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: {
        date: "asc",
      },
    });
  }
}
