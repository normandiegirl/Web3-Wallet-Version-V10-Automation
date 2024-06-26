/*
NOTICE:
This Snow + LavaMoat scuttling integration is currently being used
with an experimental API (https://github.com/LavaMoat/LavaMoat/pull/4625).
*/

// eslint-disable-next-line import/unambiguous
(function () {
  const log = console.bind(console);
  // eslint-disable-next-line no-undef
  const isWorker = !self.document;
  const msg =
    'Snow detected a new realm creation attempt in MetaMask. Performing scuttling on new realm.';
  // eslint-disable-next-line undef
  Object.defineProperty(self, 'SCUTTLER', {
    value: (realm, scuttle) => {
      if (isWorker) {
        scuttle(realm);
      } else {
        // eslint-disable-next-line no-undef
        self.SNOW((win) => {
          log(msg, win);
          scuttle(win);
        }, realm);
      }
    },
  });
})();
