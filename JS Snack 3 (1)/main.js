/**
 *
 *
    crea due liste
    entrambe devono arrivare almeno a 200
    in una ci metti i numeri inseriti pari
    e nell'altra i dispari
 *
 */

let arr1=[];
let arr2=[];
let somma1=0;
let somma2=0;
let check1=0;
let check2=0;
let num=0;
while(check1==0&&check2==0){
    num=parseFloat(prompt("inserisci un numer"));
    if(num%2==0){
        if(somma1<200){
            arr1.push(num);
            somma1+=num;
        }
        else
            check1=1;
    }
    else{
        if(somma2<200){
        arr2.push(num);
        somma2+=num;
        }
        else
        check1=1;
    }
}
console.log(arr1);
console.log(arr2);