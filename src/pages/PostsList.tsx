import {
  Card,
  CardContent,
  Grid,
  darken,
  makeStyles,
  Typography,
  Theme,
  Box,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../components/Content";
import capitalizeFirstLetter from "../util/capitalize";
import { Post } from "../util/models";

const API_URL = process.env.REACT_APP_API_URL;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flex: 1,
    maxWidth: 800,
    heigth: "100%",
  },
  header: {
    marginBottom: 20,
    alignSelf: "start",
  },
  title: {
    color: theme.palette.primary.contrastText,
  },
  card: {
    height: "100%",
    cursor: "pointer",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 8,
    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
      backgroundColor: darken(theme.palette.primary.main, 0.15),
    },
  },
  postTitle: {
    color: theme.palette.secondary.main,
  },
}));

function PostsList() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts() {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  function handleClick(postId: number) {
    navigate(`/post/${postId}`);
  }

  function renderPosts() {
    return posts.map((post, key) => (
      <Grid item xs={12} sm={6} md={4} key={key}>
        <Card
          variant="outlined"
          className={classes.card}
          onClick={() => handleClick(post.id)}
        >
          <CardContent>
            <Typography variant="subtitle2" className={classes.postTitle}>
              {capitalizeFirstLetter(post.title)}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ));
  }

  return (
    <Content>
      {posts.length > 0 ? (
        <Box className={classes.container}>
          <Box className={classes.header}>
            <Typography variant="h5" className={classes.title}>
              Posts
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {renderPosts()}
          </Grid>
        </Box>
      ) : (
        false
      )}
    </Content>
  );
}

export default PostsList;
