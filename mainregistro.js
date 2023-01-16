//
function validarDNI() {
    var dni = document.getElementById("dni").value;
    var letters = "TRWAGMYFPDXBNJZSQVHLCKE";
  
    if (dni.length != 9) {
      var mensajeDNI = document.getElementById("mensajeDNI");
      mensajeDNI.style.display = "inline"
      return false;
    }
  
    var number = dni.substring(0, 8);
    var letter = dni.substring(8);
  
    if (isNaN(number)) {
      var mensajeDNI = document.getElementById("mensajeDNI");
      mensajeDNI.style.display = 'block'
      return;
    }
  
    if (letters[number % 23] != letter.toUpperCase()) {
      var mensajeDNI = document.getElementById("mensajeDNI");
      mensajeDNI.style.display = 'block'
      return false;
    }
  
    var mensajeDNI = document.getElementById("mensajeDNI");
    mensajeDNI.style.display = 'none'
    return true;
  }
  
  //////////////////////
  function validateAccount() {
    var account = document.getElementById("numcuenta").value;
  
    if (account.length != 20) {
      var mensajeCuenta = document.getElementById("mensajeCuenta");
      mensajeCuenta.style.display = 'inline'
      return false;
    }
  
    if (isNaN(account)) {
      var mensajeCuenta = document.getElementById("mensajeCuenta");
      mensajeCuenta.style.display = 'inline'
      return false;
    }
  
    // Calculamos el dígito de control
    var sum = 0;
    for (var i = 0; i < account.length; i++) {
      var digit = parseInt(account[i]);
      if ((i + 1) % 2 == 1) {
        // Los dígitos en posiciones impares se multiplican por 2 y se suman entre sí los dígitos del resultado
        digit *= 2;
        sum += digit % 10 + Math.floor(digit / 10);
      } else {
        // Los dígitos en posiciones pares se suman directamente
        sum += digit;
      }
    }
  
    if (sum % 10 != 0) {
      var mensajeCuenta = document.getElementById("mensajeCuenta");
      mensajeCuenta.style.display = 'inline'
      return false;
    }
  
    var mensajeCuenta = document.getElementById("mensajeCuenta");
    mensajeCuenta.style.display = 'none'
    return true;
  }
  
  ///////////////////////////
  function validar() {
  
    validarDNI();
    validarCuentaBancaria();
    validarContraseña();
    comprobarEdad(); 
  }
  
  
  
  
  function validarCuentaBancaria() {
  
    let IBAN = document.getElementById('numcuenta').value;
    //Se pasa a Mayusculas
    IBAN = IBAN.toUpperCase();
    //Se quita los blancos de principio y final.
    IBAN = IBAN.trim();
    IBAN = IBAN.replace(/\s/g, ""); //Y se quita los espacios en blanco dentro de la cadena
    var letra1, letra2, num1, num2;
    var isbanaux;
    var numeroSustitucion;
    //La longitud debe ser siempre de 24 caracteres
    console.log(IBAN)
    if (IBAN.length != 24) {
      //alert('ERROR: IBAN incorrecto!);
      var mensajeCuenta = document.getElementById("mensajeCuenta");
      mensajeCuenta.style.display = 'inline'
      return false;
    }
  
    // Se coge las primeras dos letras y se pasan a números
    letra1 = IBAN.substring(0, 1);
    letra2 = IBAN.substring(1, 2);
    num1 = getnumIBAN(letra1);
    num2 = getnumIBAN(letra2);
    //Se sustituye las letras por números.
    isbanaux = String(num1) + String(num2) + IBAN.substring(2);
    // Se mueve los 6 primeros caracteres al final de la cadena.
    isbanaux = isbanaux.substring(6) + isbanaux.substring(0, 6);
  
    //Se calcula el resto, llamando a la función modulo97, definida más abajo
    resto = modulo97(isbanaux);
    if (resto == 1) {
      var mensajeCuenta = document.getElementById("mensajeCuenta");
      mensajeCuenta.style.display = 'none'
      return true;
    } else {
      //alert('ERROR: IBAN incorrecto!);
      var mensajeCuenta = document.getElementById("mensajeCuenta");
      mensajeCuenta.style.display = 'inline'
      return false;
    }
  }
  
  function modulo97(iban) {
    var parts = Math.ceil(iban.length / 7);
    var remainer = "";
  
    for (var i = 1; i <= parts; i++) {
      remainer = String(parseFloat(remainer + iban.substr((i - 1) * 7, 7)) % 97);
    }
  
    return remainer;
  }
  
  function getnumIBAN(letra) {
    ls_letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return ls_letras.search(letra) + 10;
  }
  
  
  //validar conraseñas
  
  function validarContraseña() {
    contraseña1 = document.getElementById("contraseña1");
    contraseña2 = document.getElementById("contraseña2");
  
    // Verificamos si las constraseñas no coinciden
    if (contraseña1.value != contraseña2.value) {
  
      var mensajeCuenta = document.getElementById("mensajeContraseña");
      mensajeCuenta.style.display = 'inline'
      return false;
    }
  
    else {
  
      var mensajeCuenta = document.getElementById("mensajeContraseña");
      mensajeCuenta.style.display = 'none'
      return true;
  
     
    }
  }

  function comprobarEdad() {
    // Obtener el valor del campo de fecha de nacimiento
    var birthdate = document.getElementById("date").value;
    
    // Convertir la fecha de nacimiento a un objeto de fecha
    var birthdateObject = new Date(date);
    
    // Obtener la fecha actual
    var currentDate = new Date();
    
    // Calcular la edad en años
    var date = currentDate.getFullYear() - birthdateObject.getFullYear();
    
    // Comprobar si la edad es mayor o igual a 18
    if (date >= 18) {
      alert("Eres mayor de edad");
    } else {
      alert("Eres menor de edad");
    }
  }