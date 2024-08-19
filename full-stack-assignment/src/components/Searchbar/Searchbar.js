import React from 'react'
import "./Searchbar.css"

const Searchbar = () => {
  return (
    <div className='search-comp'>
      <div className='contents' >
      <div className='txt-heading'>
            How can we help?
      </div>  
      <div className='searchbar'>
            <form>
            <input type='text' name='search-data' placeholder='Search' /> 
              <img src='https://cdn-icons-png.flaticon.com/128/2889/2889731.png' alt='right-arrow' />
            <input type='submit' hidden />
              
            </form>
      </div>

      </div>


    </div>
  )
}

export default Searchbar