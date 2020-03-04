import React from 'react'
import Select from 'react-select';

const cityList = [
    { label: "New Delhi", value: 1 },
    { label: "Gurgaon", value: 2 },
    { label: "Hyderabad", value: 3 },
    { label: "Bengluru", value: 4 },
    { label: "Pune", value: 5 },
    { label: "Kolkata", value: 6 },
    ];

export default function Dropdown() {

    return (
        <div>
            <h2>Dropdown Examples</h2>
            <Select  options={ cityList } isMulti/>
            <p>{cityList.Select}</p>
         </div>
    )
}
