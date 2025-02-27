import React, { Component } from 'react'

export default class Post extends Component {
    
    state = {
        posts: []
    }

    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json()
        this.setState({posts: data})
    }

  render() {
    return (
      <div>
        <h1>Post</h1>
        {
            this.state.posts.map(post => {
                return(
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.id}</p>
                </div>
                )
            })
        }
      </div>
    )
  }
}
