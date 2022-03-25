app.controller('changepasswordCtrl', function($rootScope, $scope) {
    $scope.change = function() {

        console.log($rootScope.student.username);
        console.log($scope.studentR.oldpassword);
        // console.log($scope.student.oldpassword);
        console.log($rootScope.student.password);
        console.log($scope.studentR.password);
        // console.log($rootScope.student.password);
        if($rootScope.student.password!=$scope.studentR.oldpassword){
            alert('mật khẩu cũ không đúng');
        }else{
            if($rootScope.student.password==$scope.studentR.password){
                alert('mật khẩu mới trùng với mật khẩu cũ');
            }else{
                
            }
        }


       
        // console.log($scope.oldpassword);


        // console.log('vào để so sánh')
        // if ($rootScope.student.password == $scope.oldpassword) {
        //     if ($rootScope.student.password == $scope.studentR.password) {
        //        alert('mật khẩu mới trùng với mật khẩu cũ')
        //     } else {
        //         $rootScope.student.password = $scope.studentR.password;
        //         $rootScope.students[$rootScope.indexStudent] = angular.copy($rootScope.student);
        //        alert('đổi mật khẩu thành công')
               
        //     }
        // } else {
        //    alert('mật khẩu cũ không đúng')
        // }
        // $scope.oldpassword = "";
        // $scope.studentR.password = "";
        // $scope.newpassword = "";
    }
});