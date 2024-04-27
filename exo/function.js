/*function BonjourFr(nom){
    console.log("bonjour" +nom)
}
function BonjourEng(nom){
    console.log("hi" + nom)
}

function Saluer(val,callback){
    callback(val)
}

Saluer("kone",BonjourFr);
Saluer("kone",BonjourEng);
*/

/*const a =function(){
    console.log("a")
}
a();

*/
/*(
    function toto(){
        console.log("bonjour")
    }
) ();
*/

/*function manger(plat){
    console.log("je mange" + plat)
}
*/

/*function calculateDiscriminant(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    return discriminant;
  }
  
  // Example usage:
  const a = 1;
  const b = 5;
  const c = 6;
  const discriminantValue = calculateDiscriminant(a, b, c);
  
  console.log(`le discriminant  de  l'equation est a=${a}, b=${b}, et c=${c} est: ${discriminantValue}`);
  */
  delta = (a,b,c) =>b*b -4 * a * c;
  delta (5,6,9);