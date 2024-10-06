var arr=[];
function addtocart(){
    var s=document.getElementById("val");
    arr.push(s.value);
    var listi=document.createElement("div");
    if(document.getElementById("addeditems")){
        var g=document.getElementById("addeditems");
        g.remove();
    }
    listi.id="addeditems";
    document.body.appendChild(listi);   
    listi.innerHTML="";
    console.log(listi);
    for(i=0;i<arr.length;i++){
        var h=document.createElement("p");
        h.textContent=arr[i];
        listi.appendChild(h);
    }

    

    

     
}