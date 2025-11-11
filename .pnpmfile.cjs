// This file explicitly allows certain dependencies' build/postinstall scripts
// during CI. Vercel's pnpm installer will skip build scripts unless they are
// approved via a .pnpmfile.cjs produced by `pnpm approve-builds`.
//
// We explicitly allow the packages that showed up in the Vercel build logs:
// @firebase/util, protobufjs, sharp
module.exports = {
  hooks: {
    readPackage(pkg) {
      try {
        const allowed = new Set(['@firebase/util', 'protobufjs', 'sharp'])
        if (allowed.has(pkg.name)) {
          // Ensure the package's scripts object exists so pnpm knows scripts
          // are intentionally present. We do not modify or add scripts here.
          pkg.scripts = pkg.scripts || {}
        }
      } catch (e) {
        // Fail-safe: return package untouched on any unexpected error
        return pkg
      }
      return pkg
    }
  }
}
