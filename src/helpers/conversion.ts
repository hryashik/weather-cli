import { ResponseEntity } from "../entities/response.entity";
import { PrintWeatherData } from "../services/log/log.service";

export function conversion(responseDto: ResponseEntity): PrintWeatherData {
   return {
      country: responseDto.location.country,
      city: responseDto.location.name,
      temp: responseDto.current.temp_c,
      feelsLike: responseDto.current.feelslike_c,
      condition: responseDto.current.condition.text,
      icon: responseDto.current.condition.icon,
      wind: responseDto.current.wind_kph
   }
}