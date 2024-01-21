import styles from "./BoxProgress.module.scss";
import { Box, BoxProps } from "@mui/material";

const DEFUALT_SIZE = 40;

const BoxProgress = (props: BoxProps) => (
  <Box
    className={styles["box-progress"]}
    height={DEFUALT_SIZE}
    width={DEFUALT_SIZE}
    bgcolor="primary.main"
    {...props}
  />
);

export default BoxProgress;
