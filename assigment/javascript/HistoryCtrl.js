app.controller('HistoryCtrl',function($scope,$http){
    const api="https://621605707428a1d2a3581c4b.mockapi.io/apt/students/History";
    $http.get(api)
        .then(function (response) {
            $scope.historys = response.data;
        });

       
        
})