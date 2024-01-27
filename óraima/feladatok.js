// 1. Írj egy függvényt, ami egyetlen tömböt vár paraméterként,
// és a függvény adja vissza a tömbben lévő páros számok számát!
 
console.log(
    " 1. Írj egy függvényt, ami egyetlen tömböt vár paraméterként, és a függvény adja vissza a tömbben lévő páros számok számát!"
  );
  const szamTomb = [1, 2, 3, 4, 5, 6, 7, 8];
   
  function megszamolParos(tomb){
      let db = 0;
      let tombHossza = tomb.length;
   
      for (let index = 0; index < tombHossza; index++) {
          const aktualisElem = tomb[index];
          const paros = szamParos(aktualisElem);
          if(paros){
              db++;
          }
      }
      return db;
  }
   
  function szamParos(szam){
      return szam % 2 == 0;
  }
   
  const megszamolt = megszamolParos(szamTomb)
   
  // 2. Írj egy függvényt, ami összeadja a tömbben lévő számokat!
   
  console.log("2. Írj egy függvényt, ami összeadja a tömbben lévő számokat!")
   
  function osszeadTombbol(tomb){
      const osszeg = 0;
      const tombHossza = tomb.length;
      for (let index = 0; index < tombHossza; index++) {
          const aktualisElem = tomb[index];
          osszeg += aktualisElem;
      }
  }
   
   
  // 3. Készíts egy tömböt benne gyümölcs nevekkel
  // és egy objektumban add vissza a tömbben lévő gyümölcsök számát
  // apple: 3
  // banana: 10
  // strawberry: 2
   
  const gyumolcsok = ["eper", "banan", "alma", "alma", "alma", "eper"]
  const gyumolcsLista = {
      eper: 0,
      banan: 0,
      alma: 0
  }
   
   
  function gyumolcsSzamolo(){
      for (let index = 0; index < gyumolcsok.length; index++) {
          const aktualisGyumolcs = gyumolcsok[index];
          if(aktualisGyumolcs == "eper"){
              gyumolcsLista.eper++;
          }else if(aktualisGyumolcs == "banan"){
              gyumolcsLista.banan++;
          }else{
              gyumolcsLista.alma++;
          }
      }
      console.log(gyumolcsLista)
  }
   
  gyumolcsSzamolo();
   
   
  // 4. Hozz létre egy változót,
  // amely értékét a felhasználótól kéri be.
  // Írj egy programot, amely eldönti, hogy a
  // beírt szám páros vagy páratlan, és ezt a konzolra írja.
   
  function bekerParosParatlan(){
      const szam = prompt("Kérlek adj meg egy számot!");
      if(szam && !isNaN(szam)){
          let valasz = szamParos(szam) ? "Páros" : "Páratlan";
          console.log(valasz)
      }
  }
   
  bekerParosParatlan();
   
  // 5. Hozz létre egy programot, amely ellenőrzi egy szó hosszát.
  // Ha a szó hosszabb, mint 5 karakter, írja ki a "Hosszú szó!" üzenetet,
  // különben írja ki a "Rövid szó!" üzenetet.

  function bekerszo(){
    const szo = prompt("Addj meg egy szót:")
    if (szo.length > 5){
        console.log("Hosszú  szó")

    }
 
        
    else{
        console.log("Rövid szó")
    }

//7. Átlagszámítás Számítsd ki egy számokat tartalmazó tömb átlagát!


const szamok = [1,2,3,4,5,6];




 
 
 


    
}



bekerszo()