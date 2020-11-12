<!DOCTYPE html>
<html>
<head>
<title>Fútbol Bellvitge</title>
<meta charset=utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="../css/estilos.css">
<script src="../js/validacion.js"></script>
</head>
<body>

  <?php
		require_once '../controller/connection.php';
  ?>
  
  <div class="topnav">
  <div class="topnavprin">
  <div class="idioma">
    <select name="OS">
      <option selected value="0">Idioma</option><br>
        <option value="1">Spanish</option> 
        <option value="2">English</option> 
        <option value="3">Chinese</option>
        <option value="4">French</option>
        <input type="submit" value="Enviar">
    </select> 
  </div>
    <h1 style="margin-left: 70px; LINE-HEIGHT:10px">FUTBOL</h1>
    <h1 style="LINE-HEIGHT:0px;">BELLVITGE</h1>
    <a href="#" style="margin-left: 31%;">Inicio</a>
    <a href="#">Clasificaciones</a>
    <a href="./inscipcion.html"">Inscripciones</a>
    <a href="#">Noticias</a>
    <a href="#">Galeria</a>
</div>
</div>

<div class="ins">
  <h1>Rellena tus datos!</h1>
  <div class="form">
    <form action="./inscripcion.php" method="POST" onsubmit="return validacionForm()">
      <div class="medi">
        <input type="text" id="nombre" name="nombre" placeholder="Nombre...">
      </div>  
        <input type="text" id="dni" name="dni" maxlength="9" placeholder="DNI">

      <br><br>

      <div class="medi">
        <input type="text" id="sapellido" name="sapellido" placeholder="Segundo apellido...">
      </div>
        <input type="text" id="papellido" name="papellido" placeholder="Primer apellido...">
        
      <br><br>

      <div class="medi">
        <input type="email" id="email" name="email" placeholder="Email...">
      </div>
        <input type="date" id="start" name="edad">

      <br><br>

      <div class="des">
        <select id="sexo" name="sexo">        
        <?php
          try{
                $query="SELECT DISTINCT categoria.sexo_categoria From categoria ORDER BY id_categoria";
                $sentencia=$pdo->prepare($query);
                $sentencia->execute();
                $categoria=$sentencia->fetchAll(PDO::FETCH_ASSOC);
                // $row=$sentencia->rowCount()
                foreach ($categoria as $row){
                  echo '<option value="'.$row[sexo_categoria].'">'.$row[sexo_categoria].'</option>';
                }
              } catch (Exception $e) {
                $pdo->rollBack();
                echo $e;
              }
        ?>
        </select>

      <br><br>

      <select id="cate" name="cate">
      <?php
        try{
              $query="SELECT DISTINCT categoria.nombre_categoria From categoria ORDER BY id_categoria";
              $sentencia=$pdo->prepare($query);
              $sentencia->execute();
              $categoria=$sentencia->fetchAll(PDO::FETCH_ASSOC);
              // $row=$sentencia->rowCount()
              foreach ($categoria as $row){
                echo '<option value="'.$row[nombre_categoria].'">'.$row[nombre_categoria].'</option>';
              }
            } catch (Exception $e) {
              $pdo->rollBack();
              echo $e;
            }
      ?>
    </select>
     </div>

     <br>

      <input type="submit" id="submit" name="dir" value="Registrar">
      <?php
      require_once '../model/participanteDAO.php';
      if (isset($_POST['dir'])){
          $participante=new ParticipanteDAO;
          $participante->adir();
      }
    ?>
    </form>
  <div style="font-size: 150%; color: red;" id="message"></div>
</div>
</div>

<div class="footer">
  <div class="footer1">
    <h1>Fútbol</h1>
    <h1>Bellvitge</h1>
    <hr style="height:2px;border-width:0;background-color:black;">
    <img src="../img/twitter.png" width="40" height="40">
    <img src="../img/facebook.png" width="40" height="40">
    <img src="../img/google.png" width="40" height="40">
  </div>
  <div class="footer2">
    <h1>ACCESO RÁPIDO</h1>
    <p>Inicio</p>
    <p>Clasificaciones</p>
    <p>Inscripciones</p>
    <p>Noticias</p>
    <p>Login - Admin</p>
  </div>
  <div class="footer3">
    <h1>CONTACTO</h1>
    <p>19 de Mayo de 2021</p>
    <p>Av. Mare de Déu de Bellvitge, 100, 110, <br>
      08907 L'Hospitalet de Llobregat, Barcelona</p>
    <p>15 horas</p>
  </div>
</div>

</body>
</html>