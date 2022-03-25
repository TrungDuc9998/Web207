app.controller('studentCtrl',function($scope,$http,$rootScope){
    $scope.students = [];
    $rootScope.index=-1
    const api="https://621605707428a1d2a3581c4b.mockapi.io/apt/students/students";
 
    
    $http.get(api)
        .then(function (response) {
            $scope.students = response.data;
        });
        

    $scope.onSubmitForm=function(event){
        console.log('vào onsumit')
        event.preventDefault();
        console.log($scope.student1);
        $http.post(api,$scope.student1).then(function(response){
            const sv=response.data;
            $scope.students.push(sv);
            console.log(response);
            $scope.clear();
            alert('thêm dữ liệu thành công!')
        });
    }

    

    ///sửa nội dung form
    // $scope.save=function(){
    //     $rootScope.students[$rootScope.index]=$rootScope.student;
    //     console.log($scope.student.id);
    //     $http.put(api+'/'+$scope.student.id,$rootScope.students[$rootScope.index])
    //     .then(function(response){
    //         console.log(response);
    //         alert('đổi thành công!');
    //     })
    //     console.log($rootScope.students[$rootScope.index]);
    // }

    $scope.onEdit = function(id){
        const editeApi = api + '/' + id;
        console.log(editeApi);
        $http.put(editeApi,$scope.student)
        .then(function (response) {
            console.log('vào onedit')
            console.log(response);
            const sv = $scope.student;
            alert("Sửa thành công,vui lòng load lại trang")      
        });
    }



    $scope.hienThi = function(id){
        const editeApi = api + '/' + id;
        console.log(editeApi);
        $http.get(editeApi) // Gửi 1 request dạng GET tới API
        .then(function (response) {
            // Nhận dữ liệu trả về
            $scope.student = response.data;
        })
    }


    $scope.onDelete = function (id) {
        const deleteApi = api + '/' + id;
        $http.delete(deleteApi)
            .then(function (response) {
                const sv=response.data;
                console.log("dữ liệu xoá"+response);
                $scope.students.splice(sv.id,1);
                alert('xoá thành công!');  
            });
    }


    // $scope.onDelete = function (id) {

    //     const deleteApi = api + '/' + id;
    //     $http.delete(deleteApi)
    //         .then(function (response) {
    //             console.log(response);
    //             const sv = response.data;
    //             $scope.students.splice(sv.id, 1);
    //             alert("Xóa thành công @@")
    //             $scope.students.clear();
    //             $window.location.reload();
    //         });

    // }

   


    



    // console.log('vào student Ctrl')
    // $http.get('/db/Students.js').then(function(responsive){
    //     console.log('vào đọc dữ liệu sinh viên')
    //     $scope.list_students=responsive.data;
    //     console.log('đọc xong dữ liệu sinh viên')
    // });

    // $scope.save=function(){
    //     $scope.list_students[$scope.index]=angular.copy($scope.student);
    // }

    $scope.clear=function(){
        $scope.student1={};
    }

    $scope.cancel=function(){
        if($scope.index==-1){
            $scope.clear();
        }
        $scope.edit($scope.index);
    }

    // $scope.edit=function(index){
    //     $scope.index=index;
    //     $scope.student=angular.copy($scope.list_students[index]);
    // }

    // $scope.delete=function(index){
    //     $scope.edit(index);
    //     $scope.list_students.splice($scope.index,1);
        
    // }
})