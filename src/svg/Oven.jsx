export default function Oven() {
    return(
        <svg width={150} height={150}>
            <filter id="shadow">
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodOpacity="1"/>
            </filter>
            <g filter="url(#shadow)">
                {/* Body */}
                <rect x={10} y={14} width={130} height={130} rx={5}
                fill={"white"} stroke={"black"} strokeWidth={4}/>

                {/* Line to separate */}
                <rect x={10} y={41} width={130} height={5} />

                {/* Oven Buttons */}
                <circle cx={45} cy={29} r={8} fill={"white"}
                stroke={"black"} strokeWidth={3}/>
                <circle cx={75} cy={29} r={8} fill={"white"}
                stroke={"black"} strokeWidth={3}/>
                <circle cx={105} cy={29} r={8} fill={"white"}
                stroke={"black"} strokeWidth={3}/>

                {/* Glass window */}
                <rect x={25} y={60} width={100} height={70}
                fill={"white"} stroke={"black"} strokeWidth={5} />
                <line x1={26} y1={123} x2={50} y2={105} stroke={"black"} strokeWidth={4}/>
                <line x1={78} y1={86} x2={113} y2={60} stroke={"black"} strokeWidth={4}/>
                <line x1={70} y1={110} x2={103} y2={85} stroke={"black"} strokeWidth={4}/>
            </g>
        </svg>
    );
}