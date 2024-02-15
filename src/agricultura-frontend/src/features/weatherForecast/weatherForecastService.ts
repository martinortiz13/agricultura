import { RestService } from './../../services/restService';
import { Summary } from './index';

export default class WeatherForecastService extends RestService<Summary> {
    public constructor(baseUrl: string, baseRoute: string) {
        super(baseUrl, baseRoute);
    }
}