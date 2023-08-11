
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


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

false

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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


  const path = require('path')

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
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\lars\\dev\\web\\lehdev\\prisma\\generated\\bahnClient",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.1.1",
  "engineVersion": "6a3747c37ff169c90047725a05a6ef02e32ac97e",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "dataProxy": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/bahnClient",
    "generated/bahnClient",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"station\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"eva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ds100\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"db\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creationts\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fetchData\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statistic\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"statistic\",\"relationName\":\"stationTostatistic\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"statistic\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"station\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"station\",\"relationName\":\"stationTostatistic\",\"relationFromFields\":[\"stationId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"insertedStops\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"statisticData\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"stop\":{\"dbName\":null,\"fields\":[{\"name\":\"db_id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"meta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"stopMetaData\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"journey\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"stopJourneyData\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stop\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"stopStopData\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"trainType\":{\"values\":[{\"name\":\"UNKNOWN\",\"dbName\":null},{\"name\":\"AG\",\"dbName\":null},{\"name\":\"AKN\",\"dbName\":null},{\"name\":\"ALX\",\"dbName\":null},{\"name\":\"AS\",\"dbName\":null},{\"name\":\"AZS\",\"dbName\":null},{\"name\":\"BE\",\"dbName\":null},{\"name\":\"BRB\",\"dbName\":null},{\"name\":\"BUS\",\"dbName\":null},{\"name\":\"BZB\",\"dbName\":null},{\"name\":\"CB\",\"dbName\":null},{\"name\":\"CLR\",\"dbName\":null},{\"name\":\"D\",\"dbName\":null},{\"name\":\"DAB\",\"dbName\":null},{\"name\":\"DWE\",\"dbName\":null},{\"name\":\"EC\",\"dbName\":null},{\"name\":\"ECE\",\"dbName\":null},{\"name\":\"EN\",\"dbName\":null},{\"name\":\"ENO\",\"dbName\":null},{\"name\":\"ERX\",\"dbName\":null},{\"name\":\"ES\",\"dbName\":null},{\"name\":\"EVB\",\"dbName\":null},{\"name\":\"EX\",\"dbName\":null},{\"name\":\"FEX\",\"dbName\":null},{\"name\":\"FLX\",\"dbName\":null},{\"name\":\"HLB\",\"dbName\":null},{\"name\":\"HSB\",\"dbName\":null},{\"name\":\"IC\",\"dbName\":null},{\"name\":\"ICE\",\"dbName\":null},{\"name\":\"IR\",\"dbName\":null},{\"name\":\"IRE\",\"dbName\":null},{\"name\":\"KD\",\"dbName\":null},{\"name\":\"MBB\",\"dbName\":null},{\"name\":\"ME\",\"dbName\":null},{\"name\":\"MEX\",\"dbName\":null},{\"name\":\"N\",\"dbName\":null},{\"name\":\"NBE\",\"dbName\":null},{\"name\":\"NEG\",\"dbName\":null},{\"name\":\"NJ\",\"dbName\":null},{\"name\":\"NWB\",\"dbName\":null},{\"name\":\"OPB\",\"dbName\":null},{\"name\":\"OS\",\"dbName\":null},{\"name\":\"P\",\"dbName\":null},{\"name\":\"PRE\",\"dbName\":null},{\"name\":\"R\",\"dbName\":null},{\"name\":\"RB\",\"dbName\":null},{\"name\":\"RE\",\"dbName\":null},{\"name\":\"REX\",\"dbName\":null},{\"name\":\"RJ\",\"dbName\":null},{\"name\":\"RJX\",\"dbName\":null},{\"name\":\"RRB\",\"dbName\":null},{\"name\":\"RT\",\"dbName\":null},{\"name\":\"RTB\",\"dbName\":null},{\"name\":\"S\",\"dbName\":null},{\"name\":\"SAB\",\"dbName\":null},{\"name\":\"SBB\",\"dbName\":null},{\"name\":\"SDG\",\"dbName\":null},{\"name\":\"SOE\",\"dbName\":null},{\"name\":\"STB\",\"dbName\":null},{\"name\":\"STN\",\"dbName\":null},{\"name\":\"SWE\",\"dbName\":null},{\"name\":\"TGV\",\"dbName\":null},{\"name\":\"THA\",\"dbName\":null},{\"name\":\"TL\",\"dbName\":null},{\"name\":\"TLX\",\"dbName\":null},{\"name\":\"TRI\",\"dbName\":null},{\"name\":\"UEX\",\"dbName\":null},{\"name\":\"VBG\",\"dbName\":null},{\"name\":\"VEN\",\"dbName\":null},{\"name\":\"VIA\",\"dbName\":null},{\"name\":\"WB\",\"dbName\":null},{\"name\":\"WBA\",\"dbName\":null},{\"name\":\"WEG\",\"dbName\":null},{\"name\":\"WFB\",\"dbName\":null}],\"dbName\":null},\"trainFlag\":{\"values\":[{\"name\":\"F\",\"dbName\":null},{\"name\":\"N\",\"dbName\":null},{\"name\":\"D\",\"dbName\":null},{\"name\":\"S\",\"dbName\":null},{\"name\":\"UNKNOWN\",\"dbName\":null}],\"dbName\":null}},\"types\":{\"stopMetaData\":{\"dbName\":null,\"fields\":[{\"name\":\"ds100\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\"},{\"name\":\"eva\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\"},{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\"}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]},\"stopJourneyData\":{\"dbName\":null,\"fields\":[{\"name\":\"type\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"trainType\"},{\"name\":\"no\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\"},{\"name\":\"line\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\"},{\"name\":\"flag\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"trainFlag\"},{\"name\":\"origin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\"},{\"name\":\"destination\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\"}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]},\"stopStopData\":{\"dbName\":null,\"fields\":[{\"name\":\"prev_station\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\"},{\"name\":\"next_station\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\"},{\"name\":\"arrival\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\"},{\"name\":\"departure\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\"},{\"name\":\"platform\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\"}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]},\"statisticData\":{\"dbName\":null,\"fields\":[{\"name\":\"date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\"},{\"name\":\"hour\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\"},{\"name\":\"count\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\"}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[]}}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)





const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/generated/bahnClient/query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/bahnClient/schema.prisma")
