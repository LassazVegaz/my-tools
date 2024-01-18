import { Box, Button, Container, TextField } from "@mui/material";

export default function Home() {
  return (
    <Box height="100vh" display="grid" gridTemplateRows="1fr auto">
      <Box></Box>

      <Box
        bgcolor="#EAECFF"
        boxShadow="0px 0px 9.9px 0px #6472FF"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="20vh"
        gap={2}
      >
        <TextField size="small" type="date" sx={{ width: 200 }} />
        <TextField
          size="small"
          sx={{
            width: 130,
            "& input": {
              textAlign: "center",
            },
          }}
        />
        <Button variant="outlined">Add</Button>
      </Box>
    </Box>
  );
}
