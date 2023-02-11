// Import the app's package.json
import appPackage from "../package.json";

// The application version string, pulled from package.json
const version = appPackage.version;

// Make this the default export
export default version;

/**
 * Return the version numbers of all dependencies, including the Tempo app itself.
 * @public
 */
export const allDependenciesWithSelf = {
  version: version,
};
