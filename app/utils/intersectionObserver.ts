export type ITargetObserverCb = (
 entry: IntersectionObserverEntry,
 observer: IntersectionObserver
) => void;
const createIntersectionObserve = (
 observerOptions: IntersectionObserverInit
) => {
 let observerSubscribers: {
  target: Element;
  callBack: ITargetObserverCb;
 }[] = [];

 const addSubscriber = (target: Element, callBack: ITargetObserverCb) => {
  observerSubscribers.push({ target, callBack });
  intersectionObserver.observe(target);
 };

 const removeSubscriber = (target: Element, callBack: ITargetObserverCb) => {
  observerSubscribers = observerSubscribers.filter((subscriber) => {
   if (subscriber.target == target) {
    return callBack
     ? () => {
        intersectionObserver.unobserve(target);
        return subscriber.callBack != callBack;
       }
     : false;
   }
   return true;
  });
 };

 const observerCallBack: IntersectionObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
   const { target } = entry;
   observerSubscribers.forEach((subscribe) => {
    if (subscribe.target != target) return;
    subscribe.callBack(entry, observer);
   });
  });
 };
 // *
 const intersectionObserver = new IntersectionObserver(
  observerCallBack,
  observerOptions
 );
 // *
 return {
  intersectionObserver,
  addSubscriber,
  removeSubscriber,
 };
};

export default createIntersectionObserve;
