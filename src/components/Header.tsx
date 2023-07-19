import { Button } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../routes/Home";

export default function Header() {
  const context: any = useContext(MyContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 3%",
      }}
    >
      <Link to="chart">
        <Button style={{ margin: 5 }}>See Chart</Button>
      </Link>
      <Button
        onClick={() => {
          context.setISAdding(true);
        }}
      >
        add new info
      </Button>
    </div>
  );
}
