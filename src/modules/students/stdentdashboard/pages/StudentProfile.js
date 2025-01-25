import React from 'react'



const a = 500;
function StudentProfile() {
  if(a>=400)
  {
    return (
        <div className='bg-info'>
            <h1>StudentProfile first</h1>
            {a}
        </div>
      )
  }
  else if(a>=200)
  {
    return (
        <div className='bg-danger'> 
            <h1>StudentProfile second </h1>
            {a}
        </div>
      )
  }
  else
  {
    return (
        <div className='bg-warning'>
            <h1>StudentProfile else </h1>
            {a}
        </div>
      )
  }

}

export default StudentProfile