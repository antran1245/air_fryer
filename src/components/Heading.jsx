import '../sass/heading.scss';

export default function Heading(props) {

    return(
        <section>
            <header>
                <h1>Air Fryer Converter</h1>
                <p>Found a recipe you like. <br/> However, it only tell you oven timing. <br/> Well. Why not convert it to air fryer time. <br/> Don't know how to? <br/> Try out this converter.</p>
                <div>
                    <button onClick={props.scroll}>Convert to AirFryer Time</button>
                </div>
            </header>
        </section>
    );
}