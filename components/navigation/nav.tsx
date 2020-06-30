/** @jsx jsx */
import * as React from "react";
import { css, jsx } from "@emotion/react";
import tw from "@tailwindcssinjs/macro";
import Link from "next/link";
import { useRouter } from "next/router";

import { motion, useMotionValue } from "framer-motion";
import { Icon } from "./Icons";

const routes = ["/", "/expenses", "/comments"];
const iconByRoute = {
  "/": "home",
  "/expenses": "list",
  "/comments": "comments",
};

// @ts-ignore
const Tabsy = (props) => {
  const { text, tint, onTap, width, height, iconFill, ...rest } = props;
  const tabWidth = React.useMemo(() => width / 3, []);

  const { pathname } = useRouter();

  const activeIndex = routes.indexOf(pathname);

  return (
    <motion.nav
      css={nav}
      style={{
        height,
        width,
      }}
    >
      <motion.ul css={[frame, ul]}>
        <motion.li
          css={tab}
          animate={{ x: tabWidth * activeIndex }}
          style={{ width: "33%", background: "#F3F5FA" }}
        />
        {routes.map((el, index) => (
          <motion.li
            css={[
              css`
                opacity: 0.9;
                position: absolute;
                height: 100%;
                width: 33%;
                left: ${index * tabWidth}px;
              `,
              li,
            ]}
            key={index}
          >
            <Link href={el}>
              <a>
                {/* @ts-ignore */}
                <Icon type={iconByRoute[el]} />
              </a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export const Tabs = React.memo(Tabsy);

Tabsy.defaultProps = {
  height: 50,
  width: 250,
  tint: "#ddd",
};

const ul = tw`
list-none
m-0
p-0
`;

const li = tw`
flex
justify-center
list-none
items-center`;
const tab = css`
  position: absolute;
  opacity: 1;
  height: 100%;
  border-radius: 0.6rem;
`;

const frame = css`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;

const nav = tw`
h-10
fixed
shadow-lg
bottom-0
rounded-lg
z-10
mb-6
ml-12
p-3
bg-white 

`;
