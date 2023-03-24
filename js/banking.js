console.log("banking");

function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const inputAmountValue = parseFloat(inputAmountText);
  console.log(inputAmountValue);
  inputField.value = "";
  return inputAmountValue;
}

function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const perviousTotal = parseFloat(totalText);

  totalElement.innerText = perviousTotal + amount;
}

function getCurrentBanlance() {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotalText = balanceTotal.innerText;
  const previousBalance = parseFloat(previousBalanceTotalText);
  console.log(previousBalance);
  return previousBalance;
}

function updateBalanceTotalField(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const perviousBalance = getCurrentBanlance();
  if (isAdd == true) {
    newBalanceTotal = perviousBalance + amount;
  } else {
    newBalanceTotal = perviousBalance - amount;
  }
  balanceTotal.innerText = newBalanceTotal;
}

//Deposit
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const newDepositAmount = getInputValue("deposit-input");

    if (newDepositAmount > 0) {
      updateTotalField("deposit-total", newDepositAmount);
      updateBalanceTotalField(newDepositAmount, true);
    }
  });

//Withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const newWithdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBanlance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
      updateTotalField("withdraw-total", newWithdrawAmount);
      updateBalanceTotalField(newWithdrawAmount, false);
    }
  });

//logout
document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});
