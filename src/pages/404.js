import React from 'react';
import { Link } from 'gatsby'

const PageNotFound = () =>{
  return(
    <React.Fragment>
      <h1>Page Not Found</h1>
      <Link to='/'> go home</Link>
    </React.Fragment>
  )
}
export default PageNotFound;