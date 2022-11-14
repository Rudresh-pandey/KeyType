import React, { useState } from 'react'
import outputData from './Data';
export default function Wordinput() {

    const [input, setInput] = useState('');
    const [correct, setCorrect] = useState(0);
    const [i, setI] = useState(0);
    function newInput(event) {
        if (event.keyCode === 32) {
            console.log(input);
            event.target.value = "";
            let vCheck = " " + outputData[i];

            if (input === vCheck && i > 0) {
                console.log("yes");
                let current = correct + 1;
                setCorrect(current);

            }
            if (input === outputData[i] && i === 0) {
                console.log("yes");
                let current = correct + 1;
                setCorrect(current);

            }
            let currenti = i + 1;
            setI(currenti);

        }
        return true;
    }


    function inputs(event) {
        setInput(event.target.value);
    }


    return (
        <div>
            <div style={{ display: "flex" }}>
                {outputData.map((data) => {
                    if (outputData[i] === data) {
                        return <p style={{ color: "red" }} >{data}&nbsp;&nbsp;</p>
                    }
                    else {
                        return <p>{data}&nbsp;&nbsp;</p>
                    }
                })}
            </div>
            <input type="text" onKeyDown={newInput} onChange={inputs} />
            <br />
            <p>Correct: {correct}</p>
        </div>
    )
}
