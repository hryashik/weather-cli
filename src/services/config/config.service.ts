import fs from 'fs'
import { join } from 'path'
import { homedir } from 'os'

const filePath = join(homedir(), 'weather-app.config.json')

interface ISettings {
   token: string | undefined
   city: string | undefined
}

// Singleton
class ConfigService {
   private readonly filePath: string = filePath
   private settings: ISettings = {
      token: undefined,
      city: undefined
   }
   private isExist: boolean = false
   /*private static instance: ConfigService*/
   constructor() {
      /*if (ConfigService.instance) {
         return ConfigService.instance
      }*/
      console.log('Создается инстанс')
      this.start()
      /*ConfigService.instance = this*/
   }

   // check for existing
   // if config is existed -> reading data
   private readFile(): boolean {
      try {
         this.settings = JSON.parse(fs.readFileSync(this.filePath, {encoding: "utf-8"})) as ISettings
         this.isExist = true
         return true
      } catch (e) {
         return false
      }
   }

   // create config
   // add data to object
   private create() {
      try {
         if (!this.isExist) {
            const data = {token: '', city: ''}
            fs.writeFileSync(filePath, JSON.stringify(data), {encoding: "utf-8"})
            this.isExist = true
            this.settings = data
         }
      } catch (e: any) {
         throw new Error('Создать конфиг не удалось')
      }

   }

   // start function
   // decides to create config or not
   private start() {
      this.readFile()
      if (!this.isExist) {
         this.create()
      }
   }

   // update config
   public update(key: 'token' | 'city', value: string) {
      if (!this.isExist) {
         throw new Error('Конфига не существует')
      }
      try {
         const data = {...this.settings}
         data[key] = value
         fs.writeFileSync(filePath, JSON.stringify(data), {encoding: "utf-8"})
         this.settings = data
      } catch (e) {
         throw new Error('Обновить конфиг не удалось')
      }
   }

   public getSettings() {
      return this.settings
   }
}

const configService = new ConfigService()

export default configService