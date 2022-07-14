interface IConfig {
  client: {
    server: {};
    endpoint: {
      getPokemons: {
        method: string;
        uri: {
          pathname: string;
        };
      };
    };
  };
}

export const config: IConfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
    },
  },
};

export default config;
