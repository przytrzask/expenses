/*
  Example with @emotion/css

  Note: configure "extractCritical" from "@emotion/server" in _document.js.

  Required packages for this component:
    "@emotion/css"
    "@emotion/babel-plugin"
    "@emotion/server"
  
  These packages can be removed if you plan on only using @emotion/css API:
    "@emotion/react"
    "@emotion/styled"
*/

/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import tw from "@tailwindcssinjs/macro";

const ButtonCss: React.FC = ({ children, ...props }) => (
  <button
    {...props}
    css={tw`relative
    w-64 min-w-full
    flex justify-center
    py-2 px-4
    border border-transparent
    text-sm leading-5 font-medium
    rounded-md
    text-white
    bg-teal-600
    hover:bg-teal-500
    active:bg-teal-700
    focus[outline-none border-gray-700 shadow-outline]
    transition duration-150 ease-in-out`}
  >
    <path
      fillRule="evenodd"
      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
      clipRule="evenodd"
    />
    {children}
  </button>
);

export default ButtonCss;
