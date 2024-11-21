import { useContext } from "react";
import { storesContext } from "../stores/RootStore";

export const useRootStore = () => useContext(storesContext);