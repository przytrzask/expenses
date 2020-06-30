/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import tw from "@tailwindcssinjs/macro";

import { Layout, leftPane, rightPane } from "./Layout";
import Link, { LinkProps } from "next/link";
import { button } from "../styles/button";
import { useExpensesQuery } from "../generated/graphql";

export const Comments = () => {
  return (
    <React.Fragment>
      <div css={leftPane} />
      <div css={rightPane}>comments</div>
    </React.Fragment>
  );
};

const listStyle = tw`
list-none

`;
