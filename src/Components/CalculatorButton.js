import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import { DigitCommands, FunctionCommands, OperationCommands } from '../Constants/Commands';

const BaseButton = withStyles((theme) => ({
    root: {
        boxShadow: 'none',
        borderRadius: 0,
        width: '100%',
        height: '100%',
        color: theme.palette.primary.contrastText
    },
}))(Button);

const DigitButton = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.light,
    },
}))(BaseButton);

const OperationButton = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.secondary.main,
    },
}))(BaseButton);

const FunctionButton = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
    },
}))(BaseButton);

export const CalculatorButton = ({command, onClick}) => {
    const onButtonClick = () => onClick({ value: command });

    if (Object.values(DigitCommands).includes(command)){
        return <DigitButton onClick={onButtonClick}>{command}</DigitButton>;
    }

    if (Object.values(OperationCommands).includes(command)){
        return <OperationButton onClick={onButtonClick}>{command}</OperationButton>;
    }

    if (Object.values(FunctionCommands).includes(command)){
        return <FunctionButton onClick={onButtonClick}>{command}</FunctionButton>;
    }

    return null;
};

export default CalculatorButton;
