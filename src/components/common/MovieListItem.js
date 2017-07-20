import React from 'react';
import { Image, Dimensions } from 'react-native';
import { Button, Icon, Card, CardItem, Text, Thumbnail, Left, Body } from 'native-base';

const logo = 'http://www.logo.com.tr/img/250x250.png';
const cardImage = 'http://www.mersintanitim.com/logo/1.jpg';
const deviceWidth = Dimensions.get('window').width;

const MovieListItem = ({ movie }) => {
  let url= null;
    if (movie.poster_path) {
       url = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
    } else {
       url = 'http://www.barcouncilofindia.org/wp-content/uploads/2010/07/no-photo.jpg';
    }
    return (
        <Card>
            <CardItem bordered>
              <Left>
                <Thumbnail source={{ uri: url }} />
                <Body>
                  <Text>{movie.name ? movie.name : movie.title}</Text>
                  <Text note>{movie.release_date && `Date: ${movie.release_date}`}</Text>
                  <Text note>Average Rating: {movie.vote_average}</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Text>
                {movie.overview ? movie.overview : 'No overview to show.Sorry.'}
              </Text>

              </Body>
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon name="md-share-alt" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
    );
}

export default MovieListItem;
