import './App.css';
import { Button, Input} from "./components"
import { useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().min(3,"Name should be larger than three chracters").max(10,"less than 10").required("Name is required") ,
  email: yup.string().email("correct email").required("email is required"),
  password: yup.string().required("password is required")
})

function App() {

  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema)
  });

  const formSubmitHandler = values => {
    console.log("values",values)
  }
  console.log("errors",errors)
  return (
    <div className="App">
      <header className="App-header">

         <form onSubmit={handleSubmit(formSubmitHandler)}>

       <div className="flex_col">
 
         <Input placeholder="Name" type="text"   name="name" ref={register} />
         <p>{errors?.name?.message}</p>
         <Input placeholder="email" type="email" name="email" ref={register}/>
         <p>{errors?.email?.message}</p>
         <Input placeholder="password" type="password" name="password" ref={register}/>

         <Button type="submit" title="Done" />
       </div>

         </form>
      </header>
    </div>
  );
}

export default App;
