import BaseCommand from './BaseCommand';
import { TCloseOperationReq, TCloseOperationResp } from '../../../thrift/TCLIService_types';
import TCLIService from '../../../thrift/TCLIService';

type Client = Pick<TCLIService.Client, 'CloseOperation'>;

export default class CloseOperationCommand extends BaseCommand<Client> {
  execute(data: TCloseOperationReq): Promise<TCloseOperationResp> {
    const request = new TCloseOperationReq(data);

    return this.executeCommand<TCloseOperationResp>(request, this.client.CloseOperation);
  }
}
