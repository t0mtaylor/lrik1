
export default function getData(path) {
  if (path.length > 1) {
    return fetch(path).then(res => res.json());
  } else {
    return 'no argument provided'
  }
}
