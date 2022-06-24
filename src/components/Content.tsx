import { Box, makeStyles, Theme } from "@material-ui/core";
import { PropsWithChildren } from "react";

type Props = {};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
}));

function Content(props: PropsWithChildren<Props>) {
  const classes = useStyles();

  return <Box className={classes.root}>{props.children}</Box>;
}

export default Content;
