import { WorkedHoursService } from "./worked-hours.service";
import prisma from "@/lib/prisma";

export const workedHoursService = new WorkedHoursService(prisma);
