app.controller('updateaccountCtrl', function($rootScope, $scope,$http) {
  $scope.update=function(){
    $scope.students=[];
    const id=$rootScope.student.id;
    const api="https://621605707428a1d2a3581c4b.mockapi.io/apt/students/students";
    $http.get(api)
        .then(function (response) {
            $scope.students = response.data;
        });
        const editeApi = api + '/' + id;
        $http.put(editeApi,$scope.student)
        .then(function (response) {
            const sv = $scope.student;
            alert("Thông tin cá nhân của bạn đã được cập nhật!")      
        });      
  }
  
});