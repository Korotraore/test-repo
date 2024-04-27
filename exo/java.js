/*let a=10
let b=15
console.log("a="+a+"b="+b)

let c=a
a=b
b=c
console.log("a="+a+"b="+c)

 */
 /*for(let i=0; i<=100; i++){
    if(i%2===0){
        console.log("double",i, "est",i*2);
    }
 }
*/

/*let nbrDebut=5;
let nbrFin=20;


let comptePairs=0;
let compteImpairs=0;

for(let i=nbrDebut;i<=nbrFin;i++){
    if(i%2==0){
        comptePairs++;
    }
    else{
        compteImpairs++;
    }
}
console.log("nombre de debut:",nbrDebut);
console.log("nombre de fin:",nbrFin);
console.log("nombre de nombres pairs:",comptePairs);
console.log("nombre de nombres impairs:",compteImpairs);
*/


function degreCelcuis(F){
    return (F-32)*5/9;
}
const resultat1 = degreCelcuis(15)
console.log(resultat1)

function degreFara (c){
    return(c-9/3)+32;
}
const resultat2 = degreFara(10,15)


