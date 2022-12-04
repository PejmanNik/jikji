import useLayoutSuspension from 'components/useLayoutSuspension';
import {ComponentProps, ReactEventHandler, useCallback} from 'react';

type EventHandler = ReactEventHandler<HTMLImageElement>;

function Image({onLoad, ...props}: ComponentProps<'img'>) {
  const {release} = useLayoutSuspension(`IMG_${props.src}`);

  const handleLoad = useCallback<EventHandler>(
    event => {
      onLoad?.(event);
      release();
    },
    [onLoad, release],
  );

  // eslint-disable-next-line jsx-a11y/alt-text
  return <img {...props} onLoad={handleLoad} />;
}

export default Image;
