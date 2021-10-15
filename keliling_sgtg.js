
function hitungLuas(){
    var panjang, lebar, Luas;

    panjang = parseInt(document.getElementById("txtPanjang").value);
    lebar = parseInt(document.getElementById("txtLebar").value);
    Luas = panjang * lebar;
    document.getElementById("txtLuas").value =  Luas;
}

function hitungKeliling(){
    var panjang, lebar, Keliling;

    panjang = parseInt(document.getElementById("txtPjg").value);
    lebar = parseInt(document.getElementById("txtLbr").value);
    Keliling = 2 * (panjang + lebar);
    document.getElementById("txtKll").value =  Keliling;
}