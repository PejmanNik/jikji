/* eslint-disable jsx-a11y/alt-text */
import useLayoutSuspension from 'components/useLayoutSuspension';
import log from 'core/log';
import {ComponentProps, ReactEventHandler, useCallback} from 'react';

type EventHandler = ReactEventHandler<HTMLImageElement>;


function Image({onLoad, onError, ...props}: ComponentProps<'img'>) {
  const {release} = useLayoutSuspension(`IMG_${props.src}`);

  const handleLoad = useCallback<EventHandler>(
    event => {
      onLoad?.(event);
      release();
    },
    [onLoad, release],
  );

  const handleError = useCallback<EventHandler>(
    event => {
      onError?.(event);
      release();
      log.error(`Image load failed: ${props.src}`);
    },
    [onError, props.src, release],
  );

  return <img {...props} onLoad={handleLoad} onError={handleError} />;
}

export default Image;
