const withTM = require("next-transpile-modules")([
  "@beamery/lib-ds-components",
  "@beamery/lib-ds-theme",
  "@beamery/lib-ds-icons",
]);

module.exports = withTM({
  // reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
});
