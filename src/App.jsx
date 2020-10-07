import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (<Switch>
<Route exact path = '/'>
    Hi
</Route>
<Route exact path = '/home'>
    how are you 
</Route>
    </Switch>);
};

export default App;