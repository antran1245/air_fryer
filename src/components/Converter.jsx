import Oven from '../svg/Oven';
import AirFryer from '../svg/AirFryer';
import '../sass/converter.scss';
import { useState } from 'react';
const initialState = {time: 0, temperature: 0}
export default function Converter(props) {
    const [formConverter, setFormConverter] = useState(initialState);
    const [airFryerForm, setAirFryerForm] = useState(initialState);
    const [errConvert, setConverter] = useState({time: false, temperature: false});
    const [errAirFryer, setAirFryer] = useState({time: false, temperature: false});

    const inputTime = (e) => {
        if(e.target.name === "timeToConvert") {
            if(isNaN(e.target.value)) {
                setConverter({...errConvert, time: true})
            } else {
                setFormConverter({...formConverter, time: e.target.value})
                setAirFryerForm({...airFryerForm, time: Number(e.target.value)-(Number(e.target.value)*.2)})
            }
        }
        if(e.target.name === "airFryerTime") {
            if(isNaN(e.target.value)) {
                setAirFryer({...errAirFryer, time: true})
            } else {
                setFormConverter({...formConverter, time: Number(e.target.value)+(Number(e.target.value)*.25)})
                setAirFryerForm({...airFryerForm, time: e.target.value})
            }
        }
    }
    const inputTemperature = (e) => {
        if(e.target.name === "temptToConvert") {
            if(isNaN(e.target.value)) {
                setConverter({...errConvert, temperature: true})
            } else {
                setFormConverter({...formConverter, temperature: e.target.value})
                setAirFryerForm({...airFryerForm, temperature: Number(e.target.value)-25})
            }
        }
        if(e.target.name === "airFryerTempt") {
            if(isNaN(e.target.value)) {
                setAirFryer({...errAirFryer, temperature: true})
            } else {
                setFormConverter({...formConverter, temperature: Number(e.target.value)+25})
                setAirFryerForm({...airFryerForm, temperature: e.target.value})
            }
        }
    }
    return(
        <section id="convertion" ref={props.convertRef}>
            <div>
                <h4>Oven</h4>
                <Oven/>
                <form>
                    <div className='form-group'>
                        <label>Time Required (Min)</label>
                        <input type="text" name='timeToConvert' value={formConverter.time} onChange={(e) => inputTime(e)}/>
                        {errConvert.time && <p className='error'>Number Only</p>}
                    </div>
                    <div className='form-group'>
                        <label>Temperature Required</label>
                        <input type="text" name="temptToConvert" value={formConverter.temperature} onChange={(e) => inputTemperature(e)}/>
                        {errConvert.temperature && <p className='error'>Number Only</p>}
                    </div>
                </form>
            </div>
            <div>
                <h4>Air Fryer</h4>
                <AirFryer/>
                <form>
                    <div className='form-group'>
                        <label>Ary Fryer Time</label>
                        <input type="text" name='airFryerTime' value={airFryerForm.time} onChange={(e) => inputTime(e)}/>
                        {errAirFryer.time && <p className='error'>Number Only</p>}
                    </div>
                    <div className='form-group'>
                        <label>Temperature Set Time</label>
                        <input type="text" name="airFryerTempt" value={airFryerForm.temperature} onChange={(e) => inputTemperature(e)}/>
                        {errAirFryer.temperature && <p className='error'>Number Only</p>}
                    </div>
                </form>
            </div>
        </section>
    );
}