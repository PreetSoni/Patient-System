(function(){
var app = angular.module('PatientList',[]);
app.controller('PatientController', function(){
	this.paitents=info;
});
var info=[
	{
	fname: 'Preet',
	lname: 'Soni',
	age: 23,
	dob: '15-03-1994',
	gender: 'Male',
	phone: 8401130434
	},
	{
	fname: 'Harshil',
	lname: 'Gandhi',
	age: 25,
	dob: '18-05-1992',
	gender: 'Male',
	phone: 8989897878
	},
	{
	fname: 'Yashraj',
	lname: 'Rathod',
	age: 21,
	dob: '15-03-1996',
	gender: 'Male',
	phone: 9876543210
	},
	{
	fname: 'Krateesha',
	lname: 'Sharma',
	age: 21,
	dob: '08-01-1995',
	gender: 'Female',
	phone: 9876542130
	},
	{
	fname: 'Smit',
	lname: 'Shah',
	age: 25,
	dob: '04-01-1992',
	gender: 'Male',
	phone: 9662678197
	},
	{
	fname: 'Yesha',
	lname: 'Rao',
	age: 21,
	dob: '15-03-1996',
	gender: 'Female',
	phone: 9876543210
	}
]


/*app.controller('addPatientcontroller', function ($scope, $http) {

* This method will be called on click event of button.

$scope.addNewPatient = function () {

    var request = $http({
        method: "post",
        url: window.location.href + "insert.php",
        data: {
            patient-fname: $scope.patient-fname,
            patient-lname: $scope.patient-lname,
            patient-age: $scope.patient-age,
            patient-dob: $scope.patient-dob,
			patient-gender: $scope.patient-gender,
			patient-phone: $scope.patient-phone,
			patient-info: $scope.patient-info,			
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

 }
}); */

})();

