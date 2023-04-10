import { React, useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [textArea, setTextArea] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    validateForm();
  }, [name, email, tel, textArea]);

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!name) {
      errors.name = "Falta ingresar el nombre";
    }
    else if (name.trim().length < 3) {
      errors.name = "El nombre debe contener al menos 3 caracteres.";
    }
    if (!email) {
      errors.email = "Falta ingresar el correo";
    } else if (!emailRegex.test(email)) {
      errors.email = "El correo es inválido";
    }
    if (!tel) {
      errors.tel = "Falta ingresar el teléfono";
    }
    if (tel && tel.trim().length < 7) {
      errors.tel = "El teléfono es inválido";
    }
    if (textArea.length < 25) {
      errors.textArea = "El mensaje debe tener al menos 25 caracteres.";
    }
    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      console.log("Form sent");
      alert("Gracias por contactarnos " + name + ", nos contactaremos a la brevedad.");
    } else {
      console.log("Form is invalid, ", { errors });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder={"Ingrese su nombre"}
          required
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        {errors.name && <label className={"error-message"}>{errors.name}</label>}
        <input
          placeholder={"Ingrese su correo electrónico"}
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        {errors.email && <label className={"error-message"}>{errors.email}</label>}
        <input
          placeholder={"Ingrese su número de teléfono"}
          onChange={(e) => setTel(e.target.value)}
          type="tel"
        />
        {errors.tel && <label className={"error-message"}>{errors.tel}</label>}
        <textarea
          placeholder={"Ingrese su consulta"}
          required
          onChange={(e) => setTextArea(e.target.value)}
          name="message"
          id="#message"
          cols="30"
          rows="10"
        ></textarea>
        {errors.textArea && <label className={"error-message"}>{errors.textArea}</label>}
        <input id={"submit-form-btn"} className={Object.keys(errors).length === 0 ? "btn-valid" : "btn-invalid"} type="submit" value={"Enviar"} />
      </form>
    </div>
  );
};

export default Form;
