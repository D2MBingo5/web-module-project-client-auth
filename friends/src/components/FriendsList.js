import React from 'react'
import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'

class FriendsList extends React.Component {
    state = {
        friends: []
    }

    componentDidMount() {
        console.log('friends list')
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res)
            this.setState({
                friends: res.data
            })
            console.log(this.state.friends)
        })
        .catch(err => {console.log(err)})
    }

    render() {
        return (
            <div>
                <div>Friends List</div>
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
            </div>
            
        )
    }
}

export default FriendsList