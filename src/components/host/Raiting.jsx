import React from 'react';

export default function Raiting({ raiting }) {
  const level = [1, 2, 3, 4, 5];

  return <div className="raiting"></div>;
}

/*
Fonctionnement de Raiting() :
Il retourne une div (ligne 7 à 12) qui contient le résultat de map() qui fonctionne ainsi :
Il prend le 1er élément de "level" (1) et se demande si "rating" est supérieur ou égal (ligne 8).
(rating est défini dans "logement.js", c'est la valeur de "rating".)
Si c'est le cas, map() affiche un span avec la balise img de l'étoile rose.
Si ce n'est pas le cas, map() affiche un span avec la balise img de l'étoile grise.
map() prend ensuite 2 dans "range" et recommence le processus.
Et ainsi de suite pour chaque élément de "range"...
Donc pour un rating de 3, ça affichera 3 étoiles roses et 2 étoiles grises
et pour un rating de 5, ça affichera 5 étoiles roses.
*/
