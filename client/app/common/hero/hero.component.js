import template from './hero.html';
import controller from './hero.controller';
import './hero.styl';

let heroComponent = {
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default heroComponent;
