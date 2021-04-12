if (event.keyCode === 13) {
    document.getElementById("evr").click();
}  
function coneur() {
var eur = document.getElementById("eur").value;
var usd = eur * 1.19;
    var usd = usd.toFixed(2);
    var rub = eur * 92.19;
    var rub = rub.toFixed(2);
    console.log(usd);
document.write("EUR" +" " + eur + " " +"is equal to" + " " +"USD" + " "+ usd + " " +"or" + " "+ rub + " " + "Rubles");
}