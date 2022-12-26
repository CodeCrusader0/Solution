import { useState } from "react";

const Facultyadd=(props)=>{
    let[facob,setfacob]=useState({id:"",firstname:"",lastname:"",course:"",email:"",gender:"",experience:""});

    const handleChange=(event)=>{
        console.log("in handle change");
        const {name,value}=event.target;
        setfacob({...facob,[name]:value});
    }

    const addData=(event)=>{
        event.preventDefault();
        if(facob.id==="" || facob.firstname==="" || facob.lastname==="" || facob.course==="" || facob.email==="" || facob.gender==="" || facob.experience==="")
        {
            alert("Please Enter all sections");
            return;
        }
        props.addfaculty(facob);
        setfacob({id:"",firstname:"",lastname:"",course:"",email:"",gender:"",experience:""});
    }

    return(
        <div>
            <form>
                <div class="form-group">
                    <label for="id">Faculty Id</label>
                    <input type="number" name="id" id="id" class="form-control" 
                    value={facob.id}
                    onChange={handleChange}
                    placeholder="Enter Id">
                    </input>
                </div>
                <div class="form-group">
                    <label for="firstname">Faculty First Name</label>
                    <input type="text" name="firstname" id="firstname" class="form-control" 
                    value={facob.firstname}
                    onChange={handleChange}
                    placeholder="Enter First Name">
                    </input>
                </div>
                <div class="form-group">
                    <label for="lastname">Faculty Last Name</label>
                    <input type="text" name="lastname" id="lastname" class="form-control" 
                    value={facob.lastname}
                    onChange={handleChange}
                    placeholder="Enter Last Name">
                    </input>
                </div>
                <div class="form-group">
                    <label for="course">Faculty Course</label>
                    <input type="text" name="course" id="course" class="form-control" 
                    value={facob.course}
                    onChange={handleChange}
                    placeholder="Enter Course">
                    </input>
                </div>
                <div class="form-group">
                    <label for="email">Faculty Email Ad</label>
                    <input type="text" name="email" id="email" class="form-control" 
                    value={facob.email}
                    onChange={handleChange}
                    placeholder="Enter Email ad">
                    </input>
                </div>
                <div class="form-group">
                    <label for="gender">Faculty Gender</label>
                    <input type="boolean" name="gender" id="gender" class="form-control" 
                    value={facob.gender}
                    onChange={handleChange}
                    placeholder="Enter Gender">
                    </input>
                </div>
                <div class="form-group">
                    <label for="experience">Faculty Id</label>
                    <input type="number" name="experience" id="experience" class="form-control" 
                    value={facob.experience}
                    onChange={handleChange}
                    placeholder="Enter Experience">
                    </input>
                </div>
                <div>
                    <button type="button" class="btn btn-primary" onClick={addData}>Add Faculty</button>
                </div>
            </form>
        </div>
    )
}

export default Facultyadd;