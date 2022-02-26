// import Layout from '../components/layout';

// export default function About() {
//   return <h1>About Page</h1>
// }

// About.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>
// };

// import Layout from '../components/layout';
// export default function About() {
//   return (
//     <Layout>
//       <h1>About Page</h1>
//     </Layout>
//   );
// }

import Layout from '../components/layout';

export default function About() {
  return <h1>About Page</h1>
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
};