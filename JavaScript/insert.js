/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$username = $_POST['username'];
$password = $_POST['password'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$phoneCode = $_POST['phoneCode'];
$phone = $_POST['phone'];

if (!empty ($username)) || !empty ($password) || !empty ($gender) || !empty ($email) || 
        !empty ($phoneCode) || !empty ($phone) ){
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword ="";
    $dbname ="youtube";
    
    //create connection
    $conn = new mysqli($host, $dbPassword, $dbname);
        mysli_client_encoding 
if (mysqli_conn){
    die('Connect Error('.mysqli_connect_errno().')' .mysqli_connect_error());
    
}else{
    $SELECT ="SELECT email From register Where email = ? Limit 1";
    $INSERT ="INSERT Into register(username, password, gender, email, phoneCode, phone) values (?,?,?,?,?,?)";
    
    //Prepare statement
    $stmt- $conn->prepare($SELECT);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->bind_result($email);
    $stmt->store_result();
    $rnum = $stmt->num_rows;
    
    if ($rnum==0){
        $stmt-> close();
        
        $stmt =$conn->prepare($INSERT);
        $stmt->bind_param("ssssii",$username,$password,$gender,$email,$phoneCode,$phone);
        $stmt->execute();
        echo "New record inserted sucessfully";
    }else{
        echo "Someone already register using this email";
    }
    $stmt->close();
    $conn->close();
    
}
}else{
    echo "ALL field are required ";
    die();
}

