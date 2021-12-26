const req = (city: string) => new Promise((res: (value: string) => void) => setTimeout(() => res(city + '+30'), 2000));

class WeatherApi {
    async get(city: string) {
        const result = await req(city);

        return result;
    }
}

export const weatherApi = new WeatherApi();
