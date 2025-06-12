
-- ==========================
-- ESTRUCTURA DE TABLAS (MySQL)
-- ==========================

CREATE TABLE Cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    dni VARCHAR(20) NOT NULL UNIQUE,
    telefono VARCHAR(20) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(100) NOT NULL,
    tipo_seguro VARCHAR(50) NOT NULL
);

CREATE TABLE Clinica (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    numero_consultas INT NOT NULL,
    numero_veterinarios INT NOT NULL,
    numero_acreditacion VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE Veterinario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    dni VARCHAR(20) NOT NULL UNIQUE,
    especialista BOOLEAN DEFAULT FALSE
);

CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    correo VARCHAR(100) NOT NULL UNIQUE,
    contrasena VARCHAR(100) NOT NULL,
    rol ENUM('admin', 'cliente') NOT NULL
);

CREATE TABLE Mascota (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    raza VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    peso FLOAT NOT NULL
);

CREATE TABLE Consulta (
    numero INT PRIMARY KEY,
    especial BOOLEAN DEFAULT FALSE
);

CREATE TABLE Enfermedad (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    mortal BOOLEAN DEFAULT FALSE
);

CREATE TABLE Prueba (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    cubre_seguro BOOLEAN NOT NULL,
    especificaciones TEXT
);

CREATE TABLE Tratamiento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    cubre_seguro BOOLEAN NOT NULL,
    duracion VARCHAR(50),
    dosis VARCHAR(50),
    frecuencia VARCHAR(50),
    forma_administracion VARCHAR(100)
);

CREATE TABLE Vacuna (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo_animal VARCHAR(50) NOT NULL,
    obligatoria BOOLEAN NOT NULL,
    dosis VARCHAR(50),
    frecuencia VARCHAR(50),
    lote VARCHAR(50),
    fecha_caducidad DATE,
    laboratorio VARCHAR(100)
);

CREATE TABLE Visita (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATETIME,
    paciente VARCHAR(100)
);

CREATE TABLE VisitaTratamiento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    visita_id INT,
    tratamiento_id INT,
    dosis INT,
    fechaSiguiente DATE,
    FOREIGN KEY (visita_id) REFERENCES Visita(id) ON DELETE CASCADE,
    FOREIGN KEY (tratamiento_id) REFERENCES Tratamiento(id) ON DELETE CASCADE
);

CREATE TABLE VisitaVacuna (
    id INT AUTO_INCREMENT PRIMARY KEY,
    visita_id INT,
    vacuna_id INT,
    dosis INT,
    fechaSiguiente DATE,
    FOREIGN KEY (visita_id) REFERENCES Visita(id) ON DELETE CASCADE,
    FOREIGN KEY (vacuna_id) REFERENCES Vacuna(id) ON DELETE CASCADE
);

-- ==========================
-- DATOS DE EJEMPLO
-- ==========================

INSERT INTO Cliente (nombre, dni, telefono, correo, contrasena, tipo_seguro) VALUES
('Juan Pérez', '12345678A', '600123456', 'juan@example.com', 'clave123', 'completo'),
('Ana Gómez', '87654321B', '611987654', 'ana@example.com', 'clave456', 'básico');

INSERT INTO Clinica (nombre, numero_consultas, numero_veterinarios, numero_acreditacion) VALUES
('Clínica Central', 5, 10, 'CLIN-001'),
('VeterSalud', 3, 6, 'CLIN-002');

INSERT INTO Veterinario (nombre, dni, especialista) VALUES
('Dr. Ramírez', '11223344C', TRUE),
('Dra. Soto', '22334455D', FALSE);

INSERT INTO Usuario (correo, contrasena, rol) VALUES
('admin@vet.com', 'admin123', 'admin'),
('cliente@vet.com', 'cliente123', 'cliente');

INSERT INTO Mascota (nombre, fecha_nacimiento, raza, tipo, peso) VALUES
('Firulais', '2020-05-10', 'Labrador', 'Perro', 30.5),
('Mishi', '2019-08-20', 'Siames', 'Gato', 4.2);

INSERT INTO Consulta (numero, especial) VALUES
(1, FALSE),
(2, TRUE);

INSERT INTO Enfermedad (nombre, tipo, mortal) VALUES
('Parvovirus', 'Viral', TRUE),
('Otitis', 'Bacteriana', FALSE);

INSERT INTO Prueba (nombre, cubre_seguro, especificaciones) VALUES
('Análisis de sangre', TRUE, 'Requiere ayuno de 12 horas'),
('Radiografía', FALSE, 'Placas en formato digital');

INSERT INTO Tratamiento (nombre, cubre_seguro, duracion, dosis, frecuencia, forma_administracion) VALUES
('Antibiótico X', TRUE, '7 días', '1 tableta', 'cada 12h', 'oral'),
('Antiinflamatorio Y', FALSE, '3 días', '0.5 ml', 'cada 24h', 'inyectable');

INSERT INTO Vacuna (nombre, tipo_animal, obligatoria, dosis, frecuencia, lote, fecha_caducidad, laboratorio) VALUES
('Rabia', 'Perro', TRUE, '1ml', 'anual', 'L1234', '2026-12-31', 'VetPharma'),
('Moquillo', 'Perro', TRUE, '1ml', '6 meses', 'L5678', '2025-09-15', 'Animed');

INSERT INTO Visita (fecha, paciente) VALUES
('2025-06-01 10:30:00', 'Firulais'),
('2025-06-05 14:00:00', 'Mishi');

INSERT INTO VisitaTratamiento (visita_id, tratamiento_id, dosis, fechaSiguiente) VALUES
(1, 1, 1, '2025-06-08'),
(2, 2, 1, '2025-06-10');

INSERT INTO VisitaVacuna (visita_id, vacuna_id, dosis, fechaSiguiente) VALUES
(1, 1, 1, '2026-06-01'),
(2, 2, 1, '2025-12-05');
