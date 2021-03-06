/** @jsx jsx */
import React from "react";

import { css, jsx } from "@emotion/react";
import tw from "@tailwindcssinjs/macro";

import { Layout, leftPane, rightPane } from "./Layout";
import Link, { LinkProps } from "next/link";
import { button } from "../styles/button";
import { useExpensesQuery } from "../generated/graphql";

export const Expenses = () => {
  const { data, error } = useExpensesQuery({
    variables: {
      first: 20,
    },
  });
  if (!data) return null;
  return (
    <React.Fragment>
      <div css={leftPane} />
      <div css={rightPane}>
        <ul>
          {data.expenses.edges.map((expense) => (
            <li css={listStyle} key={expense.node.id}>
              {expense.node.amount}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

const listStyle = tw`
list-none

`;
