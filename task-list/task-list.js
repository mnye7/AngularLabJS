(function() {
  angular.module('app')
    .component('taskList', {
      templateUrl: 'task-list/task-list-component.html',
      controller: 'TaskListCtrl',
      bindings: {
        todos: '<',
        filterBy: '<'
      }

    });
})();
