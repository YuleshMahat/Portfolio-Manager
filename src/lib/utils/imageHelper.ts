export const extractImage = async (req: Request) => {
  const formData = await req.formData();

  const entries = Object.fromEntries(formData.entries());
  const file = entries.imageFile as File;
  delete entries.imageFile;

  return { file, body: entries };
};
