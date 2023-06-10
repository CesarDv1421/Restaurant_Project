-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.11.2-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para porksgrill
CREATE DATABASE IF NOT EXISTS `porksgrill` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `porksgrill`;

-- Volcando estructura para tabla porksgrill.category
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla porksgrill.category: ~17 rows (aproximadamente)
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` (`id`, `category`) VALUES
	(1, 'Menu'),
	(2, 'Entradas'),
	(3, 'Chicken Wings'),
	(4, 'Ensaladas'),
	(5, 'Carnes'),
	(6, 'Platos de la Casa'),
	(7, 'Adicionales'),
	(8, 'Cachapas'),
	(9, 'Hamburguesas'),
	(10, 'Sushi'),
	(11, 'Sandwiches'),
	(12, 'Kids'),
	(13, 'MilkShakes'),
	(14, 'Bebidas'),
	(15, 'Cervezas'),
	(16, 'Cocteles'),
	(17, 'Postres');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;

-- Volcando estructura para tabla porksgrill.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `email` varchar(50) NOT NULL DEFAULT '',
  `password` varchar(250) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla porksgrill.clientes: ~1 rows (aproximadamente)
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` (`id`, `name`, `email`, `password`) VALUES
	(13, 'Cesar', 'cesardv1321@gmail.com', '$2b$10$7nC9AjCFwqcxPwJSUwulLOHqqKqK9P09Z8kDyOrDTg5ZTldYHGraa');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;

-- Volcando estructura para tabla porksgrill.extras
CREATE TABLE IF NOT EXISTS `extras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `extras` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla porksgrill.extras: ~13 rows (aproximadamente)
/*!40000 ALTER TABLE `extras` DISABLE KEYS */;
INSERT INTO `extras` (`id`, `extras`) VALUES
	(1, 'Papas Fritas'),
	(2, 'Salsa Chipotle'),
	(3, 'Salsa Fuji'),
	(4, 'Aguacate'),
	(5, 'Chorizo'),
	(6, 'Bondiola de Cerdo'),
	(7, 'Aros de Cebolla'),
	(8, 'Sticks de Yuca'),
	(9, 'Coleslaw'),
	(10, 'Queso Cheddar Fundido'),
	(11, 'Aderezo César'),
	(12, 'Queso de Mano'),
	(14, 'Salsa de Ajo');
/*!40000 ALTER TABLE `extras` ENABLE KEYS */;

-- Volcando estructura para tabla porksgrill.ingredientes
CREATE TABLE IF NOT EXISTS `ingredientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ingrediente` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla porksgrill.ingredientes: ~32 rows (aproximadamente)
/*!40000 ALTER TABLE `ingredientes` DISABLE KEYS */;
INSERT INTO `ingredientes` (`id`, `ingrediente`) VALUES
	(1, 'Pollo'),
	(2, 'Carne'),
	(3, 'Tomate'),
	(4, 'Cebolla morada'),
	(5, 'Lechuga'),
	(6, 'Pepinillos'),
	(7, 'Aros de cebolla'),
	(8, 'Queso cheddar fundido'),
	(9, 'Salsa de la casa'),
	(10, 'Tomates marinados'),
	(11, 'Tocineta'),
	(12, 'Falda de cerdo deshebrada'),
	(13, 'BBQ de la casa'),
	(14, 'Sweet relish'),
	(15, 'Coleslaw'),
	(16, 'Facilistas Kraft'),
	(17, 'Honey mustard'),
	(18, 'Salsa Fuji'),
	(19, 'Salsa Spicy'),
	(20, 'Salsa Anguila'),
	(21, 'Chips de Plátano'),
	(22, 'Pesto'),
	(23, 'Chorizo'),
	(24, 'Morcilla'),
	(25, 'Yuca Sticks'),
	(26, 'Papas Fritas'),
	(27, 'Ensalada César'),
	(28, 'Ensalada Mixta'),
	(29, 'Bondiola de Cerdo'),
	(30, 'Pulpo'),
	(31, 'Mejillones'),
	(32, 'Langostinos'),
	(33, 'Salchicha Polaca'),
	(34, 'Salchiqueso'),
	(35, 'Aguacate'),
	(36, 'Palmitos'),
	(37, 'Tamales de Cerdo');
/*!40000 ALTER TABLE `ingredientes` ENABLE KEYS */;

-- Volcando estructura para tabla porksgrill.menu
CREATE TABLE IF NOT EXISTS `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `price` decimal(10,1) DEFAULT NULL,
  `image` varchar(250) NOT NULL,
  `dishCategory_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1_category` (`dishCategory_id`),
  CONSTRAINT `FK1_category` FOREIGN KEY (`dishCategory_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla porksgrill.menu: ~59 rows (aproximadamente)
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` (`id`, `name`, `description`, `price`, `image`, `dishCategory_id`) VALUES
	(1, 'Langostinos al panko', 'Crujientes langostinos empanizados en panko, fritos y bañados en salsa fuji, spicy, anguila, cebollín y ajonjolí.Crujientes langostinos empanizados en', 9.9, 'asdasd', 2),
	(2, 'Ceviche Clásico', 'Filet de róbalo, marinado en zumo de limón, cebolla morada, ají dulce y cilantro acompañado de chips de plátano.', 9.0, 'asdasd', 2),
	(3, 'Ceviche Porks', 'Filet de róbalo, calamares, pulpo, mejillones y langostinos marinados en piel roja, limón y cilantro acompañado de chips de plátano.', 13.5, 'asd', 2),
	(4, 'Tamales de Cerdo', 'Exquisito trío de tamales de masa aliñada rellenos de bondiola de cerdo.', 5.4, 'asd', 2),
	(5, 'Porky Chunky', 'Deliciosos y crujientes recortes de pernil fritos acompañados de limón.', 12.0, 'asdas', 2),
	(6, 'Chicharrón', 'Crocante y exquisita panza de cerdo frita acompañada de limón.', 10.0, 'asd', 2),
	(7, 'Papas Porks', 'Papas fritas bañadas en queso cheddar fundido y tocineta.', 5.9, 'asd', 2),
	(8, 'Calamares Rebozados', 'Aros de calamares rebozados y fritos acompañados de salsa tártara.', 7.0, 'asdas', 2),
	(9, 'Mediterránea', 'Mix de lechugas aderezadas con vinagre balsámico, palmito, tomates cherry, aceitunas negras, rábano y aguacate.', 9.4, 'asd', 4),
	(10, 'Cajún', 'Mix de lechugas aderezadas con miel mostaza y ranch, zanahoria rallada, maíz, huevo hervido, pollo crispy y mix de queso cheddar y mozzarella rallado.', 10.8, 'asdasd', 4),
	(11, 'Caribeña', 'Mix de lechugas, camarones al panko fritos, aguacate, queso de cabra, crotones, aderezo con cangrejo y vinagreta de parchita.', 11.8, 'asdas', 4),
	(12, 'Cordon Bleu', 'Deliciosa y clásica milanesa de pollo al panko rellena de queso tentación, jamón y tocino, bañada en salsa cuatro quesos y champiñones, acompañada de ensalada César y papas fritas.', 14.2, 'CordonBleu.jpg', 5),
	(13, 'Involtini de Cerdo Especial', 'Exquisito lomito de cerdo albardado en jamón serrano, bañado en reducción de arándanos y aceto balsámico, servido sobre puré de patatas y ensalada de la casa.', 18.0, 'asdasd', 5),
	(14, 'Milanesa a la Parmesana', 'Milanesa de pollo empanizado y frita cubierta con tomates marinados y pesto, gratinada con queso mozzarella y parmesano, acompañada de ensalada César y papas fritas.', 11.0, 'MilanesaALaParmesana.jpg', 5),
	(15, 'Involtini de Cerdo', 'Lomito de cerdo albardado en tocineta, bañado en exquisita salsa teriyaki, acompañado con ensalada a elección y papas fritas.', 15.0, 'asdasd', 5),
	(16, 'Pechuga de Pollo', 'Exquisita pechuga de pollo a la parrilla acompañada de chorizo, papas fritas y ensalada a elección.', 10.0, 'adasd', 5),
	(17, 'Churrasco de Solomo Cuerito', 'Cocido a la parrilla servido con dos acompañantes a elección: chorizo, morcilla, yuka sticks, papas fritas, ensalada César, mixta o coleslaw.', 11.0, 'ChurrascoDeSolomo.jpg', 5),
	(18, 'Parrilla Mar y Tierra', 'Exquisita parrilla conformada por solomo de cuerito, pollo, bondiola de cerdo, pulpo, calamares, mejillones, langostinos, chorizo, salchicha polaca, salchiqueso, papas fritas, tostones chips y ensalada mixta con aguacate y palmitos.', 35.0, 'Mar_y_tierra.jpg', 6),
	(19, 'Baby Pork', 'Exquisita parrilla conformada por tiritas de pork belly frito, pollo, solomo de cuerito, chorizo, morcilla, dos cachapas tradicionales tamaño regular, tostones con queso guayanés bañados en salsa cóctel, aguacate y mojo verde.', 28.0, 'BabyPork.jpg', 6),
	(20, 'Jack Daniel’s Pork Ribs', 'Exquisitas costillas de cerdo horneadas y bañadas en salsa de la casa Jack Daniel’s, acompañadas de volcanes de papa rellenos con queso, albardados en tocineta y acompañado de ensalada primavera.', 36.0, 'JackDanielPorkRibs.jpg', 6),
	(22, 'American Porks Ribs', 'Exquisitas costillas de cerdo horneadas y bañadas en salsa barbecue, al estilo americano, acompañadas de deliciosos y clásicos macarrones con queso y papas fritas.', 32.0, 'asdas', 6),
	(23, 'Picadito', 'Delicioso mix parrillero de tiras de churrasco de pollo, solomo de cuerito, chorizo, morcilla, sticks de yuca y mojo verde.', 11.5, 'asdasd', 6),
	(24, 'Panceta', 'Deliciosos cortes de cerdo horneados acompañados de limón, papas rústicas fritas y especiadas, y un roll de cachapa tradicional.', 26.5, 'asdas', 6),
	(25, 'Viuda', 'Cachapa sola de 100% maíz puro.', 3.0, 'asdasd', 8),
	(26, 'Porks Belly Roll', 'Roll de cachapa relleno de queso de mano, pork belly, con topping de queso guayanés, queso crema, pork belly y limón.', 9.5, 'PorkBellyRoll', 8),
	(27, 'Roll Tradicional', 'Roll de cachapa relleno de queso guayanés y topping de queso crema.', 7.0, 'RollTradicional.jpg', 8),
	(28, 'Roll Especial', 'Roll de cachapa relleno de queso guayanés y topping de queso crema, bacon y cebollín.', 8.0, 'asdasd', 8),
	(29, 'Roll Sensación', 'Roll de cachapa relleno de queso guayanés con topping de queso crema y pimentón en almíbar.', 8.0, 'asdasd', 8),
	(30, 'Roll Tropical', 'Roll de cachapa relleno de queso guayanés y jamón con topping de queso crema y piña en almíbar.', 8.0, 'asdasd', 8),
	(31, 'Killer’s Burger', 'Pan de la casa, jugosa carne de 180gr, lechuga, tomates marinados, pepinillos, aros de cebolla fritos, tocineta, bañada en queso cheddar fundido y salsas de la casa.', 7.0, 'asdasd', 9),
	(32, 'Killer’s Crispy', 'Pan de la casa, pollo empanizado y frito, lechuga, tomate, cebolla morada, pepinillos, tocineta, bañada en queso cheddar fundido y salsas de la casa.', 6.8, 'KillerCrispy.jpg', 9),
	(33, 'Killer’s Chicken', 'Pan de la casa, pollo a la parrilla, lechuga, tomate, cebolla morada, pepinillos, tocineta, bañada en queso cheddar fundido y salsas de la casa.', 6.5, 'asdasd', 9),
	(34, 'Pulled Pork', 'Pan de la casa salado, falda de cerdo deshebrada con barbecue de la casa, lechuga, tomate, cebolla morada, pepinillos, bañada en queso cheddar y ahumado, sweet relish y coleslaw.', 7.8, 'PulledPork.jpg', 9),
	(35, 'Chicken Grain Crispy', 'Pan de la casa, pollo empanizado en cereal y frito, lechuga, pepinillos, queso facilistas kraft, coleslaw y honey mustard.', 6.5, 'ChickenGrainCrispy.jpg', 9),
	(36, 'Hamburguesa Jack Daniel’s', 'Pan brioche de la casa, jugosa carne de 180gr, bacon crunchy, queso brie o tentación y salsa Jack Daniel’s de la casa.', 10.5, 'asdasd', 9),
	(37, 'Killer’s Mixta', 'Pan de la casa, jugosa carne de 180gr, pollo empanizado y frito, lechuga, tomates marinados, pepinillos, aros de cebolla, tocineta, bañada en queso cheddar fundido y salsas de la casa.', 10.3, 'KillersMixta', 9),
	(38, 'Killer’s Triple', 'Pan de la casa, jugosa carne de 180gr, pollo empanizado y frito, cerdo a la parrilla, lechuga, tomates marinados, pepinillos, aros de cebolla, tocineta, bañada en queso cheddar fundido y salsas de la casa.', 12.3, 'KillersTriple.jpg', 9),
	(39, 'Burguer House', 'Exquisita hamburguesa con pan de la casa, jugosa carne de 70% res, 30% cerdo de 180gr, queso ahumado, chorizón ahumado, champiñones salteados, lechuga, tomates horneados, aros de cebolla al panko y salsas de la casa.', 10.0, 'asdasd', 9),
	(41, 'California Especial Roll', 'Roll frío relleno de cangrejo, pepino, aguacate, queso crema, topping de masago y wakame', 9.5, 'ASD', 10),
	(42, 'Alaska Especial Roll', 'Roll frío relleno de salmón, aguacate, queso crema, topping de masago y wakame.', 12.5, 'asdasd', 10),
	(43, 'Malvinas Roll', 'Roll frío relleno de langostinos tempura, cangrejo al panko, queso crema, topping de calamares al panko, masago y ajonjolí.', 12.5, 'asdasd', 10),
	(44, 'Finlandia Roll', 'Roll frío proteíco, envuelto en queso crema, relleno de salmón, atún, pescado blanco, pez anguila, aguacate, topping de queso crema y cangrejo crunchy.', 17.0, 'aasdasd', 10),
	(45, 'Paradise Roll', 'Roll frío relleno de langostinos al panko, salmón, aguacate, topping de cangrejo crunchy, wakame y masago.', 12.0, 'asd', 10),
	(46, 'Delicias Roll', 'Roll al panko relleno de cangrejo, aguacate, queso crema, topping de pasta dinamita y cangrejo crunchy.', 10.0, 'asd', 10),
	(47, 'Hiroshima Roll', 'Roll sin arroz tempurizado relleno de salmón, pescado blanco, langostinos al panko, cangrejo, atún, topping de mix de pescados con queso crema, y spicy', 16.5, 'asd', 10),
	(48, 'Dinamita Roll', 'Roll frío relleno de pasta dinamita, aguacate, queso crema, topping de pasta dinamita y cangrejo crunchy.', 10.5, 'asd', 10),
	(49, 'Abu Dhabi Roll', 'Roll frío relleno de camarones tempura, cangrejo, queso crema, cebollín, topping de mero dulce, aguacate y ajonjolí.', 11.5, 'asd', 10),
	(50, 'Punta Sal Roll', 'Roll frío relleno de salmón, atún, aguacate, topping de cebiche clásico, aguacate, masago y ajonjolí.', 10.5, 'asd', 10),
	(51, 'Fusion Roll', 'Uramaki roll sin arroz, relleno de pasta dinamita crunchy, salmón ahumado al panko, queso crema, topping de mix de pescados en sriracha y parchita y wakame.', 13.0, 'asd', 10),
	(52, 'Aurora Roll', 'Roll tempura relleno de camarón tempura, cangrejo, plátano, aguacate, queso crema, topping de pasta dinamita crunchy.', 10.0, 'asd', 10),
	(53, 'Ebi Furai Roll', 'Roll al panko relleno de langostinos tempura, aguacate, queso crema, cebollín, topping de langostinos al panko, fuji y cebollín.', 15.0, 'asd', 10),
	(54, 'Tiger Roll', 'Roll tempura relleno de salmón, aguacate, queso crema, topping de gratinado de salmón, cangrejo, queso crema y spicy.', 10.0, 'asd', 10),
	(55, 'Bocadito de Salmón', 'Relleno de arroz crocante, sriracha, cebollín, envuelto en salmón, topping de gratinado de salmón y pez anguila.', 13.0, 'asd', 10),
	(56, 'Sandwich Granjero', 'Delicioso pan de la casa estilo baguette, pollo empanizado y frito, facilistas kraft, lechuga, tomate, cebolla morada y salsas de la casa.', 9.0, 'asd', 11),
	(57, 'Sandwich Pernil', 'Delicioso pan de la casa salado estilo baguette, pernil de cerdo, lechuga, alfalfa, tomate, cebolla morada y salsas de la casa.', 9.5, 'asd', 11),
	(58, 'Sandwich PO‘ BOY', 'Delicioso pan de la casa estilo baguette, langostinos al panko, lechuga, tomate, aguacate, salsa fuji y spicy.', 12.5, 'asdasd', 11),
	(59, 'Sanwich Pork Crispy', 'Delicioso pan de la casa estilo baguette, cerdo empanizado y frito, facilistas Kraft, lechuga, alfalfa, cebolla morada y salsas de la casa.', 9.5, 'asd', 11),
	(60, 'Porchetta Sandwich', 'Delicioso pan de la casa salado redondo, relleno de porchetta horneada, rucula, ensalada coleslaw y salsa teriyaki.', 10.0, 'asd', 11),
	(61, 'Tenders al Panko con Papas Fritas', NULL, 8.0, 'asd', 12),
	(62, 'Killer’s Burger Kids', NULL, 4.5, 'asd', 12),
	(63, 'Killer’s Crispy Kids', NULL, 4.5, 'asd', 12),
	(64, 'Tequeños', NULL, 5.0, 'asd', 12),
	(65, 'Macarrones con Queso', NULL, 4.0, 'asd', 12);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;

-- Volcando estructura para tabla porksgrill.menu_extras
CREATE TABLE IF NOT EXISTS `menu_extras` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_menu` int(11) DEFAULT NULL,
  `id_extra` int(11) DEFAULT NULL,
  `price` decimal(10,1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_menu` (`id_menu`),
  KEY `FK2_extras` (`id_extra`),
  CONSTRAINT `FK2_extras` FOREIGN KEY (`id_extra`) REFERENCES `extras` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_menu` FOREIGN KEY (`id_menu`) REFERENCES `menu` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla porksgrill.menu_extras: ~33 rows (aproximadamente)
/*!40000 ALTER TABLE `menu_extras` DISABLE KEYS */;
INSERT INTO `menu_extras` (`id`, `id_menu`, `id_extra`, `price`) VALUES
	(1, 32, 1, 2.0),
	(2, 32, 14, 1.0),
	(3, 32, 10, 3.0),
	(4, 32, 2, 1.0),
	(5, 32, 7, 3.0),
	(6, 18, 6, 9.5),
	(7, 18, 5, 5.0),
	(8, 18, 1, 4.0),
	(9, 18, 7, 4.0),
	(10, 18, 8, 3.0),
	(11, 18, 9, 4.0),
	(12, 23, 6, 9.5),
	(13, 23, 5, 5.0),
	(14, 23, 1, 4.0),
	(15, 23, 7, 4.0),
	(16, 23, 8, 3.0),
	(17, 23, 9, 4.0),
	(18, 20, 6, 9.5),
	(19, 20, 5, 5.0),
	(20, 20, 1, 4.0),
	(21, 20, 7, 4.0),
	(22, 20, 8, 3.0),
	(23, 20, 9, 4.0),
	(24, 19, 6, 9.5),
	(25, 19, 5, 5.0),
	(26, 19, 1, 4.0),
	(27, 19, 7, 3.0),
	(28, 19, 8, 3.0),
	(29, 19, 9, 4.0),
	(31, 22, 6, 9.5),
	(32, 22, 5, 5.0),
	(33, 22, 1, 4.0),
	(34, 22, 7, 3.0),
	(35, 22, 8, 3.0),
	(36, 22, 9, 4.0);
/*!40000 ALTER TABLE `menu_extras` ENABLE KEYS */;

-- Volcando estructura para tabla porksgrill.menu_ingredientes
CREATE TABLE IF NOT EXISTS `menu_ingredientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_menu` int(11) DEFAULT NULL,
  `id_ingredientes` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1_menu` (`id_menu`),
  KEY `FK2_ingredientes` (`id_ingredientes`),
  CONSTRAINT `FK1_menu` FOREIGN KEY (`id_menu`) REFERENCES `menu` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK2_ingredientes` FOREIGN KEY (`id_ingredientes`) REFERENCES `ingredientes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla porksgrill.menu_ingredientes: ~15 rows (aproximadamente)
/*!40000 ALTER TABLE `menu_ingredientes` DISABLE KEYS */;
INSERT INTO `menu_ingredientes` (`id`, `id_menu`, `id_ingredientes`) VALUES
	(2, 32, 5),
	(3, 32, 3),
	(4, 32, 4),
	(5, 32, 6),
	(6, 32, 11),
	(7, 32, 8),
	(8, 32, 9),
	(9, 34, 5),
	(10, 34, 3),
	(11, 34, 4),
	(12, 34, 6),
	(13, 34, 8),
	(14, 34, 14),
	(15, 34, 15);
/*!40000 ALTER TABLE `menu_ingredientes` ENABLE KEYS */;

-- Volcando estructura para tabla porksgrill.variantedelmenu
CREATE TABLE IF NOT EXISTS `variantedelmenu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platoVariante` varchar(50) NOT NULL,
  `description` varchar(250) NOT NULL,
  `image` varchar(250) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1_categoria` (`id_category`),
  CONSTRAINT `FK1_categoria` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla porksgrill.variantedelmenu: ~24 rows (aproximadamente)
/*!40000 ALTER TABLE `variantedelmenu` DISABLE KEYS */;
INSERT INTO `variantedelmenu` (`id`, `platoVariante`, `description`, `image`, `id_category`) VALUES
	(1, 'Chicken Wings BBQ', '', 'AlitasBBQ.jpg', 3),
	(2, 'Chicken Wings Buffalo', '', '', 3),
	(3, 'Chicken Wings Asian', '', '', 3),
	(4, 'Chicken Wings American', '', '', 3),
	(5, 'Chicken Wings Honey Mustard & Parmesan', '', '', 3),
	(6, 'Gyozas', 'Deliciosas empanadillas de masa wanton rellenas y fritas.', '', 6),
	(7, 'Ensalada César', 'Mix de lechugas complementado con aderezo César de la casa, crotones, tocino y queso parmesano kraft.', '', 4),
	(8, 'Churrasco de Mero', 'Fresco churrasco de mero al grill acompañado de tostones y ensalada coleslaw.', 'ChurrascoMero.jpg', 5),
	(9, 'Churrasco de Pollo', 'Cocido a la parrilla acompañado de chorizo, papas fritas y ensalada a elección.', 'ChurrascoDePollo.jpg', 5),
	(10, 'Pork Ribs', 'Deliciosas costillas horneadas, bañadas en barbecue y al grill con ajonjolí, acompañadas de papas fritas y ensalada coleslaw.', '', 6),
	(11, 'Pork Belly', 'Deliciosos y crujientes cortes de panza de cerdo horneados, acompañado de limón y tamales rellenos de cerdo.', '', 6),
	(12, 'Cachapa Porks', 'Clásica cachapa acompañada de queso de mano y bondiola de cerdo a la parrilla.', '', 8),
	(13, 'Cachapa Caraqueña', 'Exquisita cachapa acompañada de queso de mano y costillas de cerdo barbecue.', '', 8),
	(14, 'Cachapa Tradicional', 'Cachapa de 100% maíz puro acompañada de queso de mano.', '', 8),
	(15, 'Cachapa Carupanera', 'Exquisita cachapa acompañada de queso de mano y chorizo a la parrilla.', '', 8),
	(16, 'Cachapa Oriental', 'Exquisita cachapa acompañada de queso de mano, bondiola de cerdo y chorizo a la parrilla.', '', 8),
	(17, 'Cachapa Valenciana', 'Exquisita cachapa acompañada de queso de mano, jamón y tocineta.', '', 8),
	(18, 'Cachapa Bacon', 'Exquisita cachapa acompañada de queso de mano y tocineta.', '', 8),
	(19, 'Cachapa Mirandina', 'Exquisita cachapa acompañada de queso de mano, costillas de cerdo barbecue y chorizo a la parrilla.', '', 8),
	(20, 'Cachapa Coreana', 'Exquisita cachapa acompañada de queso de mano, costillas de cerdo barbecue y bondiola de cerdo a la parrilla.', '', 8),
	(21, 'Cachapa Llanera', 'Tradicional cachapa acompañada de queso de mano y chicharrón.', '', 8),
	(22, 'Tartar', 'Tartar en aguacate, aceite de sésamo y parchita.', '', 10),
	(23, 'Mojito', 'asdasd', 'Mojito.jpg', 14),
	(24, 'Daiquirí', '', '', 14);
/*!40000 ALTER TABLE `variantedelmenu` ENABLE KEYS */;

-- Volcando estructura para tabla porksgrill.variantes
CREATE TABLE IF NOT EXISTS `variantes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `variante` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla porksgrill.variantes: ~25 rows (aproximadamente)
/*!40000 ALTER TABLE `variantes` DISABLE KEYS */;
INSERT INTO `variantes` (`id`, `variante`) VALUES
	(1, 'Baby (6)'),
	(2, 'Junior (12)'),
	(3, 'Family (30)'),
	(4, 'Cerdo'),
	(5, 'Langostinos'),
	(6, 'Mixtas'),
	(7, 'Pollo'),
	(8, 'Pollo Crispy'),
	(9, 'Camarones'),
	(10, 'Ajillo'),
	(11, 'Menier'),
	(12, 'Gr. con Mariscos'),
	(13, 'Marinera con Mar.'),
	(14, 'Tradicional'),
	(15, 'Individual'),
	(16, 'Doble'),
	(17, '1/2 Rack'),
	(18, 'Rack Completo'),
	(19, 'Medio Queso'),
	(20, 'Queso Completo'),
	(21, 'Limon'),
	(22, 'Parchita'),
	(23, 'Fresa'),
	(24, 'Coco'),
	(25, 'Salmón'),
	(26, 'Atún');
/*!40000 ALTER TABLE `variantes` ENABLE KEYS */;

-- Volcando estructura para tabla porksgrill.variantesdelmenu_extras
CREATE TABLE IF NOT EXISTS `variantesdelmenu_extras` (
  `id` int(11) NOT NULL,
  `id_variante` int(11) DEFAULT NULL,
  `id_extras` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_variantesdelmenu_extras_variantedelmenu` (`id_variante`),
  KEY `FK_variantesdelmenu_extras_extras` (`id_extras`),
  CONSTRAINT `FK_variantesdelmenu_extras_extras` FOREIGN KEY (`id_extras`) REFERENCES `extras` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_variantesdelmenu_extras_variantedelmenu` FOREIGN KEY (`id_variante`) REFERENCES `variantedelmenu` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla porksgrill.variantesdelmenu_extras: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `variantesdelmenu_extras` DISABLE KEYS */;
/*!40000 ALTER TABLE `variantesdelmenu_extras` ENABLE KEYS */;

-- Volcando estructura para tabla porksgrill.variantesdelmenu_ingredientes
CREATE TABLE IF NOT EXISTS `variantesdelmenu_ingredientes` (
  `id` int(11) NOT NULL,
  `id_variantedelmenu` int(11) DEFAULT NULL,
  `id_ingrediente` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2_ingrediente` (`id_ingrediente`),
  KEY `FK1_variantedelmenu` (`id_variantedelmenu`),
  CONSTRAINT `FK1_variantedelmenu` FOREIGN KEY (`id_variantedelmenu`) REFERENCES `variantedelmenu` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK2_ingrediente` FOREIGN KEY (`id_ingrediente`) REFERENCES `ingredientes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla porksgrill.variantesdelmenu_ingredientes: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `variantesdelmenu_ingredientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `variantesdelmenu_ingredientes` ENABLE KEYS */;

-- Volcando estructura para tabla porksgrill.variantesdelmenu_variantes
CREATE TABLE IF NOT EXISTS `variantesdelmenu_variantes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_variantedelmenu` int(11) NOT NULL,
  `id_variantes` int(11) NOT NULL,
  `price` decimal(10,1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1_NombrePLato` (`id_variantedelmenu`),
  KEY `FK2_Variante` (`id_variantes`),
  CONSTRAINT `FK1_NombrePLato` FOREIGN KEY (`id_variantedelmenu`) REFERENCES `variantedelmenu` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK2_Variante` FOREIGN KEY (`id_variantes`) REFERENCES `variantes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla porksgrill.variantesdelmenu_variantes: ~61 rows (aproximadamente)
/*!40000 ALTER TABLE `variantesdelmenu_variantes` DISABLE KEYS */;
INSERT INTO `variantesdelmenu_variantes` (`id`, `id_variantedelmenu`, `id_variantes`, `price`) VALUES
	(1, 8, 10, 14.0),
	(2, 8, 11, 14.0),
	(3, 8, 12, 17.0),
	(7, 6, 4, 6.7),
	(8, 6, 5, 8.0),
	(9, 6, 6, 8.5),
	(10, 1, 1, 5.0),
	(11, 1, 2, 8.5),
	(12, 1, 3, 17.4),
	(13, 2, 1, 5.0),
	(14, 2, 2, 8.5),
	(15, 2, 3, 17.4),
	(16, 3, 1, 5.0),
	(17, 3, 2, 8.5),
	(18, 3, 3, 17.4),
	(19, 4, 1, 5.5),
	(20, 4, 2, 9.0),
	(21, 4, 3, 18.4),
	(22, 5, 1, 5.5),
	(23, 5, 2, 9.0),
	(24, 5, 3, 18.4),
	(25, 7, 7, 8.5),
	(26, 7, 8, 9.0),
	(27, 7, 9, 11.5),
	(32, 9, 14, 9.8),
	(33, 9, 12, 15.0),
	(34, 10, 17, 15.0),
	(35, 10, 18, 28.0),
	(36, 11, 15, 13.0),
	(37, 11, 16, 24.0),
	(38, 12, 19, 10.0),
	(39, 12, 20, 13.0),
	(40, 13, 19, 11.0),
	(41, 13, 20, 14.0),
	(42, 14, 19, 6.0),
	(43, 14, 20, 9.0),
	(44, 15, 19, 9.0),
	(45, 15, 20, 12.0),
	(46, 16, 19, 12.5),
	(47, 16, 20, 15.5),
	(48, 17, 19, 10.0),
	(49, 17, 20, 13.0),
	(50, 18, 19, 9.0),
	(51, 18, 20, 12.0),
	(52, 19, 19, 11.0),
	(53, 19, 20, 13.5),
	(54, 20, 19, 14.0),
	(55, 20, 20, 17.0),
	(56, 21, 19, 10.0),
	(57, 21, 20, 13.0),
	(58, 22, 25, 10.0),
	(59, 22, 26, 10.0),
	(60, 23, 21, 3.2),
	(61, 23, 22, 3.2),
	(62, 23, 23, 3.2),
	(63, 23, 24, 3.2),
	(64, 24, 21, 4.5),
	(65, 24, 22, 4.5),
	(66, 24, 23, 4.5),
	(67, 24, 24, 4.5),
	(68, 8, 13, 17.0);
/*!40000 ALTER TABLE `variantesdelmenu_variantes` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
