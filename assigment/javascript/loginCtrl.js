app.controller('loginCtrl', function($scope,$rootScope,$http) {
    $scope.login = function() {
        var kt = true;
        // $scope.List_student=[];

        $http.get("https://621605707428a1d2a3581c4b.mockapi.io/apt/students/students")
        .then(function (response) {
            $scope.students1=response.data;
            console.log('---đọc thành công-----')
            $scope.students1.forEach(st => {
                console.log('vào để so sánh đăng nhập');
                console.log(st);
                if(st.username==$scope.username&&st.password==$scope.password){
                    alert('đăng nhập thành công!');
                    kt=false;
                    $rootScope.student=st;
                    return;
                }
        });
           if(kt==true){
               alert('không thành công!')
           }
        });
        
        
        // if(kt=true){
        //     alert('đăng nhập không thành công!')
        // }

       

        // console.log($rootScope.List_student);
       
        // $scope.dssv.forEach(st => {
        //     if(st.username==$scope.username&&st.password==$scope.password){
        //         alert('đăng nhập thành công!')
        //     }else{
        //         alert('không thành công!')
        //     }
        // });


        // console.log($scope.username);
        // console.log($scope.marks);
        // $rootScope.students.forEach(st => {
        //     if (st.username == $scope.username&&st.password == $scope.password) {
                
        //             alert('thành công!')
        //             $rootScope.indexStudent = st.index;
        //             $rootScope.student = st;
        //             kt = false;
        //             window.location.href="#/";
        //             return;
                    
        //     };
        // });
        // if (kt == true) {
        //     alert('không thành công')
        // }
    };

});