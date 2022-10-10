import React from "react";

export default function Modal({ isOpen, openModal, color }) {
  return (
    <div class={isOpen ? "modal is-active" : "modal"}>
      <div
        class="modal-background"
        onClick={() => {
          openModal(false);
        }}
      ></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Cambio de Color</p>
          <button
            class="delete"
            aria-label="close"
            onClick={() => {
              openModal(false);
            }}
          ></button>
        </header>
        <section class="modal-card-body">
          <p>señor usuario el color de la pantalla ha cambiado a {color}</p>
        </section>
      </div>
    </div>
  );
}
