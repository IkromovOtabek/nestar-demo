import withLayoutBasic from "@/libs/components/layaout/LayoutBasic";
import Stack from "@mui/material/Stack/Stack";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  return (
   <div style={{ margin: "20px 0" }}>
      <Stack className="container">COMMUNITY</Stack>
    </div>
  );
};
export default withLayoutBasic(Community);
