import '../sass/heading.scss';
import Oven from '../svg/Oven';
import AirFryer from '../svg/AirFryer';

export default function Heading() {
    return(
        <section>
            <header>
                <h1>Air Fryer Converter</h1>
                <p>Found a recipe you like. <br/> However, it only tell you oven timing. <br/> Well. Why not convert it to air fryer time. <br/> Don't know how to? <br/> Try out this converter.</p>
                <div>
                    <button><a href="">Convert to AirFryer Time</a></button>
                </div>
            </header>
        </section>
    );
}