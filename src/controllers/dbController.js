import pool from "../config/db.js";

const dbController = {
  check: async (req, res) => {
    // Eseguire test query
    try {
      const [rows] = await pool.query("SELECT 1 AS result");
      return res.json({ ok: true, result: rows[0].result });
    } catch (err) {
      return res.status(500).json({ ok: false, error: err.message });
    }
  },
};

export default dbController;
