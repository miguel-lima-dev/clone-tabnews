import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();

  const databaseVersion = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersion.rows[0].server_version;

  const databaseMaxConnection = await database.query("SHOW max_connections;");
  const databaseMaxConnectionValue =
    databaseMaxConnection.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpened = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  //"SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'local_db';"
  const databaseOpenedValue = databaseOpened.rows[0].count;

  response.status(200).json({
    update_At: updateAt,

    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionValue),
        opened_connections: databaseOpenedValue,
      },
    },
  });
}
export default status;
