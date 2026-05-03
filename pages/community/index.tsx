import { useState } from "react";

const Community = () => {
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
export default Community;
