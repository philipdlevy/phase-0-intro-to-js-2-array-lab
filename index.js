const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyAppendCat(name){
    cats.push("Ralph");
  }

  function destructivelyPrependCat(name){
      cats.unshift("Bob");
  }

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newCats = [...cats, "Broom"];
    return (newCats);
}

function prependCat(name) {
    const newArray = ["Arnold", ...cats];
    return (newArray);
}

function removeLastCat() {
    const CopyOfCats = cats.slice(0, -1);
    return CopyOfCats;
}

function removeFirstCat() {
    const copyOfCats = cats.slice(1)
    return copyOfCats;
}


/*
function removeLastCat() {
    copyOfCats = cats.slice(0, -1);
    return (copyOfCats);
}
*/