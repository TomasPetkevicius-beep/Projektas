function coneur() {
var eur = document.getElementById("eur").value;
var usd = eur * 1.19;
    var usd = usd.toFixed(2);
    var rub = eur * 92.19;
    var rub = rub.toFixed(2);
    console.log(usd);
document.write("EUR" +" " + eur + " " +"is equal to" + " " +"USD" + " "+ usd + " " +"or" + " "+ rub + " " + "Rubles");
}
function conusd() {
var usd = document.getElementById("usd").value;
var eur = usd * 0.84;
    var eur = eur.toFixed(2);
    var rub = usd * 77.35;
    var rub = rub.toFixed(2);
    console.log(eur);
document.write("USD" +" " + usd + " " +"is equal to" + " " +"EUR" + " "+ eur + " " +"or" + " "+ rub + " " + "Rubles");
}
function pnds() {
var gbp = document.getElementById("gbp").value;
var eur = gbp * 1.15;
    var eur = eur.toFixed(2);
    var usd = gbp * 1.38;
    var usd = usd.toFixed(2);
    
document.write("GBP" +" " + gbp + " " +"is equal to" + " " +"EUR" + " "+ eur + " " +"or" + " "+ usd + " " + "U.S. dollars");
}
function rubs() {
var rub = document.getElementById("rub").value;
var eur = rub * 0.011;
    var eur = eur.toFixed(2);
    var usd = rub * 0.013;
    var usd = usd.toFixed(2);
    
document.write("RUB" +" " + rub + " " +"is equal to" + " " +"EUR" + " "+ eur + " " +"or" + " "+ usd + " " + "U.S. dollars");
}