
import React from "react";
import { Link } from "react-router-dom";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

import { FaFolder,FaGoogleDrive, FaPlus, FaFileWord, FaFile } from "react-icons/fa";

import "react-pro-sidebar/dist/css/styles.css";
import "./sdbar.css";
import axios from "axios";
const Sdbar = () => {
  
let handleclick = async () =>
{
  try {
    let adddata = await axios.post("https://boopalannodefilesystem.herokuapp.com/create-file", {message : "current date-time"})
    alert(adddata.data);
  } catch (error) {
    alert(error);
  }
    
}
  return (
    <>
      <div id="sdbar">
         
        <ProSidebar>
          <SidebarHeader>
          <div className="logotext">
             <h4 style={{color:'black'}}>Sidebar</h4>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={false} icon={<FaGoogleDrive />}>
                <Link to="/" style={{color: "black"}} >Drive </Link>
              </MenuItem>
              <MenuItem icon={<FaPlus />} onClick={handleclick}>
              <Link to="/textfiles" style={{color: "black"}} >CreateFile</Link></MenuItem>
              <MenuItem icon={<FaFolder />}><Link to="/folder" style={{color: "black"}}>Folders</Link></MenuItem>
              <MenuItem icon={<FaFile />}><Link to="/files" style={{color: "black"}}>Files</Link></MenuItem>
              <MenuItem icon={<FaFileWord />}><Link to="/textfiles" style={{color: "black"}}>Textfiles</Link></MenuItem>
            </Menu>
          </SidebarContent>
          
        </ProSidebar>
      </div>
    </>
  );
};

export default Sdbar;