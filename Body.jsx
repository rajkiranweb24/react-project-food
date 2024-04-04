import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../index.css'
import Shimmer from './Shimmer'
function Body() {
  const [data, setData] = useState([])
  const [searchText,setSearchtext]=useState("")
  const [filteredProducts,setfilteredProducts]=useState([])
 async function getDataFromApi(){
  const APIdata=await fetch("https://fakestoreapi.com/products")
  const finalData=await APIdata.json()
  setData(finalData)
  setfilteredProducts(finalData)
  }

function filterProducts(){
 const filteredpros=data.filter((pro)=>{
  return pro.title.includes(searchText)
 })
setfilteredProducts(filteredpros)

}

  useEffect(()=>{
        getDataFromApi()
  },[])
 console.log("render")
 if(data.length<=0){
  return(
    <Shimmer/>
  )
 }else{
  return (
    <>
      <div>

      <input type="text" placeholder='search product' onChange={(e)=>{setSearchtext(e.target.value)}}/> 
      <button onClick={filterProducts}>search</button>
      </div>
      {console.log("serach text",searchText)}
     <div  className='product-list'>
     {
           filteredProducts.map((each)=>{
              return(
          <div className='product-card' key={each.id}>
                 <h1 className='title'>{each.title}</h1>
                 <img className='product-img' src={each.image}/>
                  <h2 className='title'> {each.price}</h2>
               </div>
              )
           })
          }
     </div>
          
         
         </>
  )
 }

//  {
//   data.length>=0 ? 
//     return(
//    <div>Hello</div>
//     )
//   :

//     return (


//       <>
//       {
//        data.map((each)=>{
//          return(
//            <div style={{border:"5px solid maroon",margin:"3px"}}>
//               <h1>{each.title}</h1>
//               <h2>{each.price}</h2>
//            </div>
//          )
//        })
//       }
     
//      </>
  
     
     
//     )
   
  
// }

  
}

export default Body
