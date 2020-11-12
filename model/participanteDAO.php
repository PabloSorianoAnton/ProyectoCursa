<?php

class ParticipanteDAO{
    private $pdo;

    public function __construct(){
        require_once '../controller/connection.php';
        $this->pdo=$pdo;
    }

    public function adir(){
    	try {
            $this->pdo->beginTransaction();
            $query="INSERT INTO participante (`dni_participante`,`edad_participante`,`nombre_participante`,`papellido`, `sapellido`, `email`) VALUES (?, ?, ?, ?, ?, ?)";
            $sentencia=$this->pdo->prepare($query);
            $dni=$_POST['dni_participante'];
            $edad=$_POST['edad_participante'];
            $nombre=$_POST['nombre_participante'];
            $paellido=$_POST['papellido'];
            $sapellido=$_POST['sapellido'];
            $email=$_POST['email'];
            $sentencia->bindParam(1,$dni);
            $sentencia->bindParam(2,$edad);
            $sentencia->bindParam(3,$nombre);
            $sentencia->bindParam(4,$paellido);
            $sentencia->bindParam(5,$sapellido);
            $sentencia->bindParam(6,$email);
            $sentencia->execute();
            //print_r($sentencia);
            $this->pdo->commit();
        } catch (Exception $ex){
                $this->pdo->rollback();
                echo $ex->getMessage();
        }
    }

}

?>