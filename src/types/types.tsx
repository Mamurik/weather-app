export interface weather {
  weather: [
    {
      id: number;
      description: string;
    }
  ];
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  clouds: {
    all: number;
  };
  sys: {
    country: string;
  };
  name: string;
}
