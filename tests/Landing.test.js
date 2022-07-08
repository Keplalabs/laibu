import React from 'react'
import ReactDOM from 'react-dom'
import Landing from '../components/landingPage/Landing';
it('renders without crashing',()=>{
    let div=document.createElement('div')
    ReactDOM.render(<Landing/>,div)
})