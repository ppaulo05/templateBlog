angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-fake-blog.herokuapp.com/postagens').
      success(function(data) {
          $scope.publicacoes = data;
          $scope.linha = function(index){
            window ["num"]= index;
            localStorage.setItem("posicao", num);
          };
      }
  );
});
angular.module('time', []);
angular.module('time').controller('Resttime', function ($scope, $http){
  $http.get('https://api-fake-blog.herokuapp.com/postagens').
      success(function(data) {
          $scope.publicacoes = data[localStorage.getItem("posicao")];
          console.log(data[localStorage.getItem("posicao")]);
      }
  );
});