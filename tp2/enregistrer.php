<?php
                        // Connexion à la base de données
                        $db = 'mysql:host=localhost;dbname=credit';
                        $user = 'root';
                        $password = '';
                        $ddb = new PDO("mysql:host=$hostname;dbname=$dbname",$user,$password);

                        // Récupération des prêts en cours
                        $requete = 'SELECT * FROM prets WHERE etat = "en cours"';
                        $resultat = $pdo->query($requete);

                        // Affichage des prêts en cours
                        foreach ($resultat as $pret) {
                            echo '<tr>';
                            echo '<td>' . $pret['id'] . '</td>';
                            echo '<td>' . $pret['montant'] . '</td>';
                            echo '<td>' . $pret['taux_interet'] . '</td>';
                            echo '<td>' . $pret['duree'] . '</td>';
                            echo '<td>' . $pret['date_debut'] . '</td>';
                            echo '</tr>';
                        }
                        ?>