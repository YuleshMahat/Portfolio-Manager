export async function parseJSON(req) {
  try {
    return await req.json();
  } catch (err) {
    return {};
  }
}
