/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import useRainbow from "../hooks/useGradientColors";

const transitionDelay = 1500;

export function Home() {
  const colors = useRainbow({ intervalDelay: transitionDelay * 1.2 });
  const colorKeys = Object.keys(colors);

  console.log(colorKeys);

  return (
    <div css={heroWrapper}>
      <div css={titleStyles}>
        <h1>
          Have control over your{" "}
          <span
            style={{
              ...colors,
              transition: `
                ${colorKeys[0]} ${transitionDelay}ms linear,
                ${colorKeys[1]} ${transitionDelay}ms linear,
                ${colorKeys[2]} ${transitionDelay}ms linear
              `,
              background: `
                radial-gradient(
                  circle at top left,
                  var(${colorKeys[2]}),
                  var(${colorKeys[1]}),
                  var(${colorKeys[0]})
                )
              `,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            expences
          </span>
        </h1>
      </div>
    </div>
  );
}

const heroWrapper = css`
  position: relative;
  overflow: hidden;
  min-height: 30rem;
  width: 100%;
  background: url(/hero.svg) no-repeat;
  background-position: center center;
  background-size: cover;
  color: white;
  h1 {
    font-size: 5rem;

    span {
    }
  }
`;

const titleStyles = css`
  max-width: 500px;
  text-align: center;
  display: grid;
  margin: 0px auto;
  gap: 30px;
  padding: 0px 20px;
`;
