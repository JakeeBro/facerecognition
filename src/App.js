import { React, Component } from 'react';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';

const app = new Clarifai.App({ apiKey: 'b1b74db0e49e466dac991e91b932d017'})

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 600
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: '#3CA9D1',
        blur: 5
      }
    }
  }
}

console.log(process.env.REACT_APP_CLARIFAI_API);

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    // console.log(event.target.value);
    this.setState({input: event.target.value});
  }

  // https://preview.redd.it/9afk61v4g8d71.jpg?width=741&format=pjpg&auto=webp&s=02472e1ee0d396bd8df88cf85f5f5b2605392f11

  onSubmit = () => {
    // console.log(this.state.input);
    this.setState({imageUrl: this.state.input}, this.predict);
    // app.models.predict(Clarifai.COLOR_MODEL, this.state.imageUrl)
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .then(function(err) {
    //     console.log(err);
    //   })
  }

  predict = () => {
    app.models.predict(Clarifai.FACE_EMBED_MODEL, this.state.imageUrl)
      .then(function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      })
      .then(function(err) {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <Particles className='fixed o-50' style={{zIndex: '-1'}}params={particlesOptions}/>
        <Navigation />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
