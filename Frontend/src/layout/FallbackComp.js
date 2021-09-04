import React, { useState, useEffect } from "react";
import { makeStyles, CircularProgress, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  loadingBackdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    transition: theme.transitions.create("opacity", {
      duration: theme.transitions.duration.short,
      easing: theme.transitions.easing.easeIn,
    }),
  },
}));

const FallbackComp = (props) => {
  const styles = useStyles();

  const [opacity, set] = useState(0);

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      set(1);
    }, 300);

    return () => clearTimeout(timeout);
  });

  return (
    <Box className={styles.loadingBackdrop} style={{ opacity: opacity }}>
      <CircularProgress style={{ height: 75, width: 75 }} />
    </Box>
  );
};

export default FallbackComp;
