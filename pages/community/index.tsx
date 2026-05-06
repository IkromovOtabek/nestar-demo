import withLayoutBasic from "@/libs/components/layaout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
    console.log('COMMUNITY COMPONENT - PAGES ROUTER');
  const [title, setTitle] = useState("Hello");
  return (
    <div>
      Community{""}
      <button
        onClick={() => alert("Hello, MIT36!")}
        style={{ margin: "15px" }}
      >
        Press me
      </button>
    </div>
  );
};
export default withLayoutBasic(Community);
