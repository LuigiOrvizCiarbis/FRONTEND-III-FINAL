import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Ups!</h1>
      <p>Lo sentimos, se ha producido un error inesperado.<br>Te invitamos a regresar más tarde.<br>Disculpa las molestias.</br></br></p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
