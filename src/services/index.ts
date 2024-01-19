import { PrismaClient } from "@prisma/client";
import { WorkedHoursService } from "./worked-hours.service";

const prisma = new PrismaClient();

export const workedHoursService = new WorkedHoursService(prisma);
