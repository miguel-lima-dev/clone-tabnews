test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch(
    "https://fluffy-garbanzo-97r59j744gv62xr6r-3000.app.github.dev/api/v1/status",
  );
  expect(response.status).toBe(200);
});
