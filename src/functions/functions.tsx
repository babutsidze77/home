import axios from "axios";
import { record } from "../types/types";
import { Button, Modal } from "antd";
export function removeDuplicates(arr: any) {
  return [...new Set(arr)];
}
const defaultColor = window.matchMedia("(prefers-color-scheme:dark)").matches
  ? "dark"
  : "light";

export const currentColor = () => {
  return localStorage.getItem("color") || defaultColor;
};

export const axiosinstance = axios.create({
  baseURL: "https://real-pink-pigeon-yoke.cyclic.app/api/data",
});

export const refreshPage = () => {
  window.location.reload();
};

export const editData = (
  record: any,
  setIsEditing: any,
  setEditingData: any
) => {
  setIsEditing(true);
  setEditingData({ ...record });
};

export const onDeleteData = (record: record, dataSource: any) => {
  Modal.confirm({
    title: "Are you sure to want delete?",
    okText: "yes",
    okType: "danger",
    onOk: () => {
      const dataForDelete: any = dataSource.filter((data: record) => {
        return data.id == record.id;
      });
      axiosinstance.delete(`/${dataForDelete[0].id}`).then(() => {
        refreshPage();
      });
    },
  });
};

export const colums = (dataSource: any) => {
  return [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
      render: (record: any) => {
        return <div className="name">{record}</div>;
      },
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Gender",
      dataIndex: "gender",
      render: (record: any) => {
        return <div className="gender">{record}</div>;
      },
    },
    {
      key: "5",
      title: "Address: city/street",
      render: (record: record) => {
        return (
          <div className="address">
            <span>city : {record.address.city}</span>
            <div>street : {record.address.street}</div>
          </div>
        );
      },
    },
    {
      key: "6",
      title: "Phone",
      dataIndex: "phone",
      render: (record: any) => {
        return <div className="phone">{record}</div>;
      },
    },
    {
      key: "6",
      title: "Actions",
      render: (record: record) => {
        return (
          <Button
            onClick={() => {
              onDeleteData(record, dataSource);
            }}
            danger
          >
            Delete
          </Button>
        );
      },
    },
  ];
};
