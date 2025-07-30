//CRUD Create, Read, Update, Delete  operaciones
 
//VARIABLES GLOBALES

let row = null;

function Enviar() {
    let dataEntered =retriveData();
    let readData = readingDataFromLocalstarage(dataEntered);
   if(dataEntered == false) {
    msg.innerHTML= `<h3 style="color: red;">"Por favor, ingrese todos los campos!"</h3>`;
   }
   else {
        if (row == null){
    insert(readData);
    msg.innerHTML = `<h3 style ="color: green;"> "Datos insertados !"</h3>`;
    } else {
       Update();
    msg.innerHTML= `<h3 style="color: blue">"Datos actualizados!"</h3>`;
}
}
document.getElementById("form").reset();// Limpiar el formulario después de enviar los datos
} 
  
  
    document.getElementById("form").reset ();
    
    //CREAR
   //Funcion para recuperar los datos del formulario
    function retriveData() {
    let Nombre = document.getElementById("Nombre").value;
    let Apellido = document.getElementById("Apellido").value;
    let Direccion = document.getElementById("Direccion").value;
    let Curp = document.getElementById("Curp").value;
    let Telefono = document.getElementById("Telefono").value;
    let Email = document.getElementById("Email").value;
    
    let array = [Nombre, Apellido,Direccion, Curp, Telefono, Email];
    
    if (array.includes("")){
        return false;
    } else {return array;

    }// va a regresar todos los valores que se ingresaron en el formulario con unmensaje de error si no se ingresaron todos los campos
    }
   //READ
  //Data en localStorage
    function readingDataFromLocalstarage(dataEntered) {
    
    //Data guardada en local storage
         let n = localStorage.setItem("Nombre", dataEntered[0]);
         let a = localStorage.setItem("Apellido", dataEntered[1]);
         let d = localStorage.setItem("Direccion", dataEntered[2]);
         let c = localStorage.setItem("Curp", dataEntered[3]);
         let t = localStorage.setItem("Telefono", dataEntered[4]);
         let k = localStorage.setItem("Email", dataEntered[5]);

            //sacar valores de localstorage hacia la segunda tabla

            let n1 = localStorage.getItem("Nombre",n);
            let a1 = localStorage.getItem("Apellido", a);
            let d1 = localStorage.getItem("Direccion", d);
            let c1 = localStorage.getItem("Curp" ,c);
            let t1 = localStorage.getItem("Telefono",t);
            let k1 = localStorage.getItem("Email",k);

            let array = [n1,a1, d1, c1, t1, k1];
            return array;
           
    }

    //INSERTAR para mostrar en la tabla de localstorage los valores que se inserten en la solicitud
    function insert(readData) {
       let row = table.insertRow(); 
        row.insertCell(0).innerHTML = readData[0];
        row.insertCell(1).innerHTML = readData[1];
        row.insertCell(2).innerHTML = readData[2];
        row.insertCell(3).innerHTML = readData[3];
        row.insertCell(4).innerHTML = readData[4];
        row.insertCell(5).innerHTML = readData[5];
        row.insertCell(6).innerHTML = `<button onclick="edit(this)">Editar</button>
                                          <button onclick="Remove(this)">Borrar</button>`;
      }
  
  //EDITAR
  function edit(td) {
      row = td.parentElement.parentElement;  
      document.getElementById("Nombre").value = row.cells[0].innerHTML;  
      document.getElementById("Apellido").value = row.cells[1].innerHTML;
       document.getElementById("Direccion").value = row.cells[2].innerHTML;
      document.getElementById("Curp").value = row.cells[3].innerHTML;
      document.getElementById("Telefono").value = row.cells[4].innerHTML;
      document.getElementById("Email").value = row.cells[5].innerHTML;                              
  }
  


  //BORRAR
  function Remove(td) {
      if (confirm("¿Seguro que quieres eliminar este registro?")) {
          row = td.parentElement.parentElement;
          document.getElementById("table").deleteRow(row.rowIndex);
          localStorage.clear();
          alert("Registro eliminado");
      }
  }
    //UPDATE
    function Update() {
        row.cells[0].innerHTML = document.getElementById("Nombre").value;
        row.cells[1].innerHTML = document.getElementById("Apellido").value;
        row.cells[2].innerHTML = document.getElementById("Direccion").value;
        row.cells[3].innerHTML = document.getElementById("Curp").value;
        row.cells[4].innerHTML = document.getElementById("Telefono").value;
        row.cells[5].innerHTML = document.getElementById("Email").value;
        row = null; // Resetear row to null despues de actualizar
    }