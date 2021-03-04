var x;

function show_hidden(x){
    if (x === 0){
        document.getElementById("prsn1").style.display='block';
        document.getElementById("prsn2").style.display='none';
    }
    else if (x === 1){
        document.getElementById("prsn2").style.display='block';
    }
}