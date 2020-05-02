type Expense = {
  node: {
    id: string;
    name: string;
    description: string;
    amount: number;
    category: any;
  };
};
type ExpensesProps = {
  expenses?: Expense[];
};

export const Expenses = ({ expenses }: ExpensesProps) => {
  console.log(expenses);
  if (!expenses) return null;
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.node.id}>{expense.node.amount}</li>
      ))}
    </ul>
  );
};
