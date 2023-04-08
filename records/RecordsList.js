// RecordsList.js

import React from 'react';
import { RECORDS } from './RECORDS';
import { ListItem, Avatar } from 'react-native-elements';


function RecordsList(RECORDS) {
    <>
        <View>
            {
                RECORDS.map((record, index) =>(
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
                ) )
            }
        </View>
    </>
}

    


export default RecordsList;