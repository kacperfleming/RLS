import { useState } from 'react';
import axios from 'axios';

const useHttp = () => {
    const [data, set] = useState();

    return data;
}

export default useHttp;