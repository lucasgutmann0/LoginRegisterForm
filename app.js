function changeForm(event) {
  // quita la accione predeterminada del formulario (recargar la pagina)
  event.preventDefault()
  // se agarra del documento el elemento que contiene ambos formularios por id
  let formWrapper = document.getElementById("form-wrapper");
  // se valida si este NO tiene la clase change-form (style)
  // signo de exclamacion en JS indica NEGACIÓN 
  if (!formWrapper.classList.contains("change-form")) {
    // si NO Lo tiene entonces que se lo añada
    formWrapper.classList.add("change-form");
  } else {
    // sino que se lo quite
    formWrapper.classList.remove("change-form");
  }
}
