// ejercicio 1

// function js_style() {
//     //font styles added by JS:
//    text.style.fontSize = "28pt";
//    text.style.fontFamily = "Comic Sans MS";
//     text.style.color = "green";
// }

// ejercicio 2

function getFormvalue()
{
  var x = document.getElementById("form1");
  for (var i=0;i<x.length;i++)
  {
   if (x.elements[i].value!='Submit')
    { 
      e.preventDefault();

      console.log(x.elements[i].value);
     }  
   }
}

formulario.addEventListener("submit", getFormvalue)