import * as React from "react";
import { motion, useMotionValue } from "framer-motion";
// import { Icon } from "./Icons";

// Learn more: https://framer.com/api

const icons = ["home", "list", "comments"];

// @ts-ignore
export function Tabs(props) {
  const { text, tint, onTap, width, height, iconFill, ...rest } = props;
  const tabWidth = React.useMemo(() => (width - 20) / 3, []);

  const [active, setActive] = React.useState(0);

  //   const x = useMotionValue(active);

  return (
    <motion.div
      {...rest}
      height={height}
      width={width}
      background="#fff"
      onTap={onTap}
      borderRadius={16}
      shadow={`0px 4px 5px 2px rgba(181, 200, 212, 0.17)`}
    >
      <motion.div style={{ width: width - 20, height: "90%" }}>
        <motion.div
          animate={{ left: tabWidth * active }}
          style={{ height: "80%", width: "33%" }}
        />
        {icons.map((el, index) => (
          <motion.div
            style={{
              x: index * tabWidth,
              height: "80%",
              width: "20%",
            }}
            key={index}
            onTap={() => setActive(index)}
          ></motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

Tabs.defaultProps = {
  height: 85,
  width: 400,
  tint: "#fff",
};
