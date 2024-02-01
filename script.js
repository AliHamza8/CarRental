const carClass = document.querySelector('.car-class').value;
const hoursReq = document.querySelector('.hrs-req').value;
const driverReq = document.querySelector('.driver-req').value;
const airCondition = document.querySelector('.ac').value;
const btnCalculate = document.querySelector('.btn-calculate');
const billLabel = document.querySelector('.total-bill');

let bill;

function calculateBill() {
    switch(carClass) {
        case "A":
            bill = parseFloat(hoursReq) * 1000;
            break;
        case "B":
            bill = parseFloat(hoursReq) * 500;
            break;
        case "C":
            bill = parseFloat(hoursReq) * 300;
            break;
        default:
            alert("wrong choice");
    }
    return bill;
}

function getChoice() {
    let totalBill;
    if(driverReq == "Y" && airCondition == "Y") {
        totalBill = calculateBill() + (hoursReq * 200);
    } else if(driverReq == "Y" || airCondition == "N") {
        totalBill = calculateBill() + (hoursReq * 100);
    } else if(driverReq == "N" || airCondition == "Y") {
        totalBill = calculateBill() + (hoursReq * 200);
    } else if(driverReq == "N" && airCondition == "N") {
        totalBill = calculateBill();
    } else {
        alert("Wrong input");
    }
    return totalBill;
}

btnCalculate.addEventListener("click", function() {
    billLabel.textContent = "Total Bill: " + getChoice();
})