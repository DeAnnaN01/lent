// RecordsList.js

import React from 'react';
import  {RECORDS}  from './RECORDS';
import { ListItem, Avatar } from 'react-native-elements';
import { View } from 'react-native-web';


export const RecordsList = (RECORDS) => {

    RECORDS.map((record, index) => {
        return (
            <>
                <View>
                    <ListItem key={index} bottomDivider>
                        <Avatar source={{uri: 'record.itemPic'}} />
                        <ListItem.Content>
                            <ListItem.Title>
                                {record.item}
                            </ListItem.Title>
                            <ListItem.Subtitle>
                                {record.personName}
                                {record.date}
                            </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                </View>
            </>
        );
    }, [])
        
};

    


