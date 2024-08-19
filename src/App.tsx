import { useState } from "react";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import Categories from "./expense-tracker/categories";

function App() {
  const expenses = [
    { id: 1, description: 'Rent', amount: 1600, category: 'Housing' },
    { id: 2, description: 'Groceries', amount: 200, category: 'Food' },
    { id: 3, description: 'Gas', amount: 40, category: 'Transportation' },
    { id: 4, description: 'Phone', amount: 60, category: 'Utilities' },
    { id: 5, description: 'Internet', amount: 50, category: 'Utilities' },
    { id: 6, description: 'Insurance', amount: 100, category: 'Insurance' },
    { id: 7, description: 'Gym', amount: 50, category: 'Health' },
    { id: 8, description: 'Streaming', amount: 20, category: 'Entertainment' },
    { id: 9, description: 'Eating Out', amount: 100, category: 'Food' },
    { id: 10, description: 'Savings', amount: 500, category: 'Savings' }
  ]

  const [expenseState, setExpense] = useState(expenses)
  const [selectedCategory, setCategory] = useState('')

  const deleteExpense = (id: number) => {
    setExpense(expenseState.filter(expense => expense.id !== id))
  }

  const visibleExpense = selectedCategory === '' ? expenseState : expenseState.filter(expense => expense.category === selectedCategory)

  return (
    <div>
      <div className="mb-5">
        <h1>Expense Tracker</h1>
        <ExpenseForm onSubmit={data => setExpense([...expenseState, { id: expenseState.length + 1, ...data }])} />
      </div>
      <div className="mb-3">
        <h1>Expenses</h1>
        <ExpenseFilter onSelectCategory={(category) => setCategory(category)} />
      </div>
      <ExpenseList expenses={visibleExpense} onDelete={(id) => deleteExpense(id)} />
    </div>
  );
}

export default App
