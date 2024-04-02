import { TextField } from "@mui/material";
import { FunctionComponent } from "react";
import { styled } from '@mui/material/styles';

interface InputProps {
    label: string;
    isMessage?: boolean;
    type: string;
    value: string;
    name: string;
    onChange: (e: any) => void
}
const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#ffffff',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ffffff',
        },
        '&:hover fieldset': {
            borderColor: '#ffffff',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#ffffff',
        },
    },
    '& .MuiInputBase-input': {
        color: '#ffffff', // Change this to the desired color
        borderRadius: '12px'
    },
});
const Input: FunctionComponent<InputProps> = ({ name, label, isMessage, type, value, onChange }) => {
    return (
        <CssTextField label={label}
            variant="outlined"
            fullWidth
            type={type}
            multiline={isMessage}
            required
            name={name}
            value={value}
            onChange={onChange}
            rows={isMessage ? 6 : 1}
            InputLabelProps={{
                style: { color: '#ffffff', fontSize: '0.8rem' } // Change 'red' to the desired color
            }} />
    );
}

export default Input;