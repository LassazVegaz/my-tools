import { WorkedHoursService } from "./worked-hours.service";
import prisma from "@/lib/server/prisma";

export const workedHoursService = new WorkedHoursService(prisma);
