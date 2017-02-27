angular.module('ToDo')
.factory('Task', ['$http', function TaskFactory($http) {
  return {
    update: function(task) {
      return $http({method: 'PUT', url: "/projects/" + task.project_id + "/tasks/" + task.id + '.json', data: { task: task}});
    },
    setPosition: function(task) {
      return $http({method: 'PUT', url: "/projects/" + task.project_id + "/tasks/" + task.id + '/set_position.json', data: { task: task}});
    },
    create: function(data, project_id) {
      return $http({method: 'POST', url:  '/projects/' + project_id + '/tasks' + '.json' , data: { task: data}});
    },
    delete: function(task) {
      return $http({method: 'DELETE', url: '/projects/' + task.project_id + '/tasks/' + task.id + '.json' });
    }
  };
}]);
