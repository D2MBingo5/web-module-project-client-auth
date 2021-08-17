import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input 
                        type='text'
                        name='username'
                        placeholder='username'
                    />
                    <input 
                        type='password'
                        name='password'
                        placeholder='password'
                    />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login