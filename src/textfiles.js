import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function Textfiles ()
{
    const [data,setdata] = useState([]);
    useEffect(async () => {
        try {
            let getdata = await axios.get("https://boopalannodefilesystem.herokuapp.com");
            console.log(getdata)
        setdata([...getdata.data]); 
        } catch (error) {
            console.log(error)
        }              
    }, []) 
    
    return(
        <div>           
             <div className="col-9 row mt-2 " style={{marginLeft : "22%"}}>  
             {
                data.map((item)=>{
                    if(item.type != 'folder')
                    {
                        switch (item.ext) {
                             case "txt":
                                    return(<div className="p-2 col-3 border-0 text-start"><span className="fa fa-file-word ">{item.name}</span></div>) 
                               
                        }
                    }
                })
            } 
        </div>   
       </div> 
    );
}