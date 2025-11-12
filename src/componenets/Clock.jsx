import { useEffect, useState } from "react";

const Clock = () => {

    const [ now , setNow] = useState(new Date())
    console.log(now)

   useEffect( () => {
    console.log("inside in useEffetct")
    const intervall = setInterval( () => {
    console.log("inside in intevall")
        setNow(new Date( ))
    } , 1000);
    return () => {
        console.log("destroy");
        clearInterval(intervall)
    }

}
    , [])

 return <div>clock : {now.toISOString()}</div>
}

export default  Clock;