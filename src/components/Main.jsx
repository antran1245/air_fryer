import { useEffect, useRef } from "react";
import Converter from "./Converter";
import Heading from "./Heading";

export default function Main() {
    const convertRef = useRef(null);
    const scroll = () => {
        convertRef.current.scrollIntoView({behavior:"smooth"})
    }
    
    return(
        <>
            <Heading scroll={scroll}/>
            <Converter convertRef={convertRef}/>
        </>
    );
}