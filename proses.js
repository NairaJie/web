function perbandinganBilangan(){
    var angka1, angka2;
    angka1 = perseInt(document.getElementById("txtAngka1").value);
    angka2 = perseInt(document.getElementById("txtAngka2").value);

    if(angka1 > angka2){
        document.getElementById("txtPerbangdinganBilangan").value = "Angka 1 > angka 2";
    }
    else if(angka1 < angka2){
        document.getElementById("txtPerbandinganBilangan").value = "angka 1 < angka 2";
    }
    else if(angka1 == angka2){
        document.getElementById("txtPerbandinganBilangan").value = "angka 1 == angka 2";
    }
    else{
        document.getElementById("txtPerbandinganBilangan").value = "Masukkan angka dengan benar";
    }
}
