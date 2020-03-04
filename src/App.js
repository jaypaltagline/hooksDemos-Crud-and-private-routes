import React from 'react';
import { Route, Switch } from 'react-router'
// import ClassCounter from './components/classCounter';
import './App.css';
// import HooksCounter from './components/HooksCounter';
// import HooksTowCounter from './components/HooksTowCounter';
// import HooksCounterObj from './components/HooksCounterObj';
// import ArrayHooks from './components/ArrayHooks';
// import UseeffectHooks from './components/UseeffectHooks';
// //import mousePosition from './components/mousePosition';
//import DataFetching from './components/DataFetching';
//import ImageUpload from './components/images';
//import Logical from './components/logical';
//import Prints from './components/prints'
//import Out from './components/FormData/app';
import Login from './components/LoginDemo/LoginForm';
import Welcome from './components/LoginDemo/Welcome';
import Imagess from './components/image';
import Img from './components/img';
import Pass1 from './components/paasign_data/Pass1';
import Dropdown from './components/dropdown'
import Filter from './components/PassData.js/result';
import DataAdd from './components/PassData.js/DataAdd';
import LS from './components/LocalStorege/LS';
import LSFetch from './components/LocalStorege/LSFetch';
import CrudData from './components/Crud/CrudData';
import DatePickerr from './components/DatePicker/DatePicker';
import CrudDemo from './components/Crud/Cruddemo';
import DynamicForm from './components/Dynamic_Form/form'
function App() {
  return (
    <div className="App">

      <Switch>
       <Route exact path='/' component={Login} />
       <Route exact path='/welcome' component={Welcome} />  
       <Route exact path='/imgages' component={Imagess} />
       <Route exact path='/img' component={Img} />
       <Route exact path='/pass1' component={Pass1} />
       <Route exact path='/dropdown' component={Dropdown} />
       <Route exact path='/filter' component={Filter} />
       <Route exact path='/dataadd' component={DataAdd} />
       <Route exact path='/ls' component={LS} />
       <Route exact path='/lsfetch' component={LSFetch} />
       <Route exact path='/cruddata' component={CrudData} />
       <Route exact path='/datepicker' component={DatePickerr} />
       <Route exact path='/CrudDemo' component={CrudDemo} />
       <Route exact path='/dynamicform' component={DynamicForm} />

      </Switch>

      {/* <Out /> */}
      {/* <Prints /> */}
      {/* <Logical name='jaypal' age='22'>hellow every</Logical> */}
      {/* <DataFetching /> */}
      {/* <ImageUpload /> */}

      {/* <mousePosition /> 
      <UseeffectHooks />
    <ClassCounter />
    <HooksCounter />
    <HooksTowCounter />
    <HooksCounterObj />
    <ArrayHooks /> */}

    </div>
  );
}

export default App;
