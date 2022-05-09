import { useEffect, useState } from 'react';
import { LayoutContext } from '../contexts/LayoutContext';
import useWindowSize from '../hooks/useWindowSize';

interface Props {
    children: any;
}

export default function LayoutProvider(props: Props) {
    const { children } = props;

    const [isOpen, setIsOpen] = useState(false);

    const { width, height } = useWindowSize();

    useEffect(() => {
        if (width >= 1024) {
            setIsOpen(true);
        }
    }, [width]);

    return (
        <LayoutContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </LayoutContext.Provider>
    );
}
