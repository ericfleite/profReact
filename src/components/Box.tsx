import type React from "react";

type BoxProps = {
  children: React.ReactNode;
};

function Box(props: BoxProps) {
  return (
    <div
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#D0D0D0",
        padding: 16,
      }}
    >
      {props.children}
    </div>
  );
}

export default Box;
