import { db } from "../db.js";

export const createAccountService = async (user_id, account_number, balance) => {
  const response = await db.query(
    `INSERT INTO account (number, userid, balance) VALUES ($1, $2, $3) RETURNING *`,
    [account_number, user_id, balance],
  );
  return response.rows[0];
};
