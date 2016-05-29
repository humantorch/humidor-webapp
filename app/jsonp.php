
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
    $rows = array();
    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }
    echo "things(".json_encode($rows).")";
?>
