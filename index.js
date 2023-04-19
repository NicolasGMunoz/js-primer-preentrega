/* Solicitamos el nombre del usuario simulando un login */
const nombre = prompt ("Ingrese su nombre y apellido por favor");

function tienda(producto){
    switch (producto){
        case 1:
             producto = "Mate 3D Naruto";
             valor = 2000;
            alert ("El producto elegido es: " + producto + "\nY su valor es de: $" + valor);
            break;
        case 2:
            producto = "Remera negra Evangelion";
             valor = 3000;
            alert ("El producto elegido es: " + producto + "\nY su valor es de: $" + valor);
            break;
        case 3:
            producto = "Remera negra Boku no Hero";
             valor = 3000;
            alert ("El producto elegido es: " + producto + "\nY su valor es de: $" + valor);
            break;
        case 4:
            producto = "Figura 3D Groot";
             valor = 2000;
            alert ("El producto elegido es: " + producto + "\nY su valor es de: $" + valor);
            break;
        case 5:
            alert ("Adios " + nombre);
            break;
        default:
            alert ("Ingreso una opción incorrecta o no ingreso niguna opción");
            break;
    }
}


function pago(cuotas, monto){
    let interes = 0;
    switch (cuotas){
        case 1:
            monto = valor;
            alert ("Usted abonara: $" + monto + "\nEn un solo pago");
            break;
        case 3:
            monto = valor * 0.10 + valor;
            interes = monto / 3;
            alert ("Usted abonara: $" + monto + "\nEn 3 cuotas de: $" +interes );
            break;
        case 6:
            monto = valor * 0.20 + valor;
            interes = monto / 6;
            alert ("Usted abonara: $" + monto + "\nEn 6 cuotas de: $" +interes );
            break;
        case 12:
            monto = valor * 0.30 + valor;
            interes = monto / 12;
            alert ("Usted abonara: $" + monto + "\nEn 12 cuotas de: $" +interes );
            break;
        default:
            alert ("Ingreso una opción incorrecta o no ingreso niguna opción");
        break;
    }

}

if (nombre !== ""){
    alert (`Hola ${nombre}. \nBienvenido a Nimutech Geek Store \nHaga click en aceptar para ingresar al menú`);
    let accion1 = Number(prompt ("Estas en el menú:\nPara compras ingresa 1\nPara finalizar ingresa 0"));
    if (accion1 === 1){
        alert ("En la siguiente pestaña debe elegir el número segun el producto que desee.");
        let producto = Number(prompt ("1) Mate 3D Naruto $2000 \n2) Remera negra Evangelion $3000 \n3) Remera negra Boku no Hero $3000 \n4) Figura 3D Groot $2000 \n5) Salir"));
        let valor  = 0;
        tienda(producto);

        if (producto === 1 || producto == 2 || producto == 3 || producto == 4){
            alert ("En la siguiente pestaña debe elegir el número segun como desee abonar.");
            let cuotas = Number(prompt("1) 1 solo pago \n3) 3 cuotas \n6) 6 cuotas \n12) 12 cuotas"));
            pago (cuotas);
            alert ("Muchas gracias por su compra! \nRecuerde seguirnos en instagram :) \nnimutech_geekstore ");
        }else{

        }

    } else if (accion1 != 1 && accion1 !=0 ) {
        alert ("Ingresaste una opcion incorrecta"); 
    } else{
        alert ("Adios " + nombre)
    }
    

} else {
    alert("Nombre no ingresado. \nRecuerde que para poder continuar si o si debe ingresar su nombre.");
}



