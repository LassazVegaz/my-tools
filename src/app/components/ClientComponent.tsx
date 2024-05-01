"use client";
import AddForm from "./AddForm";
import Chart from "./Chart";
import useUtils from "./ClientComponent.hook";
import BoxProgress from "./BoxProgress";

const ClientComponent = () => {
  const utils = useUtils();

  return (
    <>
      <div className="flow-root items-center pt-0 pb-4 relative">
        <Chart chartData={utils.chartData} />

        {utils.isChartLoading && <BoxProgress />}
      </div>
      <AddForm form={utils.form} />
    </>
  );
};

export default ClientComponent;
