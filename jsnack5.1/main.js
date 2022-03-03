/**
 *
 *
    Crea due tag div con due id diversi:
    un div avrà il testo colorato di rosso mentre l'altro di verde.
    Partendo da un array di numeri, creo una funzione che controlla se siano pari o dispari.
    Se sono pari li stampo nell'div "rosso",
    se sono dispari li stampo nell'div "verde".
 *
 */
function isPari(num){
    if(num%2==0)
        return true;

    return false;
}
v=parseInt(prompt("Dim arr"));
arr=[v];
let numero;
for(let i=0;i<v;i++){
    numero=parseInt(prompt("Dim arr"));
    if(isPari(numero))
        document.getElementById("first").innerHTML+=numero;
    else
        document.getElementById("second").innerHTML+=numero;
}