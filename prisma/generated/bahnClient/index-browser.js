
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.1.1
 * Query Engine version: 6a3747c37ff169c90047725a05a6ef02e32ac97e
 */
Prisma.prismaVersion = {
  client: "5.1.1",
  engine: "6a3747c37ff169c90047725a05a6ef02e32ac97e"
}


const runtimeDescription = (() => {
  // https://edge-runtime.vercel.app/features/available-apis#addressing-the-runtime
  if ("EdgeRuntime" in globalThis && typeof globalThis.EdgeRuntime === "string") {
    return "under the Vercel Edge Runtime";
  }
  // Deno
  if ("Deno" in globalThis && typeof globalThis.Deno === "object") {
    return "under the Deno runtime";
  }
  // Default to assuming browser
  return "in the browser";
})();


Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.StationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  eva: 'eva',
  ds100: 'ds100',
  db: 'db',
  creationts: 'creationts',
  fetchData: 'fetchData'
};

exports.Prisma.StatisticScalarFieldEnum = {
  id: 'id',
  stationId: 'stationId'
};

exports.Prisma.StopScalarFieldEnum = {
  db_id: 'db_id',
  id: 'id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.trainType = exports.$Enums.trainType = {
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

exports.trainFlag = exports.$Enums.trainFlag = {
  F: 'F',
  N: 'N',
  D: 'D',
  S: 'S',
  UNKNOWN: 'UNKNOWN'
};

exports.Prisma.ModelName = {
  station: 'station',
  statistic: 'statistic',
  stop: 'stop'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
