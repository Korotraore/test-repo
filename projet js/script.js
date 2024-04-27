function calculateLoanPayment(amount, interest, term) {
    // Calculate monthly interest rate
    const monthlyInterest = interest / 100 / 12;

    // Calculate number of payments
    const numPayments = term * 12;

    // Calculate monthly payment
    const payment = amount * monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -numPayments));

    return payment;
}
