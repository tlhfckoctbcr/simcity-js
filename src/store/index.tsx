import { createContext } from 'react';
import Tile, { tileTypes } from "../models/Tile";

const grassMap: Tile[][] = [...Array(11)]
    .map((_, x) => [...Array(11)]
        .map((_, y) => new Tile(tileTypes[0], x, y)));

export const initialState = {
  boardMap: grassMap,
  activeTool: 'grass',
};

export const HYDRATE = 'HYDRATE';
export const SELECT_TOOL = 'SELECT_TOOL';

export const Reducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
      }
    case SELECT_TOOL:
      return {
        ...state,
        activeTool: action.payload,
      }
  }
};

export const Context = createContext(initialState);
