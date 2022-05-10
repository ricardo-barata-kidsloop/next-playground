import ApiOutlined from '@mui/icons-material/ApiOutlined';
import ArrowCircleLeftOutlined from '@mui/icons-material/ArrowCircleLeftOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import GridView from '@mui/icons-material/GridView';
import HomeOutlined from '@mui/icons-material/HomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { allDocs, Doc } from 'contentlayer/generated';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useLayoutContext } from '../../contexts/LayoutContext';
import useWindowSize from '../../hooks/useWindowSize';
import styles from '../../styles/Sidebar.module.scss';

export default function Sidebar() {
    const { isOpen, setIsOpen } = useLayoutContext();
    const { width, height } = useWindowSize();

    const showSidebarCollapseButton = useMemo(() => {
        if (width >= 1024) return false;
        return true;
    }, [width]);

    const [apiNavOpen, setApiNavOpen] = useState(true);
    const [docsNavOpen, setDocsNavOpen] = useState(true);

    const handleApiRouteClick = () => {
        setApiNavOpen(!apiNavOpen);
    };

    const handleDocsRouteClick = () => {
        setDocsNavOpen(!docsNavOpen);
    };

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {isOpen && showSidebarCollapseButton && (
                <div className={styles.backdrop}></div>
            )}
            <div className={`${styles.sidebar} ${isOpen ? '' : styles.closed}`}>
                {showSidebarCollapseButton && (
                    <div>
                        <ArrowCircleLeftOutlined
                            fontSize="large"
                            style={{
                                color: '#e2e8f0',
                                margin: '1rem',
                            }}
                            onClick={handleToggleSidebar}
                        ></ArrowCircleLeftOutlined>
                    </div>
                )}
                <List component="nav">
                    <Link href="/" passHref>
                        <ListItem button component="a">
                            <ListItemIcon>
                                <HomeOutlined
                                    style={{
                                        color: '#e2e8f0',
                                    }}
                                ></HomeOutlined>
                            </ListItemIcon>
                            <ListItemText primary="Landing" />
                        </ListItem>
                    </Link>
                    <ListItemButton onClick={handleApiRouteClick}>
                        <ListItemIcon>
                            <ApiOutlined
                                style={{
                                    color: '#e2e8f0',
                                }}
                            ></ApiOutlined>
                        </ListItemIcon>
                        <ListItemText primary="Specs" />
                        {apiNavOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={apiNavOpen} timeout="auto" unmountOnExit>
                        <List
                            component="div"
                            disablePadding
                            sx={{ marginLeft: '1rem' }}
                        >
                            <Link href="/specs/swagger" passHref>
                                <ListItem button component="a">
                                    <ListItemIcon>
                                        <GridView
                                            style={{
                                                color: '#e2e8f0',
                                            }}
                                        ></GridView>
                                    </ListItemIcon>
                                    <ListItemText primary="Swagger" />
                                </ListItem>
                            </Link>
                            <Link href="/specs/elements" passHref>
                                <ListItem button component="a">
                                    <ListItemIcon>
                                        <GridView
                                            style={{
                                                color: '#e2e8f0',
                                            }}
                                        ></GridView>
                                    </ListItemIcon>
                                    <ListItemText primary="Elements" />
                                </ListItem>
                            </Link>
                            <Link href="/specs/redoc" passHref>
                                <ListItem button component="a">
                                    <ListItemIcon>
                                        <GridView
                                            style={{
                                                color: '#e2e8f0',
                                            }}
                                        ></GridView>
                                    </ListItemIcon>
                                    <ListItemText primary="Redoc" />
                                </ListItem>
                            </Link>
                        </List>
                    </Collapse>
                    <ListItemButton onClick={handleDocsRouteClick}>
                        <ListItemIcon>
                            <LibraryBooksOutlinedIcon
                                style={{
                                    color: '#e2e8f0',
                                }}
                            ></LibraryBooksOutlinedIcon>
                        </ListItemIcon>
                        <ListItemText primary="Docs" />
                        {apiNavOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={docsNavOpen} timeout="auto" unmountOnExit>
                        <List
                            component="div"
                            disablePadding
                            sx={{ marginLeft: '1rem' }}
                        >
                            {allDocs.map((doc: Doc) => (
                                <Link
                                    key={doc._id}
                                    href={`/docs/${doc._raw.flattenedPath}`}
                                    passHref
                                >
                                    <ListItem button component="a">
                                        <ListItemIcon>
                                            <MenuBookOutlinedIcon
                                                style={{
                                                    color: '#e2e8f0',
                                                }}
                                            ></MenuBookOutlinedIcon>
                                        </ListItemIcon>
                                        <ListItemText primary={doc.title} />
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Collapse>
                </List>
            </div>
        </>
    );
}
