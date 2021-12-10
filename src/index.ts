let handle: NodeJS.Timeout;
const detect = () => {
  console.log('detect', new Date());
  if (handle) {
    clearTimeout(handle);
  }
  handle = setTimeout(() => detect(), 10000);
};

detect();
