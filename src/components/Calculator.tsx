import  './Calculator.css'
import {useState} from "react";

const Calculator = () => {
    const [currentValue, setCurrentValue] = useState('0');
    const [pendingOperation, setPendingOperation] = useState('')
    const [pendingValue, setPendingValue] = useState("")
    const [completeOperation, setCompleteOperation] = useState("")

    const keypadNumbers = ['1','2','3','4','5','6','7','8','9','0'];
    const operations= ["+", "-", "*","/"]

    const handleClick = (val: string) => {
        setCurrentValue(prevValue => {
            if(prevValue === '0') {
                return val;
            } else {
                return  prevValue + val;
            }
        });

        setCompleteOperation((prevOperation) => prevOperation + val);
    }

    const handleOperation = (operation: string) => {
        setCompleteOperation(currentValue + " " + operation);
        setPendingOperation(operation);
        setPendingValue(currentValue);
        setCurrentValue("");
    }

    const handleClear = () => {
        setCurrentValue('0');
        setPendingOperation("");
        setPendingValue("");
        setCompleteOperation("");
    }

    const handleCalculate = () => {
        if (!pendingOperation || !pendingValue) {
            return;
        }

        const num1 = parseFloat(pendingValue);
        const num2 = parseFloat(currentValue);

        let result: number = 0;

        switch (pendingOperation) {
            case "+":
                result = num1 + num2;
                break;
            default:
                break;

        }

        setCompleteOperation(pendingValue + " " + pendingOperation + " " + result);

        setCurrentValue(result.toString());
        setPendingValue("");
        setPendingOperation("");

    }

    return (
        <div className="calculator">
            <div className="complete-operation">{completeOperation}</div>
            <div className="display">{currentValue}</div>
            <div className="buttons">
                <button onClick={() => handleClear()}>
                    AC
                </button>
                {keypadNumbers.map((number: string) => (
                    <button key={number} onClick={() => handleClick(number)}>
                        {number}
                    </button>
                ))}
                {operations.map((operation: string) =>(
                   <button key={operation} onClick={() => handleOperation(operation)}>
                       {operation}
                   </button>
                ))}
                <button onClick={() => handleCalculate()}>
                    =
                </button>
            </div>
        </div>
    );
};

export default Calculator;