
<?php 
  if(isset($_POST['email'])){
	  
	$name =$_POST["name"];
	$from =$_POST["email"];
	$comment=$_POST["comment"];
	
	// Email Receiver Address
	$receiver="info@yourdomain.com";
	$subject="Contact us form details";

	$message = "
	<html>
	<head>
	<title>HTML email</title>
	</head>
	<body>
	<table width='100%' border='0' align='left' cellpadding='0' cellspacing='0'>
	<tr>
	<td colspan='2' align='center' valign='top'><img style=' margin-top: 15px; ' src='http://www.yourdomain.com/images/logo-email.png' ></td>
	</tr>
	<tr>
	<td width='100%' align='left'>&nbsp;</td>
	<td align='left'>&nbsp;</td>
	</tr>
	<tr>
	<td align='left' valign='top' style='font-size:14px; font-family:Arial, Helvetica, sans-serif; color:#000;'>".nl2br($comment)."</td>
	</tr>
	</table>
	</body>
	</html>
	";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// More headers
$headers .= 'From: <'.$from.'>' . "\r\n";
   if(mail($receiver,$subject,$message,$headers))  
   {
	   // Alert Message
      echo "Thankyou for your message! We will contact you back";
   }
   else
   {	
   	 // Fail Message
      echo "Sorry... ! The message could not been sent!";
   }

}
?>
