import { useState } from "react";
import { useRef } from "react";
import Converter from "./Converter";
import Heading from "./Heading";
import Info from "./Info";

export default function Main() {
    const convertRef = useRef(null);
    const [position, setPosition] = useState()
    const scroll = () => {
        convertRef.current.scrollIntoView({behavior:"smooth"})
    }
    return(
        <>
            <Heading scroll={scroll}/>
            <Converter convertRef={convertRef}/>
            <Info/>
        </>
    );
}