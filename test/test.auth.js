import chai from "chai";
const expect = chai.expect;
import supertest from "supertest";
import app from "../index.js";

describe("Authentication Routes", () => {
  it("should authenticate with Google OAuth", async () => {
    const agent = supertest.agent(app);
    await agent
      .get("/auth/google")
      .expect(302)
      .then((res) => {
        expect(res.header.location).to.include(
          "https://accounts.google.com/o/oauth2/"
        );
      });
  });
});
