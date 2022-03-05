export const schemas = {
  components: {
    securitySchemes: {
      jwt: {
        type: 'apiKey',
        in: 'header',
        name: 'auth-token',
      },
    },
    schemas: {
      Auth: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'User Name',
            example: 'jhon.doe@gmail.com',
          },
          password: {
            type: 'string',
            description: 'User password',
            example: '123456',
          },
        },
      },
      User: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'User Name',
            example: 'Jhon Doe',
          },
          email: {
            type: 'string',
            description: 'User email',
            example: 'jhon.doe@gmail.com',
          },
          password: {
            type: 'string',
            description: 'User password',
            example: '123456',
          },
        },
      },
    },
  },
};
