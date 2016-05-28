function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var j, k = 0;
  arr = [];
  for (j = 0; j < collection_a.length; j++) {
    if (collection_b.indexOf(collection_a[j]) != -1) {
      arr[k] = collection_a[j];
      k++;
    }
  }
  return arr;
}
module.exports = collect_same_elements;
