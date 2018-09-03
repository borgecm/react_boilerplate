import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

// addon-info
addDecorator((story, context) => withInfo({inline: true, header: false})(story)(context));

addDecorator(withKnobs);

configure(loadStories, module) ;





 
