import logo from './logo.svg';
// import './App.css';
import Hello from './components/Hello/Hello';
import Clock from './components/Clock/Clock';
import Todo from './components/Todo/Todo';
import Student from './components/Axios/Student';
import Search from './components/pubsub-demo/Search';
import List from './components/pubsub-demo/List';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navigator1 from './components/Router-demo1/Navigator1'
import ContentA from './components/Router-demo1/ContentA'
import ContentB from './components/Router-demo1/ContentB'
import SubContentC from './components/Router-demo1/subContentC/SubContentC';
import SubContentD from './components/Router-demo1/subContentD/SubContentD';
import AntdDemo from './components/antd-demo/AntdDemo';
import Result from './components/calculate_onlyReact/Result'
import Actions from './components/calculate_onlyReact/Actions';
import Numbers from './components/calculate_onlyReact/Numbers';
import Result2 from './components/calculate_withRedux/Result2'
import Actions2 from './components/calculate_withRedux/Actions2'
import Numbers2 from './components/calculate_withRedux/Numbers2'
import { Provider } from 'react-redux';
import store from './components/redux/store';
import Person from './components/Person/Person';
import DisplayPerson from './components/Person/DisplayPerson';
import SetStateDemo from './extensions/1_setStateHook';
import { Context, ChildContext } from './extensions/2_context';
import { ErrorBoundaryDemo } from './extensions/3_ErrorBoundary';
import ParentPage from './components/router-demo-new/pages/ParentPage';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      {/* <Todo/> */}
      {/* <Student /> */}
      {/* <Search />
      <List /> */}
      {/* <Navigator1 />
      <Routes>
          <Route path="contentA" element={<ContentA />}/>
          <Route path="contentB" element={<ContentB />}/>
          <Route path="contentB/*" element={<ContentB />} />
          <Route path="/" element={<Navigate to ="/contentA" />}/>
      </Routes> */}

      
      
      {/* <Numbers />
      <Actions />
      <Result /> */}

      {/* redux */}
      {/* <Provider store={store}>
        <Numbers2 />
        <Actions2 />
        <Result2 />
        <Person />
        <DisplayPerson />
      </Provider> */}
      {/* <SetStateDemo /> */}
      {/* <Context /> */}

      {/* <ErrorBoundaryDemo /> */}

      {/* react-router-dom new demos */}
      <ParentPage />
    </div>
  );
}

export default App;
