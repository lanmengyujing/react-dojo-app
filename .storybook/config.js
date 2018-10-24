import { configure } from '@storybook/react';
import '../src/stories/index.css';

const req = require.context('../src/stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
