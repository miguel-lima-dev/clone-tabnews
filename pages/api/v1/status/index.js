import database from "../../../../infra/database.js";

async function status(request, response) {
  const res = await database.query("SELECT 1+1 as sum;");
  console.log(res);
  response.status(200).json({ chave: "brutal" });
}

export default status;
