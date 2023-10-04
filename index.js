function receivesAFunction(cb) {
    cb();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("this is a returned named function");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return () => console.log("this is a returned anonymous function");
  }