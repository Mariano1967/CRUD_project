//CRUD Create, Read, Update, Delete  operaciones
 
//VARIABLES GLOBALES

function Enviar() {
    let dataEntered =retriveData();
    let readData = readingDataFromLocalstarage(dataEntered);
   console.log(readData);
    insert(readData);
    }
    
    document.getElementById("form").reset ();
    
    //CREAR
   //Funcion para recuperar los datos del formulario
    function retriveData() {
    let nombreyapellidos = document.getElementById("Nombre y apellidos").value;
    let direccion = document.getElementById("Direccion").value;
    let curp = document.getElementById("Curp").value;
    let telefono = document.getElementById("Telefono").value;
    let Email = document.getElementById("Email").value;
    
    let array = [nombreyapellidos, direccion, curp, telefono, Email];
    // va a regresar todos los valores que se ingresaron en el formulario
    return array;
    }
   //READ
  //Data en localStorage
    function readingDataFromLocalstarage(dataEntered) {
    
    //Data guardada en local storage
         let n = localStorage.setItem("nombre y apellidos", dataEntered[0]);
         let d = localStorage.setItem("direccion", dataEntered[1]);
         let c = localStorage.setItem("curp", dataEntered[2]);
         let t = localStorage.setItem("telefono", dataEntered[3]);
         let k = localStorage.setItem("Email", dataEntered[4]);

            //sacar valores de localstorage hacia la segunda tabla

            let n1 = localStorage.getItem("nombreyapellidos",n);
            let d1 = localStorage.getItem("direccion", d);
            let c1 = localStorage.getItem("curp" ,c);
            let t1 = localStorage.getItem("telefono",t);
            let k1 = localStorage.getItem("Email",k);

            let array = [n1, d1, c1, t1, k1];
            return array;
           
    }

    //INSERTAR para mostrar en la tabla de localstorage los valores que se inserten en la solicitud
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