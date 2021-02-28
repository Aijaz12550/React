import './App.css';
import {Form, Formik} from "formik"
import * as yup from "yup";

let initialValues = {
  name:"",
  email:"",
  pass:"",
  c_pass:"",
}

let schema = yup.object().shape({
  name: yup.string().required("required"),
})
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Formik 
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values)=>{
          console.log("values",values)
        }}
        >


          {({handleChange,errors,...rest})=>{

            console.log("props",rest)

           return <Form >
            <input placeholder="name" name="name" type="text" onChange={handleChange} />
            <span>{errors?.name}</span>
            <br />
            <input placeholder="name" name="email" type="text" onChange={handleChange}/>
            <br />
            <input placeholder="name" name="pass" type="text" onChange={handleChange}/>
            <br />
            <input placeholder="name" name="c_pass" type="text" onChange={handleChange}/>
            <br />
            <input  type="submit" />
          </Form>
          }}

        </Formik>
       
      </header>
    </div>
  );
}

export default App;
