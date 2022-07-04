-- phpMyAdmin SQL Dump
-- version 4.1.4
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 26-Abr-2022 às 17:32
-- Versão do servidor: 5.6.15-log
-- PHP Version: 5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `site2022`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Senha` varchar(50) NOT NULL,
  `Acesso` varchar(10) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`Id`, `Nome`, `Email`, `Senha`, `Acesso`) VALUES
(1, 'Maria', 'xxx@xxx', '123', 'Admin'),
(2, 'Pedro', 'yyy@yyy', 'abc', 'Comum'),
(3, 'Marta', 'marta@gmail', 'ddd', 'Comum'),
(4, 'Marcos', 'marcos@gmail', 'ddd', 'Comum'),
(5, 'Tânia', 'tania@gmail', 'ddd', 'Comum'),
(6, 'Carlos', 'carlos@gmail', 'ggg', 'Comum'),
(7, 'Paulo', 'paulo@gmail', 'ggg', 'Comum'),
(8, 'Sandra', 'sandra@gmail', 'ggg', 'Comum'),
(9, 'Joana', 'joana@gmail', 'ggg', 'Comum'),
(10, 'Débora', 'debora@gmail', 'ggg', 'Comum'),
(11, 'César', 'cesar@gmail', 'ggg', 'Comum');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
