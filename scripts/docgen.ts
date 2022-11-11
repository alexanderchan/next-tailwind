import path from 'path'
import fs from 'fs-extra'
import { generateDeclarations } from './docgen/generate-declarations'
import { DeclarationPath } from './docgen/get-declarations-list'

const PATHS: DeclarationPath[] = [
  {
    type: 'package',
    path: path.join(__dirname, '../src/components'),
  },
  // {
  //   type: 'package',
  //   path: path.join(__dirname, '../../../packages/web/core'),
  // },
]

fs.ensureDirSync(path.join(__dirname, '../.docgen'))
fs.writeJSONSync(
  path.join(__dirname, '../.docgen/docgen.json'),
  generateDeclarations(PATHS),
  {
    spaces: 2,
  }
)
