import React from 'react';
import {Decorator as Cerebral} from 'cerebral-react';

@Cerebral({
  isLoading: ['isLoading'],
  responses: ['responses']
})
class App extends React.Component {
  renderResponse(response, index) {
    return (
      <li key={index}>{response}</li>
    );
  }

  render() {
    return (
      <div>
        <button
          disabled={this.props.isLoading}
          onClick={() => this.props.signals.button1Clicked({ data: 'button1' })}>
          Button 1
        </button>

        <ul>
          {this.props.responses.map(this.renderResponse)}
        </ul>
      </div>
    )
  }
}

export default App;
