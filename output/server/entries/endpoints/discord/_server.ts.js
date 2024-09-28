import { e as error } from "../../../chunks/index.js";
async function GET() {
  throw error(405, "My dude, you can't do that here.");
}
export {
  GET
};
