/* Third Party */
import React from "react";

/* Components */
import { ListItem, Link } from "./style";

/* Functions */

function LinkListItem({ link, name }) {
  return (
    <Link href={link} target="_blank">
      <ListItem>{name}</ListItem>
    </Link>
  );
}

export default LinkListItem;
