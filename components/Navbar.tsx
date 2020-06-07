/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import tw from "@tailwindcssinjs/macro";

// import { Tabs } from "./navigation/nav";

export const Navbar: React.FC = ({ children }) => (
  <nav css={nav}>{/* <Tabs /> */}</nav>
);

export const nav = tw`

bg-white
h-10
fixed
shadow-lg
bottom-0
rounded-lg
z-10
w-72
mb-6
ml-12
`;
