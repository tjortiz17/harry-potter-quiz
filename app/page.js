import Image from "next/image";
import { Pool } from 'pg';
import QuizStarter from "./components/QuizStarter";

export default async function Home() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  const results = await pool.query(`
    SELECT id, question, correct_answer, options FROM triviaquestions
    ORDER BY RANDOM()
    LIMIT 10
  `);
  const questions = await results.rows;
  return (
    <div>
      <QuizStarter questions={questions} />
    </div>
  );
}
