import Facultycard from './Facultycard';
import {useState} from 'react';
import Facultyedit from './Facultyedit';
const Facultylist=(props)=>{
    let[flag,setflag]=useState(false);
    let[facty,setfacty]=useState({id:"",firstname:"",lastname:"",course:"",email:"",gender:"",experience:""});

    const changefaculty=(ob)=>{
        setflag(true);
        console.log(ob);
        setfacty({...ob});
    }
    const deleteData=(id)=>{
        props.removeData(id);
    }
const renderlist=()=>props.faculty1.map((fac,index)=>{
    return <Facultycard key={facty.id} faculty2={fac} removeFac={deleteData} editFaculty={changefaculty}></Facultycard>
});
const modifyFac=(ob)=>{
    props.updateFac(ob);
    setflag(false);
}
return(
    <div>
        <div>
            <h1>Faculty Department</h1>
            {renderlist()}
        </div>
        <div>
            {flag?(<div>
                <Facultyedit faculty2={facty} modifyData={modifyFac}></Facultyedit>
            </div>):""};
        </div>
    </div>
)
}
export default Facultylist;