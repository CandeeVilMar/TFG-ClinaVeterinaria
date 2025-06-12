const jwt = require('jsonwebtoken');
const SECRET = 'tu_clave_secreta';

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Suponiendo que usas MySQL
  const [rows] = await db.execute('SELECT * FROM usuarios WHERE email = ?', [email]);

  if (rows.length === 0 || rows[0].password !== password) {
    return res.status(401).json({ message: 'Credenciales incorrectas' });
  }

  const user = rows[0];

  const token = jwt.sign({ id: user.id, rol: user.rol }, SECRET, { expiresIn: '2h' });

  res.json({ token, rol: user.rol });
};
