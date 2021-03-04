var x;

function show_hidden(x){
    if (x === 1){
        document.getElementById("prsn1").style.display='block';
        document.getElementById("prsn2").style.display='none';
        document.getElementById("prsn3").style.display='none';
        document.getElementById("prsn4").style.display='none';
    }
    if (x === 2){
        document.getElementById("prsn2").style.display='block';
        document.getElementById("prsn3").style.display='none';
        document.getElementById("prsn4").style.display='none';
    }
    if (x === 3){
        document.getElementById("prsn1").style.display='block';
        document.getElementById("prsn2").style.display='block';
        document.getElementById("prsn3").style.display='block';
        document.getElementById("prsn4").style.display='none';
    } 
    if (x === 4){
        document.getElementById("prsn1").style.display='block';
        document.getElementById("prsn2").style.display='block';
        document.getElementById("prsn3").style.display='block';
        document.getElementById("prsn4").style.display='block';
    }
}