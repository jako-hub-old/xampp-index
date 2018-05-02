import React, {Component, Fragment} from 'react';
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import Excersice1 from "./Logic/Excersice1.jsx";

import {exercices, muscles} from '../store';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercices,
            exercise: {},
            editMode: false,
        };
    }

    getExercicesByMuscle() {
        const initialExercises = muscles.reduce((exercices, category) => ({
            ...exercices,
            [category] : []
        }), {});

        return Object.entries(
            this.state.exercices.reduce((exercices, exercise) => {
                    const {muscles} = exercise;
                    exercices[muscles] = [...exercices[muscles], exercise];
                    return exercices
            }, initialExercises)
        );
    }

    handleCategorySelected(category) {
        this.setState({
            category
        });
    };

    handleExerciseSelected(id) {
        this.setState(({ exercices }) => ({
            exercise: exercices.find(ex => ex.id === id),
        }));
    }

    deleteExercise(id) {
        this.setState(({exercices}) => ({
            exercices: exercices.filter(ex => ex.id !== id),
            editMode: false,
            exercise: {},
        }));
    }

    editExercise(id) {
        this.setState(({ exercices }) => ({
            exercise: exercices.find(ex => ex.id === id),
            editMode:true,
        }));
    }

    updateExercise(exercise) {
        this.setState(({exercices}) => ({
            exercices: [
                ...exercices.filter(ex => ex.id !== exercise.id),
                exercise,
            ],
            exercise: exercise,
            editMode: false,
        }));
    }

    cancelEdit() {
        this.setState({
            editMode: false,
        })
    }

    createExercise(exercise) {
        //exercise.id = exercise.title;
        this.setState(({exercices}) => ({
            exercices : [
                ...exercices,
                exercise
            ],
        }));
    }

    render() {
        const exercices = this.getExercicesByMuscle();
        const {category, exercise, editMode} = this.state;
        return (
            <Fragment>
                <Header muscles={muscles} onCreateExercise={this.createExercise.bind(this)} />
                <Excersice1
                    editMode={editMode}
                    exercise={exercise}
                    category={category}
                    muscles={muscles}
                    exercices={exercices}
                    onSelect={this.handleExerciseSelected.bind(this)}
                    deleteExercise={this.deleteExercise.bind(this)}
                    editExercise={this.editExercise.bind(this)}
                    handleEdit={this.updateExercise.bind(this)}
                    cancelEdit={this.cancelEdit.bind(this)}
                />
                <Footer
                    category={category}
                    onSelected={this.handleCategorySelected.bind(this)}
                    muscles={muscles}
                />
            </Fragment>
        );
    }
}