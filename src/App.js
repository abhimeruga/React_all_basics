import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonCounter from './Components/HOC/ButtonCounter'
import MouseOverCounter from './Components/HOC/MouseOverCounter'
import RenderCounter from './Components/RenderProps/RenderCounter';
import ParentRender from './Components/RenderProps/ParentRender'
import HeroName from './Components/ErrorBoundary/HeroName'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import Portal from './Components/Portal';
import A from './Components/Context/A';
import UseReducerHook from './Components/Hooks/UseReducerHook'
import CounterTwo from './Components/Hooks/CustomeHooks/CounterTwo'
import CounterOne from './Components/Hooks/CustomeHooks/CounterOne'
function App() {
  return (
    <div className="App">
      {/* <ButtonCounter/>
      <MouseOverCounter/>
      <ParentRender render={(count, incrementCounter)=>{
        return(<RenderCounter count={count} incrementCounter={incrementCounter}/>)        
      }}/>
      <ErrorBoundary>
        <HeroName name='IornMan' />
      </ErrorBoundary>
      <Portal />
      <A /> 
    <UseReducerHook />*/}
    <CounterTwo />
    <CounterOne />
    </div>
  );
}

export default App;
