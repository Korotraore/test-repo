$(document).ready(function() {
    // Gestion du formulaire
    $('#form').submit(function(event) {
        event.preventDefault();

        // Récupération des données
        const nom = $('#nom').val();
        const prenom = $('#prenom').val();
        const tel = $('#tel').val();
        const entreprise = $('#entreprise').val();
        const profession = $('#profession').val();
        const salaire = $('#salaire').val();
        const montantPret = $('#montant_pret').val();
        const duree = $('#duree').val();

        // Validation des données
        if (!nom || !prenom || !tel || !entreprise || !profession || !salaire || !montantPret || !duree) {
            alert('Tous les champs sont obligatoires');
            return;
        }

        // Envoi des données au fichier PHP
        $.ajax({
            url: 'calcul.php',
            type: 'post',
            data: {
                nom: nom,
                prenom: prenom,
                tel: tel,
                entreprise: entreprise,
                profession: profession,
                salaire: salaire,
                montant_pret: montantPret,
                duree: duree,
            },
            success: function(data) {
                // Affichage des résultats
                if (data.success) {
                    const results = $('.results');
                    results.html(`
                        <h2>Résultats</h2>
                        <p>Nom : ${nom}</p>
                        <p>Prénom : ${prenom}</p>
                        <p>Téléphone : ${tel}</p>
                        <p>Entreprise : ${entreprise}</p>
                        <p>Profession : ${profession}</p>
                        <p>Salaire : ${salaire} €</p>
                        <p>Montant du prêt : ${montantPret} €</p>
                        <p>Durée : ${duree} ans</p>
                        <p>Mensualité : ${data.mensualite} €</p>
                        <p>Taux d'intérêt : ${data.taux_interet} %</p>
                    `);
                } else {
                    alert(data.error);
                }
            },
        });
    });
});
