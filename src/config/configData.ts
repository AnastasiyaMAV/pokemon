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
      getOnePokemon: {
        method: string;
        uri: {
          pathname: string;
        };
      };
    };
  };
}

export const configData: IConfig = {
  client: {
    server: {
      protocol: 'https',
      host: 'pokeapi.co',
    },
    endpoint: {
      getPokemons: {
        method: 'GET',
        uri: {
          pathname: '/api/v2/pokemon',
        },
      },
      getOnePokemon: {
        method: 'GET',
        uri: {
          pathname: '/api/v2/pokemon/',
        },
      },
    },
  },
};

export default configData;

// export const configData: IConfig = {
//   client: {
//     server: {
//       protocol: 'http',
//       host: 'zar.hosthot.ru',
//     },
//     endpoint: {
//       getPokemons: {
//         method: 'GET',
//         uri: {
//           pathname: '/api/v1/pokemons',
//         },
//       },
//       getOnePokemon: {
//         method: 'GET',
//         uri: {
//           pathname: '/api/v1/pokemon/',
//         },
//       },
//     },
//   },
// };

// export default configData;
