const loanForm = document.querySelector("#loanform");
const loanAmountInput = document.querySelector("#loanAmount");
const interestRateInput = document.querySelector("#interestRate");
const loanTermInput = document.querySelector("#loanTerm");
const resultDiv = document.querySelector("#result");

loanForm.addEventListener("submit", calculateLoanPayment);

function calculateLoanPayment(e){
    e.preventDefault();// or e.event(); //Default behavior from happening

    const loanAmount = parseFloat(loanAmountInput.value);
    const interestRate = parseFloat(InterestRateInput.value)/100;
    const loanTerm = parseFloat(loanTermInput.value)*12;
    
    const monthlyInterestRate = interestRate /12;
    const numerator = loanAmount * monthlyInterestRate * (1+monthlyInterestRate ** loanTerm);
    const denominator = Math.pow(1+ monthlyInterestRate, loanTerm)-1;
    const monthlyPayment = numerator/denominator;

    resultDiv.textContent = `Monthly Payment: Php ${monthlyPayment.toFixed(2)}`;
}