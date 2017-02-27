(function(){
 var listController =  function(Project, Task) {

// добавление листа
 	 vm = this
	 Project.all().then(function (result) {
	 	vm.projects = result.data;	 	
	 });

	this.addToDolist = function() {
     Project.create({ project: { name: 'newTodo'}}).then(function (newTodo) {
	 	vm.projects.push(newTodo.data);
 	 });
	};

   this.taskAdd = function(project) {
        if (!this.task.name) return;
        Task.create({name: this.task.name}, project.id).then(function(result){
            project.tasks.push(result.data);
            vm.task.name = ''
        })
    };
	//редактирование листа 
	this.editToDoList = function(project) {
     Project.update(project).then(function () {
     	vm.edit = false
	 });
	};

	//удаление листа
	this.clickTrashList = function(id, index) {
	 Project.delete(id).then(function () {
	    vm.projects.splice(index, 1);
	  });
	};
   this.sortListeners = {
    orderChanged: function(event) {
      var id, position;
      task = event.source.itemScope.modelValue;
      task.position = event.dest.index;
      Task.setPosition(task);
    }
  };
}

angular
  .module("ToDo")
  .controller("ListController", ['Project', 'Task', listController]);
})();


