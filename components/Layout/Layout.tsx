import LayoutProvider from '../../providers/LayoutProvider';
import styles from '../../styles/Layout.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import Toolbar from '../Toolbar/Toolbar';

interface Props {
    children: any;
}

export default function Layout(props: Props) {
    const { children } = props;

    return (
        <LayoutProvider>
            <div className={`${styles.layout}`}>
                <Sidebar />

                <div className={styles.mainWrapper}>
                    <Toolbar />
                    <main>{children}</main>
                </div>
            </div>
        </LayoutProvider>
    );
}
