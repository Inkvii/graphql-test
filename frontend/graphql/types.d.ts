import * as Apollo from '@apollo/client'
import {gql} from '@apollo/client'

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: any;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
};

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export type BigFloatFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['BigFloat']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['BigFloat']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['BigFloat']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['BigFloat']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['BigFloat']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['BigFloat']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['BigFloat']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['BigFloat']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['BigFloat']>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['BigFloat']>>;
};

/** All input for the create `Item` mutation. */
export type CreateItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Item` to be created by this mutation. */
  item: ItemInput;
};

/** The output of our create `Item` mutation. */
export type CreateItemPayload = {
  __typename?: 'CreateItemPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Item` that was created by this mutation. */
  item?: Maybe<Item>;
  /** An edge for our `Item`. May be used by Relay 1. */
  itemEdge?: Maybe<ItemsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Item`. */
  userByUserId?: Maybe<User>;
};


/** The output of our create `Item` mutation. */
export type CreateItemPayloadItemEdgeArgs = {
  orderBy?: Maybe<Array<ItemsOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteItemByItemId` mutation. */
export type DeleteItemByItemIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  itemId: Scalars['Int'];
};

/** All input for the `deleteItem` mutation. */
export type DeleteItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Item` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Item` mutation. */
export type DeleteItemPayload = {
  __typename?: 'DeleteItemPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedItemId?: Maybe<Scalars['ID']>;
  /** The `Item` that was deleted by this mutation. */
  item?: Maybe<Item>;
  /** An edge for our `Item`. May be used by Relay 1. */
  itemEdge?: Maybe<ItemsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Item`. */
  userByUserId?: Maybe<User>;
};


/** The output of our delete `Item` mutation. */
export type DeleteItemPayloadItemEdgeArgs = {
  orderBy?: Maybe<Array<ItemsOrderBy>>;
};

/** All input for the `deleteUserByUserId` mutation. */
export type DeleteUserByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
};

/** All input for the `deleteUser` mutation. */
export type DeleteUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUserId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['Int']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['Int']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['Int']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['Int']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['Int']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['Int']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['Int']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['Int']>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['Int']>>;
};

/** item of the user */
export type Item = Node & {
  __typename?: 'Item';
  itemId: Scalars['Int'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  price: Scalars['BigFloat'];
  /** Reads a single `User` that is related to this `Item`. */
  userByUserId?: Maybe<User>;
  userId: Scalars['Int'];
};

/** A condition to be used against `Item` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ItemCondition = {
  /** Checks for equality with the object’s `itemId` field. */
  itemId?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `price` field. */
  price?: Maybe<Scalars['BigFloat']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `Item` object types. All fields are combined with a logical ‘and.’ */
export type ItemFilter = {
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<ItemFilter>>;
  /** Filter by the object’s `itemId` field. */
  itemId?: Maybe<IntFilter>;
  /** Filter by the object’s `name` field. */
  name?: Maybe<StringFilter>;
  /** Negates the expression. */
  not?: Maybe<ItemFilter>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<ItemFilter>>;
  /** Filter by the object’s `price` field. */
  price?: Maybe<BigFloatFilter>;
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<IntFilter>;
};

/** An input for mutations affecting `Item` */
export type ItemInput = {
  itemId?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  price: Scalars['BigFloat'];
  userId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `Item`. Fields that are set will be updated. */
export type ItemPatch = {
  itemId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['BigFloat']>;
  userId?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Item` values. */
export type ItemsConnection = {
  __typename?: 'ItemsConnection';
  /** A list of edges which contains the `Item` and cursor to aid in pagination. */
  edges: Array<ItemsEdge>;
  /** A list of `Item` objects. */
  nodes: Array<Maybe<Item>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Item` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Item` edge in the connection. */
export type ItemsEdge = {
  __typename?: 'ItemsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Item` at the end of the edge. */
  node?: Maybe<Item>;
};

/** Methods to use when ordering `Item`. */
export enum ItemsOrderBy {
  ItemIdAsc = 'ITEM_ID_ASC',
  ItemIdDesc = 'ITEM_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PriceAsc = 'PRICE_ASC',
  PriceDesc = 'PRICE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Item`. */
  createItem?: Maybe<CreateItemPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a single `Item` using its globally unique id. */
  deleteItem?: Maybe<DeleteItemPayload>;
  /** Deletes a single `Item` using a unique key. */
  deleteItemByItemId?: Maybe<DeleteItemPayload>;
  /** Deletes a single `User` using its globally unique id. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByUserId?: Maybe<DeleteUserPayload>;
  /** Updates a single `Item` using its globally unique id and a patch. */
  updateItem?: Maybe<UpdateItemPayload>;
  /** Updates a single `Item` using a unique key and a patch. */
  updateItemByItemId?: Maybe<UpdateItemPayload>;
  /** Updates a single `User` using its globally unique id and a patch. */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByUserId?: Maybe<UpdateUserPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateItemArgs = {
  input: CreateItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteItemArgs = {
  input: DeleteItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteItemByItemIdArgs = {
  input: DeleteItemByItemIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByUserIdArgs = {
  input: DeleteUserByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateItemArgs = {
  input: UpdateItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateItemByItemIdArgs = {
  input: UpdateItemByItemIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByUserIdArgs = {
  input: UpdateUserByUserIdInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads and enables pagination through a set of `Item`. */
  allItems?: Maybe<ItemsConnection>;
  /** Reads and enables pagination through a set of `User`. */
  allUsers?: Maybe<UsersConnection>;
  /** Reads a single `Item` using its globally unique `ID`. */
  item?: Maybe<Item>;
  itemByItemId?: Maybe<Item>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `User` using its globally unique `ID`. */
  user?: Maybe<User>;
  userByUserId?: Maybe<User>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllItemsArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<ItemCondition>;
  filter?: Maybe<ItemFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ItemsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUsersArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<UserCondition>;
  filter?: Maybe<UserFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<UsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryItemArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryItemByItemIdArgs = {
  itemId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByUserIdArgs = {
  userId: Scalars['Int'];
};

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Not equal to the specified value, treating null like an ordinary value. */
  distinctFrom?: Maybe<Scalars['String']>;
  /** Not equal to the specified value, treating null like an ordinary value (case-insensitive). */
  distinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-sensitive). */
  endsWith?: Maybe<Scalars['String']>;
  /** Ends with the specified string (case-insensitive). */
  endsWithInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value. */
  equalTo?: Maybe<Scalars['String']>;
  /** Equal to the specified value (case-insensitive). */
  equalToInsensitive?: Maybe<Scalars['String']>;
  /** Greater than the specified value. */
  greaterThan?: Maybe<Scalars['String']>;
  /** Greater than the specified value (case-insensitive). */
  greaterThanInsensitive?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Greater than or equal to the specified value (case-insensitive). */
  greaterThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Included in the specified list. */
  in?: Maybe<Array<Scalars['String']>>;
  /** Included in the specified list (case-insensitive). */
  inInsensitive?: Maybe<Array<Scalars['String']>>;
  /** Contains the specified string (case-sensitive). */
  includes?: Maybe<Scalars['String']>;
  /** Contains the specified string (case-insensitive). */
  includesInsensitive?: Maybe<Scalars['String']>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: Maybe<Scalars['Boolean']>;
  /** Less than the specified value. */
  lessThan?: Maybe<Scalars['String']>;
  /** Less than the specified value (case-insensitive). */
  lessThanInsensitive?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: Maybe<Scalars['String']>;
  /** Less than or equal to the specified value (case-insensitive). */
  lessThanOrEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Matches the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  like?: Maybe<Scalars['String']>;
  /** Matches the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  likeInsensitive?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value. */
  notDistinctFrom?: Maybe<Scalars['String']>;
  /** Equal to the specified value, treating null like an ordinary value (case-insensitive). */
  notDistinctFromInsensitive?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-sensitive). */
  notEndsWith?: Maybe<Scalars['String']>;
  /** Does not end with the specified string (case-insensitive). */
  notEndsWithInsensitive?: Maybe<Scalars['String']>;
  /** Not equal to the specified value. */
  notEqualTo?: Maybe<Scalars['String']>;
  /** Not equal to the specified value (case-insensitive). */
  notEqualToInsensitive?: Maybe<Scalars['String']>;
  /** Not included in the specified list. */
  notIn?: Maybe<Array<Scalars['String']>>;
  /** Not included in the specified list (case-insensitive). */
  notInInsensitive?: Maybe<Array<Scalars['String']>>;
  /** Does not contain the specified string (case-sensitive). */
  notIncludes?: Maybe<Scalars['String']>;
  /** Does not contain the specified string (case-insensitive). */
  notIncludesInsensitive?: Maybe<Scalars['String']>;
  /** Does not match the specified pattern (case-sensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLike?: Maybe<Scalars['String']>;
  /** Does not match the specified pattern (case-insensitive). An underscore (_) matches any single character; a percent sign (%) matches any sequence of zero or more characters. */
  notLikeInsensitive?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-sensitive). */
  notStartsWith?: Maybe<Scalars['String']>;
  /** Does not start with the specified string (case-insensitive). */
  notStartsWithInsensitive?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-sensitive). */
  startsWith?: Maybe<Scalars['String']>;
  /** Starts with the specified string (case-insensitive). */
  startsWithInsensitive?: Maybe<Scalars['String']>;
};

/** All input for the `updateItemByItemId` mutation. */
export type UpdateItemByItemIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  itemId: Scalars['Int'];
  /** An object where the defined keys will be set on the `Item` being updated. */
  itemPatch: ItemPatch;
};

/** All input for the `updateItem` mutation. */
export type UpdateItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Item` being updated. */
  itemPatch: ItemPatch;
  /** The globally unique `ID` which will identify a single `Item` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Item` mutation. */
export type UpdateItemPayload = {
  __typename?: 'UpdateItemPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Item` that was updated by this mutation. */
  item?: Maybe<Item>;
  /** An edge for our `Item`. May be used by Relay 1. */
  itemEdge?: Maybe<ItemsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `Item`. */
  userByUserId?: Maybe<User>;
};


/** The output of our update `Item` mutation. */
export type UpdateItemPayloadItemEdgeArgs = {
  orderBy?: Maybe<Array<ItemsOrderBy>>;
};

/** All input for the `updateUserByUserId` mutation. */
export type UpdateUserByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** All input for the `updateUser` mutation. */
export type UpdateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `User` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  userPatch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>;
};

export type User = Node & {
  __typename?: 'User';
  age?: Maybe<Scalars['Int']>;
  firstName: Scalars['String'];
  /** Reads and enables pagination through a set of `Item`. */
  itemsByUserId: ItemsConnection;
  lastName: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  userId: Scalars['Int'];
};


export type UserItemsByUserIdArgs = {
  after?: Maybe<Scalars['Cursor']>;
  before?: Maybe<Scalars['Cursor']>;
  condition?: Maybe<ItemCondition>;
  filter?: Maybe<ItemFilter>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<ItemsOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `age` field. */
  age?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: Maybe<Scalars['Int']>;
};

/** A filter to be used against `User` object types. All fields are combined with a logical ‘and.’ */
export type UserFilter = {
  /** Filter by the object’s `age` field. */
  age?: Maybe<IntFilter>;
  /** Checks for all expressions in this list. */
  and?: Maybe<Array<UserFilter>>;
  /** Filter by the object’s `firstName` field. */
  firstName?: Maybe<StringFilter>;
  /** Filter by the object’s `lastName` field. */
  lastName?: Maybe<StringFilter>;
  /** Negates the expression. */
  not?: Maybe<UserFilter>;
  /** Checks for any expressions in this list. */
  or?: Maybe<Array<UserFilter>>;
  /** Filter by the object’s `userId` field. */
  userId?: Maybe<IntFilter>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  age?: Maybe<Scalars['Int']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  userId?: Maybe<Scalars['Int']>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  age?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<Maybe<User>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node?: Maybe<User>;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  AgeAsc = 'AGE_ASC',
  AgeDesc = 'AGE_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { __typename?: 'Query', allUsers?: { __typename?: 'UsersConnection', nodes: Array<{ __typename?: 'User', firstName: string, age?: number | null | undefined } | null | undefined> } | null | undefined };


export const Document = gql`
  {
    allUsers {
      nodes {
        firstName
        age
      }
    }
  }
`

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuery(baseOptions?: Apollo.QueryHookOptions<Query, QueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<Query, QueryVariables>(Document, options)
}

export function useLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Query, QueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<Query, QueryVariables>(Document, options)
}

export type QueryHookResult = ReturnType<typeof useQuery>;
export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>;
export type QueryResult = Apollo.QueryResult<Query, QueryVariables>;
