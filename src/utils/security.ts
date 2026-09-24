import DisableDevtool from 'disable-devtool';

/**
 * Initializes client-side DevTools deterrence for production environment.
 * Handles keyboard shortcuts (F12, Ctrl+Shift+I/J/C), right-click menu,
 * and DevTools window detection while maintaining normal page usability.
 */
export function initSecurityDeterrence() {
  if (import.meta.env.PROD) {
    DisableDevtool({
      ondevtoolopen: (_type: any, next: () => void) => {
        alert("You can not access Developer Tools, if there is any problem direclty email to harshitlarenc@gmail.com");
        next();
      },
      disableMenu: true,
      disableSelect: false,
      disableCopy: false,
      disableCut: false,
      disablePaste: false,
      clearIntervalWhenDevOpenTrigger: false,
      url: '',
      timeOutUrl: ''
    });
  }
}
