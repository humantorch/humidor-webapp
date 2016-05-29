<style type="text/css">
	th {text-align: left;}
	table {margin: 0; padding: 0; border-collapse: collapse;}
	th, td {border: 1px grey solid; margin: 0; padding: 5px;}
</style>

<?php
    
    require_once('db.php');

    // your own db connection credentials here. 
    // $host    = "your host";
    // $user    = "your user";
    // $pass    = "your pass";
    // $db_name = "your db name";

    //create connection
    $connection = mysqli_connect($host, $user, $pass, $db_name);

    //test if connection occured
    if(mysqli_connect_errno()){
        die("connection failed: "
            . mysqli_connect_error()
            . " (" . mysqli_connect_errno()
            . ")");
    }

    //get results from database
    $result = mysqli_query($connection,"SELECT * FROM data");
    $all_property = array();  //declare an array for saving property

    //showing property
    echo '<table class="data-table">
            <tr class="data-heading">';  //initialize table tag
    while ($property = mysqli_fetch_field($result)) {
        echo '<th>' . $property->name . '</th>';  //get field name for header
        array_push($all_property, $property->name);  //save those to array
    }
    echo '</tr>'; //end tr tag

    //showing all data
    while ($row = mysqli_fetch_array($result)) {
        echo "<tr>";
        foreach ($all_property as $item) {
            echo '<td>' . $row[$item] . '</td>'; //get items using property value
        }
        echo '</tr>';
    }
    echo "</table>";
?>
