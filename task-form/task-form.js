(function() {
  angular.module('app')
    .component('taskForm', {
      templateUrl: 'task-form/task-form-component.html',
      controller: 'taskFormCtrl',
      bindings : {
        taskList : '<'
      }

    });
})();
