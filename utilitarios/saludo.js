saludar=function(){
    //Recuperar el valor de la caja de texto txtNombre
    let nombre=recuperarTexto("txtNombre");
    //Recuperar el valor de la caja de texto txtApellido
    let apellido=recuperarTexto("txtApellido");
    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");
    let mensajeBienvenida="Bienvenido "+nombre+" "+apellido;
    mostarTexto("IbResultado",mensajeBienvenida);
    mostrarImagen("imgSaludo", "./Imagenes/saludos-hola.gif");
    mostarTextoEncaja("txtNombre", " ");
}

