// import { useRouter } from "next/router";
// export default function Color() {
//   const router = useRouter();
//   console.log(router.query)
//   return <h1>{router.query.name}の{router.query.color}カラーです</h1>;
// }
import { useRouter } from "next/router";
export default function Color() {
  const router = useRouter();
  const { name, color } = router.query
  return <h1>{ name }の{ color }カラーです</h1>;
}