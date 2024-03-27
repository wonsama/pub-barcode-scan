export default function tailwind({ src, width, quality }) {
  // https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600
  return `https://tailwindui.com/img/logos/${src}?color=indigo&shade=600`;
  // return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
}
