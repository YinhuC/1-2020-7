import React, { useContext } from "react";
import { FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";
import CursorContext from "../../Cursor/Context/CursorContext";

export const MenuIcon = () => {
  const { setType } = useContext(CursorContext);

  return (
    <div
      onMouseEnter={() => setType("menu")}
      onMouseLeave={() => setType("default")}
    >
      <IconContext.Provider value={{ color: "white", size: "40px" }}>
        <FiMenu />
      </IconContext.Provider>
    </div>
  );
};
