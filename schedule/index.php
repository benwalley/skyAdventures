<!DOCTYPE html>

<html>
<head>
	<title>Schedule a flight</title>

	<link rel="stylesheet" media="screen and (orientation:portrait)" href="css/phoneSchedule.css" />
	<link rel="stylesheet" media="screen and (orientation:landscape)" type="text/css" href="css/schedule.css">
	<link href="https://fonts.googleapis.com/css?family=Droid+Serif" rel="stylesheet">

	<link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet">


<?php include("../includes/header.html"); ?>

	<!-- CONTENT ========================== -->

<div class = "whole">
	<h1 id = "h1">Select Duration of flight:</h1>
	<div class = "row;text-center">
		<div class = "col-md-6">
			<div class = "row">
				<div class = "col-sm-2">
				</div><div class = "col-sm-8">
					<a href="1-2hour.php" class="btn btn-primary btn-lg btn-block">1/2 Hour Flight</a>
					<p></p>	
				</div><div class = "col-sm-2">
				</div>
			</div>
		</div><div class = "col-md-6">
			<div class = "row">
				<div class = "col-sm-2">
				</div><div class = "col-sm-8">
					<a href="1hour.php" class="btn btn-primary btn-lg btn-block">1 Hour Flight</a>
					<p></p>
				</div><div class = "col-sm-2">
				</div>
			</div><div class = "row">
			</div>
		</div>
	</div>
	<div class = "row">
	</div>
</div>

<?php include("../includes/footer.html"); ?>