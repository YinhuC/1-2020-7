import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import CursorContext from "../../Cursor/Context/CursorContext";
import { Main } from "./style";

export const RightArrow = () => {
  const { setType } = useContext(CursorContext);

  return (
    <Main
      onMouseEnter={() => setType("menu")}
      onMouseLeave={() => setType("default")}
      smooth={true}
      duration={1000}
      to="slide"
    >
      <IconContext.Provider value={{ color: "white", size: "40px" }}>
        <FaArrowRight />
      </IconContext.Provider>
    </Main>
  );
};
