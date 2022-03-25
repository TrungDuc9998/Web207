app.controller('registerCtrl', function( $scope,$http) {
    $scope.register = function() {

        const api="https://621605707428a1d2a3581c4b.mockapi.io/apt/students/students";
        $http.get(api).then(function(response){
            $scope.students=response.data;
            console.log('đã đọc dữ liệu từ api');
            console.log($scope.students)
        });
        $scope.onSubmitForm=function(event){
            console.log('vào onsumit')
            event.preventDefault();//chặn load lại trang
            console.log($scope.studentR);
            $http.post(api,$scope.studentR).then(function(response){
                console.log(response);
               alert('đăng ký thành công!')
            });
        }
    //    console.log('vào để thêm')
    //     $scope.students.push(angular.copy($scope.studentR));
    //     console.log("Thành công!")
    //     $scope.studentR= {};
    //     alert('thành công')
    //     window.location.href="#login";
    }
});