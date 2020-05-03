import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum Category {
  Child = 'CHILD',
  Shop = 'SHOP',
  Home = 'HOME'
}

export type Expense = {
   __typename?: 'Expense';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  amount: Scalars['Int'];
  category?: Maybe<Category>;
};

export type ExpenseEdge = {
   __typename?: 'ExpenseEdge';
  node: Expense;
  cursor: Scalars['ID'];
};

export type PageInfo = {
   __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['ID'];
  endCursor: Scalars['ID'];
};

export type Expenses = {
   __typename?: 'Expenses';
  edges: Array<ExpenseEdge>;
  pageInfo: PageInfo;
};

export type Query = {
   __typename?: 'Query';
  expense?: Maybe<Expense>;
  expenses: Expenses;
};


export type QueryExpenseArgs = {
  id: Scalars['ID'];
};


export type QueryExpensesArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['ID']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
};

export type CreateExpenseInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  amount: Scalars['Int'];
  category: Category;
};

export type UpdateExpenseInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
};

export type CreateExpensePayload = {
   __typename?: 'CreateExpensePayload';
  expense: Expense;
};

export type UpdateExpensePayload = {
   __typename?: 'UpdateExpensePayload';
  expense: Expense;
};

export type Mutation = {
   __typename?: 'Mutation';
  createExpense: CreateExpensePayload;
  updateExpense: UpdateExpensePayload;
};


export type MutationCreateExpenseArgs = {
  input: CreateExpenseInput;
};


export type MutationUpdateExpenseArgs = {
  input: UpdateExpenseInput;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type ExpensesQueryVariables = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['ID']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
};


export type ExpensesQuery = (
  { __typename?: 'Query' }
  & { expenses: (
    { __typename?: 'Expenses' }
    & { edges: Array<(
      { __typename?: 'ExpenseEdge' }
      & { node: (
        { __typename?: 'Expense' }
        & Pick<Expense, 'id' | 'name' | 'description' | 'category' | 'amount'>
      ) }
    )>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'endCursor' | 'startCursor'>
    ) }
  ) }
);


export const ExpensesDocument = gql`
    query expenses($first: Int, $after: ID, $last: Int, $before: ID) {
  expenses(first: $first, after: $after, last: $last, before: $before) {
    edges {
      node {
        id
        name
        description
        category
        amount
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
  }
}
    `;

/**
 * __useExpensesQuery__
 *
 * To run a query within a React component, call `useExpensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useExpensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExpensesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      after: // value for 'after'
 *      last: // value for 'last'
 *      before: // value for 'before'
 *   },
 * });
 */
export function useExpensesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ExpensesQuery, ExpensesQueryVariables>) {
        return ApolloReactHooks.useQuery<ExpensesQuery, ExpensesQueryVariables>(ExpensesDocument, baseOptions);
      }
export function useExpensesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ExpensesQuery, ExpensesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ExpensesQuery, ExpensesQueryVariables>(ExpensesDocument, baseOptions);
        }
export type ExpensesQueryHookResult = ReturnType<typeof useExpensesQuery>;
export type ExpensesLazyQueryHookResult = ReturnType<typeof useExpensesLazyQuery>;
export type ExpensesQueryResult = ApolloReactCommon.QueryResult<ExpensesQuery, ExpensesQueryVariables>;

      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": []
  }
};
      export default result;
    