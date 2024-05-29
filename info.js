function ClosingPage1(){
    const Page1 = document.getElementById("page1");  // Pobieramy element sekcji
    Page1.classList.remove("ObliczanieAlko"); // Usuwamy klasę z sekcji
    Page1.classList.add("ObliczanieAlko_closed"); // Dodajemy nową klasę sekcji
}

function OpenPage1(){
    const Page1 = document.getElementById("page1");  // Pobieramy element sekcji
    Page1.classList.remove("ObliczanieAlko_closed"); // Usuwamy klasę z sekcji
    Page1.classList.add("ObliczanieAlko"); // Dodajemy nową klasę sekcji 
}

//=================================================================================

function ClosingPage2(){
    const Page3 = document.getElementById("page2");  // Pobieramy element sekcji
    Page3.classList.remove("Alkomat"); // Usuwamy klasę z sekcji
    Page3.classList.add("Alkomat_closed"); // Dodajemy nową klasę sekcji
}

function OpenPage2(){
    const Page3 = document.getElementById("page2");  // Pobieramy element sekcji
    Page3.classList.remove("Alkomat_closed"); // Usuwamy klasę z sekcji
    Page3.classList.add("Alkomat"); // Dodajemy nową klasę sekcji 
}

//=================================================================================

function ClosingPage3(){
    const Page2 = document.getElementById("page3");  // Pobieramy element sekcji
    Page2.classList.remove("ObliczaniePromili"); // Usuwamy klasę z sekcji
    Page2.classList.add("ObliczaniePromili_closed"); // Dodajemy nową klasę sekcji
}

function OpenPage3(){
    const Page2 = document.getElementById("page3");  // Pobieramy element sekcji
    Page2.classList.remove("ObliczaniePromili_closed"); // Usuwamy klasę z sekcji
    Page2.classList.add("ObliczaniePromili"); // Dodajemy nową klasę sekcji 
}

//=================================================================================

let x = 0;

function NextPage(){
    x++;

    if(x === 3){
        x = 0;
    }

    if(x === 0){
        OpenPage1();
        ClosingPage2();
        ClosingPage3();

        return x;
    }
    else if(x === 1){
        ClosingPage1()
        OpenPage2()
        ClosingPage3();
    }
    else if(x === 2){
        ClosingPage1();
        ClosingPage2();
        OpenPage3()
    }

}

function PreviousPage(){
    x--;

    if(x === -1){
        x = 3;
    }

    if(x === 0){
        OpenPage1();
        ClosingPage2();
        ClosingPage3();
    }
    else if(x === 1){
        ClosingPage1()
        OpenPage2()
        ClosingPage3();
    }
    else if(x === 2){
        ClosingPage1();
        ClosingPage2();
        OpenPage3()
    }


}