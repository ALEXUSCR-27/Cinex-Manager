CREATE  DATABASE  CinePelicula ;
USE CinePelicula;

-- tabla de películas -- 
CREATE TABLE peliculas(
	peliculaID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(255) NOT NULL,
	director VARCHAR(80) NOT NULL,
	idioma VARCHAR(255) NOT NULL,
	edadRequerida SMALLINT,
	fechaEstreno DATE,
    genero VARCHAR(255) NOT NULL,
    duracionMin smallint);
    
    
    -- Agregar --
delimiter $$
CREATE PROCEDURE proceInsertarPelicula (titulo VARCHAR(255), director VARCHAR(80), idioma VARCHAR(255), 
				edadRequerida SMALLINT, fechaEstreno DATE, genero VARCHAR(255), duracionMin smallint)
begin 
	INSERT INTO `cinePelicula`.`peliculas`
		(`titulo`,`director`,`idioma`,`edadRequerida`,`fechaEstreno`,`genero`,`duracionMin`)
		VALUES
		(titulo,director,idioma,edadRequerida,fechaEstreno,genero,duracionMin);
end $$ 
delimiter ;

-- Eliminar --
delimiter $$
CREATE PROCEDURE proceEliminarPelicula (pIdPelicula INT)
begin 
	DELETE FROM peliculas WHERE peliculas.peliculaID = pIdPelicula;
    
end $$ 
delimiter ;

-- Modificar --
delimiter $$
CREATE PROCEDURE proceModificarPelicula (pPeliculaID INT, pTitulo VARCHAR(255), pIdioma VARCHAR(255), pFecha DATE)
BEGIN
    IF NOT pTitulo = "" THEN
        UPDATE Peliculas SET titulo = pTitulo WHERE peliculaID = pPeliculaID;
    END IF;
    IF NOT pIdioma = "" THEN
        UPDATE Peliculas SET idioma = pIdioma WHERE peliculaID = pPeliculaID;
    END IF;
    IF NOT pFecha = '1901-01-01' THEN
        UPDATE Peliculas SET fechaEstreno = pFecha WHERE peliculaID = pPeliculaID;
    END IF;
END $$
delimiter ;

-- Buscar --
delimiter $$
CREATE PROCEDURE proceBuscarPelicula (pTitulo VARCHAR(255), IDGenero VARCHAR(80), pIdioma VARCHAR(255), pFecha DATE)
BEGIN
    SET @consulta = 'SELECT PELI.peliculaID, titulo, director, idioma, edadRequerida, fechaEstreno, duracionMin, genero FROM Peliculas PELI WHERE 1';   
    IF NOT pTitulo = "" THEN SET @consulta = CONCAT(@consulta, " AND titulo = '", pTitulo, "'"); END IF;
    IF NOT IDGenero = "" THEN SET @consulta = CONCAT(@consulta, " AND genero = '", IDGenero, "'"); END IF;
    IF NOT pIdioma = "" THEN SET @consulta = CONCAT(@consulta, " AND idioma = '", pIdioma, "'"); END IF;
    IF NOT pFecha = '1901-01-01' THEN SET @consulta = CONCAT(@consulta, " AND fechaEstreno = '", DATE_FORMAT(pFecha, '%Y-%m-%d'), "'"); END IF;
    PREPARE stmt FROM @consulta;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END $$
delimiter ;

-- PRUEBAS -- 
call proceInsertarPelicula ('Jurassic Park','Colin Trevorrow', 'Ingles', 12,'2018-11-23','Accion', 130);
call proceInsertarPelicula ('Una noche en el museo','Matt Danner', 'Español', 12,'2006-12-22','Aventura', 108);
call proceInsertarPelicula ('Misterio a la vista','Jeremy Garelick', 'Subtitulada', 12,'2023-03-31','Accion', 89);
call proceInsertarPelicula ('MEGAN','Gerard Johnstone', 'Ingles', 12,'2023-01-04','Terror', 102);
call proceInsertarPelicula ('Poker Face','Russell Crowe', 'Ingles', 12,'2023-07-11','Accion', 120);
call proceInsertarPelicula ('El asombroso Mauricio','Toby Genkel','Español', 3,'2023-03-31','Animacion', 93);
call proceInsertarPelicula ('Zoe y Tempestad','Christian Duguay','Español', 7,'2022-12-21','Ciencia Ficcion', 109);
call proceInsertarPelicula ('El libro del amor','Analeine Cal Y Mayor','Ingles', 7,'2023-05-12','Romance', 106);
call proceInsertarPelicula ('Momias','Juan Jesús García Galocha','Español', 3,'2023-02-24','Terror', 88);
call proceInsertarPelicula ('Megalodón 2: El gran abismo','Ben Wheatley','Español', 12,'2024-08-06','Ciencia Ficcion', 116);

 
call proceInsertarPelicula ('El Laberinto del Fauno','Guillermo del Toro','Español',16,'2007-01-12','Fantasía',118);
call proceInsertarPelicula ('El Renacido (The Revenant)','Alejandro Gonzalez Iñarritu','Ingles',16,'2016-01-08','Aventura',156);
call proceInsertarPelicula ('Avatar','James Cameron','Ingles',13,'2009-12-17','Accion',162); 
call proceInsertarPelicula ('Origen (Inception)','Christopher Nolan','Ingles',13,'2010-07-30','Ciencia ficcion',148); 
call proceInsertarPelicula ('Toy Story 3','Lee Unkrich','Ingles',3,'2010-07-01','Animacion',103); 
call proceInsertarPelicula ('El Gran Hotel Budapest','Wes Anderson','Ingles',15,'2014-05-01','Comedia',100); 
call proceInsertarPelicula ('El Caballero de la Noche (The Dark Knight)','Christopher Nolan','Ingles',16,'2008-07-18','Drama',152); 
call proceInsertarPelicula ('Mad Max: Fury Road','George Miller','Ingles',16,'2015-05-14','Accion',120); 
call proceInsertarPelicula ('La La Land','Damien Chazelle','Ingles',13,'2017-01-12','Musical',128); 
call proceInsertarPelicula ('El Discurso del Rey','Tom Hooper','Ingles',12,'2011-01-20','Drama',118); 
call proceInsertarPelicula ('Up - Una Aventura de Altura','Pete Docter','Ingles',3,'2009-07-23','Animacion',96); 
call proceInsertarPelicula ('La Forma del Agua (The Shape of Water)','Guillermo del Toro','Ingles',16,'2018-01-18','Fantasia',123); 
call proceInsertarPelicula ('El Origen del Planeta de los Simios (Rise of the Planet of the Apes)','Rupert Wyatt','Ingles',12,'2011-08-11','Accion',105); 
call proceInsertarPelicula ('Whiplash','Damien Chazelle','Ingles',16,'2015-01-22','Drama',107); 
call proceInsertarPelicula ('Wall-E','Andrew Stanton','Ingles',3,'2008-07-18','Animacion',98); 
call proceInsertarPelicula ('Avengers: Infinity War','Anthony y Joe Russo','Ingles',12,'2018-04-26','Ciencia ficcion',149); 
call proceInsertarPelicula ('Black Swan','Darren Aronofsky','Ingles',16,'2011-02-24','Drama/Thriller',108); 
call proceInsertarPelicula ('El Renacido (The Revenant)','Alejandro Gonzalez Iñarritu','Ingles',16,'2016-01-28','Aventura',156); 
call proceInsertarPelicula ('Los Juegos del Hambre (The Hunger Games)','Gary Ross','Ingles',12,'2012-03-23','Accion',142); 
call proceInsertarPelicula ('The Social Network','David Fincher','Ingles',13,'2010-10-22','Drama',120); 
 
call proceBuscarPelicula('','','','1901-01-01');
call proceBuscarPelicula('Jurassic Park','','','1901-01-01');
call proceBuscarPelicula('','','','2006-12-22');
call proceBuscarPelicula('Nuevo titulo','','','1901-01-01');
DROP PROCEDURE `cinepelicula`.`proceBuscarPelicula`;

call proceModificarPelicula(3, 'Nuevo titulo', '', '1901-01-01');
DROP PROCEDURE `cinepelicula`.`proceModificarPelicula`;

call proceEliminarPelicula(1);

select * from peliculas;
