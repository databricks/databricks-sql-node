import fs from 'fs';
import path from 'path';
import os from 'os';

const productName = 'NodejsDatabricksSqlConnector';

function getPackageVersion(): string {
  try {
    const json = JSON.parse(fs.readFileSync(path.join(__dirname, '../../package.json')).toString());
    return json.version;
  } catch (ex) {
    return '1.0.0';
  }
}

function getNodeVersion(): string {
  return `Node.js ${process.versions.node}`;
}

function getOperatingSystemVersion(): string {
  return `${os.type()} ${os.release()}`;
}

export default function buildUserAgentString(clientId?: string): string {
  const extra = [clientId, getNodeVersion(), getOperatingSystemVersion()].filter(Boolean);
  return `${productName}/${getPackageVersion()} (${extra.join('; ')})`;
}
