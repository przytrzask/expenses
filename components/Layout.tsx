/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import tw from "@tailwindcssinjs/macro";

import { Navbar } from "./Navbar";

export const Layout: React.FC = ({ children, ...props }) => (
  <main css={[layoutStyles]}>
    <Navbar />
    {children}
  </main>
);

const layoutStyles = tw`
box-border
p-5 
min-h-screen
bg-gray-100
flex flex-row`;

export const leftPane = tw`
flex-shrink-0
overflow-hidden
flex flex-row
w-0
md:w-96`;
export const rightPane = tw`
rounded-lg
bg-gray-300 
w-full
flex flex-row`;
