
const Calculator = (props) => {
    const keypadNumbers = [1,2,3,4,5,6,7,8,9];
    const operations = ["*", "-", "/", "+"]

    return (
        <div className="Calculator">
            <div className="Calculator__wrapper">3+3 = 6</div>
            <div className="display">6</div>
            <div className="buttons">
                {keypadNumbers.map((number, i) => {
                    <button key={number}>number</button>
                })}
            </div>
        </div>
    );
};

export default Calculator;