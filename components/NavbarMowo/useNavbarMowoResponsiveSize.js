/**********************************************************************
 *
 *   Responsiveness hook generated by Quest
 *
 *   Responsive Logic for the component goes in this hook
 *   If you want to customize the min/max values for the breakpoints, open the component on Quest Editor.
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';

const useNavbarMowoResponsiveSize = () => {
  const [variant, setVariant] = React.useState('screendesktop');

  React.useEffect(() => {
    const handlerscreenmobile = (e) =>
      setVariant((size) => (e.matches ? 'screenmobile' : size));

    const screenmobileSize = window.matchMedia('(max-width: 572px)');
    setVariant((size) => (screenmobileSize.matches ? 'screenmobile' : size));
    screenmobileSize.addEventListener('change', handlerscreenmobile);

    const handlerscreentablet = (e) =>
      setVariant((size) => (e.matches ? 'screentablet' : size));

    const screentabletSize = window.matchMedia(
      '(min-width: 573px) and (max-width: 1104px)'
    );
    setVariant((size) => (screentabletSize.matches ? 'screentablet' : size));
    screentabletSize.addEventListener('change', handlerscreentablet);

    const handlerscreendesktop = (e) =>
      setVariant((size) => (e.matches ? 'screendesktop' : size));

    const screendesktopSize = window.matchMedia('(min-width: 1105px)');
    setVariant((size) => (screendesktopSize.matches ? 'screendesktop' : size));
    screendesktopSize.addEventListener('change', handlerscreendesktop);
  }, []);

  return variant;
};

export default useNavbarMowoResponsiveSize;