// import Link from "next/link";
// export default function index({ posts }) {
//   return (
//     <div>
//       <h1>POST一覧</h1>
//       <ul>
//         {posts.map((post) => {
//           return (
//             <li key={post.id}>
//               <Link href={`/posts/${post.id}`}>
//                 <a>{post.title}</a>
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export async function getServerSideProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();
//   console.log(posts);
//   return { props: { posts } };
// }
// getServerSidePropsはリクエスト毎にサーバ側でデータの取得が行われます
// export async function getServerSideProps({ params }) {
//   console.log(params);
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();
//   return { props: { posts } };
// }

//getStaticPropsはビルド時にデータの取得を行います。
// export async function getStaticProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const posts = await res.json();
//   return { props: { posts } };
// }

import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function index() {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>POST一覧</h1>
      <ul>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}