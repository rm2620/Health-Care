import React, { useEffect, useState } from 'react'

function Vaccination(){
  
  const [pincode,setPincode]=useState("")
  const [pin,setPin]=useState(400029)
  const [posts,setPosts] =useState([])
  const date =new Date().getDate();
  const month =new Date().getMonth() +1;
  const year =new Date().getFullYear();
  
  useEffect(()=> {
    let changeurl= `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}-${month}-${year}`
    fetch(changeurl).then(resp=>resp.json())
    .then((data)=>{
      setPosts(data.sessions)
    });
},[pin])

function handleChange(event){
  event.preventDefault();
   setPincode(event.target.value) 
  }
  function handleClick(event){

    setPin(pincode)
    console.log(pin)
    console.log(posts)
    event.preventDefault();
  }





  return (
      <div>
      <div className='VaccinationHeader'>
      <h1 >Search Your Nearest Vaccination Center</h1>
      <p>Get a preview list of the nearest centers and check availability of vaccination slots</p>
      </div>
      <div className='forminline'>
      <form className="form-inline justify-content-center">
         <div className="form-group form-group-lg  mx-lg-2 mb-2 ">
          <input  
              className="form-control input-lg VaccineSearch" 
              id="inputPassword2" 
              name="PIN"
              onChange={handleChange}
              value ={pincode}
              placeholder='Search By Pin'
              type="text"
              minLength={6}
              maxLength={6}></input>
        </div>
         <button type="submit" className="btn input-lg vaccinesearch mb-2" onClick={handleClick}>Search</button>
      </form>
      </div>
          {/* <form className='create-note'>
             <div className='row VaccineSearch'>
            <div className='col'>
              <input
              name="PIN"
              onChange={handleChange}
              value ={pincode}
              placeholder='Search By Pin'
              type="text"
              minLength={6}
              maxLength={6}
              >   
              </input>
              </div>
              <div className='col'>
            <button >Search</button>
            </div>
            </div>
          </form> */}
          <div >
                {
        posts.length>0?
       <table className="table  table-hover">
          <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Slots</th>
      <th scope="col">Vaccine</th>
      <th scope="col">Age</th>
    </tr>
  </thead>

 <tbody>

           {
             posts?.map((post,index) =>
             {
              
              return  ( 
               <tr key={index}>
               
                {post.available_capacity>0 ?
                 <div>
                <td scope='row'>{post.name} <br></br>
                {post.address}
                </td>
                 <td >
                 {post.available_capacity_dose1>0? <p className='text-success'> Dose1:  {post.available_capacity_dose1}</p>: <p className='text-danger'>  Dose1:  Booked</p> }
                 {post.available_capacity_dose2>0? <p className='text-success'> Dose1:  {post.available_capacity_dose2}</p>: <p className='text-danger'>  Dose2:  Booked</p> }
                 <p> Dose Precautions: {post.available_capacity - ( post.available_capacity_dose1 +post.available_capacity_dose2)}</p>
                 </td>
                 <td> {post.fee>0 ? <p>{post.vaccine}:{post.fee}<p className='text-warning'>Paid</p></p> :<p>{post.vaccine}<p className='text-success'>Free</p></p>}
                 </td>
                  <td> <p className='text-primary'>  Age: {post.min_age_limit} & Above </p>  </td> 
                  </div>: null}
                 </tr>
              )
             })
           
           }
           </tbody>
         </table>
     : null}


</div>
      </div>
  )

}
export default Vaccination;