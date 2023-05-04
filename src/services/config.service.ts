import fs, { promises } from 'fs'
import { join } from 'path'
import { homedir } from 'os'

const filePath = join(homedir(), 'weather-app.config.json')

type dataType = {
   token: string
   city: string
}

class ConfigService {
   filePath: string
   data: any | undefined = undefined
   private isExist: boolean = false

   constructor() {
      this.filePath = filePath
      this.start()
   }

   // check for existing
   // if config is exist -> reading data
   private readFile(): boolean {
      try {
         this.data = JSON.parse(fs.readFileSync(this.filePath, {encoding: "utf-8"}))
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
            this.data = data
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
         const data = {...this.data}
         data[key] = value
         fs.writeFileSync(filePath, JSON.stringify(data), {encoding: "utf-8"})
         this.data = data
      } catch (e) {
         throw new Error('Обновить конфиг не удалось')
      }
   }
}

const configService = new ConfigService()

export default configService