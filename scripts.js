function registrarUsuario() {
  const pass = document.getElementById("password1").value;
  if (document.getElementById("password2").value === pass) {
    let usuarios = localStorage.getItem("usuarios");
    const correo = document.getElementById("user").value.toLowerCase();
    let usuarioNuevo = {
      usuario: correo, clave: pass
    };
    if (usuarios === null) {
      localStorage.setItem("usuarios", JSON.stringify({usersArray: [usuarioNuevo]}));
      return true;
    } else {
      let arregloUsuarios = JSON.parse(localStorage.getItem("usuarios")).usersArray;
      arregloUsuarios.push(usuarioNuevo);
      localStorage.setItem("usuarios", JSON.stringify({usersArray: arregloUsuarios}));
    }
  } else {
    document.getElementsByClassName("error")[0].classList.remove("ocultar");
    return false;
  }
}

function buscarUsuario() {
  const intentoLogin = {
    usuario: document.getElementById("user").value.toLowerCase(),
    clave: document.getElementById("password").value
  }
  if (JSON.parse(localStorage.getItem("usuarios")).usersArray.some(function (elemento) {
    return elemento.usuario === intentoLogin.usuario && elemento.clave === intentoLogin.clave;
  })) {
    localStorage.setItem("usuario", intentoLogin.usuario);
    return true;
  } else {
    document.getElementsByClassName("error")[0].classList.remove("ocultar");
    return false;
  }
}
