
import { useState, useEffect, useRef } from "react";

const useDropdown = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return { open, setOpen, menuRef };
};

export default useDropdown;










// import React, {useState, useEffect, useRef} from 'react';

// function App() {

//   const [open, setOpen] = useState(false);

//   let menuRef = useRef();

//   useEffect(() => {
//     let handler = (e)=>{
//       if(!menuRef.current.contains(e.target)){
//         setOpen(false);
//         console.log(menuRef.current);
//       }      
//     };

//     document.addEventListener("mousedown", handler);
    

//     return() =>{
//       document.removeEventListener("mousedown", handler);
//     }

//   });
// };

// export default function App