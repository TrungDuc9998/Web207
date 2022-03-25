var app = angular.module('myApp', ['ngRoute']);

app.run(function($rootScope, $http) {

    console.log($rootScope.student);
    $http.get("/db/Students.js").then(function(response) {
        $rootScope.students = response.data;
    });
    $http.get("/db/Subjects.js").then(function(response) {
        $rootScope.subjects = response.data;
    });
    $rootScope.logoff = function() {
        $rootScope.student = null;
        $rootScope.indexStudent = -1;
        alert('đăng xuất thành công!')
        window.location.href="/assigment/index.html";
    }
});

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'/assigment/html/home.html'
    })
    .when('/subjects',{
        templateUrl:'/assigment/html/subjects.html',
        controller:'subjectsCtrl'
    })
    .when('/quiz/:id/:name',{
        templateUrl:'/assigment/html/quiz-app.html', 
        controller:'quizsCtrl'
    })
    .when('/login',{
        templateUrl:'/assigment/html/login.html',
        controller: "loginCtrl"
        
    })
    .when('/register',{
        templateUrl:'/assigment/html/register.html',
        controller:"registerCtrl"
    })
    .when('/forgotpassword',{
            templateUrl:'/assigment/html/forgotpassword.html',
            controller:"forgotCtrl"
    })
    // .when('/changepassword',{
    //     templateUrl:'/assigment/html/changpassword.html',
    //     controller:'changepasswordCtrl'
    // })
    .when('/infomation',{
        templateUrl:'/assigment/html/infomation.html',
        controller: 'updateaccountCtrl'
    })
    .when('/introduce',{
        templateUrl:'/assigment/html/introduce.html',
    })
    .when('/feedback',{
        templateUrl:'/assigment/html/feedback.html',
        controller:'feedbackCtrl'
    })
    .when('/Q&A',{
        templateUrl:'/assigment/html/Q&A.html',
        
    })
    .when('/contact',{
        templateUrl:'/assigment/html/contact.html',
    })
    .when('/student',{
        templateUrl:'/assigment/html/student.html',
        controller:'studentCtrl'
    })
    .when('/cauhoi',{
        templateUrl:'/assigment/html/qlcau_hoi.html',
        controller:'questionCtrl'
    })
    .when('/history',{
        templateUrl:'/assigment/html/Historys.html',
        controller:'HistoryCtrl'
    })
});

app.controller('quizsCtrl',function($scope,$http,$routeParams,quizFactory,$rootScope){
    if($scope.student==null){
        alert('bạn chưa đăng nhập nhé');
        window.location.href="#subjects";
    }else{
        const api="https://621605707428a1d2a3581c4b.mockapi.io/apt/students/"+$routeParams.id;
        $http.get(api)
        .then(function(response){
            quizFactory.questions=response.data;
        })
    }
   
   
    
    // if($routeParams.id=='ADBS'){
    //     const api="https://621605707428a1d2a3581c4b.mockapi.io/apt/students/ADBS";
    //     $http.get(api)
    //     .then(function(response){
    //         quizFactory.questions=response.data;
    //     })
    // }else if($routeParams.id=='ADAV'){
    //     const api="https://621605707428a1d2a3581c4b.mockapi.io/apt/students/ADAV";
    //     $http.get(api)
    //     .then(function(response){
    //         quizFactory.questions=response.data;
    //     })
    // }else{
    //     alert('không phải');
    //     window.location.href="#subjects";
    // }

    

    // $http.get('/db/Quizs/'+$routeParams.id+'.js').then(function(res){
    //     quizFactory.questions=res.data;
    //     console.log($routeParams.id);
    // });
       
});

app.directive('quizfpoly', function(quizFactory,$routeParams,$interval,$http,$rootScope){
    return {
        restrict : 'AE',
        scope:{},
        templateUrl: '/assigment/html/template-quiz.html',
        link: function(scope, elem, attrs){
            scope.start = function(){
               quizFactory.getQuestions().then(function(){
                   scope.subjectName=$routeParams.name;
                   scope.id=1;
                scope.timer = 900;
               scope.date=Date.now();
                console.log($rootScope.student.username);
                scope.tenTK=$rootScope.student.username;
                console.log(scope.tenTK);
                var stop = $interval(function() {
                    if (scope.timer > 0) {
                        scope.timer -= 1;
                        // console.log(scope.timer);
                    } else if (scope.timer == 0) {
                        $interval.cancel(stop);
                        scope.quizOver=true;
                    }
                }, 1000);
                    scope.quizOver=false;
                    scope.inProgess = true;
                    scope.getQuestion();   
                }) 
                };
            scope.reset = function(){
                 scope.inProgess=false;
                 $interval.cancel(stop);
                 scope.score=0;
                 scope.timer=0;
            };   
            scope.getQuestion=function(){
                var quiz=quizFactory.getQuestion(scope.id);
                if(quiz){
                   scope.question=quiz.Text;
                   scope.options=quiz.Answers;
                   scope.answer=quiz.AnswerId;
                   scope.answerMode=true;
                }else{
                    scope.quizOver=true;
                }            
            }
            scope.checkAnswer=function(){
            //    if(!$('input[name=answer]:checked').length)return;
               var ans=$('input[name=answer1]:checked').val();
               if(ans==scope.answer){
                   // alert('đúng')
                   scope.score++;
                   scope.correctAns=true;
                   console.log('Điểm:'+scope.score);
                   console.log($rootScope.student.username);
                //    $http.get("https://621605707428a1d2a3581c4b.mockapi.io/apt/students/students")
                //    .then(function (response) {
                //        scope.students1=response.data;
                //        console.log('---đọc thành công-----')
                //        scope.students.forEach(st => {
                //            console.log('vào để so sánh đăng nhập');
                //            console.log(st);
                //            if(st.username==scope.username&&st.password==scope.password){
                //                alert('đăng nhập thành công!');
                //                kt=false;
                //                $rootScope.student=st;
                //                return;
                //            }
                //    });
                //    $rootScope.student.marks = (parseInt($rootScope.student.marks) + scope.score).toString();
               }else{
                   scope.correctAns=false;
               }
               scope.answerMode=false;
            };
            scope.nextQuestion=function(){
                scope.id++;
                scope.getQuestion();
            }
            scope.luuKQ=function(){
                const api="https://621605707428a1d2a3581c4b.mockapi.io/apt/students/History";
                $http.get(api)
                    .then(function (response) {
                        scope.historys = response.data;
                        console.log(scope.historys);  
                    });
                    scope.onSubmitForm=function(event){
                        event.preventDefault();
                        $http.post(api,scope.history).then(function(response){
                            const sv=response.data;
                            scope.historys.push(sv);
                            console.log(response);
                            alert('Lưu kết quả thành công!');
                        });
                    }
            }
            scope.reset();
 }
   }
});
app.factory('quizFactory',function($http,$routeParams,$rootScope){
   
    return {
        getQuestions:function(){
            const api="https://621605707428a1d2a3581c4b.mockapi.io/apt/students/"+$routeParams.id;
                return  $http.get(api)
                .then(function(response){
                    questions=response.data;
                   
                    // scope.tenTK=$rootScope.student.username;
                    // console.log(scope.tenTK);
                })
        },
        getQuestion:function(id){
            
            var randomItem=questions[Math.floor(Math.random()*questions.length)]
            console.log(randomItem);
            console.log(id);
            var count=questions.length;
            if(count>10){
                count=10;
            }     
            if(id<count){
                return randomItem;
            }else{
                return false;
            }
        }
    }
})



