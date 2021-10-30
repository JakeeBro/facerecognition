import { React, Component } from 'react';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
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
      imageUrl: '',
      box: {},
      route: 'signin'
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box})
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
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  onRouteChange = () => {
    this.setState({route: 'home'})
  }

  render() {
    return (
      <div className="App">
        {/*<Particles className='fixed o-50' style={{zIndex: '-10'}}params={particlesOptions}/>*/}
        <Navigation />
        <Logo />
        { this.state.route === 'signin'
          ? <SignIn onRouteChange={this.onRouteChange} style={{zIndex: '10'}}/>
          : <div style={{zIndex: '10'}}>
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
            </div>
        }
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
