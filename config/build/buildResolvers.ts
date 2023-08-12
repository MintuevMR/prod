import webpack from "webpack";

export function buyildResolvers(): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
