import BaseCommand from './BaseCommand';
import { Status, SessionHandle, OperationHandle } from '../Types';
import TCLIService_types from '../../../thrift/TCLIService_types';

export type GetTablesRequest = {
  sessionHandle: SessionHandle;
  catalogName?: string;
  schemaName?: string;
  tableName?: string;
  tableTypes?: Array<string>;
};

export type GetTablesResponse = {
  status: Status;
  operationHandle: OperationHandle;
};

export default class GetTablesCommand extends BaseCommand {
  execute(data: GetTablesRequest): Promise<GetTablesResponse> {
    const request = new TCLIService_types.TGetTablesReq(data);

    return this.executeCommand<GetTablesResponse>(request, this.client.GetTables);
  }
}
