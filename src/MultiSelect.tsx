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
    {
        value: 'usa',
        label: 'USA'
    }
]

// Имитация пропса, указывающий на множественный или одиночный выбор
const isMulti = true

const App = () => {

    const [currentCountries, setCurrentCountries] = useState<any>(['canada', 'usa'])

    const getValue = () => {

        if (currentCountries) {
            console.log(  options.filter(e => currentCountries.indexOf(e.value) !== -1 ) )
            return isMulti ?  options.filter(e => currentCountries.indexOf(e.value) !== -1 ) : options.find(e => e.value === currentCountries)
        } else {
            return isMulti ? [] : ''
        }

    }

    const onChangeValue = (newValue: any) => {
      //  console.log(newValue)
        setCurrentCountries(  isMulti ? newValue.map((e: any) => e.value) : newValue.value)


    }

    return (
        <div className={`w-4/5 mx-auto my-6`}>
            <h1 className={`mb-3 text-[32px] text-white font-medium`}>Chose county</h1>
            <Select options={options} value={getValue()} onChange={onChangeValue} isMulti={isMulti} />
        </div>
    )
}


export default App;
