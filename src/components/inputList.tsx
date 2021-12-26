import React, { useCallback, SyntheticEvent } from 'react';
import { observer } from "mobx-react";
import { useStores } from '../useStores';

export const InputList = observer(() => {
    const { inputListStore, selectedSuggestionStore } = useStores();
    
    const handleClick = useCallback((event: SyntheticEvent<HTMLDivElement>) => {
        const { value } = event.currentTarget.dataset;

        if (value) {
            selectedSuggestionStore.set(value);
        }
    }, []);

    return (
        <div>
            { inputListStore.list.map((item) => (
                <div data-value={item} onClick={ handleClick }>
                    {item}
                </div>
            )) }
        </div>
    );
});
