#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SampleStack } from '../lib/stacks/sample-stack';

const app = new cdk.App();
new SampleStack(app, 'SampleStack', {});
