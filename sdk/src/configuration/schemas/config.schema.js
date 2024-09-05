import { z } from 'zod';
import { PluginConfigSchema } from '../../plugins/schemas/plugin-config.schema.js';

export const EvidenceConfigSchema = z.object({
	layout: z.string().or(z.literal(false).default(false)).optional(),
	plugins: PluginConfigSchema
});
