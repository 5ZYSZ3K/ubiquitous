// eslint-disable-next-line @typescript-eslint/no-require-imports
const { getDefaultConfig } = require('expo/metro-config');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// Watch the monorepo root so Metro picks up workspace package changes
config.watchFolders = [...(config.watchFolders ?? []), monorepoRoot];

// Resolve modules from the app's node_modules first, then the monorepo root.
// This ensures react-native@0.79.3 (web-app) is used instead of @0.84.1 (root).
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules')
];

module.exports = config;
