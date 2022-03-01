DROP TABLE IF EXISTS `movies`;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `director` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `color` tinyint(1) NOT NULL,
  `duration` int NOT NULL,
  'token' varchar(255),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO
  `movies` (title, director, year, color, duration)
VALUES
  ('Citizen Kane', 'Orson Wells', '1941', 0, 120),
  (
    'The Godfather',
    'Francis Ford Coppola',
    '1972',
    1,
    180
  ),
  (
    'Pulp Fiction',
    'Quentin Tarantino',
    '1994',
    1,
    180
  ),
  (
    'Apocalypse Now',
    'Francis Ford Coppola',
    '1979',
    1,
    150
  ),
  (
    '2001 a space odyssey',
    'Stanley Kubrick',
    '1968',
    1,
    160
  ),
  (
    'The Dark Knight',
    'Christopher Nolan',
    '2008',
    1,
    150
  );
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `firstname` varchar(255) NOT NULL,
    `lastname` varchar(255) NOT NULL,
    `email` varchar(255) UNIQUE NOT NULL,
    `city` varchar(255) DEFAULT NULL,
    `language` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8;
INSERT INTO
  `users`
VALUES
  (
    1,
    'John',
    'Doe',
    'john.doe@example.com',
    'Paris',
    'English'
  ),(
    2,
    'Valeriy',
    'Appius',
    'valeriy.ppius@example.com',
    'Moscow',
    'Russian'
  ),(
    3,
    'Ralf',
    'Geronimo',
    'ralf.geronimo@example.com',
    'New York',
    'Italian'
  ),(
    4,
    'Maria',
    'Iskandar',
    'maria.iskandar@example.com',
    'New York',
    'German'
  ),(
    5,
    'Jane',
    'Doe',
    'jane.doe@example.com',
    'London',
    'English'
  ),(
    6,
    'Johanna',
    'Martino',
    'johanna.martino@example.com',
    'Milan',
    'Spanish'
  );

DROP TABLE IF EXISTS `movies_subventions`;
  CREATE TABLE movies_subventions (
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
FILM_TITRE VARCHAR(100) NOT NULL,
FILM_ANNEE DOUBLE NOT NULL,
FILM_COMMUNE VARCHAR(100) NOT NULL,
FILM_REALISATEUR VARCHAR(100) NOT NULL,
FILM_PRODUCTEUR VARCHAR(100) NOT NULL,
FILM_GENRE VARCHAR(100) NOT NULL,
FILM_FORMAT VARCHAR(100) NOT NULL,
SUBVENTION_ANNEE DOUBLE,
SUBVENTION_NUMDOSSIER VARCHAR(100),
SUBVENTION_TITRE VARCHAR(100),
SUBVENTION_TYPEAIDE VARCHAR(100),
SUBVENTION_MONTANT_REGION VARCHAR(100),
SUBVENTION_BUDGETPREVISIONNEL_FILM VARCHAR(100)
);


  