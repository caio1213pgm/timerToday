// let isRunning = false;

self.onmessage = (event) => {
  const { secondsRemaining } = event.data;
  setTimeout(() => {
    postMessage({ secondsRemaining: secondsRemaining - 1 });
  }, 1000);
};
