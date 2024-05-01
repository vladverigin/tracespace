import * as parser from '@tracespace/parser'
import * as core from '@tracespace/core'

import type {GerberTree} from '@tracespace/parser'

import type {GerberSide, GerberType} from '@tracespace/identify-layers'
import type {ReadResult} from '@tracespace/core'

export interface RenderOptions {
  color: {
    [key: string]: string
  }
}

export interface Layer {
  id: string
  filename: string
  type: GerberType | undefined
  side: GerberSide | undefined
}

export interface ReadyLayer extends Layer {
  color: string
  path: string
  gerber:string
}

const defaultOptions: RenderOptions = {
  color: {
    cf:"#cc9933",
    cu:"#cccccc",
    fr4:"#666666",
    out:"#000000",
    sm:"#004200bf",
    sp:"#999999",
    ss:"#ffffff",
  },
}

export function pcbStackUp(notParsedLayers: ReadyLayer[],options:RenderOptions) {
  const { color } = options;

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
  const {top, bottom} = core.renderBoard(renderLayersResult,color ?? defaultOptions.color);
  const fragments = core.renderFragments(plotResults);

  return {
    plotResults,
    stringifySvg:core.stringifySvg,
    top,
    bottom,
    color: color ?? defaultOptions.color,
    layers,
    fragments
  }
}