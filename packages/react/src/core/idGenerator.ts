function* idGenerator(): Generator<number, number, number> {
  let i = 0;
  while (true) yield i++;
}

export default idGenerator;
