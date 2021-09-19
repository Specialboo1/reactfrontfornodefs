import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function Files ()
{
    const [data,setdata] = useState([]);
    useEffect(async () => {
        try {
            let getdata = await axios.get("http://localhost:3000");
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
                            case "PNG":
                                return(<div className="p-2 col-3 border-0 text-start"><span className="fa fa-image ">{item.name}</span></div>)   
                                case "jpg":
                                    return(<div className="p-2 col-3 border-0 text-start"><span className="fa fa-image ">{item.name}</span></div>)                         
                            case "html":
                                    return(<div className="p-2 col-3 border-0 text-start"><span className="fa fa-html5  ">{item.name}</span></div>) 
                            case "css":
                                    return(<div className="p-2 col-3 border-0 text-start"><span className="fa fa-css3 ">{item.name}</span></div>) 
                             case "txt":
                                    return(<div className="p-2 col-3 border-0 text-start"><span className="fa fa-file-word ">{item.name}</span></div>) 
                                default:
                                return(<div className="p-2 col-3 border-0 text-start"><span className="fa fa-file">{item.name}</span></div>)
                        }
                    }
                })
            } 
        </div>   
       </div> 
    );
}