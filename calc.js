

document.getElementById("calculate").addEventListener("click", function () {
    const Amount = parseFloat(document.getElementById("amount").value);
    const Term = parseInt(document.getElementById("term").value);
    const Rate = parseFloat(document.getElementById("rate").value) / 100;
    const OnceComision = parseFloat(document.getElementById("once-comision").value);
    const MonthlyComision = parseFloat(document.getElementById("monthly-comision").value);

    if (isNaN(Amount) || Amount <= 0 || isNaN(Term) || Term <= 0 || isNaN(Rate) || Rate <= 0) {
        document.getElementById("result").textContent = "Incorect value, please check and try again.";
    } else {
        const monthRate = Rate / 12;
        const monthPayment = (Amount * monthRate) / (1 - Math.pow(1 + monthRate, -Term));
        const TotalComision = MonthlyComision * Term + OnceComision;
        const totalPayment = monthPayment * Term + MonthlyComision + TotalComision;
        const Percent = Amount * Rate;
        document.getElementById("result1").textContent = `Щомісячний платіж: ${monthPayment.toFixed(2)}.`;
        document.getElementById("result2").textContent = `Загальна сума виплат: ${totalPayment.toFixed(2)}.`;
        document.getElementById("result3").textContent = `У цьому числі %: ${Percent.toFixed(2)}.`;
        document.getElementById("result4").textContent = `Тіло кредиту: ${Amount.toFixed(2)}.`;
        document.getElementById("result5").textContent = `Комісії: ${TotalComision.toFixed(2)}.`;
    }
});