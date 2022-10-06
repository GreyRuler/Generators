export default function canIterator(obj) {
  return (obj ?? false) ? !!obj[Symbol.iterator] : false;
}
