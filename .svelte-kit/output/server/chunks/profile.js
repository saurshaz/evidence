function profile(f, ...args) {
  return f.call(this, ...args);
}
export {
  profile as p
};
