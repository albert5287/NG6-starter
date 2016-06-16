import angular from 'angular';
import UserFactory from './user.factory';

const user = angular.module('user', [])

.factory('User', UserFactory)
.name;

export default user;
