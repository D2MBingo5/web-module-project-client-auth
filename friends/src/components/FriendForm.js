import React from 'react'

class FriendForm extends React.Component {

    render(){
        return(
            <div>
                <h2>Add Friend</h2>
                <form>
                    <input 
                        type='text'
                        name='name'
                        placeholder='name'
                    />
                    <input 
                        type='number'
                        name='age'
                        placeholder='age'
                    />
                    <input 
                        type='email'
                        name='email'
                        placeholder='email'
                    />
                    <button>Submit</button>
                </form>  
            </div>
            
        )
    }
}

export default FriendForm