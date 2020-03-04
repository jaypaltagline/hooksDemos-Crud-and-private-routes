import React, { useState } from 'react'

export default function Img() {

    const [image, setImage] = useState('')
    const [loading , setLoading] = useState(false)

    const uploadimage = async e =>{
        const files =e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset','jaypalupload')
        setLoading(true)
        const res = await fetch('https://api.cloudinary.com/v1_1/dd5qzkxht/image/upload',
        {
         method:"POST",
         body:data   
        })
        const file = await res.json()

        setImage(file.secure_url)
        setLoading(false)
    } 
//    const handleSubmit =(e) => {
//         e.preventDefault();

//             image.copy('f:/')
//     }
    
    return (
        <div>
            <hr />
            <h3>Image Upload Demo</h3>
            <hr />
            <input type='file'
            name='file'
            onChange={uploadimage}
            />
            {
                loading ? (
                    <h3>loading...</h3>
                ):(
                    <img src={image} style={{width: '300px'}} />
                    )
            }

        </div>
    )
} 
