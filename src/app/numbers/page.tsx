import { isAuthenticated } from "@/lib/server/auth";
import { workedHoursService } from "@/services";
import Link from "next/link";
import { redirect, RedirectType } from "next/navigation";

type DataBlockProps = {
  title: string;
  data: string;
};

export const dynamic = "force-dynamic";

const DataBlock = (props: DataBlockProps) => (
  <div className="flex flex-col items-center justify-center w-56 h-56 rounded-full justify-self-center cursor-pointer border-2 border-blue-500 hover:bg-slate-800 duration-700 hover:shadow-lg shadow-blue-400">
    <h2 className="text-2xl">{props.title}</h2>
    <p className="text-4xl">{props.data}</p>
  </div>
);

export default async function NumbersPage() {
  if (!isAuthenticated()) redirect("/auth", RedirectType.replace);

  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 40);
  const data = await workedHoursService.getNumericStatistics(
    startDate,
    endDate
  );

  return (
    <main className="pt-5 h-screen grid grid-rows-[auto,1fr] items-center">
      <Link
        href="/"
        replace
        className="absolute right-2 top-2 w-8 h-8 flex items-center justify-center cursor-pointer"
      >
        X
      </Link>

      <h1 className="text-center text-4xl">
        Numerical Statistics of Last 40 Days
      </h1>

      <div className="h-full grid grid-rows-2 items-center pb-3 pt-10">
        <div className="grid grid-cols-2">
          <DataBlock title="Total Hours" data={data.totalHours.toFixed(2)} />
          <DataBlock
            title="Average Hours"
            data={data.averageHours.toFixed(2)}
          />
        </div>

        <div className="flex justify-center">
          <DataBlock
            title="Maximum Hours"
            data={data.maximumHours.toFixed(2)}
          />
        </div>
      </div>
    </main>
  );
}
