import './Test.css';
import {useState} from "react";

export const Test = function() {

    const [testPaste, setTestPaste] = useState('');

    const handleCopy = (e) => {
        const start = e.target.selectionStart;
        const stop = e.target.selectionEnd;
        setTestPaste(e.target.value.slice(start, stop));
    }

    return(
        <>
            <input className="testInput" type="text" name="test-copy" onCopy={handleCopy}/>
            <input className="testInput" type="text" name="test-paste" onPaste={testPaste}/>
            <div className="testInputDiv">Valeur de testPaste: <span>{testPaste}</span></div>
        </>
    );
}