import { useState, useEffect } from "react";
import {
    DigitCommands,
    FunctionCommands,
    OperationCommands,
} from "../Constants/Commands";

function useCalculator(commandObj) {
    const [displayValue, setDisplayValue] = useState("0");

    const [lhs, setLhs] = useState(null);
    const [operator, setOperator] = useState(null);
    const [rhs, setRhs] = useState(null);

    const executeCurrentOperation = () => {
        if (lhs == null || operator == null || rhs == null) {
            clearDownValues(true);
            return;
        }

        const lhsNumber = Number(lhs);
        const rhsNumber = Number(rhs);

        let result = 0;

        switch (operator) {
            case OperationCommands.Division:
                result = lhsNumber / rhsNumber;
                break;
            case OperationCommands.Multiplication:
                result = lhsNumber * rhsNumber;
                break;
            case OperationCommands.Subtraction:
                result = lhsNumber - rhsNumber;
                break;
            case OperationCommands.Addition:
                result = lhsNumber + rhsNumber;
                break;
            default:
                return;
        }

        clearDownValues();
        setLhs(result);
        setDisplayValue(result);
    }

    const clearDownValues = (isError) => {
        setLhs(null);
        setOperator(null);
        setRhs(null);
        setDisplayValue(isError ? "ERROR" : "0");
    }

    const handleDigitCommand = (command) => {
        if (operator == null) {
            const newLhs = `${lhs ?? ""}${command}`;

            if (!isNaN(newLhs)) setLhs(newLhs);

            setDisplayValue(newLhs);
        } else {
            const newRhs = `${rhs ?? ""}${command}`;

            if (!isNaN(newRhs)) setRhs(newRhs);

            setDisplayValue(newRhs);
        }
        return;
    };

    const handleSwapSign = () => {
        if (operator != null && rhs != null) {
            const newRhs = Number(rhs) * -1;
            setRhs(newRhs);
            setDisplayValue(newRhs);
            
        } else if (lhs != null){
            const newLhs = Number(lhs) * -1;
            setLhs(newLhs);
            setDisplayValue(newLhs);
        }
    };

    useEffect(() => {
        const { command } = commandObj;

        if (isDigitCommand(command)) {
            handleDigitCommand(command);
        }

        switch (command) {
            case FunctionCommands.Clear:
                clearDownValues();
                break;

            case FunctionCommands.SwapSign:
                handleSwapSign();
                break;
            
            case FunctionCommands.Percentage:
                //TODO: implement percentage logic here
                break;

            case OperationCommands.Equals:
                executeCurrentOperation();
                break;

            case OperationCommands.Division:
            case OperationCommands.Multiplication:
            case OperationCommands.Subtraction:
            case OperationCommands.Addition:
                if (rhs != null) {
                    executeCurrentOperation();
                }
                setOperator(command);
                break;
            default:
                break;
        }
    }, [commandObj]);

    return displayValue;
}

function isDigitCommand(command){
    return Object.values(DigitCommands).includes(command);
}


export default useCalculator;
