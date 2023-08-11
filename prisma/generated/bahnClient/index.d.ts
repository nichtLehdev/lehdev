
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model stopMetaData
 * 
 */
export type stopMetaData = $Result.DefaultSelection<Prisma.$stopMetaDataPayload>
/**
 * Model stopJourneyData
 * 
 */
export type stopJourneyData = $Result.DefaultSelection<Prisma.$stopJourneyDataPayload>
/**
 * Model stopStopData
 * 
 */
export type stopStopData = $Result.DefaultSelection<Prisma.$stopStopDataPayload>
/**
 * Model statisticData
 * 
 */
export type statisticData = $Result.DefaultSelection<Prisma.$statisticDataPayload>
/**
 * Model station
 * 
 */
export type station = $Result.DefaultSelection<Prisma.$stationPayload>
/**
 * Model statistic
 * 
 */
export type statistic = $Result.DefaultSelection<Prisma.$statisticPayload>
/**
 * Model stop
 * 
 */
export type stop = $Result.DefaultSelection<Prisma.$stopPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const trainType: {
  UNKNOWN: 'UNKNOWN',
  AG: 'AG',
  AKN: 'AKN',
  ALX: 'ALX',
  AS: 'AS',
  AZS: 'AZS',
  BE: 'BE',
  BRB: 'BRB',
  BUS: 'BUS',
  BZB: 'BZB',
  CB: 'CB',
  CLR: 'CLR',
  D: 'D',
  DAB: 'DAB',
  DWE: 'DWE',
  EC: 'EC',
  ECE: 'ECE',
  EN: 'EN',
  ENO: 'ENO',
  ERX: 'ERX',
  ES: 'ES',
  EVB: 'EVB',
  EX: 'EX',
  FEX: 'FEX',
  FLX: 'FLX',
  HLB: 'HLB',
  HSB: 'HSB',
  IC: 'IC',
  ICE: 'ICE',
  IR: 'IR',
  IRE: 'IRE',
  KD: 'KD',
  MBB: 'MBB',
  ME: 'ME',
  MEX: 'MEX',
  N: 'N',
  NBE: 'NBE',
  NEG: 'NEG',
  NJ: 'NJ',
  NWB: 'NWB',
  OPB: 'OPB',
  OS: 'OS',
  P: 'P',
  PRE: 'PRE',
  R: 'R',
  RB: 'RB',
  RE: 'RE',
  REX: 'REX',
  RJ: 'RJ',
  RJX: 'RJX',
  RRB: 'RRB',
  RT: 'RT',
  RTB: 'RTB',
  S: 'S',
  SAB: 'SAB',
  SBB: 'SBB',
  SDG: 'SDG',
  SOE: 'SOE',
  STB: 'STB',
  STN: 'STN',
  SWE: 'SWE',
  TGV: 'TGV',
  THA: 'THA',
  TL: 'TL',
  TLX: 'TLX',
  TRI: 'TRI',
  UEX: 'UEX',
  VBG: 'VBG',
  VEN: 'VEN',
  VIA: 'VIA',
  WB: 'WB',
  WBA: 'WBA',
  WEG: 'WEG',
  WFB: 'WFB'
};

export type trainType = (typeof trainType)[keyof typeof trainType]


export const trainFlag: {
  F: 'F',
  N: 'N',
  D: 'D',
  S: 'S',
  UNKNOWN: 'UNKNOWN'
};

export type trainFlag = (typeof trainFlag)[keyof typeof trainFlag]

}

export type trainType = $Enums.trainType

export const trainType: typeof $Enums.trainType

export type trainFlag = $Enums.trainFlag

export const trainFlag: typeof $Enums.trainFlag

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Stations
 * const stations = await prisma.station.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Stations
   * const stations = await prisma.station.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.station`: Exposes CRUD operations for the **station** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stations
    * const stations = await prisma.station.findMany()
    * ```
    */
  get station(): Prisma.stationDelegate<ExtArgs>;

  /**
   * `prisma.statistic`: Exposes CRUD operations for the **statistic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statistics
    * const statistics = await prisma.statistic.findMany()
    * ```
    */
  get statistic(): Prisma.statisticDelegate<ExtArgs>;

  /**
   * `prisma.stop`: Exposes CRUD operations for the **stop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stops
    * const stops = await prisma.stop.findMany()
    * ```
    */
  get stop(): Prisma.stopDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.1.1
   * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    station: 'station',
    statistic: 'statistic',
    stop: 'stop'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'station' | 'statistic' | 'stop'
      txIsolationLevel: never
    },
    model: {
      station: {
        payload: Prisma.$stationPayload<ExtArgs>
        fields: Prisma.stationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stationPayload>
          }
          findFirst: {
            args: Prisma.stationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stationPayload>
          }
          findMany: {
            args: Prisma.stationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stationPayload>[]
          }
          create: {
            args: Prisma.stationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stationPayload>
          }
          createMany: {
            args: Prisma.stationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.stationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stationPayload>
          }
          update: {
            args: Prisma.stationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stationPayload>
          }
          deleteMany: {
            args: Prisma.stationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.stationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.stationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stationPayload>
          }
          aggregate: {
            args: Prisma.StationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStation>
          }
          groupBy: {
            args: Prisma.stationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.stationFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.stationAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.stationCountArgs<ExtArgs>,
            result: $Utils.Optional<StationCountAggregateOutputType> | number
          }
        }
      }
      statistic: {
        payload: Prisma.$statisticPayload<ExtArgs>
        fields: Prisma.statisticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.statisticFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statisticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.statisticFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statisticPayload>
          }
          findFirst: {
            args: Prisma.statisticFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statisticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.statisticFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statisticPayload>
          }
          findMany: {
            args: Prisma.statisticFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statisticPayload>[]
          }
          create: {
            args: Prisma.statisticCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statisticPayload>
          }
          createMany: {
            args: Prisma.statisticCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.statisticDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statisticPayload>
          }
          update: {
            args: Prisma.statisticUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statisticPayload>
          }
          deleteMany: {
            args: Prisma.statisticDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.statisticUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.statisticUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statisticPayload>
          }
          aggregate: {
            args: Prisma.StatisticAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStatistic>
          }
          groupBy: {
            args: Prisma.statisticGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StatisticGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.statisticFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.statisticAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.statisticCountArgs<ExtArgs>,
            result: $Utils.Optional<StatisticCountAggregateOutputType> | number
          }
        }
      }
      stop: {
        payload: Prisma.$stopPayload<ExtArgs>
        fields: Prisma.stopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stopFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stopFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stopPayload>
          }
          findFirst: {
            args: Prisma.stopFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stopFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stopPayload>
          }
          findMany: {
            args: Prisma.stopFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stopPayload>[]
          }
          create: {
            args: Prisma.stopCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stopPayload>
          }
          createMany: {
            args: Prisma.stopCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.stopDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stopPayload>
          }
          update: {
            args: Prisma.stopUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stopPayload>
          }
          deleteMany: {
            args: Prisma.stopDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.stopUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.stopUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$stopPayload>
          }
          aggregate: {
            args: Prisma.StopAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStop>
          }
          groupBy: {
            args: Prisma.stopGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StopGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.stopFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.stopAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.stopCountArgs<ExtArgs>,
            result: $Utils.Optional<StopCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StationCountOutputType
   */

  export type StationCountOutputType = {
    statistic: number
  }

  export type StationCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    statistic?: boolean | StationCountOutputTypeCountStatisticArgs
  }

  // Custom InputTypes

  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StationCountOutputType
     */
    select?: StationCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StationCountOutputType without action
   */
  export type StationCountOutputTypeCountStatisticArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: statisticWhereInput
  }



  /**
   * Models
   */

  /**
   * Model stopMetaData
   */





  export type stopMetaDataSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ds100?: boolean
    name?: boolean
    eva?: boolean
    date?: boolean
  }, ExtArgs["result"]["stopMetaData"]>

  export type stopMetaDataSelectScalar = {
    ds100?: boolean
    name?: boolean
    eva?: boolean
    date?: boolean
  }


  export type $stopMetaDataPayload = {
    name: "stopMetaData"
    objects: {}
    scalars: {
      ds100: string
      name: string
      eva: number
      date: Date
    }
    composites: {}
  }


  type stopMetaDataGetPayload<S extends boolean | null | undefined | stopMetaDataDefaultArgs> = $Result.GetResult<Prisma.$stopMetaDataPayload, S>





  /**
   * Fields of the stopMetaData model
   */ 
  interface stopMetaDataFieldRefs {
    readonly ds100: FieldRef<"stopMetaData", 'String'>
    readonly name: FieldRef<"stopMetaData", 'String'>
    readonly eva: FieldRef<"stopMetaData", 'Int'>
    readonly date: FieldRef<"stopMetaData", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * stopMetaData without action
   */
  export type stopMetaDataDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stopMetaData
     */
    select?: stopMetaDataSelect<ExtArgs> | null
  }



  /**
   * Model stopJourneyData
   */





  export type stopJourneyDataSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type?: boolean
    no?: boolean
    line?: boolean
    flag?: boolean
    origin?: boolean
    destination?: boolean
  }, ExtArgs["result"]["stopJourneyData"]>

  export type stopJourneyDataSelectScalar = {
    type?: boolean
    no?: boolean
    line?: boolean
    flag?: boolean
    origin?: boolean
    destination?: boolean
  }


  export type $stopJourneyDataPayload = {
    name: "stopJourneyData"
    objects: {}
    scalars: {
      type: $Enums.trainType
      no: number
      line: number
      flag: $Enums.trainFlag
      origin: string
      destination: string
    }
    composites: {}
  }


  type stopJourneyDataGetPayload<S extends boolean | null | undefined | stopJourneyDataDefaultArgs> = $Result.GetResult<Prisma.$stopJourneyDataPayload, S>





  /**
   * Fields of the stopJourneyData model
   */ 
  interface stopJourneyDataFieldRefs {
    readonly type: FieldRef<"stopJourneyData", 'trainType'>
    readonly no: FieldRef<"stopJourneyData", 'Int'>
    readonly line: FieldRef<"stopJourneyData", 'Int'>
    readonly flag: FieldRef<"stopJourneyData", 'trainFlag'>
    readonly origin: FieldRef<"stopJourneyData", 'String'>
    readonly destination: FieldRef<"stopJourneyData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * stopJourneyData without action
   */
  export type stopJourneyDataDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stopJourneyData
     */
    select?: stopJourneyDataSelect<ExtArgs> | null
  }



  /**
   * Model stopStopData
   */





  export type stopStopDataSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    prev_station?: boolean
    next_station?: boolean
    arrival?: boolean
    departure?: boolean
    platform?: boolean
  }, ExtArgs["result"]["stopStopData"]>

  export type stopStopDataSelectScalar = {
    prev_station?: boolean
    next_station?: boolean
    arrival?: boolean
    departure?: boolean
    platform?: boolean
  }


  export type $stopStopDataPayload = {
    name: "stopStopData"
    objects: {}
    scalars: {
      prev_station: string
      next_station: string
      arrival: Date
      departure: Date
      platform: string
    }
    composites: {}
  }


  type stopStopDataGetPayload<S extends boolean | null | undefined | stopStopDataDefaultArgs> = $Result.GetResult<Prisma.$stopStopDataPayload, S>





  /**
   * Fields of the stopStopData model
   */ 
  interface stopStopDataFieldRefs {
    readonly prev_station: FieldRef<"stopStopData", 'String'>
    readonly next_station: FieldRef<"stopStopData", 'String'>
    readonly arrival: FieldRef<"stopStopData", 'DateTime'>
    readonly departure: FieldRef<"stopStopData", 'DateTime'>
    readonly platform: FieldRef<"stopStopData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * stopStopData without action
   */
  export type stopStopDataDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stopStopData
     */
    select?: stopStopDataSelect<ExtArgs> | null
  }



  /**
   * Model statisticData
   */





  export type statisticDataSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    date?: boolean
    hour?: boolean
    count?: boolean
  }, ExtArgs["result"]["statisticData"]>

  export type statisticDataSelectScalar = {
    date?: boolean
    hour?: boolean
    count?: boolean
  }


  export type $statisticDataPayload = {
    name: "statisticData"
    objects: {}
    scalars: {
      date: string
      hour: string
      count: number
    }
    composites: {}
  }


  type statisticDataGetPayload<S extends boolean | null | undefined | statisticDataDefaultArgs> = $Result.GetResult<Prisma.$statisticDataPayload, S>





  /**
   * Fields of the statisticData model
   */ 
  interface statisticDataFieldRefs {
    readonly date: FieldRef<"statisticData", 'String'>
    readonly hour: FieldRef<"statisticData", 'String'>
    readonly count: FieldRef<"statisticData", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * statisticData without action
   */
  export type statisticDataDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statisticData
     */
    select?: statisticDataSelect<ExtArgs> | null
  }



  /**
   * Model station
   */

  export type AggregateStation = {
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  export type StationAvgAggregateOutputType = {
    eva: number | null
  }

  export type StationSumAggregateOutputType = {
    eva: number | null
  }

  export type StationMinAggregateOutputType = {
    id: string | null
    name: string | null
    eva: number | null
    ds100: string | null
    db: boolean | null
    creationts: Date | null
    fetchData: boolean | null
  }

  export type StationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    eva: number | null
    ds100: string | null
    db: boolean | null
    creationts: Date | null
    fetchData: boolean | null
  }

  export type StationCountAggregateOutputType = {
    id: number
    name: number
    eva: number
    ds100: number
    db: number
    creationts: number
    fetchData: number
    _all: number
  }


  export type StationAvgAggregateInputType = {
    eva?: true
  }

  export type StationSumAggregateInputType = {
    eva?: true
  }

  export type StationMinAggregateInputType = {
    id?: true
    name?: true
    eva?: true
    ds100?: true
    db?: true
    creationts?: true
    fetchData?: true
  }

  export type StationMaxAggregateInputType = {
    id?: true
    name?: true
    eva?: true
    ds100?: true
    db?: true
    creationts?: true
    fetchData?: true
  }

  export type StationCountAggregateInputType = {
    id?: true
    name?: true
    eva?: true
    ds100?: true
    db?: true
    creationts?: true
    fetchData?: true
    _all?: true
  }

  export type StationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which station to aggregate.
     */
    where?: stationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stations to fetch.
     */
    orderBy?: stationOrderByWithRelationInput | stationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stations
    **/
    _count?: true | StationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StationMaxAggregateInputType
  }

  export type GetStationAggregateType<T extends StationAggregateArgs> = {
        [P in keyof T & keyof AggregateStation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStation[P]>
      : GetScalarType<T[P], AggregateStation[P]>
  }




  export type stationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: stationWhereInput
    orderBy?: stationOrderByWithAggregationInput | stationOrderByWithAggregationInput[]
    by: StationScalarFieldEnum[] | StationScalarFieldEnum
    having?: stationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StationCountAggregateInputType | true
    _avg?: StationAvgAggregateInputType
    _sum?: StationSumAggregateInputType
    _min?: StationMinAggregateInputType
    _max?: StationMaxAggregateInputType
  }

  export type StationGroupByOutputType = {
    id: string
    name: string
    eva: number
    ds100: string
    db: boolean
    creationts: Date
    fetchData: boolean
    _count: StationCountAggregateOutputType | null
    _avg: StationAvgAggregateOutputType | null
    _sum: StationSumAggregateOutputType | null
    _min: StationMinAggregateOutputType | null
    _max: StationMaxAggregateOutputType | null
  }

  type GetStationGroupByPayload<T extends stationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StationGroupByOutputType[P]>
            : GetScalarType<T[P], StationGroupByOutputType[P]>
        }
      >
    >


  export type stationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    eva?: boolean
    ds100?: boolean
    db?: boolean
    creationts?: boolean
    fetchData?: boolean
    statistic?: boolean | station$statisticArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["station"]>

  export type stationSelectScalar = {
    id?: boolean
    name?: boolean
    eva?: boolean
    ds100?: boolean
    db?: boolean
    creationts?: boolean
    fetchData?: boolean
  }

  export type stationInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    statistic?: boolean | station$statisticArgs<ExtArgs>
    _count?: boolean | StationCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $stationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "station"
    objects: {
      statistic: Prisma.$statisticPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      eva: number
      ds100: string
      db: boolean
      creationts: Date
      fetchData: boolean
    }, ExtArgs["result"]["station"]>
    composites: {}
  }


  type stationGetPayload<S extends boolean | null | undefined | stationDefaultArgs> = $Result.GetResult<Prisma.$stationPayload, S>

  type stationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<stationFindManyArgs, 'select' | 'include'> & {
      select?: StationCountAggregateInputType | true
    }

  export interface stationDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['station'], meta: { name: 'station' } }
    /**
     * Find zero or one Station that matches the filter.
     * @param {stationFindUniqueArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends stationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, stationFindUniqueArgs<ExtArgs>>
    ): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Station that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {stationFindUniqueOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends stationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, stationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Station that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stationFindFirstArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends stationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, stationFindFirstArgs<ExtArgs>>
    ): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Station that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stationFindFirstOrThrowArgs} args - Arguments to find a Station
     * @example
     * // Get one Station
     * const station = await prisma.station.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends stationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, stationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stations
     * const stations = await prisma.station.findMany()
     * 
     * // Get first 10 Stations
     * const stations = await prisma.station.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stationWithIdOnly = await prisma.station.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends stationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Station.
     * @param {stationCreateArgs} args - Arguments to create a Station.
     * @example
     * // Create one Station
     * const Station = await prisma.station.create({
     *   data: {
     *     // ... data to create a Station
     *   }
     * })
     * 
    **/
    create<T extends stationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, stationCreateArgs<ExtArgs>>
    ): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stations.
     *     @param {stationCreateManyArgs} args - Arguments to create many Stations.
     *     @example
     *     // Create many Stations
     *     const station = await prisma.station.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends stationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Station.
     * @param {stationDeleteArgs} args - Arguments to delete one Station.
     * @example
     * // Delete one Station
     * const Station = await prisma.station.delete({
     *   where: {
     *     // ... filter to delete one Station
     *   }
     * })
     * 
    **/
    delete<T extends stationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, stationDeleteArgs<ExtArgs>>
    ): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Station.
     * @param {stationUpdateArgs} args - Arguments to update one Station.
     * @example
     * // Update one Station
     * const station = await prisma.station.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends stationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, stationUpdateArgs<ExtArgs>>
    ): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stations.
     * @param {stationDeleteManyArgs} args - Arguments to filter Stations to delete.
     * @example
     * // Delete a few Stations
     * const { count } = await prisma.station.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends stationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stations
     * const station = await prisma.station.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends stationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, stationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Station.
     * @param {stationUpsertArgs} args - Arguments to update or create a Station.
     * @example
     * // Update or create a Station
     * const station = await prisma.station.upsert({
     *   create: {
     *     // ... data to create a Station
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Station we want to update
     *   }
     * })
    **/
    upsert<T extends stationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, stationUpsertArgs<ExtArgs>>
    ): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Stations that matches the filter.
     * @param {stationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const station = await prisma.station.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: stationFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Station.
     * @param {stationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const station = await prisma.station.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: stationAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Stations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stationCountArgs} args - Arguments to filter Stations to count.
     * @example
     * // Count the number of Stations
     * const count = await prisma.station.count({
     *   where: {
     *     // ... the filter for the Stations we want to count
     *   }
     * })
    **/
    count<T extends stationCountArgs>(
      args?: Subset<T, stationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StationAggregateArgs>(args: Subset<T, StationAggregateArgs>): Prisma.PrismaPromise<GetStationAggregateType<T>>

    /**
     * Group by Station.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stationGroupByArgs['orderBy'] }
        : { orderBy?: stationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the station model
   */
  readonly fields: stationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for station.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    statistic<T extends station$statisticArgs<ExtArgs> = {}>(args?: Subset<T, station$statisticArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statisticPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the station model
   */ 
  interface stationFieldRefs {
    readonly id: FieldRef<"station", 'String'>
    readonly name: FieldRef<"station", 'String'>
    readonly eva: FieldRef<"station", 'Int'>
    readonly ds100: FieldRef<"station", 'String'>
    readonly db: FieldRef<"station", 'Boolean'>
    readonly creationts: FieldRef<"station", 'DateTime'>
    readonly fetchData: FieldRef<"station", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * station findUnique
   */
  export type stationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * Filter, which station to fetch.
     */
    where: stationWhereUniqueInput
  }


  /**
   * station findUniqueOrThrow
   */
  export type stationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * Filter, which station to fetch.
     */
    where: stationWhereUniqueInput
  }


  /**
   * station findFirst
   */
  export type stationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * Filter, which station to fetch.
     */
    where?: stationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stations to fetch.
     */
    orderBy?: stationOrderByWithRelationInput | stationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stations.
     */
    cursor?: stationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }


  /**
   * station findFirstOrThrow
   */
  export type stationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * Filter, which station to fetch.
     */
    where?: stationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stations to fetch.
     */
    orderBy?: stationOrderByWithRelationInput | stationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stations.
     */
    cursor?: stationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stations.
     */
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }


  /**
   * station findMany
   */
  export type stationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * Filter, which stations to fetch.
     */
    where?: stationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stations to fetch.
     */
    orderBy?: stationOrderByWithRelationInput | stationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stations.
     */
    cursor?: stationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stations.
     */
    skip?: number
    distinct?: StationScalarFieldEnum | StationScalarFieldEnum[]
  }


  /**
   * station create
   */
  export type stationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * The data needed to create a station.
     */
    data: XOR<stationCreateInput, stationUncheckedCreateInput>
  }


  /**
   * station createMany
   */
  export type stationCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stations.
     */
    data: stationCreateManyInput | stationCreateManyInput[]
  }


  /**
   * station update
   */
  export type stationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * The data needed to update a station.
     */
    data: XOR<stationUpdateInput, stationUncheckedUpdateInput>
    /**
     * Choose, which station to update.
     */
    where: stationWhereUniqueInput
  }


  /**
   * station updateMany
   */
  export type stationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stations.
     */
    data: XOR<stationUpdateManyMutationInput, stationUncheckedUpdateManyInput>
    /**
     * Filter which stations to update
     */
    where?: stationWhereInput
  }


  /**
   * station upsert
   */
  export type stationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * The filter to search for the station to update in case it exists.
     */
    where: stationWhereUniqueInput
    /**
     * In case the station found by the `where` argument doesn't exist, create a new station with this data.
     */
    create: XOR<stationCreateInput, stationUncheckedCreateInput>
    /**
     * In case the station was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stationUpdateInput, stationUncheckedUpdateInput>
  }


  /**
   * station delete
   */
  export type stationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stationInclude<ExtArgs> | null
    /**
     * Filter which station to delete.
     */
    where: stationWhereUniqueInput
  }


  /**
   * station deleteMany
   */
  export type stationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which stations to delete
     */
    where?: stationWhereInput
  }


  /**
   * station findRaw
   */
  export type stationFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * station aggregateRaw
   */
  export type stationAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * station.statistic
   */
  export type station$statisticArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statistic
     */
    select?: statisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statisticInclude<ExtArgs> | null
    where?: statisticWhereInput
    orderBy?: statisticOrderByWithRelationInput | statisticOrderByWithRelationInput[]
    cursor?: statisticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }


  /**
   * station without action
   */
  export type stationDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the station
     */
    select?: stationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stationInclude<ExtArgs> | null
  }



  /**
   * Model statistic
   */

  export type AggregateStatistic = {
    _count: StatisticCountAggregateOutputType | null
    _min: StatisticMinAggregateOutputType | null
    _max: StatisticMaxAggregateOutputType | null
  }

  export type StatisticMinAggregateOutputType = {
    id: string | null
    stationId: string | null
  }

  export type StatisticMaxAggregateOutputType = {
    id: string | null
    stationId: string | null
  }

  export type StatisticCountAggregateOutputType = {
    id: number
    stationId: number
    _all: number
  }


  export type StatisticMinAggregateInputType = {
    id?: true
    stationId?: true
  }

  export type StatisticMaxAggregateInputType = {
    id?: true
    stationId?: true
  }

  export type StatisticCountAggregateInputType = {
    id?: true
    stationId?: true
    _all?: true
  }

  export type StatisticAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which statistic to aggregate.
     */
    where?: statisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statistics to fetch.
     */
    orderBy?: statisticOrderByWithRelationInput | statisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: statisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned statistics
    **/
    _count?: true | StatisticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatisticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatisticMaxAggregateInputType
  }

  export type GetStatisticAggregateType<T extends StatisticAggregateArgs> = {
        [P in keyof T & keyof AggregateStatistic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatistic[P]>
      : GetScalarType<T[P], AggregateStatistic[P]>
  }




  export type statisticGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: statisticWhereInput
    orderBy?: statisticOrderByWithAggregationInput | statisticOrderByWithAggregationInput[]
    by: StatisticScalarFieldEnum[] | StatisticScalarFieldEnum
    having?: statisticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatisticCountAggregateInputType | true
    _min?: StatisticMinAggregateInputType
    _max?: StatisticMaxAggregateInputType
  }

  export type StatisticGroupByOutputType = {
    id: string
    stationId: string
    _count: StatisticCountAggregateOutputType | null
    _min: StatisticMinAggregateOutputType | null
    _max: StatisticMaxAggregateOutputType | null
  }

  type GetStatisticGroupByPayload<T extends statisticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatisticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatisticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatisticGroupByOutputType[P]>
            : GetScalarType<T[P], StatisticGroupByOutputType[P]>
        }
      >
    >


  export type statisticSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stationId?: boolean
    insertedStops?: boolean | statisticDataDefaultArgs<ExtArgs>
    station?: boolean | stationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statistic"]>

  export type statisticSelectScalar = {
    id?: boolean
    stationId?: boolean
  }

  export type statisticInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    station?: boolean | stationDefaultArgs<ExtArgs>
  }


  export type $statisticPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "statistic"
    objects: {
      station: Prisma.$stationPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      stationId: string
    }, ExtArgs["result"]["statistic"]>
    composites: {
      insertedStops: Prisma.$statisticDataPayload[]
    }
  }


  type statisticGetPayload<S extends boolean | null | undefined | statisticDefaultArgs> = $Result.GetResult<Prisma.$statisticPayload, S>

  type statisticCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<statisticFindManyArgs, 'select' | 'include'> & {
      select?: StatisticCountAggregateInputType | true
    }

  export interface statisticDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['statistic'], meta: { name: 'statistic' } }
    /**
     * Find zero or one Statistic that matches the filter.
     * @param {statisticFindUniqueArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends statisticFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, statisticFindUniqueArgs<ExtArgs>>
    ): Prisma__statisticClient<$Result.GetResult<Prisma.$statisticPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Statistic that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {statisticFindUniqueOrThrowArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends statisticFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, statisticFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__statisticClient<$Result.GetResult<Prisma.$statisticPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Statistic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statisticFindFirstArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends statisticFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, statisticFindFirstArgs<ExtArgs>>
    ): Prisma__statisticClient<$Result.GetResult<Prisma.$statisticPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Statistic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statisticFindFirstOrThrowArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends statisticFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, statisticFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__statisticClient<$Result.GetResult<Prisma.$statisticPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Statistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statisticFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statistics
     * const statistics = await prisma.statistic.findMany()
     * 
     * // Get first 10 Statistics
     * const statistics = await prisma.statistic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statisticWithIdOnly = await prisma.statistic.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends statisticFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, statisticFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statisticPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Statistic.
     * @param {statisticCreateArgs} args - Arguments to create a Statistic.
     * @example
     * // Create one Statistic
     * const Statistic = await prisma.statistic.create({
     *   data: {
     *     // ... data to create a Statistic
     *   }
     * })
     * 
    **/
    create<T extends statisticCreateArgs<ExtArgs>>(
      args: SelectSubset<T, statisticCreateArgs<ExtArgs>>
    ): Prisma__statisticClient<$Result.GetResult<Prisma.$statisticPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Statistics.
     *     @param {statisticCreateManyArgs} args - Arguments to create many Statistics.
     *     @example
     *     // Create many Statistics
     *     const statistic = await prisma.statistic.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends statisticCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, statisticCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Statistic.
     * @param {statisticDeleteArgs} args - Arguments to delete one Statistic.
     * @example
     * // Delete one Statistic
     * const Statistic = await prisma.statistic.delete({
     *   where: {
     *     // ... filter to delete one Statistic
     *   }
     * })
     * 
    **/
    delete<T extends statisticDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, statisticDeleteArgs<ExtArgs>>
    ): Prisma__statisticClient<$Result.GetResult<Prisma.$statisticPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Statistic.
     * @param {statisticUpdateArgs} args - Arguments to update one Statistic.
     * @example
     * // Update one Statistic
     * const statistic = await prisma.statistic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends statisticUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, statisticUpdateArgs<ExtArgs>>
    ): Prisma__statisticClient<$Result.GetResult<Prisma.$statisticPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Statistics.
     * @param {statisticDeleteManyArgs} args - Arguments to filter Statistics to delete.
     * @example
     * // Delete a few Statistics
     * const { count } = await prisma.statistic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends statisticDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, statisticDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statisticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statistics
     * const statistic = await prisma.statistic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends statisticUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, statisticUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Statistic.
     * @param {statisticUpsertArgs} args - Arguments to update or create a Statistic.
     * @example
     * // Update or create a Statistic
     * const statistic = await prisma.statistic.upsert({
     *   create: {
     *     // ... data to create a Statistic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Statistic we want to update
     *   }
     * })
    **/
    upsert<T extends statisticUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, statisticUpsertArgs<ExtArgs>>
    ): Prisma__statisticClient<$Result.GetResult<Prisma.$statisticPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Statistics that matches the filter.
     * @param {statisticFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const statistic = await prisma.statistic.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: statisticFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Statistic.
     * @param {statisticAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const statistic = await prisma.statistic.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: statisticAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Statistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statisticCountArgs} args - Arguments to filter Statistics to count.
     * @example
     * // Count the number of Statistics
     * const count = await prisma.statistic.count({
     *   where: {
     *     // ... the filter for the Statistics we want to count
     *   }
     * })
    **/
    count<T extends statisticCountArgs>(
      args?: Subset<T, statisticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatisticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Statistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatisticAggregateArgs>(args: Subset<T, StatisticAggregateArgs>): Prisma.PrismaPromise<GetStatisticAggregateType<T>>

    /**
     * Group by Statistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statisticGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends statisticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: statisticGroupByArgs['orderBy'] }
        : { orderBy?: statisticGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, statisticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatisticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the statistic model
   */
  readonly fields: statisticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for statistic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__statisticClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    station<T extends stationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stationDefaultArgs<ExtArgs>>): Prisma__stationClient<$Result.GetResult<Prisma.$stationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the statistic model
   */ 
  interface statisticFieldRefs {
    readonly id: FieldRef<"statistic", 'String'>
    readonly stationId: FieldRef<"statistic", 'String'>
  }
    

  // Custom InputTypes

  /**
   * statistic findUnique
   */
  export type statisticFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statistic
     */
    select?: statisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statisticInclude<ExtArgs> | null
    /**
     * Filter, which statistic to fetch.
     */
    where: statisticWhereUniqueInput
  }


  /**
   * statistic findUniqueOrThrow
   */
  export type statisticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statistic
     */
    select?: statisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statisticInclude<ExtArgs> | null
    /**
     * Filter, which statistic to fetch.
     */
    where: statisticWhereUniqueInput
  }


  /**
   * statistic findFirst
   */
  export type statisticFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statistic
     */
    select?: statisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statisticInclude<ExtArgs> | null
    /**
     * Filter, which statistic to fetch.
     */
    where?: statisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statistics to fetch.
     */
    orderBy?: statisticOrderByWithRelationInput | statisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statistics.
     */
    cursor?: statisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statistics.
     */
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }


  /**
   * statistic findFirstOrThrow
   */
  export type statisticFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statistic
     */
    select?: statisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statisticInclude<ExtArgs> | null
    /**
     * Filter, which statistic to fetch.
     */
    where?: statisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statistics to fetch.
     */
    orderBy?: statisticOrderByWithRelationInput | statisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statistics.
     */
    cursor?: statisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statistics.
     */
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }


  /**
   * statistic findMany
   */
  export type statisticFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statistic
     */
    select?: statisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statisticInclude<ExtArgs> | null
    /**
     * Filter, which statistics to fetch.
     */
    where?: statisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statistics to fetch.
     */
    orderBy?: statisticOrderByWithRelationInput | statisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing statistics.
     */
    cursor?: statisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statistics.
     */
    skip?: number
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }


  /**
   * statistic create
   */
  export type statisticCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statistic
     */
    select?: statisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statisticInclude<ExtArgs> | null
    /**
     * The data needed to create a statistic.
     */
    data: XOR<statisticCreateInput, statisticUncheckedCreateInput>
  }


  /**
   * statistic createMany
   */
  export type statisticCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many statistics.
     */
    data: statisticCreateManyInput | statisticCreateManyInput[]
  }


  /**
   * statistic update
   */
  export type statisticUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statistic
     */
    select?: statisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statisticInclude<ExtArgs> | null
    /**
     * The data needed to update a statistic.
     */
    data: XOR<statisticUpdateInput, statisticUncheckedUpdateInput>
    /**
     * Choose, which statistic to update.
     */
    where: statisticWhereUniqueInput
  }


  /**
   * statistic updateMany
   */
  export type statisticUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update statistics.
     */
    data: XOR<statisticUpdateManyMutationInput, statisticUncheckedUpdateManyInput>
    /**
     * Filter which statistics to update
     */
    where?: statisticWhereInput
  }


  /**
   * statistic upsert
   */
  export type statisticUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statistic
     */
    select?: statisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statisticInclude<ExtArgs> | null
    /**
     * The filter to search for the statistic to update in case it exists.
     */
    where: statisticWhereUniqueInput
    /**
     * In case the statistic found by the `where` argument doesn't exist, create a new statistic with this data.
     */
    create: XOR<statisticCreateInput, statisticUncheckedCreateInput>
    /**
     * In case the statistic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<statisticUpdateInput, statisticUncheckedUpdateInput>
  }


  /**
   * statistic delete
   */
  export type statisticDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statistic
     */
    select?: statisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statisticInclude<ExtArgs> | null
    /**
     * Filter which statistic to delete.
     */
    where: statisticWhereUniqueInput
  }


  /**
   * statistic deleteMany
   */
  export type statisticDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which statistics to delete
     */
    where?: statisticWhereInput
  }


  /**
   * statistic findRaw
   */
  export type statisticFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * statistic aggregateRaw
   */
  export type statisticAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * statistic without action
   */
  export type statisticDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statistic
     */
    select?: statisticSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statisticInclude<ExtArgs> | null
  }



  /**
   * Model stop
   */

  export type AggregateStop = {
    _count: StopCountAggregateOutputType | null
    _min: StopMinAggregateOutputType | null
    _max: StopMaxAggregateOutputType | null
  }

  export type StopMinAggregateOutputType = {
    db_id: string | null
    id: string | null
  }

  export type StopMaxAggregateOutputType = {
    db_id: string | null
    id: string | null
  }

  export type StopCountAggregateOutputType = {
    db_id: number
    id: number
    _all: number
  }


  export type StopMinAggregateInputType = {
    db_id?: true
    id?: true
  }

  export type StopMaxAggregateInputType = {
    db_id?: true
    id?: true
  }

  export type StopCountAggregateInputType = {
    db_id?: true
    id?: true
    _all?: true
  }

  export type StopAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which stop to aggregate.
     */
    where?: stopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stops to fetch.
     */
    orderBy?: stopOrderByWithRelationInput | stopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stops
    **/
    _count?: true | StopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StopMaxAggregateInputType
  }

  export type GetStopAggregateType<T extends StopAggregateArgs> = {
        [P in keyof T & keyof AggregateStop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStop[P]>
      : GetScalarType<T[P], AggregateStop[P]>
  }




  export type stopGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: stopWhereInput
    orderBy?: stopOrderByWithAggregationInput | stopOrderByWithAggregationInput[]
    by: StopScalarFieldEnum[] | StopScalarFieldEnum
    having?: stopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StopCountAggregateInputType | true
    _min?: StopMinAggregateInputType
    _max?: StopMaxAggregateInputType
  }

  export type StopGroupByOutputType = {
    db_id: string
    id: string
    _count: StopCountAggregateOutputType | null
    _min: StopMinAggregateOutputType | null
    _max: StopMaxAggregateOutputType | null
  }

  type GetStopGroupByPayload<T extends stopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StopGroupByOutputType[P]>
            : GetScalarType<T[P], StopGroupByOutputType[P]>
        }
      >
    >


  export type stopSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    db_id?: boolean
    id?: boolean
    meta?: boolean | stopMetaDataDefaultArgs<ExtArgs>
    journey?: boolean | stopJourneyDataDefaultArgs<ExtArgs>
    stop?: boolean | stopStopDataDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stop"]>

  export type stopSelectScalar = {
    db_id?: boolean
    id?: boolean
  }

  export type stopInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {}


  export type $stopPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "stop"
    objects: {}
    scalars: $Extensions.GetResult<{
      db_id: string
      id: string
    }, ExtArgs["result"]["stop"]>
    composites: {
      meta: Prisma.$stopMetaDataPayload
      journey: Prisma.$stopJourneyDataPayload
      stop: Prisma.$stopStopDataPayload
    }
  }


  type stopGetPayload<S extends boolean | null | undefined | stopDefaultArgs> = $Result.GetResult<Prisma.$stopPayload, S>

  type stopCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<stopFindManyArgs, 'select' | 'include'> & {
      select?: StopCountAggregateInputType | true
    }

  export interface stopDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stop'], meta: { name: 'stop' } }
    /**
     * Find zero or one Stop that matches the filter.
     * @param {stopFindUniqueArgs} args - Arguments to find a Stop
     * @example
     * // Get one Stop
     * const stop = await prisma.stop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends stopFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, stopFindUniqueArgs<ExtArgs>>
    ): Prisma__stopClient<$Result.GetResult<Prisma.$stopPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Stop that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {stopFindUniqueOrThrowArgs} args - Arguments to find a Stop
     * @example
     * // Get one Stop
     * const stop = await prisma.stop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends stopFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, stopFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__stopClient<$Result.GetResult<Prisma.$stopPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Stop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stopFindFirstArgs} args - Arguments to find a Stop
     * @example
     * // Get one Stop
     * const stop = await prisma.stop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends stopFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, stopFindFirstArgs<ExtArgs>>
    ): Prisma__stopClient<$Result.GetResult<Prisma.$stopPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Stop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stopFindFirstOrThrowArgs} args - Arguments to find a Stop
     * @example
     * // Get one Stop
     * const stop = await prisma.stop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends stopFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, stopFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__stopClient<$Result.GetResult<Prisma.$stopPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Stops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stopFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stops
     * const stops = await prisma.stop.findMany()
     * 
     * // Get first 10 Stops
     * const stops = await prisma.stop.findMany({ take: 10 })
     * 
     * // Only select the `db_id`
     * const stopWithDb_idOnly = await prisma.stop.findMany({ select: { db_id: true } })
     * 
    **/
    findMany<T extends stopFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stopFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stopPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Stop.
     * @param {stopCreateArgs} args - Arguments to create a Stop.
     * @example
     * // Create one Stop
     * const Stop = await prisma.stop.create({
     *   data: {
     *     // ... data to create a Stop
     *   }
     * })
     * 
    **/
    create<T extends stopCreateArgs<ExtArgs>>(
      args: SelectSubset<T, stopCreateArgs<ExtArgs>>
    ): Prisma__stopClient<$Result.GetResult<Prisma.$stopPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Stops.
     *     @param {stopCreateManyArgs} args - Arguments to create many Stops.
     *     @example
     *     // Create many Stops
     *     const stop = await prisma.stop.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends stopCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stopCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stop.
     * @param {stopDeleteArgs} args - Arguments to delete one Stop.
     * @example
     * // Delete one Stop
     * const Stop = await prisma.stop.delete({
     *   where: {
     *     // ... filter to delete one Stop
     *   }
     * })
     * 
    **/
    delete<T extends stopDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, stopDeleteArgs<ExtArgs>>
    ): Prisma__stopClient<$Result.GetResult<Prisma.$stopPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Stop.
     * @param {stopUpdateArgs} args - Arguments to update one Stop.
     * @example
     * // Update one Stop
     * const stop = await prisma.stop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends stopUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, stopUpdateArgs<ExtArgs>>
    ): Prisma__stopClient<$Result.GetResult<Prisma.$stopPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Stops.
     * @param {stopDeleteManyArgs} args - Arguments to filter Stops to delete.
     * @example
     * // Delete a few Stops
     * const { count } = await prisma.stop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends stopDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, stopDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stops
     * const stop = await prisma.stop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends stopUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, stopUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stop.
     * @param {stopUpsertArgs} args - Arguments to update or create a Stop.
     * @example
     * // Update or create a Stop
     * const stop = await prisma.stop.upsert({
     *   create: {
     *     // ... data to create a Stop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stop we want to update
     *   }
     * })
    **/
    upsert<T extends stopUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, stopUpsertArgs<ExtArgs>>
    ): Prisma__stopClient<$Result.GetResult<Prisma.$stopPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Stops that matches the filter.
     * @param {stopFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const stop = await prisma.stop.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: stopFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Stop.
     * @param {stopAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const stop = await prisma.stop.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: stopAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Stops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stopCountArgs} args - Arguments to filter Stops to count.
     * @example
     * // Count the number of Stops
     * const count = await prisma.stop.count({
     *   where: {
     *     // ... the filter for the Stops we want to count
     *   }
     * })
    **/
    count<T extends stopCountArgs>(
      args?: Subset<T, stopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StopAggregateArgs>(args: Subset<T, StopAggregateArgs>): Prisma.PrismaPromise<GetStopAggregateType<T>>

    /**
     * Group by Stop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stopGroupByArgs['orderBy'] }
        : { orderBy?: stopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stop model
   */
  readonly fields: stopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stopClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the stop model
   */ 
  interface stopFieldRefs {
    readonly db_id: FieldRef<"stop", 'String'>
    readonly id: FieldRef<"stop", 'String'>
  }
    

  // Custom InputTypes

  /**
   * stop findUnique
   */
  export type stopFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop
     */
    select?: stopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stopInclude<ExtArgs> | null
    /**
     * Filter, which stop to fetch.
     */
    where: stopWhereUniqueInput
  }


  /**
   * stop findUniqueOrThrow
   */
  export type stopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop
     */
    select?: stopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stopInclude<ExtArgs> | null
    /**
     * Filter, which stop to fetch.
     */
    where: stopWhereUniqueInput
  }


  /**
   * stop findFirst
   */
  export type stopFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop
     */
    select?: stopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stopInclude<ExtArgs> | null
    /**
     * Filter, which stop to fetch.
     */
    where?: stopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stops to fetch.
     */
    orderBy?: stopOrderByWithRelationInput | stopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stops.
     */
    cursor?: stopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stops.
     */
    distinct?: StopScalarFieldEnum | StopScalarFieldEnum[]
  }


  /**
   * stop findFirstOrThrow
   */
  export type stopFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop
     */
    select?: stopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stopInclude<ExtArgs> | null
    /**
     * Filter, which stop to fetch.
     */
    where?: stopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stops to fetch.
     */
    orderBy?: stopOrderByWithRelationInput | stopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stops.
     */
    cursor?: stopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stops.
     */
    distinct?: StopScalarFieldEnum | StopScalarFieldEnum[]
  }


  /**
   * stop findMany
   */
  export type stopFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop
     */
    select?: stopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stopInclude<ExtArgs> | null
    /**
     * Filter, which stops to fetch.
     */
    where?: stopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stops to fetch.
     */
    orderBy?: stopOrderByWithRelationInput | stopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stops.
     */
    cursor?: stopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stops.
     */
    skip?: number
    distinct?: StopScalarFieldEnum | StopScalarFieldEnum[]
  }


  /**
   * stop create
   */
  export type stopCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop
     */
    select?: stopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stopInclude<ExtArgs> | null
    /**
     * The data needed to create a stop.
     */
    data: XOR<stopCreateInput, stopUncheckedCreateInput>
  }


  /**
   * stop createMany
   */
  export type stopCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stops.
     */
    data: stopCreateManyInput | stopCreateManyInput[]
  }


  /**
   * stop update
   */
  export type stopUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop
     */
    select?: stopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stopInclude<ExtArgs> | null
    /**
     * The data needed to update a stop.
     */
    data: XOR<stopUpdateInput, stopUncheckedUpdateInput>
    /**
     * Choose, which stop to update.
     */
    where: stopWhereUniqueInput
  }


  /**
   * stop updateMany
   */
  export type stopUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stops.
     */
    data: XOR<stopUpdateManyMutationInput, stopUncheckedUpdateManyInput>
    /**
     * Filter which stops to update
     */
    where?: stopWhereInput
  }


  /**
   * stop upsert
   */
  export type stopUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop
     */
    select?: stopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stopInclude<ExtArgs> | null
    /**
     * The filter to search for the stop to update in case it exists.
     */
    where: stopWhereUniqueInput
    /**
     * In case the stop found by the `where` argument doesn't exist, create a new stop with this data.
     */
    create: XOR<stopCreateInput, stopUncheckedCreateInput>
    /**
     * In case the stop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stopUpdateInput, stopUncheckedUpdateInput>
  }


  /**
   * stop delete
   */
  export type stopDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop
     */
    select?: stopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stopInclude<ExtArgs> | null
    /**
     * Filter which stop to delete.
     */
    where: stopWhereUniqueInput
  }


  /**
   * stop deleteMany
   */
  export type stopDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which stops to delete
     */
    where?: stopWhereInput
  }


  /**
   * stop findRaw
   */
  export type stopFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * stop aggregateRaw
   */
  export type stopAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * stop without action
   */
  export type stopDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stop
     */
    select?: stopSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: stopInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const StationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    eva: 'eva',
    ds100: 'ds100',
    db: 'db',
    creationts: 'creationts',
    fetchData: 'fetchData'
  };

  export type StationScalarFieldEnum = (typeof StationScalarFieldEnum)[keyof typeof StationScalarFieldEnum]


  export const StatisticScalarFieldEnum: {
    id: 'id',
    stationId: 'stationId'
  };

  export type StatisticScalarFieldEnum = (typeof StatisticScalarFieldEnum)[keyof typeof StatisticScalarFieldEnum]


  export const StopScalarFieldEnum: {
    db_id: 'db_id',
    id: 'id'
  };

  export type StopScalarFieldEnum = (typeof StopScalarFieldEnum)[keyof typeof StopScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'trainType'
   */
  export type EnumtrainTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'trainType'>
    


  /**
   * Reference to a field of type 'trainType[]'
   */
  export type ListEnumtrainTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'trainType[]'>
    


  /**
   * Reference to a field of type 'trainFlag'
   */
  export type EnumtrainFlagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'trainFlag'>
    


  /**
   * Reference to a field of type 'trainFlag[]'
   */
  export type ListEnumtrainFlagFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'trainFlag[]'>
    
  /**
   * Deep Input Types
   */


  export type stationWhereInput = {
    AND?: stationWhereInput | stationWhereInput[]
    OR?: stationWhereInput[]
    NOT?: stationWhereInput | stationWhereInput[]
    id?: StringFilter<"station"> | string
    name?: StringFilter<"station"> | string
    eva?: IntFilter<"station"> | number
    ds100?: StringFilter<"station"> | string
    db?: BoolFilter<"station"> | boolean
    creationts?: DateTimeFilter<"station"> | Date | string
    fetchData?: BoolFilter<"station"> | boolean
    statistic?: StatisticListRelationFilter
  }

  export type stationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    eva?: SortOrder
    ds100?: SortOrder
    db?: SortOrder
    creationts?: SortOrder
    fetchData?: SortOrder
    statistic?: statisticOrderByRelationAggregateInput
  }

  export type stationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: stationWhereInput | stationWhereInput[]
    OR?: stationWhereInput[]
    NOT?: stationWhereInput | stationWhereInput[]
    name?: StringFilter<"station"> | string
    eva?: IntFilter<"station"> | number
    ds100?: StringFilter<"station"> | string
    db?: BoolFilter<"station"> | boolean
    creationts?: DateTimeFilter<"station"> | Date | string
    fetchData?: BoolFilter<"station"> | boolean
    statistic?: StatisticListRelationFilter
  }, "id">

  export type stationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    eva?: SortOrder
    ds100?: SortOrder
    db?: SortOrder
    creationts?: SortOrder
    fetchData?: SortOrder
    _count?: stationCountOrderByAggregateInput
    _avg?: stationAvgOrderByAggregateInput
    _max?: stationMaxOrderByAggregateInput
    _min?: stationMinOrderByAggregateInput
    _sum?: stationSumOrderByAggregateInput
  }

  export type stationScalarWhereWithAggregatesInput = {
    AND?: stationScalarWhereWithAggregatesInput | stationScalarWhereWithAggregatesInput[]
    OR?: stationScalarWhereWithAggregatesInput[]
    NOT?: stationScalarWhereWithAggregatesInput | stationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"station"> | string
    name?: StringWithAggregatesFilter<"station"> | string
    eva?: IntWithAggregatesFilter<"station"> | number
    ds100?: StringWithAggregatesFilter<"station"> | string
    db?: BoolWithAggregatesFilter<"station"> | boolean
    creationts?: DateTimeWithAggregatesFilter<"station"> | Date | string
    fetchData?: BoolWithAggregatesFilter<"station"> | boolean
  }

  export type statisticWhereInput = {
    AND?: statisticWhereInput | statisticWhereInput[]
    OR?: statisticWhereInput[]
    NOT?: statisticWhereInput | statisticWhereInput[]
    id?: StringFilter<"statistic"> | string
    stationId?: StringFilter<"statistic"> | string
    insertedStops?: StatisticDataCompositeListFilter | statisticDataObjectEqualityInput[]
    station?: XOR<StationRelationFilter, stationWhereInput>
  }

  export type statisticOrderByWithRelationInput = {
    id?: SortOrder
    stationId?: SortOrder
    insertedStops?: statisticDataOrderByCompositeAggregateInput
    station?: stationOrderByWithRelationInput
  }

  export type statisticWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: statisticWhereInput | statisticWhereInput[]
    OR?: statisticWhereInput[]
    NOT?: statisticWhereInput | statisticWhereInput[]
    stationId?: StringFilter<"statistic"> | string
    insertedStops?: StatisticDataCompositeListFilter | statisticDataObjectEqualityInput[]
    station?: XOR<StationRelationFilter, stationWhereInput>
  }, "id">

  export type statisticOrderByWithAggregationInput = {
    id?: SortOrder
    stationId?: SortOrder
    _count?: statisticCountOrderByAggregateInput
    _max?: statisticMaxOrderByAggregateInput
    _min?: statisticMinOrderByAggregateInput
  }

  export type statisticScalarWhereWithAggregatesInput = {
    AND?: statisticScalarWhereWithAggregatesInput | statisticScalarWhereWithAggregatesInput[]
    OR?: statisticScalarWhereWithAggregatesInput[]
    NOT?: statisticScalarWhereWithAggregatesInput | statisticScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"statistic"> | string
    stationId?: StringWithAggregatesFilter<"statistic"> | string
  }

  export type stopWhereInput = {
    AND?: stopWhereInput | stopWhereInput[]
    OR?: stopWhereInput[]
    NOT?: stopWhereInput | stopWhereInput[]
    db_id?: StringFilter<"stop"> | string
    id?: StringFilter<"stop"> | string
    meta?: XOR<StopMetaDataCompositeFilter, stopMetaDataObjectEqualityInput>
    journey?: XOR<StopJourneyDataCompositeFilter, stopJourneyDataObjectEqualityInput>
    stop?: XOR<StopStopDataCompositeFilter, stopStopDataObjectEqualityInput>
  }

  export type stopOrderByWithRelationInput = {
    db_id?: SortOrder
    id?: SortOrder
    meta?: stopMetaDataOrderByInput
    journey?: stopJourneyDataOrderByInput
    stop?: stopStopDataOrderByInput
  }

  export type stopWhereUniqueInput = Prisma.AtLeast<{
    db_id?: string
    AND?: stopWhereInput | stopWhereInput[]
    OR?: stopWhereInput[]
    NOT?: stopWhereInput | stopWhereInput[]
    id?: StringFilter<"stop"> | string
    meta?: XOR<StopMetaDataCompositeFilter, stopMetaDataObjectEqualityInput>
    journey?: XOR<StopJourneyDataCompositeFilter, stopJourneyDataObjectEqualityInput>
    stop?: XOR<StopStopDataCompositeFilter, stopStopDataObjectEqualityInput>
  }, "db_id">

  export type stopOrderByWithAggregationInput = {
    db_id?: SortOrder
    id?: SortOrder
    _count?: stopCountOrderByAggregateInput
    _max?: stopMaxOrderByAggregateInput
    _min?: stopMinOrderByAggregateInput
  }

  export type stopScalarWhereWithAggregatesInput = {
    AND?: stopScalarWhereWithAggregatesInput | stopScalarWhereWithAggregatesInput[]
    OR?: stopScalarWhereWithAggregatesInput[]
    NOT?: stopScalarWhereWithAggregatesInput | stopScalarWhereWithAggregatesInput[]
    db_id?: StringWithAggregatesFilter<"stop"> | string
    id?: StringWithAggregatesFilter<"stop"> | string
  }

  export type stationCreateInput = {
    id?: string
    name: string
    eva: number
    ds100: string
    db: boolean
    creationts?: Date | string
    fetchData: boolean
    statistic?: statisticCreateNestedManyWithoutStationInput
  }

  export type stationUncheckedCreateInput = {
    id?: string
    name: string
    eva: number
    ds100: string
    db: boolean
    creationts?: Date | string
    fetchData: boolean
    statistic?: statisticUncheckedCreateNestedManyWithoutStationInput
  }

  export type stationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    eva?: IntFieldUpdateOperationsInput | number
    ds100?: StringFieldUpdateOperationsInput | string
    db?: BoolFieldUpdateOperationsInput | boolean
    creationts?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchData?: BoolFieldUpdateOperationsInput | boolean
    statistic?: statisticUpdateManyWithoutStationNestedInput
  }

  export type stationUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    eva?: IntFieldUpdateOperationsInput | number
    ds100?: StringFieldUpdateOperationsInput | string
    db?: BoolFieldUpdateOperationsInput | boolean
    creationts?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchData?: BoolFieldUpdateOperationsInput | boolean
    statistic?: statisticUncheckedUpdateManyWithoutStationNestedInput
  }

  export type stationCreateManyInput = {
    id?: string
    name: string
    eva: number
    ds100: string
    db: boolean
    creationts?: Date | string
    fetchData: boolean
  }

  export type stationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    eva?: IntFieldUpdateOperationsInput | number
    ds100?: StringFieldUpdateOperationsInput | string
    db?: BoolFieldUpdateOperationsInput | boolean
    creationts?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchData?: BoolFieldUpdateOperationsInput | boolean
  }

  export type stationUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    eva?: IntFieldUpdateOperationsInput | number
    ds100?: StringFieldUpdateOperationsInput | string
    db?: BoolFieldUpdateOperationsInput | boolean
    creationts?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchData?: BoolFieldUpdateOperationsInput | boolean
  }

  export type statisticCreateInput = {
    id?: string
    insertedStops?: XOR<statisticDataListCreateEnvelopeInput, statisticDataCreateInput> | statisticDataCreateInput[]
    station: stationCreateNestedOneWithoutStatisticInput
  }

  export type statisticUncheckedCreateInput = {
    id?: string
    stationId: string
    insertedStops?: XOR<statisticDataListCreateEnvelopeInput, statisticDataCreateInput> | statisticDataCreateInput[]
  }

  export type statisticUpdateInput = {
    insertedStops?: XOR<statisticDataListUpdateEnvelopeInput, statisticDataCreateInput> | statisticDataCreateInput[]
    station?: stationUpdateOneRequiredWithoutStatisticNestedInput
  }

  export type statisticUncheckedUpdateInput = {
    stationId?: StringFieldUpdateOperationsInput | string
    insertedStops?: XOR<statisticDataListUpdateEnvelopeInput, statisticDataCreateInput> | statisticDataCreateInput[]
  }

  export type statisticCreateManyInput = {
    id?: string
    stationId: string
    insertedStops?: XOR<statisticDataListCreateEnvelopeInput, statisticDataCreateInput> | statisticDataCreateInput[]
  }

  export type statisticUpdateManyMutationInput = {
    insertedStops?: XOR<statisticDataListUpdateEnvelopeInput, statisticDataCreateInput> | statisticDataCreateInput[]
  }

  export type statisticUncheckedUpdateManyInput = {
    stationId?: StringFieldUpdateOperationsInput | string
    insertedStops?: XOR<statisticDataListUpdateEnvelopeInput, statisticDataCreateInput> | statisticDataCreateInput[]
  }

  export type stopCreateInput = {
    db_id?: string
    id: string
    meta: XOR<stopMetaDataCreateEnvelopeInput, stopMetaDataCreateInput>
    journey: XOR<stopJourneyDataCreateEnvelopeInput, stopJourneyDataCreateInput>
    stop: XOR<stopStopDataCreateEnvelopeInput, stopStopDataCreateInput>
  }

  export type stopUncheckedCreateInput = {
    db_id?: string
    id: string
    meta: XOR<stopMetaDataCreateEnvelopeInput, stopMetaDataCreateInput>
    journey: XOR<stopJourneyDataCreateEnvelopeInput, stopJourneyDataCreateInput>
    stop: XOR<stopStopDataCreateEnvelopeInput, stopStopDataCreateInput>
  }

  export type stopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meta?: XOR<stopMetaDataUpdateEnvelopeInput, stopMetaDataCreateInput>
    journey?: XOR<stopJourneyDataUpdateEnvelopeInput, stopJourneyDataCreateInput>
    stop?: XOR<stopStopDataUpdateEnvelopeInput, stopStopDataCreateInput>
  }

  export type stopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    meta?: XOR<stopMetaDataUpdateEnvelopeInput, stopMetaDataCreateInput>
    journey?: XOR<stopJourneyDataUpdateEnvelopeInput, stopJourneyDataCreateInput>
    stop?: XOR<stopStopDataUpdateEnvelopeInput, stopStopDataCreateInput>
  }

  export type stopCreateManyInput = {
    db_id?: string
    id: string
    meta: XOR<stopMetaDataCreateEnvelopeInput, stopMetaDataCreateInput>
    journey: XOR<stopJourneyDataCreateEnvelopeInput, stopJourneyDataCreateInput>
    stop: XOR<stopStopDataCreateEnvelopeInput, stopStopDataCreateInput>
  }

  export type stopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    meta?: XOR<stopMetaDataUpdateEnvelopeInput, stopMetaDataCreateInput>
    journey?: XOR<stopJourneyDataUpdateEnvelopeInput, stopJourneyDataCreateInput>
    stop?: XOR<stopStopDataUpdateEnvelopeInput, stopStopDataCreateInput>
  }

  export type stopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    meta?: XOR<stopMetaDataUpdateEnvelopeInput, stopMetaDataCreateInput>
    journey?: XOR<stopJourneyDataUpdateEnvelopeInput, stopJourneyDataCreateInput>
    stop?: XOR<stopStopDataUpdateEnvelopeInput, stopStopDataCreateInput>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StatisticListRelationFilter = {
    every?: statisticWhereInput
    some?: statisticWhereInput
    none?: statisticWhereInput
  }

  export type statisticOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    eva?: SortOrder
    ds100?: SortOrder
    db?: SortOrder
    creationts?: SortOrder
    fetchData?: SortOrder
  }

  export type stationAvgOrderByAggregateInput = {
    eva?: SortOrder
  }

  export type stationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    eva?: SortOrder
    ds100?: SortOrder
    db?: SortOrder
    creationts?: SortOrder
    fetchData?: SortOrder
  }

  export type stationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    eva?: SortOrder
    ds100?: SortOrder
    db?: SortOrder
    creationts?: SortOrder
    fetchData?: SortOrder
  }

  export type stationSumOrderByAggregateInput = {
    eva?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StatisticDataCompositeListFilter = {
    equals?: statisticDataObjectEqualityInput[]
    every?: statisticDataWhereInput
    some?: statisticDataWhereInput
    none?: statisticDataWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type statisticDataObjectEqualityInput = {
    date: string
    hour: string
    count: number
  }

  export type StationRelationFilter = {
    is?: stationWhereInput
    isNot?: stationWhereInput
  }

  export type statisticDataOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type statisticCountOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
  }

  export type statisticMaxOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
  }

  export type statisticMinOrderByAggregateInput = {
    id?: SortOrder
    stationId?: SortOrder
  }

  export type StopMetaDataCompositeFilter = {
    equals?: stopMetaDataObjectEqualityInput
    is?: stopMetaDataWhereInput
    isNot?: stopMetaDataWhereInput
  }

  export type stopMetaDataObjectEqualityInput = {
    ds100: string
    name: string
    eva: number
    date: Date | string
  }

  export type StopJourneyDataCompositeFilter = {
    equals?: stopJourneyDataObjectEqualityInput
    is?: stopJourneyDataWhereInput
    isNot?: stopJourneyDataWhereInput
  }

  export type stopJourneyDataObjectEqualityInput = {
    type: $Enums.trainType
    no: number
    line: number
    flag: $Enums.trainFlag
    origin: string
    destination: string
  }

  export type StopStopDataCompositeFilter = {
    equals?: stopStopDataObjectEqualityInput
    is?: stopStopDataWhereInput
    isNot?: stopStopDataWhereInput
  }

  export type stopStopDataObjectEqualityInput = {
    prev_station: string
    next_station: string
    arrival: Date | string
    departure: Date | string
    platform: string
  }

  export type stopMetaDataOrderByInput = {
    ds100?: SortOrder
    name?: SortOrder
    eva?: SortOrder
    date?: SortOrder
  }

  export type stopJourneyDataOrderByInput = {
    type?: SortOrder
    no?: SortOrder
    line?: SortOrder
    flag?: SortOrder
    origin?: SortOrder
    destination?: SortOrder
  }

  export type stopStopDataOrderByInput = {
    prev_station?: SortOrder
    next_station?: SortOrder
    arrival?: SortOrder
    departure?: SortOrder
    platform?: SortOrder
  }

  export type stopCountOrderByAggregateInput = {
    db_id?: SortOrder
    id?: SortOrder
  }

  export type stopMaxOrderByAggregateInput = {
    db_id?: SortOrder
    id?: SortOrder
  }

  export type stopMinOrderByAggregateInput = {
    db_id?: SortOrder
    id?: SortOrder
  }

  export type statisticCreateNestedManyWithoutStationInput = {
    create?: XOR<statisticCreateWithoutStationInput, statisticUncheckedCreateWithoutStationInput> | statisticCreateWithoutStationInput[] | statisticUncheckedCreateWithoutStationInput[]
    connectOrCreate?: statisticCreateOrConnectWithoutStationInput | statisticCreateOrConnectWithoutStationInput[]
    createMany?: statisticCreateManyStationInputEnvelope
    connect?: statisticWhereUniqueInput | statisticWhereUniqueInput[]
  }

  export type statisticUncheckedCreateNestedManyWithoutStationInput = {
    create?: XOR<statisticCreateWithoutStationInput, statisticUncheckedCreateWithoutStationInput> | statisticCreateWithoutStationInput[] | statisticUncheckedCreateWithoutStationInput[]
    connectOrCreate?: statisticCreateOrConnectWithoutStationInput | statisticCreateOrConnectWithoutStationInput[]
    createMany?: statisticCreateManyStationInputEnvelope
    connect?: statisticWhereUniqueInput | statisticWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type statisticUpdateManyWithoutStationNestedInput = {
    create?: XOR<statisticCreateWithoutStationInput, statisticUncheckedCreateWithoutStationInput> | statisticCreateWithoutStationInput[] | statisticUncheckedCreateWithoutStationInput[]
    connectOrCreate?: statisticCreateOrConnectWithoutStationInput | statisticCreateOrConnectWithoutStationInput[]
    upsert?: statisticUpsertWithWhereUniqueWithoutStationInput | statisticUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: statisticCreateManyStationInputEnvelope
    set?: statisticWhereUniqueInput | statisticWhereUniqueInput[]
    disconnect?: statisticWhereUniqueInput | statisticWhereUniqueInput[]
    delete?: statisticWhereUniqueInput | statisticWhereUniqueInput[]
    connect?: statisticWhereUniqueInput | statisticWhereUniqueInput[]
    update?: statisticUpdateWithWhereUniqueWithoutStationInput | statisticUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: statisticUpdateManyWithWhereWithoutStationInput | statisticUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: statisticScalarWhereInput | statisticScalarWhereInput[]
  }

  export type statisticUncheckedUpdateManyWithoutStationNestedInput = {
    create?: XOR<statisticCreateWithoutStationInput, statisticUncheckedCreateWithoutStationInput> | statisticCreateWithoutStationInput[] | statisticUncheckedCreateWithoutStationInput[]
    connectOrCreate?: statisticCreateOrConnectWithoutStationInput | statisticCreateOrConnectWithoutStationInput[]
    upsert?: statisticUpsertWithWhereUniqueWithoutStationInput | statisticUpsertWithWhereUniqueWithoutStationInput[]
    createMany?: statisticCreateManyStationInputEnvelope
    set?: statisticWhereUniqueInput | statisticWhereUniqueInput[]
    disconnect?: statisticWhereUniqueInput | statisticWhereUniqueInput[]
    delete?: statisticWhereUniqueInput | statisticWhereUniqueInput[]
    connect?: statisticWhereUniqueInput | statisticWhereUniqueInput[]
    update?: statisticUpdateWithWhereUniqueWithoutStationInput | statisticUpdateWithWhereUniqueWithoutStationInput[]
    updateMany?: statisticUpdateManyWithWhereWithoutStationInput | statisticUpdateManyWithWhereWithoutStationInput[]
    deleteMany?: statisticScalarWhereInput | statisticScalarWhereInput[]
  }

  export type statisticDataListCreateEnvelopeInput = {
    set?: statisticDataCreateInput | statisticDataCreateInput[]
  }

  export type statisticDataCreateInput = {
    date: string
    hour: string
    count: number
  }

  export type stationCreateNestedOneWithoutStatisticInput = {
    create?: XOR<stationCreateWithoutStatisticInput, stationUncheckedCreateWithoutStatisticInput>
    connectOrCreate?: stationCreateOrConnectWithoutStatisticInput
    connect?: stationWhereUniqueInput
  }

  export type statisticDataListUpdateEnvelopeInput = {
    set?: statisticDataCreateInput | statisticDataCreateInput[]
    push?: statisticDataCreateInput | statisticDataCreateInput[]
    updateMany?: statisticDataUpdateManyInput
    deleteMany?: statisticDataDeleteManyInput
  }

  export type stationUpdateOneRequiredWithoutStatisticNestedInput = {
    create?: XOR<stationCreateWithoutStatisticInput, stationUncheckedCreateWithoutStatisticInput>
    connectOrCreate?: stationCreateOrConnectWithoutStatisticInput
    upsert?: stationUpsertWithoutStatisticInput
    connect?: stationWhereUniqueInput
    update?: XOR<XOR<stationUpdateToOneWithWhereWithoutStatisticInput, stationUpdateWithoutStatisticInput>, stationUncheckedUpdateWithoutStatisticInput>
  }

  export type stopMetaDataCreateEnvelopeInput = {
    set?: stopMetaDataCreateInput
  }

  export type stopMetaDataCreateInput = {
    ds100: string
    name: string
    eva: number
    date: Date | string
  }

  export type stopJourneyDataCreateEnvelopeInput = {
    set?: stopJourneyDataCreateInput
  }

  export type stopJourneyDataCreateInput = {
    type: $Enums.trainType
    no: number
    line: number
    flag: $Enums.trainFlag
    origin: string
    destination: string
  }

  export type stopStopDataCreateEnvelopeInput = {
    set?: stopStopDataCreateInput
  }

  export type stopStopDataCreateInput = {
    prev_station: string
    next_station: string
    arrival: Date | string
    departure: Date | string
    platform: string
  }

  export type stopMetaDataUpdateEnvelopeInput = {
    set?: stopMetaDataCreateInput
    update?: stopMetaDataUpdateInput
  }

  export type stopJourneyDataUpdateEnvelopeInput = {
    set?: stopJourneyDataCreateInput
    update?: stopJourneyDataUpdateInput
  }

  export type stopStopDataUpdateEnvelopeInput = {
    set?: stopStopDataCreateInput
    update?: stopStopDataUpdateInput
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type statisticDataWhereInput = {
    AND?: statisticDataWhereInput | statisticDataWhereInput[]
    OR?: statisticDataWhereInput[]
    NOT?: statisticDataWhereInput | statisticDataWhereInput[]
    date?: StringFilter<"statisticData"> | string
    hour?: StringFilter<"statisticData"> | string
    count?: IntFilter<"statisticData"> | number
  }

  export type stopMetaDataWhereInput = {
    AND?: stopMetaDataWhereInput | stopMetaDataWhereInput[]
    OR?: stopMetaDataWhereInput[]
    NOT?: stopMetaDataWhereInput | stopMetaDataWhereInput[]
    ds100?: StringFilter<"stopMetaData"> | string
    name?: StringFilter<"stopMetaData"> | string
    eva?: IntFilter<"stopMetaData"> | number
    date?: DateTimeFilter<"stopMetaData"> | Date | string
  }

  export type stopJourneyDataWhereInput = {
    AND?: stopJourneyDataWhereInput | stopJourneyDataWhereInput[]
    OR?: stopJourneyDataWhereInput[]
    NOT?: stopJourneyDataWhereInput | stopJourneyDataWhereInput[]
    type?: EnumtrainTypeFilter<"stopJourneyData"> | $Enums.trainType
    no?: IntFilter<"stopJourneyData"> | number
    line?: IntFilter<"stopJourneyData"> | number
    flag?: EnumtrainFlagFilter<"stopJourneyData"> | $Enums.trainFlag
    origin?: StringFilter<"stopJourneyData"> | string
    destination?: StringFilter<"stopJourneyData"> | string
  }

  export type stopStopDataWhereInput = {
    AND?: stopStopDataWhereInput | stopStopDataWhereInput[]
    OR?: stopStopDataWhereInput[]
    NOT?: stopStopDataWhereInput | stopStopDataWhereInput[]
    prev_station?: StringFilter<"stopStopData"> | string
    next_station?: StringFilter<"stopStopData"> | string
    arrival?: DateTimeFilter<"stopStopData"> | Date | string
    departure?: DateTimeFilter<"stopStopData"> | Date | string
    platform?: StringFilter<"stopStopData"> | string
  }

  export type statisticCreateWithoutStationInput = {
    id?: string
    insertedStops?: XOR<statisticDataListCreateEnvelopeInput, statisticDataCreateInput> | statisticDataCreateInput[]
  }

  export type statisticUncheckedCreateWithoutStationInput = {
    id?: string
    insertedStops?: XOR<statisticDataListCreateEnvelopeInput, statisticDataCreateInput> | statisticDataCreateInput[]
  }

  export type statisticCreateOrConnectWithoutStationInput = {
    where: statisticWhereUniqueInput
    create: XOR<statisticCreateWithoutStationInput, statisticUncheckedCreateWithoutStationInput>
  }

  export type statisticCreateManyStationInputEnvelope = {
    data: statisticCreateManyStationInput | statisticCreateManyStationInput[]
  }

  export type statisticUpsertWithWhereUniqueWithoutStationInput = {
    where: statisticWhereUniqueInput
    update: XOR<statisticUpdateWithoutStationInput, statisticUncheckedUpdateWithoutStationInput>
    create: XOR<statisticCreateWithoutStationInput, statisticUncheckedCreateWithoutStationInput>
  }

  export type statisticUpdateWithWhereUniqueWithoutStationInput = {
    where: statisticWhereUniqueInput
    data: XOR<statisticUpdateWithoutStationInput, statisticUncheckedUpdateWithoutStationInput>
  }

  export type statisticUpdateManyWithWhereWithoutStationInput = {
    where: statisticScalarWhereInput
    data: XOR<statisticUpdateManyMutationInput, statisticUncheckedUpdateManyWithoutStationInput>
  }

  export type statisticScalarWhereInput = {
    AND?: statisticScalarWhereInput | statisticScalarWhereInput[]
    OR?: statisticScalarWhereInput[]
    NOT?: statisticScalarWhereInput | statisticScalarWhereInput[]
    id?: StringFilter<"statistic"> | string
    stationId?: StringFilter<"statistic"> | string
  }

  export type stationCreateWithoutStatisticInput = {
    id?: string
    name: string
    eva: number
    ds100: string
    db: boolean
    creationts?: Date | string
    fetchData: boolean
  }

  export type stationUncheckedCreateWithoutStatisticInput = {
    id?: string
    name: string
    eva: number
    ds100: string
    db: boolean
    creationts?: Date | string
    fetchData: boolean
  }

  export type stationCreateOrConnectWithoutStatisticInput = {
    where: stationWhereUniqueInput
    create: XOR<stationCreateWithoutStatisticInput, stationUncheckedCreateWithoutStatisticInput>
  }

  export type statisticDataUpdateManyInput = {
    where: statisticDataWhereInput
    data: statisticDataUpdateInput
  }

  export type statisticDataDeleteManyInput = {
    where: statisticDataWhereInput
  }

  export type stationUpsertWithoutStatisticInput = {
    update: XOR<stationUpdateWithoutStatisticInput, stationUncheckedUpdateWithoutStatisticInput>
    create: XOR<stationCreateWithoutStatisticInput, stationUncheckedCreateWithoutStatisticInput>
    where?: stationWhereInput
  }

  export type stationUpdateToOneWithWhereWithoutStatisticInput = {
    where?: stationWhereInput
    data: XOR<stationUpdateWithoutStatisticInput, stationUncheckedUpdateWithoutStatisticInput>
  }

  export type stationUpdateWithoutStatisticInput = {
    name?: StringFieldUpdateOperationsInput | string
    eva?: IntFieldUpdateOperationsInput | number
    ds100?: StringFieldUpdateOperationsInput | string
    db?: BoolFieldUpdateOperationsInput | boolean
    creationts?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchData?: BoolFieldUpdateOperationsInput | boolean
  }

  export type stationUncheckedUpdateWithoutStatisticInput = {
    name?: StringFieldUpdateOperationsInput | string
    eva?: IntFieldUpdateOperationsInput | number
    ds100?: StringFieldUpdateOperationsInput | string
    db?: BoolFieldUpdateOperationsInput | boolean
    creationts?: DateTimeFieldUpdateOperationsInput | Date | string
    fetchData?: BoolFieldUpdateOperationsInput | boolean
  }

  export type stopMetaDataUpdateInput = {
    ds100?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    eva?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stopJourneyDataUpdateInput = {
    type?: EnumtrainTypeFieldUpdateOperationsInput | $Enums.trainType
    no?: IntFieldUpdateOperationsInput | number
    line?: IntFieldUpdateOperationsInput | number
    flag?: EnumtrainFlagFieldUpdateOperationsInput | $Enums.trainFlag
    origin?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
  }

  export type stopStopDataUpdateInput = {
    prev_station?: StringFieldUpdateOperationsInput | string
    next_station?: StringFieldUpdateOperationsInput | string
    arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    departure?: DateTimeFieldUpdateOperationsInput | Date | string
    platform?: StringFieldUpdateOperationsInput | string
  }

  export type EnumtrainTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.trainType | EnumtrainTypeFieldRefInput<$PrismaModel>
    in?: $Enums.trainType[] | ListEnumtrainTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.trainType[] | ListEnumtrainTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtrainTypeFilter<$PrismaModel> | $Enums.trainType
  }

  export type EnumtrainFlagFilter<$PrismaModel = never> = {
    equals?: $Enums.trainFlag | EnumtrainFlagFieldRefInput<$PrismaModel>
    in?: $Enums.trainFlag[] | ListEnumtrainFlagFieldRefInput<$PrismaModel>
    notIn?: $Enums.trainFlag[] | ListEnumtrainFlagFieldRefInput<$PrismaModel>
    not?: NestedEnumtrainFlagFilter<$PrismaModel> | $Enums.trainFlag
  }

  export type statisticCreateManyStationInput = {
    id?: string
    insertedStops?: XOR<statisticDataListCreateEnvelopeInput, statisticDataCreateInput> | statisticDataCreateInput[]
  }

  export type statisticUpdateWithoutStationInput = {
    insertedStops?: XOR<statisticDataListUpdateEnvelopeInput, statisticDataCreateInput> | statisticDataCreateInput[]
  }

  export type statisticUncheckedUpdateWithoutStationInput = {
    insertedStops?: XOR<statisticDataListUpdateEnvelopeInput, statisticDataCreateInput> | statisticDataCreateInput[]
  }

  export type statisticUncheckedUpdateManyWithoutStationInput = {
    insertedStops?: XOR<statisticDataListUpdateEnvelopeInput, statisticDataCreateInput> | statisticDataCreateInput[]
  }

  export type statisticDataUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    hour?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
  }

  export type EnumtrainTypeFieldUpdateOperationsInput = {
    set?: $Enums.trainType
  }

  export type EnumtrainFlagFieldUpdateOperationsInput = {
    set?: $Enums.trainFlag
  }

  export type NestedEnumtrainTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.trainType | EnumtrainTypeFieldRefInput<$PrismaModel>
    in?: $Enums.trainType[] | ListEnumtrainTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.trainType[] | ListEnumtrainTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumtrainTypeFilter<$PrismaModel> | $Enums.trainType
  }

  export type NestedEnumtrainFlagFilter<$PrismaModel = never> = {
    equals?: $Enums.trainFlag | EnumtrainFlagFieldRefInput<$PrismaModel>
    in?: $Enums.trainFlag[] | ListEnumtrainFlagFieldRefInput<$PrismaModel>
    notIn?: $Enums.trainFlag[] | ListEnumtrainFlagFieldRefInput<$PrismaModel>
    not?: NestedEnumtrainFlagFilter<$PrismaModel> | $Enums.trainFlag
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use stopMetaDataDefaultArgs instead
     */
    export type stopMetaDataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = stopMetaDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use stopJourneyDataDefaultArgs instead
     */
    export type stopJourneyDataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = stopJourneyDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use stopStopDataDefaultArgs instead
     */
    export type stopStopDataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = stopStopDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use statisticDataDefaultArgs instead
     */
    export type statisticDataArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = statisticDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use stationDefaultArgs instead
     */
    export type stationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = stationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use statisticDefaultArgs instead
     */
    export type statisticArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = statisticDefaultArgs<ExtArgs>
    /**
     * @deprecated Use stopDefaultArgs instead
     */
    export type stopArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = stopDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}