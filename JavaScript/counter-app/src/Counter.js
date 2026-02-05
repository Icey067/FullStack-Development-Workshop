import Button from "./Button";

const Counter = ({val , handleIncrementButton , handleDecrementButton}) => {
    return (
        <div className="counter">
            <p>{val}</p>
            <div className="btn">
                <Button label="Inc" onClick={handleIncrementButton} />
                <Button label="Dec" onClick={handleDecrementButton} />
            </div>
        </div>
    )
}

export default Counter;