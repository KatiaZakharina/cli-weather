import { readFile, stat, writeFile } from 'fs/promises';
import { homedir } from 'os';
import { join } from 'path';
class StorageService {
  configPath = join(homedir(), 'weather-data.json');

  async saveKeyValue(key, value) {
    let data = {};
    if (await this.isExist(this.configPath)) {
      const file = await readFile(this.configPath);
      data = JSON.parse(file);
    }
    data[key] = value;
    await writeFile(this.configPath, JSON.stringify(data));
  }

  async getKeyValue (key){
    if (await this.isExist(this.configPath)) {
      const file = await readFile(this.configPath);
      data = JSON.parse(file);
      return data[key];
    }
  };

  isExist = async (path) => {
    try {
      await stat(path);
      return true;
    } catch (error) {
      return false;
    }
  };
}
export default new StorageService();
