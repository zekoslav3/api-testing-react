import React, { Component } from 'react';
import Title from './components/Title/Title';
import DisplayModal from './components/DisplayModal/DisplayModal';
import { Container } from 'react-bootstrap';
import './App.css';
import ApiButtons from './components/ApiButtons/ApiButtons';
import DisplayResult from './components/DisplayResult/DisplayResult';
import DisplayButtons from './components/DisplayButtons/DisplayButtons';

const radios = [
  { name: 'Users', value: 'Users', url: 'https://jsonplaceholder.typicode.com/users' },
  { name: 'Posts', value: 'Posts', url: 'https://jsonplaceholder.typicode.com/posts' },
  { name: 'Albums', value: 'Albums', url: 'https://jsonplaceholder.typicode.com/albums' },
];

class App extends Component {
  constructor () {
    super()
    this.state = {
      inputTitle: '',
      inputUrl: '',
      showModal: false,
      radioValue: '',
      radioButtons: radios
    }
  }

  setRadioValue = (event) => this.setState({radioValue: event.target.value});

  handleClose = () => this.setState({showModal: false});
  handleShow = () => this.setState({showModal: true});

  onInputTitleChange = (event) => this.setState({inputTitle: event.target.value});

  onInputUrlChange = (event) => this.setState({inputUrl: event.target.value});

  createRadioButton = async () => {
    try {
      await fetch(this.state.inputUrl);
      const addRadio = {
        name: this.state.inputTitle,
        value: this.state.inputTitle,
        url: this.state.inputUrl 
      }
      radios.push(addRadio);
      this.handleClose();
    } catch (err) {
      const modalAlert = document.getElementById('modal-alert');
      modalAlert.innerHTML = `Ops! Something is wrong. ${err}`;
      modalAlert.classList.add('alert', 'alert-danger');
    }
  }

  onButtonSubmit = () => {
    const modalAlert = document.getElementById('modal-alert');
    const inputUrlText = document.getElementById('validationUrl');
    
    if (this.state.inputTitle === '' || this.state.inputUrl === '') {
      modalAlert.innerHTML = 'Please enter the data in the input fields!';
      modalAlert.classList.add('alert', 'alert-danger');
    } else if (!(inputUrlText).checkValidity()) {
      modalAlert.innerHTML = 'Please enter a URL!';
      modalAlert.classList.add('alert', 'alert-danger');
    } else {
      this.createRadioButton();
    }
  }

  getUrlData = async () => {
    try {
      const selectedUrl = document.querySelector('input[name="radio"]:checked').value;
      const dataLength = document.getElementById("data-length");
      const codeResult = document.getElementById("result");

      const selectedUrlData = radios.filter(urlObject => urlObject.value === selectedUrl);
      const resp = await fetch(selectedUrlData[0].url);
      const json = await resp.json();
      const data = JSON.stringify(json, null, "\t");
      dataLength.innerHTML = `Number of all records: ${json.length}.`;

      codeResult.innerHTML = data
        .replace(/\n/g, "<br />")
        .replace(/\\n/g, " ")
        .replace(/\t/g, "&nbsp;&nbsp;");
    } catch (err) {
      const errorAlert = document.getElementById("error-alert");
      errorAlert.innerHTML = `Ops! Something is wrong with. ${err}`;
      errorAlert.classList.add("alert", "alert-danger");
    }
  }

  returnData = () => {
    const errorAlert = document.getElementById("error-alert");
    
    if (!(document.querySelector('input[name="radio"]:checked'))) {       
      errorAlert.innerHTML = "Please select API data to display.";
      errorAlert.hidden = false;
    } else {
        errorAlert.hidden = true;
        this.getUrlData();
    }
  }

  resetData = () => { 
    const codeResult = document.getElementById("result");
    const dataLength = document.getElementById("data-length");
    const errorAlert = document.getElementById("error-alert");
    codeResult.innerHTML = '';
    dataLength.innerHTML = '';

    if (errorAlert.hidden === false) {
      errorAlert.hidden = true;
    }
  }

  render() {
    return (
      <Container>
        <Title />       
        <DisplayModal 
          showModal={this.state.showModal} 
          handleShow={this.handleShow} 
          handleClose={this.handleClose} 
          onInputTitleChange={this.onInputTitleChange} 
          onInputUrlChange={this.onInputUrlChange} 
          onButtonSubmit={this.onButtonSubmit} 
        />
        <p>Select API data to display.</p>
        <ApiButtons 
          radioValue={this.state.radioValue} 
          setRadioValue={this.setRadioValue} 
          radioButtons={this.state.radioButtons}
        />
        <hr className='mb-4 mt-4' />
        <DisplayButtons 
          returnData={this.returnData} 
          resetData={this.resetData} 
        />
        <DisplayResult />
      </Container>
    );
  }
}

export default App;
