/** @type {import('@graphql-codegen/cli').CodegenConfig} */
module.exports = {
  overwrite: true,
  generates: {
    './src/gql/': {
      schema: ['./src/schema.graphql'],
      preset: 'client',
      config: {
        documentMode: 'string',
      },
      documents: ['./src/operations.ts'],
    },
  },
};
