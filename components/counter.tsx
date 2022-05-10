import Button from '@mui/material/Button';
import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <Button variant="contained" onClick={handleClick}>
            Clicked {count} times!
        </Button>
    );
}
