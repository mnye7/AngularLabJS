(function(){
  angular.module('app')
    .factory('DataFactory', function() {
      var todos = ['clean', 'sweep', 'read'];

      return{
        setData: function(data){
          todos = data;
        },

        getData: function(){
          return todos;
        }
      }


    });
})();
