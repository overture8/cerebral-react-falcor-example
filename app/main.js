import React from 'react';
import { Container } from 'cerebral-react';
import controller from './controller.js';
import App from './components/app.js';
import setLoading from './actions/set-loading.js';
import unsetLoading from './actions/unset-loading.js';
import getGreeting from './actions/get-greeting.js';
import addSuccessResponse from './actions/add-success-response.js';

controller.signal('button1Clicked', 
  setLoading,
  [
    getGreeting, {
      success: [addSuccessResponse]
    }
  ],
  unsetLoading
)

React.render(<Container controller={controller} app={App} />, document.body);
