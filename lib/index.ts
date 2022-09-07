import TCLIService from '../thrift/TCLIService';
import TCLIService_types from '../thrift/TCLIService_types';
import DBSQLClient from './DBSQLClient';
import DBSQLSession from './DBSQLSession';
import NoSaslAuthentication from './connection/auth/NoSaslAuthentication';
import PlainHttpAuthentication from './connection/auth/PlainHttpAuthentication';
import HttpConnection from './connection/connections/HttpConnection';
import { formatProgress } from './utils';

export const auth = {
  NoSaslAuthentication,
  PlainHttpAuthentication,
};

export const connections = {
  HttpConnection,
};

export const thrift = {
  TCLIService,
  TCLIService_types,
};

export const utils = {
  formatProgress,
};

export { DBSQLClient, DBSQLSession };
