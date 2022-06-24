import {
  Avatar,
  Box,
  lighten,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Content from "../components/Content";
import capitalizeFirstLetter from "../util/capitalize";
import { Post as PostModel } from "../util/models";
import FaceIcon from "@material-ui/icons/Face";

const API_URL = process.env.REACT_APP_API_URL;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    maxWidth: 800,
    borderRadius: 8,
    backgroundColor: theme.palette.primary.main,
    padding: 20,
  },
  header: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.palette.secondary.contrastText,
    borderRadius: 8,
    padding: "0px 0px 0px 10px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "10px 0px 0px 0px",
    },
  },
  avatar: {
    color: theme.palette.primary.contrastText,
    backgroundColor: lighten(theme.palette.secondary.contrastText, 0.1),
  },
  title: {
    color: theme.palette.secondary.main,
    flex: 1,
    margin: 20,
  },
  postId: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: theme.palette.background.default,
    borderRadius: 8,
    padding: 20,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  body: {
    marginTop: 20,
  },
  text: {
    color: theme.palette.text.primary,
  },
}));

function Post() {
  const classes = useStyles();
  const { postId } = useParams();
  const [post, setPost] = useState<PostModel>({} as PostModel);

  async function fetchPost() {
    const response = await fetch(`${API_URL}/posts/${postId}`);
    const data = await response.json();
    setPost(data);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Content>
      {post?.id ? (
        <Box className={classes.container}>
          <Box className={classes.header}>
            <Avatar className={classes.avatar}>
              <FaceIcon />
            </Avatar>
            <Typography variant="h5" className={classes.title}>
              {capitalizeFirstLetter(post.title ?? "")}
            </Typography>
            <Box className={classes.postId}>
              <Typography variant="h5">{`#${post.id}`}</Typography>
            </Box>
          </Box>
          <Box className={classes.body}>
            <Typography variant="body1" className={classes.text}>
              {capitalizeFirstLetter(post.body ?? "")}
            </Typography>
          </Box>
        </Box>
      ) : (
        false
      )}
    </Content>
  );
}

export default Post;
