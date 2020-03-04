import React, { Component } from "react";
import axios from 'axios'; 

class Imagess extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            SelectedFiles:null
             
        }
    }
    // fileChange = (e) =>{

    //    this.setState({SelectedFiles:e.target.files[0]})
    // }
    // UploadFiles = (e) =>{
    //    // e.preventDefault()
    //     const fd =new FormData();
    //     fd.append('image', this.state.SelectedFiles , this.state.SelectedFiles.name)
    //     axios.post('https://api.cloudinary.com/v1_1/dd5qzkxht/image/upload',fd)
    //     .then(res => {console.log(res)})


    // }
    
  render() {
    return (
    //  <div>
    //      {/* <form>
    //      <h3>
    //    image upload Demo
    //    </h3>
    //    <input type='file' onChange={this.fileChange} />
    //    <button onClick={this.UploadFiles}>Upload_File</button>
    //    </form> */}
    //  </div>
     <div>
       
     </div>
     
    );
  }
}

export default Imagess;
