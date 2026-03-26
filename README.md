to insert data in database and file uploading


<?php 
require_once('../config.php');

if(isset($_POST['Submit'])){

    
    $title = $db->real_escape_string($_POST['title']);
    $title = $db->real_escape_string($_POST['title']);
    $title = $db->real_escape_string($_POST['title']);
    $sub_heading = $db->real_escape_string($_POST['sub_heading']);
    $birth_date = $db->real_escape_string($_POST['birth_date']);
    $age = $db->real_escape_string($_POST['age']);
    $website_url = $db->real_escape_string($_POST['website_url']);
    $degree = $db->real_escape_string($_POST['degree']);
    $phone_no =$db->real_escape_string( $_POST['phone_no']);
    $email_id =$db->real_escape_string( $_POST['email_id']);
    $city = $db->real_escape_string($_POST['city']);
    $freelance = $db->real_escape_string($_POST['freelance']);
    $description =$db->real_escape_string( $_POST['description']);
    

    // if(isset($_FILES['avatar'])) {
    //     $fileName = $_FILES['avatar']['name'];
    //     $target_dir = '../../assets/img/all_images/';
$ext = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
$allowed = ['jpg','jpeg','png','gif'];

if(in_array(strtolower($ext), $allowed)){
    $fileName = uniqid() . '.' . $ext; // prevent overwriting
    move_uploaded_file($_FILES['image']['tmp_name'], $target_dir . $fileName)
} else {
    echo "Invalid file type";
    exit;
   } 
     }
        if(isset($_FILES['image'])){
            $fileName = $_FILES['image']['name'];
            move_uploaded_file($_FILES['image']['tmp_name'],'../../assets/img/all_images/' .$fileName);
        }
    


$sql= "INSERT INTO about (image,title,sub_heading,birth_date,age,website_url,degree,phone_no,email_id,city,freelance,description) VALUES
('$fileName','$title','$sub_heading','$birth_date','$age','$website_url','$degree','$phone_no','$email_id','$city','$freelance','$description')");
if($db->query($sql)){
    echo "Record inserted successfully";
} else {
    echo "Error: " . $db->error;
}

<?php
