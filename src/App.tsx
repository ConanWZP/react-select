import Select, {OnChangeValue} from 'react-select'
import {useState} from "react";
import {IOption} from "./app-types";
import makeAnimated from 'react-select/animated';

const options: IOption[] = [
    {
        value: 'south-korea',
        label: 'South Korea'
    },
    {
        value: 'germany',
        label: 'Germany'
    },
    {
        value: 'canada',
        label: 'Canada'
    },
    {
        value: 'usa',
        label: 'USA'
    }
]

const animatedComponents = makeAnimated();


const App = () => {

    const [currentCountries, setCurrentCountries] = useState(['canada', 'usa'])

    const getValue = () => {
        return currentCountries ?  options.filter(e => currentCountries.indexOf(e.value) !== -1 ) : []
    }

    const onChangeValue = (newValue: OnChangeValue<IOption, boolean>) => {
        setCurrentCountries(  (newValue as IOption[]).map((e) => e.value))
    }

    return (
        <div className={`w-4/5 mx-auto my-6`}>
            <h1 className={`mb-3 text-[32px] text-white font-medium`}>Chose county</h1>
            <Select options={options} value={getValue()}
                    onChange={onChangeValue} isMulti={true}
                    classNamePrefix={'custom-select'} components={animatedComponents} />
        </div>
    )
}


export default App;
