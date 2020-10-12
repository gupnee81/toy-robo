import * as Redux from 'redux';
import { report } from '../reducers';

export const store = Redux.createStore(report);
