import { useEffect } from "react";
import { Pie } from "@ant-design/plots";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { removeDuplicates } from "../functions/functions";
import { useStore } from "../zustand";
import { items, testobject } from "../types/types";
export default function Chart() {
  const { items, inc } = useStore();
  const cityes: any[] = [];
  items?.map((g: items) => {
    cityes.push(g.address.city);
  });

  useEffect(() => {
    inc();
  }, []);

  const data: any[] = [];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.75,
    label: {
      type: "spider",
      labelHeight: 28,
      content: "{name}\n{percentage}",
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };

  removeDuplicates(cityes).map((dublicate) => {
    const testobj: testobject = {
      type: dublicate,
      value: 0,
    };
    const cityesPopularity = cityes?.filter((g: string) => {
      return g == testobj.type;
    }).length;
    testobj.value = cityesPopularity;
    data.push(testobj);
  });

  return (
    <div>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Pie {...config} />
    </div>
  );
}
