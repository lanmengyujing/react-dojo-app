import { configure } from '@storybook/react';
import '../src/stories/index.css';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
