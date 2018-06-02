(function() {
  angular.module('app')
    .controller('taskFormCtrl', function(DataFactory) {
      var $ctrl = this;
      $ctrl.todos = DataFactory.getData();

      $ctrl.add = function() {
        if ($ctrl.items) {
          $ctrl.todos.push($ctrl.items);
          DataFactory.setData($ctrl.todos);
        }



        $ctrl.items = '';
      };

      $ctrl.onKeyDown = function(event) {
        if (event.key === 'Enter') {
          $ctrl.add();
        }
      };
      // $ctrl.delete = function(index) {
      //     $ctrl.todos.splice(index, 1);
      // }
    });
})();