"use client";
import { Box } from "@mui/material";
import AddForm from "./AddForm";
import Chart from "./Chart";
import useUtils from "./ClientComponent.hook";

const ClientComponent = () => {
  const utils = useUtils();

  return (
    <>
      <Box display="flow-root" alignItems="center" py={10} px={30}>
        <Chart chartData={utils.chartData} />
      </Box>
      <AddForm form={utils.form} />
    </>
  );
};

export default ClientComponent;
