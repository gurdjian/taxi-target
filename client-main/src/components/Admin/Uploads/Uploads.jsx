import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import style from './style.module.css'



export default function Uploads() {
  const url = 'http://localhost:3001';
  const [img, setimg] = useState(null)
  
  const sendFile = useCallback(
    async () => {
      try {
        const data = new FormData();
        data.append('file', img)

        await axios.post(`${url}/file/upload`, data
          , {
          headers: {
            'content-type': 'multipart/form-data'
          }
          }
        )
        .then(res => console.log(res))
      } catch (error) {}
    },
    [img],
  )
  // const sendFile = async () => {
  //   try {
  //     const data = new FormData();
  //     data.append('macket', img)

  //     await axios.post(`${url}/file/upload`, data, {
  //       headers: {
  //         'content-type': 'multipart/form-data'
  //       }
  //     })
      
  //   } catch (error) {
      
  //   }
  // }
  return (
    <div >
        <input name='bla' type="file" onChange = {e => setimg(e.target.files[0] )} /><br /><br />
        <button className='btn' onClick={sendFile}>Отправить</button>
    </div> 
  )
}

// const [drag, setDrag] = useState(false);

  // const dragStartHandler = (e) => {
  //   e.preventDefault();
  //   setDrag(true);
  // }

  // const dragLeaveHandler = (e) => {
  //   e.preventDefault();
  //   setDrag(false);
  // }

  // const onDropHandler = (e) => {
  //   e.preventDefault();
  //   let files = [...e.dataTransfer.files]
  //   console.log(files);
  //   const formData = new FormData();
  //   formData.append('file', files[0])
  //   setDrag(false)
  // }