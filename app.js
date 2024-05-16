
let wynikWszystkiego = 0;

//Funkcja licząca ilość alkoholu w napoju
function IloscAlkoholu() {
    //Zmienne
    const ml = document.getElementById("IloscWMl").value;
    const Procent = document.getElementById("Procent").value / 100;

    //Obliczanie ilości alkoholu
    let wynik = ml * Procent;
    wynik *= 0.79;

    // Dodaj wynik do łącznej liczby alkoholu
    wynikWszystkiego += wynik;

    // Wypisywanie danych
    document.getElementById("WynikIlosciAlkoholu").innerHTML = wynik.toFixed(2) + "g";
    document.getElementById("LacznaIloscAlkoholu").innerHTML = wynikWszystkiego.toFixed(2) + "g";

}

function ObliczPromile() {
    // Pobieranie wagi z inputa
    const Waga = document.getElementById("waga").value;

    // Deklaracja if która sprawdza jaki radiobutton jest zaznaczony
    let plynyUstrojowe = 0;
    if (document.getElementById("plecM").checked) {
        plynyUstrojowe = 0.7 * Waga;
    }
    else if (document.getElementById("plecK").checked) {
        plynyUstrojowe = 0.6 * Waga;
    }

    // Obliczenie promili
    let promile = wynikWszystkiego / plynyUstrojowe;

    // Wypisywanie promili
    document.getElementById("promile").innerHTML = promile.toFixed(2) + "‰"

    // Zdefiniowanie godzin i minut
    let minut = 0;
    let godzin = 0;

    // Obliczanie czasu do wytrzeźwienia
    while (promile > 0.15) {
        promile -= 0.003;

        if (minut === 59) {
            godzin++;
            minut = -1;
        }
        minut++;

    }


    // Wypisanie czasu do wytrzeźwienia
    if (minut < 10) {
        document.getElementById("czas").innerHTML = godzin + ":0" + minut + " Godzin";
    }
    else {
        document.getElementById("czas").innerHTML = godzin + ":" + minut + " Godzin";
    }
}


// Funcja resetująca ilość alkoholu
function Reset() {
    wynikWszystkiego = 0;
    wynik = 0;
    document.getElementById("WynikIlosciAlkoholu").innerHTML = "????";
    document.getElementById("LacznaIloscAlkoholu").innerHTML = "????";
}
