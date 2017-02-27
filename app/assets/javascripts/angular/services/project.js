angular.module('ToDo')
.factory('Project', ['$http', function TodoFactory($http) {
  return {
    all: function() {
      return $http({method: 'GET', url: "/projects.json"});
    },
    update: function(project) {
      return $http({method: 'PUT', url: '/projects/' + project.id + '.json', data: { project: project}});
    },
    create: function(project) {
      return $http({method: 'POST', url: '/projects.json', data: project});
    },
    delete: function(id) {
      return $http({method: 'DELETE', url: '/projects/' + id + '.json'});
    }
  };
}]);