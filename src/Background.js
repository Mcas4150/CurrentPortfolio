import styled from "@emotion/styled";
import { jsx, css } from "@emotion/react";

export default styled("div")`
  background-color: #dfdfdf;
  display: grid;
  grid-template-columns: repeat(100, 40px);
  grid-template-rows: repeat(40, 40px);
  // width: calc(100vw/40);
  width: 100vw;
  height: 100vh;
`;

const Box = () => (
  <div
    css={css`
      grid-area: box;
      border: 1px solid black;
    `}
  />
);
