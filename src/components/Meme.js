import React, { useState } from 'react'
// import ShareIcon from '@mui/icons-material/Share';
import '../App.css'
import {saveAs} from 'file-saver'
function Meme({meme,setMeme,setUrl}) {
    const [error,setError]=useState(null)
    const [uri,setUri]=useState(null)

    const [form,setForm]=useState({
        template_id:meme.id,
        username:"AnirudhRana1",
        password:"Qwerty@123",
        boxes:[],
    })

    const downloadImage = () => {
        saveAs(uri, 'image.jpg') // Put your image url here.
    }
    const generateMeme = () =>{
        // console.log(form)
        let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
            form.boxes.map(( box, index ) => {
                // console.log(`boxes[${index}][text]=${box.text}`)
                url+=`&boxes[${index}][text]=${box.text}`;
            })
            console.log(url)
            fetch(url)
            .then((res) => res.json())
            .then((result) => {
                // console.log(res.data)
                if(result.success === true){
                    setError(null)
                    setMeme({...meme,url:result.data.url})
                    setUrl(result.data.url);
                    setUri(result.data.url)
                }
                else 
                    setError(result.error_message)
            });
    }
  return (
    <div className='meme'>
        <img className='meme-image' src={meme.url} alt=""/>
        <div>
            {
                [...Array(meme.box_count)].map(( _ ,index )=>(
                    <input type="text" 
                        placeholder={` ENTER CAPTION ${index+1} `}
                        onChange={(e)=>{
                            const newboxes= form.boxes;
                            newboxes[index]={text:e.target.value}
                            setForm({...form,boxes:newboxes})
                        }}
                    />
                ))
            }
            
        </div>
        {error?<div className='err'>*{error}</div>:null}
        <button onClick={generateMeme}>Create MEME</button>      
        <button onClick={()=>setMeme(null)}>return to templates</button>
        <button onClick={downloadImage}>Download</button>
        {/* <ShareIcon onClick={shareMeme}/> */}
    </div>
  )
}

export default Meme
