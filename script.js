document.addEventListener("DOMContentLoaded", function() {
    var options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    options.forEach(item => {
        var option = document.createElement("option");
        option.value = item;
        option.text = item;
        document.getElementById("years").appendChild(option);
    });
});

var getYear = new Date().getFullYear();

function compute()
{
    var amountValue = document.getElementById("amount").value;
    var rateValue = document.getElementById("rate").value;
    var yearsValue = document.getElementById("years").value;

    if(amountValue != '' && amountValue > 0) {
        var resultPercent = (amountValue * rateValue)/100;
        var resultTotal = resultPercent * yearsValue;
    
        var yearConverted = getYear + parseInt(yearsValue);
    
        document.getElementById("result").innerHTML = `
            If you deposit <span class="emphasis">${amountValue}</span>,<br>
            at an interest rate of <span class="emphasis">${rateValue}</span>%.<br>
            You will receive an amount of <span class="emphasis">${resultTotal}</span>,<br>
            in the year <span class="emphasis">${yearConverted}</span>.<br>
        `;
        document.getElementById("result").removeAttribute("class");
    } else {
        document.getElementById("result").classList.add("error");
        document.getElementById("result").innerHTML = `Error: Amount field may have received invalid data.`;
    }
}

function rangeValue(value)
{
    document.getElementById("rangeValue").innerHTML = parseFloat(value).toFixed(1) + '%';
}
