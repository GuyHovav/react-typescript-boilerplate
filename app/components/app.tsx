/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import { incrementCounter, decrementCounter, addCounter, removeCounter } from '../actions';
import { CounterList } from './counter_list';

interface IAppState {
  counters: number[];
}

interface IAppProps {
  dispatch?: (func: any) => void;
  counters?: number[];
}

const mapStateToProps:MapStateToProps =(state: { counters: number[] }): IAppState =>{
  return {
    counters: state.counters,
  };
}

@connect(mapStateToProps)
export class App extends React.Component<IAppProps, {}> {
  public render(): React.ReactElement<{}> {
    const { dispatch, counters }: any = this.props;

    return (<div>
        <CounterList counters={counters}
                     increment={(index: number) => dispatch(incrementCounter(index))}
                     decrement={(index: number) => dispatch(decrementCounter(index))}
        />

        <button onClick={() => dispatch(addCounter())}>Add Counter</button>
        <button onClick={() => dispatch(removeCounter())}>Remove Counter</button>
      </div>
    );
  }
}
