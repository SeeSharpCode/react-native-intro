import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainerStyle}>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Taylor_Swift_Red_Tour_5%2C_2013.jpg/220px-Taylor_Swift_Red_Tour_5%2C_2013.jpg' }} style={styles.thumbnailStyle} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{album.title}</Text>
                    <Text>{album.artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={styles.imageStyle} source={{ uri: 'http://cdn.smehost.net/elvisthemusiccom-haloprod/wp-content/uploads/2015/01/200-60HurtFt.jpg' }} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(album.url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
