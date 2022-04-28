/// Strings Teil 2

// Variablen erzeugen
let username = "Christoph"; //String
let age = 38;               //Number


// Sonerzeichen wie " ' können in Strings mit \ benutzt werden
// Strings können formatiert werden z.B. Zeilenumbruch mit \n
console.log("Ich bin eine Stück Text und ich sage:\n \"Ich bin eine Stück Text Ich bin eine Stück Text Ich bin eine Stück Text\" ");


// Die Länge eines Strings kann mit length ausgegeben werden
console.log(username.length);

// Mit [] kann ich einen Buchstaben aus dem String auswählen - fängt bei 0 an 
let strg = 'Hallo';
console.log(strg[0]); // Ausgabe H


// Template Literals
// Eine besondere Weise Strings darzustellen statt "" oder '' könnt ihr auch `` verwenden und hier ist es möglich Ausdrücke (z.B. Variablen) direkt in den Text einzufügen mit ${variable}
console.log(`Ich bin ${username} und ${age} Jahre`);

console.log(`Ein einfacher Vergleich: ${age>18}`); // Der Ausdruck gibt true zurück und wird direkt in den Text eingefügt.


/* Ternary Operator
 Damit lassen sich einfach Entscheidungen treffen, sie werden wie folgt aufgebaut;
Bedingung (wahr oder falsch) ? wenn wahr dann das : wenn falsch dann das; 
*/

age>18 ? console.log('Darf rein') : console.log('Darf nicht rein');

username.length>3 ? console.log('Alles schick') : console.log('Bitte geben sie mehr Buchstaben ein');


/* Jeder Ausdruck ist entweder true oder false:
False ist immer -> false, undefined, null, 0, '', NaN, -0, 0n
True ist immer: true und alles andere
*/
1 ? console.log('Ich bin true') : console.log('Ich bin false'); /* true */




