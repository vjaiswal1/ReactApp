import React from 'react'

const NoContent = ({ data }) => <h1>{ data }</h1>
const NotFound = () => <NoContent data={ data } />

export default NotFound;