const pontosTuristicosEcologicosPE = [
    "Parque Nacional do Catimbau (Buíque)",
    "Reserva Ecológica Aparauá (São Vicente Férrer)",
    "Serra Negra (Bezerros)",
    "Ilha de Itamaracá (Itamaracá)",
    "Reserva Biológica de Saltinho (Tamandaré)",
    "Parque Estadual Dois Irmãos (Recife)",
    "Ilha de Santo Aleixo (Sirinhaém)",
    "Praia dos Carneiros (Tamandaré)",
    "Praia de Calhetas (Cabo de Santo Agostinho)",
    "Engenho São João e Reserva Ecológica (Moreno)",
    "Parque das Esculturas de Brennand (Recife)",
    "Trilha do Gravatá (Igarassu)",
    "Praia de Porto de Galinhas (Ipojuca)"
];

function retornarItemAletorio(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

function navegar() {
    const destino = retornarItemAletorio(pontosTuristicosEcologicosPE);
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(destino)}`;
    window.open(url, '_blank')
}

document.addEventListener("DOMContentLoaded", () => {
    const btnLocations = document.getElementById("btnLocations");
    if (btnLocations) {
        btnLocations.addEventListener("click", navegar);
    } else {
        console.error("Botão não encontrado!");
    }
});