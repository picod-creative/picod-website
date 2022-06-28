import { ReactNode, RefObject, useEffect, useRef } from 'react';

export interface InViewProps<T extends Element = Element> {
  targetRef: RefObject<T>;
  children: ReactNode;
  threshold?: number;
  onEnter?: () => void;
  onLeave?: () => void;
}

function InView<T extends Element = Element>({
  targetRef: ref,
  children,
  onEnter,
  onLeave,
  threshold = 50,
}: InViewProps<T>): JSX.Element {
  const isInView = useRef<boolean>(false);

  useEffect(() => {
    const onScroll: (this: Document, event: Event) => void = function (e) {
      if (ref?.current) {
        const { y, height } = ref.current.getBoundingClientRect();

        if (y <= threshold && y > threshold - height) {
          if (!isInView.current) {
            isInView.current = true;
            onEnter?.();
          }
        } else {
          if (isInView.current) {
            isInView.current = false;
            onLeave?.();
          }
        }
      }
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [children, onEnter, onLeave, ref, threshold]);

  return <>{children}</>;
}

export default InView;
