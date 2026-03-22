import { type SchemaTypeDefinition } from 'sanity'

import campaign from './campaign'
import story from './story'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [campaign, story],
}
