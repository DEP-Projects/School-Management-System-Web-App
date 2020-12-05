import '../../../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '../../../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
import '../../../node_modules/admin-lte/dist/js/adminlte.js';

import manageStudent from './manageStudent.component.html';
import style from './manageStudent.component.scss';

$("app-manageStudent").replaceWith('<div id="manageStudent">'+manageStudent+'</div>');
var html = '<style>'+style+'</style>';
$("head").append(html);

/*---------------------------------------------*/
var studentArray=[];
/*---------------------------------------------*/
function getStudentObject(name,gender,religion,joining_date,email,section,id,address,phone){
    var obj={
        name: name,
        gender: gender,
        religion: religion,
        joining_date: joining_date,
        email: email,
        section: section,
        id: id,
        address: address,
        phone: phone
    };
    return obj;
};
$("#btnSubmit").on('click',function (){
    var name=$("#txtFirstName").val()+" "+$("#txtLastName").val();
    var gender=$("#comboGender").find(":selected").text();
    var religion=$("#comboReligion").find(":selected").text();
    var joining_date=new Date();
    var email=$("#txtEmail").val();
    var section=$("#txtSection").val();
    var id=$("#txtId").val();
    var address=$("#txtAddress").val();
    var phone=$("#txtPhone").val();

    studentArray.push(getStudentObject(name,gender,religion,joining_date,email,section,id,address,phone));
});

$("#btnAddStudent").on('click',function (){
   if($("#btnAddStudent p").text()=='Add New Student'){
       $("#AllStudent").addClass('d-none');
       $("#StudentDetail").addClass('d-none');
       $("#AddStudent").removeClass('d-none');
       $("#btnAddStudent p").text("View All Students");
   }else{
       $("#AllStudent").removeClass('d-none');
       $("#StudentDetail").addClass('d-none');
       $("#AddStudent").addClass('d-none');
       $("#btnAddStudent p").text("Add New Student");
   }
});
$("#viewDetail").on('click',function (){
    $("#AllStudent").addClass('d-none');
    $("#StudentDetail").removeClass('d-none');
    $("#AddStudent").addClass('d-none');

});
