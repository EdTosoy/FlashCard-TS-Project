import React, { useContext, ReactElement } from "react";

import { HomeContext } from "../../../ContextAPI/homeContext";

import AddModal from "./AddModal";
import "./AddModalWrapper.scss";

export default function AddModalWrapper(): ReactElement {
  const { addModalDisplay } = useContext(HomeContext);
  const modalStlye = addModalDisplay ? { diplay: "grid" } : { display: "none" };
  return (
    <div className={`add-modal-wrapper`} style={modalStlye}>
      <AddModal />
    </div>
  );
}
