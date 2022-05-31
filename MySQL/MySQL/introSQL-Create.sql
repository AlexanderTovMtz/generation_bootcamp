-- CRUD --



-- CREATE

-- crear una base de datos
CREATE DATABASE familia;
-- create schema familia; --

-- Selecionar la base de datos

USE familia;

-- creación de tabla
-- no es necesario poner NOT NULL en llave primaria
-- Podemos usar DEFAULT para asignar un valor por defecto
-- Debemos especifficar la llame primaria
CREATE TABLE persona(
	persona_id int NOT NULL auto_increment,
    nombre varchar(255) NOT NULL,   
    
    correo varchar(255) NOT NULL,
	edad int NOT NULL,
    estado varchar(255) DEfAULT "Desconocido",
    cumpleainos date DEFAULT NULL ,
    
    PRIMARY KEY (persona_id),
   -- Agrega un modificador para que los valores provinientes sean unicos
    CONSTRAINT email_unico UNIQUE(correo)
        
);

