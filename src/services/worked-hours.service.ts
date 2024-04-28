import { PrismaClient, WorkedHours } from "@prisma/client";

type NumericalStatistics = {
  totalHours: number;
  averageHours: number;
  maximumHours: number;
};

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

  /**
   * Get numerical statistics. You can filter data between two dates.
   * `startDate` and `endDate` are inclusive.
   *
   * Data includes: total hours, average hours, and maximum hours.
   */
  async getNumericStatistics(
    startDate?: Date,
    endDate?: Date
  ): Promise<NumericalStatistics> {
    const workedHours = await this.getWorkedHours(startDate, endDate);
    const mapped = workedHours.map((w) => ({
      date: w.date,
      hours: w.hours.toNumber(),
    }));

    const totalHours = mapped.reduce(
      (total, workedHours) => total + workedHours.hours,
      0
    );

    const averageHours = totalHours / workedHours.length;

    const maximumHours = Math.max(...mapped.map((w) => w.hours));

    return {
      totalHours,
      averageHours,
      maximumHours,
    };
  }
}
