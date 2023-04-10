import React, { useContext } from "react";
import Form from "../Components/Form";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <div
      className={state.theme === "light" ? "form-content-dark" : "form-content"}
    >
      <h2>Contactanos</h2>
      <p>¿Quieres conocer más?<br></br><br></br>Envianos tu consulta y nos pondremos en contacto a la brevedad.</p>
      <br></br><Form />
    </div>
  );
};

export default Contact;
