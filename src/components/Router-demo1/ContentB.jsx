import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import { Route, Routes, Navigate } from 'react-router-dom';
import SubContentC from './subContentC/SubContentC';
import SubContentD from './subContentD/SubContentD';

export default class ContentB extends Component {
  render() {
    return (
      <div>
          <h1>ContentB</h1>
          <div>
            <div><button><NavLink to="subContentC">SubContecntC</NavLink></button></div>
            <div><button><NavLink to="subContentD">SubContecntD</NavLink></button></div>
          </div>

          <Routes>
            <Route path="subContentC" element={<SubContentC />}/>
            <Route path="subContentD/*" element={<SubContentD />}/>
            <Route path="*" element={<Navigate to ="subContentC" />}/>
          </Routes>
      </div>
    )
  }
}
