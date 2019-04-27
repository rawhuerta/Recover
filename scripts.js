function iniciarSesion(usuario) {
  localStorage.setItem("usuario", usuario);
}

function registrarUsuario() {
  if (document.getElementById("user").value.length > 0) {
  const pass = document.getElementById("password1").value;
  if (document.getElementById("password2").value === pass) {
    let usuarios = localStorage.getItem("usuarios");
    const correo = document.getElementById("user").value.toLowerCase();
    let usuarioNuevo = {
      usuario: correo, clave: pass
    };
    if (usuarios === null) {
      localStorage.setItem("usuarios", JSON.stringify({usersArray: [usuarioNuevo]}));
      iniciarSesion(correo);
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
 } else {
   document.getElementsByClassName("error")[1].classList.remove("ocultar");
   return false;
 }
}

function buscarUsuario() {
  const intentoLogin = {
    usuario: document.getElementById("user").value.toLowerCase(),
    clave: document.getElementById("password").value
  }
  let findUser = false;
  const itemUsuarios = localStorage.getItem("usuarios");
  if (itemUsuarios != null) {
    if (JSON.parse(itemUsuarios).usersArray.some(function (elemento) {
      return elemento.usuario === intentoLogin.usuario && elemento.clave === intentoLogin.clave;
    })) {
      iniciarSesion(intentoLogin.usuario);
      findUser = true;
    }
  }
   if(findUser){
    return true;
  } else {
    document.getElementsByClassName("error")[0].classList.remove("ocultar");
    return false;
  }
}
