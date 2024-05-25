import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ExerciseList from './components/ExerciseList';
import CreateExercise from './components/CreateExercise';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
        <Route path="/" element={<ExerciseList />} />
        <Route path="/create" element={<CreateExercise />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
