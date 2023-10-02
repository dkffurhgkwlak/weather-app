import Link from "next/link";
import style from './style.module.css'
import { getCurrentWeather } from "@/utils/getCurrentWeather";
import { getTime } from "@/utils/getTime";
import RevalidateButton from "./components/RevalidateButton";

export default async function Home() {
  const res_seoul = await getCurrentWeather('seoul')
  const res_NYC = await getCurrentWeather('NYC')
  const res_london = await getCurrentWeather('london')
  const time = await getTime(res_seoul.location.tz_id)
  
  return <> 
  <h1>날씨 앱</h1>
  <h3>{time.dateTime}</h3>
  <ul className={style.list}>
    <li>
      <Link href="/seoul?name=서울">서울</Link>
    </li>
    <span>현재 {res_seoul.current.condition.text}</span>
    <li>
      <Link href="/NYC?name=뉴욕">뉴욕</Link>
    </li>
    <span>현재 {res_NYC.current.condition.text}</span>
    <li>
      <Link href="/london?name=런던">런던</Link>
    </li>
    <span>현재 {res_london.current.condition.text}</span>
  </ul>
    <RevalidateButton tag={'time'}></RevalidateButton>
  </>
}
