// function formatString(string, maxLength = 40)

const formatString = function (string, maxLength) {
  let dots = "...";
  string =
    string.length > maxLength
      ? string.slice(0, maxLength).concat(dots)
      : string;
  //   string =
  //     string.length > maxLength ? `${string.slice(0, maxLength)}...` : string;

  return string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non.", 40));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 40)
);
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30)
);
// 'Vestibulum facilisis, purus ne...'
