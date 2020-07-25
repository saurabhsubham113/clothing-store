import React, { Component } from 'react'
import './Sign-in.style.scss'
import FormInput from '../Form-input/Form-input.component'
import CustomButton from '../Custom-button/Custom-Button.component'
import { signInWithGoogle } from '../../Firebase/firebase.utils'

class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email:'',password:''})
    }

    handleChange = e => {
        const {value, name} = e.target
        //checking what is changed (email:email value,password:value)
        this.setState({ [name] : value })
    }
 
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign-in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email'label='email' handleChange={this.handleChange} required value={this.state.email} />
             

                    <FormInput name='password' label='password' handleChange={this.handleChange} type='password' required value={this.state.password} />
                  
                    <div className="buttons">
                        <CustomButton type="submit" >
                            Sign In
                        </CustomButton>
                        <CustomButton type='submit' onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign In with google{' '}
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn
