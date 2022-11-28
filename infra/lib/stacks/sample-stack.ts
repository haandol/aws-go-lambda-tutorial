import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as go from '@aws-cdk/aws-lambda-go-alpha';

export class SampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const fn = new go.GoFunction(this, 'GoFunction', {
      entry: 'lib/functions/cmd/api/main.go',
    });
  }
}
