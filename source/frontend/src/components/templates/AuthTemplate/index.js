import React from 'react';
import PropsTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {
    makeStyles
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
    return ( 
    <Typography 
        variant = "body2"
        color = "textSecondary"
        align = "center" 
    > 
        {'Copyright © '} 
        <Link 
        color = "inherit"
        href = "https://material-ui.com/" 
        >
        Your Website 
        </Link>{' '} {new Date().getFullYear()} {'.'} 
        </Typography>
    );
}


const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function AuthTemplate(props) {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {props.children}
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

AuthTemplate.defaultProps = {
    title: '',
}

AuthTemplate.propTypes = {
    title: PropsTypes.string.isRequired,
}

export default AuthTemplate;