


  function validacionDeLogin()
  {
    
    const login =
    [
      {
        nombreDeUsuario: document.getElementsByName("username")[0].value,
        contraseña: document.getElementsByName("password")[0].value,

      }
    ];
    //alert(login[0].nombreDeUsuario);


    if(login[0].nombreDeUsuario === "admin" && login[0].contraseña === "admin" )
    {
      alert("Acceso permitido");
      return true;
    }
    else
    {
      alert("Acceso denegado");
      return false;
    }
  };