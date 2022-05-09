import { MenuIcon } from '@heroicons/react/solid';
import { Button } from '@mui/material';
import { useMemo } from 'react';
import { useLayoutContext } from '../../contexts/LayoutContext';
import useWindowSize from '../../hooks/useWindowSize';
import styles from '../../styles/Toolbar.module.scss';
export default function Toolbar() {
    const { isOpen, setIsOpen } = useLayoutContext();
    const { width, height } = useWindowSize();

    const showSidebarExpandButton = useMemo(() => {
        if (width >= 1024) return false;
        return true;
    }, [width]);

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`${styles.toolbar} ${
                showSidebarExpandButton ? styles.withExpandSidebar : ''
            }`}
        >
            {showSidebarExpandButton && (
                <MenuIcon onClick={handleToggleSidebar} />
            )}
            <div>
                <Button
                    variant="outlined"
                    style={{
                        color: 'black',
                        borderColor: 'black',
                    }}
                >
                    Sign up
                </Button>
                <Button
                    variant="contained"
                    style={{
                        color: 'white',
                        borderColor: 'black',
                        backgroundColor: 'black',
                    }}
                >
                    Sign in
                </Button>
            </div>
        </div>
    );
}
