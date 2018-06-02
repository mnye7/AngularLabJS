(function(){
  angular.module('app')
    .factory('DataFactory', function() {
      var todos = ['Clean', 'Sweep', 'Read'];

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
