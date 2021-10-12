import { IncomingMessage, ServerResponse } from "http";
// import enablePublicAccess from "@cors";
import DB from "@database";

const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
  //await enablePublicAccess(request, response);

  const db = new DB();
  const allEntries = await db.getAll();
  const length = allEntries.length;

  response.statusCode = 200;
  response.setHeader("Content-type", "application/json");
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET");
  response.end(JSON.stringify({ length, data: allEntries }));
};

export default allAvos;
