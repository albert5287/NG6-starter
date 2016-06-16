import angular from 'angular';
import Navbar from './navbar';
import Hero from './hero';
import User from './user';

const common = angular.module('app.common', [
  Navbar,
  Hero,
  User
])
.name;

export default common;
