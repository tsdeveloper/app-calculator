const Calculator = () => {
    const keypadNumbers = [1,2,3,4,5,6,7,8,9,11];
    const operations= ["+", "-", "*","/"]

    return (
        <div className="calculator">
            <div className="complete-operation">3+3 = 6</div>
            <div className="display">3</div>
            <div className="buttons">
                {keypadNumbers.map((number: number) => (
                    <button key={number}>{number}</button>
                ))}
                {operations.map((operation: string) =>(
                   <button key={operation}>{operation}</button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;