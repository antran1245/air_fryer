export default function AirFlyer() {
    return(
        <svg width={116} height={146}>
            {/* Main outline/body */}
            <rect x={10} y={10} width={100} height={130} rx={20} ry={60}
            fill={"black"} stroke={"black"} strokeWidth={4} />

            {/* Divide top half by the bottom half */}
            <rect x={8} y={68} width={104} height={4} fill={"black"}/>
            <rect x={8} y={72} width={104} height={4} fill={"white"}/>
            <rect x={8} y={76} width={104} height={4} fill={"black"}/>

            {/* Rectangle on the top */}
            <rect x={35} y={20} width={50} height={30} fill={"gray"} stroke={"black"} strokeWidth={4}/>
            {/* The handle */}
            <rect x={50} y={60} width={20} height={85} fill={"white"} stroke={"black"} strokeWidth={4}/>
        </svg>
    );
}