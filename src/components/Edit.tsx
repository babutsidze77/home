import { Button, Input, Modal, Select } from "antd";
import {
  axiosinstance,
  refreshPage,
 
} from "../functions/functions";
import { record } from "../types/types";
import { MyContext } from "../routes/Home";
import { useContext } from "react";

export default function Edit() {
  const context: any = useContext(MyContext);
  return (
    <Modal
      onCancel={() => {
        context.setIsEditing(false);
      }}
      footer={null}
      visible={context.isEditing}
      title="edit info"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axiosinstance
            .put(
              `/${context.editingData.id}`,
              context.editingData
            )
            .then(() => {
             refreshPage()
            });
        }}
      >
        <Input
          required
          value={context.editingData?.name}
          onChange={(e) => {
            context.setEditingData((pre: record) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <Input
          required
          value={context.editingData?.email}
          onChange={(e) => {
            context.setEditingData((pre: record) => {
              return { ...pre, email: e.target.value };
            });
          }}
        />
        <Select
          placeholder="Select your gender"
          value={context.editingData?.gender}
          onChange={(e) => {
            context.setEditingData((pre: record) => {
              return { ...pre, gender: e };
            });
          }}
        >
          <Select.Option value="male">male</Select.Option>
          <Select.Option value="female">female</Select.Option>
        </Select>
        <Input
          required
          value={context.editingData?.address.city}
          onChange={(e) => {
            context.setEditingData((pre: record) => {
              return {
                ...pre,
                address: {
                  city: e.target.value,
                  street: context.editingData.address.street,
                },
              };
            });
          }}
        />
        <Input
          required
          value={context.editingData?.address.street}
          onChange={(e) => {
            context.setEditingData((pre: record) => {
              return {
                ...pre,
                address: {
                  street: e.target.value,
                  city: context.editingData.address.city,
                },
              };
            });
          }}
        />
        <Input
          required
          value={context.editingData?.phone}
          onChange={(e) => {
            context.setEditingData((pre: record) => {
              return { ...pre, phone: e.target.value };
            });
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Button
            style={{ margin: 5, borderColor: "red", color: "red" }}
            onClick={() => {
              context.setIsEditing(false);
            }}
          >
            Cansel
          </Button>
          <Button style={{ margin: 5 }} htmlType="submit" type="primary">
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
}
