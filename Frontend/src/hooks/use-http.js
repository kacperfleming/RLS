import { useState } from 'react';

const useHttp = () => {
    const [data, set] = useState();

    return data;
}

export default useHttp;