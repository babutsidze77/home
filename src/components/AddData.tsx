import { Button, Input, Modal, Select } from "antd";
import { Form } from "antd";
import {
  axiosinstance,
  refreshPage
} from "../functions/functions";
import { MyContext } from "../routes/Home";
import { useContext } from "react";
export default function AddData() {
  const context: any = useContext(MyContext);
  return (
    <Modal
      className="add"
      onCancel={() => {
        context.setISAdding(false);
      }}
      visible={context.isAdding}
      title="add new info"
      footer={null}
      bodyStyle={{ background: "#10141E" }}
    >
      <Form
      style={{padding:10}}
        onFinish={(values) => {
          const { city, street, ...rest } = values;
          rest.address = { city: values.city, street: values.street };
          axiosinstance.post("", rest).then(() => {
            refreshPage();
          });
        }}
      >
        <Form.Item
          name="name"
          label="name"
          rules={[
            {
              required: true,
              message: "please enter your name",
            },
            {
              whitespace: true,
            },
            {
              min: 3,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="email"
          rules={[
            {
              required: true,
              message: "please enter your email",
            },
            {
              type: "email",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your email" />
        </Form.Item>
        <Form.Item
          name="gender"
          label="gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select your gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="city"
          label="city"
          rules={[
            {
              required: true,
              message: "please enter your city",
            },
            {
              min: 3,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your city" />
        </Form.Item>
        <Form.Item
          name="street"
          label="street"
          rules={[
            {
              required: true,
              message: "please enter your street",
            },
            {
              min: 3,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your street" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="phone"
          rules={[
            {
              required: true,
              message: "please enter your phone number",
            },
            {
              min: 8,
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your phone" />
        </Form.Item>
        <Form.Item style={{ display: "flex", justifyContent: "right" }}>
          <Button
            style={{ marginRight: "10px" }}
            type="primary"
            htmlType="submit"
          >
            Add
          </Button>
          <Button
            onClick={() => {
              context.setISAdding(false);
            }}
          >
            cansel
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
