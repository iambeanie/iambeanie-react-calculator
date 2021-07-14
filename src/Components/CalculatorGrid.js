import { useState } from "react";
import CalculatorButton from "./CalculatorButton";
import GridItem from "./GridItem";
import useCalculator from "../Hooks/useCalculator";
import { DigitCommands, FunctionCommands, OperationCommands } from '../Constants/Commands';

const CalculatorGrid = () => {
    const [latestCommand, setLatestCommand] = useState({value: '0'});

    const displayValue = useCalculator(latestCommand);

    return (
        <div className="body grid-container">
            <GridItem fourWide>
                <div className="calculator-display">{displayValue}</div>
            </GridItem>

            <GridItem>
                <CalculatorButton command={FunctionCommands.Clear} onClick={setLatestCommand} />
            </GridItem>
            <GridItem>
                <CalculatorButton command={FunctionCommands.SwapSign} onClick={setLatestCommand} />
            </GridItem>
            <GridItem>
                <CalculatorButton command={FunctionCommands.Percentage} onClick={setLatestCommand} />
            </GridItem>
            <GridItem>
                <CalculatorButton command={OperationCommands.Division} onClick={setLatestCommand} />
            </GridItem>

            <GridItem>
                <CalculatorButton command={DigitCommands.Seven} onClick={setLatestCommand} />
            </GridItem>
            <GridItem>
                <CalculatorButton command={DigitCommands.Eight} onClick={setLatestCommand} />
            </GridItem>
            <GridItem>
                <CalculatorButton command={DigitCommands.Nine} onClick={setLatestCommand} />
            </GridItem>
            <GridItem>
                <CalculatorButton command={OperationCommands.Multiplication} onClick={setLatestCommand} />
            </GridItem>

            <GridItem>
                <CalculatorButton command={DigitCommands.Four} onClick={setLatestCommand} />
            </GridItem>
            <GridItem>
                <CalculatorButton command={DigitCommands.Five} onClick={setLatestCommand} />
            </GridItem>
            <GridItem>
                <CalculatorButton command={DigitCommands.Six} onClick={setLatestCommand} />
            </GridItem>
            <GridItem>
                <CalculatorButton command={OperationCommands.Subtraction} onClick={setLatestCommand} />
            </GridItem>

            <GridItem>
                <CalculatorButton command={DigitCommands.One} onClick={setLatestCommand} />
            </GridItem>
            <GridItem>
                <CalculatorButton command={DigitCommands.Two} onClick={setLatestCommand} />
            </GridItem>
            <GridItem>
                <CalculatorButton command={DigitCommands.Three} onClick={setLatestCommand} />
            </GridItem>
            <GridItem>
                <CalculatorButton command={OperationCommands.Addition} onClick={setLatestCommand} />
            </GridItem>

            <GridItem twoWide>
                <CalculatorButton command={DigitCommands.Zero} onClick={setLatestCommand} />
            </GridItem>
            <GridItem>
                <CalculatorButton command={DigitCommands.Decimal} onClick={setLatestCommand} />
            </GridItem>
            <GridItem>
                <CalculatorButton command={OperationCommands.Equals} onClick={setLatestCommand} />
            </GridItem>
        </div>
    );
};

export default CalculatorGrid;
