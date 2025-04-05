import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  League: a.model({
    name: a.string().required(),
    seasons: a.hasMany('Season', 'leagueId'),
    // organizerIds: a.string().array(),
    // players: a.hasMany('Player', 'leagueId')
  }).authorization(allow => [allow.publicApiKey()]),

  Season: a.model({
    name: a.string().required(),
    startDate: a.date().required(),
    leagueId: a.id().required(),
    league: a.belongsTo('League', 'leagueId'),
    // series: a.hasMany('Series', 'seasonId'),
    // finalEvent: a.hasOne('FinalEvent', 'seasonId'),
    // organizerIds: a.string().array().required()
  }).authorization(allow => [allow.publicApiKey()]),

  // Series: a.model({
  //   name: a.string().required(),
  //   seasonId: a.id().required(),
  //   season: a.belongsTo('Season', 'seasonId'),
  //   tournaments: a.hasMany('Tournament', 'seriesId'),
  //   organizerIds: a.string().array().required()
  // }).authorization(allow => [allow.publicApiKey()]),

  // Tournament: a.model({
  //   name: a.string().required(),
  //   date: a.date().required(),
  //   seriesId: a.id().required(),
  //   series: a.belongsTo('Series', 'seriesId'),
  //   results: a.hasMany('TournamentResult', 'tournamentId'),
  //   organizerIds: a.string().array().required()
  // }).authorization(allow => [allow.publicApiKey()]),

  // Player: a.model({
  //   name: a.string().required(),
  //   leagueId: a.id().required(),
  //   league: a.belongsTo('League', 'leagueId'),
  //   results: a.hasMany('TournamentResult', 'playerId'),
  //   chipAwards: a.hasMany('ChipAward', 'playerId'),
  //   organizerIds: a.string().array().required()
  // }).authorization(allow => [allow.publicApiKey()]),

  // TournamentResult: a.model({
  //   rank: a.integer().required(),
  //   points: a.integer().required(),
  //   bounty: a.integer().required(),
  //   consolation: a.integer().required(),
  //   tournamentId: a.id().required(),
  //   tournament: a.belongsTo('Tournament', 'tournamentId'),
  //   playerId: a.id().required(),
  //   player: a.belongsTo('Player', 'playerId'),
  //   organizerIds: a.string().array().required()
  // }).authorization(allow => [allow.publicApiKey()]),

  // FinalEvent: a.model({
  //   date: a.date().required(),
  //   seasonId: a.id().required(),
  //   season: a.belongsTo('Season', 'seasonId'),
  //   qualifiedPlayerIds: a.id().array().required(),
  //   chipAwards: a.hasMany('ChipAward', 'finalEventId'),
  //   organizerIds: a.string().array().required()
  // }).authorization(allow => [allow.publicApiKey()]),

  // ChipAward: a.model({
  //   totalChips: a.integer().required(),
  //   finalEventId: a.id().required(),
  //   finalEvent: a.belongsTo('FinalEvent', 'finalEventId'),
  //   playerId: a.id().required(),
  //   player: a.belongsTo('Player', 'playerId'),
  //   organizerIds: a.string().array().required()
  // }).authorization(allow => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data: ReturnType<typeof defineData> = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
