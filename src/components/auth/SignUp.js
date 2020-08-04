import React, {useState} from "react";
import {makeStyles, styled} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import {BLACK, MyButton} from "../main/Styles";
import EmailIcon from '@material-ui/icons/Email';
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles({

    signUpContainer: {
        transform: props => props.rightPanel && 'translateX(100%)',
        opacity: props => props.rightPanel ? 1 : 0,
        zIndex: props => props.rightPanel ? 5 : 1,
        left: 0,
        width: '50%'
    },

    socialContainer: {
        margin: '20px 0',
    },

    social: {
        border: props => props.media && `1px solid ${BLACK}`,
        borderRadius: '50%',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 5px',
        height: props => props.media && '40px',
        width: props => props.media && '40px',
        cursor: "pointer"
    },
})

const MyTextField = styled(TextField)({
    width: '100%',
    marginTop: '10px'
})

const MyBtn = styled(MyButton)({
    margin: '20px 0'
})

export default function SignUp(props) {
    const [showPassword, setShowPassword] = useState(false)
    const {error, name, surname, email, password, signIn, rightPanel, classFormContainer, media} = props
    const classes = useStyles({rightPanel, media})

    return (
        <div className={`${classFormContainer} ${classes.signUpContainer}`}>
            <form>
                {media ? <h1>Create Account</h1> : <h3>Create Account</h3>}
                <div className={classes.socialContainer}>
                    <a className={classes.social}><FacebookIcon/></a>
                    <a className={classes.social}><GitHubIcon/></a>
                    <a className={classes.social}><MailIcon/></a>
                </div>
                <span>or use your email for registration</span>
                <MyTextField label="Name..."
                             type="text"
                             value={name.value}
                             onChange={name.onChange}
                             autoComplete="on"/>
                <MyTextField label="Surname..."
                             type="text"
                             value={surname.value}
                             onChange={surname.onChange}
                             autoComplete="on"/>
                <MyTextField label="Email..."
                             type="email"
                             InputProps={{endAdornment: <EmailIcon position="start"/>}}
                             value={email.value}
                             onChange={email.onChange}
                             autoComplete="on"
                             error={!!error}
                             helperText={error}/>
                <MyTextField label="Password..."
                             type={showPassword ? 'text' : 'password'}
                             InputProps={{
                                 endAdornment: (
                                     <div className={classes.cursor}> {showPassword ?
                                         <VisibilityIcon position="start" onClick={() => setShowPassword(!showPassword)}/> :
                                         <VisibilityOffIcon position="start"
                                                            onClick={() => setShowPassword(!showPassword)}/>}
                                     </div>)
                             }}
                             value={password.value}
                             onChange={password.onChange}
                             autoComplete="off"/>
                <MyBtn color="primary"
                          variant="contained"
                          disabled={!name.value || !surname.value || !email.value || !password.value}
                          onClick={signIn}>Sign up</MyBtn>
            </form>
        </div>
    )
}
