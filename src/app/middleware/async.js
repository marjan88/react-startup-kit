export default function({ dispatch }) {
        
        return next => action => {
            console.log('middleware', action);
            next(action);
        }
        
}