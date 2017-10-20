// https://github.com/mobxjs/mobx-react/issues/256#issuecomment-335301953

import {ObjectDiff} from 'typelevel-ts';
import * as React from 'react';

export type TypedInject<Stores> = <StoreKeyToInject extends keyof Stores>(
  ...storeKeysToInject: StoreKeyToInject[]
) => <ExpectedProps extends Pick<Stores, StoreKeyToInject>>(
  component: React.ComponentType<ExpectedProps>
) => React.ComponentType<ObjectDiff<ExpectedProps, Pick<Stores, StoreKeyToInject>>>;