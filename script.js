//CRUD Create, Read, Update, Delete  operaciones
 
//VARIABLES GLOBALES

let row =null;
function Enviar() {
    let dataEntered =retriveData();
    let readData = readingDataFromLocalstarage(dataEntered);
    insert(readData);
    if (readData == false) {
        msg.innerHTML = `<h3 style = "color: red;">Por favor, complete todos los campos.</h3>`;
    }
    else { if (row ==null) {
     
        msg.innerHTML = "Data insertada!";
    } else { update();

        msg.innerHTML = "Datos enviados correctamente";}

    }
    document.getElementById("form").reset ();
}    
    //CREAR

    function retriveData() {
    let nombreyapellidos = document.getElementById("Nombreyapellidos").value;
    let direccion = document.getElementById("Direccion").value;
    let curp = document.getElementById("Curp").value;
    let telefono = document.getElementById("Telefono").value;
    let correo = document.getElementById("Correo").value;
    
    let array = [nombreyapellidos, direccion, curp, telefono, correo];
    return array;
    }
   //READ
  //Data en localStorage
    function readingDataFromLocalstarage(dataEntered) {
    
    //Data guardada en local storage
         let n= localStorage.setItem("nombreyapellidos", dataEntered[0]);
         let d= localStorage.setItem("direccion", dataEntered[1]);
         let c= localStorage.setItem("curp", dataEntered[2]);
         let t= localStorage.setItem("telefono", dataEntered[3]);
         let k= localStorage.setItem("correo", dataEntered[4]);

            //getting valores de localstorage to table

            let n1 = localStorage.getItem("nombreyapellidos",n);
            let d1 = localStorage.getItem("direccion", d);
            let c1 = localStorage.getItem("curp" ,c);
            let t1 = localStorage.getItem("telefono",t);
            let k1 = localStorage.getItem("correo",k);

            let array = [n1, d1, c1, t1, k1];
            return array;
           
    }

    //INSERTAR
    function insert(readData) {
       let row = table.insertRow(); 
       let cell1 = row.insertCell(0);
       let cell2 = row.insertCell(1);
       let cell3 = row.insertCell(2);
       let cell4 = row.insertCell(3);
       let cell5 = row.insertCell(4);

       cell1.innerHTML = readData[0];
       cell2.innerHTML = readData[1];
       cell3.innerHTML = readData[2];
       cell4.innerHTML = readData[3];
       cell5.innerHTML = readData[4];


    }