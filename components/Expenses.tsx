/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import tw from "@tailwindcssinjs/macro";

import Button from "./Button";

import { useExpensesQuery } from "../generated/graphql";
export const Expenses = () => {
  const { data, error } = useExpensesQuery({
    variables: {
      first: 20,
    },
  });
  if (!data) return null;
  return (
    <>
      <Button css={listStyle}>style test</Button>
      <ul>
        {data.expenses?.edges?.map((expense) => (
          <li key={expense?.node.id}>{expense?.node.amount}</li>
        ))}
      </ul>
    </>
  );
};

const listStyle = tw`
list-none

`;
