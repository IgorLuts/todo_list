(function () {
  var taskController = function($scope, Task) {


//вывод массива тасков
     that = this;

    // редактирование
    this.clickEdit = function(task) {
       Task.update(task).then(function () {
       that.edit = false
   }); 
    };

    // удаление
      this.clickTrash = function(task, project, index) {
     Task.delete(task).then(function () {
        project.tasks.splice(index, 1);
      });
    };

    //статус выполнения(зачеркивание)

    this.updateTask = function(task){
      Task.update(task)
    }

    $scope.$watch('task.deadline', function(newValue, oldValue) {
      if(newValue && newValue != oldValue)
        that.updateTask($scope.task)
    });
  };

angular
  .module("ToDo")
  .controller("TaskController", ['$scope', 'Task', taskController]);

})();
