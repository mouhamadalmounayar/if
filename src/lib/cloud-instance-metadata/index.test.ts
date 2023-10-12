import {describe, expect, jest, test} from '@jest/globals';
import {CloudInstanceMetadataModel} from './index';

jest.setTimeout(30000);

describe('ccf:configure test', () => {
  test('initialize and test', async () => {
    const model = await new CloudInstanceMetadataModel().configure('ccf', {});
    expect(model).toBeInstanceOf(CloudInstanceMetadataModel);
    await expect(
      model.calculate([
        {
          'cloud-instance-type': 't2.micro',
          'cloud-vendor': 'aws',
        },
      ])
    ).resolves.toStrictEqual(
      expect.arrayContaining([
        {
          'cloud-instance-type': 't2.micro',
          'cloud-vendor': 'aws',
          'physical-processor': 'Intel Xeon E5-2676 v3',
          'vcpus-allocated': '1',
          'vcpus-total': '48',
        },
      ])
    );
    await expect(
      model.calculate([
        {
          'cloud-instance-type': 't2.micro',
          'cloud-vendor': 'aws2',
        },
      ])
    ).rejects.toThrowError('cloud-vendor: Only `aws` is currently supported');
    await expect(
      model.calculate([
        {
          'cloud-instance-type': 't2.micro2',
          'cloud-vendor': 'aws',
        },
      ])
    ).rejects.toThrowError(
      'cloud-instance-type: t2.micro2 is not supported in vendor: aws'
    );
  });
});
