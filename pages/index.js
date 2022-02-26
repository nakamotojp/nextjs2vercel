// export default function Home() {
//   return <h1>Hello Next.js</h1>;
// }
// import Layout from '../components/layout';
// export default function Home() {
//   return (
//     <Layout>
//       <h1>Hello Next.js</h1>
//     </Layout>
//   );
// }

import Link from 'next/link';
import Head from 'next/head';
const products = [{ name: 'bag' }, { name: 'shoes' }, { name: 'socks' }];
export default function Home() {
  return (
    <div>
      <Head>
        <title>{products[0].name}</title>
        <meta name="description" content={`${products[0].name}のページ`} />
        <meta property="og:title" content={products[0].name} />
        <meta
          property="og:description"
          content={`${products[0].name}のページ`}
        />
      </Head>
      <div>
        <Head>
          <title >トップページ</title>
        </Head>
        <ul>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
        <h1 className="text-3xl">Hello Next.js</h1>
      </div>
    </div>
  );
}