import { React, Component } from 'react';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
// import Particles from 'react-particles-js';
import Page from './components/Page/Page';

const app = new Clarifai.App({ apiKey: 'b1b74db0e49e466dac991e91b932d017'})

// const particlesOptions = {
//   particles: {
//     number: {
//       value: 50,
//       density: {
//         enable: true,
//         value_area: 600
//       }
//     },
//     line_linked: {
//       shadow: {
//         enable: true,
//         color: '#3CA9D1',
//         blur: 5
//       }
//     }
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
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

  onRouteChange = (destination) => {
    this.setState({route: destination}, () => {
      switch (this.state.route) {
        case 'signin':
          this.setState({ isSignedIn: false})
          break;
        case 'register':
          this.setState({ isSignedIn: false})
          break;
        case 'home':
          this.setState({ isSignedIn: true})
          break;
        default:
          break;
      }
    })
  }

  render() {
    let { isSignedIn, imageUrl, route, box } = this.state;
    console.log('Sign In: ' + isSignedIn, ' URL: ' + imageUrl, ' Route: ' + route, ' Box: ' + box)
    return (
      <div className="App">
        {/*<Particles className='fixed o-50' style={{zIndex: '-10'}}params={particlesOptions}/>*/}
        { isSignedIn === true
          ? <Navigation onRouteChange={this.onRouteChange} isSignedIn={true}/>
          : <Navigation onRouteChange={this.onRouteChange} isSignedIn={false}/>
        }
        <Logo />
{/*        { this.state.route === 'signin'
          ? <SignIn onRouteChange={this.onRouteChange} style={{zIndex: '10'}}/>
          : <div style={{zIndex: '10'}}>
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
            </div>
        }*/}
        <Page route={route} onRouteChange={this.onRouteChange} onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        <FaceRecognition box={box} imageUrl={imageUrl}/>
      </div>
    );
  }
}

export default App;
