setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/  ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-  ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);
// Need to escape the backslash, since it's a special character and we only need it for its shape

setTimeout(() => {
  process.stdout.write('\r|   ')
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r- ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\  ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   \n')
}, 1700);

// output: clockwise spinning line, a simple loading-screen spinner