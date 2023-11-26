import path from "path";

let requireSVGs = require.context("./svg", false, /\.svg$/);

if (module.hot) {
  module.hot.accept(requireSVGs.id as string, () => {
    requireSVGs = require.context("./svg", false, /\.svg$/);
  });
}

const SVGs = Object.fromEntries(
  requireSVGs.keys().map((filename) => {
    const name = path.parse(filename).name;
    console.log(name, requireSVGs(filename));
    return [name, requireSVGs(filename).default];
  }),
);

interface Props {
  name: string;
  className?: string;
  color?: string;
  id?: string;
}

export default function SVG({ name, className, color, id, ...props }: Props) {
  const SVG = SVGs[name];
  if (!SVG) return <></>;

  return (
    <SVG
      className={`SVG SVG-${name} ${className}`}
      style={{ color }}
      id={id ?? name}
      {...props}
    />
  );
}
