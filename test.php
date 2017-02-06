
<?php 

// Q1
$date = 'Thu, 21 Dec 2000 16:01:07';
$dateNorm = strtotime('+3 days 4 hours',strtotime($date));
$dateLater = date('D, d M Y H:i:s', $dateNorm);
echo $dateLater;


// Q2
$arr = array();

for($i = 1; $i <= 100; $i++){
	if ($i % 3 == 0 && $i % 4 == 0) {
		$tmp = 'z';
	} else if ($i % 3 == 0){
		$tmp = 'x';
	} else if ($i % 4 == 0){
		$tmp = 'y';
	} else {
		$tmp = $i;
	}

	array_push($arr, $tmp);
}

// output
foreach ($arr as $key => $value) {
	echo $arr[$key];
}

?>



