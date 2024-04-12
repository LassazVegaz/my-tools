type DataBlockProps = {
  title: string;
  data: string;
};

const DataBlock = (props: DataBlockProps) => (
  <div className="flex flex-col items-center justify-center w-56 h-56 rounded-full justify-self-center cursor-pointer border-2 border-blue-500 hover:bg-slate-800 duration-700 hover:shadow-lg shadow-blue-400">
    <h2 className="text-2xl">{props.title}</h2>
    <p className="text-4xl">{props.data}</p>
  </div>
);

export default function NumbersPage() {
  return (
    <main className="pt-5 h-screen grid grid-rows-[auto,1fr] items-center">
      <h1 className="text-center text-4xl">
        Numerical Statistics of Last 40 Days
      </h1>

      <div className="h-full grid grid-rows-2 items-center pb-3 pt-10">
        <div className="grid grid-cols-2">
          <DataBlock title="Total Hours" data="300" />
          <DataBlock title="Average Hours" data="7.5" />
        </div>

        <div className="flex justify-center">
          <DataBlock title="Maximum Hours" data="12" />
        </div>
      </div>
    </main>
  );
}
