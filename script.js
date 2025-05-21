function oblicz() {
    var szerokosc = document.getElementById("szerokosc").value
    var dlugosc = document.getElementById("dlugosc").value
    var panel = document.querySelector('input[name="panel"]:checked')?.value;
    var wynik = document.getElementById("wynik")

    var koszty = {
    "Laminowane" : 12,
    "Winylowe" : 14,
    "Deska" : 18
    }

    if (!szerokosc || !dlugosc || !panel) {
            wynik.textContent = "Wprowadź poprawne dane.";
            return;
        }

        var pole = szerokosc * dlugosc;
        var koszt = pole * koszty[panel];
        wynik.textContent = `Pole powierzchni pomieszczenia: ${pole}, koszt montażu ${koszt}`;

}