import { useCallback } from 'react';
import { useState } from 'react'

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  // useCallback 사용이유 정리하기
  const onChange = useCallback(e => {
    const { value } = e.target;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  }, []);
  const reset = useCallback(() => setValue(initialValue), [initialValue])

  // return 할 때 {}가 아니라 []로 해야함
  return [value, onChange, reset]
}

export default useInput