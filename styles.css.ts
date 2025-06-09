import { style, globalStyle, keyframes } from "@vanilla-extract/css";

// Reset y globals
globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  fontFamily:
    'sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue"',
  WebkitTapHighlightColor: "transparent",
});

globalStyle("*::before", {
  boxSizing: "border-box",
});
globalStyle("*::after", {
  boxSizing: "border-box",
});

// Body style
export const body = style({
  height: "100dvh",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  placeContent: "center",
  backgroundColor: "#000",
  backgroundImage: "url('assets/texture.svg')",
  backgroundSize: "200px",
  position: "relative",
});

globalStyle(`${body}::before`, {
  content: '""',
  width: "250px",
  height: "250px",
  backgroundColor: "rgb(0, 47, 64)",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "50%",
});

// Keyframes
const rotar = keyframes({
  "0%": {
    transform: "rotate3d(0, 0, 0, 0deg)",
  },
  "100%": {
    transform: "rotate3d(1, 1, 1, 180deg)",
  },
});

/
