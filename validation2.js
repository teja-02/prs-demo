var a = localStorage.getItem("val");
var v = a.split(",");
var lastplant=v.slice(0,v.length-1);
let list = document.getElementById("myList");
lastplant.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = (item);
  if(item==="Maize"){
    li.innerHTML = '<a href="maize.html">Maize</a>';
  }
  if(item==="Onion"){
    li.innerHTML = '<a href="onion.html">Onion</a>';
  }
  if(item==="Cotton"){
    li.innerHTML = '<a href="cotton.html">Cotton</a>';
  }
  if(item==="Tapiaco"){
    li.innerHTML = '<a href="tapioca.html">Tapiaco</a>';
  }
  if(item==="Tomato"){
    li.innerHTML = '<a href="tomato.html">Tomato</a>';
  }
  if(item==="Garlic"){
    li.innerHTML = '<a href="garlic.html">Garlic</a>';
  }
  if(item==="Bottlegourd"){
    li.innerHTML = '<a href="bottlegourd.html">Bottlegourd</a>';
  }
  if(item==="Blackpepper"){
    li.innerHTML = '<a href="blackpepper.html">Blackpepper</a>';
  }
  if(item==="Millet"){
    li.innerHTML = '<a href="millet.html">Millet</a>';
  }
  if(item==="Wheat"){
    li.innerHTML = '<a href="wheat.html">Wheat</a>';
  }
  
  list.appendChild(li);
  
});

lastplant.forEach((item) => {
    let button = document.createElement("button");
    button.innerText=item;
    button.appendChild(button);
});


// var select=document.getElementById('plantres');
//     for(let i=0;i<lastplant.length;i++){
//         var s=lastplant[i];
//         var el=document.createElement("option");
//         el.textContent=s;
//         el.value=s;
//         select.appendChild(el);
//     }

// console.log(lastplant);
//     selectElement = document.querySelector('#plantres');
//     output = selectElement.value;
//     if(output=="Maize"){
//         window.location.href="maize.html";
// //        location.href="Maize.html" ;
//     }
//     else if(output=="Onion"){
//         window.location.href="onion.html";
// //        location.href="Onion.html"
//     }
//     else if(output=="Cotton"){
// //        location.href="Cotton.html"
//         window.location.href="cotton.html";
//     }
//     else if(output=="Blackpepper"){
// //        location.href="Blackpepper.html"
// window.location.href="blackpepper.html";
//     }
//     else if(output=="Tapiaco"){
//  //       location.href="Tapiaco.html"
//  window.location.href="tapioca.html";
//     }
//     else if(output=="Millet"){
// //        location.href="Millet.html"
// window.location.href="millet.html";
//     }
//     else if(output=="Tomato"){
// //        location.href="Tomato.html"
// window.location.href="tomato.html";
//     }
//     else if(output=="Garlic"){
// //        location.href="Garlic.html"
// window.location.href="garlic.html";
//     }
//     else if(output=="Wheat"){
// //        location.href="Wheat.html"
// window.location.href="wheat.html";
//     }
//     else if(output=="Bottlegourd"){
// //        location.href="Bottlegourd.html"
// window.location.href="bottlegourd.html";
//     }