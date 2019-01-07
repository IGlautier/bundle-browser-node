import _ from "lodash";

function test() {
  const x = _.random(0, 100);
  return x;
}

export default {
  test,
};
export {
  test,
};
