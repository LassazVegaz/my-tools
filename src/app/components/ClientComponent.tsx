"use client";
import { Box } from "@mui/material";
import AddForm from "./AddForm";
import Chart from "./Chart";
import useUtils from "./ClientComponent.hook";
import BoxProgress from "./BoxProgress";

const ClientComponent = () => {
  const utils = useUtils();

  return (
    <>
      <Box
        display="flow-root"
        alignItems="center"
        pt={0}
        pb={4}
        position="relative"
      >
        <Chart chartData={utils.chartData} />

        {utils.isChartLoading && (
          <BoxProgress position="absolute" right={20} bottom={20} />
        )}
      </Box>
      <AddForm form={utils.form} />
    </>
  );
};

export default ClientComponent;
