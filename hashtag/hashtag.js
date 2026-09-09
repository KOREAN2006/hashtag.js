function newHashtag(first, second) {
  let type;
  if(second === undefined) {
    if(typeof first === "string") {
      type = 2;
    } else if(typeof first === "function") {
      type = 3;
    } else {
      return;
    }
  } else if(typeof first === "string" && typeof second === "function") {
    type = 1;
  } else if(typeof first === "function" && typeof second === "string") {
    [ second, first ] = [ first, second ];
    type = 1;
  } else {
    return;
  }

  if(type !== 3) {
    if(first[0] === '#') {
      first = first.slice(1);
    }
    if(!/^[a-zA-Z0-9_-]+$/.test(first)) {
      return;
    }
    first = `.\\#${first}`;
  }

  switch(type) {
    case 1:
      return A(first, second);
    case 2:
      return B(first);
    case 3:
      return C(first);
  }
}

function A(hashtag, testFunction) {
  let value, bool;
  return input => {
    if(input === undefined) {
      return value;
    }
    bool = !!testFunction(input, value);
    if(bool) {
      value = input;
      document.querySelectorAll(hashtag).forEach(element => element.textContent = value);
    }
    return bool;
  };
}

function B(hashtag){
  let value;
  return input => {
    if(input === undefined) {
      return value;
    }
    value = input;
    document.querySelectorAll(hashtag).forEach(element => element.textContent = value);
    return true;
  };
}

function C(testFunction){
  let value, bool;
  return input => {
    if(input === undefined) {
      return value;
    }
    bool = !!testFunction(input, value);
    if(bool) {
      value = input;
    }
    return bool;
  };
}