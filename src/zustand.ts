import { create } from "zustand";
import { axiosinstance } from "./functions/functions";

type Store = {
  items: any;
  inc: () => void;
};

export const useStore = create<Store>()((set) => ({
  items: [],
  inc: async () => {
    const data = (await axiosinstance.get("")).data;
    set(() => ({
      items: [...data],
    }));
  },
}));
