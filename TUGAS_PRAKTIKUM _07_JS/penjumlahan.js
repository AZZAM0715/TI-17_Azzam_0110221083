var a;
var b;
window.onchange = function penjumlahan() {
	a = parseFloat(document.getElementById("bil_1").value);
    b = parseFloat(document.getElementById("bil_2").value);
	var tambah = a + b;
	// document.getElementById('hasil').value = tambah;
    document.getElementById("hasil").innerHTML = tambah;
	
}