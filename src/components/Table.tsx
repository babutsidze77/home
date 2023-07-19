import { Table } from "antd";
import { useContext } from "react";
import { MyContext } from "../routes/Home";
import { colums, currentColor } from "../functions/functions";
export default function TableComp() {
  const context: any = useContext(MyContext);
  return (
    <Table
      rowKey={(record) => record.id}
      style={{
        cursor: "pointer",
        width: "95%",
        margin: "auto",
      }}
      rowClassName={currentColor() == "dark" ? "active" : ""}
      scroll={{ x: true, y: "70vh" }}
      onRow={(record) => {
        return {
          onDoubleClick: () => {
            context.editData(
              record,
              context.setIsEditing,
              context.setEditingData
            );
          },
        };
      }}
      columns={colums(context.items)}
      dataSource={context.items}
    />
  );
}
