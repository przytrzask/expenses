import { useExpensesQuery } from "../generated/graphql";
export const Expenses = () => {
  const { data, error } = useExpensesQuery({
    variables: {
      first: 20,
    },
  });
  if (!data) return null;
  return (
    <ul>
      {data.expenses?.edges?.map((expense) => (
        <li key={expense?.node.id}>{expense?.node.amount}</li>
      ))}
    </ul>
  );
};
