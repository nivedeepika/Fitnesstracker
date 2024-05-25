import React, { Component } from 'react';
import axios from 'axios';

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);
    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <ul>
          {this.state.exercises.map(exercise => (
            <li key={exercise._id}>{exercise.description}</li>
          ))}
        </ul>
      </div>
    );
  }
}