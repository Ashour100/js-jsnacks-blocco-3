/**
    Fai inserire un numero, che chiameremo N, all'utente.
    Genera N array, ognuno formato da 10 numeri casuali tra 4 e 4532.
    Ogni volta che ne crei uno, stampalo a schermo.
 */
// let n;
// n=parseInt(prompt("inserisci un numero"));
// let c=0;
// while(n>c){
//     let array=[];
//     for(let i=0;i<10;i++){
//         array[i]=Math.floor(Math.random() * 4532)+4;
//     }
//     console.log(array);
//     c++;
// }




// Bonus1
// let n,m;
// n=parseInt(prompt("inserisci un n"));
// m=parseInt(prompt("inserisci un m"));
// let c=0;
// while(n>c){
//     let array=[];
//     for(let i=0;i<m;i++){
//         array[i]=Math.floor(Math.random() * 4532)+4;
//     }
//     console.log(array);
//     c++;
// }




// Bonus2
let n,m,l;
n=parseInt(prompt("inserisci un n"));
m=parseInt(prompt("inserisci un m"));
l=parseInt(prompt("inserisci un l"));
let somma=0;
let c=0;
while(n>c){
    let array=[];
    for(let i=0;i<m;i++){
        array[i]=Math.floor(Math.random() * 4532)+4;
        somma+=array[i]
        if(i=m-1){
            if(!(somma>=l)){
                array=[];
                i=0;
                somma=0;
            }
        }
    }
    console.log(array);
    c++;
}


