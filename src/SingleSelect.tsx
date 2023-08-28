import Select from 'react-select'
import {useState} from "react";

const options = [
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

]



const App = () => {

    const [currentCountry, setCurrentCountry] = useState('canada')

    const getValue = () => {
        return currentCountry ? options.find(e => e.value === currentCountry) : ''
    }

    const onChangeValue = (newValue: any) => {
        setCurrentCountry(newValue.value)
    }

    return (
        <div className={`w-4/5 mx-auto my-6`}>
            <h1 className={`mb-3 text-[32px] text-white font-medium`}>Chose county</h1>
            <Select options={options} value={getValue()} onChange={onChangeValue} />
        </div>
    )
}


export default App;
