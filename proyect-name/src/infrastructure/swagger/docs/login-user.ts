export const loginUser = {
  post: {
    tags: ['Auth'],
    description: 'Login User',
    operationId: 'loginUser',
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Auth',
          },
        },
      },
    },

    responses: {
      200: {
        description: 'user logged successfully',
      },
      400: {
        description: 'wrong credentials',
      },
      500: {
        description: 'An error occurred while logging in',
      },
    },
  },
};
