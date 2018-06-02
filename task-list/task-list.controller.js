(function(){
angular.module('app')
    .controller('TaskListCtrl', function() {
        var $ctrl = this;

        $ctrl.delete = function(index) {
            $ctrl.todos.splice(index, 1);
        }
      });
    })();
