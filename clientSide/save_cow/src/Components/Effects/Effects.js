import React, { useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import Navbar from '../../Components/NavBar/NavBar'
import {getAllDiseases} from '../../Redux/ProductReducer/Action'
import './Effects.css'
export const Diseases=()=>{
   const dispatch=useDispatch()
   const diseasesData=useSelector(state => state.diseases.diseasesData)
   console.log(diseasesData);
   useEffect(()=>{
    dispatch(getAllDiseases());
   },[])
   const [search,setSearch]=useState("");
    return(
        <div>
            <Navbar/>
            <div>
                <img src='../../resources/cattle-insurance.jpg' alt="Image not found" className="image-gallery"/>
                <h1 className="qoutes">It doesn't matter how much milk you spill as long as
                    you don't lose the cow.</h1>
                
            </div>
            <div>
   
            </div>
            <div>
                <input type="text" className="related-links" onChange={(e)=>{setSearch(e.target.value)}}/>
            </div>
            <div className="article-title">
            {
                diseasesData.filter((ele)=>{
                    if(ele.diseases_name.toLowerCase().includes(search.toLowerCase())){
                        return ele;
                    }
                }).map(({medicine,image,diseases_name,symptoms})=>(
                
                   
                    <div className="disease-page-container">
                        <div>
                            <img src={image} alt="no image" className="image-section"/>
                            <h2 className="disease_name">{diseases_name}</h2>
                            <h2 className="symptoms">Symptoms:</h2>
                            <h3 className="symptoms_names">{symptoms}</h3>
                            <h2 className="medicine">Medicine:</h2>
                            <h4 className="medicine_name">{medicine}</h4> 
                            <button className="viewmore">View More</button>
                        </div>
                        
                    </div> 
                
                ))
            }
            </div>
            
        </div>
    )

}
    
export default Diseases;


