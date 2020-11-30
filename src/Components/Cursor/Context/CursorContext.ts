import { createContext } from "react";

export type CursorLookType = "default" | "menu";

export type CursorType = {
  type: CursorLookType;
  setType: (type: CursorLookType) => void;
};

const CursorContext = createContext<CursorType>({
  type: "default",
  setType: () => {},
});

export default CursorContext;
