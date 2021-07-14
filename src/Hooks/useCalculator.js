import { useState, useEffect } from "react";
import {
    DigitCommands,
    FunctionCommands,
    OperationCommands,
} from "../Constants/Commands";

function useCalculator(command) {
    const [displayValue, setDisplayValue] = useState("0");

    const [lhs, setLhs] = useState(null);
    const [operator, setOperator] = useState(null);
    const [rhs, setRhs] = useState(null);

    function executeCurrentOperation() {
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
        }

        clearDownValues();
        setLhs(result);
        setDisplayValue(result);
    }

    function clearDownValues(isError) {
        setLhs(null);
        setOperator(null);
        setRhs(null);
        setDisplayValue(isError ? "ERROR" : "0");
    }

    useEffect(() => {
        const { value } = command;

        console.log(`Command applied: ${JSON.stringify(command)}`);

        if (Object.values(DigitCommands).includes(value)) {
            if (operator == null) {
                const newLhs = `${lhs ?? ""}${value}`;

                if (!isNaN(newLhs)) setLhs(newLhs);

                setDisplayValue(newLhs);
            } else {
                const newRhs = `${rhs ?? ""}${value}`;

                if (!isNaN(newRhs)) setRhs(newRhs);

                setDisplayValue(newRhs);
            }
            return;
        }

        switch (value) {
            case FunctionCommands.Clear:
                clearDownValues();
                break;

            case FunctionCommands.SwapSign:
                if (operator != null && rhs != null) {
                    const newRhs = Number(rhs) * -1;
                    setRhs(newRhs);
                    setDisplayValue(newRhs);
                } else if (lhs != null){
                    const newLhs = Number(lhs) * -1;
                    setRhs(newLhs);
                    setDisplayValue(newLhs);
                }
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
                setOperator(value);
                break;
        }
    }, [command]);

    return displayValue;
}

export default useCalculator;
