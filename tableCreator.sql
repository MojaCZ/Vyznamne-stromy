-- *********************** user *********************
DROP TABLE IF EXISTS user;

CREATE TABLE IF NOT EXISTS user (
  id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  tel VARCHAR(50),
  admin BIT,
  PRIMARY KEY(id),
  UNIQUE INDEX email_UNIQUE (email ASC),
  UNIQUE INDEX id_UNIQUE (id ASC),
  UNIQUE INDEX name_UNIQUE (name ASC)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- **************** strom ********************
DROP TABLE IF EXISTS lokal;
DROP TABLE IF EXISTS pisemne_d;
DROP TABLE IF EXISTS obrazove_d;
DROP TABLE IF EXISTS kateg;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS ohro;
DROP TABLE IF EXISTS strom;

CREATE TABLE IF NOT EXISTS strom (
  strom_id INT(10) UNSIGNED NOT NULL UNIQUE AUTO_INCREMENT,
  IDEX INT(10) UNSIGNED,
  NAME VARCHAR(50),
  TYP_OBJ VARCHAR(50) NOT NULL,
  DATIN DATETIME NOT NULL,
  DATAK DATETIME,
  DATVY DATETIME,
  VLAST ENUM('RVSCR', 'PAMSTR', 'NPUST', 'PARTN', 'APVYS') NOT NULL,
  EXURL VARCHAR(255),
  IDNAZ VARCHAR(50),
  PRIJEM BIT,
  PRIMARY KEY (strom_id)
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- ************************** lokal *******************
CREATE TABLE IF NOT EXISTS lokal (
  strom_id INT(10) UNSIGNED NOT NULL,
  LON FLOAT UNSIGNED NOT NULL,
  LAT FLOAT UNSIGNED NOT NULL,
  FOREIGN KEY (strom_id) REFERENCES strom (strom_id) ON DELETE CASCADE
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- *********************** pisemne_d ***********************
CREATE TABLE IF NOT EXISTS pisemne_d (
  strom_id INT(10) UNSIGNED NOT NULL,
  URL VARCHAR(255) NOT NULL,
  FOREIGN KEY (strom_id) REFERENCES strom (strom_id) ON DELETE CASCADE
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- *********************** obrazove_d *************************
CREATE TABLE IF NOT EXISTS obrazove_d (
  strom_id INT(10) UNSIGNED NOT NULL,
  URL VARCHAR(255) NOT NULL,
  FOREIGN KEY (strom_id) REFERENCES strom (strom_id) ON DELETE CASCADE
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- ************************** kateg ***************************
CREATE TABLE IF NOT EXISTS kateg (
  strom_id INT(10) UNSIGNED NOT NULL,
  KATEG1 VARCHAR(50),
  KATEG2 VARCHAR(50),
  KATEG3 VARCHAR(50),
  KATEG4 VARCHAR(50),
  KATEG5 VARCHAR(50),
  FOREIGN KEY (strom_id) REFERENCES strom (strom_id) ON DELETE CASCADE
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- ***************************** ohro ***********************
CREATE TABLE IF NOT EXISTS ohro (
  strom_id INT(10) UNSIGNED NOT NULL,
  OHRO1 VARCHAR(50),
  OHRO2 VARCHAR(50),
  OHRO3 VARCHAR(50),
  OHRO4 VARCHAR(50),
  OHRO5 VARCHAR(50),
  FOREIGN KEY (strom_id) REFERENCES strom (strom_id) ON DELETE CASCADE
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-- ****************************** comment *******************
CREATE TABLE IF NOT EXISTS comment (
  strom_id INT(10) UNSIGNED NOT NULL,
  COM_U TEXT NOT NULL,
  COM_A TEXT NOT NULL,
  FOREIGN KEY (strom_id) REFERENCES strom (strom_id) ON DELETE CASCADE
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;



-- ****************************** example inserting user **************************
INSERT INTO user (name, email, password, tel, admin) VALUES ('petr', 'petr@seznam.cz', 'somePW', '775486955', b'0');

-- inserting new tree
INSERT INTO strom (TYP_OBJ, DATIN, VLAST, PRIJEM) VALUES ('stromoradi', '13.5.2020', 'APVYS', b'0');

-- 