const posts = [
  { id: 1, postName: "Post 1", year: 1989 },
  { id: 2, postName: "Post 2", year: 1990 },
  { id: 3, postName: "Post 3", year: 1991 },
  { id: 4, postName: "Post 4", year: 1992 },
];
const postList = () => {
  console.log(posts);
};

const addPost = (post) => {
  const promise = new Promise((resolve, reject) => {
    if (post) {
      posts.push(post);
      resolve(posts);
    } else {
      reject("Post Eklenemedi.");
    }
  });
  return promise;
};
async function getPostList() {
  await addPost({ id: 5, postName: "Post 5", year: 1993 });
  postList();
}
getPostList();
