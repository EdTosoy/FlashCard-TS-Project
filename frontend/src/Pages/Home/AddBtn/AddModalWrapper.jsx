import React, { useContext } from "react";

import { HomeContext } from "../../../ContextAPI/homeContext";

import AddModal from "./AddModal";
import "./AddModalWrapper.scss";

export default function AddModalWrapper() {
  const { addModalDisplay} = useContext(HomeContext);
  const modalStlye = addModalDisplay ? { diplay: "grid" } : { display: "none" };
  return (
    <div className={`add-modal-wrapper`} style={modalStlye}>
      <AddModal />
    </div>
  );
}
