app.controller("forgotCtrl",function($scope,$rootScope,$http){
    $scope.forgot=function(){
        var kt=true;
        $http.get("https://621605707428a1d2a3581c4b.mockapi.io/apt/students/students")
        .then(function (response) {
            $scope.students1=response.data;
            $scope.students1.forEach(st => {
                if(st.username==$scope.username&&st.email==$scope.email){
                    kt=false;
                    alert('mật khẩu của bạn là: '+st.password);
                    return;
                }
        });
           if(kt==true){
               alert('không thành công!')
           }
        });
    }
})