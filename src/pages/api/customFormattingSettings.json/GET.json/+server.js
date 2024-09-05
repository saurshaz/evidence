export const prerender = false;

/**
 * Re-exported beacuse ../+server.js has routes that can't be prerendered
 */
export { GET } from '../+server.js';
