self.onmessage = (event) => {
  const { secconds } = event.data;
  if (secconds === 0) {
    close();
    return;
  }
  setInterval(() => {
    postMessage(countSecconds(secconds));
  }, 1000);
};

const countSecconds = (secconds) => {
  return secconds - 1;
};
