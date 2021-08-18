import React from 'react'
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'
import FriendForm from './FriendForm'

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        // console.log('friends list')
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            // console.log(res)
            this.setState({
                friends: res.data
            })
            // console.log(this.state.friends)
        })
        .catch(err => {console.log(err)})
    }

    render() {
        return (
            <div>
                <h2>Friends List</h2>
                <div>
                    {this.state.friends.map(f => (
                        <div key={f.id} className='friend'>
                            <div>
                                <span>{f.name}</span>
                                <span> - {f.age}</span>
                                <span> - {f.email}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <FriendForm />
            </div>
            
        )
    }
}

export default FriendsList