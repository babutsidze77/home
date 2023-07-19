import React, { useEffect, useState } from "react";
import "../app.css";
import { editData } from "../functions/functions";
import Header from "../components/Header";
import TableComp from "../components/Table";
import Edit from "../components/Edit";
import AddData from "../components/AddData";
import { useStore } from "../zustand";
export const MyContext: any = React.createContext([]);
export default function Home() {
  const { items, inc } = useStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editingData, setEditingData] = useState<any>(null);
  const [isAdding, setISAdding] = useState<Boolean>(false);
  useEffect(() => {
    inc();
  }, []);

  return (
          <MyContext.Provider
            value={{
              setISAdding,
              editData,
              setIsEditing,
              setEditingData,
              items,
              editingData,
              isEditing,
              isAdding,
            }}
          >
            <Header />
            <TableComp />
            <Edit />
            <AddData />
          </MyContext.Provider>
  );
}
