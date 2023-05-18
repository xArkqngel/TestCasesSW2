//check if an interface adheres to the interface definition

function implementsInterface(obj, interfaceObj) {
    for (let method in interfaceObj) {
      if (typeof obj[method] !== 'function') {
        return false;
      }
    }
    return true;
  }

module.exports = implementsInterface;