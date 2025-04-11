import path from "path";
import fs from "fs";

export const uploadFile = async (file: File): Promise<string | null> => {
  try {
    if (!file) {
      return null;
    }

    const saveDir = path.resolve("uploads");

    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(saveDir, fileName);

    if (!fs.existsSync(saveDir)) {
      fs.mkdirSync(saveDir, { recursive: true });
    }

    const fileBuffer: Buffer = Buffer.from(await file.arrayBuffer());

    fs.writeFileSync(filePath, fileBuffer);

    const fileUrl = `/uploads/${file.name}`;

    return fileUrl;
  } catch (error) {
    console.error(error);
    return null;
  }
};
