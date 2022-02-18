import React, { useState } from 'react'
import Field from './Field'
import useStyles from './styles'
import styles from './Login.module.css'
import {useDispatch} from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { signup, signin } from '../../actions/auth'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useSnackbar } from 'react-simple-snackbar'
import ProgressButton from 'react-progress-button'

import BrandImg from '../../images/brand.png'



const initialState ={ firstName: '', lastName: '', email: '', password: '', confirmPassword: '', profilePicture: '', bio: ''}

const Login = () => {


    const classes = useStyles();
    const [formData, setFormData] = useState(initialState)
    const [isSignup, setIsSignup] = useState(false)
    const [signinStatus, setSigninStatus] = useState(null)
    const dispatch = useDispatch()
    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false);
     // eslint-disable-next-line 
    const [openSnackbar, closeSnackbar] = useSnackbar()
    const user = JSON.parse(localStorage.getItem('profile'))
    
    const handleShowPassword = () => setShowPassword(!showPassword);
    const handleChange =(e)=> {
        setFormData( {...formData, [e.target.name] : e.target.value} )
    }

    const handleSubmit =(e) => {
        e.preventDefault()
          setTimeout(() => {
            setSigninStatus('')
            }, 1000)
        if(isSignup) {
            dispatch(signup(formData, openSnackbar))
        } else {
            dispatch(signin(formData, openSnackbar))
        }
    }


    const switchMode =() => {
        setIsSignup((prevState) => !prevState)
    }


    if(user) {
      history.push('/dashboard')
    }

    return (
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={2}>
          <img style={{paddingTop: "15px"}} src={BrandImg} alt="Brand" />
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignup ? "Sign up" : "Sign in"}
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Field
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    half
                  />
                  <Field
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    half
                  />
                </>
              )}
              <Field
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
              />
              <Field
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
              {isSignup && (
                <Field
                  name="confirmPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type="password"
                />
              )}
            </Grid>
            <div className={styles.buttons}>
              <div>
                {/* <button className={styles.submitBtn}> { isSignup ? 'Sign Up' : 'Sign In' }</button> */}
                <ProgressButton state={signinStatus}>
                  {isSignup ? "Sign Up" : "Sign In"}
                </ProgressButton>
              </div>
              <div>
              </div>
            </div>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup
                    ? "Already have an account? Sign in"
                    : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
            <Link to="forgot">
              <p
                style={{
                  textAlign: "center",
                  color: "#1d7dd6",
                  marginTop: "20px",
                }}
              >
                Forgotten Password?
              </p>
            </Link>
          </form>
        </Paper>
      </Container>
    );
}

export default Login
