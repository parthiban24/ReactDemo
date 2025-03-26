export const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }
    console.log('Type:', action.type);
    console.log('payload:', action.payload);
    console.log('CurrentState:', store.getState());
    next(action);
    console.log('Next State:', store.getState());
}