import axios from "axios"
import { useEffect } from "react"

export const Landing = () => {
    useEffect(()=>{
        axios.get(`https://api.rawg.io/api/games?key=88de139982b546c5ba3f0cb42aced4dc&page=2`).then(({data})=>{
            console.log('data', data);
        })
    },[])
    
    return (
        <div></div>
    )
}