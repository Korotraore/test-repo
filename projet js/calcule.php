<?php

function calculateLoanPayment($amount, $interest, $term) {
    // Calculate monthly interest rate
    $monthlyInterest = $interest / 100 / 12;

    // Calculate number of payments
    $numPayments = $term * 12;

    // Calculate monthly payment
    $payment = $amount * $monthlyInterest / (1 - pow(1 + $monthlyInterest, -$numPayments));

    return $payment;
}

// Example usage
$amount = 10000;
$interest = 5;
$term = 5;

$payment = calculateLoanPayment($amount, $interest, $term);

echo "Votre paiement mensuel serait de $" . number_format($payment, 2) . ".";
?>
