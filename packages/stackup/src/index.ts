import * as parser from '@tracespace/parser'
import * as core from '@tracespace/core'

import type {GerberTree} from '@tracespace/parser'

import type {ReadResult,ReadyLayer,Layer} from '@tracespace/core'

export interface RenderOptions {
  color: {
    [key: string]: string
  }
}

const defaultOptions: RenderOptions = {
  color: {
    cf:"#c93",
    cu:"#ccc",
    fr4:"#666",
    out:"#000",
    sm:"#004200bf",
    sp:"#999",
    ss:"#fff",
  },
}

export function pcbStackUp(notParsedLayers: ReadyLayer[],options:RenderOptions) {
  const { color } = options;
  const usedColors = color ?? defaultOptions.color;

  const parsedLayers = notParsedLayers.map((el:ReadyLayer)=>{
    const parseTree = parser.parse(el.gerber)
    return {
      ...el,
      parseTree
    }
  });

  const parseTreesById: Record<string, GerberTree> = {}

  for (const {id, filename, parseTree} of parsedLayers) {
    parseTreesById[id] = parseTree
  }

  const readResults:ReadResult = {
    layers: parsedLayers,
    parseTreesById
  };

  const plotResults = core.plot(readResults);
  const renderLayersResult = core.renderLayers(plotResults);
  const layers = renderLayersResult.layers.map((el:Layer) => {
    const rendered = renderLayersResult.rendersById[el.id];
    const color:string|undefined = notParsedLayers.find((el:ReadyLayer) => el.id === el.id)?.color;
    return {
      ...el,
      ...rendered,
      color,
    }
  });
  const {top, bottom} = core.renderBoard(renderLayersResult,usedColors);
  const fragments = core.renderFragments(plotResults);

  return {
    plotResults,
    stringifySvg:core.stringifySvg,
    top,
    bottom,
    color: usedColors,
    layers,
    fragments
  }
}