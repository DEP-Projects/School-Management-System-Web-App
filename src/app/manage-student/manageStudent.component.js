/* import '../../../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import '../../../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
import '../../../node_modules/admin-lte/dist/js/adminlte.js'; */


import manageStudent from './manageStudent.component.html';
import style from './manageStudent.component.scss';
import swal from 'sweetalert';

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
    swal("Successful!", "You added a new Student!", "success");
    $("#AddStudent").addClass('d-none');
    $("#AllStudent").removeClass('d-none');
    getAllStudent();
});
function getAllStudent(){
    for (const studentArrayElement of studentArray) {
        var newStudent='<tr class="text-bold">\n' +
            '                                <td>\n' +
            '                                    <div class="form-check">\n' +
            '                                        <input type="checkbox" class="form-check-input">\n' +
            '                                        <label class="form-check-label">#'+studentArrayElement.id+'</label>\n' +
            '                                    </div>\n' +
            '                                </td>\n' +
            '                                <td class="text-center"><img src="'+"../../assets/img/student3.png"+'" alt="student"></td>\n' +
            '                                <td>'+studentArrayElement.name+'</td>\n' +
            '                                <td>'+studentArrayElement.gender+'</td>\n' +
            '                                <td>'+studentArrayElement.section+'</td>\n' +
            '                                <td>'+studentArrayElement.address+'</td>\n' +
            '                                <td>'+studentArrayElement.phone+'</td>\n' +
            '                                <td>'+studentArrayElement.email+'</td>\n' +
            '                                <td>\n' +
            '                                    <div class="dropdown">\n' +
            '                                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">\n' +
            '                                            <span class="flaticon-more-button-of-three-dots"></span>\n' +
            '                                        </a>\n' +
            '                                        <div class="dropdown-menu dropdown-menu-right">\n' +
            '                                            <a class="dropdown-item" href="#"><i class="fas fa-trash text-orange-red pr-3"></i>Delete</a>\n' +
            '                                            <a class="dropdown-item" href="#"><i class="fas fa-user-edit text-dark-pastel-green pr-3"></i>Edit</a>\n' +
            '                                            <a id="viewDetail" class="dropdown-item" href="#"><i class="fas fa-info-circle text-orange-peel pr-3"></i>View Details</a>\n' +
            '                                        </div>\n' +
            '                                    </div>\n' +
            '                                </td>\n' +
            '                            </tr>'
        $("tbody").append(newStudent);
    }
}

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
