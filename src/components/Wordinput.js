import React, { useState } from 'react'
import outputData from './Data';
import './style.css'
export default function Wordinput() {

    const [input, setInput] = useState('');
    const [correct, setCorrect] = useState(0);
    const [i, setI] = useState(0);
    function newInput(event) {

        // if (event.keyCode === 32) {
        //     // let currInput = event.target.value;
        //     event.target.value = "";
        //     console.log(input)
        //     console.log(outputData[0])
        //     if (input === outputData[0]) {
        //         console.log("yes")
        //     }
        //     else {
        //         console.log("no")
        //     }
        //     let currenti = i + 1;
        //     setI(currenti);
        // }

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

    let counter = 0;
    // let result = [];
    return (
        <>
            <div className="middleBox">
                <div id='WordList' >
                    {outputData.map((data) => {
                        // if (outputData[i] === data && counter === 0) {
                        //     counter++;

                        return <span style={{ fontSize: "22px" }} >{data}&nbsp;</span>
                        // }
                        // else {
                        //     // return <p style={{ fontSize: "22px" }} >{data}&nbsp;&nbsp;</p>
                        // }
                        // return null;
                    })}
                </div>

                <input style={{ fontSize: "20px" }} type="text" onKeyDown={newInput} onChange={inputs} />
                <br />
                <p>Correct: {correct}</p>
            </div>
        </>
    )
}
