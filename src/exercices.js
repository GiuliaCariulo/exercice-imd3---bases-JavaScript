const item = document.querySelector(".item");
// cette métode retourne le premier element et pas tous
const items = document.querySelectorAll(".item");

<<<<<<< HEAD
console.log(myElement);
=======
Créez des variables pour chacune des informations suivantes:
- votre prénom (firstName)
- votre nom (lastName)
- votre age (age)
- votre ville (city)

🚨 Dans la suite des exercices, nous allons modifier les valeurs de certaines variables (age et city).
Pensez donc à utiliser les mots-clés appropriés lorsque vous déclarez les variables (let / const).
*/

// -----------------------------------------------------------------------------------

/*
Exercice 2:
-------------

Créez une fonction nommée "birthday". Celle-ci vient ajouter 1 an à votre âge.
🚨 Réutilisez bien sûr la variable du 1er exercice.
*/

// -----------------------------------------------------------------------------------

/*
Exercice 3:
-------------

Créez une fonction nommée "changeCity" et qui prend un paramètre (la nouvelle ville dans laquelle j'emménage).
Le but de cette fonction est donc de modifier la valeur de la variable "city" créée au 1er exercice avec la nouvelle ville.
🚨 Réutilisez bien sûr la variable du 1er exercice.
*/

/*
Exercice 4 (avancé):
-------------

Créez une fonction nommée "fullName".
Le but de cette fonction est de retourner votre nom complet (prénom et nom).
Par exemple: mon prénom est John, mon nom Smith. J'aimerais que ma fonction retourne "John Smith".
🚨 Réutilisez bien sûr les variables (firstName et lastName) du 1er exercice.

Indice: vous pouvez vous aider de la "concaténation" (https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps/Strings#concat%C3%A9nation_de_cha%C3%AEnes)
*/

// <!----- NE PAS TOUCHER - UTILISER POUR LES TESTS ------------!>
module.exports = {};
module.exports.firstName =
  typeof firstName !== "undefined" ? firstName : undefined;
module.exports.lastName =
  typeof lastName !== "undefined" ? lastName : undefined;
module.exports.age = typeof age !== "undefined" ? age : undefined;
module.exports.city = typeof city !== "undefined" ? city : undefined;
module.exports.birthday =
  typeof birthday !== "undefined" ? birthday : undefined;
module.exports.changeCity =
  typeof changeCity !== "undefined" ? changeCity : undefined;
module.exports.fullName =
  typeof fullName !== "undefined" ? fullName : undefined;
>>>>>>> 053d84722e3348cf9a3df2de6255ecac2fedf02a
