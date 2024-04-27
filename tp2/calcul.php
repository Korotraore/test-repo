<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $tel = $_POST['tel'];
    $entreprise = $_POST['entreprise'];
    $profession = $_POST['profession'];
    $salaire = $_POST['salaire'];
    $montantPret = $_POST['montant_pret'];
    $duree = $_POST['duree'];
} else {
    // Gérer l'erreur si la requête n'est pas POST
}

$dsn = 'mysql:host=localhost;dbname=votre_base_de_donnees';
$user = 'votre_utilisateur';
$password = 'votre_mot_de_passe';

try {
    $pdo = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    // Gérer l'erreur de connexion
}


$requete = 'INSERT INTO demandes_pret (nom, prenom, telephone, entreprise, profession, salaire, montant_pret, duree, mensualite, taux_interet, date_demande) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

$pdo->prepare($requete)->execute([
    $nom,
    $prenom,
    $tel,
    $entreprise,
    $profession,
    $salaire,
    $montantPret,
    $duree,
    calculerMensualite($montantPret, $tauxInteret, $duree), // Taux d'intérêt par défaut
    $tauxInteret, // Taux d'intérêt par défaut
    date('Y-m-d')
]);

$response = [
    'success' => true,
    'mensualite' => calculerMensualite($montantPret, $tauxInteret, $duree),
];

echo json_encode($response);
