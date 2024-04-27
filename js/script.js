function verifierMatchNul() {
    let casesRemplis = 0;
    for (let caseElement of cases) {
        if (caseElement.classList.contains('joueur1') || caseElement.classList.contains('joueur2')) {
            casesRemplis++;
        }
    }

    if (casesRemplis === 9 && !gagnant) {
        afficherMessage('Match nul !');
    }
}
