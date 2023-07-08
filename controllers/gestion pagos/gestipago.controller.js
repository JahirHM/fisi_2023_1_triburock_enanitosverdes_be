import { pool } from "../../db.js"

export const getRealizarPagos = async (req, res) => { 
  const { id_usuario } = req.params;
  try{
    const [rows] = await pool.query('SELECT * FROM pagos ?;', [id_usuario])
    if (rows.length > 0) return res.status(404).json({ 
      message: 'No se encontraron pagos'
    })
    res.send(rows[0])
  }catch (error) {
    res.status(500).send(error);
  }
}

export const getRealizarPago = async (req, res) => { 
  const { id_usuario, id_pago } = req.params;
  try{
    const [rows] = await pool.query('SELECT * FROM pagos ? ?;', [id_usuario, id_pago])
    if (rows.length > 0) return res.status(404).json({ 
      message: 'No se encontro pago'
    })
    res.send(rows[0])
  }catch (error) {
    res.status(500).send(error);
  }
}