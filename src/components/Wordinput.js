import React, { useState, useEffect } from 'react'
import outputData from './Data';
import './style.css'
export default function Wordinput() {

    const [input, setInput] = useState('');
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [i, setI] = useState(0);
    // const [correctWord, setCorrectWord] = useState("");

    useEffect(() => {
        const reloadPage = (event) => {
            if (event.key === "Alt") {
                window.location.reload();
            }
        };
        window.addEventListener('keydown', reloadPage);
        return () => {
            window.removeEventListener('keydown', reloadPage);
        }
    }, []);

    function newInput(event) {

        if (event.key === " ") {
            // console.log(input);
            event.target.value = "";
            // let vCheck = " " + outputData[i];

            // if (input === vCheck) {
            //     // console.log("yes");

            //     let current = correct + 1;
            //     setCorrect(current);
            //     // setCorrectWord(input);
            // }
            // if (input !== vCheck) {
            //     let current = wrong + 1;
            //     setWrong(current);
            // }

            if (input === outputData[i]) {
                console.log("yes");
                let current = correct + 1;
                setCorrect(current);
            }
            else if (input !== outputData[i]) {
                console.log("no")
                let current = wrong + 1;
                setWrong(current);
            }

            let currenti = i + 1;
            setI(currenti);

        }
        return true;

    }


    function inputs(event) {
        setInput(event.target.value);
    }

    // let counter = 0;
    // let result = [];
    return (
        <>
            <div className="middleBox">
                <div className="Logo">
                    <img id='logoImg' src="logo192.png" alt="" />
                    <p className="heading">keyType</p>
                </div>
                {
                    `${i}` > 49 ? <div className='curr-results'>
                        <p className="resultTEXT" >Correct: <span id="correct">{correct}</span></p>
                        <p className='resultTEXT' >Wrong: <span id="wrong">{wrong}</span></p>
                    </div> :
                        <>
                            <div id='WordList' >
                                {
                                    outputData.map((data) => {
                                        if (outputData[i] === data) {
                                            return <span className="active">{data}</span>
                                        }
                                        else {
                                            return <span className="notactive">{data}</span>
                                        }
                                    })
                                }
                            </div>
                            <input type="text" onKeyDown={newInput} onChange={inputs} />

                        </>
                }

            </div>
        </>
    )
}
