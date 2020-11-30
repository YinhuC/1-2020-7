import React, { useState } from "react";
import CursorContext, { CursorLookType } from "./CursorContext";

type Props = {
  children: JSX.Element;
};

export default function CursorManager({ children }: Props) {
  const [type, setType] = useState<CursorLookType>("default");
  return (
    <CursorContext.Provider value={{ type, setType }}>
      {children}
    </CursorContext.Provider>
  );
}
