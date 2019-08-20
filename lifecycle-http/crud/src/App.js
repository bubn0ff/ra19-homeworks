import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import nanoid from 'nanoid';
import './App.css';
import Notes from './components/Notes';
import NoteButton from './components/NoteButton';

export default class App extends Component {
  state = {
    notes: [],
    value: ''
  };

  // Обработчик для textarea
  handleChange = event => {
    this.setState({...this.state, value: event.target.value});
  }

  // Обработчик для формы
  handleSubmit = event => {
    event.preventDefault();

    const id = nanoid();
    const newNote = {id, content: this.state.value};
    
    axios.post(process.env.REACT_APP_NOTES_URL, newNote)
      .then(() => {
        this.getNotes();
        this.setState({...this.state, value: ''});
      });
  }

  // Обработчик для получения с сервера записей
  getNotes = () => {
    axios
      .get(process.env.REACT_APP_NOTES_URL)
      .then(response => this.setState({notes: response.data}));
  }

  componentDidMount() {
    this.getNotes();
  }

  // Обработчик для удаления с сервера записей
  deleteNote = id => {
    axios
      .delete(`${process.env.REACT_APP_NOTES_URL}/${id}`)
      .then(() => this.getNotes());
  }

  render() {
    return (
      <div className="main-container">
        <form className="form-control" onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Введите текст вашей заметки"
            onChange={this.handleChange}
            value={this.state.value}
          />
          <NoteButton className='submit_btn' title='Отправить' />
          <NoteButton className="refresh_btn" title='Обновить' onClick={this.getNotes} />
        </form>
        <div className="main-note-container">
          <Notes delNote={this.deleteNote} notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  notes: PropTypes.array,
  value: PropTypes.string
}