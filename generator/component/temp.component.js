import template from './<%= name %>.html';
import controller from './<%= name %>.controller';
import './<%= name %>.styl';

const <%= name %>Component = {
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default <%= name %>Component;
