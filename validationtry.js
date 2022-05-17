function covertNumbertoRatio(){
    var a=document.getElementById("Nitrogen").value;
    var b=document.getElementById("Phosphorous").value;
    var c=document.getElementById("Pottasium").value;
    console.log(a);
    a=a==0?1:a;
    b=b==0?1:b;
    c=c==0?1:c;
    a=Math.floor(a);
    b=Math.floor(b);
    c=Math.floor(c);
    var x=hcf(a,b,c);
    ratio(a,b,c,x);
    // window.location.href="recommended.html";
    //alert(str);
}
function hcf(a,b,c){
    var minimumval=Math.min(a,Math.min(b,c));
    var hcf1=0
    for(let i=minimumval;i>=1;i--){
        if((a%i==0)&&(b%i==0)&&(c%i==0)){
            hcf1=i;
            break;
        }
    }
    return hcf1;
}
function ratio(a,b,c,x){  
    var NitrogenRatio=a/x;
    var PhosphorousRatio=b/x;
    var PottasiumRatio=c/x;
    var d=document.getElementById("district").value;
    // document.getElementById("resnitrogen").innerHTML= NitrogenRatio;
    // document.getElementById("resphosphorous").innerHTML= PhosphorousRatio;
    // document.getElementById("respottasium").innerHTML= PottasiumRatio;

    let plandis=[["Maize","Dharmapuri","Salem","Dindigul","Namakkal","Pudukottai","Tiruppur","Villupuram","Perambalur","Ariyalur","Chennai","Cuddalore","Virudhunagar","Krishnagiri","Thoothukudi","Nagapattinam","Ramanathapuram","Theni","Tirunelveli","Kallakurichi","Thenkasi","Tirupattur"],
    ["Onion","Dindigul","Tiruppur","Perambalur","Trichy","Namakkal","Thoothukudi","Dharmapuri","Ramanathapuram","Thenkasi"],
    ["Cotton","Coimbatore","Madurai","Ramanathapuram","Trichy","Salem","Chennai","Cuddalore","Virudhunagar","Dharmapuri","Theni","Tirunelveli","Tirupattur"],
    ["Blackpepper","Kollimalai","Namakkal","Kanyakumari","Nilgiris"],
    ["Tapiaco","Salem","Namakkal","Cuddalore","Villupuram","Dharmapuri","Kanyakumari","Nagapattinam","Ariyalur"],
    ["Millet","Coimbatore","Erode","Salem","Tirunelveli","Tiruvallur","Virudhunagar","Krishnagiri","Theni","Thenkasi","Tirupattur"],
    ["Tomato","Krishnagiri","Dharmapuri","Salem","Tiruppur","Theni","Dindigul","Namakkal","Nagapattinam","Ranipet","Thenkasi"],
    ["Garlic","Dindigul","Erode","Nilgiris"],
    ["Wheat","Theni","Dindigul","Karur","Coimbatore","Erode","Salem","Dharmapuri","Vellore","Tiruvannamalai","Kancheepuram"],
    ["Bottlegourd","Coimbatore","Tripur","Trichy","Krishnagiri","Tiruvallur","Vellore","Villupuram","Ranipet"]];

let finalplant=new Array();

    var plantarr=[[1,0,0,"Maize",],[2,1,1,"Maize"],[3,2,2,"Maize"],
   [1,0,1,"Tapiaco"],[2,1,2,"Tapiaco"],[3,2,3,"Tapiaco"],[1,0,0,"Wheat"],
    [2,1,1,"Wheat"],[3,2,2,"Wheat"],[3,4,4,"Tomato"],[4,5,5,"Tomato"],[5,6,6,"Tomato"],[1,1,0,"Onion"],[2,2,1,"Onion"],[3,3,2,"Onion"],
    [7,2,1,"Garlic"],[8,3,2,"Garlic"],[9,3,2,"Garlic"],[3,7,4,"Bottlegourd"],[4,8,5,"Bottlegourd"],[5,9,6,"Bottlegourd"],[1,1,0,"Cotton"],
    [2,2,1,"Cotton"],[3,3,2,"Cotton"],[0,0,2,"Blackpepper"],[1,1,3,"Blackpepper"],[2,2,4,"Blackpepper"],[1,0,0,"Millet"],[2,1,1,"Millet"],
    [3,2,2,"Millet"]];

    for(var i=0;i<plandis.length;i++){
       for(var j=0;j<plandis[i].length;j++){
           if(d==plandis[i][j]){
               finalplant.push(plandis[i][0]);
           }
       }
    }
let resarray=new Array();
var str="";

for(var i=0;i<plantarr.length;i++){
    if(NitrogenRatio==plantarr[i][0] && PhosphorousRatio==plantarr[i][1] || PhosphorousRatio==plantarr[i][1] && PottasiumRatio==plantarr[i][2] ||
         NitrogenRatio==plantarr[i][0] && PottasiumRatio==plantarr[i][2]){
             for(var j=0;j<finalplant.length;j++){
                 if(resarray.includes(plantarr[i][3])==0 && finalplant[j]==plantarr[i][3]){
                    resarray.push(plantarr[i][3]);
                    str+=plantarr[i][3];
                    str+=',';
                    
                }
            }
        }
}
localStorage.setItem("val",str);
window.location.href="recommended.html";

// var select=document.getElementById('plantres');
//     for(var i=0;i<resarray.length;i++){
//         var v=resarray[i];
//         var el=document.createElement("option");
//         el.textContent=v;
//         el.value=v;
//         select.appendChild(el);
//     }
// }

// // console.log(str);
// function getOption() {
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
}