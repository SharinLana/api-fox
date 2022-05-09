import { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      image: null,
    }
  }

 async componentDidMount() {
    const url = 'https://randomfox.ca/floof/';
    const response = await fetch(url);
    const data = await response.json();

    this.setState({image: data.image})
    console.log(data.image)
  }

  render() {
    return (
      <div className='App-container'>
        <img className='App-image' src={this.state.image} alt='random fox'/>
      </div>
    )
  }
}
