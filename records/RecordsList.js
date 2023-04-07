// RecordsList.js

import React from 'react';
import { Text } from 'react-native';
import { useState } from 'react';
import { RECORDS } from './RECORDS';


const RecordsList = {
    [records, setRecords] = useState(RECORDS);

    if (records) {
        records.map((record, index) => {
            return (
                <Text 
                    key={index}
                    record={record}
                >
                    {record}
                </Text>
            );
        })
    }
};

export default RecordsList;