import React , {useState,useEffect} from 'react'
import '../App.css'
function Fetch({setMeme}) {
    // to store all MEMEs
    const [templates,setTemplates] = useState([]);

    // to fetch images for the meme via **img flip api**
    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res.data.memes)
            setTemplates(res.data.memes)
        });
    },[]);
  return (
    <div className='templates'>
        {templates.map((template) => (
            <div key={template.id}className='template' onClick={()=>setMeme(template)}>
                <div style={{backgroundImage:`url(${template.url})`}}
                    className='image'
                />
            </div>
        )
    )}
       
    </div>
  )
}
export default Fetch
