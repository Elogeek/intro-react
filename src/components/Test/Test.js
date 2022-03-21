import './Test.css';
import {useState} from "react";

export const Test = function() {

    const [testPaste, setTestPaste] = useState('');
    const [testCopy, setTestCopy] = useState('Hello Janne !');

    const handleCopy = (e) => {
        const start = e.target.selectionStart;
        const stop = e.target.selectionEnd;
        setTestPaste(testCopy.slice(start, stop));
    }

    return(
        <>
            <input className="testInput" type="text" name="test-copy" value={testCopy} onCopy={handleCopy} onChange={e => setTestCopy(e.target.value)}/>
            <input className="testInput" type="text" name="test-paste" onPaste={testPaste}/>
            <div className="testInputDiv">Valeur de testPaste: <span>{testPaste}</span></div>
        </>
    );
}