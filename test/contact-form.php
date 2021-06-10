
<?php 
  if(isset($_POST['email'])){
	  
	$name =$_POST["name"];
	$from =$_POST["email"];
	$comment=$_POST["comment"];
	
	// Email Receiver Address
	$receiver="info@weddigraphy.co.uk";
	$subject="Contact us form details";

	$message = "
	<html>
	<head>
	<title>Weddigraphy Message</title>
	</head>
	<body>
	<table width='100%' border='0' align='left' cellpadding='0' cellspacing='0'>
	<tr>
	<td colspan='2' align='left' valign='top' style='padding:20px; font-family:Arial, Helvetica, sans-serif; color:#000;'><h3>Message left on the website:</h3></td>
	</tr>
	<tr>
	<td width='100%' align='left'>&nbsp;</td>
	<td align='left'>&nbsp;</td>
	</tr>
	<tr>
	<td align='left' valign='top' style='font-size:17px; padding:20px; font-family:Arial, Helvetica, sans-serif; color:#000;'>".nl2br($comment)."</td>
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
      echo "Thankyou for your message! We will contact you back.";
   }
   else
   {	
   	 // Fail Message
      echo "Sorry... ! The message could not been sent!";
   }

}
?>
