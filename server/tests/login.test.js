const request = require("supertest");
const app = require("../server");

describe("Pruebas de login", () => {
  it("Login válido devuelve token", async () => {
    const res = await request(app)
      .post("/api/login")
      .send({ email: "prueba@email.com", password: "1234" });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it("Login inválido devuelve 401", async () => {
    const res = await request(app)
      .post("/api/login")
      .send({ email: "noexiste@email.com", password: "1234" });

    expect(res.statusCode).toBe(401);
  });
});
