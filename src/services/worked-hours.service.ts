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
   * @param date In `YYYYMMDD` format
   */
  async addWorkedHours(workedHours: number, date: number): Promise<void> {
    await this.prisma.workedHours.create({
      data: {
        hours: workedHours,
        date: date,
      },
    });
  }

  /**
   * Updates worked hours for a given date.
   * @param date In `YYYYMMDD` format
   */
  async updateWorkedHours(workedHours: number, date: number): Promise<void> {
    await this.prisma.workedHours.update({
      where: {
        date: date,
      },
      data: {
        hours: workedHours,
      },
    });
  }

  /**
   * Checks if worked hours exist for a given date.
   * @param date In `YYYYMMDD` format
   */
  async workedHoursExist(date: number): Promise<boolean> {
    const workedHours = await this.prisma.workedHours.findUnique({
      where: {
        date: date,
      },
    });

    return workedHours !== null;
  }

  /**
   * Get worked hours ordered by date. You can filter data between two dates.
   * `startDate` and `endDate` are inclusive.
   * @param endDate In `YYYYMMDD` format
   * @param startDate In `YYYYMMDD` format
   */
  async getWorkedHours(
    startDate?: number,
    endDate?: number
  ): Promise<WorkedHours[]> {
    const includeWhere = startDate !== undefined && endDate !== undefined;

    return await this.prisma.workedHours.findMany({
      where: includeWhere
        ? {
            date: {
              gte: startDate,
              lte: endDate,
            },
          }
        : undefined,
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
   *
   * @param endDate In `YYYYMMDD` format
   * @param startDate In `YYYYMMDD` format
   */
  async getNumericStatistics(
    startDate?: number,
    endDate?: number
  ): Promise<NumericalStatistics> {
    const workedHours = await this.getWorkedHours(startDate, endDate);

    const totalHours = workedHours.reduce(
      (total, workedHours) => total + workedHours.hours,
      0
    );

    const averageHours = totalHours / workedHours.length;

    const maximumHours = Math.max(...workedHours.map((w) => w.hours));

    return {
      totalHours,
      averageHours,
      maximumHours,
    };
  }
}
