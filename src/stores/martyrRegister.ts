import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type State = {
  fullName: string;
  fatherName: string;
  birthBorn: number | null;
  birthDead: number | null;
  placeDead: string;
  responsibilities: string[] | null;
  operations: string[] | null;
  biography: string;
  will: string;
  causeOfMartyrdom: string;
  lastResponsibility: string;
  gorooh: string;
  yegan: string;
  niru: string;
  ghesmat: string;
  poem: string;
  memories: string;
  images: [];
  voices: [];
  videos: [];
};
export type Action = {
  setFullName: (val: string) => void;
  setFatherName: (val: string) => void;
  setBirthBorn: (val: number | null) => void;
  setBirthDead: (val: number | null) => void;
  setPlaceDead: (val: string) => void;
  setResponsibilities: (val: any) => void;
  setOperations: (val: any) => void;
  setBiography: (val: string) => void;
  setWill: (val: string) => void;
  setCauseOfMartyrdom: (val: string) => void;
  setLastResponsibility: (val: string) => void;
  setGorooh: (val: string) => void;
  setYegan: (val: string) => void;
  setNiru: (val: string) => void;
  setGhesmat: (val: string) => void;
  setPoem: (val: string) => void;
  setMemories: (val: string) => void;
  setVideos: (val: any) => void;
  setVoices: (val: any) => void;
  setImages: (val: any) => void;
};

export const martyrStore = create<State & Action>()(
  devtools((set) => ({
    fullName: "",
    fatherName: "",
    birthBorn: null,
    birthDead: null,
    placeDead: "",
    responsibilities: null,
    operations: null,
    biography: "",
    will: "",
    causeOfMartyrdom: "",
    lastResponsibility: "",
    gorooh: "",
    yegan: "",
    niru: "",
    ghesmat: "",
    poem: "",
    memories: "",
    images:[],
    voices:[],
    videos:[],

    setImages: (val) => set(() => ({ images: val }), false, "setImages"),
    setVideos: (val) => set(() => ({ videos: val }), false, "setVideos"),
    setVoices: (val) => set(() => ({ voices: val }), false, "setVoices"),
    setFullName: (val) => set(() => ({ fullName: val }), false, "setFullName"),
    setFatherName: (val) =>
      set(() => ({ fatherName: val }), false, "setFatherName"),
    setBirthBorn: (val) =>
      set(() => ({ birthBorn: val }), false, "setBirthBorn"),
    setBirthDead: (val) =>
      set(() => ({ birthDead: val }), false, "setBirthDead"),
    setPlaceDead: (val) =>
      set(() => ({ placeDead: val }), false, "setPlaceDead"),
    setResponsibilities: (val) =>
      set(() => ({ responsibilities: val }), false, "setResponsibilities"),
    setOperations: (val) => set(() => ({ operations: val }), false, "setOperations"),
    setBiography: (val) =>
      set(() => ({ biography: val }), false, "setBiography"),
    setWill: (val) => set(() => ({ will: val }), false, "setWill"),
    setCauseOfMartyrdom: (val) =>
      set(() => ({ causeOfMartyrdom: val }), false, "setCauseOfMartyrdom"),
    setLastResponsibility: (val) =>
      set(() => ({ lastResponsibility: val }), false, "setLastResponsibility"),
    setGorooh: (val) => set(() => ({ gorooh: val }), false, "setGorooh"),
    setYegan: (val) => set(() => ({ yegan: val }), false, "setYegan"),
    setNiru: (val) => set(() => ({ niru: val }), false, "setNiru"),
    setGhesmat: (val) => set(() => ({ ghesmat: val }), false, "setGhesmat"),
    setPoem: (val) => set(() => ({ poem: val }), false, "setPoem"),
    setMemories: (val) => set(() => ({ memories: val }), false, "setMemories"),
  })),
);
 