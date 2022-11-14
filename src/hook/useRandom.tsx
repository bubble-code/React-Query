import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export const useRandom = () => {
    const [loading, setLoading] = useState(false)

    function reLoad() {
        setLoading(true)
        setTimeout(async () => {
            await query.refetch()
            setLoading(false)
        }, 1000)
    }

    const getRandomNumber = async (): Promise<number> => {
        const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new')
        return parseInt(await response.text())
    }

    const query = useQuery(
        ['randomNumber'],
        getRandomNumber
    )

    return { data: query.data, error: query.error, reLoad, loading }
}

export default useRandom