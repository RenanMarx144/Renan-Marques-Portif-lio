<?php
namespace BancoDeDados;

use Exception;
use PDO;

class BancoDeDados{
    
    private static $conection;
    
    private static $result;
    
    public static function conect(){
        try {
            $address = "mysql:host=localhost;dbName=test";
            self::$conection = new PDO($address,"root", "1234");
            self::$conection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return TRUE;
        } catch (Exception $e) {
            return FALSE;
        }
    }
    public static function desconect(){
        self::$conection = NULL;
    }
    
    public static function execult($sql){
        try {
            self::$conection->beginTransaction();
            self::$result = self::$conection->prepare($sql);
            self::$result->execute();
            self::$conection->commit();
            return TRUE;
        } catch (Exception $e) {
            self::$conection->rollBack();
            echo "erro ao executar o banco de dados!";
            return FALSE;
        }
    }
    public static function returnResult(){
        return self::$result->fetchAll();
    }
}


