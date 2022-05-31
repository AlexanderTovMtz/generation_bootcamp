USE genenation_bootcamp;

CREATE TABLE alumnos(
	alumno_id int NOT NULL auto_increment,
    nombre varchar(255),
    edad int NOT NULL,
    CURP char(13),
    nivel_ingles varchar(255),
    amonestaciones int,
    
    primary key (alumno_id)
    
);

show create table alumnos;

CREATE TABLE `alumnos` (
`alumno_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `edad` int NOT NULL,
  `CURP` char(13) NOT NULL,
  `nivel_ingles` varchar(255) NOT NULL,
  `amonestaciones` int NOT NULL,
  PRIMARY KEY (`alumno_id`)
  ) 




