export const createUser = {
  post: {
    tags: ['User'],
    description: 'Create User',
    operationId: 'createUser',
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/User',
          },
        },
      },
    },

    responses: {
      201: {
        description: 'user created successfully',
      },
      400: {
        description:
          'The email jhon.doe@gmail.com is already registered in the database',
      },
      500: {
        description: 'Server error',
      },
    },
  },
};
