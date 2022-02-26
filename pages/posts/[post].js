
export default function post({ post }) {
  return (
    <div>
      <h1>POST(投稿){post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

// getServerSidePropsはリクエスト毎にサーバ側でデータの取得が行われます
// export async function getServerSideProps({ params }) {
//   const id = params.post;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const post = await res.json();
//   if (!Object.keys(post).length) {
//     return {
//       notFound: true,
//     };
//   }
//   return { props: { post } };
// }
//
// 
export async function getStaticProps({ params }) {
  const id = params.post;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return { props: { post } };
}
// getStaticPathsは作成するページのパス情報を渡す役割をもっているため、getStaticPathsがない場合はパス情報がないため、エラーが発生します。
export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  const paths = posts.map((post) => `/posts/${post.id}`);
  return {
    paths,
    fallback: false,
  };
}