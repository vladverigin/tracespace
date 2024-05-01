<div align="center">
  <h1>tracespace Fork</h1>
  <p>Printed circuit board visualization tools for JavaScript</p>
  <p>
    <a title="CI Status" href="https://github.com/tracespace/tracespace/actions"><img src="https://img.shields.io/github/actions/workflow/status/tracespace/tracespace/ci.yml?branch=v5&style=flat-square"></a>
    <a title="Code Coverage" href="https://codecov.io/gh/tracespace/tracespace/branch/v5"><img src="https://img.shields.io/codecov/c/github/tracespace/tracespace/v5?style=flat-square"></a>
    <a title="License" href="https://github.com/tracespace/tracespace/blob/main/LICENSE"><img src="https://img.shields.io/github/license/tracespace/tracespace?style=flat-square"></a>
    <a title="Chat room" href="https://gitter.im/tracespace/Lobby"><img src="https://img.shields.io/gitter/room/tracespace/tracespace?style=flat-square"></a>
  </p>
  <p>
    <a href="https://tracespace.io">https://tracespace.io</a>
  </p>
</div>

[main branch]: https://github.com/tracespace/tracespace/tree/main

## Fork related
The main goal is to create code to replace the old pcb-stackup 4 package release due to a problem with outline rendering

## To build instructions
We only use the core package([@tracespace/core][]  ) with a set of dependencies [@tracespace/plotter][], [@tracespace/parser][], [@tracespace/renderer][], etc.
- Install pnpm from [pnpm site]
- Install packages ```pnpm install```
- Run ```npm run build:packages``` in root dir
- Results will be found in core package dist dir ```.\dist```


## Original Packages

| package                                             |                                 | description                                                                                 |
| --------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------- |
| [![cli version][]][cli npm]                         | [@tracespace/cli][]             | Use Gerber/drill files to create an SVG render of a finished PCB from the command line.     |
| [![core version][]][core npm]                       | [@tracespace/core][]            | Use Gerber/drill files to create an SVG render of a finished PCB in Node.js or the browser. |
| [![fixtures version][]][fixtures npm]               | [@tracespace/fixtures][]        | Sample Gerber/drill files for use as test fixtures.                                         |
| [![identify-layers version][]][identify-layers npm] | [@tracespace/identify-layers][] | Try to guess Gerber files' layer types based on filenames.                                  |
| [![parser version][]][parser npm]                   | [@tracespace/parser][]          | Parse Gerber/drill files into abstract syntax trees.                                        |
| [![plotter version][]][plotter npm]                 | [@tracespace/plotter][]         | Plot @tracespace/parser ASTs into image trees.                                              |
| [![renderer version][]][renderer npm]               | [@tracespace/renderer][]        | Render @tracespace/plotter image trees as SVGs                                              |
| [![xml-id version][]][xml-id npm]                   | [@tracespace/xml-id][]          | XML element ID generation and sanitation utilities.                                         |

[@tracespace/cli]: ./packages/cli
[@tracespace/core]: ./packages/parser
[@tracespace/fixtures]: ./packages/fixtures
[@tracespace/identify-layers]: ./packages/identify-layers
[@tracespace/parser]: ./packages/parser
[@tracespace/plotter]: ./packages/plotter
[@tracespace/renderer]: ./packages/renderer
[@tracespace/xml-id]: ./packages/xml-id
[cli npm]: https://www.npmjs.com/package/@tracespace/cli/v/next
[core npm]: https://www.npmjs.com/package/@tracespace/core/v/next
[fixtures npm]: https://www.npmjs.com/package/@tracespace/fixtures/v/next
[identify-layers npm]: https://www.npmjs.com/package/@tracespace/identify-layers/v/next
[parser npm]: https://www.npmjs.com/package/@tracespace/parser/v/next
[plotter npm]: https://www.npmjs.com/package/@tracespace/plotter/v/next
[renderer npm]: https://www.npmjs.com/package/@tracespace/renderer/v/next
[xml-id npm]: https://www.npmjs.com/package/@tracespace/xml-id/v/next
[cli version]: https://img.shields.io/npm/v/@tracespace/cli/next?style=flat-square
[core version]: https://img.shields.io/npm/v/@tracespace/core/next?style=flat-square
[fixtures version]: https://img.shields.io/npm/v/@tracespace/fixtures/next?style=flat-square
[identify-layers version]: https://img.shields.io/npm/v/@tracespace/identify-layers/next?style=flat-square
[parser version]: https://img.shields.io/npm/v/@tracespace/parser/next?style=flat-square
[plotter version]: https://img.shields.io/npm/v/@tracespace/plotter/next?style=flat-square
[renderer version]: https://img.shields.io/npm/v/@tracespace/renderer/next?style=flat-square
[xml-id version]: https://img.shields.io/npm/v/@tracespace/xml-id/next?style=flat-square

## tracespace in the wild

- [tracespace.io/view][tracespace-view] - A Gerber viewer powered by the tracespace libraries
- [kitspace.org][kitspace] - An electronics project sharing site with links to easily buy the required parts
- [OpenHardware.io][openhardware] - A social site around open source hardware. Enables authors to sell and manufacture their boards.

[tracespace-view]: https://tracespace.io/view
[kitspace]: https://kitspace.org
[openhardware]: https://www.openhardware.io
[pnpm site]: https://pnpm.io/installation
