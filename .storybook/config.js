import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

// addon-info
addDecorator((story, context) => withInfo({inline: true, header: false})(story)(context));

configure(loadStories, module) ;





 
