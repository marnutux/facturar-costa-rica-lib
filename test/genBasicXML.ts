import fs from 'fs'
import genJSON from '../src/lib/genJSON'
import { getClave } from '../src/lib/genClave'
import fe from './input/frontendRequest'
import { FrontEndRequest } from '../src/types/globalInterfaces'

const frontEndRequest: FrontEndRequest = fe

const SOURCE_P12_URI = process.env.SOURCE_P12_URI
const SOURCE_P12_PASSPORT = process.env.SOURCE_P12_PASSPORT
const pem = fs.readFileSync(SOURCE_P12_URI, 'binary')
const clave = getClave(frontEndRequest)

async function main(): Promise<void> {
  const XML = await genJSON(frontEndRequest, clave, {
    buffer: pem,
    password: SOURCE_P12_PASSPORT,
    base64: false
  })
  console.log('XML', XML)
}

main()