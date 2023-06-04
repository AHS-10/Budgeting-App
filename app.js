let monthlyBudget = 0;
let expenses = [];

function addBudget() {
  const budgetInput = document.getElementById("monthlyBudget");
  monthlyBudget = Number(budgetInput.value);
  budgetInput.value = "";
  const monthlyBudgetDisply = document.getElementById("monthlyBudgetDisply");
  // monthlyBudgetDisply.innerText = `Monthly Budget: ${monthlyBudget}`
  monthlyBudgetDisply.innerHTML = `<p id="monthlyBudgetDisply">Monthly budget: <b>${monthlyBudget}</b></p>`;
  updateRemainingBudget();
}

function addExpense() {
  const descriptionInput = document.getElementById("expenseDescription");
  const amountInput = document.getElementById("expenseAmount");
  const dateInput = document.getElementById("expenseDate");

  const expense = {
    description: descriptionInput.value,
    amount: Number(amountInput.value),
    date: dateInput.value,
  };

  expenses.push(expense);

  descriptionInput.value = "";
  amountInput.value = "";
  dateInput.value = "";

  displayExpenses();
  updateRemainingBudget();
}

function displayExpenses() {
  const expenseTable = document.getElementById("expenseTable");

  // Clear the table body
  expenseTable.innerHTML = `
    <tr>
      <th>Description</th>
      <th>Amount</th>
      <th>Date</th>
    </tr>
  `;

  // Add each expense to the table
  expenses.forEach((expense) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${expense.description}</td>
      <td>${expense.amount}</td>
      <td>${expense.date} </td>
    `;
    expenseTable.appendChild(row);
  });
}

function updateRemainingBudget() {
  const remainingBudget = document.getElementById("remainingBudget");
  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const remainingAmount = monthlyBudget - totalExpense;

  // remainingBudget.textContent = `Remaining budget: ${remainingAmount}`;
  remainingBudget.innerHTML = `<p class="fs-5" id="remainingBudget">Remaining budget: <b>${remainingAmount}</b></p>`;
}
