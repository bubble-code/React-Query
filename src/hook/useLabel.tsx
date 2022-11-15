import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../api/githubApi';
import { Label } from '../issues/interfaces/label';

const labelQuery = async (): Promise<Label[]> => {
    const { data } = await githubApi.get<Label[]>('/labels', {
        headers: {
            Authorization: null
        }
    });
    let sortData = data?.sort((a, b) => {
        const aa = a.name.toLowerCase();
        const bb = b.name.toLowerCase();
        if (aa < bb) {
            return -1;
        }
        if (aa > bb) {
            return 1;
        }
        return 0;
    });
    return sortData;
}


export const useLabel = () => {
    const getLabelQuery = useQuery(
        ['labels'],
        labelQuery,
        {
            refetchOnWindowFocus: false,
        }
    )
    return { getLabelQuery };
};


