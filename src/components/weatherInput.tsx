import React, { SyntheticEvent, useState, useCallback, useEffect } from 'react';
import { observer } from "mobx-react";
import { css, jsx } from '@emotion/react';
import TextField from '@mui/material/TextField';
import debounce from 'lodash/debounce';
import { useStores } from '../useStores';

export const WeatherInput = observer(
    () => {
        const {
            selectedSuggestionStore,
            inputListStore,
            weatherStore
        } = useStores();
        const [value, setValue] = useState<string>('');

        console.log('selectedSuggestionStore.data', selectedSuggestionStore.data);
        useEffect(() => {
            if (selectedSuggestionStore.data) {
                setValue(selectedSuggestionStore.data);
            }
        }, [selectedSuggestionStore.data])

        const handleSubmit = debounce((cityName: string) => {
            weatherStore.requestInQueue(cityName);
            inputListStore.add(cityName);
        }, 1000);

        const handleChange = useCallback((event: SyntheticEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            const cityname = event.currentTarget.value;

            setValue(cityname);
            handleSubmit(cityname);
        }, [])

        return (
            <div>
                <div>
                    {weatherStore.data}
                </div>
                <TextField
                    value={value}
                    onChange={handleChange} />
            </div>
        )
    }
);
