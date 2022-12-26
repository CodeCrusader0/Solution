import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Facultyadd from './components/Facultyadd';
import Facultylist from './components/Facultylist';
import { useState } from 'react';

function App()
{
  let[facarr,setarr]=useState(
    [
      {id:101,firstname:"Merill",lastname:"Bartolommeo",course:"Engineering",email:"mbartolommeo0@biglobe.in",gender:"Female",experience:29},
      {id:102,firstname:"Konstantin",lastname:"Eddison",course:"Enginnering",email:"keddison1@hibu.com",gender:"Male",experience:22},
      {id:103,firstname:"Hali",lastname:"Goodban",course:"BCS",email:"hgoodban2@alexa.com",gender:"Female",experience:38},
      {id:104,firstname:"Jolyn",lastname:"Valero",course:"Medical",email:"jvalero3@rambler.ru",gender:"Female",experience:17},
      {id:105,firstname:"Alon",lastname:"Summerley",course:"BCS",email:"asummerley4@hc360.com",gender:"Male",experience:29},
      {id:106,firstname:"Emelen",lastname:"Speaks",course:"Medical",email:"espeaks5@google.com",gender:"Male",experience:27}
    ]
  )

  const insertData=(ob)=>{
    setarr([...facarr,{...ob}]);
  }

  const deletefaculty=(id)=>{
    let newarr=facarr.filter(ob=>ob.id!==id);
    setarr(newarr);
  }

  const editData=(ob)=>{
      let newarr= facarr.map(fac=>fac.id===ob.id?{...ob}:{...fac});
      setarr(newarr);
  }
  return (
    <div>
    <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-sm-12  col-md-6">
              <Facultyadd addfaculty={insertData}></Facultyadd>
           </div>
            <div className="col-sm-12  col-md-6">
              <Facultylist faculty1={facarr} removeData={deletefaculty} updateFac={editData}></Facultylist>
             </div>
        </div>
      </div>
    </div>
  );
}

export default App;
