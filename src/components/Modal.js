import React from "react";

export default function Modal({isOpen, openModal, color}) {
  return (
    <div class={isOpen?'modal is-active':'modal'}>
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
            <p>señor usuario el color de la pantalla ha cambiado a {color}</p>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" onClick={()=>{openModal(false)}}></button>
    </div>
  );
}
