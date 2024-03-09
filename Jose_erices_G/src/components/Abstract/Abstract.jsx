import React,{useState} from 'react';
import Select from '../Select/Select';
import Radio from '../Radio/Radio';

const Abstract = () => {

    const [option,setOption] = useState(1);

    const options = [
        {value: 1, text: "Azul"},
        {value: 2, text: "Rojo"},
        {value: 3, text: "Verde"},
        {value: 4, text: "Violeta"}
    ]

    const optionSelected = (value) => {
        setOption(value)
    }

    return (
        <div>
            <h3>Abstract Component</h3>
            <Select option={option} options={options} optionSelected={optionSelected}/>
            {/* <Radio option={option} options={options} optionSelected={optionSelected}/> */}
            <p>Seleccioanda: {option}</p>
        </div>
    );
};

export default Abstract;