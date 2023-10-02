import { getForecast } from "@/utils/getForecast"
import HomeButton from "../components/HomeButton"

type Props = {
    params: {
        location: string
    },
    searchParams:{
        name:string
    }
}

export function generateMetadata({ params , searchParams} : Props) {
    return {
        title: `날씨 앱- ${params.location}`,
        description:`${searchParams.name} 날씨를 알ㄹ드립니다.`,
    }
}

export default async function Detail({ params, searchParams } : Props){
    const name = searchParams.name;

    const res = await getForecast(params.location)
    return (
        <>
        <h1>{name}의 3일 예보</h1>
        <ul>
            {res.forecast.forecastday.map(day => (
                <li key={day.date}>{day.date} / {day.day.avgtemp_c}</li>
            ))}
            
        </ul>
        <HomeButton />
        </>
    )
}