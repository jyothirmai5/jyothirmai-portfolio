import { TextField } from "@mui/material";
import { FunctionComponent } from "react";

interface InputProps {

}

const Input: FunctionComponent<InputProps> = () => {
    return (
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    );
}

export default Input;