import { ApolloServer, gql } from "apollo-server-micro";
import { IResolvers } from "graphql-tools";

const typeDefs = gql`
  enum Category {
    CHILD
    SHOP
    HOME
  }

  type Expense {
    id: ID!
    name: String!
    description: String
    amount: Int!
    category: Category
  }

  type ExpenseEdge {
    node: Expense!
    cursor: ID!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: ID!
    endCursor: ID!
  }

  type Expenses {
    edges: [ExpenseEdge!]!
    pageInfo: PageInfo!
  }

  type Query {
    expense(id: ID!): Expense
    expenses(first: Int, after: ID, last: Int, before: ID): Expenses!
  }

  input CreateExpenseInput {
    name: String!
    description: String
    amount: Int!
    category: Category!
  }

  input UpdateExpenseInput {
    name: String
    description: String
    amount: Int
    category: Category
  }

  type CreateExpensePayload {
    expense: Expense!
  }

  type UpdateExpensePayload {
    expense: Expense!
  }

  type Mutation {
    createExpense(input: CreateExpenseInput!): CreateExpensePayload!
    updateExpense(input: UpdateExpenseInput!): UpdateExpensePayload!
  }
`;

const resolvers: IResolvers = {
  Query: {},
  Mutation: {
    updateExpense: (_, args) => {
      // @todo validation schema
      if (args.input.name === null) throw new Error("name should be specifed");
      if (args.input.amount === null)
        throw new Error("amount should be specifed");
      if (args.input.category === null)
        throw new Error("category should be specifed");
    },
  },
};

const mocks = {
  String: () => "Hello Workshop",
  Expense: () => ({
    description: null,
  }),
};

const server = new ApolloServer({
  typeDefs,
  mocks,
  mockEntireSchema: false,
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};
export default server.createHandler({ path: "/api/graphql" });
