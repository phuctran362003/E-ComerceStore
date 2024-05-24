import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useStoreContext } from "../context/StoreContext";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]


const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

const toolBarStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const boxStyles = {
    display: 'flex',
    alignItems: 'center'
}


interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}
export default function Header({ darkMode, handleThemeChange }: Props) {

    const { basket } = useStoreContext();
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0)
    return (
        <AppBar sx={{ mb: 4 }} position="static">

            <Toolbar sx={toolBarStyles}>

                {/* Box Logo */}
                <Box sx={boxStyles}>
                    <Typography
                        variant="h6"
                        component={NavLink}
                        to='/'
                        sx={{ color: 'inherit', textDecoration: 'none' }}
                    >
                        RE-STORE
                    </Typography>
                    <Switch checked={darkMode} onChange={handleThemeChange} />
                </Box>

                {/* Box Navigation */}
                <Box sx={boxStyles}>
                    {/* midLink */}
                    <List sx={{ display: 'flex' }}>
                        {
                            midLinks.map(({ title, path }) => (
                                <ListItem
                                    component={NavLink}
                                    to={path}
                                    key={path}
                                    sx={navStyles}
                                >
                                    {title.toUpperCase()}
                                </ListItem>
                            ))}
                    </List>
                </Box>

                {/* Box Login */}
                <Box sx={boxStyles}>
                    {/* RightLink */}
                    <IconButton component={Link} to='/basket' size="large" edge="start" color="inherit" sx={{ mr: 2 }} >
                        <Badge badgeContent={itemCount} color="secondary" >
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: 'flex' }}>
                        {
                            rightLinks.map(({ title, path }) => (
                                <ListItem
                                    component={NavLink}
                                    to={path} key={path}
                                    sx={navStyles}>
                                    {title.toUpperCase()}
                                </ListItem>
                            ))
                        }
                    </List>
                </Box>

            </Toolbar>
        </AppBar>
    )
}