/**
 * Native scrollTo with promise support for better async/await usage
 * @param options Options passed to the scrollTo function
 */
export function scrollTo(options: ScrollToOptions): Promise<void> {
  return new Promise((res, _) => {
    const onScroll: (this: Window, ev: Event) => any = function () {
      if (this.scrollY.toFixed() === options.top?.toFixed()) {
        // Scroll is completed, resolve the promise
        this.removeEventListener('scroll', onScroll);
        res();
      }
    };
    window.addEventListener('scroll', onScroll);
    window.scrollTo(options);
  });
}
