(function(){
angular.module('app')
    .controller('taskFormCtrl', function() {
        var $ctrl = this;
        $ctrl.todos = [];
        // console.log($ctrl.todos);
        $ctrl.add = function() {
          if($ctrl.items){
            $ctrl.todos.push($ctrl.items);
            console.log($ctrl.todos)
        }

        $ctrl.items = '';
      };

      $ctrl.onKeyDown = function(event){
        if (event.key === 'Enter'){
          $ctrl.add();
        }
      };
        $ctrl.delete = function(index) {
            $ctrl.todos.splice(index, 1);
        }
      });
    })();
